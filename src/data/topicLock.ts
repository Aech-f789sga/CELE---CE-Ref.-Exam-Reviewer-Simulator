/**
 * Access control for the "By topics" exam type.
 *
 * Default is **locked**: the mode is visible to the administrator and hidden
 * from everyone else. The admin can flip it open from the admin panel, and the
 * flag lives in Firestore rather than localStorage so one switch reaches every
 * device instead of only the browser it was flipped in.
 *
 * Storage is `app_config/topic_exams`. `firestore.rules` grants it
 * `allow read: if true` (the client has to know whether to show the entry
 * *before* anyone signs in) and `allow write: if isAdmin()`. So the client can
 * be trusted to *read* the flag but never to assert it — a tampered client
 * cannot unlock the mode for itself, it can only lie to itself about a value
 * that grants it nothing but UI. That rule has to be deployed for any of this
 * to work: without it the default-deny catch-all refuses the read, and every
 * caller falls back to locked.
 *
 * That last point is the design constraint worth stating plainly: this gates
 * *visibility*, not content. The topic questions ship in the bundle, so a
 * determined user can read them regardless. If the questions ever need to be
 * genuinely secret, they have to move behind a rule-gated read — which is a
 * different change, and this module's `readTopicLock()` is where that would
 * start.
 */
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

const COLLECTION = 'app_config';
const DOC_ID = 'topic_exams';

export interface TopicLock {
  /** True when everyone may open the mode. */
  unlocked: boolean;
  /** Where the value came from, so the UI can be honest about staleness. */
  source: 'firestore' | 'fallback';
}

let cache: TopicLock | null = null;
let inflight: Promise<TopicLock> | null = null;

/** Locked unless the project says otherwise. */
const LOCKED: TopicLock = { unlocked: false, source: 'fallback' };

const listeners = new Set<(lock: TopicLock) => void>();
let unsubscribeSnapshot: (() => void) | null = null;

/** Set the cache and tell everyone who is listening. */
function publish(lock: TopicLock): void {
  cache = lock;
  for (const fn of listeners) fn(lock);
}

function fromSnapshot(data: { unlocked?: unknown } | undefined): TopicLock {
  return { unlocked: data?.unlocked === true, source: 'firestore' };
}

/**
 * Follow the flag live.
 *
 * The admin's switch has to reach other people's screens, not just the browser
 * it was flipped in, so this holds one shared snapshot listener for the whole
 * tab and fans it out. Returns an unsubscribe; the listener is dropped when the
 * last subscriber leaves.
 *
 * A failed listener keeps the last known value rather than opening the mode --
 * same rule as `readTopicLock`. If there is no last known value it resolves to
 * *locked* instead of staying pending: a denied or offline read must give the
 * switch a definite position, because a spinner is not a safe state -- it
 * leaves the admin unable to act and unable to see why.
 */
export function watchTopicLock(onChange: (lock: TopicLock) => void): () => void {
  listeners.add(onChange);
  if (cache) onChange(cache);
  if (!unsubscribeSnapshot) {
    unsubscribeSnapshot = onSnapshot(
      doc(db, COLLECTION, DOC_ID),
      (snap) => publish(fromSnapshot(snap.data() as { unlocked?: unknown } | undefined)),
      () => {
        // Denied or offline. Firestore ends the listener on error, so clear the
        // handle as well and let the next subscriber try again.
        unsubscribeSnapshot = null;
        if (!cache) publish(LOCKED);
      }
    );
  }
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && unsubscribeSnapshot) {
      unsubscribeSnapshot();
      unsubscribeSnapshot = null;
    }
  };
}

/**
 * Read the flag. Cached after the first successful read; failures fall back to
 * *locked*, because a network error must never be the thing that opens a
 * restricted mode.
 */
export async function readTopicLock(force = false): Promise<TopicLock> {
  if (!force && cache) return cache;
  if (inflight) return inflight;
  inflight = (async () => {
    try {
      const snap = await getDoc(doc(db, COLLECTION, DOC_ID));
      publish(fromSnapshot(snap.data() as { unlocked?: unknown } | undefined));
    } catch {
      publish(cache ?? LOCKED);
    } finally {
      inflight = null;
    }
    return cache!;
  })();
  return inflight;
}

/**
 * Admin only. Authorisation lives in the rules (`allow write: if isAdmin()`),
 * not here — the caller already knows whether the signed-in user is the admin
 * via `useAuth()`, and a client-side check would be decoration.
 *
 * Publishes immediately so the switch feels instant; the snapshot listener
 * then confirms the same value to every other client.
 */
export async function setTopicUnlocked(unlocked: boolean): Promise<void> {
  await setDoc(doc(db, COLLECTION, DOC_ID), { unlocked }, { merge: true });
  publish({ unlocked, source: 'firestore' });
}

/** Drop the cache so the next read hits the network. */
export function forgetTopicLock(): void {
  cache = null;
}
