/**
 * The drill ledger.
 *
 * A by-topics drill is deliberately **not** written as an `ExamAttempt`:
 * `isTopicDrill()` blocks it because a drill is short, randomly drawn and
 * different for every learner, so ranking one against a board paper is
 * meaningless in both directions. That decision is right for the leaderboards
 * and the paired-cycle report, and it stays.
 *
 * The side effect is that practice leaves no trace. A board paper contributes
 * roughly one or two questions per topic, so topic mastery computed only from
 * sittings would rest on a handful of items per bucket — statistically useless
 * exactly where the learner needs a diagnosis.
 *
 * So drills are recorded here instead: a flat, leaderboard-free ledger that
 * carries the `topicId` the bank already stamps on every item. It never feeds
 * `ratingPercentage`, the GWA, the cycles or the leaderboards — only the topic
 * mastery panel reads it.
 *
 * localStorage, mirroring `utils/storage.ts`. No Firestore collection and no
 * rules change, so this cannot regress the ranking paths.
 */
import type { SubjectArea } from '../types/exam';

export interface DrillResult {
  id: string;
  /** Topic bank the drill was drawn from. */
  topicId: string;
  correct: number;
  /** Items that carried a real key — mirrors `ScoreSummary.scorable`. */
  scorable: number;
  seconds: number;
  /** ISO timestamp. */
  at: string;
  /**
   * Difficulty-weighted totals, captured at submit time.
   *
   * The easy/mid/hard control only exists on drills, so drill items are the
   * only ones that ever carry a rating — a board paper is fixed and rating it
   * would change nothing. These four fields are therefore the only source of
   * difficulty signal the mastery panel has.
   *
   * They are stored as aggregates rather than per-item rows: a drill is a
   * dozen items and the ledger is capped, so keeping `{id, correct}` for every
   * item would multiply storage for no extra insight once the weights are
   * folded in. The trade-off is that re-rating an item later does not
   * retroactively change a past drill — the rating is taken as it stood while
   * the learner was actually sitting the item, which is the honest reading.
   *
   * All four are optional so ledger rows written before this existed still
   * load; they simply fall back to the default weight, which makes their
   * weighted score equal their raw one.
   */
  weight?: number;
  weightedCorrect?: number;
  /** Items rated `easy` that were nevertheless answered wrong. */
  easyMisses?: number;
  /** How many scorable items carried any rating. */
  rated?: number;
}

const DRILLS_STORAGE_KEY = 'ce_board_drill_results_v1';

/**
 * Cap the ledger so localStorage cannot grow without bound. A learner drilling
 * daily for a year would otherwise accumulate thousands of rows that are all
 * already represented in the aggregate; the newest 600 is plenty for a mastery
 * view and keeps the join fast.
 */
const MAX_DRILLS = 600;

export function getDrillResults(): DrillResult[] {
  try {
    const raw = localStorage.getItem(DRILLS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as DrillResult[]) : [];
  } catch (e) {
    console.error('Failed to load drill results:', e);
    return [];
  }
}

/**
 * Append a drill outcome. Ignores rows that carry no scorable item, because a
 * drill of entirely unkeyed questions (today: anything drawn from Statics)
 * has no score and must not dilute a topic's percentage.
 */
export function recordDrillResult(input: {
  topicId: string;
  correct: number;
  scorable: number;
  seconds: number;
  at?: string;
  weight?: number;
  weightedCorrect?: number;
  easyMisses?: number;
  rated?: number;
}): DrillResult[] {
  if (!input.topicId || input.scorable <= 0) return getDrillResults();

  const entry: DrillResult = {
    id: `drill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    topicId: input.topicId,
    correct: Math.max(0, Math.min(input.correct, input.scorable)),
    scorable: input.scorable,
    seconds: Math.max(0, Math.round(input.seconds)),
    at: input.at ?? new Date().toISOString(),
  };

  if (input.weight !== undefined) entry.weight = Math.max(0, input.weight);
  if (input.weightedCorrect !== undefined) entry.weightedCorrect = Math.max(0, input.weightedCorrect);
  if (input.easyMisses !== undefined) entry.easyMisses = Math.max(0, input.easyMisses);
  if (input.rated !== undefined) entry.rated = Math.max(0, input.rated);

  const next = [...getDrillResults(), entry].slice(-MAX_DRILLS);

  try {
    localStorage.setItem(DRILLS_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent('ce_board_drills_updated'));
  } catch (e) {
    console.error('Failed to save drill result:', e);
  }

  return next;
}

export function clearDrillResults(): void {
  try {
    localStorage.removeItem(DRILLS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('ce_board_drills_updated'));
  } catch (e) {
    console.error('Failed to clear drill results:', e);
  }
}

/** Per-topic drill totals, for the "practice volume" hint in the UI. */
export function drillCountsByTopic(drills: DrillResult[] = getDrillResults()) {
  const map = new Map<string, { attempts: number; correct: number; scorable: number }>();
  for (const d of drills) {
    const row = map.get(d.topicId) ?? { attempts: 0, correct: 0, scorable: 0 };
    row.attempts++;
    row.correct += d.correct;
    row.scorable += d.scorable;
    map.set(d.topicId, row);
  }
  return map;
}

/** Subject a topic belongs to, resolved lazily to avoid a circular import. */
export type DrillSubject = SubjectArea;
