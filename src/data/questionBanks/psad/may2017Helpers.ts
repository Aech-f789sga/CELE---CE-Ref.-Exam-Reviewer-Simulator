import { Question } from '../../../types/exam';
import {
  psadMay2017SolutionImages,
  psadMay2017SolutionPage,
  psadMay2017SolutionPageEnd,
} from '../../psadMay2017Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link psadMay2017SolutionImages} — never a whole situation, so one item's
 * working cannot give away the next one's answer — and the page numbers are read
 * off the folio map rather than passed by hand.
 *
 * The situations in this sitting (1-3, 4-6, 7-9, …) are printed by the booklet
 * as one derivation tagged "Part 1 / Part 2 / Part 3". Each item carries only its
 * own part, and the first item of a group also carries the situation statement.
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
    pageNumber: psadMay2017SolutionPage(item),
    pageNumberEnd: psadMay2017SolutionPageEnd(item),
    images: psadMay2017SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/**
 * Item the booklet keys but never works on its own.
 *
 * Item 9 asks for the force that keeps the tank in equilibrium. The booklet works
 * the sliding limit (15.653 kN) and the tipping limit (32.611 kN) and stops; the
 * answer is the smaller of the two, so rather than invent a third derivation
 * `summary` records that the booklet prints none and `note` carries the reasoning
 * behind the printed key.
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
