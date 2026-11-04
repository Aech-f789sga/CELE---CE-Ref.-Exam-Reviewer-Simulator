/**
 * Scanned assets for PSAD November 2025, Volume 6.
 *
 * Volume 6 is a two-up scan: each PDF page carries two book pages, so
 * `pdf = 5 + floor(bookPage / 2)` with even book pages on the left half. The
 * questions run over folios 581-600 (an appendix table interrupts the run on
 * 595) with the 75-item key at the foot of 600, then "Solutions" from folio 601
 * to 647. Every item's working here is a crop of that run -- nothing is retyped.
 *
 * All 75 items are written as 25 three-part situations and the booklet prints one
 * block of working per situation, headed "Situation N" and divided into
 * "Part 1:" ... "Part 3:". There is no per-item marker to cut along, so items
 * 3k-2, 3k-1 and 3k all carry situation k's crops -- the booklet's own unit.
 * That is why there are 61 crops for 75 items but only 25 starting points.
 *
 * Crops open 16 pt above the situation heading. The heading's own position was
 * found by matching a template of the book icon plus the word "Situation" (the
 * number differs, so it is excluded); on pages where the heading sits directly
 * under the running head the detector came out 9-12 pt high, hence the generous
 * pad. Continuation crops start just below the running head's rule.
 *
 * The scan has no text layer past page 4, so the crops come from rendered page
 * images. 23 situations break across a page turn: 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25.
 */
import { Question } from '../types/exam';

import s01 from '../images/PSADNov2025Solutions/s01.jpg';
import s04 from '../images/PSADNov2025Solutions/s04.jpg';
import s04b from '../images/PSADNov2025Solutions/s04b.jpg';
import s07 from '../images/PSADNov2025Solutions/s07.jpg';
import s07b from '../images/PSADNov2025Solutions/s07b.jpg';
import s10 from '../images/PSADNov2025Solutions/s10.jpg';
import s10b from '../images/PSADNov2025Solutions/s10b.jpg';
import s13 from '../images/PSADNov2025Solutions/s13.jpg';
import s13b from '../images/PSADNov2025Solutions/s13b.jpg';
import s13c from '../images/PSADNov2025Solutions/s13c.jpg';
import s16 from '../images/PSADNov2025Solutions/s16.jpg';
import s16b from '../images/PSADNov2025Solutions/s16b.jpg';
import s19 from '../images/PSADNov2025Solutions/s19.jpg';
import s19b from '../images/PSADNov2025Solutions/s19b.jpg';
import s19c from '../images/PSADNov2025Solutions/s19c.jpg';
import s22 from '../images/PSADNov2025Solutions/s22.jpg';
import s22b from '../images/PSADNov2025Solutions/s22b.jpg';
import s25 from '../images/PSADNov2025Solutions/s25.jpg';
import s25b from '../images/PSADNov2025Solutions/s25b.jpg';
import s25c from '../images/PSADNov2025Solutions/s25c.jpg';
import s28 from '../images/PSADNov2025Solutions/s28.jpg';
import s28b from '../images/PSADNov2025Solutions/s28b.jpg';
import s31 from '../images/PSADNov2025Solutions/s31.jpg';
import s34 from '../images/PSADNov2025Solutions/s34.jpg';
import s34b from '../images/PSADNov2025Solutions/s34b.jpg';
import s34c from '../images/PSADNov2025Solutions/s34c.jpg';
import s37 from '../images/PSADNov2025Solutions/s37.jpg';
import s37b from '../images/PSADNov2025Solutions/s37b.jpg';
import s40 from '../images/PSADNov2025Solutions/s40.jpg';
import s40b from '../images/PSADNov2025Solutions/s40b.jpg';
import s40c from '../images/PSADNov2025Solutions/s40c.jpg';
import s43 from '../images/PSADNov2025Solutions/s43.jpg';
import s43b from '../images/PSADNov2025Solutions/s43b.jpg';
import s46 from '../images/PSADNov2025Solutions/s46.jpg';
import s46b from '../images/PSADNov2025Solutions/s46b.jpg';
import s49 from '../images/PSADNov2025Solutions/s49.jpg';
import s49b from '../images/PSADNov2025Solutions/s49b.jpg';
import s49c from '../images/PSADNov2025Solutions/s49c.jpg';
import s52 from '../images/PSADNov2025Solutions/s52.jpg';
import s52b from '../images/PSADNov2025Solutions/s52b.jpg';
import s55 from '../images/PSADNov2025Solutions/s55.jpg';
import s55b from '../images/PSADNov2025Solutions/s55b.jpg';
import s58 from '../images/PSADNov2025Solutions/s58.jpg';
import s58b from '../images/PSADNov2025Solutions/s58b.jpg';
import s58c from '../images/PSADNov2025Solutions/s58c.jpg';
import s58d from '../images/PSADNov2025Solutions/s58d.jpg';
import s58e from '../images/PSADNov2025Solutions/s58e.jpg';
import s61 from '../images/PSADNov2025Solutions/s61.jpg';
import s61b from '../images/PSADNov2025Solutions/s61b.jpg';
import s61c from '../images/PSADNov2025Solutions/s61c.jpg';
import s64 from '../images/PSADNov2025Solutions/s64.jpg';
import s64b from '../images/PSADNov2025Solutions/s64b.jpg';
import s64c from '../images/PSADNov2025Solutions/s64c.jpg';
import s64d from '../images/PSADNov2025Solutions/s64d.jpg';
import s67 from '../images/PSADNov2025Solutions/s67.jpg';
import s67b from '../images/PSADNov2025Solutions/s67b.jpg';
import s70 from '../images/PSADNov2025Solutions/s70.jpg';
import s70b from '../images/PSADNov2025Solutions/s70b.jpg';
import s73 from '../images/PSADNov2025Solutions/s73.jpg';
import s73b from '../images/PSADNov2025Solutions/s73b.jpg';
import s73c from '../images/PSADNov2025Solutions/s73c.jpg';

