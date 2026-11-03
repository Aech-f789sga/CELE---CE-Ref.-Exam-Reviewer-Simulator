import { Question } from '../../../types/exam';
import { mstcMay2017SolutionImages } from '../../mstcMay2017Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link mstcMay2017SolutionImages} — never a whole page, so one item's working
 * cannot give away the next one's answer — and `page`/`pageEnd` record the
 * booklet folio the crop came from.
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
    images: mstcMay2017SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/**
 * Item the booklet keys but never works.
 *
 * Items 57, 61, 64, 67, 68 and 75 are answered from the stem alone — the May
 * 2017 solution section prints no working for them. Rather than invent a
 * derivation, `summary` records that the booklet gives none and `note` carries
 * the reasoning behind the printed key.
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
