/**
 * Demonstration sittings for the performance panel.
 *
 * A fresh account has no history, and an empty analytics panel explains nothing:
 * the trend, the error split, the topic bars and the pacing row are all invisible
 * until there are marks to plot. These ten sittings exist to show what the panel
 * looks like once a review is under way, and they can be removed again in one
 * click without touching a real attempt (see `isSample`).
 *
 * Three rules shape the data, because demonstration data that does not survive
 * inspection is worse than none:
 *
 *   1. **Answers are real.** Every sitting is built against a paper that is
 *      actually in the bank, and `userAnswers` maps real item ids to real option
 *      letters. That is what makes the topic breakdown populate: the panel joins
 *      the answer map back to the questions, and an answer map that cannot be
 *      joined contributes nothing (see `accumulateAttempt` in `data/analytics`).
 *      Inventing scores instead would leave every bar empty.
 *
 *   2. **The score is counted, never typed.** `score` is the number of items the
 *      generated answer map got right, `ratingPercentage` follows from it over
 *      the paper's own item count. If the bank is re-keyed tomorrow, the demo is
 *      wrong in the same way a real attempt is wrong — not differently.
 *
 *   3. **The weakness is consistent.** Ability is assigned per *topic*, not per
 *      question, and held across sittings. A learner who is weak in steel design
 *      is weak in steel design every time, which is the only reason a "weakest
 *      topic" reading is worth showing. Per-question coin flips would produce
 *      ten sittings of uniform 55% and a topic list that reshuffles on refresh.
 *
 * Everything is derived from a stable hash of the ids involved, so the same
 * sitting is generated on every reload and on every machine — no `Math.random`,
 * no dates baked in. The dates are relative to today, because a demo whose
 * newest sitting is three years old reads as abandoned.
 */
import type { ExamAttempt, ExamMonth, Question, ReferenceSource, SubjectArea } from '../types/exam';
import { SUBJECT_CONFIGS } from '../types/exam';
import { getQuestionsForExam } from './questionBankManager';
import { isKeyPending } from './grading';
import { normaliseTopic } from './topics';

/** How many sittings the demo writes. Shown in the UI, so keep it honest. */
export const SAMPLE_ATTEMPT_COUNT = 10;

/**
 * Ids written by the first version of the seeder, which predates the `isSample`
 * flag. Recognised so an upgrade replaces them instead of leaving three
 * answer-less phantom sittings next to the new ones.
 */
const LEGACY_SAMPLE_IDS = new Set(['demo-mstc-1', 'demo-hpge-1', 'demo-psad-1']);

/** True for a demonstration record, and only for one. */
export function isSampleAttempt(
  attempt: Pick<ExamAttempt, 'id' | 'isSample'> | null | undefined
): boolean {
  if (!attempt) return false;
  return attempt.isSample === true || LEGACY_SAMPLE_IDS.has(attempt.id);
}

/* ------------------------------------------------------------------ *
 * Determinism
 * ------------------------------------------------------------------ */

/**
 * A 32-bit FNV-1a hash folded down to [0, 1).
 *
 * The same string gives the same number everywhere, which is what lets a
 * generated sitting be stable across reloads without storing anything.
 */
