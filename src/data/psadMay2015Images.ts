/**
 * Scanned assets for Gillesania Volume 4, PSAD May 2015.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Structural Engineering & Construction section of the May 2015 PRC board
 * examination. The questions occupy booklet folios 72-93, the printed answer
 * key sits at the foot of folio 93, and "Solutions to May 2015 Examination"
 * runs from folio 94 to folio 124.
 *
 * ## The scan's two defects in this section
 *
 * Folios 94 and 95 are the two sides of one leaf and were captured back to
 * front: pdf 98 carries folio 95 and pdf 99 carries folio 94. Reading order is
 * therefore pdf 99 (items 1-4), pdf 98 (Situation 1), pdf 100 onwards.
 *
 * ## Two kinds of solution block
 *
 * Items 1-4 are worked one at a time, each behind its own margin marker, so
 * each gets a crop of its own (`i01`-`i04`). From item 5 the booklet switches
 * to "Situation n" blocks of three items, and the margin marker sits beside the
 * situation label instead of an item number. Those are cropped whole and shared
 * by their three items, exactly as the booklet groups them -- cutting a
 * situation into three would have to guess where one part's working ends.
 *
 * A block that turns a page yields one image per page segment (`a`, `b`, ...),
 * shown in reading order: Situation 19 runs from folio 112 through 115 and is
 * four segments long.
 *
 * ## Figures
 *
 * The drawings the questions refer to are cropped from the question pages and
 * keyed by the number of the *situation* they belong to, because one drawing
 * serves every item in its situation. Situations 20 and 27 print no drawing of
 * their own. Situations 23 and 25 refer back to the column section already
 * given for Situations 22 and 24, so they reuse it.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */


import i01 from '../images/PSADMay2015/i01.jpg';
import i02 from '../images/PSADMay2015/i02.jpg';
import i03 from '../images/PSADMay2015/i03.jpg';
import i04 from '../images/PSADMay2015/i04.jpg';
import s01 from '../images/PSADMay2015/s01.jpg';
import s02 from '../images/PSADMay2015/s02.jpg';
import s03 from '../images/PSADMay2015/s03.jpg';
import s04 from '../images/PSADMay2015/s04.jpg';
import s05a from '../images/PSADMay2015/s05a.jpg';
import s05b from '../images/PSADMay2015/s05b.jpg';
import s06a from '../images/PSADMay2015/s06a.jpg';
import s06b from '../images/PSADMay2015/s06b.jpg';
import s07a from '../images/PSADMay2015/s07a.jpg';
import s07b from '../images/PSADMay2015/s07b.jpg';
import s08 from '../images/PSADMay2015/s08.jpg';
import s09a from '../images/PSADMay2015/s09a.jpg';
import s09b from '../images/PSADMay2015/s09b.jpg';
import s10a from '../images/PSADMay2015/s10a.jpg';
import s10b from '../images/PSADMay2015/s10b.jpg';
import s11a from '../images/PSADMay2015/s11a.jpg';
import s11b from '../images/PSADMay2015/s11b.jpg';
import s12a from '../images/PSADMay2015/s12a.jpg';
import s12b from '../images/PSADMay2015/s12b.jpg';
import s13 from '../images/PSADMay2015/s13.jpg';
import s14 from '../images/PSADMay2015/s14.jpg';
import s15 from '../images/PSADMay2015/s15.jpg';
import s16a from '../images/PSADMay2015/s16a.jpg';
import s16b from '../images/PSADMay2015/s16b.jpg';
import s17a from '../images/PSADMay2015/s17a.jpg';
import s17b from '../images/PSADMay2015/s17b.jpg';
import s18a from '../images/PSADMay2015/s18a.jpg';
import s18b from '../images/PSADMay2015/s18b.jpg';
import s19a from '../images/PSADMay2015/s19a.jpg';
import s19b from '../images/PSADMay2015/s19b.jpg';
import s19c from '../images/PSADMay2015/s19c.jpg';
import s19d from '../images/PSADMay2015/s19d.jpg';
import s20 from '../images/PSADMay2015/s20.jpg';
import s21a from '../images/PSADMay2015/s21a.jpg';
import s21b from '../images/PSADMay2015/s21b.jpg';
import s21c from '../images/PSADMay2015/s21c.jpg';
import s22 from '../images/PSADMay2015/s22.jpg';
import s23a from '../images/PSADMay2015/s23a.jpg';
import s23b from '../images/PSADMay2015/s23b.jpg';
import s24a from '../images/PSADMay2015/s24a.jpg';
import s24b from '../images/PSADMay2015/s24b.jpg';
import s25 from '../images/PSADMay2015/s25.jpg';
import s26a from '../images/PSADMay2015/s26a.jpg';
import s26b from '../images/PSADMay2015/s26b.jpg';
import s27a from '../images/PSADMay2015/s27a.jpg';
import s27b from '../images/PSADMay2015/s27b.jpg';