const SOLUTION_CROPS: Record<string, string[]> = {
  k1: [s01],
  k2: [s04, s04b],
  k3: [s07, s07b],
  k4: [s10, s10b],
  k5: [s13, s13b, s13c],
  k6: [s16, s16b],
  k7: [s19, s19b, s19c],
  k8: [s22, s22b],
  k9: [s25, s25b, s25c],
  k10: [s28, s28b],
  k11: [s31],
  k12: [s34, s34b, s34c],
  k13: [s37, s37b],
  k14: [s40, s40b, s40c],
  k15: [s43, s43b],
  k16: [s46, s46b],
  k17: [s49, s49b, s49c],
  k18: [s52, s52b],
  k19: [s55, s55b],
  k20: [s58, s58b, s58c, s58d, s58e],
  k21: [s61, s61b, s61c],
  k22: [s64, s64b, s64c, s64d],
  k23: [s67, s67b],
  k24: [s70, s70b],
  k25: [s73, s73b, s73c],
};


/** Which situation's working answers each item. */
const ITEM_KEY: Record<number, string> = {
  1: 'k1',
  2: 'k1',
  3: 'k1',
  4: 'k2',
  5: 'k2',
  6: 'k2',
  7: 'k3',
  8: 'k3',
  9: 'k3',
  10: 'k4',
  11: 'k4',
  12: 'k4',
  13: 'k5',
  14: 'k5',
  15: 'k5',
  16: 'k6',
  17: 'k6',
  18: 'k6',
  19: 'k7',
  20: 'k7',
  21: 'k7',
  22: 'k8',
  23: 'k8',
  24: 'k8',
  25: 'k9',
  26: 'k9',
  27: 'k9',
  28: 'k10',
  29: 'k10',
  30: 'k10',
  31: 'k11',
  32: 'k11',
  33: 'k11',
  34: 'k12',
  35: 'k12',
  36: 'k12',
  37: 'k13',
  38: 'k13',
  39: 'k13',
  40: 'k14',
  41: 'k14',
  42: 'k14',
  43: 'k15',
  44: 'k15',
  45: 'k15',
  46: 'k16',
  47: 'k16',
  48: 'k16',
  49: 'k17',
  50: 'k17',
  51: 'k17',
  52: 'k18',
  53: 'k18',
  54: 'k18',
  55: 'k19',
  56: 'k19',
  57: 'k19',
  58: 'k20',
  59: 'k20',
  60: 'k20',
  61: 'k21',
  62: 'k21',
  63: 'k21',
  64: 'k22',
  65: 'k22',
  66: 'k22',
  67: 'k23',
  68: 'k23',
  69: 'k23',
  70: 'k24',
  71: 'k24',
  72: 'k24',
  73: 'k25',
  74: 'k25',
  75: 'k25',
};

