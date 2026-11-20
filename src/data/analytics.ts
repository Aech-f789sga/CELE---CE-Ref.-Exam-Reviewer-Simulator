/**
 * Performance analytics derived from stored attempts.
 *
 * Everything here is a pure function of `ExamAttempt[]` (plus the drill ledger)
 * and the question banks — no Firestore reads, no component state. The screens
 * call these once inside `useMemo`, which keeps the join cost off the render
 * path.
 *
 * Two rules are inherited from `data/grading.ts` and must not be re-decided
 * here:
 *
 *   1. An item with `keyPending` has no answer key. It is **unknown**, not
 *      wrong. It is excluded from every denominator, never counted as a miss.
 *   2. A paper with nothing scorable contributes no score at all. It is
 *      skipped rather than averaged in as a zero.
 *
 * A third rule is specific to analytics: an attempt whose `userAnswers` cannot
 * be joined back to a question set (empty map on seeded demo data, or a bank
 * that has since been re-keyed) contributes to the *score* series but not to
 * the per-question breakdown. Counting those as blank answers would manufacture
 * a 0% for every topic the learner never actually touched.
 */
import type { ExamAttempt, Question, SubjectArea } from '../types/exam';
import { SUBJECT_CONFIGS } from '../types/exam';
import { getQuestionsForExam } from './questionBankManager';
import { isKeyPending } from './grading';
import { normaliseTopic, topicById, topicsForSubject } from './topics';
import { topicDefById } from './topicBanks';
import type { DrillResult } from './drillResults';
import { DEFAULT_WEIGHT, weightOf } from './itemDifficulty';
import type { DifficultyMap, ItemDifficulty } from './itemDifficulty';

/** Below this many scorable items a topic percentage is noise, not a signal. */
export const MIN_TOPIC_SAMPLE = 5;

export interface TopicRow {
  topicId: string;
  label: string;
  subject: SubjectArea;
  /** Items with a real key that count towards the percentage. */
  scorable: number;
  correct: number;
  /** 0–100. */
  accuracy: number;
  /** Items left blank — the cheapest marks to recover. */
  blank: number;
  /** How many of `scorable` came from drills rather than board papers. */
  fromDrills: number;

  /**
   * Sum of difficulty weights over this topic's items, and the weighted
   * correct total. `weightedAccuracy` is their ratio.
   *
   * When nothing is rated every item weighs `DEFAULT_WEIGHT`, so the weighted
   * figure collapses onto the raw one exactly — which is what makes this safe
   * to switch on for a learner who has never used the rating control.
   */
  weight: number;
  weightedCorrect: number;
  weightedAccuracy: number;
  /** Items carrying any rating. Zero means the weighted view is meaningless here. */
  rated: number;
  /** Rated `easy` but answered wrong — the careless-error signal. */
  easyMisses: number;
}

export interface TopicBreakdown {
  /** Weakest first. Includes thin rows; the UI decides how to present them. */
  rows: TopicRow[];
  /** Questions whose category matched no topic — reported, never guessed. */
  unmapped: number;
  totalScorable: number;
  /** Attempts whose answers could be joined to a question set. */
  attemptsUsed: number;
  /** Attempts skipped because their answers could not be resolved. */
  attemptsSkipped: number;
}

/**
 * Rebuild the paper an attempt was sat on.
 *
 * Returns an empty array when the bank no longer has that set, which the
 * caller must treat as "cannot diagnose", not "zero".
 */
export function resolveAttemptQuestions(attempt: ExamAttempt): Question[] {
  try {
    return getQuestionsForExam(
      attempt.subject,
      attempt.year,
      attempt.month,
      attempt.source ?? 'Gillesania'
    );
  } catch {
    return [];
  }
}

function emptyRow(topicId: string, subject: SubjectArea, label?: string): TopicRow {
  return {
    topicId,
    label: label ?? topicById(topicId)?.label ?? topicId,
    subject,
    scorable: 0,
    correct: 0,
    accuracy: 0,
    blank: 0,
    fromDrills: 0,
    weight: 0,
    weightedCorrect: 0,
    weightedAccuracy: 0,
    rated: 0,
    easyMisses: 0,
  };
}

/** Where an item's marks belong, and which board area that bucket sits in. */
interface Bucket {
  id: string;
  label: string;
  subject: SubjectArea;
}

