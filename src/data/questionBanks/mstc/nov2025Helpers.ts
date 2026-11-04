import { Question } from '../../../types/exam';
import {
  mstcNov2025SolutionImages,
  mstcNov2025SolutionPage,
  mstcNov2025SolutionPageEnd,
} from '../../mstcNov2025SolutionImages';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link mstcNov2025SolutionImages} — never a whole page, so one item's working
 * cannot give away the next one's answer — and the folio numbers are read off
 * the folio map rather than passed by hand.
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
    pageNumber: mstcNov2025SolutionPage(item),
    pageNumberEnd: mstcNov2025SolutionPageEnd(item),
    images: mstcNov2025SolutionImages(item),
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