/** Booklet folio the item's working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 601,
  2: 601,
  3: 601,
  4: 601,
  5: 601,
  6: 601,
  7: 602,
  8: 602,
  9: 602,
  10: 603,
  11: 603,
  12: 603,
  13: 605,
  14: 605,
  15: 605,
  16: 608,
  17: 608,
  18: 608,
  19: 609,
  20: 609,
  21: 609,
  22: 611,
  23: 611,
  24: 611,
  25: 613,
  26: 613,
  27: 613,
  28: 615,
  29: 615,
  30: 615,
  31: 617,
  32: 617,
  33: 617,
  34: 617,
  35: 617,
  36: 617,
  37: 619,
  38: 619,
  39: 619,
  40: 620,
  41: 620,
  42: 620,
  43: 623,
  44: 623,
  45: 623,
  46: 625,
  47: 625,
  48: 625,
  49: 627,
  50: 627,
  51: 627,
  52: 630,
  53: 630,
  54: 630,
  55: 632,
  56: 632,
  57: 632,
  58: 633,
  59: 633,
  60: 633,
  61: 637,
  62: 637,
  63: 637,
  64: 639,
  65: 639,
  66: 639,
  67: 642,
  68: 642,
  69: 642,
  70: 644,
  71: 644,
  72: 644,
  73: 645,
  74: 645,
  75: 645,
};

/** Booklet folio the item's working ends on. */
const SOLUTION_PAGE_END: Record<number, number> = {
  4: 602,
  5: 602,
  6: 602,
  7: 603,
  8: 603,
  9: 603,
  10: 604,
  11: 604,
  12: 604,
  13: 607,
  14: 607,
  15: 607,
  16: 609,
  17: 609,
  18: 609,
  19: 611,
  20: 611,
  21: 611,
  22: 612,
  23: 612,
  24: 612,
  25: 615,
  26: 615,
  27: 615,
  28: 616,
  29: 616,
  30: 616,
  34: 619,
  35: 619,
  36: 619,
  37: 620,
  38: 620,
  39: 620,
  40: 622,
  41: 622,
  42: 622,
  43: 624,
  44: 624,
  45: 624,
  46: 626,
  47: 626,
  48: 626,
  49: 629,
  50: 629,
  51: 629,
  52: 631,
  53: 631,
  54: 631,
  55: 633,
  56: 633,
  57: 633,
  58: 637,
  59: 637,
  60: 637,
  61: 639,
  62: 639,
  63: 639,
  64: 642,
  65: 642,
  66: 642,
  67: 643,
  68: 643,
  69: 643,
  70: 645,
  71: 645,
  72: 645,
  73: 647,
  74: 647,
  75: 647,
};

/** Booklet crops for one item's worked solution. */
export function psadNov2025SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[ITEM_KEY[item]];
}

/** Whether the booklet prints a worked solution for this item. */
export function psadNov2025HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[ITEM_KEY[item]]);
}

/** Booklet folio the item's working starts on. */
export function psadNov2025SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function psadNov2025SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}
