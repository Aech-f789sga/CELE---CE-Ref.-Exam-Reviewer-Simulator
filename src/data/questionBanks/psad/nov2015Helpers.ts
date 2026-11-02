import { Question } from '../../../types/exam';
import { psadNov2015SolutionImages } from '../../psadNov2015Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * The booklet works almost every item, so nothing is retyped: `item` selects
 * that item's own crop band from {@link psadNov2015SolutionImages} — never a
 * whole situation, so one item's solution cannot give away the next one's
 * answer — and `page`/`pageEnd` record the booklet folio the crop came from.
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
    images: psadNov2015SolutionImages(item),
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
