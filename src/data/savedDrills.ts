/**
 * Drills put aside to finish later.
 *
 * A by-topics drill is drawn at random at the moment it starts, so — unlike a
 * board paper — it cannot be re-derived from the setup screen: the paper *is*
 * the draw. The paused-session list in `utils/storage.ts` keys on
 * subject/year/month and therefore has nothing to key a drill on, and the
 * live-session slot in `liveSession.ts` is a single autosave whose job is to
 * survive a crash, not to hold a library of deliberate decisions.
 *
 * So parked drills get their own list. Three things are deliberately separate:
 *
 *   - **live session** — evidence. One slot, offered once on boot, rewritten
 *     every few seconds while a paper or drill is open.
 *   - **paused session** — a decision about a *paper*, keyed by its identity,
 *     browsable on the setup screen.
 *   - **parked drill** — a decision about a *draw*, keyed by its id list,
 *     browsable from the drill panel.
 *
 * Keeping them apart means parking a drill does not litter the paused-paper
 * list with an entry that has no paper, and clearing one does not clear the
 * others.
 *
 * ## Why ids rather than the items
 *
 * Same reason as the live session: both banks ship in the bundle, so the id
 * list is enough to rebuild the exact draw in the exact order, and a stale id
 * (an item since renumbered or removed) fails as "cannot resume" rather than
 * resuming a subtly different drill. Storing the item text would put tens of
 * kilobytes per parked drill into localStorage for no benefit.
 *
 * ## The clock
 *
 * A parked drill's clock is **frozen**. The live-session slot lets a timed
 * clock keep running while the tab is away, because that is what a real sitting
 * means and otherwise closing the tab is a free pause. A parked drill is the
 * opposite: the learner has deliberately stopped, practice has no deadline
 * worth defending, and resuming a drill to a countdown that expired while they
 * were at dinner would be absurd. Both `secondsElapsed` and `secondsRemaining`
 * are therefore restored exactly as saved.
 */
import type { ExamMode, TimerMode } from '../types/exam';
import { TOPIC_QUESTIONS, topicDefById } from './topicBanks';
import { resolveQuestionsById } from './liveSession';

export interface SavedDrill {
  id: string;
  /** Topic bank the draw came from, deduplicated, in bank order. */
  topicIds: string[];
  /** The draw, in order — the whole identity of the drill. */
  questionIds: string[];
  currentIndex: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  flaggedQuestions: Record<string, boolean>;
  secondsElapsed: number;
  /** Frozen at park time; see "The clock" above. */
  secondsRemaining: number;
  /** Length of the draw, kept so the panel can say "7 of 20" without resolving. */
  totalQuestions: number;
  /** Full length of a timed drill, so the countdown can be rebuilt on resume. */
  totalDurationSeconds: number;
  timerMode: TimerMode;
  examMode: ExamMode;
  /** ISO timestamp of the park. */
  savedAt: string;
  /** Whose drill this was, so a shared browser cannot resume someone else's. */
  ownerId?: string;
}

const STORAGE_KEY = 'ce_board_saved_drills_v1';

/**
 * How many parked drills to keep. A learner who parks one per session for a
 * term would otherwise grow an unbounded list; the newest few are the ones
 * anyone actually comes back to, and the drill ledger keeps the history of the
 * ones that were finished.
 */
const MAX_SAVED = 12;

/** Fired after any write so an open panel can re-read without polling. */
const UPDATED_EVENT = 'ce_board_saved_drills_updated';

function isRecord(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === 'object' && !Array.isArray(v);
}

/**
 * Validate one stored record.
 *
 * Anything structurally wrong is dropped rather than repaired: a half-written
 * record must never put the app into a drill it cannot render. The checks mirror
 * `loadLiveSession`'s, because both are reading ids and a position out of
 * localStorage that a previous version may have written.
 */
function parseSavedDrill(v: unknown): SavedDrill | null {
  if (!isRecord(v)) return null;
  if (typeof v.id !== 'string' || !v.id) return null;
  if (!Array.isArray(v.questionIds) || v.questionIds.length === 0) return null;
  if (!v.questionIds.every((id) => typeof id === 'string')) return null;
  if (!Array.isArray(v.topicIds) || !v.topicIds.every((t) => typeof t === 'string')) return null;
  if (typeof v.currentIndex !== 'number' || !Number.isFinite(v.currentIndex)) return null;
  if (typeof v.secondsElapsed !== 'number' || !Number.isFinite(v.secondsElapsed)) return null;
  if (!isRecord(v.userAnswers) || !isRecord(v.flaggedQuestions)) return null;
  if (typeof v.savedAt !== 'string' || Number.isNaN(Date.parse(v.savedAt))) return null;
  return v as unknown as SavedDrill;
}