/**
 * Resolve a drill's `topicId` to the bucket its marks belong to.
 *
 * Two lookups, in order of authority. A ledger row written against the
 * analytics taxonomy resolves directly. Otherwise the by-topics hub is asked,
 * because that is the table the drill was actually drawn from — it knows that
 * `buoyancy` is HPGE and what it is called.
 *
 * Where the hub topic has a counterpart in the taxonomy (`bm-algebra` →
 * "Algebra" → `algebra`) the marks fold into that bucket, so a learner sees one
 * Algebra row covering both papers and drills rather than two rows that look
 * identical and disagree. Where it has none, the drill keeps its own row under
 * its own name — inventing a neighbouring bucket would move a weakness out of
 * the "study this" list, which is the one thing this panel must not do.
 */
function bucketForDrillTopic(topicId: string): Bucket | null {
  const canonical = topicById(topicId);
  if (canonical) return { id: canonical.id, label: canonical.label, subject: canonical.subject };

  const hub = topicDefById(topicId);
  if (!hub) return null;

  const mapped = normaliseTopic(hub.name, hub.boardArea);
  const def = mapped ? topicById(mapped) : undefined;
  if (def) return { id: def.id, label: def.label, subject: def.subject };

  return { id: `drill:${hub.id}`, label: hub.name, subject: hub.boardArea };
}

/**
 * The bucket for one item on a paper.
 *
 * A board-paper item has no topic, so its area is the paper's and its bucket
 * comes from the keyword taxonomy. A drill item carries a `topicId`, which is a
 * far stronger signal than its category text — the bank already knows what it
 * is and where it belongs, so there is nothing to infer. That is what lets a
 * single drill mix MSTC algebra with HPGE fluid mechanics and still have each
 * item counted in the right area.
 */
function bucketForQuestion(q: Question, paperSubject: SubjectArea): Bucket | null {
  const drillTopic = (q as { topicId?: string }).topicId;
  if (drillTopic) {
    const bucket = bucketForDrillTopic(drillTopic);
    if (bucket) return bucket;
  }

  const id = normaliseTopic(q.category, paperSubject);
  if (!id) return null;
  const def = topicById(id);
  return def
    ? { id: def.id, label: def.label, subject: def.subject }
    : { id, label: id, subject: paperSubject };
}

/**
 * Fold one paper's questions into the accumulator.
 *
 * Shared by the attempt sweep and by the single-paper breakdown so the two can
 * never drift — the results screen and the analytics panel must agree on what
 * "correct" means for the same paper.
 *
 * Each item also contributes its difficulty weight. An unrated item (every
 * board-paper item, since the rating control is drills-only) weighs
 * `DEFAULT_WEIGHT`, so the weighted total stays proportional to the raw one
 * and the weighted view degrades to the raw view rather than to nonsense.
 */
function foldQuestions(
  questions: Question[],
  answers: Record<string, string | undefined>,
  subject: SubjectArea,
  acc: Map<string, TopicRow>,
  counters: { unmapped: number; scorable: number },
  difficulty: DifficultyMap
): void {
  for (const q of questions) {
    if (isKeyPending(q)) continue;

    const answer = answers[q.id];
    const bucket = bucketForQuestion(q, subject);
    if (!bucket) {
      counters.unmapped++;
      counters.scorable++;
      continue;
    }

    counters.scorable++;
    const row = acc.get(bucket.id) ?? emptyRow(bucket.id, bucket.subject, bucket.label);

    const weight = weightOf(difficulty, q.id);
    const flag: ItemDifficulty | undefined = difficulty[q.id];
    const correct = answer !== undefined && answer === q.correctAnswer;

    row.scorable++;
    row.weight += weight;
    if (correct) {
      row.correct++;
      row.weightedCorrect += weight;
    } else if (answer === undefined) {
      row.blank++;
    } else if (flag === 'easy') {
      /*
       * Answered wrong on an item the learner had already called easy. This is
       * the most expensive kind of miss in a timed sitting — it is not a gap in
       * knowledge, it is a slip — and weighting alone would hide it, because an
       * easy item carries the *lightest* weight. Counting it separately is the
       * only way the panel can say "you are losing marks you already know".
       */
      row.easyMisses++;
    }
    if (flag) row.rated++;

    acc.set(bucket.id, row);
  }
}

/**
 * Join one attempt's answers against its paper and fold the result into `acc`.
 *
 * Returns false when the attempt could not be joined (no questions, or no
 * answer matched a question id), so the caller can skip it instead of scoring
 * it as an empty paper.
 */
