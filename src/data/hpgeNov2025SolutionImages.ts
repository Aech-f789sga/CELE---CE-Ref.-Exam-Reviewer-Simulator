/**
 * Scanned assets for HPGE November 2025, Volume 6.
 *
 * Volume 6 is a two-up scan: each PDF page carries two book pages, so
 * `pdf = 5 + floor(bookPage / 2)` with even book pages on the left half. The
 * questions run over folios 548-555 with the 47-item key at the foot of 555,
 * then "Solutions" from folio 556 to 580. Every item's working here is a crop of
 * that run -- nothing is retyped.
 *
 * Items 1-38 each have their own book-icon marker and get their own crop. Items
 * 39-47 do not: the booklet prints "Situation 1/2/3" instead, one working per
 * situation split into Part 1, Part 2, Part 3 that answers three items each. So
 * 39-41 share Situation 1's crop, 42-44 Situation 2's and 45-47 Situation 3's.
 * That is why there are 56 crops for 47 items but only 41 distinct starting
 * points.
 *
 * Crops open in the blank band above their marker, so the marker is whole, and
 * the boundary is shared with the previous crop, so no printed line can fall
 * between two of them. Continuation crops keep the running head: the scan is
 * skewed, so the head's rule and the first body line overlap in y and no row is
 * blank across the page -- trimming the head cut the first line of the working.
 *
 * Right-hand pages start at a fixed x=404 rather than at their own content edge.
 * v6g trims each page to its content, which on folio 573 began at x=413.8 while
 * its "31" marker sits at x~405-413, so the icon fell outside the page box and no
 * template match could find it.
 */
import { Question } from '../types/exam';

import s01 from '../images/HPGENov2025Solutions/s01.jpg';
import s02 from '../images/HPGENov2025Solutions/s02.jpg';
import s02b from '../images/HPGENov2025Solutions/s02b.jpg';
import s03 from '../images/HPGENov2025Solutions/s03.jpg';
import s03b from '../images/HPGENov2025Solutions/s03b.jpg';
import s04 from '../images/HPGENov2025Solutions/s04.jpg';
import s05 from '../images/HPGENov2025Solutions/s05.jpg';
import s06 from '../images/HPGENov2025Solutions/s06.jpg';
import s07 from '../images/HPGENov2025Solutions/s07.jpg';
import s08 from '../images/HPGENov2025Solutions/s08.jpg';
import s09 from '../images/HPGENov2025Solutions/s09.jpg';
import s09b from '../images/HPGENov2025Solutions/s09b.jpg';
import s10 from '../images/HPGENov2025Solutions/s10.jpg';
import s11 from '../images/HPGENov2025Solutions/s11.jpg';
import s12 from '../images/HPGENov2025Solutions/s12.jpg';
import s12b from '../images/HPGENov2025Solutions/s12b.jpg';
import s13 from '../images/HPGENov2025Solutions/s13.jpg';
import s13b from '../images/HPGENov2025Solutions/s13b.jpg';
import s14 from '../images/HPGENov2025Solutions/s14.jpg';
import s15 from '../images/HPGENov2025Solutions/s15.jpg';
import s16 from '../images/HPGENov2025Solutions/s16.jpg';
import s17 from '../images/HPGENov2025Solutions/s17.jpg';
import s17b from '../images/HPGENov2025Solutions/s17b.jpg';
import s18 from '../images/HPGENov2025Solutions/s18.jpg';
import s19 from '../images/HPGENov2025Solutions/s19.jpg';
import s20 from '../images/HPGENov2025Solutions/s20.jpg';
import s21 from '../images/HPGENov2025Solutions/s21.jpg';
import s21b from '../images/HPGENov2025Solutions/s21b.jpg';
import s22 from '../images/HPGENov2025Solutions/s22.jpg';
import s23 from '../images/HPGENov2025Solutions/s23.jpg';
import s24 from '../images/HPGENov2025Solutions/s24.jpg';
import s25 from '../images/HPGENov2025Solutions/s25.jpg';
import s26 from '../images/HPGENov2025Solutions/s26.jpg';
import s27 from '../images/HPGENov2025Solutions/s27.jpg';
import s27b from '../images/HPGENov2025Solutions/s27b.jpg';
import s28 from '../images/HPGENov2025Solutions/s28.jpg';
import s29 from '../images/HPGENov2025Solutions/s29.jpg';
import s29b from '../images/HPGENov2025Solutions/s29b.jpg';
import s30 from '../images/HPGENov2025Solutions/s30.jpg';
import s31 from '../images/HPGENov2025Solutions/s31.jpg';
import s32 from '../images/HPGENov2025Solutions/s32.jpg';
import s32b from '../images/HPGENov2025Solutions/s32b.jpg';
import s33 from '../images/HPGENov2025Solutions/s33.jpg';
import s33b from '../images/HPGENov2025Solutions/s33b.jpg';
import s34 from '../images/HPGENov2025Solutions/s34.jpg';
import s35 from '../images/HPGENov2025Solutions/s35.jpg';
import s35b from '../images/HPGENov2025Solutions/s35b.jpg';
import s36 from '../images/HPGENov2025Solutions/s36.jpg';
import s37 from '../images/HPGENov2025Solutions/s37.jpg';
import s38 from '../images/HPGENov2025Solutions/s38.jpg';
import s38b from '../images/HPGENov2025Solutions/s38b.jpg';
import s39 from '../images/HPGENov2025Solutions/s39.jpg';
import s39b from '../images/HPGENov2025Solutions/s39b.jpg';
import s42 from '../images/HPGENov2025Solutions/s42.jpg';
import s42b from '../images/HPGENov2025Solutions/s42b.jpg';
import s45 from '../images/HPGENov2025Solutions/s45.jpg';

