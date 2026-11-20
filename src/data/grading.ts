/**
 * What a paper is worth when part of it has no answer key yet.
 *
 * The Statics booklet (Margallo's) was transcribed complete — 176 items across
 * three topics — while its key was still outstanding, so each of those items
 * carried `keyPending: true` and a placeholder in `correctAnswer`. Comparing an
 * answer against that placeholder marks every single response wrong, which is
 * worse than saying nothing: it produces a confident 0% and a "FAILED" verdict
 * for a learner who may have answered everything correctly.
 *
 * So the rule is: **a pending item is not wrong, it is unknown**, and it is
 * excluded from every figure rather than counted as a miss. That distinction
 * lives here, once, because four places need it and they must not disagree —
 * the engine (what to reveal), the results screen (what to report), the submit
 * handler (what to save) and the leaderboards (what to rank).
 *
 * The Statics key has since been supplied and encoded, so those items are now
 * scorable and the mechanism is idle for them. Fluid Mechanics is the set still
 * running on it.
 *
 * Encoding a key is the entire migration: setting `correctAnswer` and deleting
 * `keyPending` from the bank is enough, because every caller goes back to
 * scoring normally — none of them special-case a topic, only the flag.
 */
import type { Question } from '../types/exam';

/** An answer map keyed by question id. */
export type AnswerMap = Record<string, string | undefined>;

/** True when this item's key has not been supplied, so it cannot be graded. */
export function isKeyPending(q: Pick<Question, 'keyPending'> | null | undefined): boolean {
  return q?.keyPending === true;
}

export interface ScoreSummary {
  /** Items that carry a real key and therefore count towards the score. */
  scorable: number;
  /** Items excluded because no key exists yet. */
  pending: number;
  /** Correct answers, counted over `scorable` only. */
  correct: number;
  /**
   * Percentage over `scorable`, or `null` when nothing on the paper can be
   * graded yet. `null` is deliberately not `0`: a paper with no key has no
   * score, and rendering 0% would be a claim the data cannot support.
   */
  percentage: number | null;
  /** True when at least one item was left out of the figures. */
  partial: boolean;
}

/**
 * Score a paper, ignoring items whose key has not been supplied.
 *
 * A worked item (Besavilla) is scorable: the learner self-marks it, so its
 * `correctAnswer` is the self-mark rather than a printed key.
 */
export function summariseScore(
  questions: Pick<Question, 'id' | 'correctAnswer' | 'keyPending'>[],
  answers: AnswerMap
): ScoreSummary {
  let scorable = 0;
  let pending = 0;
  let correct = 0;

  for (const q of questions) {
    if (isKeyPending(q)) {
      pending++;
      continue;
    }
    scorable++;
    if (answers[q.id] === q.correctAnswer) correct++;
  }

  return {
    scorable,
    pending,
    correct,
    percentage: scorable === 0 ? null : Math.round((correct / scorable) * 10000) / 100,
    partial: pending > 0,
  };
}

/**
 * Whether an attempt may be published to the leaderboards.
 *
 * A partially-keyed paper is excluded as well as a wholly-keyed-pending one:
 * a drill that mixes Algebra with Statics would otherwise rank on a percentage
 * computed from whichever items happened to be scorable, which is not a score
 * anyone can compare against another learner's.
 *
 * This answers only the key question. A topic drill is excluded regardless of
 * its keys — see {@link isTopicDrill}.
 */
export function isPublishable(summary: ScoreSummary): boolean {
  return summary.pending === 0 && summary.scorable > 0;
}

/**
 * True when this paper was assembled from topic banks — a **drill**, not a
 * sitting.
 *
 * Drills are practice. They are drawn at random from a topic, they have no
 * year or month of their own, and two learners' drills are never the same
 * paper, so a percentage from one says nothing about either of them. Ranking
 * them against board-paper attempts would also be unfair in the other
 * direction: a drill is short and narrowly scoped, which makes a high score
 * cheap.
 *
 * So they are never written as an attempt. Detection is by the `topicId` the
 * bank stamps on every item, because that is the only marker a drill carries —
 * the subject/year/month on the surrounding state still hold whatever was last
 * selected on the setup screen, which is why relying on those was wrong.
 */
export function isTopicDrill(questions: { topicId?: string }[]): boolean {
  return questions.some((q) => typeof q.topicId === 'string' && q.topicId.length > 0);
}
