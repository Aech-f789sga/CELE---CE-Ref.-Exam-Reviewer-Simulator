import { Question } from '../../../types/exam';

/**
 * Four-choice item with hand-derived working.
 *
 * The working here is the transcription's own derivation, used to check the
 * printed key while the section was being built. For the 72 items whose working
 * the booklet prints, {@link MSTC_NOV_2016_QUESTIONS} swaps these steps for the
 * scanned booklet crop — so this text is what the app shows only for the three
 * items the booklet never works: 4, 42 and 71.
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
