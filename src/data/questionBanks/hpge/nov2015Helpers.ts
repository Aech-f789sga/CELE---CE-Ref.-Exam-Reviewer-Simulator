import { Question } from '../../../types/exam';
import { hpgeNov2015SolutionImages } from '../../hpgeNov2015Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * The booklet prints its own working for almost every item, so nothing is
 * retyped: `key` selects the crop set from {@link hpgeNov2015SolutionImages}
 * and `page`/`pageEnd` record the booklet folio the crop was taken from.
 */
export const solved = (
  key: string,
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  page: number,
  pageEnd: number = page,
  note?: string,
) => ({
  correctAnswer: correct,
  referenceSource: 'Gillesania' as const,
  solution: {
    summary: '',
    steps: [] as string[],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: hpgeNov2015SolutionImages(key),
    ...(note ? { note } : {}),
  },
});

/**
 * Recall item: the booklet prints the answer but no working at all, so there is
 * nothing to crop. `summary` states the one-line reason instead.
 */
export const recall = (
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  summary: string,
) => ({
  correctAnswer: correct,
  referenceSource: 'Gillesania' as const,
  solution: {
    summary,
    steps: [] as string[],
    finalAnswer: answer,
  },
});

/** Options helper so the A–D block stays compact in each item literal. */
export const opts = (
  a: string,
  b: string,
  c: string,
  d: string,
): Question['options'] => [
  { label: 'A', text: a },
  { label: 'B', text: b },
  { label: 'C', text: c },
  { label: 'D', text: d },
];
