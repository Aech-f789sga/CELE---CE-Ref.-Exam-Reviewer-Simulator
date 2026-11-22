/**
 * Live rooms — the shared exam two or more people can sit at once.
 *
 * This module is the **rules of the game**, not the transport. It holds no
 * Firebase import and touches no DOM, for the same reason `presence.ts` and
 * `grading.ts` do: the parts that decide who wins are the parts most worth
 * being able to exercise directly, and they should not need a network to run.
 * `services/liveRooms.ts` owns the I/O and imports from here.
 *
 * ## The two modes differ in what "the answer" means
 *
 * In **Versus** each player has their own paper, answers it alone, and is
 * scored alone. The only thing shared is the item list and the clock, so the
 * comparison at the end is between two people who sat the same questions.
 *
 * In **Co-op** there is one paper and one score. Players scatter: anyone may
 * answer any item, at any time, and the item's answer is whatever the most
 * people picked. That means an item can be answered *twice* by two people and
 * the majority decides, which is the whole point — a team that splits up
 * covers more ground, and a team that disagrees gets the answer it deserves.
 *
 * ## Why a majority needs a "no answer" outcome
 *
 * Two players, one picks A and one picks B. There is no majority, and inventing
 * one — first vote wins, host breaks ties — would silently score a coin toss as
 * a decision. So a tie resolves to **no answer**, which is excluded exactly as
 * an unanswered item is. A three-way tie on a four-option item is the same
 * case. The alternative was worse: any tie-break rule rewards whoever clicked
 * last, which is not what "the choice with the most picks" means.
 *
 * ## Room codes
 *
 * Four characters, each drawn from a deliberately reduced alphabet, and never
 * repeated within a code. The reductions are all about being *said out loud* —
 * a code gets read over a voice call or typed from a screenshot, so `0`/`O`,
 * `1`/`I`/`L`, `5`/`S` and `2`/`Z` are excluded rather than tolerated.
 *
 * Every code also carries at least one letter and one digit, which is what
 * "mixed numbers and texts" asks for: an all-digit code reads as a phone
 * number, and an all-letter one reads as a word.
 */
import type { ExamMonth, Question, ReferenceSource, SubjectArea } from '../types/exam';

/* ==========================================================================
   IDENTITY
   ========================================================================== */

/** Characters a code may use. See the header note on the omissions. */
const CODE_LETTERS = 'ABCDEFGHJKMNPQRSTUVWXYZ';
const CODE_DIGITS = '346789';

/** Four characters: 23 letters + 6 digits, all distinct within a code. */
export const ROOM_CODE_LENGTH = 4;

/** What the join field accepts, so a typo is caught before a lookup. */
export function isValidRoomCode(code: string): boolean {
  if (code.length !== ROOM_CODE_LENGTH) return false;
  const pool = CODE_LETTERS + CODE_DIGITS;
  const seen = new Set<string>();
  for (const ch of code.toUpperCase()) {
    if (!pool.includes(ch)) return false;
    if (seen.has(ch)) return false;
    seen.add(ch);
  }
  return true;
}

/**
 * A fresh code: four distinct characters, at least one letter and one digit.
 *
 * `rng` is injectable so the "at least one of each" guarantee can be checked
 * over thousands of draws without relying on a lucky run.
 */