const SOLUTION_CROPS: Record<string, string[]> = {
  k1: [s01],
  k2: [s02, s02b],
  k3: [s03, s03b],
  k4: [s04],
  k5: [s05],
  k6: [s06],
  k7: [s07],
  k8: [s08],
  k9: [s09, s09b],
  k10: [s10],
  k11: [s11],
  k12: [s12, s12b],
  k13: [s13, s13b],
  k14: [s14],
  k15: [s15],
  k16: [s16],
  k17: [s17, s17b],
  k18: [s18],
  k19: [s19],
  k20: [s20],
  k21: [s21, s21b],
  k22: [s22],
  k23: [s23],
  k24: [s24],
  k25: [s25],
  k26: [s26],
  k27: [s27, s27b],
  k28: [s28],
  k29: [s29, s29b],
  k30: [s30],
  k31: [s31],
  k32: [s32, s32b],
  k33: [s33, s33b],
  k34: [s34],
  k35: [s35, s35b],
  k36: [s36],
  k37: [s37],
  k38: [s38, s38b],
  kS1: [s39, s39b],
  kS2: [s42, s42b],
  kS3: [s45],
};


/** Which crop key answers each item; 39-47 point at a situation. */
const ITEM_KEY: Record<number, string> = {
  1: 'k1',
  2: 'k2',
  3: 'k3',
  4: 'k4',
  5: 'k5',
  6: 'k6',
  7: 'k7',
  8: 'k8',
  9: 'k9',
  10: 'k10',
  11: 'k11',
  12: 'k12',
  13: 'k13',
  14: 'k14',
  15: 'k15',
  16: 'k16',
  17: 'k17',
  18: 'k18',
  19: 'k19',
  20: 'k20',
  21: 'k21',
  22: 'k22',
  23: 'k23',
  24: 'k24',
  25: 'k25',
  26: 'k26',
  27: 'k27',
  28: 'k28',
  29: 'k29',
  30: 'k30',
  31: 'k31',
  32: 'k32',
  33: 'k33',
  34: 'k34',
  35: 'k35',
  36: 'k36',
  37: 'k37',
  38: 'k38',
  39: 'kS1',
  40: 'kS1',
  41: 'kS1',
  42: 'kS2',
  43: 'kS2',
  44: 'kS2',
  45: 'kS3',
  46: 'kS3',
  47: 'kS3',
};

/** Booklet folio the item's working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 556,
  2: 556,
  3: 557,
  4: 558,
  5: 559,
  6: 559,
  7: 559,
  8: 560,
  9: 560,
  10: 562,
  11: 562,
  12: 562,
  13: 563,
  14: 564,
  15: 565,
  16: 565,
  17: 565,
  18: 566,
  19: 567,
  20: 567,
  21: 567,
  22: 568,
  23: 568,
  24: 569,
  25: 570,
  26: 570,
  27: 570,
  28: 571,
  29: 571,
  30: 572,
  31: 573,
  32: 573,
  33: 574,
  34: 575,
  35: 576,
  36: 577,
  37: 577,
  38: 577,
  39: 578,
  40: 578,
  41: 578,
  42: 579,
  43: 579,
  44: 579,
  45: 580,
  46: 580,
  47: 580,
};

/** Booklet folio the item's working ends on. */
const SOLUTION_PAGE_END: Record<number, number> = {
  2: 557,
  3: 558,
  9: 561,
  12: 563,
  13: 564,
  17: 566,
  21: 568,
  27: 571,
  29: 572,
  32: 574,
  33: 575,
  35: 577,
  38: 578,
  39: 579,
  40: 579,
  41: 579,
  42: 580,
  43: 580,
  44: 580,
};

/** Booklet crops for one item's worked solution. */
export function hpgeNov2025SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[ITEM_KEY[item]];
}

/** Whether the booklet prints a worked solution for this item. */
export function hpgeNov2025HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[ITEM_KEY[item]]);
}

/** Booklet folio the item's working starts on. */
export function hpgeNov2025SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function hpgeNov2025SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}
