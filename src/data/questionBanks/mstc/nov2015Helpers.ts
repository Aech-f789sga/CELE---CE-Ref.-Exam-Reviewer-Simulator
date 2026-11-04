import { Question } from '../../../types/exam';
import { mstcNov2015SolutionImages } from '../../mstcNov2015Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * The booklet prints its own working for every item in this paper, so nothing is
 * retyped: `item` selects that item's crop from
 * {@link mstcNov2015SolutionImages} and `page`/`pageEnd` record the booklet folio
 * the crop came from. Items 10, 20, 25, 28, 33, 46, 57, 77 and 84 run over a
 * page turn and yield two crops, shown in reading order.
 *
 * `note` flags a defect in the booklet itself — here item 50, whose printed key
 * and printed working both give 1/4 for a latus rectum that is really 4 —
 * without altering the scanned page.
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
    images: mstcNov2015SolutionImages(item),
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
