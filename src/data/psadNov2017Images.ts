/**
 * Scanned assets for Gillesania Volume 4, PSAD (Structural Engineering and
 * Construction) November 2017.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Structural Engineering and Construction section of the November 2017 PRC
 * board examination: questions on booklet folios 615-633, the 72-item answer
 * key at the foot of folio 633, worked solutions on folios 634-658.
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`s*` keys, one entry per **item**): the booklet prints one
 *   continuous column of working and marks the answer to each item with a
 *   "-> Part n" tag. The tags are **not** in reading order -- Situation 3
 *   tags Part 2 on folio 635 and Part 1 on folio 636 -- so each item is
 *   mapped by the quantity its question asks for, not by the tag number.
 *
 *   69 of the 72 items carry working. Items 70-72 are the pure-recall
 *   questions of Situation 24 and the booklet prints no derivation for them.
 *   Seven items run over a page break and yield two crops (`a`, `b`) in
 *   reading order: 7, 16, 34, 58, 61 and 69, plus 21 whose Part 3 is a single
 *   sentence on the next folio.
 * - Figures (`fig*` keys): the nine diagrams printed inside the question
 *   stems (cylinder bin, second bin, three-hinged arch, parabolic cable,
 *   gable frame, double angle, stressed bar, beam grid, retaining wall,
 *   footing, spring beam, welded bracket, box column, floor framing plan,
 *   tied column) together with the four reference sheets the stems tell the
 *   candidate to use -- FIGURE 1-A (continuous-beam coefficients), FIGURE
 *   CODE-505.3 (NSCP allowable compressive stress) and FIGURE CODE-523
 *   (NSCP continuous-beam coefficients), the last in two pieces.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import s01 from '../images/PSADNov2017/s01.jpg';
import s02 from '../images/PSADNov2017/s02.jpg';
import s03 from '../images/PSADNov2017/s03.jpg';
import s04 from '../images/PSADNov2017/s04.jpg';
import s05 from '../images/PSADNov2017/s05.jpg';
import s06 from '../images/PSADNov2017/s06.jpg';
import s07a from '../images/PSADNov2017/s07a.jpg';
import s07b from '../images/PSADNov2017/s07b.jpg';
import s08 from '../images/PSADNov2017/s08.jpg';
import s09 from '../images/PSADNov2017/s09.jpg';
import s10 from '../images/PSADNov2017/s10.jpg';
import s11 from '../images/PSADNov2017/s11.jpg';
import s12 from '../images/PSADNov2017/s12.jpg';
import s13 from '../images/PSADNov2017/s13.jpg';
import s14 from '../images/PSADNov2017/s14.jpg';
import s15 from '../images/PSADNov2017/s15.jpg';
import s16a from '../images/PSADNov2017/s16a.jpg';
import s16b from '../images/PSADNov2017/s16b.jpg';
import s17 from '../images/PSADNov2017/s17.jpg';
import s18 from '../images/PSADNov2017/s18.jpg';
import s19 from '../images/PSADNov2017/s19.jpg';
import s20 from '../images/PSADNov2017/s20.jpg';
import s21 from '../images/PSADNov2017/s21.jpg';
import s22 from '../images/PSADNov2017/s22.jpg';
import s23 from '../images/PSADNov2017/s23.jpg';
import s24 from '../images/PSADNov2017/s24.jpg';
import s25 from '../images/PSADNov2017/s25.jpg';
import s26 from '../images/PSADNov2017/s26.jpg';
import s27 from '../images/PSADNov2017/s27.jpg';
import s28 from '../images/PSADNov2017/s28.jpg';
import s29 from '../images/PSADNov2017/s29.jpg';
import s30 from '../images/PSADNov2017/s30.jpg';
import s31 from '../images/PSADNov2017/s31.jpg';
import s32 from '../images/PSADNov2017/s32.jpg';
import s33 from '../images/PSADNov2017/s33.jpg';
import s34a from '../images/PSADNov2017/s34a.jpg';
import s34b from '../images/PSADNov2017/s34b.jpg';
import s35 from '../images/PSADNov2017/s35.jpg';
import s36 from '../images/PSADNov2017/s36.jpg';
import s37 from '../images/PSADNov2017/s37.jpg';
import s38 from '../images/PSADNov2017/s38.jpg';
import s39 from '../images/PSADNov2017/s39.jpg';
import s40 from '../images/PSADNov2017/s40.jpg';
import s41 from '../images/PSADNov2017/s41.jpg';
import s42 from '../images/PSADNov2017/s42.jpg';
import s43 from '../images/PSADNov2017/s43.jpg';
import s44 from '../images/PSADNov2017/s44.jpg';
import s45 from '../images/PSADNov2017/s45.jpg';
import s46 from '../images/PSADNov2017/s46.jpg';
import s47 from '../images/PSADNov2017/s47.jpg';
import s48 from '../images/PSADNov2017/s48.jpg';
import s49 from '../images/PSADNov2017/s49.jpg';
import s50 from '../images/PSADNov2017/s50.jpg';
import s51 from '../images/PSADNov2017/s51.jpg';
import s52 from '../images/PSADNov2017/s52.jpg';
import s53 from '../images/PSADNov2017/s53.jpg';
import s54 from '../images/PSADNov2017/s54.jpg';
import s55 from '../images/PSADNov2017/s55.jpg';
import s56 from '../images/PSADNov2017/s56.jpg';
import s57 from '../images/PSADNov2017/s57.jpg';
import s58a from '../images/PSADNov2017/s58a.jpg';
import s58b from '../images/PSADNov2017/s58b.jpg';
import s59 from '../images/PSADNov2017/s59.jpg';
import s60 from '../images/PSADNov2017/s60.jpg';
import s61a from '../images/PSADNov2017/s61a.jpg';
import s61b from '../images/PSADNov2017/s61b.jpg';
import s62 from '../images/PSADNov2017/s62.jpg';
import s63 from '../images/PSADNov2017/s63.jpg';
import s64 from '../images/PSADNov2017/s64.jpg';
import s65 from '../images/PSADNov2017/s65.jpg';
import s66 from '../images/PSADNov2017/s66.jpg';
import s67 from '../images/PSADNov2017/s67.jpg';
import s68 from '../images/PSADNov2017/s68.jpg';
import s69a from '../images/PSADNov2017/s69a.jpg';
import s69b from '../images/PSADNov2017/s69b.jpg';
import fig_s1_bin from '../images/PSADNov2017/fig_s1_bin.jpg';
import fig_s2_bin from '../images/PSADNov2017/fig_s2_bin.jpg';
import fig_s3_arch from '../images/PSADNov2017/fig_s3_arch.jpg';
import fig_s4_cable from '../images/PSADNov2017/fig_s4_cable.jpg';
import fig_s5_gable from '../images/PSADNov2017/fig_s5_gable.jpg';
import fig_s6_angle from '../images/PSADNov2017/fig_s6_angle.jpg';
import fig_s7_bar from '../images/PSADNov2017/fig_s7_bar.jpg';
import fig_s10_grid from '../images/PSADNov2017/fig_s10_grid.jpg';
import fig_code_1a_top from '../images/PSADNov2017/fig_code_1a_top.jpg';
import fig_code_1a_bot from '../images/PSADNov2017/fig_code_1a_bot.jpg';
import fig_s11_wall from '../images/PSADNov2017/fig_s11_wall.jpg';
import fig_s12_footing from '../images/PSADNov2017/fig_s12_footing.jpg';
import fig_s15_spring from '../images/PSADNov2017/fig_s15_spring.jpg';
import fig_s16_bracket from '../images/PSADNov2017/fig_s16_bracket.jpg';
import fig_s17_box from '../images/PSADNov2017/fig_s17_box.jpg';
import fig_code_505 from '../images/PSADNov2017/fig_code_505.jpg';
import fig_s21_plan from '../images/PSADNov2017/fig_s21_plan.jpg';
import fig_code_523a from '../images/PSADNov2017/fig_code_523a.jpg';
import fig_code_523b from '../images/PSADNov2017/fig_code_523b.jpg';
import fig_s23_col from '../images/PSADNov2017/fig_s23_col.jpg';

/** Item -> the crop(s) of its printed working, in reading order. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s01],
  i02: [s02],
  i03: [s03],
  i04: [s04],
  i05: [s05],
  i06: [s06],
  i07: [s07a, s07b],
  i08: [s08],
  i09: [s09],
  i10: [s10],
  i11: [s11],
  i12: [s12],
  i13: [s13],
  i14: [s14],
  i15: [s15],
  i16: [s16a, s16b],
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
  i46: [s46],
  i47: [s47],
  i48: [s48],
  i49: [s49],
  i50: [s50],
  i51: [s51],
  i52: [s52],
  i53: [s53],
  i54: [s54],
  i55: [s55],
  i56: [s56],
  i57: [s57],
  i58: [s58a, s58b],
  i59: [s59],
  i60: [s60],
  i61: [s61a, s61b],
  i62: [s62],
  i63: [s63],
  i64: [s64],
  i65: [s65],
  i66: [s66],
  i67: [s67],
  i68: [s68],
  i69: [s69a, s69b],
};

/** Item -> booklet folio the working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 634,
  2: 634,
  3: 634,
  4: 635,
  5: 635,
  6: 635,
  7: 635,
  8: 635,
  9: 636,
  10: 636,
  11: 636,
  12: 637,
  13: 637,
  14: 638,
  15: 638,
  16: 638,
  17: 639,
  18: 639,
  19: 639,
  20: 639,
  21: 640,
  22: 640,
  23: 640,
  24: 640,
  25: 640,
  26: 641,
  27: 641,
  28: 642,
  29: 642,
  30: 643,
  31: 643,
  32: 643,
  33: 644,
  34: 644,
  35: 645,
  36: 645,
  37: 645,
  38: 646,
  39: 646,
  40: 646,
  41: 646,
  42: 646,
  43: 647,
  44: 647,
  45: 648,
  46: 648,
  47: 648,
  48: 648,
  49: 649,
  50: 649,
  51: 649,
  52: 650,
  53: 650,
  54: 650,
  55: 651,
  56: 651,
  57: 651,
  58: 652,
  59: 653,
  60: 653,
  61: 653,
  62: 655,
  63: 655,
  64: 656,
  65: 656,
  66: 656,
  67: 657,
  68: 657,
  69: 657,
};

/** Item -> booklet folio the working ends on, when it runs over a page. */
const SOLUTION_PAGE_END: Record<number, number> = {
  7: 636,
  16: 639,
  34: 645,
  58: 653,
  61: 654,
  69: 658,
};

