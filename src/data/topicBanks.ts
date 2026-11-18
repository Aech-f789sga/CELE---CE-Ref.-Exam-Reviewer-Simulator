/**
 * "By topics" — the third exam type.
 *
 * The two existing types are whole papers: a sitting (MSTC May 2017) or a
 * solved-problem booklet. This one is organised by subject matter instead, so a
 * learner can drill Algebra alone, or Differential Calculus alone, and choose
 * how many items to sit.
 *
 * ## Sources
 *
 *   Basic Math .... Margallo's Buckling Review Center practice set
 *                   (Algebra, Trigonometry, Geometry). Answer key printed
 *                   separately: items 1–50.
 *   Calculus ...... same series (Differential, Integral, Differential Equations).
 *   Statics ....... same series. **No answer key yet** — items are transcribed
 *                   with `correctAnswer` left as the printed placeholder and
 *                   `keyPending: true` so the UI can refuse to score them
 *                   rather than marking every answer wrong.
 *
 * ## Why `subject` is carried as 'MSTC'
 *
 * `Question.subject` is typed to the three board areas. Topic items are not a
 * board area at all, and widening that union would ripple through
 * `SUBJECT_CONFIGS` and every lookup keyed on it. So the field keeps a legal
 * value for type-safety and the real classification lives in `topicId` and
 * `category`. Nothing in the engine branches on `subject` except cosmetic
 * labelling, which the topic hub overrides.
 */
import type { Question } from '../types/exam';
import { BM_ALGEBRA } from './topicBanksBasicMath';
import { BM_TRIG } from './topicBanksTrig';
import { BM_GEOMETRY } from './topicBanksGeometry';
import { CAL_DIFF, CAL_INT, CAL_DE } from './topicBanksCalculus';
import { STAT_FORCES, STAT_EQUIL } from './topicBanksStatics';

export type TopicSubject = 'BasicMath' | 'Calculus' | 'Statics';

export interface TopicSubjectMeta {
  id: TopicSubject;
  name: string;
  blurb: string;
}

export const TOPIC_SUBJECTS: TopicSubjectMeta[] = [
  { id: 'BasicMath', name: 'Basic Mathematics', blurb: 'Algebra · Trigonometry · Geometry' },
  { id: 'Calculus', name: 'Calculus', blurb: 'Differential · Integral · Differential Equations' },
  { id: 'Statics', name: 'Statics', blurb: 'Forces · Equilibrium · Frames & Trusses' },
];

export interface TopicDef {
  id: string;
  subject: TopicSubject;
  name: string;
  /** True when the booklet prints no key for this topic's items yet. */
  keyPending?: boolean;
}

export const TOPICS: TopicDef[] = [
  { id: 'bm-algebra', subject: 'BasicMath', name: 'Algebra' },
  { id: 'bm-trig', subject: 'BasicMath', name: 'Trigonometry' },
  { id: 'bm-geometry', subject: 'BasicMath', name: 'Geometry' },
  { id: 'cal-diff', subject: 'Calculus', name: 'Differential Calculus' },
  { id: 'cal-int', subject: 'Calculus', name: 'Integral Calculus' },
  { id: 'cal-de', subject: 'Calculus', name: 'Differential Equations' },
  { id: 'stat-forces', subject: 'Statics', name: 'Forces & Resultants', keyPending: true },
  { id: 'stat-equil', subject: 'Statics', name: 'Equilibrium', keyPending: true },
  { id: 'stat-frames', subject: 'Statics', name: 'Frames & Trusses', keyPending: true },
];

/** A topic item: a normal Question plus the topic it belongs to. */
export interface TopicQuestion extends Question {
  topicId: string;
  /** Set when the source prints no key yet, so scoring must stay off. */
  keyPending?: boolean;
  /**
   * The booklet's "Situation N" that this item hangs off. Items sharing a
   * situation share one figure, so they must stay contiguous and be read
   * together — a paired item is unsolvable on its own.
   */
  situation?: number;
  /** The situation's shared wording, repeated on each of its items. */
  situationText?: string;
}

/**
 * The bank. Each topic lives in its own module so it can be transcribed,
 * reviewed and committed independently; this array is the assembly point.
 */
export const TOPIC_QUESTIONS: TopicQuestion[] = [
  ...BM_ALGEBRA,
  ...BM_TRIG,
  ...BM_GEOMETRY,
  ...CAL_DIFF,
  ...CAL_INT,
  ...CAL_DE,
  ...STAT_FORCES,
  ...STAT_EQUIL,
];

/** How many items each topic currently holds. */
export function topicCount(topicId: string): number {
  return TOPIC_QUESTIONS.filter((q) => q.topicId === topicId).length;
}

/**
 * Randomly draw `perTopic` items from each chosen topic.
 *
 * Topics are drawn independently so a thin topic cannot starve a rich one, and
 * the result is shuffled across topics so a paper is not "all Algebra, then all
 * Trigonometry". If a topic has fewer items than asked for, every item it has is
 * used — silently substituting from another topic would misrepresent the drill.
 */
export function pickTopicQuestions(
  topicIds: string[],
  perTopic: number,
  rng: () => number = Math.random
): TopicQuestion[] {
  const out: TopicQuestion[] = [];
  for (const id of topicIds) {
    const pool = TOPIC_QUESTIONS.filter((q) => q.topicId === id);
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    out.push(...shuffled.slice(0, Math.max(0, perTopic)));
  }
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  // renumber so the paper reads 1..n regardless of source numbering
  return out.map((q, i) => ({ ...q, number: i + 1 }));
}

/** Total items available across the chosen topics. */
export function availableFor(topicIds: string[]): number {
  return topicIds.reduce((a, id) => a + topicCount(id), 0);
}
