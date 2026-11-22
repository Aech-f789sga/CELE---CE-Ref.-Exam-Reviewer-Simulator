/**
 * Live-room transport — every Firestore call the multiplayer mode makes.
 *
 * Kept out of `firebase.ts` on purpose. That file is the app's single I/O
 * surface for the things every screen touches (auth, attempts, messages,
 * presence); a self-contained game with its own collections, its own document
 * shape and its own lifecycle is easier to read as one file than as another
 * six hundred lines appended to that one. It imports `db` from there, so there
 * is still exactly one Firestore instance.
 *
 * ## Why the room document is the code
 *
 * The document id *is* the four-character code. That makes "join by code" a
 * single `getDoc`, with no index and no query, and it makes a code collision
 * impossible to paper over: two rooms cannot share an id, so a second create
 * with the same code fails rather than silently merging two games.
 *
 * Creation therefore runs in a **transaction**: read the id, and only write if
 * it is absent. A plain `setDoc` would overwrite whatever room was already
 * there, which is the one failure mode that would ruin someone else's game.
 *
 * ## Why the listeners are deliberately few
 *
 * Spark-plan Firestore bills per document read, and a snapshot listener charges
 * a read for every changed document it delivers. So the room subscribes to
 * exactly three things — the room, the players, the answers — and reactions get
 * a fourth, capped query. Answering does not touch the room document, so the
 * expensive config payload is read once and then only when the phase changes.
 */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  query,
  runTransaction,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from './firebase';
import {
  isRoomStale,
  makeRoomCode,
  type AnswerVotes,
  type LivePlayer,
  type LiveReaction,
  type LiveRoom,
  type RoomConfig,
  type RoomMode,
  type RoomVisibility,
} from '../data/liveRoom';

const ROOMS = 'liveRooms';

const roomRef = (code: string) => doc(db, ROOMS, code.toUpperCase());
const playersRef = (code: string) => collection(db, ROOMS, code.toUpperCase(), 'players');
const playerRef = (code: string, uid: string) => doc(db, ROOMS, code.toUpperCase(), 'players', uid);
const answersRef = (code: string) => collection(db, ROOMS, code.toUpperCase(), 'answers');
const answerRef = (code: string, questionId: string) =>
  doc(db, ROOMS, code.toUpperCase(), 'answers', questionId);
const reactionsRef = (code: string) => collection(db, ROOMS, code.toUpperCase(), 'reactions');

/** A short, human-readable failure the UI can show without inspecting codes. */
export class RoomError extends Error {
  constructor(readonly code: string, message: string) {
    super(message);
    this.name = 'RoomError';
  }
}

function asRoom(code: string, data: Record<string, unknown> | undefined): LiveRoom | null {
  if (!data) return null;
  return { ...(data as unknown as LiveRoom), code };
}

/* ==========================================================================
   CREATE / JOIN / LEAVE
   ========================================================================== */

export interface CreateRoomArgs {
  config: RoomConfig;
  mode: RoomMode;
  visibility: RoomVisibility;
  host: { uid: string; name: string; photoURL?: string };
}

/**
 * Create a room and its host's player document.
 *
 * Retries a handful of codes before giving up. With 755k possible codes a
 * collision is rare, but "rare" is not "never", and the retry is five lines.
 */
export async function createRoom(args: CreateRoomArgs): Promise<string> {
  const now = new Date().toISOString();

  for (let attempt = 0; attempt < 8; attempt++) {
    const code = makeRoomCode();
    const ref = roomRef(code);
    const existing = await getDoc(ref);
    if (existing.exists()) continue;

    const room: LiveRoom = {
      code,
      hostId: args.host.uid,
      hostName: args.host.name,
      visibility: args.visibility,
      mode: args.mode,
      phase: 'lobby',
      config: args.config,
      questionIds: [],
      createdAt: now,
    };

    try {
      // Transaction rather than setDoc: between the read above and the write
      // here another client could have taken the code, and overwriting their
      // room is the one outcome worth paying for a transaction to prevent.
      await runTransaction(db, async (tx) => {
        const snap = await tx.get(ref);
        if (snap.exists()) throw new RoomError('code-taken', 'That code was just taken.');
        tx.set(ref, room);
      });
    } catch (e) {
      if (e instanceof RoomError) continue;
      throw e;
    }

    await setDoc(playerRef(code, args.host.uid), {
      uid: args.host.uid,
      name: args.host.name,
      photoURL: args.host.photoURL ?? '',
      isHost: true,
      joinedAt: now,
      lastSeenAt: now,
    } satisfies LivePlayer);

    return code;
  }

  throw new RoomError('no-code', 'Could not find a free room code. Try again.');
}

