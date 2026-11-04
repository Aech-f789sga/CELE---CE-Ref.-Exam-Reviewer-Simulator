/**
 * Scanned assets for MSTC November 2025, Volume 6.
 *
 * Volume 6 is a two-up scan: each PDF page carries two book pages, so
 * `pdf = 5 + floor(bookPage / 2)` with even book pages on the left half. The
 * questions run over folios 482-501 with the 65-item key at the foot of 501,
 * then "Solutions" from folio 502 to 547. Every item's working here is a crop of
 * that run -- nothing is retyped.
 *
 * Crops are cut at the middle of the blank band above each item's book-icon
 * marker, so a crop opens in white space and the marker itself is always whole.
 * That boundary is shared with the previous item's crop, so no printed line can
 * fall between two crops. The band is found from a per-row ink mask that ignores
 * any column dark for more than half the page height: the binding shadow and the
 * vertical rules run the full height, and while they were included no blank row
 * existed anywhere on an even folio and every boundary there silently degraded
 * to "reading minus five points".
 *
 * The scan has no text layer past page 4, so the crops come from rendered page
 * images. 22 items break across a page turn and carry extra crops for the rest
 * of their working: 3, 11, 14, 15, 19, 20, 22, 24, 26, 31, 34, 36, 37, 38, 40, 46, 47, 51, 54, 56, 61, 65.
 */
import { Question } from '../types/exam';

