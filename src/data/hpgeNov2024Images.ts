/**
 * Scanned assets for HPGE November 2024, Volume 6.
 *
 * Volume 6 is a two-up scan: each PDF page carries two book pages, so
 * `pdf = 5 + floor(bookPage / 2)` with even book pages on the left half. The
 * questions run over folios 228-234 with the 46-item key on folio 235, then
 * "Solutions" from folio 236 to 263. Every item's working here is a crop of that
 * run -- nothing is retyped.
 *
 * The scan has no text layer past page 4, so the crops come from rendered page
 * images. Items 1-26 and 42-46 are marked with a small book icon plus a bold
 * number in the left margin. Items 27-41 are the five three-part situations:
 * the booklet prints no numbered marker for them, only a "Situation N" heading
 * and a "Part N:" sub-heading, so those headings are the crop boundaries
 * (items 27-29 are Situation 1 Parts 1-3, 30-32 Situation 2, and so on). The
 * "Part 1" sub-heading is deliberately not a boundary of its own: the Situation
 * heading already opens the crop that contains it.
 *
 * Fifteen items run past a folio break and carry two crops (a, b): 4, 6, 9, 10,
 * 17, 19, 21, 22, 23, 28, 30, 33, 40, 42 and 46.
 *
 * Two things about this section's scan needed handling that the earlier sections
 * did not. The body text runs much closer to the spine than 14 pt, so the crop
 * edge is fitted to the first solidly dark column rather than to the measured
 * gutter -- otherwise every line loses its last word. And the running head is a
 * shaded bar whose depth changes from page to page, so a continuation crop starts
 * below the measured bottom of that bar instead of at a fixed y.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */
import { Question } from '../types/exam';

import s01 from '../images/HPGENov2024/s01.jpg';
import s02 from '../images/HPGENov2024/s02.jpg';
import s03 from '../images/HPGENov2024/s03.jpg';
import s04a from '../images/HPGENov2024/s04a.jpg';
import s04b from '../images/HPGENov2024/s04b.jpg';
import s05 from '../images/HPGENov2024/s05.jpg';
import s06a from '../images/HPGENov2024/s06a.jpg';
import s06b from '../images/HPGENov2024/s06b.jpg';
import s07 from '../images/HPGENov2024/s07.jpg';
import s08 from '../images/HPGENov2024/s08.jpg';
import s09a from '../images/HPGENov2024/s09a.jpg';
import s09b from '../images/HPGENov2024/s09b.jpg';
import s10a from '../images/HPGENov2024/s10a.jpg';
import s10b from '../images/HPGENov2024/s10b.jpg';
import s11 from '../images/HPGENov2024/s11.jpg';
import s12 from '../images/HPGENov2024/s12.jpg';
import s13 from '../images/HPGENov2024/s13.jpg';
import s14 from '../images/HPGENov2024/s14.jpg';
import s15 from '../images/HPGENov2024/s15.jpg';
import s16 from '../images/HPGENov2024/s16.jpg';
import s17a from '../images/HPGENov2024/s17a.jpg';
import s17b from '../images/HPGENov2024/s17b.jpg';
import s18 from '../images/HPGENov2024/s18.jpg';
import s19a from '../images/HPGENov2024/s19a.jpg';
import s19b from '../images/HPGENov2024/s19b.jpg';
import s20 from '../images/HPGENov2024/s20.jpg';
import s21a from '../images/HPGENov2024/s21a.jpg';
import s21b from '../images/HPGENov2024/s21b.jpg';
import s22a from '../images/HPGENov2024/s22a.jpg';
import s22b from '../images/HPGENov2024/s22b.jpg';
import s23a from '../images/HPGENov2024/s23a.jpg';
import s23b from '../images/HPGENov2024/s23b.jpg';
import s24 from '../images/HPGENov2024/s24.jpg';
import s25 from '../images/HPGENov2024/s25.jpg';
import s26 from '../images/HPGENov2024/s26.jpg';
import s27 from '../images/HPGENov2024/s27.jpg';
import s28a from '../images/HPGENov2024/s28a.jpg';
import s28b from '../images/HPGENov2024/s28b.jpg';
import s29 from '../images/HPGENov2024/s29.jpg';
import s30a from '../images/HPGENov2024/s30a.jpg';
import s30b from '../images/HPGENov2024/s30b.jpg';
import s31 from '../images/HPGENov2024/s31.jpg';
import s32 from '../images/HPGENov2024/s32.jpg';
import s33a from '../images/HPGENov2024/s33a.jpg';
import s33b from '../images/HPGENov2024/s33b.jpg';
import s34 from '../images/HPGENov2024/s34.jpg';
import s35 from '../images/HPGENov2024/s35.jpg';
import s36 from '../images/HPGENov2024/s36.jpg';
import s37 from '../images/HPGENov2024/s37.jpg';
import s38 from '../images/HPGENov2024/s38.jpg';
import s39 from '../images/HPGENov2024/s39.jpg';
import s40a from '../images/HPGENov2024/s40a.jpg';
import s40b from '../images/HPGENov2024/s40b.jpg';
import s41 from '../images/HPGENov2024/s41.jpg';
import s42a from '../images/HPGENov2024/s42a.jpg';
import s42b from '../images/HPGENov2024/s42b.jpg';
import s43 from '../images/HPGENov2024/s43.jpg';
import s44 from '../images/HPGENov2024/s44.jpg';
import s45 from '../images/HPGENov2024/s45.jpg';
import s46a from '../images/HPGENov2024/s46a.jpg';
import s46b from '../images/HPGENov2024/s46b.jpg';

