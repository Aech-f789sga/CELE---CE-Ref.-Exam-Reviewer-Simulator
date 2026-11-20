/**
 * The exam that was in progress when the page went away.
 *
 * Refreshing mid-paper used to be unrecoverable: the engine's position, answers
 * and flags lived only in React state, so a refresh (or a closed tab, a phone
 * call, a dead battery) silently threw the whole sitting away. The only thing
 * that survived was a *deliberately* paused session — and only for the two
 * untimed modes, only for board papers, and only if the learner had found the
 * Pause button before whatever interrupted them.
 *
 * This module keeps one autosaved slot that the engine rewrites as the learner
 * works, so boot can offer the choice the situation deserves: carry on, or
 * start again. It is deliberately separate from the paused-session list in
 * `utils/storage.ts`:
 *
 *   - a paused session is a **decision** ("I am stopping here for now"), it is
 *     per paper, and it is browsable in the setup screen;
 *   - a live session is **evidence** ("the page died while this was open"), it
 *     is a single slot, and it is offered once, immediately, on boot.
 *
 * Keeping them apart means a crash does not litter the paused list with
 * entries the learner never asked for, and the two can be cleared independently.
 *
 * ## Why question ids rather than the questions
 *
 * A drill is drawn at random, so its paper cannot be re-derived from the setup
 * screen the way a board paper can — but shipping the whole item text into
 * localStorage would store tens of kilobytes per sitting for no benefit. Both
 * banks ship in the bundle, so the id list is enough to rebuild the exact paper
 * in the exact order, and a stale id (an item since renumbered or removed)
 * fails loudly as "cannot resume" rather than resuming a subtly different exam.
 *
 * ## Time away
 *
 * The two timer modes mean different things, so they are treated differently:
 *
 *   - `exam_timer` is a **clock**. The time the tab spent closed counts, exactly
 *     as it would in a real sitting — otherwise closing the tab is a free pause
 *     button on a timed paper, and the attempt still reaches the leaderboard.
 *     If the clock ran out while away, the paper is over and resumes at zero,
 *     where the engine submits it.
 *   - `stopwatch` and `no_limit` measure **work**, so the away time is not
 *     counted. Coming back to a stopwatch that ran while you were at dinner
 *     would misreport how long the paper took.
 */
import type {
  ExamMode,
  ExamMonth,
  Question,
  ReferenceSource,
  SubjectArea,
  TimerMode,
} from '../types/exam';
import { getQuestionsForExam } from './questionBankManager';
import { TOPIC_QUESTIONS } from './topicBanks';

const STORAGE_KEY = 'ce_board_live_session_v1';

/** Bumped only if the shape below changes incompatibly; old slots are ignored. */
const FORMAT_VERSION = 1;

export interface LiveSession {
  v: number;
  /** A board paper can be re-derived from its identity; a drill cannot. */
  kind: 'paper' | 'drill';
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  source: ReferenceSource;
  timerMode: TimerMode;
  examMode: ExamMode;
  /** Full length of a timed paper, so the clock can be rebuilt. */
  totalDurationSeconds: number;
  /** The paper in draw order — the whole identity of a drill. */
  questionIds: string[];
  currentIndex: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  flaggedQuestions: Record<string, boolean>;
  /** Seconds actually spent working. */
  secondsElapsed: number;
  /** Seconds left on a timed paper; meaningless for the untimed modes. */
  secondsRemaining: number;
  /** ISO timestamp of the last write, which is what "time away" is measured from. */
  savedAt: string;
  /** Whose sitting this was, so a shared browser cannot resume someone else's. */
  ownerId?: string;
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === 'object' && !Array.isArray(v);
}

/**
 * Read the autosaved sitting, or `null` if there is not a usable one.
 *
 * Anything structurally wrong — no storage, corrupt JSON, an older format, a
 * half-written record — is treated as "nothing to resume". That is the safe
 * direction: a bad read must never put the app into an exam it cannot render.
 */
export function loadLiveSession(): LiveSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) return null;
    if (parsed.v !== FORMAT_VERSION) return null;
    if (parsed.kind !== 'paper' && parsed.kind !== 'drill') return null;
    if (!Array.isArray(parsed.questionIds) || parsed.questionIds.length === 0) return null;
    if (!parsed.questionIds.every((id) => typeof id === 'string')) return null;
    if (typeof parsed.currentIndex !== 'number' || !Number.isFinite(parsed.currentIndex)) return null;
    if (typeof parsed.secondsElapsed !== 'number' || !Number.isFinite(parsed.secondsElapsed)) return null;
    if (!isRecord(parsed.userAnswers) || !isRecord(parsed.flaggedQuestions)) return null;
    if (typeof parsed.savedAt !== 'string' || Number.isNaN(Date.parse(parsed.savedAt))) return null;
    return parsed as unknown as LiveSession;
  } catch {
    return null;
  }
}

