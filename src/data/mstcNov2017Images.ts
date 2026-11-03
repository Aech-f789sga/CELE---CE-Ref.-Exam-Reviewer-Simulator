/**
 * Scanned assets for Gillesania Volume 4, MSTC (Mathematics, Surveying &
 * Transportation Engineering) November 2017.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Mathematics, Surveying & Transportation Engineering section of the November
 * 2017 PRC board examination: questions on booklet folios 553-563, the 74-item
 * answer key at the foot of folio 563, worked solutions folios 564-587.
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`i*` keys, one entry per **item**): the booklet prints one
 *   continuous column of working, tagging each block with a small open-book
 *   glyph and the item number in the left margin. Each item is cropped on its
 *   own band, so an item never reveals the answer to a later item. Where the
 *   working runs over a page break the item yields two crops (`a`, `b`) shown
 *   in reading order.
 *
 *   Eighteen items carry no crop. Eleven of them (35, 44, 58, 63, 67-70, 72-74)
 *   are keyed from the stem alone -- the booklet prints no working at all.
 *   The other seven (6, 7, 8 and 16-19) would have been worked on folios 565
 *   and 568, but those two folios are **Hydraulics pages bound into this
 *   Mathematics run** -- a binding defect in the printed booklet -- so their
 *   content is simply not present in the scan. Item 5 stops mid-derivation for
 *   the same reason and its single crop ends at the problem statement.
 * - Figures (`fig*` keys): the two traverse tables and the contour table
 *   printed inside the question stems.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/MSTCNov2017/i01.jpg';
import i02 from '../images/MSTCNov2017/i02.jpg';
import i03 from '../images/MSTCNov2017/i03.jpg';
import i04 from '../images/MSTCNov2017/i04.jpg';
import i05 from '../images/MSTCNov2017/i05.jpg';
import i09 from '../images/MSTCNov2017/i09.jpg';
import i10 from '../images/MSTCNov2017/i10.jpg';
import i11 from '../images/MSTCNov2017/i11.jpg';
import i12 from '../images/MSTCNov2017/i12.jpg';
import i13 from '../images/MSTCNov2017/i13.jpg';
import i14 from '../images/MSTCNov2017/i14.jpg';
import i15 from '../images/MSTCNov2017/i15.jpg';
import i20 from '../images/MSTCNov2017/i20.jpg';
import i21a from '../images/MSTCNov2017/i21a.jpg';
import i21b from '../images/MSTCNov2017/i21b.jpg';
import i22 from '../images/MSTCNov2017/i22.jpg';
import i23 from '../images/MSTCNov2017/i23.jpg';
import i24 from '../images/MSTCNov2017/i24.jpg';
import i25a from '../images/MSTCNov2017/i25a.jpg';
import i25b from '../images/MSTCNov2017/i25b.jpg';
import i26 from '../images/MSTCNov2017/i26.jpg';
import i27 from '../images/MSTCNov2017/i27.jpg';
import i28 from '../images/MSTCNov2017/i28.jpg';
import i29 from '../images/MSTCNov2017/i29.jpg';
import i30 from '../images/MSTCNov2017/i30.jpg';
import i31 from '../images/MSTCNov2017/i31.jpg';
import i32a from '../images/MSTCNov2017/i32a.jpg';
import i32b from '../images/MSTCNov2017/i32b.jpg';
import i33 from '../images/MSTCNov2017/i33.jpg';
import i34 from '../images/MSTCNov2017/i34.jpg';
import i36 from '../images/MSTCNov2017/i36.jpg';
import i37 from '../images/MSTCNov2017/i37.jpg';
import i38 from '../images/MSTCNov2017/i38.jpg';
import i39 from '../images/MSTCNov2017/i39.jpg';
import i40 from '../images/MSTCNov2017/i40.jpg';
import i41 from '../images/MSTCNov2017/i41.jpg';
import i42 from '../images/MSTCNov2017/i42.jpg';
import i43 from '../images/MSTCNov2017/i43.jpg';
import i45 from '../images/MSTCNov2017/i45.jpg';
import i46 from '../images/MSTCNov2017/i46.jpg';
import i47 from '../images/MSTCNov2017/i47.jpg';
import i48 from '../images/MSTCNov2017/i48.jpg';
import i49 from '../images/MSTCNov2017/i49.jpg';
import i50 from '../images/MSTCNov2017/i50.jpg';
import i51 from '../images/MSTCNov2017/i51.jpg';
import i52 from '../images/MSTCNov2017/i52.jpg';
import i53 from '../images/MSTCNov2017/i53.jpg';
import i54 from '../images/MSTCNov2017/i54.jpg';
import i55 from '../images/MSTCNov2017/i55.jpg';
import i56 from '../images/MSTCNov2017/i56.jpg';
import i57 from '../images/MSTCNov2017/i57.jpg';
import i59 from '../images/MSTCNov2017/i59.jpg';
import i60 from '../images/MSTCNov2017/i60.jpg';
import i61 from '../images/MSTCNov2017/i61.jpg';
import i62 from '../images/MSTCNov2017/i62.jpg';
import i64a from '../images/MSTCNov2017/i64a.jpg';
import i64b from '../images/MSTCNov2017/i64b.jpg';
import i65 from '../images/MSTCNov2017/i65.jpg';
import i66 from '../images/MSTCNov2017/i66.jpg';
import i71 from '../images/MSTCNov2017/i71.jpg';
import fig63_traverse from '../images/MSTCNov2017/fig63_traverse.jpg';
import fig64_latdep from '../images/MSTCNov2017/fig64_latdep.jpg';
import fig71_contour from '../images/MSTCNov2017/fig71_contour.jpg';

/** Item -> its solution crop(s), in reading order. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [i01],
  i02: [i02],
  i03: [i03],
  i04: [i04],
  i05: [i05],
  i09: [i09],
  i10: [i10],
  i11: [i11],
  i12: [i12],
  i13: [i13],
  i14: [i14],
  i15: [i15],
  i20: [i20],
  i21: [i21a, i21b],
  i22: [i22],
  i23: [i23],
  i24: [i24],
  i25: [i25a, i25b],
  i26: [i26],
  i27: [i27],
  i28: [i28],
  i29: [i29],
  i30: [i30],
  i31: [i31],
  i32: [i32a, i32b],
  i33: [i33],
  i34: [i34],
  i36: [i36],
  i37: [i37],
  i38: [i38],
  i39: [i39],
  i40: [i40],
  i41: [i41],
  i42: [i42],
  i43: [i43],
  i45: [i45],
  i46: [i46],
  i47: [i47],
  i48: [i48],
  i49: [i49],
  i50: [i50],
  i51: [i51],
  i52: [i52],
  i53: [i53],
  i54: [i54],
  i55: [i55],
  i56: [i56],
  i57: [i57],
  i59: [i59],
  i60: [i60],
  i61: [i61],
  i62: [i62],
  i64: [i64a, i64b],
  i65: [i65],
  i66: [i66],
  i71: [i71],
};

/** Item -> the booklet folio its working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 564,
  2: 564,
  3: 564,
  4: 564,
  5: 564,
  9: 566,
  10: 566,
  11: 566,
  12: 567,
  13: 567,
  14: 567,
  15: 567,
  20: 569,
  21: 569,
  22: 570,
  23: 570,
  24: 571,
  25: 571,
  26: 572,
  27: 572,
  28: 573,
  29: 573,
  30: 573,
  31: 573,
  32: 573,
  33: 574,
  34: 575,
  36: 575,
  37: 576,
  38: 576,
  39: 576,
  40: 577,
  41: 577,
  42: 577,
  43: 577,
  45: 578,
  46: 578,
  47: 579,
  48: 579,
  49: 580,
  50: 580,
  51: 580,
  52: 580,
  53: 581,
  54: 581,
  55: 581,
  56: 582,
  57: 582,
  59: 582,
  60: 583,
  61: 583,
  62: 584,
  64: 585,
  65: 586,
  66: 586,
  71: 587,
};

/** Item -> the folio its working ends on, for the items that cross a page break. */
const SOLUTION_PAGE_END: Record<number, number> = {
  21: 570,
  25: 572,
  32: 574,
  64: 586,
};

export function mstcNov2017SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function mstcNov2017HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function mstcNov2017SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function mstcNov2017SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}

/** Figure crops keyed by the name used in the question data. */
export const MSTC_NOV_2017_FIGURES: Record<string, string> = {
  fig63_traverse: fig63_traverse,
  fig64_latdep: fig64_latdep,
  fig71_contour: fig71_contour,
};

export function mstcNov2017Figure(key: string, alt: string): string {
  const src = MSTC_NOV_2017_FIGURES[key];
  if (!src) throw new Error(`No MSTC November 2017 figure for "${key}"`);
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img
    src="${src}"
    alt="${alt}"
    class="max-w-xl w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
    referrerpolicy="no-referrer"
  />
</div>`;
}
