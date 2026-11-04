/**
 * Scanned assets for Gillesania Volume 4, MSTC (Mathematics, Surveying and
 * Transportation Engineering) May 2018.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * the May 2018 PRC board examination: questions on booklet folios 659-668, the
 * 62-item answer key at the foot of folio 669, and the worked solutions on
 * folios 670-689 under the running head "Solutions to May 2018 Examination".
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`s*` keys, one entry per **item**): the booklet marks the start
 *   of each item's working with a small book icon and its number in the left
 *   margin, so every band runs from that icon to the next one. 57 of the 62
 *   items carry working; 58-62 are recall questions about waves, freeway
 *   capacity, signage and edge lines and the booklet prints no derivation.
 *   Four items run over a folio break and yield two crops (`a`, `b`): 14, 39,
 *   45 and 51.
 * - Figures (`fig*` keys): the six tables the question stems print inline --
 *   the falling-body data (item 11), the consulting-job distribution (37), the
 *   quadrilateral angles (48), the lot dimensions (49), the closed traverse
 *   (50) and the azimuth/distance traverse with its two correction formulas
 *   (51) -- plus the compound vertical-curve diagram for item 57, which the
 *   booklet prints on the solution folio rather than beside the stem.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import s01 from '../images/MSTCMay2018/s01.jpg';
import s02 from '../images/MSTCMay2018/s02.jpg';
import s03 from '../images/MSTCMay2018/s03.jpg';
import s04 from '../images/MSTCMay2018/s04.jpg';
import s05 from '../images/MSTCMay2018/s05.jpg';
import s06 from '../images/MSTCMay2018/s06.jpg';
import s07 from '../images/MSTCMay2018/s07.jpg';
import s08 from '../images/MSTCMay2018/s08.jpg';
import s09 from '../images/MSTCMay2018/s09.jpg';
import s10 from '../images/MSTCMay2018/s10.jpg';
import s11 from '../images/MSTCMay2018/s11.jpg';
import s12 from '../images/MSTCMay2018/s12.jpg';
import s13 from '../images/MSTCMay2018/s13.jpg';
import s14a from '../images/MSTCMay2018/s14a.jpg';
import s14b from '../images/MSTCMay2018/s14b.jpg';
import s15 from '../images/MSTCMay2018/s15.jpg';
import s16 from '../images/MSTCMay2018/s16.jpg';
import s17 from '../images/MSTCMay2018/s17.jpg';
import s18 from '../images/MSTCMay2018/s18.jpg';
import s19 from '../images/MSTCMay2018/s19.jpg';
import s20 from '../images/MSTCMay2018/s20.jpg';
import s21 from '../images/MSTCMay2018/s21.jpg';
import s22 from '../images/MSTCMay2018/s22.jpg';
import s23 from '../images/MSTCMay2018/s23.jpg';
import s24 from '../images/MSTCMay2018/s24.jpg';
import s25 from '../images/MSTCMay2018/s25.jpg';
import s26 from '../images/MSTCMay2018/s26.jpg';
import s27 from '../images/MSTCMay2018/s27.jpg';
import s28 from '../images/MSTCMay2018/s28.jpg';
import s29 from '../images/MSTCMay2018/s29.jpg';
import s30 from '../images/MSTCMay2018/s30.jpg';
import s31 from '../images/MSTCMay2018/s31.jpg';
import s32 from '../images/MSTCMay2018/s32.jpg';
import s33 from '../images/MSTCMay2018/s33.jpg';
import s34 from '../images/MSTCMay2018/s34.jpg';
import s35 from '../images/MSTCMay2018/s35.jpg';
import s36 from '../images/MSTCMay2018/s36.jpg';
import s37 from '../images/MSTCMay2018/s37.jpg';
import s38 from '../images/MSTCMay2018/s38.jpg';
import s39a from '../images/MSTCMay2018/s39a.jpg';
import s39b from '../images/MSTCMay2018/s39b.jpg';
import s40 from '../images/MSTCMay2018/s40.jpg';
import s41 from '../images/MSTCMay2018/s41.jpg';
import s42 from '../images/MSTCMay2018/s42.jpg';
import s43 from '../images/MSTCMay2018/s43.jpg';
import s44 from '../images/MSTCMay2018/s44.jpg';
import s45a from '../images/MSTCMay2018/s45a.jpg';
import s45b from '../images/MSTCMay2018/s45b.jpg';
import s46 from '../images/MSTCMay2018/s46.jpg';
import s47 from '../images/MSTCMay2018/s47.jpg';
import s48 from '../images/MSTCMay2018/s48.jpg';
import s49 from '../images/MSTCMay2018/s49.jpg';
import s50 from '../images/MSTCMay2018/s50.jpg';
import s51a from '../images/MSTCMay2018/s51a.jpg';
import s51b from '../images/MSTCMay2018/s51b.jpg';
import s52 from '../images/MSTCMay2018/s52.jpg';
import s53 from '../images/MSTCMay2018/s53.jpg';
import s54 from '../images/MSTCMay2018/s54.jpg';
import s55 from '../images/MSTCMay2018/s55.jpg';
import s56 from '../images/MSTCMay2018/s56.jpg';
import s57 from '../images/MSTCMay2018/s57.jpg';
import fig_q11_table from '../images/MSTCMay2018/fig_q11_table.jpg';
import fig_q37_table from '../images/MSTCMay2018/fig_q37_table.jpg';
import fig_q48_table from '../images/MSTCMay2018/fig_q48_table.jpg';
import fig_q49_table from '../images/MSTCMay2018/fig_q49_table.jpg';
import fig_q50_table from '../images/MSTCMay2018/fig_q50_table.jpg';
import fig_q51_table from '../images/MSTCMay2018/fig_q51_table.jpg';
import fig_q57_curve from '../images/MSTCMay2018/fig_q57_curve.jpg';

/** Item -> the crop(s) of its printed working, in reading order. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s01],
  i02: [s02],
  i03: [s03],
  i04: [s04],
  i05: [s05],
  i06: [s06],
  i07: [s07],
  i08: [s08],
  i09: [s09],
  i10: [s10],
  i11: [s11],
  i12: [s12],
  i13: [s13],
  i14: [s14a, s14b],
  i15: [s15],
  i16: [s16],
  i17: [s17],
  i18: [s18],
  i19: [s19],
  i20: [s20],
  i21: [s21],
  i22: [s22],
  i23: [s23],
  i24: [s24],
  i25: [s25],
  i26: [s26],
  i27: [s27],
  i28: [s28],
  i29: [s29],
  i30: [s30],
  i31: [s31],
  i32: [s32],
  i33: [s33],
  i34: [s34],
  i35: [s35],
  i36: [s36],
  i37: [s37],
  i38: [s38],
  i39: [s39a, s39b],
  i40: [s40],
  i41: [s41],
  i42: [s42],
  i43: [s43],
  i44: [s44],
  i45: [s45a, s45b],
  i46: [s46],
  i47: [s47],
  i48: [s48],
  i49: [s49],
  i50: [s50],
  i51: [s51a, s51b],
  i52: [s52],
  i53: [s53],
  i54: [s54],
  i55: [s55],
  i56: [s56],
  i57: [s57],
};

/** Item -> booklet folio the working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 670,
  2: 670,
  3: 670,
  4: 670,
  5: 671,
  6: 671,
  7: 671,
  8: 671,
  9: 671,
  10: 672,
  11: 672,
  12: 672,
  13: 672,
  14: 672,
  15: 673,
  16: 673,
  17: 673,
  18: 673,
  19: 674,
  20: 674,
  21: 674,
  22: 675,
  23: 675,
  24: 675,
  25: 676,
  26: 676,
  27: 677,
  28: 677,
  29: 677,
  30: 678,
  31: 678,
  32: 678,
  33: 679,
  34: 679,
  35: 679,
  36: 679,
  37: 680,
  38: 680,
  39: 680,
  40: 681,
  41: 681,
  42: 681,
  43: 682,
  44: 682,
  45: 682,
  46: 683,
  47: 683,
  48: 684,
  49: 684,
  50: 685,
  51: 685,
  52: 686,
  53: 687,
  54: 687,
  55: 687,
  56: 688,
  57: 689,
};

/** Item -> booklet folio the working ends on, when it runs over a page. */
const SOLUTION_PAGE_END: Record<number, number> = {
  14: 673,
  39: 681,
  45: 683,
  51: 686,
};

export function mstcMay2018SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function mstcMay2018HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function mstcMay2018SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function mstcMay2018SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}

/** Figure crops keyed by the name used in the question data. */
export const MSTC_MAY_2018_FIGURES: Record<string, string> = {
  fig_q11_table: fig_q11_table,
  fig_q37_table: fig_q37_table,
  fig_q48_table: fig_q48_table,
  fig_q49_table: fig_q49_table,
  fig_q50_table: fig_q50_table,
  fig_q51_table: fig_q51_table,
  fig_q57_curve: fig_q57_curve,
};

export function mstcMay2018Figure(key: string, alt: string): string {
  const src = MSTC_MAY_2018_FIGURES[key];
  if (!src) throw new Error(`No MSTC May 2018 figure for "${key}"`);
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