function accumulateAttempt(
  attempt: ExamAttempt,
  acc: Map<string, TopicRow>,
  counters: { unmapped: number; scorable: number },
  difficulty: DifficultyMap
): boolean {
  const questions = resolveAttemptQuestions(attempt);
  if (questions.length === 0) return false;

  const answers = attempt.userAnswers ?? {};
  const answeredIds = Object.keys(answers);
  if (answeredIds.length === 0) return false;

  const known = new Set(questions.map((q) => q.id));
  const joinable = answeredIds.some((id) => known.has(id));
  if (!joinable) return false;

  foldQuestions(questions, answers, attempt.subject, acc, counters, difficulty);
  return true;
}

/** Finalise a row: derive both percentages from the totals. */
function finishRow(row: TopicRow): TopicRow {
  return {
    ...row,
    accuracy: row.scorable === 0 ? 0 : Math.round((row.correct / row.scorable) * 1000) / 10,
    weightedAccuracy: row.weight === 0 ? 0 : Math.round((row.weightedCorrect / row.weight) * 1000) / 10,
  };
}

/**
 * Topic rows for a single paper — used by the results screen, where the
 * questions and answers are already in hand and no attempt has been stored yet
 * (a drill, for instance, is never written as one).
 */
export function breakdownForQuestions(
  questions: Question[],
  answers: Record<string, string | undefined>,
  subject: SubjectArea,
  difficulty: DifficultyMap = {}
): { rows: TopicRow[]; unmapped: number; scorable: number } {
  const acc = new Map<string, TopicRow>();
  const counters = { unmapped: 0, scorable: 0 };

  foldQuestions(questions, answers, subject, acc, counters, difficulty);

  const rows = [...acc.values()]
    .map(finishRow)
    .sort((a, b) => a.weightedAccuracy - b.weightedAccuracy || b.scorable - a.scorable);

  return { rows, unmapped: counters.unmapped, scorable: counters.scorable };
}

/**
 * Per-topic accuracy across every diagnosable attempt, plus any drills.
 *
 * Drills carry their `topicId` directly (the bank stamps it on every item), so
 * they need no classification and are the cheapest way to grow a topic's
 * sample size — which is why the ledger exists at all.
 *
 * `difficulty` is the learner's own easy/mid/hard ratings. It is applied to
 * board-paper items too, even though only drills can be rated, because a
 * learner may rate an item during a drill and then meet the same item id again
 * on a paper — the id is the join, so the rating follows it. Items that were
 * never rated simply carry `DEFAULT_WEIGHT`.
 *
 * Rows sort by `weightedAccuracy`, not raw `accuracy`: the point of the
 * weighting is that a topic where the misses are all on `hard` items is in
 * better shape than one where the misses are on `easy` items, and a raw
 * percentage cannot express that difference.
 */
export function topicBreakdown(
  attempts: ExamAttempt[],
  drills: DrillResult[] = [],
  difficulty: DifficultyMap = {}
): TopicBreakdown {
  const acc = new Map<string, TopicRow>();
  const counters = { unmapped: 0, scorable: 0 };
  let attemptsUsed = 0;
  let attemptsSkipped = 0;

  for (const attempt of attempts) {
    if (accumulateAttempt(attempt, acc, counters, difficulty)) attemptsUsed++;
    else attemptsSkipped++;
  }

  for (const drill of drills) {
    const bucket = bucketForDrillTopic(drill.topicId);
    if (!bucket) continue;
    if (drill.scorable <= 0) continue;

    const row = acc.get(bucket.id) ?? emptyRow(bucket.id, bucket.subject, bucket.label);

    row.scorable += drill.scorable;
    row.correct += drill.correct;
    row.fromDrills += drill.scorable;

    /*
     * Older ledger rows predate the weighted fields. They fall back to the
     * default weight, which makes their weighted total exactly proportional to
     * their raw one — so a mixed ledger does not distort the ratio, it just
     * carries less information about the rated items inside it.
     */
    row.weight += drill.weight ?? drill.scorable * DEFAULT_WEIGHT;
    row.weightedCorrect += drill.weightedCorrect ?? drill.correct * DEFAULT_WEIGHT;
    row.easyMisses += drill.easyMisses ?? 0;
    row.rated += drill.rated ?? 0;

    acc.set(bucket.id, row);
  }

  const rows = [...acc.values()]
    .map(finishRow)
    .sort((a, b) => a.weightedAccuracy - b.weightedAccuracy || b.scorable - a.scorable);

  return {
    rows,
    unmapped: counters.unmapped,
    totalScorable: counters.scorable,
    attemptsUsed,
    attemptsSkipped,
  };
}

