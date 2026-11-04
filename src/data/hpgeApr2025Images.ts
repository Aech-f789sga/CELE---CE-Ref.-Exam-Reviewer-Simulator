/**
 * Scanned assets for HPGE April 2025, Volume 6.
 *
 * Volume 6 is a two-up scan: each PDF page carries two book pages, so
 * `pdf = 5 + floor(bookPage / 2)` with even book pages on the left half. The
 * questions run over folios 387-393 with the 45-item key on folio 394, then
 * "Solutions" from folio 395 to 418. Every item's working here is a crop of that
 * run -- nothing is retyped.
 *
 * The section changes its own layout halfway through, and the crops follow it.
 * Items 1-27 each open on a small book icon and a bold number in the page's left
 * margin; items 28-45 are six three-part situations that open on a
 * "📖 Situation N" heading and divide into "Part 1:", "Part 2:", "Part 3:"
 * sub-headings with no per-item marker at all. The booklet prints one block of
 * working per situation, so each of the three items in a situation points at that
 * situation's crops and the three share the same images -- the booklet's own unit,
 * as in PSAD November 2024.
 *
 * Marker positions were not detected here. A template of the book icon matches the
 * left page's print at 0.83-0.94 but stops matching on the right page, where the
 * same icon is set portrait (8.2 x 10.1 pt) rather than landscape (10.6 x 8.6 pt)
 * and the skew differs page to page; every threshold that caught one half lost the
 * other. The 27 marker positions were therefore read off a grid of candidate
 * windows with a 5 pt ruler, and the situation headings the same way. Two of the
 * five that a plain ruler render put 15-20 pt too low were corrected that way.
 *
 * Continuation crops matter more here than in any other section: 26 of the 45
 * items run past a page turn or past a figure, and their second crop is the only
 * place the working finishes. Items 6, 7, 9, 10, 12, 15, 17, 19, 23, 26 and 27
 * carry one, and all 18 situation items carry one because every situation spans a
 * spread.
 *
 * The scan has no text layer past page 4, so the crops come from rendered page
 * images.
 */
import { Question } from '../types/exam';

import s01 from '../images/HPGEApr2025/s01.jpg';
import s02 from '../images/HPGEApr2025/s02.jpg';
import s03 from '../images/HPGEApr2025/s03.jpg';
import s04 from '../images/HPGEApr2025/s04.jpg';
import s05 from '../images/HPGEApr2025/s05.jpg';
import s06a from '../images/HPGEApr2025/s06a.jpg';
import s06b from '../images/HPGEApr2025/s06b.jpg';
import s07a from '../images/HPGEApr2025/s07a.jpg';
import s07b from '../images/HPGEApr2025/s07b.jpg';
import s08 from '../images/HPGEApr2025/s08.jpg';
import s09a from '../images/HPGEApr2025/s09a.jpg';
import s09b from '../images/HPGEApr2025/s09b.jpg';
import s10a from '../images/HPGEApr2025/s10a.jpg';
import s10b from '../images/HPGEApr2025/s10b.jpg';
import s11 from '../images/HPGEApr2025/s11.jpg';
import s12a from '../images/HPGEApr2025/s12a.jpg';
import s12b from '../images/HPGEApr2025/s12b.jpg';
import s13 from '../images/HPGEApr2025/s13.jpg';
import s14 from '../images/HPGEApr2025/s14.jpg';
import s15a from '../images/HPGEApr2025/s15a.jpg';
import s15b from '../images/HPGEApr2025/s15b.jpg';
import s16 from '../images/HPGEApr2025/s16.jpg';
import s17a from '../images/HPGEApr2025/s17a.jpg';
import s17b from '../images/HPGEApr2025/s17b.jpg';
import s18 from '../images/HPGEApr2025/s18.jpg';
import s19a from '../images/HPGEApr2025/s19a.jpg';
import s19b from '../images/HPGEApr2025/s19b.jpg';
import s20 from '../images/HPGEApr2025/s20.jpg';
import s21 from '../images/HPGEApr2025/s21.jpg';
import s22 from '../images/HPGEApr2025/s22.jpg';
import s23a from '../images/HPGEApr2025/s23a.jpg';
import s23b from '../images/HPGEApr2025/s23b.jpg';
import s24 from '../images/HPGEApr2025/s24.jpg';
import s25 from '../images/HPGEApr2025/s25.jpg';
import s26a from '../images/HPGEApr2025/s26a.jpg';
import s26b from '../images/HPGEApr2025/s26b.jpg';
import s27a from '../images/HPGEApr2025/s27a.jpg';
import s27b from '../images/HPGEApr2025/s27b.jpg';
import s28a from '../images/HPGEApr2025/s28a.jpg';
import s28b from '../images/HPGEApr2025/s28b.jpg';
import s29a from '../images/HPGEApr2025/s29a.jpg';
import s29b from '../images/HPGEApr2025/s29b.jpg';
import s30a from '../images/HPGEApr2025/s30a.jpg';
import s30b from '../images/HPGEApr2025/s30b.jpg';
import s31a from '../images/HPGEApr2025/s31a.jpg';
import s31b from '../images/HPGEApr2025/s31b.jpg';
import s32a from '../images/HPGEApr2025/s32a.jpg';
import s32b from '../images/HPGEApr2025/s32b.jpg';
import s33a from '../images/HPGEApr2025/s33a.jpg';
import s33b from '../images/HPGEApr2025/s33b.jpg';
import s34a from '../images/HPGEApr2025/s34a.jpg';
import s34b from '../images/HPGEApr2025/s34b.jpg';
import s35a from '../images/HPGEApr2025/s35a.jpg';
import s35b from '../images/HPGEApr2025/s35b.jpg';
import s36a from '../images/HPGEApr2025/s36a.jpg';
import s36b from '../images/HPGEApr2025/s36b.jpg';
import s37a from '../images/HPGEApr2025/s37a.jpg';
import s37b from '../images/HPGEApr2025/s37b.jpg';
import s38a from '../images/HPGEApr2025/s38a.jpg';
import s38b from '../images/HPGEApr2025/s38b.jpg';
import s39a from '../images/HPGEApr2025/s39a.jpg';
import s39b from '../images/HPGEApr2025/s39b.jpg';
import s40 from '../images/HPGEApr2025/s40.jpg';
import s41 from '../images/HPGEApr2025/s41.jpg';
import s42 from '../images/HPGEApr2025/s42.jpg';
import s43a from '../images/HPGEApr2025/s43a.jpg';
import s43b from '../images/HPGEApr2025/s43b.jpg';
import s44a from '../images/HPGEApr2025/s44a.jpg';
import s44b from '../images/HPGEApr2025/s44b.jpg';
import s45a from '../images/HPGEApr2025/s45a.jpg';
import s45b from '../images/HPGEApr2025/s45b.jpg';

