/**
 * Scanned assets for MSTC November 2024, Volume 6.
 *
 * Volume 6 is a two-up scan: each PDF page carries two book pages, so
 * `pdf = 5 + floor(bookPage / 2)` with even book pages on the left half. The
 * questions run over folios 165-181 with the 66-item key in a grid at the foot
 * of folio 182, then "Solutions" from folio 183 to 227. Every item's working
 * here is a crop of that run -- nothing is retyped.
 *
 * The scan has no text layer past page 4, so the crops come from rendered page
 * images. The marker for each item is a small book icon plus a bold number in
 * the left margin; bands run from a little above one marker to a little above
 * the next, so one item's working never carries the next one's answer.
 *
 * Twenty-two items run past a folio break. Twenty carry two crops (a, b):
 * 6, 19, 25, 28, 31, 32, 37, 42, 43, 44, 46, 47, 48, 49, 54, 55, 57, 60, 61
 * and 63. Item 52 carries three (52a-52c). Item 39 carries four (39a-39d): it
 * runs across two continuation folios that carry no marker of their own, so
 * both are cut whole and appended to it.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import { Question } from '../types/exam';

import s01 from '../images/MSTCNov2024/s01.jpg';
import s02 from '../images/MSTCNov2024/s02.jpg';
import s03 from '../images/MSTCNov2024/s03.jpg';
import s04 from '../images/MSTCNov2024/s04.jpg';
import s05 from '../images/MSTCNov2024/s05.jpg';
import s06a from '../images/MSTCNov2024/s06a.jpg';
import s06b from '../images/MSTCNov2024/s06b.jpg';
import s07 from '../images/MSTCNov2024/s07.jpg';
import s08 from '../images/MSTCNov2024/s08.jpg';
import s09 from '../images/MSTCNov2024/s09.jpg';
import s10 from '../images/MSTCNov2024/s10.jpg';
import s11 from '../images/MSTCNov2024/s11.jpg';
import s12 from '../images/MSTCNov2024/s12.jpg';
import s13 from '../images/MSTCNov2024/s13.jpg';
import s14 from '../images/MSTCNov2024/s14.jpg';
import s15 from '../images/MSTCNov2024/s15.jpg';
import s16 from '../images/MSTCNov2024/s16.jpg';
import s17 from '../images/MSTCNov2024/s17.jpg';
import s18 from '../images/MSTCNov2024/s18.jpg';
import s19a from '../images/MSTCNov2024/s19a.jpg';
import s19b from '../images/MSTCNov2024/s19b.jpg';
import s20 from '../images/MSTCNov2024/s20.jpg';
import s21 from '../images/MSTCNov2024/s21.jpg';
import s22 from '../images/MSTCNov2024/s22.jpg';
import s23 from '../images/MSTCNov2024/s23.jpg';
import s24 from '../images/MSTCNov2024/s24.jpg';
import s25a from '../images/MSTCNov2024/s25a.jpg';
import s25b from '../images/MSTCNov2024/s25b.jpg';
import s26 from '../images/MSTCNov2024/s26.jpg';
import s27 from '../images/MSTCNov2024/s27.jpg';
import s28a from '../images/MSTCNov2024/s28a.jpg';
import s28b from '../images/MSTCNov2024/s28b.jpg';
import s29 from '../images/MSTCNov2024/s29.jpg';
import s30 from '../images/MSTCNov2024/s30.jpg';
import s31a from '../images/MSTCNov2024/s31a.jpg';
import s31b from '../images/MSTCNov2024/s31b.jpg';
import s32a from '../images/MSTCNov2024/s32a.jpg';
import s32b from '../images/MSTCNov2024/s32b.jpg';
import s33 from '../images/MSTCNov2024/s33.jpg';
import s34 from '../images/MSTCNov2024/s34.jpg';
import s35 from '../images/MSTCNov2024/s35.jpg';
import s36 from '../images/MSTCNov2024/s36.jpg';
import s37a from '../images/MSTCNov2024/s37a.jpg';
import s37b from '../images/MSTCNov2024/s37b.jpg';
import s38 from '../images/MSTCNov2024/s38.jpg';
import s39a from '../images/MSTCNov2024/s39a.jpg';
import s39b from '../images/MSTCNov2024/s39b.jpg';
import s39c from '../images/MSTCNov2024/s39c.jpg';
import s39d from '../images/MSTCNov2024/s39d.jpg';
import s40 from '../images/MSTCNov2024/s40.jpg';
import s41 from '../images/MSTCNov2024/s41.jpg';
import s42a from '../images/MSTCNov2024/s42a.jpg';
import s42b from '../images/MSTCNov2024/s42b.jpg';
import s43a from '../images/MSTCNov2024/s43a.jpg';
import s43b from '../images/MSTCNov2024/s43b.jpg';
import s44a from '../images/MSTCNov2024/s44a.jpg';
import s44b from '../images/MSTCNov2024/s44b.jpg';
import s45 from '../images/MSTCNov2024/s45.jpg';
import s46a from '../images/MSTCNov2024/s46a.jpg';
import s46b from '../images/MSTCNov2024/s46b.jpg';
import s47a from '../images/MSTCNov2024/s47a.jpg';
import s47b from '../images/MSTCNov2024/s47b.jpg';
import s48a from '../images/MSTCNov2024/s48a.jpg';
import s48b from '../images/MSTCNov2024/s48b.jpg';
import s49a from '../images/MSTCNov2024/s49a.jpg';
import s49b from '../images/MSTCNov2024/s49b.jpg';
import s50 from '../images/MSTCNov2024/s50.jpg';
import s51 from '../images/MSTCNov2024/s51.jpg';
import s52a from '../images/MSTCNov2024/s52a.jpg';
import s52b from '../images/MSTCNov2024/s52b.jpg';
import s52c from '../images/MSTCNov2024/s52c.jpg';
import s53 from '../images/MSTCNov2024/s53.jpg';
import s54a from '../images/MSTCNov2024/s54a.jpg';
import s54b from '../images/MSTCNov2024/s54b.jpg';
import s55a from '../images/MSTCNov2024/s55a.jpg';
import s55b from '../images/MSTCNov2024/s55b.jpg';
import s56 from '../images/MSTCNov2024/s56.jpg';
import s57a from '../images/MSTCNov2024/s57a.jpg';
import s57b from '../images/MSTCNov2024/s57b.jpg';
import s58 from '../images/MSTCNov2024/s58.jpg';
import s59 from '../images/MSTCNov2024/s59.jpg';
import s60a from '../images/MSTCNov2024/s60a.jpg';
import s60b from '../images/MSTCNov2024/s60b.jpg';
import s61a from '../images/MSTCNov2024/s61a.jpg';
import s61b from '../images/MSTCNov2024/s61b.jpg';
import s62 from '../images/MSTCNov2024/s62.jpg';
import s63a from '../images/MSTCNov2024/s63a.jpg';
import s63b from '../images/MSTCNov2024/s63b.jpg';
import s64 from '../images/MSTCNov2024/s64.jpg';
import s65 from '../images/MSTCNov2024/s65.jpg';
import s66 from '../images/MSTCNov2024/s66.jpg';

const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s01],
  i02: [s02],
  i03: [s03],
  i04: [s04],
  i05: [s05],
  i06: [s06a, s06b],
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
  i19: [s19a, s19b],
  i20: [s20],
  i21: [s21],
  i22: [s22],
  i23: [s23],
  i24: [s24],
  i25: [s25a, s25b],
  i26: [s26],
  i27: [s27],
  i28: [s28a, s28b],
  i29: [s29],
  i30: [s30],
  i31: [s31a, s31b],
  i32: [s32a, s32b],
  i33: [s33],
  i34: [s34],
  i35: [s35],
  i36: [s36],
  i37: [s37a, s37b],
  i38: [s38],
  i39: [s39a, s39b, s39c, s39d],
  i40: [s40],
  i41: [s41],
  i42: [s42a, s42b],
  i43: [s43a, s43b],
  i44: [s44a, s44b],
  i45: [s45],
  i46: [s46a, s46b],
  i47: [s47a, s47b],
  i48: [s48a, s48b],
  i49: [s49a, s49b],
  i50: [s50],
  i51: [s51],
  i52: [s52a, s52b, s52c],
  i53: [s53],
  i54: [s54a, s54b],
  i55: [s55a, s55b],
  i56: [s56],
  i57: [s57a, s57b],
  i58: [s58],
  i59: [s59],
  i60: [s60a, s60b],
  i61: [s61a, s61b],
  i62: [s62],
  i63: [s63a, s63b],
  i64: [s64],
  i65: [s65],
  i66: [s66],
};

/** Booklet folio each item's working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 183,
  2: 183,
  3: 184,
  4: 184,
  5: 185,
  6: 185,
  7: 186,
  8: 186,
  9: 187,
  10: 187,
  11: 188,
  12: 188,
  13: 189,
  14: 189,
  15: 190,
  16: 190,
  17: 190,
  18: 191,
  19: 191,
  20: 192,
  21: 193,
  22: 194,
  23: 194,
  24: 195,
  25: 195,
  26: 196,
  27: 197,
  28: 197,
  29: 198,
  30: 199,
  31: 199,
  32: 200,
  33: 201,
  34: 202,
  35: 202,
  36: 203,
  37: 203,
  38: 204,
  39: 204,
  40: 208,
  41: 209,
  42: 209,
  43: 210,
  44: 211,
  45: 212,
  46: 212,
  47: 213,
  48: 214,
  49: 215,
  50: 216,
  51: 217,
  52: 217,
  53: 219,
  54: 219,
  55: 220,
  56: 221,
  57: 221,
  58: 222,
  59: 223,
  60: 223,
  61: 224,
  62: 225,
  63: 225,
  64: 226,
  65: 227,
  66: 227,
};

/** Folio the working ends on, for the items that run past a page break. */
const SOLUTION_PAGE_END: Record<number, number> = {
  6: 186,
  19: 192,
  25: 196,
  28: 198,
  31: 200,
  32: 201,
  37: 204,
  39: 207,
  42: 210,
  43: 211,
  44: 212,
  46: 213,
  47: 214,
  48: 215,
  49: 216,
  52: 219,
  54: 220,
  55: 221,
  57: 222,
  60: 224,
  61: 225,
  63: 226,
};

/** Booklet crops for one item's worked solution. */
export function mstcNov2024SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function mstcNov2024HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function mstcNov2024SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function mstcNov2024SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}
