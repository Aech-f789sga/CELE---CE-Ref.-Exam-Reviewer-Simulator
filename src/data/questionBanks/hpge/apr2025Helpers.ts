import {
  hpgeApr2025SolutionImages,
  hpgeApr2025SolutionPage,
  hpgeApr2025SolutionPageEnd,
} from '../../hpgeApr2025Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link hpgeApr2025SolutionImages} and the folio numbers are read off the
 * folio map rather than passed by hand.
 *
 * Items 1-27 each own a crop that opens on their book icon and number. Items
 * 28-45 are six three-part situations: the booklet prints one block of working
 * per situation, headed "Situation N" and divided into "Part 1:" ... "Part 3:",
 * with no per-item marker to cut along. So each of the three items in a
 * situation carries that situation's crops, and the three share the same
 * images -- the booklet's own unit, as in PSAD November 2024.
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
    pageNumber: hpgeApr2025SolutionPage(item),
    pageNumberEnd: hpgeApr2025SolutionPageEnd(item),
    images: hpgeApr2025SolutionImages(item),
    ...(note ? { note } : {}),
  },
});