/** Read a room by code, or `null` if it does not exist. */
export async function fetchRoom(code: string): Promise<LiveRoom | null> {
  const snap = await getDoc(roomRef(code));
  return asRoom(code, snap.data());
}

/**
 * Add the signed-in player to a room.
 *
 * `merge` so a rejoin (a refresh, a second tab) keeps the fields the room has
 * already written — a rejoin must not reset a score or a `finishedAt`.
 */
export async function joinRoom(
  code: string,
  player: { uid: string; name: string; photoURL?: string }
): Promise<LiveRoom> {
  const room = await fetchRoom(code);
  if (!room) throw new RoomError('not-found', 'No room with that code.');
  if (room.phase !== 'lobby') {
    throw new RoomError('already-started', 'That room has already started.');
  }

  const now = new Date().toISOString();
  await setDoc(
    playerRef(code, player.uid),
    {
      uid: player.uid,
      name: player.name,
      photoURL: player.photoURL ?? '',
      isHost: room.hostId === player.uid,
      joinedAt: now,
      lastSeenAt: now,
    } satisfies LivePlayer,
    { merge: true }
  );

  return room;
}

/**
 * Remove a player. The host leaving the lobby closes the room.
 *
 * Closing is `phase: 'finished'` rather than a delete: the rules grant no
 * delete on a room, because without `request.auth` there is no way to prove who
 * owns one and an unconditional delete would let any client erase anyone's
 * game. Marking it finished achieves the same thing — the room drops out of the
 * public list, which filters on `phase` — without the destructive permission.
 *
 * A host who leaves mid-game does **not** close it: the paper and the clock are
 * already on the room document, so the remaining players can finish without
 * them. Ending everyone's sitting because one tab closed would be worse than
 * losing the host's own result.
 */
export async function leaveRoom(code: string, uid: string, isHost: boolean, phase: string): Promise<void> {
  if (isHost && phase === 'lobby') {
    await updateDoc(roomRef(code), {
      phase: 'finished',
      finishedAt: new Date().toISOString(),
    });
    return;
  }
  await deleteDoc(playerRef(code, uid));
}

/* ==========================================================================
   SUBSCRIPTIONS
   ========================================================================== */

export function subscribeRoom(code: string, cb: (room: LiveRoom | null) => void): () => void {
  return onSnapshot(
    roomRef(code),
    (snap) => cb(asRoom(code, snap.data())),
    (err) => {
      console.error('Live room subscription failed:', err);
      cb(null);
    }
  );
}

export function subscribePlayers(code: string, cb: (players: LivePlayer[]) => void): () => void {
  return onSnapshot(
    playersRef(code),
    (snap) => {
      const list: LivePlayer[] = [];
      snap.forEach((d) => list.push(d.data() as LivePlayer));
      list.sort((a, b) => (a.joinedAt || '').localeCompare(b.joinedAt || ''));
      cb(list);
    },
    (err) => {
      console.error('Live players subscription failed:', err);
      cb([]);
    }
  );
}

/** Every item's votes, as `{ questionId: { uid: label } }`. */
export function subscribeAnswers(code: string, cb: (votes: AnswerVotes) => void): () => void {
  return onSnapshot(
    answersRef(code),
    (snap) => {
      const out: AnswerVotes = {};
      snap.forEach((d) => {
        out[d.id] = (d.data() as Record<string, string>) ?? {};
      });
      cb(out);
    },
    (err) => {
      console.error('Live answers subscription failed:', err);
      cb({});
    }
  );
}

/**
 * The most recent reactions only.
 *
 * Reactions are ephemeral decoration, so the query is capped rather than
 * paginated: nothing older than the cap is worth rendering, and an unbounded
 * listener on a chatty room would be the single most expensive thing here.
 */
