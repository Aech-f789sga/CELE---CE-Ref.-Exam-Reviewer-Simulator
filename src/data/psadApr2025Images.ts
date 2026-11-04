/**
 * Scanned assets for PSAD April 2025, Volume 6.
 *  *
 *  * Volume 6 is a two-up scan: each PDF page carries two book pages, so
 *  * `pdf = 5 + floor(bookPage / 2)` with even book pages on the left half. The
 *  * questions run over folios 419-437, the 75-item key is printed on folio 438,
 *  * and "Solutions" runs from 439 to 480 -- 42 pages for 25 situations. Every
 *  * item's working here is a crop of that run; nothing is retyped.
 *  *
 *  * The whole section is written as 25 three-part situations: situation k is
 *  * items 3k-2, 3k-1, 3k, and the booklet prints one block of working per
 *  * situation, divided by "Part 1:", "Part 2:", "Part 3:" sub-headings. So the
 *  * crop set is per situation, not per item, and the three items in a situation
 *  * share it -- the booklet's own unit. 56 crops cover all 75 items.
 *  *
 *  * Situations do not respect page breaks. Most open part-way down a page and
 *  * finish on the next one, so each situation's crop list is [start page: heading
 *  * to page bottom, middle pages: whole page, last page: page top to just above
 *  * the next situation's heading]. Twelve of the 25 therefore end mid-page and
 *  * their bottom edge is a measured heading position, not the paper edge.
 *  *
 *  * The heading positions were measured, not estimated. A plain full-page ruler
 *  * render proved unreliable here in both directions -- it put four headings a
 *  * full 50 pt label out, which is enough to open a crop inside the previous
 *  * situation's formula block. What worked was a 60-100 pt window rendered at
 *  * 220-240 dpi with a tick and a number every 5 or 10 pt, so a misread cannot
 *  * hide inside an interval. Every one of the 25 first crops was then checked by
 *  * eye against its own top strip, and the twelve mid-page bottoms the same way.
 *  *
 *  * Two layout quirks are worth recording. Folio 439 begins the section with a
 *  * "Solutions" masthead above "Situation 1", and that masthead is part of item
 *  * 1's crop. And the gutter measured for PDF page 224 sits about 25 pt right of
 *  * where the neighbouring pages put it, which clipped the "S" off "Solutions"
 *  * until an explicit x override was added for that one half.
 *  *
 *  * The printed solution for item 75 is truncated in the booklet itself: folio
 *  * 480 ends on "V_ux = R_pu1 + R_pu2 + R_pu3" with no substitution and no final
 *  * value. The crop stops where the print stops.
 */
import { Question } from '../types/exam';

import s01 from '../images/PSADApr2025/s01.jpg';
import s01b from '../images/PSADApr2025/s01b.jpg';
import s02 from '../images/PSADApr2025/s02.jpg';
import s02b from '../images/PSADApr2025/s02b.jpg';
import s03 from '../images/PSADApr2025/s03.jpg';
import s03b from '../images/PSADApr2025/s03b.jpg';
import s04 from '../images/PSADApr2025/s04.jpg';
import s04b from '../images/PSADApr2025/s04b.jpg';
import s04c from '../images/PSADApr2025/s04c.jpg';
import s05 from '../images/PSADApr2025/s05.jpg';
import s05b from '../images/PSADApr2025/s05b.jpg';
import s06 from '../images/PSADApr2025/s06.jpg';
import s06b from '../images/PSADApr2025/s06b.jpg';
import s07 from '../images/PSADApr2025/s07.jpg';
import s07b from '../images/PSADApr2025/s07b.jpg';
import s08 from '../images/PSADApr2025/s08.jpg';
import s09 from '../images/PSADApr2025/s09.jpg';
import s10 from '../images/PSADApr2025/s10.jpg';
import s11 from '../images/PSADApr2025/s11.jpg';
import s11b from '../images/PSADApr2025/s11b.jpg';
import s12 from '../images/PSADApr2025/s12.jpg';
import s12b from '../images/PSADApr2025/s12b.jpg';
import s12c from '../images/PSADApr2025/s12c.jpg';
import s13 from '../images/PSADApr2025/s13.jpg';
import s13b from '../images/PSADApr2025/s13b.jpg';
import s13c from '../images/PSADApr2025/s13c.jpg';
import s14 from '../images/PSADApr2025/s14.jpg';
import s14b from '../images/PSADApr2025/s14b.jpg';
import s14c from '../images/PSADApr2025/s14c.jpg';
import s14d from '../images/PSADApr2025/s14d.jpg';
import s14e from '../images/PSADApr2025/s14e.jpg';
import s15 from '../images/PSADApr2025/s15.jpg';
import s15b from '../images/PSADApr2025/s15b.jpg';
import s16 from '../images/PSADApr2025/s16.jpg';
import s16b from '../images/PSADApr2025/s16b.jpg';
import s16c from '../images/PSADApr2025/s16c.jpg';
import s17 from '../images/PSADApr2025/s17.jpg';
import s17b from '../images/PSADApr2025/s17b.jpg';
import s17c from '../images/PSADApr2025/s17c.jpg';
import s18 from '../images/PSADApr2025/s18.jpg';
import s19 from '../images/PSADApr2025/s19.jpg';
import s20 from '../images/PSADApr2025/s20.jpg';
import s20b from '../images/PSADApr2025/s20b.jpg';
import s21 from '../images/PSADApr2025/s21.jpg';
import s21b from '../images/PSADApr2025/s21b.jpg';
import s21c from '../images/PSADApr2025/s21c.jpg';
import s22 from '../images/PSADApr2025/s22.jpg';
import s22b from '../images/PSADApr2025/s22b.jpg';
import s22c from '../images/PSADApr2025/s22c.jpg';
import s23 from '../images/PSADApr2025/s23.jpg';
import s23b from '../images/PSADApr2025/s23b.jpg';
import s24 from '../images/PSADApr2025/s24.jpg';
import s24b from '../images/PSADApr2025/s24b.jpg';
import s24c from '../images/PSADApr2025/s24c.jpg';
import s25 from '../images/PSADApr2025/s25.jpg';
import s25b from '../images/PSADApr2025/s25b.jpg';