/**
 * Write the autosaved sitting. Storage can fail (private mode, quota) and there
 * is nothing useful to do about it mid-paper, so a failure is swallowed — the
 * sitting continues, it simply will not survive a refresh.
 */
export function saveLiveSession(session: LiveSession): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {
    /* the exam is still running; only the safety net is missing */
  }
}

/** Drop the autosaved sitting — on submit, on discard, or when it cannot resume. */
export function clearLiveSession(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* nothing to do */
  }
}

/**
 * Whether this sitting belongs to the account now signed in.
 *
 * An unknown owner on either side matches: a learner who refreshed during the
 * brief window before Firebase restored their session must not lose the paper,
 * and a guest sitting has no owner to compare against.
 */
export function belongsTo(session: LiveSession, uid?: string): boolean {
  if (!session.ownerId || !uid) return true;
  return session.ownerId === uid;
}

/** Whole seconds since the last write, never negative. */
export function awaySeconds(session: LiveSession, now: number = Date.now()): number {
  const saved = Date.parse(session.savedAt);
  if (Number.isNaN(saved)) return 0;
  return Math.max(0, Math.floor((now - saved) / 1000));
}

/**
 * Seconds of work to restore. For a timed paper the clock keeps running while
 * the tab is closed, so the away time is added; for the untimed modes it is not.
 */
export function resumeElapsed(session: LiveSession, now: number = Date.now()): number {
  const away = session.timerMode === 'exam_timer' ? awaySeconds(session, now) : 0;
  return Math.max(0, Math.round(session.secondsElapsed + away));
}

/**
 * Seconds left to restore on a timed paper. Zero means the clock ran out while
 * the tab was away — the engine submits on its next tick, which is what a
 * timed sitting means.
 */
export function resumeRemaining(session: LiveSession, now: number = Date.now()): number {
  if (session.timerMode !== 'exam_timer') return 0;
  return Math.max(0, Math.round(session.secondsRemaining - awaySeconds(session, now)));
}

/** A name for the sitting, for the prompt to offer back to the learner. */
export function liveSessionLabel(session: LiveSession): string {
  if (session.kind === 'drill') return 'By topics drill';
  const source = session.source && session.source !== 'Gillesania' ? ` · ${session.source}` : '';
  return `${session.subject} · ${session.month} ${session.year} Examination${source}`;
}

export interface LiveSessionProgress {
  /** 1-based position in the paper. */
  question: number;
  total: number;
  answered: number;
}

export function liveSessionProgress(session: LiveSession): LiveSessionProgress {
  const total = session.questionIds.length;
  const index = Math.min(Math.max(0, session.currentIndex), Math.max(0, total - 1));
  return {
    question: index + 1,
    total,
    answered: Object.keys(session.userAnswers).length,
  };
}

/**
 * Rebuild the exact paper that was interrupted, or `null` if it cannot be.
 *
 * `null` is a real answer, not an error: the bank may have been edited between
 * the save and the reload, and resuming a *different* paper would silently
 * mis-score every answer. The prompt says so and offers only a fresh start.
 */
export function resolveLiveQuestions(session: LiveSession): Question[] | null {
  const pool =
    session.kind === 'drill'
      ? TOPIC_QUESTIONS
      : getQuestionsForExam(session.subject, session.year, session.month, session.source);

  const byId = new Map(pool.map((q) => [q.id, q]));
  const out: Question[] = [];
  for (const id of session.questionIds) {
    const q = byId.get(id);
    if (!q) return null;
    out.push(q);
  }
  // Renumber to the paper's own order. A drill's stored ids are already in draw
  // order, but the bank's `number` field still holds the source numbering.
  return out.map((q, i) => ({ ...q, number: i + 1 }));
}

/** Build the record the engine writes. Kept here so every caller agrees. */
export function makeLiveSession(args: {
  kind: 'paper' | 'drill';
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  source: ReferenceSource;
  timerMode: TimerMode;
  examMode: ExamMode;
  totalDurationSeconds: number;
  questionIds: string[];
  currentIndex: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  flaggedQuestions: Record<string, boolean>;
  secondsElapsed: number;
  secondsRemaining: number;
  ownerId?: string;
}): LiveSession {
  return {
    v: FORMAT_VERSION,
    kind: args.kind,
    subject: args.subject,
    year: args.year,
    month: args.month,
    source: args.source,
    timerMode: args.timerMode,
    examMode: args.examMode,
    totalDurationSeconds: args.totalDurationSeconds,
    questionIds: args.questionIds,
    currentIndex: args.currentIndex,
    userAnswers: args.userAnswers,
    flaggedQuestions: args.flaggedQuestions,
    secondsElapsed: args.secondsElapsed,
    secondsRemaining: args.secondsRemaining,
    savedAt: new Date().toISOString(),
    ownerId: args.ownerId,
  };
}
