import { Question } from '../../../types/exam';
import { mstcMay2016SolutionImages } from '../../mstcMay2016Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link mstcMay2016SolutionImages} — never a whole page, so one item's working
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
    images: mstcMay2016SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/**
 * Item the booklet marks but never works.
 *
 * The May 2016 solution section skips item 42 (it jumps 41 -> 43) and item 74
 * (73 -> 75). Rather than invent working, `summary` says the working is missing
 * and `note` carries the reasoning behind the printed key. `page` names where
 * the working would have stood.
 */
export const unsolved = (
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  page: number,
  summary: string,
  note: string,
) => ({
  correctAnswer: correct,
  referenceSource: 'Gillesania' as const,
  solution: {
    summary,
    steps: [] as string[],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: page,
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