export function subscribeReactions(code: string, cb: (reactions: LiveReaction[]) => void): () => void {
  const q = query(reactionsRef(code), limit(40));
  return onSnapshot(
    q,
    (snap) => {
      const list: LiveReaction[] = [];
      snap.forEach((d) => list.push({ ...(d.data() as LiveReaction), id: d.id }));
      list.sort((a, b) => (a.at || '').localeCompare(b.at || ''));
      cb(list);
    },
    (err) => {
      console.error('Live reactions subscription failed:', err);
      cb([]);
    }
  );
}

/* ==========================================================================
   GAME ACTIONS
   ========================================================================== */

/**
 * Start the paper for everyone.
 *
 * The host fixes `questionIds` and the deadline **on the room document**, in one
 * write, so every client derives the same paper and the same clock from the
 * same fact. Computing either locally would let two players disagree about
 * what they are sitting.
 */
export async function startRoom(
  code: string,
  questionIds: string[],
  durationSeconds: number
): Promise<void> {
  const now = Date.now();
  await updateDoc(roomRef(code), {
    phase: 'live',
    questionIds,
    startedAt: new Date(now).toISOString(),
    endsAt: durationSeconds > 0 ? now + durationSeconds * 1000 : 0,
  });
}

/** Record one player's answer to one item. Last write wins, per player. */
export async function castVote(
  code: string,
  questionId: string,
  uid: string,
  label: string
): Promise<void> {
  await setDoc(answerRef(code, questionId), { [uid]: label }, { merge: true });
}

/** A player has submitted; the host reads these to know who is still working. */
export async function markFinished(
  code: string,
  uid: string,
  patch: Pick<LivePlayer, 'correct' | 'answeredCount'>
): Promise<void> {
  await setDoc(
    playerRef(code, uid),
    { ...patch, finishedAt: new Date().toISOString() },
    { merge: true }
  );
}

/** The host closes the room once everyone is done, or the clock has run out. */
export async function finishRoom(code: string): Promise<void> {
  await updateDoc(roomRef(code), {
    phase: 'finished',
    finishedAt: new Date().toISOString(),
  });
}

/** Keeps a player out of the "gone" list. Cheap: one field, one document. */
export async function heartbeat(code: string, uid: string): Promise<void> {
  await updateDoc(playerRef(code, uid), { lastSeenAt: new Date().toISOString() });
}

export async function sendReaction(
  code: string,
  reaction: Omit<LiveReaction, 'id'>
): Promise<void> {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  await setDoc(doc(reactionsRef(code), id), reaction);
}

/* ==========================================================================
   DISCOVERY
   ========================================================================== */

/**
 * Public rooms waiting for players.
 *
 * The query is filtered on `visibility` because the security rule is written in
 * terms of it — Firestore will not run a `list` the rules cannot prove, so a
 * query that omitted this filter would be rejected outright rather than
 * returning a subset.
 *
 * Stale rooms are dropped here rather than swept server-side. A room whose host
 * closed the tab is still `phase: 'lobby'` and still public, so without this it
 * would sit in the list for ever advertising a game nobody is in.
 */
export async function listPublicRooms(): Promise<LiveRoom[]> {
  const q = query(
    collection(db, ROOMS),
    where('visibility', '==', 'public'),
    where('phase', '==', 'lobby'),
    limit(20)
  );
  const snap = await getDocs(q);
  const now = Date.now();
  const rooms: LiveRoom[] = [];
  snap.forEach((d) => {
    const room = asRoom(d.id, d.data());
    if (room && !isRoomStale(room, now)) rooms.push(room);
  });
  return rooms.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
}

/**
 * Deliberately removed: sweeping stale rooms by host.
 *
 * That sweep queried `where('hostId', '==', uid)`, which only worked while the
 * rules could prove the query — i.e. while they required `request.auth`. Now
 * that they trust a client-supplied identity, the query is unprovable and would
 * be refused, and the alternative (a delete permission with no ownership check)
 * would let any client erase anyone's room.
 *
 * So abandoned rooms are simply not cleaned up. They are invisible: the public
 * browser drops anything past `ROOM_STALE_MS`, and a private room is only
 * reachable by a code nobody is typing any more. A finished room's host closes
 * it on the way out; a host who closes the tab leaves a document behind, which
 * is a smaller problem than a permission that can destroy other people's games.
 */
