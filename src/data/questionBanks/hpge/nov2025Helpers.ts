import { Question } from '../../../types/exam';
import {
  hpgeNov2025SolutionImages,
  hpgeNov2025SolutionPage,
  hpgeNov2025SolutionPageEnd,
} from '../../hpgeNov2025SolutionImages';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link hpgeNov2025SolutionImages} — never a whole page, so one item's working
 * cannot give away the next one's answer — and the folio numbers are read off
 * the folio map rather than passed by hand.
 *
 * Items 39-47 resolve to a situation's crop, because the booklet prints one
 * working for each group of three there rather than one per item.
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
    pageNumber: hpgeNov2025SolutionPage(item),
    pageNumberEnd: hpgeNov2025SolutionPageEnd(item),
    images: hpgeNov2025SolutionImages(item),
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