const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s01],
  i02: [s02],
  i03: [s03],
  i04: [s04a, s04b],
  i05: [s05],
  i06: [s06a, s06b],
  i07: [s07],
  i08: [s08],
  i09: [s09a, s09b],
  i10: [s10a, s10b],
  i11: [s11],
  i12: [s12],
  i13: [s13],
  i14: [s14],
  i15: [s15],
  i16: [s16],
  i17: [s17a, s17b],
  i18: [s18],
  i19: [s19a, s19b],
  i20: [s20],
  i21: [s21a, s21b],
  i22: [s22a, s22b],
  i23: [s23a, s23b],
  i24: [s24],
  i25: [s25],
  i26: [s26],
  i27: [s27],
  i28: [s28a, s28b],
  i29: [s29],
  i30: [s30a, s30b],
  i31: [s31],
  i32: [s32],
  i33: [s33a, s33b],
  i34: [s34],
  i35: [s35],
  i36: [s36],
  i37: [s37],
  i38: [s38],
  i39: [s39],
  i40: [s40a, s40b],
  i41: [s41],
  i42: [s42a, s42b],
  i43: [s43],
  i44: [s44],
  i45: [s45],
  i46: [s46a, s46b],
};

/** Booklet folio each item's working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 236,
  2: 237,
  3: 237,
  4: 237,
  5: 239,
  6: 239,
  7: 240,
  8: 241,
  9: 241,
  10: 242,
  11: 243,
  12: 244,
  13: 244,
  14: 244,
  15: 245,
  16: 245,
  17: 245,
  18: 246,
  19: 246,
  20: 247,
  21: 247,
  22: 248,
  23: 249,
  24: 250,
  25: 251,
  26: 251,
  27: 252,
  28: 252,
  29: 253,
  30: 253,
  31: 254,
  32: 254,
  33: 254,
  34: 255,
  35: 255,
  36: 255,
  37: 256,
  38: 256,
  39: 257,
  40: 257,
  41: 259,
  42: 259,
  43: 260,
  44: 261,
  45: 262,
  46: 262,
};

/** Folio the working ends on, for the items that run past a page break. */
const SOLUTION_PAGE_END: Record<number, number> = {
  4: 238,
  6: 240,
  9: 242,
  10: 243,
  17: 246,
  19: 247,
  21: 248,
  22: 249,
  23: 250,
  28: 253,
  30: 254,
  33: 255,
  40: 258,
  42: 260,
  46: 263,
};


/** Booklet crops for one item's worked solution. */
export function hpgeNov2024SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function hpgeNov2024HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function hpgeNov2024SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function hpgeNov2024SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}
