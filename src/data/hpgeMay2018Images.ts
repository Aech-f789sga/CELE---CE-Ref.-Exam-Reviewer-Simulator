/**
 * Scanned assets for Gillesania Volume 4, HPGE (Hydraulics and Geotechnical
 * Engineering) May 2018.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * the May 2018 PRC board examination: questions on booklet folios 690-696, the
 * 50-item answer key printed at the foot of folio 697 beneath Table 01, and the
 * worked solutions on folios 698-710 under the running head "Solutions to May
 * 2018 Examination".
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`s*` keys, one entry per **item**): the booklet marks the start
 *   of most items' working with a small book icon and its number in the left
 *   margin, so those bands run from one icon to the next. The Situation blocks
 *   for items 4-6, 9-11, 13-15, 17-19, 20-22 and 41-43 carry no per-item number
 *   at all -- only "Part n" tags, and those tags are not in reading order -- so
 *   each band there is bounded by the Part heading instead. 49 of the 50 items
 *   carry working; item 25 ("which is NOT a characteristic of a cohesionless
 *   soil") is a recall question and the solution run skips from 24 straight to
 *   26. Three items run over a folio break and yield two crops (`a`, `b`): 4,
 *   34 and 46.
 * - Figures (`fig*` keys): the pipe schedule and the three-reservoir diagram for
 *   Situation 5 (item 20), the gradation chart for Situation 6 (item 27), the
 *   confined-aquifer diagram for Situation 9 (item 37), and Table 01, the
 *   Terzaghi bearing-capacity factors, which fills folio 697 and is referenced
 *   by Situations 11 and 12 -- so it is attached to both items 44 and 47, the
 *   first item of each, from a single scan.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import s01 from '../images/HPGEMay2018/s01.jpg';
import s02 from '../images/HPGEMay2018/s02.jpg';
import s03 from '../images/HPGEMay2018/s03.jpg';
import s04a from '../images/HPGEMay2018/s04a.jpg';
import s04b from '../images/HPGEMay2018/s04b.jpg';
import s05 from '../images/HPGEMay2018/s05.jpg';
import s06 from '../images/HPGEMay2018/s06.jpg';
import s07 from '../images/HPGEMay2018/s07.jpg';
import s08 from '../images/HPGEMay2018/s08.jpg';
import s09 from '../images/HPGEMay2018/s09.jpg';
import s10 from '../images/HPGEMay2018/s10.jpg';
import s11 from '../images/HPGEMay2018/s11.jpg';
import s12 from '../images/HPGEMay2018/s12.jpg';
import s13 from '../images/HPGEMay2018/s13.jpg';
import s14 from '../images/HPGEMay2018/s14.jpg';
import s15 from '../images/HPGEMay2018/s15.jpg';
import s16 from '../images/HPGEMay2018/s16.jpg';
import s17 from '../images/HPGEMay2018/s17.jpg';
import s18 from '../images/HPGEMay2018/s18.jpg';
import s19 from '../images/HPGEMay2018/s19.jpg';
import s20 from '../images/HPGEMay2018/s20.jpg';
import s21 from '../images/HPGEMay2018/s21.jpg';
import s22 from '../images/HPGEMay2018/s22.jpg';
import s23 from '../images/HPGEMay2018/s23.jpg';
import s24 from '../images/HPGEMay2018/s24.jpg';
import s26 from '../images/HPGEMay2018/s26.jpg';
import s27 from '../images/HPGEMay2018/s27.jpg';
import s28 from '../images/HPGEMay2018/s28.jpg';
import s29 from '../images/HPGEMay2018/s29.jpg';
import s30 from '../images/HPGEMay2018/s30.jpg';
import s31 from '../images/HPGEMay2018/s31.jpg';
import s32 from '../images/HPGEMay2018/s32.jpg';
import s33 from '../images/HPGEMay2018/s33.jpg';
import s34a from '../images/HPGEMay2018/s34a.jpg';
import s34b from '../images/HPGEMay2018/s34b.jpg';
import s35 from '../images/HPGEMay2018/s35.jpg';
import s36 from '../images/HPGEMay2018/s36.jpg';
import s37 from '../images/HPGEMay2018/s37.jpg';
import s38 from '../images/HPGEMay2018/s38.jpg';
import s39 from '../images/HPGEMay2018/s39.jpg';
import s40 from '../images/HPGEMay2018/s40.jpg';
import s41 from '../images/HPGEMay2018/s41.jpg';
import s42 from '../images/HPGEMay2018/s42.jpg';
import s43 from '../images/HPGEMay2018/s43.jpg';
import s44 from '../images/HPGEMay2018/s44.jpg';
import s45 from '../images/HPGEMay2018/s45.jpg';
import s46a from '../images/HPGEMay2018/s46a.jpg';
import s46b from '../images/HPGEMay2018/s46b.jpg';
import s47 from '../images/HPGEMay2018/s47.jpg';
import s48 from '../images/HPGEMay2018/s48.jpg';
import s49 from '../images/HPGEMay2018/s49.jpg';
import s50 from '../images/HPGEMay2018/s50.jpg';
import fig_q20_pipes from '../images/HPGEMay2018/fig_q20_pipes.jpg';
import fig_q20_reservoirs from '../images/HPGEMay2018/fig_q20_reservoirs.jpg';
import fig_q27_gradation from '../images/HPGEMay2018/fig_q27_gradation.jpg';
import fig_q37_aquifer from '../images/HPGEMay2018/fig_q37_aquifer.jpg';
import fig_table01 from '../images/HPGEMay2018/fig_table01.jpg';

/** Item -> the crop(s) of its printed working, in reading order. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s01],
  i02: [s02],
  i03: [s03],
  i04: [s04a, s04b],
  i05: [s05],
  i06: [s06],
  i07: [s07],
  i08: [s08],
  i09: [s09],
  i10: [s10],
  i11: [s11],
  i12: [s12],
  i13: [s13],
  i14: [s14],
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
  i26: [s26],
  i27: [s27],
  i28: [s28],
  i29: [s29],
  i30: [s30],
  i31: [s31],
  i32: [s32],
  i33: [s33],
  i34: [s34a, s34b],
  i35: [s35],
  i36: [s36],
  i37: [s37],
  i38: [s38],
  i39: [s39],
  i40: [s40],
  i41: [s41],
  i42: [s42],
  i43: [s43],
  i44: [s44],
  i45: [s45],
  i46: [s46a, s46b],
  i47: [s47],
  i48: [s48],
  i49: [s49],
  i50: [s50],
};

/** Item -> booklet folio the working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 698,
  2: 698,
  3: 698,
  4: 698,
  5: 699,
  6: 698,
  7: 699,
  8: 699,
  9: 700,
  10: 700,
  11: 700,
  12: 700,
  13: 701,
  14: 701,
  15: 701,
  16: 702,
  17: 702,
  18: 702,
  19: 702,
  20: 703,
  21: 703,
  22: 703,
  23: 704,
  24: 704,
  26: 704,
  27: 705,
  28: 705,
  29: 705,
  30: 705,
  31: 705,
  32: 706,
  33: 706,
  34: 706,
  35: 707,
  36: 707,
  37: 708,
  38: 708,
  39: 708,
  40: 708,
  41: 709,
  42: 709,
  43: 709,
  44: 709,
  45: 709,
  46: 709,
  47: 710,
  48: 710,
  49: 710,
  50: 710,
};

/** Item -> booklet folio the working ends on, when it runs over a page. */
const SOLUTION_PAGE_END: Record<number, number> = {
  4: 699,
  34: 707,
  46: 710,
};

export function hpgeMay2018SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function hpgeMay2018HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function hpgeMay2018SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function hpgeMay2018SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}

/** Figure crops keyed by the name used in the question data. */
export const HPGE_MAY_2018_FIGURES: Record<string, string> = {
  fig_q20_pipes: fig_q20_pipes,
  fig_q20_reservoirs: fig_q20_reservoirs,
  fig_q27_gradation: fig_q27_gradation,
  fig_q37_aquifer: fig_q37_aquifer,
  fig_q44_table01: fig_table01,
  fig_q47_table01: fig_table01,
};

export function hpgeMay2018Figure(key: string, alt: string): string {
  const src = HPGE_MAY_2018_FIGURES[key];
  if (!src) throw new Error(`No HPGE May 2018 figure for "${key}"`);
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
