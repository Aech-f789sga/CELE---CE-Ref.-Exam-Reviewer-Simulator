import { Question } from '../../../types/exam';
import { hpgeMay2017SolutionImages } from '../../hpgeMay2017Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link hpgeMay2017SolutionImages} — never a whole situation, so one item's
 * working cannot give away the next one's answer — and `page`/`pageEnd` record
 * the booklet folio the crop came from.
 *
 * The situation groups in this sitting (6-8, 12-14, 16-18, 19-21, 25-27, 34-36,
 * 41-43, 44-46) are printed by the booklet as one derivation tagged
 * "Part 1 / Part 2 / Part 3". Each item carries only its own part, and the first
 * item of a group also carries the situation statement.
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
    images: hpgeMay2017SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/**
 * Item the booklet keys but never works.
 *
 * Items 29, 30 and 47 are answered from the stem alone — the May 2017 solution
 * section prints no working for them. Rather than invent a derivation,
 * `summary` records that the booklet gives none and `note` carries the reasoning
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
