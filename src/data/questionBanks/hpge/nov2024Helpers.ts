import {
  hpgeNov2024SolutionImages,
  hpgeNov2024SolutionPage,
  hpgeNov2024SolutionPageEnd,
} from '../../hpgeNov2024Images';

/**
 * Four-choice item whose worked solution is the scanned booklet page.
 *
 * Nothing is retyped: `item` selects that item's own crop band from
 * {@link hpgeNov2024SolutionImages} — never a whole page, so one item's working
 * cannot give away the next one's answer — and the folio numbers are read off
 * the folio map rather than passed by hand.
 *
 * Items 27-41 are the five three-part situations, so a "band" there is bounded
 * by the booklet's own "Situation N" and "Part N:" headings rather than by a
 * numbered marker. The result is the same: one crop per item, in item order.
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
    pageNumber: hpgeNov2024SolutionPage(item),
    pageNumberEnd: hpgeNov2024SolutionPageEnd(item),
    images: hpgeNov2024SolutionImages(item),
    ...(note ? { note } : {}),
  },
});