export interface ErrorProfile {
  scorable: number;
  correct: number;
  /** Chose an option that was not the key. */
  wrong: number;
  /** Submitted with nothing selected. */
  blank: number;
  /** Worked items the learner marked as missed on reveal. */
  selfMissed: number;
  /** Correct as a percentage of `scorable`. */
  accuracy: number;
}

/**
 * Where the lost marks actually go.
 *
 * `wrong` and `blank` are separated because they need different remedies: a
 * blank is usually a time or confidence problem, a wrong answer is a knowledge
 * problem. Collapsing them hides which one is happening.
 */
export function errorProfile(attempts: ExamAttempt[]): ErrorProfile {
  let scorable = 0;
  let correct = 0;
  let wrong = 0;
  let blank = 0;
  let selfMissed = 0;

  for (const attempt of attempts) {
    const questions = resolveAttemptQuestions(attempt);
    if (questions.length === 0) continue;

    const answers = attempt.userAnswers ?? {};
    const known = new Set(questions.map((q) => q.id));
    if (!Object.keys(answers).some((id) => known.has(id))) continue;

    for (const q of questions) {
      if (isKeyPending(q)) continue;
      scorable++;

      const answer = answers[q.id];
      if (answer === undefined) {
        blank++;
      } else if (answer === q.correctAnswer) {
        correct++;
      } else if (q.workedSolution) {
        selfMissed++;
      } else {
        wrong++;
      }
    }
  }

  return {
    scorable,
    correct,
    wrong,
    blank,
    selfMissed,
    accuracy: scorable === 0 ? 0 : Math.round((correct / scorable) * 1000) / 10,
  };
}

export interface TrajectoryPoint {
  date: string;
  label: string;
  rating: number;
  subject: SubjectArea;
}

export interface Trajectory {
  subjects: Record<SubjectArea, TrajectoryPoint[]>;
  /** Every attempt in date order, for the combined view. */
  all: TrajectoryPoint[];
  /** Attempt count, so the chart can decide whether a trend is even readable. */
  count: number;
}

/** Rating over time, per subject and combined. */
export function trajectory(attempts: ExamAttempt[]): Trajectory {
  const subjects: Record<SubjectArea, TrajectoryPoint[]> = { MSTC: [], HPGE: [], PSAD: [] };
  const all: TrajectoryPoint[] = [];

  const ordered = [...attempts]
    .filter((a) => Number.isFinite(a.ratingPercentage))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  for (const attempt of ordered) {
    const point: TrajectoryPoint = {
      date: attempt.date,
      label: `${attempt.month.slice(0, 3)} ${attempt.year}`,
      rating: Math.round(attempt.ratingPercentage * 10) / 10,
      subject: attempt.subject,
    };
    subjects[attempt.subject].push(point);
    all.push(point);
  }

  return { subjects, all, count: all.length };
}

export interface PacingRow {
  subject: SubjectArea;
  /** Minutes per scorable question, averaged over that subject's attempts. */
  minutesPerQuestion: number;
  /** Minutes per question the paper's official duration allows. */
  budgetMinutesPerQuestion: number;
  /** Positive when the learner is slower than the budget. */
  overrun: number;
  attempts: number;
}

/**
 * Pace against the official sitting duration.
 *
 * This is paper-level only: `ExamAttempt` stores total `timeSpentSeconds`, not
 * per-question timing, so anything finer would be invented. Per-question
 * pacing needs `questionTimes` on the attempt — see the drill/telemetry notes.
 */
export function pacing(attempts: ExamAttempt[]): PacingRow[] {
  const rows: PacingRow[] = [];

  for (const subject of ['MSTC', 'HPGE', 'PSAD'] as SubjectArea[]) {
    const list = attempts.filter(
      (a) => a.subject === subject && a.totalQuestions > 0 && a.timeSpentSeconds > 0
    );
    if (list.length === 0) continue;

    const minutes = list.reduce((sum, a) => sum + a.timeSpentSeconds / 60, 0);
    const questions = list.reduce((sum, a) => sum + a.totalQuestions, 0);
    if (questions === 0) continue;

    const perQuestion = minutes / questions;
    const budget = SUBJECT_CONFIGS[subject].defaultMinutes / Math.max(questions / list.length, 1);

    rows.push({
      subject,
      minutesPerQuestion: Math.round(perQuestion * 100) / 100,
      budgetMinutesPerQuestion: Math.round(budget * 100) / 100,
      overrun: Math.round((perQuestion - budget) * 100) / 100,
      attempts: list.length,
    });
  }

  return rows;
}

