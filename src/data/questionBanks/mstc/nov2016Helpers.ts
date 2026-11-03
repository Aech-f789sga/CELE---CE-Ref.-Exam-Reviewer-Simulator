import { Question } from '../../../types/exam';

/**
 * Four-choice item whose working is written out rather than cropped.
 *
 * The November 2016 booklet numbers its solution blocks with a small boxed
 * figure in the left margin, and those boxes survive the scan too faintly to
 * locate reliably (OCR finds roughly a third of them). Rather than guess at
 * crop bands — which risks one item's working giving away the next item's
 * answer — this section carries the working as text, derived from the printed
 * data and checked against the printed key.
 *
 * `summary` is deliberately empty: `note` already carries the editorial
 * remark, and filling both would print the same sentence twice.
 */
export const worked = (
  correct: 'A' | 'B' | 'C' | 'D',
  finalAnswer: string,
  steps: string[],
  note?: string,
) => ({
  correctAnswer: correct,
  referenceSource: 'Gillesania' as const,
  solution: {
    summary: '',
    steps,
    finalAnswer,
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