import s01 from '../images/MSTCNov2025Solutions/s01.jpg';
import s02 from '../images/MSTCNov2025Solutions/s02.jpg';
import s03 from '../images/MSTCNov2025Solutions/s03.jpg';
import s03b from '../images/MSTCNov2025Solutions/s03b.jpg';
import s04 from '../images/MSTCNov2025Solutions/s04.jpg';
import s05 from '../images/MSTCNov2025Solutions/s05.jpg';
import s06 from '../images/MSTCNov2025Solutions/s06.jpg';
import s07 from '../images/MSTCNov2025Solutions/s07.jpg';
import s08 from '../images/MSTCNov2025Solutions/s08.jpg';
import s09 from '../images/MSTCNov2025Solutions/s09.jpg';
import s10 from '../images/MSTCNov2025Solutions/s10.jpg';
import s11 from '../images/MSTCNov2025Solutions/s11.jpg';
import s11b from '../images/MSTCNov2025Solutions/s11b.jpg';
import s12 from '../images/MSTCNov2025Solutions/s12.jpg';
import s13 from '../images/MSTCNov2025Solutions/s13.jpg';
import s14 from '../images/MSTCNov2025Solutions/s14.jpg';
import s14b from '../images/MSTCNov2025Solutions/s14b.jpg';
import s14c from '../images/MSTCNov2025Solutions/s14c.jpg';
import s15 from '../images/MSTCNov2025Solutions/s15.jpg';
import s15b from '../images/MSTCNov2025Solutions/s15b.jpg';
import s16 from '../images/MSTCNov2025Solutions/s16.jpg';
import s17 from '../images/MSTCNov2025Solutions/s17.jpg';
import s18 from '../images/MSTCNov2025Solutions/s18.jpg';
import s19 from '../images/MSTCNov2025Solutions/s19.jpg';
import s19b from '../images/MSTCNov2025Solutions/s19b.jpg';
import s20 from '../images/MSTCNov2025Solutions/s20.jpg';
import s20b from '../images/MSTCNov2025Solutions/s20b.jpg';
import s21 from '../images/MSTCNov2025Solutions/s21.jpg';
import s22 from '../images/MSTCNov2025Solutions/s22.jpg';
import s22b from '../images/MSTCNov2025Solutions/s22b.jpg';
import s23 from '../images/MSTCNov2025Solutions/s23.jpg';
import s24 from '../images/MSTCNov2025Solutions/s24.jpg';
import s24b from '../images/MSTCNov2025Solutions/s24b.jpg';
import s25 from '../images/MSTCNov2025Solutions/s25.jpg';
import s26 from '../images/MSTCNov2025Solutions/s26.jpg';
import s26b from '../images/MSTCNov2025Solutions/s26b.jpg';
import s27 from '../images/MSTCNov2025Solutions/s27.jpg';
import s28 from '../images/MSTCNov2025Solutions/s28.jpg';
import s29 from '../images/MSTCNov2025Solutions/s29.jpg';
import s30 from '../images/MSTCNov2025Solutions/s30.jpg';
import s31 from '../images/MSTCNov2025Solutions/s31.jpg';
import s31b from '../images/MSTCNov2025Solutions/s31b.jpg';
import s32 from '../images/MSTCNov2025Solutions/s32.jpg';
import s33 from '../images/MSTCNov2025Solutions/s33.jpg';
import s34 from '../images/MSTCNov2025Solutions/s34.jpg';
import s34b from '../images/MSTCNov2025Solutions/s34b.jpg';
import s35 from '../images/MSTCNov2025Solutions/s35.jpg';
import s36 from '../images/MSTCNov2025Solutions/s36.jpg';
import s36b from '../images/MSTCNov2025Solutions/s36b.jpg';
import s36c from '../images/MSTCNov2025Solutions/s36c.jpg';
import s36d from '../images/MSTCNov2025Solutions/s36d.jpg';
import s37 from '../images/MSTCNov2025Solutions/s37.jpg';
import s37b from '../images/MSTCNov2025Solutions/s37b.jpg';
import s38 from '../images/MSTCNov2025Solutions/s38.jpg';
import s38b from '../images/MSTCNov2025Solutions/s38b.jpg';
import s38c from '../images/MSTCNov2025Solutions/s38c.jpg';
import s39 from '../images/MSTCNov2025Solutions/s39.jpg';
import s40 from '../images/MSTCNov2025Solutions/s40.jpg';
import s40b from '../images/MSTCNov2025Solutions/s40b.jpg';
import s41 from '../images/MSTCNov2025Solutions/s41.jpg';
import s42 from '../images/MSTCNov2025Solutions/s42.jpg';
import s43 from '../images/MSTCNov2025Solutions/s43.jpg';
import s44 from '../images/MSTCNov2025Solutions/s44.jpg';
import s45 from '../images/MSTCNov2025Solutions/s45.jpg';
import s46 from '../images/MSTCNov2025Solutions/s46.jpg';
import s46b from '../images/MSTCNov2025Solutions/s46b.jpg';
import s47 from '../images/MSTCNov2025Solutions/s47.jpg';
import s47b from '../images/MSTCNov2025Solutions/s47b.jpg';
import s48 from '../images/MSTCNov2025Solutions/s48.jpg';
import s49 from '../images/MSTCNov2025Solutions/s49.jpg';
import s50 from '../images/MSTCNov2025Solutions/s50.jpg';
import s51 from '../images/MSTCNov2025Solutions/s51.jpg';
import s51b from '../images/MSTCNov2025Solutions/s51b.jpg';
import s52 from '../images/MSTCNov2025Solutions/s52.jpg';
import s53 from '../images/MSTCNov2025Solutions/s53.jpg';
import s54 from '../images/MSTCNov2025Solutions/s54.jpg';
import s54b from '../images/MSTCNov2025Solutions/s54b.jpg';
import s55 from '../images/MSTCNov2025Solutions/s55.jpg';
import s56 from '../images/MSTCNov2025Solutions/s56.jpg';
import s56b from '../images/MSTCNov2025Solutions/s56b.jpg';
import s57 from '../images/MSTCNov2025Solutions/s57.jpg';
import s58 from '../images/MSTCNov2025Solutions/s58.jpg';
import s59 from '../images/MSTCNov2025Solutions/s59.jpg';
import s60 from '../images/MSTCNov2025Solutions/s60.jpg';
import s61 from '../images/MSTCNov2025Solutions/s61.jpg';
import s61b from '../images/MSTCNov2025Solutions/s61b.jpg';
import s62 from '../images/MSTCNov2025Solutions/s62.jpg';
import s63 from '../images/MSTCNov2025Solutions/s63.jpg';
import s64 from '../images/MSTCNov2025Solutions/s64.jpg';
import s65 from '../images/MSTCNov2025Solutions/s65.jpg';
import s65b from '../images/MSTCNov2025Solutions/s65b.jpg';

