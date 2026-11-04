import { Question } from '../../../types/exam';
import { hpgeMay2015SolutionImages } from '../../hpgeMay2015Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's crop from
 * {@link hpgeMay2015SolutionImages}, and `page`/`pageEnd` record the booklet
 * folio(s) the crop was taken from. Standalone items 1-28 get a band of their
 * own; items inside a "Situation n" block share the block, because the booklet
 * works the three parts together under one heading.
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
    images: hpgeMay2015SolutionImages(item),
    ...(note ? { note } : {}),
  },
});

/**
 * Recall item: the booklet prints the term and nothing else, so there is no
 * working to crop. `summary` states the definition instead.
 */
export const recall = (
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  summary: string,
) => ({
  correctAnswer: correct,
  referenceSource: 'Gillesania' as const,
  solution: {
    summary,
    steps: [] as string[],
    finalAnswer: answer,
  },
});

/**
 * Item whose working page is missing from the scanned volume.
 *
 * Situation 12 prints its data on folio 66 but is worked on folio 67, which the
 * scan skips entirely. There is no page to crop, so these carry the
 * classification written out in full and a `note` saying why the booklet's own
 * working cannot be shown.
 */
export const worked = (
  correct: 'A' | 'B' | 'C' | 'D',
  finalAnswer: string,
  summary: string,
  steps: string[],
  note: string,
) => ({
  correctAnswer: correct,
  referenceSource: 'Gillesania' as const,
  solution: {
    summary,
    steps,
    finalAnswer,
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
