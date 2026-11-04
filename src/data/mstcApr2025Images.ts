/**
 * Scanned assets for MSTC April 2025, Volume 6.
 *
 * Volume 6 is a two-up scan: each PDF page carries two book pages, so
 * `pdf = 5 + floor(bookPage / 2)` with even book pages on the left half. The
 * questions run over folios 330-347 with the 66-item key on folio 348, then
 * "Solutions" from folio 349 to 386. Every item's working here is a crop of that
 * run -- nothing is retyped.
 *
 * This is the one section in the volume where the marker positions are read off
 * ruler strips rather than detected. The fold shadow along the spine is up to
 * 40 pt wide and reaches a grey level (97-184) that overlaps the print, so no
 * fixed or Otsu threshold separates the book icon from it; every automatic pass
 * either merged the icon into the shadow or split body text lines into markers.
 * The 66 positions are therefore supplied whole in the section spec, and each
 * item's crop is anchored on the position measured for it.
 *
 * Continuation crops are pinned to y = 62 rather than to the bottom of the
 * running head. The head on these pages is a short line of text ("356 MSTC")
 * rather than a bar, so a row-ink threshold that catches it also catches body
 * text, and the detected head bottom landed inside the head itself. Every head in
 * this section clears by y = 58, so 62 is safe and was checked against the crop
 * tops.
 *
 * The scan has no text layer past page 4, so the crops come from rendered page
 * images. Items 4, 5, 8, 13, 14, 15, 16, 18, 23, 24, 26, 27, 29, 37, 43, 44, 49,
 * 57, 62 and 65 break across a page turn and carry a second crop for the rest of
 * their working.
 */
import { Question } from '../types/exam';

import s01 from '../images/MSTCApr2025/s01.jpg';
import s02 from '../images/MSTCApr2025/s02.jpg';
import s03 from '../images/MSTCApr2025/s03.jpg';
import s04a from '../images/MSTCApr2025/s04a.jpg';
import s04b from '../images/MSTCApr2025/s04b.jpg';
import s05a from '../images/MSTCApr2025/s05a.jpg';
import s05b from '../images/MSTCApr2025/s05b.jpg';
import s06 from '../images/MSTCApr2025/s06.jpg';
import s07 from '../images/MSTCApr2025/s07.jpg';
import s08a from '../images/MSTCApr2025/s08a.jpg';
import s08b from '../images/MSTCApr2025/s08b.jpg';
import s09 from '../images/MSTCApr2025/s09.jpg';
import s10 from '../images/MSTCApr2025/s10.jpg';
import s11 from '../images/MSTCApr2025/s11.jpg';
import s12 from '../images/MSTCApr2025/s12.jpg';
import s13a from '../images/MSTCApr2025/s13a.jpg';
import s13b from '../images/MSTCApr2025/s13b.jpg';
import s14a from '../images/MSTCApr2025/s14a.jpg';
import s14b from '../images/MSTCApr2025/s14b.jpg';
import s15a from '../images/MSTCApr2025/s15a.jpg';
import s15b from '../images/MSTCApr2025/s15b.jpg';
import s16a from '../images/MSTCApr2025/s16a.jpg';
import s16b from '../images/MSTCApr2025/s16b.jpg';
import s17 from '../images/MSTCApr2025/s17.jpg';
import s18a from '../images/MSTCApr2025/s18a.jpg';
import s18b from '../images/MSTCApr2025/s18b.jpg';
import s19 from '../images/MSTCApr2025/s19.jpg';
import s20 from '../images/MSTCApr2025/s20.jpg';
import s21 from '../images/MSTCApr2025/s21.jpg';
import s22 from '../images/MSTCApr2025/s22.jpg';
import s23a from '../images/MSTCApr2025/s23a.jpg';
import s23b from '../images/MSTCApr2025/s23b.jpg';
import s24a from '../images/MSTCApr2025/s24a.jpg';
import s24b from '../images/MSTCApr2025/s24b.jpg';
import s25 from '../images/MSTCApr2025/s25.jpg';
import s26a from '../images/MSTCApr2025/s26a.jpg';
import s26b from '../images/MSTCApr2025/s26b.jpg';
import s27a from '../images/MSTCApr2025/s27a.jpg';
import s27b from '../images/MSTCApr2025/s27b.jpg';
import s28 from '../images/MSTCApr2025/s28.jpg';
import s29a from '../images/MSTCApr2025/s29a.jpg';
import s29b from '../images/MSTCApr2025/s29b.jpg';
import s30 from '../images/MSTCApr2025/s30.jpg';
import s31 from '../images/MSTCApr2025/s31.jpg';
import s32 from '../images/MSTCApr2025/s32.jpg';
import s33 from '../images/MSTCApr2025/s33.jpg';
import s34 from '../images/MSTCApr2025/s34.jpg';
import s35 from '../images/MSTCApr2025/s35.jpg';
import s36 from '../images/MSTCApr2025/s36.jpg';
import s37a from '../images/MSTCApr2025/s37a.jpg';
import s37b from '../images/MSTCApr2025/s37b.jpg';
import s38 from '../images/MSTCApr2025/s38.jpg';
import s39 from '../images/MSTCApr2025/s39.jpg';
import s40 from '../images/MSTCApr2025/s40.jpg';
import s41 from '../images/MSTCApr2025/s41.jpg';
import s42 from '../images/MSTCApr2025/s42.jpg';
import s43a from '../images/MSTCApr2025/s43a.jpg';
import s43b from '../images/MSTCApr2025/s43b.jpg';
import s44a from '../images/MSTCApr2025/s44a.jpg';
import s44b from '../images/MSTCApr2025/s44b.jpg';
import s45 from '../images/MSTCApr2025/s45.jpg';
import s46 from '../images/MSTCApr2025/s46.jpg';
import s47 from '../images/MSTCApr2025/s47.jpg';
import s48 from '../images/MSTCApr2025/s48.jpg';
import s49a from '../images/MSTCApr2025/s49a.jpg';
import s49b from '../images/MSTCApr2025/s49b.jpg';
import s50 from '../images/MSTCApr2025/s50.jpg';
import s51 from '../images/MSTCApr2025/s51.jpg';
import s52 from '../images/MSTCApr2025/s52.jpg';
import s53 from '../images/MSTCApr2025/s53.jpg';
import s54 from '../images/MSTCApr2025/s54.jpg';
import s55 from '../images/MSTCApr2025/s55.jpg';
import s56 from '../images/MSTCApr2025/s56.jpg';
import s57a from '../images/MSTCApr2025/s57a.jpg';
import s57b from '../images/MSTCApr2025/s57b.jpg';
import s58 from '../images/MSTCApr2025/s58.jpg';
import s59 from '../images/MSTCApr2025/s59.jpg';
import s60 from '../images/MSTCApr2025/s60.jpg';
import s61 from '../images/MSTCApr2025/s61.jpg';
import s62a from '../images/MSTCApr2025/s62a.jpg';
import s62b from '../images/MSTCApr2025/s62b.jpg';
import s63 from '../images/MSTCApr2025/s63.jpg';
import s64 from '../images/MSTCApr2025/s64.jpg';
import s65a from '../images/MSTCApr2025/s65a.jpg';
import s65b from '../images/MSTCApr2025/s65b.jpg';
import s66 from '../images/MSTCApr2025/s66.jpg';

