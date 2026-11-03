import { Question } from '../../../types/exam';
import {
  psadNov2017SolutionImages,
  psadNov2017SolutionPage,
  psadNov2017SolutionPageEnd,
} from '../../psadNov2017Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link psadNov2017SolutionImages} — never a whole page, so one item's working
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
    pageNumber: psadNov2017SolutionPage(item),
    pageNumberEnd: psadNov2017SolutionPageEnd(item),
    images: psadNov2017SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/**
 * Item the booklet keys but never works.
 *
 * Only the three recall questions of Situation 24 (items 70-72) fall in this
 * class: they ask for a definition or a code provision and the booklet prints
 * no derivation for them.
 */
export const recall = (
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  note: string,
) => ({
  correctAnswer: correct,
  referenceSource: 'Gillesania' as const,
  solution: {
    summary: 'The booklet keys this item but prints no worked solution for it.',
    steps: [] as string[],
    finalAnswer: answer,
    note,
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