export function makeRoomCode(rng: () => number = Math.random): string {
  const pick = (alphabet: string, taken: Set<string>): string => {
    for (let attempt = 0; attempt < 64; attempt++) {
      const ch = alphabet[Math.floor(rng() * alphabet.length)];
      if (ch && !taken.has(ch)) return ch;
    }
    // Exhausted by a hostile rng; fall back to the first unused character.
    const ch = [...alphabet].find((c) => !taken.has(c));
    return ch ?? alphabet[0];
  };

  const taken = new Set<string>();
  // One letter and one digit first, so the mix is guaranteed rather than
  // hoped for; the remaining two are drawn from everything.
  taken.add(pick(CODE_LETTERS, taken));
  taken.add(pick(CODE_DIGITS, taken));
  const all = CODE_LETTERS + CODE_DIGITS;
  while (taken.size < ROOM_CODE_LENGTH) taken.add(pick(all, taken));

  // Shuffle, or every code would read letter-digit-X-Y and the pattern would
  // narrow the search space for anyone trying to guess their way in.
  const chars = [...taken];
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

/* ==========================================================================
   THE ROOM
   ========================================================================== */

export type RoomMode = 'versus' | 'coop';
export type RoomVisibility = 'public' | 'private';

/**
 * Where a room is in its life.
 *
 * `lobby` is the only phase in which players may come and go freely; `live` is
 * the paper; `finished` is the results screen, kept open long enough for the
 * reactions to play out.
 */
export type RoomPhase = 'lobby' | 'live' | 'finished';

/** What the host chose to sit: a topic drill, or a board sitting. */
export interface RoomConfig {
  /** A drill draws from topic banks; a sitting is one board paper. */
  kind: 'drill' | 'paper';
  /** Drill only: which topics, and how many items from each. */
  topicIds: string[];
  /** Drill only: items per topic, applied to every selected topic. */
  perTopic: number;
  /** Sitting only: which paper. */
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  source: ReferenceSource;
  /**
   * "Surprise me". For a drill this randomises the topics as well as the draw;
   * for a sitting it can only randomise which paper, because a paper is one
   * fixed set of items. The distinction is why this flag is read differently by
   * the two kinds rather than meaning one thing everywhere.
   */
  surprise: boolean;
  /** Items in the paper, once the draw is done. */
  itemCount: number;
  /** Seconds on the shared clock. Zero means untimed. */
  durationSeconds: number;
}

export interface LivePlayer {
  uid: string;
  name: string;
  photoURL?: string;
  /** Present on the host's own document; decides who may start the room. */
  isHost: boolean;
  joinedAt: string;
  /** Heartbeat, so a closed tab can be told from a slow one. */
  lastSeenAt: string;
  /** Set when this player submitted, so the host knows who is still working. */
  finishedAt?: string;
  /** Co-op: this player's own correct count, for the "who carried" readout. */
  correct?: number;
  /** Co-op: items this player personally answered. */
  answeredCount?: number;
}

export interface LiveRoom {
  /** The document id, which is also the code people type. */
  code: string;
  hostId: string;
  hostName: string;
  visibility: RoomVisibility;
  mode: RoomMode;
  phase: RoomPhase;
  config: RoomConfig;
  /**
   * The paper, fixed when the host starts. Storing ids rather than items keeps
   * the document small and guarantees every client renders the same questions
   * in the same order — the banks ship in the bundle, so an id is enough.
   */
  questionIds: string[];
  createdAt: string;
  startedAt?: string;
  /** Epoch ms the clock runs out, so a late joiner computes the same deadline. */
  endsAt?: number;
  finishedAt?: string;
}

/** `answers/{questionId}` → `{ [uid]: 'A' | 'B' | 'C' | 'D' }`. */
export type AnswerVotes = Record<string, Record<string, string>>;

/** A GIF reaction, kept short-lived: they are decoration, not a transcript. */
export interface LiveReaction {
  id: string;
  uid: string;
  name: string;
  /** Provider gif id, or a key into the built-in pack. */
  gifId: string;
  /** Full URL when the provider gave one; absent for the built-in pack. */
  url?: string;
  /** Shown above whose profile card it belongs to. */
  at: string;
}

/* ==========================================================================
   CO-OP TALLY
   ========================================================================== */

export interface Tally {
  /** The winning label, or `null` when there is no majority. */
  label: string | null;
  /** How many picked the winner. */
  count: number;
  /** Total votes cast on this item. */
  total: number;
  /** True when two or more labels tie for the lead — see the header note. */
  tie: boolean;
}

/**
 * The co-op answer for one item: the most-picked label, or none.
 *
 * `null` covers both "nobody answered" and "they split evenly". They are the
 * same outcome for scoring, but the results screen distinguishes them, which is
 * why `total` and `tie` come back too.
 */
export function tallyVotes(votes: Record<string, string> | undefined): Tally {
  const counts = new Map<string, number>();
  let total = 0;
  for (const label of Object.values(votes ?? {})) {
    if (typeof label !== 'string' || !label) continue;
    counts.set(label, (counts.get(label) ?? 0) + 1);
    total++;
  }
  if (counts.size === 0) return { label: null, count: 0, total: 0, tie: false };

  let best = 0;
  for (const n of counts.values()) best = Math.max(best, n);
  const leaders = [...counts.entries()].filter(([, n]) => n === best);

  if (leaders.length > 1) return { label: null, count: best, total, tie: true };
  return { label: leaders[0][0], count: best, total, tie: false };
}

/** The co-op team's answer map, in the shape `summariseScore` expects. */
export function coopAnswers(
  questions: Pick<Question, 'id'>[],
  votes: AnswerVotes
): Record<string, string | undefined> {
  const out: Record<string, string | undefined> = {};
  for (const q of questions) {
    const tally = tallyVotes(votes[q.id]);
    if (tally.label) out[q.id] = tally.label;
  }
  return out;
}

/* ==========================================================================
   STANDINGS
   ========================================================================== */

export interface Standing {
  uid: string;
  name: string;
  photoURL?: string;
  isHost: boolean;
  correct: number;
  answered: number;
  /** Percentage of scorable items, or `null` when nothing could be graded. */
  percentage: number | null;
  rank: number;
  /** Co-op only: items this player personally got right, as a share. */
  contribution?: number;
}

/**
 * Rank players by correct answers.
 *
 * Ties share a rank rather than being separated arbitrarily — two people on
 * 8/10 both placed first, and there is no tiebreaker that would not be made up.
 * `rank` is therefore not an index: `[1, 1, 3]` is the intended shape.
 */
export function rankStandings(rows: Omit<Standing, 'rank'>[]): Standing[] {
  const sorted = [...rows].sort((a, b) => {
    if (b.correct !== a.correct) return b.correct - a.correct;
    // Fewer items answered for the same score is the better showing: same
    // result in less of the paper.
    if (a.answered !== b.answered) return a.answered - b.answered;
    return a.name.localeCompare(b.name);
  });

  let rank = 1;
  return sorted.map((row, i) => {
    if (i > 0 && row.correct !== sorted[i - 1].correct) rank = i + 1;
    return { ...row, rank };
  });
}

/* ==========================================================================
   CELEBRATION BANDS
   ========================================================================== */

/**
 * The four bands the co-op celebration is cut into.
 *
 * The thresholds are the learner's own: 100 is a clean sweep and gets the loud
 * treatment, 90+ is a strong pass, 70–89 is "solid but not done", and below 70
 * is the one that needs encouragement rather than a laugh at their expense.
 * `percentage === null` — a paper with no keys — is `unknown`, and gets a
 * neutral card, because a percentage that does not exist cannot be banded.
 */
export type ScoreBand = 'perfect' | 'great' | 'ok' | 'low' | 'unknown';

export function scoreBand(percentage: number | null): ScoreBand {
  if (percentage === null) return 'unknown';
  if (percentage >= 100) return 'perfect';
  if (percentage >= 90) return 'great';
  if (percentage >= 70) return 'ok';
  return 'low';
}

/* ==========================================================================
   HOUSEKEEPING
   ========================================================================== */

/**
 * A room nobody is looking at any more.
 *
 * Rooms are abandoned rather than deleted — a closed tab leaves no farewell —
 * so the public list filters on this and the host's browser deletes stale rooms
 * it created. Twenty minutes is generous enough for the results screen and the
 * reactions on it, and short enough that the public list stays honest.
 */
export const ROOM_STALE_MS = 20 * 60 * 1000;

/** A player whose heartbeat is older than this is shown as gone, not removed. */
export const PLAYER_STALE_MS = 90 * 1000;

export function isRoomStale(room: Pick<LiveRoom, 'finishedAt' | 'startedAt' | 'createdAt'>, now = Date.now()): boolean {
  const anchor = room.finishedAt ?? room.startedAt ?? room.createdAt;
  const at = Date.parse(anchor);
  if (Number.isNaN(at)) return true;
  return now - at > ROOM_STALE_MS;
}

export function isPlayerStale(player: Pick<LivePlayer, 'lastSeenAt'>, now = Date.now()): boolean {
  const at = Date.parse(player.lastSeenAt);
  if (Number.isNaN(at)) return true;
  return now - at > PLAYER_STALE_MS;
}

/** Seconds left on the shared clock, never negative. Zero means untimed. */
export function secondsRemaining(room: Pick<LiveRoom, 'endsAt'>, now = Date.now()): number {
  if (!room.endsAt) return 0;
  return Math.max(0, Math.ceil((room.endsAt - now) / 1000));
}

/** What the room is called in a list: a drill names topics, a paper names a sitting. */
export function roomTitle(room: Pick<LiveRoom, 'config' | 'mode'>): string {
  const c = room.config;
  const mode = room.mode === 'coop' ? 'Co-op' : 'Versus';
  if (c.kind === 'drill') {
    if (c.surprise) return `${mode} · Surprise drill`;
    return `${mode} · ${c.topicIds.length} topic${c.topicIds.length === 1 ? '' : 's'}`;
  }
  const source = c.source === 'Gillesania' ? '' : ` · ${c.source}`;
  if (c.surprise) return `${mode} · Surprise ${c.subject}${source}`;
  return `${mode} · ${c.subject} ${c.month} ${c.year}${source}`;
}