export function psadNov2017SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function psadNov2017HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function psadNov2017SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function psadNov2017SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}

/** Figure crops keyed by the name used in the question data. */
export const PSAD_NOV_2017_FIGURES: Record<string, string> = {
  fig_s1_bin: fig_s1_bin,
  fig_s2_bin: fig_s2_bin,
  fig_s3_arch: fig_s3_arch,
  fig_s4_cable: fig_s4_cable,
  fig_s5_gable: fig_s5_gable,
  fig_s6_angle: fig_s6_angle,
  fig_s7_bar: fig_s7_bar,
  fig_s10_grid: fig_s10_grid,
  fig_code_1a_top: fig_code_1a_top,
  fig_code_1a_bot: fig_code_1a_bot,
  fig_s11_wall: fig_s11_wall,
  fig_s12_footing: fig_s12_footing,
  fig_s15_spring: fig_s15_spring,
  fig_s16_bracket: fig_s16_bracket,
  fig_s17_box: fig_s17_box,
  fig_code_505: fig_code_505,
  fig_s21_plan: fig_s21_plan,
  fig_code_523a: fig_code_523a,
  fig_code_523b: fig_code_523b,
  fig_s23_col: fig_s23_col,
};

export function psadNov2017Figure(key: string, alt: string): string {
  const src = PSAD_NOV_2017_FIGURES[key];
  if (!src) throw new Error(`No PSAD November 2017 figure for "${key}"`);
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
