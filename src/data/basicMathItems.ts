/**
 * Shared plumbing for the Basic Mathematics topics (Algebra, Trigonometry,
 * Geometry) of Margallo's Buckling Review Center practice set.
 *
 * The booklet prints one answer key covering all 269 items, numbered straight
 * through the three sections: Algebra 1-125, Trigonometry 126-189, Geometry
 * 190-269. The key lives here once so the three per-topic modules can stay
 * purely declarative and cannot drift apart.
 */
import type { TopicQuestion } from './topicBanks';

/** Printed key, items 1-269. Index is `number - 1`. */
export const BM_KEY: string[] = [
  'A', 'B', 'B', 'C', 'A', 'D', 'C', 'C', 'A', 'C',
  'A', 'C', 'B', 'C', 'D', 'B', 'D', 'A', 'C', 'C',
  'B', 'A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C',
  'A', 'B', 'B', 'B', 'A', 'D', 'C', 'B', 'C', 'A',
  'D', 'B', 'C', 'B', 'A', 'A', 'C', 'B', 'D', 'A',
  'A', 'A', 'B', 'C', 'C', 'D', 'C', 'A', 'B', 'C',
  'B', 'A', 'C', 'B', 'B', 'A', 'C', 'B', 'B', 'C',
  'A', 'D', 'C', 'A', 'B', 'A', 'D', 'D', 'A', 'D',
  'C', 'D', 'C', 'A', 'D', 'B', 'B', 'C', 'C', 'C',
  'A', 'D', 'A', 'C', 'D', 'C', 'D', 'C', 'B', 'A',
  'A', 'A', 'A', 'D', 'A', 'A', 'B', 'C', 'D', 'C',
  'B', 'C', 'D', 'B', 'B', 'A', 'A', 'B', 'B', 'C',
  'B', 'B', 'B', 'B', 'B', 'A', 'D', 'B', 'C', 'A',
  'B', 'B', 'C', 'A', 'D', 'D', 'B', 'A', 'C', 'A',
  'D', 'B', 'C', 'D', 'A', 'C', 'B', 'D', 'B', 'D',
  'D', 'A', 'A', 'D', 'B', 'B', 'B', 'C', 'C', 'C',
  'D', 'C', 'D', 'B', 'C', 'D', 'B', 'C', 'A', 'C',
  'B', 'A', 'C', 'B', 'D', 'D', 'C', 'A', 'D', 'B',
  'C', 'A', 'B', 'A', 'D', 'A', 'D', 'C', 'B', 'D',
  'A', 'A', 'C', 'C', 'A', 'B', 'C', 'D', 'B', 'B',
  'C', 'B', 'C', 'A', 'A', 'D', 'B', 'C', 'C', 'A',
  'A', 'B', 'D', 'B', 'C', 'A', 'A', 'C', 'B', 'A',
  'A', 'C', 'D', 'B', 'B', 'C', 'B', 'A', 'D', 'B',
  'A', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'B', 'A',
  'B', 'C', 'D', 'B', 'C', 'D', 'A', 'B', 'A', 'B',
  'C', 'B', 'B', 'C', 'A', 'A', 'A', 'C', 'A', 'D',
  'B', 'A', 'B', 'A', 'C', 'D', 'C', 'D', 'C',
];

/**
 * Builds the `q(number, stem, [a, b, c, d], page)` helper each topic module
 * uses. The answer is looked up from `BM_KEY` rather than typed per item, so a
 * transcription slip can never silently disagree with the printed key.
 */
export function makeBmItem(
  topicId: string,
  category: string,
  idPrefix: string
): (
  number: number,
  text: string,
  opts: [string, string, string, string],
  page: number
) => TopicQuestion {
  return (number, text, opts, page) => ({
    id: `${idPrefix}-${number}`,
    number,
    pageNumber: page,
    subject: 'MSTC',
    year: 0,
    month: 'May',
    category,
    text,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: (BM_KEY[number - 1] ?? 'A') as 'A' | 'B' | 'C' | 'D',
    referenceSource: 'Gillesania',
    topicId,
    solution: {
      summary: 'Printed key only — this booklet carries no worked solutions.',
      steps: [],
      finalAnswer: BM_KEY[number - 1] ?? '',
    },
  });
}
