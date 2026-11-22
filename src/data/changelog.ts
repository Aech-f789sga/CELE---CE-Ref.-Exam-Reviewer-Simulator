/**
 * What shipped, in the learner's words.
 *
 * The update prompt used to say only "a new version is available", which asks
 * the learner to reload a running paper on trust. This module is the answer to
 * the obvious follow-up — what changed? — and it is deliberately *data*, not
 * prose in a component, so the same list feeds the prompt, the full history
 * panel and anything added later.
 *
 * ## One source, two readers
 *
 * `public/changelog.json` is the file to edit. It is imported here, so the
 * build carries a copy of the notes it was compiled with, and it is also
 * fetched at runtime with `cache: 'no-store'` — because the tab that needs the
 * notes most is the *stale* one, still running last week's bundle while a new
 * one waits in the wings. That tab's compiled copy stops at its own release and
 * would understate the update; the fetched copy comes from the deployment the
 * worker is about to activate, so it names the changes actually arriving.
 *
 * `changelog.json` is intentionally absent from the workbox `globPatterns`
 * (which lists js, css, html and images only), so the fetch reaches the network
 * rather than a precache entry. Offline, or behind a cache that ignores the
 * query string, the fetch fails and the compiled copy is used — a slightly older
 * list, never an empty panel.
 *
 * ## "Unseen"
 *
 * The version the learner last opened the panel on is remembered locally. A dot
 * on the navbar marks anything newer, and opening the panel clears it. Storing
 * the version rather than a flag means a second release still shows up without
 * anything to reset.
 */
import data from '../../public/changelog.json';

export type ChangeKind = 'new' | 'improved' | 'fixed' | 'content';

export interface ChangeItem {
  kind: ChangeKind;
  text: string;
}

export interface Release {
  /** Semver-ish; the newest is what the navbar dot compares against. */
  version: string;
  /** ISO `yyyy-mm-dd`, formatted for display at the point of use. */
  date: string;
  /** One line, sentence case — the headline the prompt leads with. */
  title: string;
  changes: ChangeItem[];
}

export const CHANGE_KIND_LABEL: Record<ChangeKind, string> = {
  new: 'New',
  improved: 'Improved',
  fixed: 'Fixed',
  content: 'Content',
};

const KINDS: ChangeKind[] = ['new', 'improved', 'fixed', 'content'];

/** Guards the fetched copy, which has no compiler behind it. */
function isRelease(value: unknown): value is Release {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.version === 'string' &&
    typeof r.date === 'string' &&
    typeof r.title === 'string' &&
    Array.isArray(r.changes) &&
    r.changes.every(
      (c) =>
        !!c &&
        typeof c === 'object' &&
        KINDS.includes((c as ChangeItem).kind) &&
        typeof (c as ChangeItem).text === 'string'
    )
  );
}

function clean(list: unknown): Release[] {
  if (!Array.isArray(list)) return [];
  return list.filter(isRelease);
}

/** The notes this build was compiled with. Always non-empty. */
export const RELEASES: Release[] = clean((data as { releases?: unknown }).releases);

export const LATEST_RELEASE: Release = RELEASES[0];

/**
 * The deployed notes, for a tab that may be older than the deployment.
 *
 * Never throws and never returns an empty list: a failed fetch is not a reason
 * to tell the learner nothing changed.
 */
export async function fetchReleases(): Promise<Release[]> {
  try {
    const res = await fetch(`/changelog.json?ts=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return RELEASES;
    const parsed = clean(((await res.json()) as { releases?: unknown }).releases);
    return parsed.length ? parsed : RELEASES;
  } catch {
    return RELEASES;
  }
}

const SEEN_KEY = 'cele.seenRelease';

/** The newest release the learner has actually opened the panel on. */
export function readSeenRelease(): string | null {
  try {
    return window.localStorage.getItem(SEEN_KEY);
  } catch {
    // Private mode, or storage disabled — treat everything as read rather than
    // nagging with a dot that can never be cleared.
    return LATEST_RELEASE?.version ?? null;
  }
}

export function markReleaseSeen(version: string): void {
  try {
    window.localStorage.setItem(SEEN_KEY, version);
  } catch {
    /* Nothing to do: the dot simply reappears next launch. */
  }
}

/** True when the bank has a release the learner has not looked at yet. */
export function hasUnseenRelease(): boolean {
  const latest = LATEST_RELEASE?.version;
  if (!latest) return false;
  return readSeenRelease() !== latest;
}

/** "22 Nov 2026" — a date the learner reads, not an ISO string. */
export function formatReleaseDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });
}