const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s01],
  i02: [s02],
  i03: [s03, s03b],
  i04: [s04],
  i05: [s05],
  i06: [s06],
  i07: [s07],
  i08: [s08],
  i09: [s09],
  i10: [s10],
  i11: [s11, s11b],
  i12: [s12],
  i13: [s13],
  i14: [s14, s14b, s14c],
  i15: [s15, s15b],
  i16: [s16],
  i17: [s17],
  i18: [s18],
  i19: [s19, s19b],
  i20: [s20, s20b],
  i21: [s21],
  i22: [s22, s22b],
  i23: [s23],
  i24: [s24, s24b],
  i25: [s25],
  i26: [s26, s26b],
  i27: [s27],
  i28: [s28],
  i29: [s29],
  i30: [s30],
  i31: [s31, s31b],
  i32: [s32],
  i33: [s33],
  i34: [s34, s34b],
  i35: [s35],
  i36: [s36, s36b, s36c, s36d],
  i37: [s37, s37b],
  i38: [s38, s38b, s38c],
  i39: [s39],
  i40: [s40, s40b],
  i41: [s41],
  i42: [s42],
  i43: [s43],
  i44: [s44],
  i45: [s45],
  i46: [s46, s46b],
  i47: [s47, s47b],
  i48: [s48],
  i49: [s49],
  i50: [s50],
  i51: [s51, s51b],
  i52: [s52],
  i53: [s53],
  i54: [s54, s54b],
  i55: [s55],
  i56: [s56, s56b],
  i57: [s57],
  i58: [s58],
  i59: [s59],
  i60: [s60],
  i61: [s61, s61b],
  i62: [s62],
  i63: [s63],
  i64: [s64],
  i65: [s65, s65b],
};


/** Booklet folio the item's working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 502,
  2: 502,
  3: 502,
  4: 503,
  5: 504,
  6: 504,
  7: 505,
  8: 505,
  9: 505,
  10: 506,
  11: 506,
  12: 507,
  13: 508,
  14: 508,
  15: 510,
  16: 512,
  17: 512,
  18: 513,
  19: 513,
  20: 514,
  21: 515,
  22: 515,
  23: 517,
  24: 517,
  25: 518,
  26: 518,
  27: 519,
  28: 519,
  29: 520,
  30: 520,
  31: 521,
  32: 522,
  33: 523,
  34: 523,
  35: 524,
  36: 524,
  37: 527,
  38: 528,
  39: 530,
  40: 530,
  41: 531,
  42: 532,
  43: 532,
  44: 533,
  45: 533,
  46: 533,
  47: 534,
  48: 535,
  49: 535,
  50: 536,
  51: 536,
  52: 537,
  53: 538,
  54: 538,
  55: 539,
  56: 540,
  57: 541,
  58: 542,
  59: 543,
  60: 544,
  61: 544,
  62: 545,
  63: 545,
  64: 546,
  65: 546,
};

/** Booklet folio the item's working ends on. */
const SOLUTION_PAGE_END: Record<number, number> = {
  3: 503,
  11: 507,
  14: 510,
  15: 511,
  19: 514,
  20: 515,
  22: 516,
  24: 518,
  26: 519,
  31: 522,
  34: 524,
  36: 527,
  37: 528,
  38: 530,
  40: 531,
  46: 534,
  47: 535,
  51: 537,
  54: 539,
  56: 541,
  61: 545,
  65: 547,
};

/** Booklet crops for one item's worked solution. */
export function mstcNov2025SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function mstcNov2025HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function mstcNov2025SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function mstcNov2025SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}