function hash01(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  h ^= h >>> 13;
  h = Math.imul(h, 0x5bd1e995);
  h ^= h >>> 15;
  return (h >>> 0) / 4294967296;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

/** A local date `daysAgo` in the past at a fixed evening hour. */
function daysAgoAt(daysAgo: number, hour: number, minute: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

/* ------------------------------------------------------------------ *
 * The script
 * ------------------------------------------------------------------ */

interface SittingSpec {
  year: number;
  month: ExamMonth;
  source: ReferenceSource;
  /**
   * Areas sat, in the order they were sat. A cycle that stops after MSTC is not
   * a bug: a reviewee who has just sat one paper of a new cycle is the most
   * common state there is, and the paired-cycle card has a branch for it.
   */
  areas: SubjectArea[];
  /**
   * Share of the paper expected to come out correct, per area. This is the
   * *mean* the per-topic abilities are shifted to hit; the realised score drifts
   * a point or two either way, which is what a real sitting does too.
   */
  targets: Partial<Record<SubjectArea, number>>;
  /** Days before today that the first area of the cycle was sat. */
  daysAgo: number;
  /** Share of items submitted with nothing selected. */
  blankRate: number;
  /**
   * Fraction of the paper's official clock used, per area. Over 1 is an overrun.
   *
   * Per area rather than per cycle because the overrun is a habit, not a mood:
   * a reviewee who runs out of time on the six-hour PSAD paper does it in every
   * cycle, while the two shorter papers settle down as they get faster. That is
   * also the only way the pacing row has one red bar and two calm ones — a
   * single cycle-wide factor averages out to "on budget" everywhere and the
   * panel ends up demonstrating nothing.
   */
  pace: Partial<Record<SubjectArea, number>>;
}

/**
 * Three complete cycles plus the first paper of a fourth.
 *
 * The arc is 50.6% → 56.9% → 65.7% composite: a learner who starts below the
 * line, fixes the worst of it, and lands just short of 70% — the "borderline"
 * band, which is the state worth demonstrating because it carries an actionable
 * gap. A demo that opens at "on track" shows the badge and nothing else.
 *
 * Papers are 2024 April through 2025 November rather than one paper repeated,
 * so the trajectory labels differ and the topic mix shifts between sittings the
 * way it does when the paper changes.
 */
const SITTINGS: SittingSpec[] = [
  {
    year: 2024,
    month: 'April',
    source: 'Gillesania',
    areas: ['MSTC', 'HPGE', 'PSAD'],
    targets: { MSTC: 0.52, HPGE: 0.45, PSAD: 0.54 },
    daysAgo: 78,
    blankRate: 0.09,
    // A first sitting that runs over the clock is the normal case, and it is
    // the only way the pacing panel has a red bar to explain.
    pace: { MSTC: 1.08, HPGE: 1.07, PSAD: 1.13 },
  },
  {
    year: 2024,
    month: 'November',
    source: 'Gillesania',
    areas: ['MSTC', 'HPGE', 'PSAD'],
    targets: { MSTC: 0.58, HPGE: 0.51, PSAD: 0.6 },
    daysAgo: 51,
    blankRate: 0.06,
    pace: { MSTC: 1.03, HPGE: 1.01, PSAD: 1.11 },
  },
  {
    year: 2025,
    month: 'April',
    source: 'Gillesania',
    areas: ['MSTC', 'HPGE', 'PSAD'],
    targets: { MSTC: 0.68, HPGE: 0.58, PSAD: 0.7 },
    daysAgo: 24,
    blankRate: 0.04,
    pace: { MSTC: 0.95, HPGE: 0.93, PSAD: 1.09 },
  },
  {
    year: 2025,
    month: 'November',
    source: 'Gillesania',
    areas: ['MSTC'],
    targets: { MSTC: 0.7 },
    daysAgo: 5,
    blankRate: 0.03,
    pace: { MSTC: 0.91 },
  },
];

/* ------------------------------------------------------------------ *
 * Ability
 * ------------------------------------------------------------------ */

/**
 * Per-topic ability for one paper, shifted so the paper's expected accuracy is
 * `target`.
 *
 * Each topic starts at a stable draw in [0.30, 0.80], which is what makes the
 * topic bars disagree with each other. The ceiling is 0.88 rather than 1 so the
 * strong topics read as strong rather than as flawless. A topic small enough to
 * fit in one paper can still round up to a clean sweep, because the draw is
 * stratified — a clean sweep on three items is a coincidence, not a claim of
 * mastery, and the panel labels every bar with its sample size. The whole set is
 * then shifted by the difference between the target and the realised mean — a
 * shift, not a rescale, so a topic that was 20 points behind stays 20 points
 * behind instead of being compressed towards the middle along with everything
 * else.
 */
function abilityByTopic(
  questions: Question[],
  subject: SubjectArea,
  target: number
): Map<string, number> {
  const base = new Map<string, number>();
  const counts = new Map<string, number>();
  let total = 0;

  for (const q of questions) {
    // The topic key is the analytics bucket, so the ability that shapes the
    // answer is attached to the row the panel will later draw.
    const key = normaliseTopic(q.category, subject) ?? 'unmapped';
    if (!base.has(key)) base.set(key, 0.3 + 0.5 * hash01(`${subject}|${key}`));
    counts.set(key, (counts.get(key) ?? 0) + 1);
    total++;
  }

  if (total === 0) return base;

  let mean = 0;
  for (const [key, ability] of base) mean += ability * (counts.get(key) ?? 0);
  mean /= total;

  const shift = target - mean;
  const shifted = new Map<string, number>();
  for (const [key, ability] of base) shifted.set(key, clamp(ability + shift, 0.15, 0.88));
  return shifted;
}

/**
 * Turn one paper into an answer map.
 *
 * The draw is **stratified inside each topic**: the items of a topic are ranked
 * and the jitter is spread evenly across the unit interval, so a topic with
 * ability 0.42 comes out at 42% rather than at whatever a dozen coin flips
 * happened to give. That matters for two reasons. The scripted arc only holds
 * if each sitting lands near its target — independent flips drifted the first
 * HPGE paper ten points low, which turned "45%" into "35%" and quietly moved
 * the whole demo a band. And a topic bar is meant to read as an ability; a bar
 * that moves three points on refresh is noise dressed up as a finding.
 *
 * Three outcomes per item: correct while the draw is under the topic's ability,
 * blank in the next `blankRate` of the range, wrong above that. A blank is a
 * real outcome worth demonstrating — the panel separates it from a wrong answer
 * because the two need different remedies.
 */
function answerPaper(
  questions: Question[],
  subject: SubjectArea,
  target: number,
  blankRate: number,
  attemptId: string
): { answers: Record<string, 'A' | 'B' | 'C' | 'D'>; score: number } {
  const ability = abilityByTopic(questions, subject, target);
  const answers: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
  let score = 0;

  const groups = new Map<string, Question[]>();
  for (const q of questions) {
    if (isKeyPending(q)) continue;
    const key = normaliseTopic(q.category, subject) ?? 'unmapped';
    const list = groups.get(key);
    if (list) list.push(q);
    else groups.set(key, [q]);
  }

  for (const [key, list] of groups) {
    const p = ability.get(key) ?? 0.5;
    const blankEnd = Math.min(1, p + blankRate);

    list.forEach((q, rank) => {
      // Evenly spaced jitter inside the topic: the share of draws under `p` is
      // `p` to within one item, whatever the topic's size.
      const draw = (rank + hash01(`${attemptId}|${q.id}`)) / list.length;

      if (draw < p) {
        answers[q.id] = q.correctAnswer;
        score++;
      } else if (draw < blankEnd) {
        // Nothing written — no entry in the map at all.
        return;
      } else {
        const others = (['A', 'B', 'C', 'D'] as const).filter((l) => l !== q.correctAnswer);
        const pick = others[Math.floor(hash01(`wrong|${attemptId}|${q.id}`) * others.length)];
        answers[q.id] = pick;
      }
    });
  }

  return { answers, score };
}

/* ------------------------------------------------------------------ *
 * Build
 * ------------------------------------------------------------------ */

/**
 * The ten demonstration sittings, newest first — the order `saveAttempt` writes
 * in, so the ledger renders them the same way it renders a real history.
 */
export function buildSampleAttempts(): ExamAttempt[] {
  const out: ExamAttempt[] = [];
  /** Sittings already built per area, which is what `attemptIndexInSubject` counts. */
  const seen: Record<SubjectArea, number> = { MSTC: 0, HPGE: 0, PSAD: 0 };

  SITTINGS.forEach((sitting, cycleIndex) => {
    sitting.areas.forEach((area, areaIndex) => {
      const questions = getQuestionsForExam(area, sitting.year, sitting.month, sitting.source);
      if (questions.length === 0) return;

      seen[area]++;
      const attemptId = `sample-${area.toLowerCase()}-${cycleIndex + 1}`;
      const target = sitting.targets[area] ?? 0.5;
      const { answers, score } = answerPaper(
        questions,
        area,
        target,
        sitting.blankRate,
        attemptId
      );

      const ratingPercentage = Math.round((score / questions.length) * 10000) / 100;
      const clock = SUBJECT_CONFIGS[area].defaultMinutes * 60;
      const pace = sitting.pace[area] ?? 1;

      out.push({
        id: attemptId,
        attemptIndexInSubject: seen[area],
        subject: area,
        year: sitting.year,
        month: sitting.month,
        source: sitting.source,
        // Areas in a cycle are sat on consecutive evenings, so the per-subject
        // order still matches the cycle order the pairing relies on.
        date: daysAgoAt(Math.max(1, sitting.daysAgo - areaIndex * 2), 20, 30 + areaIndex * 5),
        timeSpentSeconds: Math.round(clock * pace),
        timerMode: 'exam_timer',
        isInteractive: false,
        userAnswers: answers,
        score,
        totalQuestions: questions.length,
        ratingPercentage,
        passedArea: ratingPercentage >= 50,
        isSample: true,
      });
    });
  });

  return out.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
