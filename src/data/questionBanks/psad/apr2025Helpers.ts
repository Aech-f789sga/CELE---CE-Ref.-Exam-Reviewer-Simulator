import {
  psadApr2025SolutionImages,
  psadApr2025SolutionPage,
  psadApr2025SolutionPageEnd,
} from '../../psadApr2025Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link psadApr2025SolutionImages} and the folio numbers come from the folio
 * map rather than being passed by hand.
 *
 * All 75 items are written as 25 three-part situations. The booklet prints one
 * block of working per situation, headed "Situation N" and divided into
 * "Part 1:" ... "Part 3:", with no per-item marker to cut along, so each of the
 * three items in a situation carries that situation's crops and the three share
 * the same images -- the booklet's own unit.
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
    pageNumber: psadApr2025SolutionPage(item),
    pageNumberEnd: psadApr2025SolutionPageEnd(item),
    images: psadApr2025SolutionImages(item),
    ...(note ? { note } : {}),
  },
});