export type ReadinessBand = 'ready' | 'borderline' | 'at-risk' | 'unknown';

export interface Readiness {
  band: ReadinessBand;
  /** Weighted composite of the latest complete cycle, or null. */
  composite: number | null;
  /** Lowest subject rating in that cycle. */
  weakestArea: { subject: SubjectArea; rating: number } | null;
  /** Points still needed to reach the 70% composite. */
  gapToPass: number | null;
}

/**
 * Readiness as a band, deliberately not a probability.
 *
 * A learner with three sittings does not have a defensible pass probability;
 * presenting one implies a precision the sample cannot support. A band is
 * honest and still actionable.
 */
export function readiness(attempts: ExamAttempt[]): Readiness {
  const latest = (subject: SubjectArea): ExamAttempt | undefined =>
    [...attempts]
      .filter((a) => a.subject === subject)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  const mstc = latest('MSTC');
  const hpge = latest('HPGE');
  const psad = latest('PSAD');

  if (!mstc || !hpge || !psad) {
    return { band: 'unknown', composite: null, weakestArea: null, gapToPass: null };
  }

  const composite =
    mstc.ratingPercentage * 0.35 + hpge.ratingPercentage * 0.3 + psad.ratingPercentage * 0.35;

  const areas = [
    { subject: 'MSTC' as SubjectArea, rating: mstc.ratingPercentage },
    { subject: 'HPGE' as SubjectArea, rating: hpge.ratingPercentage },
    { subject: 'PSAD' as SubjectArea, rating: psad.ratingPercentage },
  ];
  const weakestArea = areas.reduce((min, a) => (a.rating < min.rating ? a : min), areas[0]);

  const passes = composite >= 70 && weakestArea.rating >= 50;
  const band: ReadinessBand = passes ? 'ready' : composite >= 60 ? 'borderline' : 'at-risk';

  return {
    band,
    composite: Math.round(composite * 10) / 10,
    weakestArea,
    gapToPass: Math.round(Math.max(0, 70 - composite) * 10) / 10,
  };
}

export interface AnalyticsSummary {
  topics: TopicBreakdown;
  errors: ErrorProfile;
  trend: Trajectory;
  pace: PacingRow[];
  readiness: Readiness;
  /** Topics ordered weakest-first with enough sample to be worth acting on. */
  actionable: TopicRow[];
  /** Total scorable items behind the breakdown. */
  sampleSize: number;
  /**
   * Difficulty-weighted totals across every topic row.
   *
   * Kept alongside `sampleSize` rather than replacing it: the panel needs both
   * to decide whether to show the weighted column at all, and to explain why a
   * weighted figure can differ from the raw one.
   */
  weighting: {
    /** Items carrying a rating. Zero means the weighted view has nothing to add. */
    rated: number;
    /** Rated `easy` yet answered wrong, across all topics. */
    easyMisses: number;
    /** Weighted accuracy across every scorable item, 0–100. */
    weightedAccuracy: number;
  };
}

/** One call for the screen, so the join runs once per render pass. */
export function summariseAnalytics(
  attempts: ExamAttempt[],
  drills: DrillResult[] = [],
  difficulty: DifficultyMap = {}
): AnalyticsSummary {
  const topics = topicBreakdown(attempts, drills, difficulty);

  let weight = 0;
  let weightedCorrect = 0;
  let rated = 0;
  let easyMisses = 0;
  for (const row of topics.rows) {
    weight += row.weight;
    weightedCorrect += row.weightedCorrect;
    rated += row.rated;
    easyMisses += row.easyMisses;
  }

  return {
    topics,
    errors: errorProfile(attempts),
    trend: trajectory(attempts),
    pace: pacing(attempts),
    readiness: readiness(attempts),
    actionable: topics.rows.filter((r) => r.scorable >= MIN_TOPIC_SAMPLE),
    sampleSize: topics.totalScorable,
    weighting: {
      rated,
      easyMisses,
      weightedAccuracy: weight === 0 ? 0 : Math.round((weightedCorrect / weight) * 1000) / 10,
    },
  };
}

/** Every topic for a subject, including ones with no data yet. */
export function topicCoverage(subject: SubjectArea, rows: TopicRow[]) {
  const seen = new Map(rows.map((r) => [r.topicId, r]));
  return topicsForSubject(subject).map((t) => ({
    topic: t,
    row: seen.get(t.id) ?? null,
  }));
}
