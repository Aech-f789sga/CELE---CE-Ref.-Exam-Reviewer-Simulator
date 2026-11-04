import {
  psadNov2024SolutionImages,
  psadNov2024SolutionPage,
  psadNov2024SolutionPageEnd,
} from '../../psadNov2024Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped. Note that PSAD November 2024 is organised by situation:
 * the booklet prints one block of working for each three-part situation and
 * answers all three parts inside it, so items 3k-2, 3k-1 and 3k share
 * situation k's crops. That is the booklet's own unit, not a shortcut — there
 * is no per-item marker to cut along.
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
    pageNumber: psadNov2024SolutionPage(item),
    pageNumberEnd: psadNov2024SolutionPageEnd(item),
    images: psadNov2024SolutionImages(item),
    ...(note ? { note } : {}),
  },
});
