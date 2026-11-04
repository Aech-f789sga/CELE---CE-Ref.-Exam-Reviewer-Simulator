import { Question } from '../../../types/exam';
import { mstcMay2015SolutionImages } from '../../mstcMay2015Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * The booklet prints its own working for every item in this paper, so nothing is
 * retyped: `item` selects that item's crop from
 * {@link mstcMay2015SolutionImages} and `page`/`pageEnd` record the booklet folio
 * the crop came from. Items 23, 29, 41, 54 and 70 run over a page turn and yield
 * two crops, shown in reading order.
 *
 * `note` flags a defect in the booklet itself — a printed key that disagrees with
 * the booklet's own working — without altering the scanned page.
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
    images: mstcMay2015SolutionImages(item),
    ...(note ? { note } : {}),
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