const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s01, s01b],
  i02: [s01, s01b],
  i03: [s01, s01b],
  i04: [s02, s02b],
  i05: [s02, s02b],
  i06: [s02, s02b],
  i07: [s03, s03b],
  i08: [s03, s03b],
  i09: [s03, s03b],
  i10: [s04, s04b, s04c],
  i11: [s04, s04b, s04c],
  i12: [s04, s04b, s04c],
  i13: [s05, s05b],
  i14: [s05, s05b],
  i15: [s05, s05b],
  i16: [s06, s06b],
  i17: [s06, s06b],
  i18: [s06, s06b],
  i19: [s07, s07b],
  i20: [s07, s07b],
  i21: [s07, s07b],
  i22: [s08],
  i23: [s08],
  i24: [s08],
  i25: [s09],
  i26: [s09],
  i27: [s09],
  i28: [s10],
  i29: [s10],
  i30: [s10],
  i31: [s11, s11b],
  i32: [s11, s11b],
  i33: [s11, s11b],
  i34: [s12, s12b, s12c],
  i35: [s12, s12b, s12c],
  i36: [s12, s12b, s12c],
  i37: [s13, s13b, s13c],
  i38: [s13, s13b, s13c],
  i39: [s13, s13b, s13c],
  i40: [s14, s14b, s14c, s14d, s14e],
  i41: [s14, s14b, s14c, s14d, s14e],
  i42: [s14, s14b, s14c, s14d, s14e],
  i43: [s15, s15b],
  i44: [s15, s15b],
  i45: [s15, s15b],
  i46: [s16, s16b, s16c],
  i47: [s16, s16b, s16c],
  i48: [s16, s16b, s16c],
  i49: [s17, s17b, s17c],
  i50: [s17, s17b, s17c],
  i51: [s17, s17b, s17c],
  i52: [s18],
  i53: [s18],
  i54: [s18],
  i55: [s19],
  i56: [s19],
  i57: [s19],
  i58: [s20, s20b],
  i59: [s20, s20b],
  i60: [s20, s20b],
  i61: [s21, s21b, s21c],
  i62: [s21, s21b, s21c],
  i63: [s21, s21b, s21c],
  i64: [s22, s22b, s22c],
  i65: [s22, s22b, s22c],
  i66: [s22, s22b, s22c],
  i67: [s23, s23b],
  i68: [s23, s23b],
  i69: [s23, s23b],
  i70: [s24, s24b, s24c],
  i71: [s24, s24b, s24c],
  i72: [s24, s24b, s24c],
  i73: [s25, s25b],
  i74: [s25, s25b],
  i75: [s25, s25b],
};

/** Booklet folio each item's working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 439,
  2: 439,
  3: 439,
  4: 441,
  5: 441,
  6: 441,
  7: 442,
  8: 442,
  9: 442,
  10: 443,
  11: 443,
  12: 443,
  13: 445,
  14: 445,
  15: 445,
  16: 446,
  17: 446,
  18: 446,
  19: 447,
  20: 447,
  21: 447,
  22: 449,
  23: 449,
  24: 449,
  25: 450,
  26: 450,
  27: 450,
  28: 451,
  29: 451,
  30: 451,
  31: 451,
  32: 451,
  33: 451,
  34: 452,
  35: 452,
  36: 452,
  37: 454,
  38: 454,
  39: 454,
  40: 456,
  41: 456,
  42: 456,
  43: 461,
  44: 461,
  45: 461,
  46: 462,
  47: 462,
  48: 462,
  49: 464,
  50: 464,
  51: 464,
  52: 467,
  53: 467,
  54: 467,
  55: 468,
  56: 468,
  57: 468,
  58: 469,
  59: 469,
  60: 469,
  61: 470,
  62: 470,
  63: 470,
  64: 472,
  65: 472,
  66: 472,
  67: 475,
  68: 475,
  69: 475,
  70: 476,
  71: 476,
  72: 476,
  73: 479,
  74: 479,
  75: 479,
};

/** Folio the working ends on, for the items that run past a page break. */
const SOLUTION_PAGE_END: Record<number, number> = {
  1: 440,
  2: 440,
  3: 440,
  4: 442,
  5: 442,
  6: 442,
  7: 443,
  8: 443,
  9: 443,
  10: 445,
  11: 445,
  12: 445,
  13: 446,
  14: 446,
  15: 446,
  16: 447,
  17: 447,
  18: 447,
  19: 448,
  20: 448,
  21: 448,
  31: 452,
  32: 452,
  33: 452,
  34: 454,
  35: 454,
  36: 454,
  37: 456,
  38: 456,
  39: 456,
  40: 460,
  41: 460,
  42: 460,
  43: 462,
  44: 462,
  45: 462,
  46: 464,
  47: 464,
  48: 464,
  49: 466,
  50: 466,
  51: 466,
  58: 470,
  59: 470,
  60: 470,
  61: 472,
  62: 472,
  63: 472,
  64: 474,
  65: 474,
  66: 474,
  67: 476,
  68: 476,
  69: 476,
  70: 478,
  71: 478,
  72: 478,
  73: 480,
  74: 480,
  75: 480,
};


/** Booklet crops for one item's worked solution. */
export function psadApr2025SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function psadApr2025HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function psadApr2025SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function psadApr2025SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}
