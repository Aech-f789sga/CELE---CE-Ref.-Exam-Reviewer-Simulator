import { Question } from '../../../types/exam';
import { hpgeNov2016SolutionImages } from '../../hpgeNov2016Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * The booklet prints its own working for almost every item, so nothing is
 * retyped: `item` selects that item's own crop band from
 * {@link hpgeNov2016SolutionImages} — never a whole situation, so one item's
 * solution cannot give away the next one's answer — and `page`/`pageEnd` record
 * the booklet folio the crop was taken from.
 */
export const solved = (
  item: number,
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
    images: hpgeNov2016SolutionImages(item),
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
