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
}

const KEY_BASIC_MATH = [
  'A', 'B', 'B', 'C', 'A', 'D', 'C', 'C', 'A', 'C',
  'A', 'C', 'B', 'C', 'D', 'B', 'D', 'A', 'C', 'C',
  'B', 'A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C',
  'A', 'B', 'B', 'B', 'A', 'D', 'C', 'B', 'C', 'A',
  'D', 'B', 'C', 'B', 'A', 'A', 'C', 'B', 'D', 'A',
];

function bm(
  id: string,
  number: number,
  topicId: string,
  text: string,
  options: [string, string, string, string],
  page: number
): TopicQuestion {
  return {
    id,
    number,
    pageNumber: page,
    subject: 'MSTC',
    year: 0,
    month: 'May',
    category: TOPICS.find((t) => t.id === topicId)?.name ?? 'Algebra',
    text,
    options: options.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: (KEY_BASIC_MATH[number - 1] ?? 'A') as 'A' | 'B' | 'C' | 'D',
    referenceSource: 'Gillesania',
    topicId,
    solution: {
      summary: 'Printed key only — this booklet carries no worked solutions.',
      steps: [],
      finalAnswer: KEY_BASIC_MATH[number - 1] ?? '',
    },
  };
}

/**
 * The bank. Basic Math Algebra is transcribed from the booklet pages; the
 * remaining topics are being transcribed in the same pass and append here.
 */
export const TOPIC_QUESTIONS: TopicQuestion[] = [
  bm(
    'bm-alg-2', 2, 'bm-algebra',
    'The most populous metropolitan region in the United States is New York City, although it is only the sixth most populous metropolis in the world. Tokyo is the most populous metropolitan region. Mexico City is the fifth most populous metropolis in the world. Mexico City\u2019s population is 0.03 million more than New York\u2019s, and Tokyo\u2019s is twice that of New York, decreased by 2.19 million. Write the sum of the populations of these three metropolitan regions as an algebraic expression. Let x be the population of New York (in millions).',
    ['4x \u2212 2.61', '4x \u2212 2.16', '4x \u2212 1.26', '4x \u2212 1.62'],
    1
  ),
  bm(
    'bm-alg-3', 3, 'bm-algebra',
    'After examining 240 sweaters, a quality-control inspector found 5 with defective stitching, 8 with mismatched designs, and 2 with incorrect labels. What percent were defective?',
    ['5.25%', '6.25%', '4.25%', '7.25%'],
    1
  ),
  bm(
    'bm-alg-4', 4, 'bm-algebra',
    'One-third of the movie audience left the theater in disgust. If 78 angry patrons walked out, how many were there originally?',
    ['324', '342', '234', '243'],
    1
  ),
  bm(
    'bm-alg-5', 5, 'bm-algebra',
    'If 2,484 union members represent 90% of a factory\u2019s work force, how many workers are employed?',
    ['2,760', '2,670', '2,076', '2,607'],
    1
  ),
  bm(
    'bm-alg-6', 6, 'bm-algebra',
    'Find the original cost of a car that is worth $10,250 after depreciating $7,500.',
    ['$16,650', '$15,550', '$14,450', '$17,750'],
    1
  ),
  bm(
    'bm-alg-8', 8, 'bm-algebra',
    'A camera that was originally priced at $452 is on sale for $384.20. Find the percent of markdown.',
    ['10%', '12%', '15%', '18%'],
    1
  ),
  bm(
    'bm-alg-9', 9, 'bm-algebra',
    'A new fax machine was recently purchased for an office in Hopedale for $464.40 including tax. If the tax rate in Hopedale is 8%, find the price of the fax machine before tax.',
    ['$430', '$330', '$440', '$340'],
    1
  ),
  bm(
    'bm-alg-10', 10, 'bm-algebra',
    'In 2009, the population of Brazil was 191.5 million. This represented a decrease in population of 3.7% from 2000. What was the population (in million) of Brazil in 2000?',
    ['189.9', '188.8', '198.9', '199.9'],
    1
  ),
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
