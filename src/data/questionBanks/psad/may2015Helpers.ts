import { Question } from '../../../types/exam';
import { psadMay2015SolutionImages } from '../../psadMay2015Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's crop from
 * {@link psadMay2015SolutionImages}, and `page`/`pageEnd` record the booklet
 * folio(s) the crop was taken from. Standalone items 1-4 get a band of their
 * own; items inside a "Situation n" block share the block, because the booklet
 * works the three parts together under one heading.
 */
export const solved = (
  item: number,
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  page: number,
  pageEnd: number = page,
) => ({
  correctAnswer: correct,
  referenceSource: 'Gillesania' as const,
  solution: {
    summary: '',
    steps: [] as string[],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: psadMay2015SolutionImages(item),
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
