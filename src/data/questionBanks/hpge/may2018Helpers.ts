import { Question } from '../../../types/exam';
import {
  hpgeMay2018SolutionImages,
  hpgeMay2018SolutionPage,
  hpgeMay2018SolutionPageEnd,
} from '../../hpgeMay2018Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link hpgeMay2018SolutionImages} — never a whole page, so one item's working
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
    pageNumber: hpgeMay2018SolutionPage(item),
    pageNumberEnd: hpgeMay2018SolutionPageEnd(item),
    images: hpgeMay2018SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/**
 * Item the booklet keys but never works.
 *
 * Item 25 asks which property is *not* a characteristic of a cohesionless soil.
 * It sits between items 24 and 26 in the question run, but the solution run
 * jumps straight from 24 to 26 on folio 704, so no derivation exists to crop.
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