const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s01],
  i02: [s02],
  i03: [s03],
  i04: [s04],
  i05: [s05],
  i06: [s06a, s06b],
  i07: [s07a, s07b],
  i08: [s08],
  i09: [s09a, s09b],
  i10: [s10a, s10b],
  i11: [s11],
  i12: [s12a, s12b],
  i13: [s13],
  i14: [s14],
  i15: [s15a, s15b],
  i16: [s16],
  i17: [s17a, s17b],
  i18: [s18],
  i19: [s19a, s19b],
  i20: [s20],
  i21: [s21],
  i22: [s22],
  i23: [s23a, s23b],
  i24: [s24],
  i25: [s25],
  i26: [s26a, s26b],
  i27: [s27a, s27b],
  i28: [s28a, s28b],
  i29: [s29a, s29b],
  i30: [s30a, s30b],
  i31: [s31a, s31b],
  i32: [s32a, s32b],
  i33: [s33a, s33b],
  i34: [s34a, s34b],
  i35: [s35a, s35b],
  i36: [s36a, s36b],
  i37: [s37a, s37b],
  i38: [s38a, s38b],
  i39: [s39a, s39b],
  i40: [s40],
  i41: [s41],
  i42: [s42],
  i43: [s43a, s43b],
  i44: [s44a, s44b],
  i45: [s45a, s45b],
};

/** Booklet folio each item's working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 395,
  2: 395,
  3: 396,
  4: 396,
  5: 397,
  6: 398,
  7: 399,
  8: 400,
  9: 400,
  10: 401,
  11: 402,
  12: 402,
  13: 403,
  14: 403,
  15: 403,
  16: 404,
  17: 404,
  18: 405,
  19: 405,
  20: 406,
  21: 406,
  22: 407,
  23: 407,
  24: 408,
  25: 409,
  26: 409,
  27: 410,
  28: 411,
  29: 411,
  30: 411,
  31: 412,
  32: 412,
  33: 412,
  34: 414,
  35: 414,
  36: 414,
  37: 415,
  38: 415,
  39: 415,
  40: 417,
  41: 417,
  42: 417,
  43: 417,
  44: 417,
  45: 417,
};

/** Folio the working ends on, for the items that run past a page break. */
const SOLUTION_PAGE_END: Record<number, number> = {
  6: 399,
  7: 400,
  9: 401,
  10: 402,
  12: 403,
  15: 404,
  17: 405,
  19: 406,
  23: 408,
  26: 410,
  27: 411,
  28: 412,
  29: 412,
  30: 412,
  31: 413,
  32: 413,
  33: 413,
  34: 415,
  35: 415,
  36: 415,
  37: 416,
  38: 416,
  39: 416,
  43: 418,
  44: 418,
  45: 418,
};


/** Booklet crops for one item's worked solution. */
export function hpgeApr2025SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function hpgeApr2025HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function hpgeApr2025SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function hpgeApr2025SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}