import f_arch3 from '../images/PSADMay2015/arch3.jpg';
import f_beam21 from '../images/PSADMay2015/beam21.jpg';
import f_beam7 from '../images/PSADMay2015/beam7.jpg';
import f_boxcol17 from '../images/PSADMay2015/boxcol17.jpg';
import f_brkt16 from '../images/PSADMay2015/brkt16.jpg';
import f_camp1 from '../images/PSADMay2015/camp1.jpg';
import f_col11 from '../images/PSADMay2015/col11.jpg';
import f_colsec22 from '../images/PSADMay2015/colsec22.jpg';
import f_elem13 from '../images/PSADMay2015/elem13.jpg';
import f_frame4 from '../images/PSADMay2015/frame4.jpg';
import f_frame8 from '../images/PSADMay2015/frame8.jpg';
import f_mohr12 from '../images/PSADMay2015/mohr12.jpg';
import f_pile26 from '../images/PSADMay2015/pile26.jpg';
import f_plan19 from '../images/PSADMay2015/plan19.jpg';
import f_splice14 from '../images/PSADMay2015/splice14.jpg';
import f_tbeam18 from '../images/PSADMay2015/tbeam18.jpg';
import f_tcol24 from '../images/PSADMay2015/tcol24.jpg';
import f_tower2 from '../images/PSADMay2015/tower2.jpg';
import f_truss10 from '../images/PSADMay2015/truss10.jpg';
import f_truss5 from '../images/PSADMay2015/truss5.jpg';
import f_truss6 from '../images/PSADMay2015/truss6.jpg';
import f_wall9 from '../images/PSADMay2015/wall9.jpg';
import f_weld15 from '../images/PSADMay2015/weld15.jpg';

/** Item -> the crop of the booklet's own working for that item. */
const ITEM_CROPS: Record<number, string[]> = {
  1: [i01],
  2: [i02],
  3: [i03],
  4: [i04],
};

/** Situation -> the crop(s) of its working, one per page segment. */
const SITUATION_CROPS: Record<number, string[]> = {
  1: [s01],
  2: [s02],
  3: [s03],
  4: [s04],
  5: [s05a, s05b],
  6: [s06a, s06b],
  7: [s07a, s07b],
  8: [s08],
  9: [s09a, s09b],
  10: [s10a, s10b],
  11: [s11a, s11b],
  12: [s12a, s12b],
  13: [s13],
  14: [s14],
  15: [s15],
  16: [s16a, s16b],
  17: [s17a, s17b],
  18: [s18a, s18b],
  19: [s19a, s19b, s19c, s19d],
  20: [s20],
  21: [s21a, s21b, s21c],
  22: [s22],
  23: [s23a, s23b],
  24: [s24a, s24b],
  25: [s25],
  26: [s26a, s26b],
  27: [s27a, s27b],
};

/** Items 5-85 belong to Situations 1-27, three items each. */
const ITEM_SITUATION: Record<number, number> = {
  5: 1, 6: 1, 7: 1, 8: 2, 9: 2, 10: 2, 11: 3, 12: 3, 13: 3,
  14: 4, 15: 4, 16: 4, 17: 5, 18: 5, 19: 5, 20: 6, 21: 6, 22: 6,
  23: 7, 24: 7, 25: 7, 26: 8, 27: 8, 28: 8, 29: 9, 30: 9, 31: 9,
  32: 10, 33: 10, 34: 10, 35: 11, 36: 11, 37: 11, 38: 12, 39: 12, 40: 12,
  41: 13, 42: 13, 43: 13, 44: 14, 45: 14, 46: 14, 47: 15, 48: 15, 49: 15,
  50: 16, 51: 16, 52: 16, 53: 17, 54: 17, 55: 17, 56: 18, 57: 18, 58: 18,
  59: 19, 60: 19, 61: 19, 62: 20, 63: 20, 64: 20, 65: 21, 66: 21, 67: 21,
  68: 22, 69: 22, 70: 22, 71: 23, 72: 23, 73: 23, 74: 24, 75: 24, 76: 24,
  77: 25, 78: 25, 79: 25, 80: 26, 81: 26, 82: 26, 83: 27, 84: 27, 85: 27,
};

/**
 * Solution crops for one item, in reading order. Empty only if the item is
 * outside the section.
 */
export function psadMay2015SolutionImages(item: number): string[] {
  const own = ITEM_CROPS[item];
  if (own) return own;
  const situation = ITEM_SITUATION[item];
  return situation ? SITUATION_CROPS[situation] ?? [] : [];
}

/** Whether the booklet prints working this item can be shown from. */
export function psadMay2015HasSolutionCrop(item: number): boolean {
  return psadMay2015SolutionImages(item).length > 0;
}

export const PSAD_MAY_2015_FIGURES: Record<number, string> = {
  1: f_camp1,
  2: f_tower2,
  3: f_arch3,
  4: f_frame4,
  5: f_truss5,
  6: f_truss6,
  7: f_beam7,
  8: f_frame8,
  9: f_wall9,
  10: f_truss10,
  11: f_col11,
  12: f_mohr12,
  13: f_elem13,
  14: f_splice14,
  15: f_weld15,
  16: f_brkt16,
  17: f_boxcol17,
  18: f_tbeam18,
  19: f_plan19,
  21: f_beam21,
  22: f_colsec22,
  24: f_tcol24,
  26: f_pile26,
  23: f_colsec22,
  25: f_tcol24,
};

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 */
export function psadMay2015Figure(situation: number, alt: string): string {
  const src = PSAD_MAY_2015_FIGURES[situation];
  if (!src) throw new Error(`No PSAD May 2015 figure for situation ${situation}`);
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img
    src="${src}"
    alt="${alt}"
    class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
    referrerpolicy="no-referrer"
  />
</div>`;
}
