import {
  psadNov2025SolutionImages,
  psadNov2025SolutionPage,
  psadNov2025SolutionPageEnd,
} from '../../psadNov2025SolutionImages';
import { Question } from '../../../types/exam';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's crop band from
 * {@link psadNov2025SolutionImages} and the folio numbers come from the folio
 * map rather than being passed by hand.
 *
 * All 75 items are written as 25 three-part situations. The booklet prints one
 * block of working per situation, headed "Situation N" and divided into
 * "Part 1:" ... "Part 3:", with no per-item marker to cut along, so each of the
 * three items in a situation carries that situation's crops and the three share
 * the same images -- the booklet's own unit.
 */
export const solved = (
  item: number,
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  note?: string,
) => ({
  correctAnswer: correct,
  referenceSource: 'Gillesania' as const,
  solution: {
    summary: '',
    steps: [] as string[],
    finalAnswer: answer,
    pageNumber: psadNov2025SolutionPage(item),
    pageNumberEnd: psadNov2025SolutionPageEnd(item),
    images: psadNov2025SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/** Options helper so the A-D block stays compact in each item literal. */
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
