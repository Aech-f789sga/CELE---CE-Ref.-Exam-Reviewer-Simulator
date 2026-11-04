import { Question } from '../../../types/exam';
import {
  mstcMay2018SolutionImages,
  mstcMay2018SolutionPage,
  mstcMay2018SolutionPageEnd,
} from '../../mstcMay2018Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link mstcMay2018SolutionImages} — never a whole page, so one item's working
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
    pageNumber: mstcMay2018SolutionPage(item),
    pageNumberEnd: mstcMay2018SolutionPageEnd(item),
    images: mstcMay2018SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/**
 * Item the booklet keys but never works.
 *
 * Items 58-62 close the paper with transportation-engineering recall questions —
 * what a wind-generated wave is called, what freeway "capacity" means, which
 * sign family warns of a hazard, why edge lines are painted, how capacity is
 * defined — and the booklet prints no derivation for any of them.
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
