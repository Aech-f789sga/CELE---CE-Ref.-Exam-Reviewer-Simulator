import { Question } from '../../../types/exam';
import {
  mstcMay2022SolutionImages,
  mstcMay2022SolutionPage,
  mstcMay2022SolutionPageEnd,
} from '../../mstcMay2022Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link mstcMay2022SolutionImages} — never a whole page, so one item's working
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
    pageNumber: mstcMay2022SolutionPage(item),
    pageNumberEnd: mstcMay2022SolutionPageEnd(item),
    images: mstcMay2022SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/**
 * Item the booklet keys but never works.
 *
 * Item 45 closes the foundation block by listing the five inputs of the dynamic
 * pile-driving formulas — penetration per blow, hammer energy, hammer weight,
 * pile weight, coefficient of restitution — and asks which of them bear on the
 * safe capacity. The booklet's solution run skips it entirely, going straight
 * from item 44 to item 46, so there is no working to crop.
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