const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s01],
  i02: [s02],
  i03: [s03],
  i04: [s04a, s04b],
  i05: [s05a, s05b],
  i06: [s06],
  i07: [s07],
  i08: [s08a, s08b],
  i09: [s09],
  i10: [s10],
  i11: [s11],
  i12: [s12],
  i13: [s13a, s13b],
  i14: [s14a, s14b],
  i15: [s15a, s15b],
  i16: [s16a, s16b],
  i17: [s17],
  i18: [s18a, s18b],
  i19: [s19],
  i20: [s20],
  i21: [s21],
  i22: [s22],
  i23: [s23a, s23b],
  i24: [s24a, s24b],
  i25: [s25],
  i26: [s26a, s26b],
  i27: [s27a, s27b],
  i28: [s28],
  i29: [s29a, s29b],
  i30: [s30],
  i31: [s31],
  i32: [s32],
  i33: [s33],
  i34: [s34],
  i35: [s35],
  i36: [s36],
  i37: [s37a, s37b],
  i38: [s38],
  i39: [s39],
  i40: [s40],
  i41: [s41],
  i42: [s42],
  i43: [s43a, s43b],
  i44: [s44a, s44b],
  i45: [s45],
  i46: [s46],
  i47: [s47],
  i48: [s48],
  i49: [s49a, s49b],
  i50: [s50],
  i51: [s51],
  i52: [s52],
  i53: [s53],
  i54: [s54],
  i55: [s55],
  i56: [s56],
  i57: [s57a, s57b],
  i58: [s58],
  i59: [s59],
  i60: [s60],
  i61: [s61],
  i62: [s62a, s62b],
  i63: [s63],
  i64: [s64],
  i65: [s65a, s65b],
  i66: [s66],
};

/** Booklet folio each item's working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 349,
  2: 349,
  3: 350,
  4: 350,
  5: 351,
  6: 352,
  7: 352,
  8: 352,
  9: 353,
  10: 353,
  11: 354,
  12: 355,
  13: 355,
  14: 356,
  15: 357,
  16: 358,
  17: 359,
  18: 359,
  19: 360,
  20: 361,
  21: 361,
  22: 362,
  23: 362,
  24: 363,
  25: 364,
  26: 364,
  27: 365,
  28: 366,
  29: 366,
  30: 367,
  31: 367,
  32: 368,
  33: 368,
  34: 368,
  35: 369,
  36: 369,
  37: 369,
  38: 370,
  39: 371,
  40: 372,
  41: 372,
  42: 373,
  43: 373,
  44: 374,
  45: 375,
  46: 376,
  47: 376,
  48: 377,
  49: 377,
  50: 378,
  51: 378,
  52: 379,
  53: 379,
  54: 380,
  55: 380,
  56: 381,
  57: 381,
  58: 382,
  59: 382,
  60: 383,
  61: 383,
  62: 383,
  63: 384,
  64: 385,
  65: 385,
  66: 386,
};

/** Folio the working ends on, for the items that run past a page break. */
const SOLUTION_PAGE_END: Record<number, number> = {
  4: 351,
  5: 352,
  8: 353,
  13: 356,
  14: 357,
  15: 358,
  16: 359,
  18: 360,
  23: 363,
  24: 364,
  26: 365,
  27: 366,
  29: 367,
  37: 370,
  43: 374,
  44: 375,
  49: 378,
  57: 382,
  62: 384,
  65: 386,
};


/** Booklet crops for one item's worked solution. */
export function mstcApr2025SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function mstcApr2025HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function mstcApr2025SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function mstcApr2025SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}
