/**
 * Presence and analytics policy.
 *
 * Deliberately free of Firebase imports: these are the rules that decide who
 * counts as online and whose activity is recorded, and keeping them pure means
 * they can be exercised directly (see the checks in the task write-up) instead
 * of only through a live Firestore round-trip. `firebase.ts` owns the I/O and
 * re-exports everything here, so callers still import from one place.
 *
 * Every predicate takes an optional `now` so a caller can reason about a stored
 * document against the moment it was written, and so the rules can be tested
 * without waiting thirty minutes.
 */

/** The single account that administers the platform. */
export const DESIGNATED_ADMIN_EMAIL = 'derrickdarrack@gmail.com';

/**
 * A user counts as online while their heartbeat is younger than this. The
 * tracker pings every 25 s, so 2 minutes tolerates a couple of missed beats
 * (a backgrounded tab, a slow network) without flapping.
 */
export const PRESENCE_ONLINE_WINDOW_MS = 2 * 60 * 1000;

/**
 * After this long with no keyboard, pointer, scroll or touch input the user is
 * marked offline: the presence document is rewritten with `isOnline: false`,
 * they drop out of "online now", and the time they spend idle is not added to
 * any feature's duration.
 *
 * Fifteen minutes is the window an examinee gets to sit still -- reading a long
 * solution, working a problem on paper -- before the roster stops claiming they
 * are at the keyboard. Any real input brings them straight back.
 */
export const PRESENCE_IDLE_TIMEOUT_MINUTES = 15;
export const PRESENCE_IDLE_TIMEOUT_MS = PRESENCE_IDLE_TIMEOUT_MINUTES * 60 * 1000;

export interface UserPresence {
  userId: string;
  email: string;
  displayName: string;
  lastSeenAt: string;
  currentFeature: string;
  isOnline: boolean;
  userAgent?: string;
  /**
   * True once the user has produced no input for PRESENCE_IDLE_TIMEOUT_MS.
   * An idle session is written with `isOnline: false`, so this flag is what
   * still distinguishes "sitting there doing nothing" from "closed the tab".
   */
  idle?: boolean;
  /** Last real input (pointer, key, scroll) rather than the last heartbeat. */
  lastActivityAt?: string;
}

/** The three states the roster and the admin table render. */
export type PresenceState = 'online' | 'idle' | 'offline';

/**
 * Checks whether an email address is the designated system administrator.
 */
export function isUserAdmin(email?: string | null): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === DESIGNATED_ADMIN_EMAIL.toLowerCase();
}

/**
 * Whether an account is left out of analytics altogether.
 *
 * The designated administrator uses the panel that consumes this data, so
 * counting their own browsing would inflate every feature ranking and make the
 * "time spent" totals describe the observer rather than the examinees.
 */
export function isAnalyticsExcluded(email?: string | null): boolean {
  return isUserAdmin(email);
}

/**
 * Whether a user is online right now.
 *
 * Three conditions must hold: the heartbeat is fresh, the user has not gone
 * idle, and their last real input is inside the idle window. An idle session is
 * deliberately reported as not-online so it drops out of the "online now" counts
 * and the engagement totals without needing the tab closed.
 *
 * The activity check is repeated here rather than left to the writer on purpose.
 * A tab whose timers were throttled, or a client still running an older bundle,
 * can leave `isOnline: true` on a document nobody has touched for an hour; the
 * reader is the last line of defence and should not believe it.
 */
export function isUserCurrentlyOnline(
  presence?: UserPresence | null,
  now: number = Date.now()
): boolean {
  if (!presence) return false;
  if (!presence.isOnline) return false;
  if (presence.idle) return false;
  if (!presence.lastSeenAt) return false;
  if (now - new Date(presence.lastSeenAt).getTime() > PRESENCE_ONLINE_WINDOW_MS) return false;
  const stamp = presence.lastActivityAt || presence.lastSeenAt;
  return now - new Date(stamp).getTime() < PRESENCE_IDLE_TIMEOUT_MS;
}

/**
 * Whether the user is connected but sitting idle past the timeout.
 *
 * Distinguishing this from "offline" lets the roster say "Idle" rather than
 * "Offline", which is both truer and less alarming to the person reading it.
 * It does not make them online: `isUserCurrentlyOnline` still rejects an idle
 * session, and the tracker has already written `isOnline: false` to the
 * document by the time this returns true.
 *
 * The heartbeat must still be fresh for this to be idleness at all: a presence
 * whose heartbeat stopped ten minutes ago is an abandoned tab, not someone
 * sitting at the keyboard, and reporting it as idle would leave ghosts in the
 * roster forever because nothing ever clears `isOnline` on a closed laptop.
 */
export function isUserIdle(
  presence?: UserPresence | null,
  now: number = Date.now()
): boolean {
  if (!presence || !presence.lastSeenAt) return false;
  const heartbeatAge = now - new Date(presence.lastSeenAt).getTime();
  if (heartbeatAge > PRESENCE_ONLINE_WINDOW_MS) return false;
  // An explicitly idle session is idle even though its document now reads
  // `isOnline: false` -- that write is exactly how idleness is recorded.
  if (presence.idle) return true;
  // Without the flag, fall back to the activity stamp, but only for a document
  // that still claims to be online. A closed tab must not masquerade as idle.
  if (!presence.isOnline) return false;
  const stamp = presence.lastActivityAt || presence.lastSeenAt;
  return now - new Date(stamp).getTime() >= PRESENCE_IDLE_TIMEOUT_MS;
}

/**
 * The single answer to "what should this row say?".
 *
 * Both the roster and the admin table need the same three-way split, and
 * deriving it twice is how the two views end up disagreeing about the same
 * user. Idle is checked before offline so a session that stopped producing
 * input reads as idle rather than as a closed tab.
 */
export function resolvePresenceState(
  presence?: UserPresence | null,
  now: number = Date.now()
): PresenceState {
  if (isUserCurrentlyOnline(presence, now)) return 'online';
  if (isUserIdle(presence, now)) return 'idle';
  return 'offline';
}

/**
 * Whether a heartbeat should be written with `isOnline: false`.
 *
 * The tracker asks this on every beat; keeping the comparison here means the
 * idle boundary is defined once, in the same place the readers use it.
 */
export function isIdleAt(lastActivityAt: number, now: number = Date.now()): boolean {
  return now - lastActivityAt >= PRESENCE_IDLE_TIMEOUT_MS;
}

/**
 * Drops accounts excluded from analytics from a presence or interaction list.
 */
export function excludeAnalyticsAccounts<T extends { email?: string; userEmail?: string }>(
  list: T[]
): T[] {
  return list.filter((entry) => !isAnalyticsExcluded(entry.email ?? entry.userEmail));
}