/**
 * Parked drills, newest first.
 *
 * `ownerId` filters out another account's drills on a shared browser; a record
 * with no owner is shown to everyone, which is the same rule `belongsTo` uses
 * for the live session.
 */
export function getSavedDrills(ownerId?: string): SavedDrill[] {
  let parsed: unknown;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    parsed = JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load parked drills:', e);
    return [];
  }
  if (!Array.isArray(parsed)) return [];
  return parsed
    .map(parseSavedDrill)
    .filter((d): d is SavedDrill => d !== null)
    .filter((d) => !d.ownerId || !ownerId || d.ownerId === ownerId)
    .sort((a, b) => Date.parse(b.savedAt) - Date.parse(a.savedAt));
}

function writeAll(drills: SavedDrill[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(drills.slice(-MAX_SAVED)));
    window.dispatchEvent(new CustomEvent(UPDATED_EVENT));
  } catch (e) {
    console.error('Failed to park drill:', e);
  }
}

export function saveDrill(input: {
  topicIds: string[];
  questionIds: string[];
  currentIndex: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  flaggedQuestions: Record<string, boolean>;
  secondsElapsed: number;
  secondsRemaining: number;
  totalQuestions: number;
  totalDurationSeconds: number;
  timerMode: TimerMode;
  examMode: ExamMode;
  ownerId?: string;
}): SavedDrill[] {
  const entry: SavedDrill = {
    id: `parked-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    topicIds: [...new Set(input.topicIds.filter(Boolean))],
    questionIds: input.questionIds,
    currentIndex: Math.max(0, Math.min(input.currentIndex, input.questionIds.length - 1)),
    userAnswers: input.userAnswers,
    flaggedQuestions: input.flaggedQuestions,
    secondsElapsed: Math.max(0, Math.round(input.secondsElapsed)),
    secondsRemaining: Math.max(0, Math.round(input.secondsRemaining)),
    totalQuestions: input.totalQuestions,
    totalDurationSeconds: Math.max(0, Math.round(input.totalDurationSeconds)),
    timerMode: input.timerMode,
    examMode: input.examMode,
    savedAt: new Date().toISOString(),
    ownerId: input.ownerId,
  };

  const next = [...getSavedDrills(), entry].sort(
    (a, b) => Date.parse(a.savedAt) - Date.parse(b.savedAt)
  );
  writeAll(next);
  return getSavedDrills(input.ownerId);
}

/**
 * Drop one parked drill. Called when it is resumed (it is live again, and the
 * engine's autosave covers a crash from here) and when it is discarded.
 */
export function removeSavedDrill(id: string, ownerId?: string): SavedDrill[] {
  writeAll(getSavedDrills().filter((d) => d.id !== id));
  return getSavedDrills(ownerId);
}

export function clearSavedDrills(): void {
  writeAll([]);
}

export function onSavedDrillsChanged(listener: () => void): () => void {
  window.addEventListener(UPDATED_EVENT, listener);
  return () => window.removeEventListener(UPDATED_EVENT, listener);
}

/**
 * Rebuild the exact draw, or `null` if the bank has moved under it.
 *
 * `null` is a real answer: an item may have been renumbered or removed since
 * the drill was parked, and resuming a *different* draw would silently mis-score
 * every answer given so far.
 */
export function resolveSavedDrill(drill: SavedDrill) {
  return resolveQuestionsById(drill.questionIds, TOPIC_QUESTIONS);
}

export function savedDrillAnswered(drill: SavedDrill): number {
  return Object.keys(drill.userAnswers).length;
}

/** "Algebra" / "Algebra + Trigonometry" / "Algebra + 2 more" — for a narrow row. */
export function savedDrillLabel(drill: SavedDrill): string {
  const names = drill.topicIds.map((id) => topicDefById(id)?.name ?? id);
  if (names.length === 0) return 'By topics drill';
  if (names.length <= 2) return names.join(' + ');
  return `${names[0]} + ${names.length - 1} more`;
}

/** Full topic list, for the row's `title` tooltip. */
export function savedDrillFullLabel(drill: SavedDrill): string {
  const names = drill.topicIds.map((id) => topicDefById(id)?.name ?? id);
  return names.length ? names.join(' + ') : 'By topics drill';
}
