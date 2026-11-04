/**
 * Scanned assets for PSAD November 2024, Volume 6.
 *
 * Volume 6 is a two-up scan: each PDF page carries two book pages, so
 * `pdf = 5 + floor(bookPage / 2)` with even book pages on the left half. The
 * questions run over folios 264-279 with the 75-item key on folio 281, then
 * "Solutions" from folio 282 to 329. Every item's working here is a crop of that
 * run -- nothing is retyped.
 *
 * This section is organised differently from the others and the crops follow the
 * booklet rather than forcing it. All 75 items belong to 25 three-part
 * situations: items 1-3 are Situation 1, 4-6 Situation 2, and so on through
 * 73-75. The booklet prints ONE block of working per situation, with the three
 * parts answered inside that block, and no per-item marker exists to cut along.
 * So each of items 3k-2, 3k-1 and 3k points at situation k's crop(s), and the
 * three items of a situation share the same images. That is the booklet's own
 * unit; splitting it would have meant cutting mid-derivation.
 *
 * The scan has no text layer past page 4, so the crops come from rendered page
 * images. The only headings are the "Situation N" label, which carries a small
 * book icon in the left margin, and the "Part N:" sub-headings, which are
 * indented and are not crop boundaries. Three situation headings sit higher than
 * the rest -- they are the first thing on the page, at y 28-44, above where the
 * marker detector looks -- and were located by reading the pages.
 *
 * The last page of the run, folio 329, is three-quarters empty below its final
 * line (R_max = 245 kN), so blank tails are trimmed from every crop in this
 * section.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */
import { Question } from '../types/exam';

import s01 from '../images/PSADNov2024/s01.jpg';
import s02a from '../images/PSADNov2024/s02a.jpg';
import s02b from '../images/PSADNov2024/s02b.jpg';
import s03a from '../images/PSADNov2024/s03a.jpg';
import s03b from '../images/PSADNov2024/s03b.jpg';
import s03c from '../images/PSADNov2024/s03c.jpg';
import s04a from '../images/PSADNov2024/s04a.jpg';
import s04b from '../images/PSADNov2024/s04b.jpg';
import s04c from '../images/PSADNov2024/s04c.jpg';
import s05a from '../images/PSADNov2024/s05a.jpg';
import s05b from '../images/PSADNov2024/s05b.jpg';
import s06a from '../images/PSADNov2024/s06a.jpg';
import s06b from '../images/PSADNov2024/s06b.jpg';
import s07a from '../images/PSADNov2024/s07a.jpg';
import s07b from '../images/PSADNov2024/s07b.jpg';
import s08a from '../images/PSADNov2024/s08a.jpg';
import s08b from '../images/PSADNov2024/s08b.jpg';
import s09a from '../images/PSADNov2024/s09a.jpg';
import s09b from '../images/PSADNov2024/s09b.jpg';
import s10a from '../images/PSADNov2024/s10a.jpg';
import s10b from '../images/PSADNov2024/s10b.jpg';
import s11a from '../images/PSADNov2024/s11a.jpg';
import s11b from '../images/PSADNov2024/s11b.jpg';
import s11c from '../images/PSADNov2024/s11c.jpg';
import s12a from '../images/PSADNov2024/s12a.jpg';
import s12b from '../images/PSADNov2024/s12b.jpg';
import s13a from '../images/PSADNov2024/s13a.jpg';
import s13b from '../images/PSADNov2024/s13b.jpg';
import s13c from '../images/PSADNov2024/s13c.jpg';
import s14a from '../images/PSADNov2024/s14a.jpg';
import s14b from '../images/PSADNov2024/s14b.jpg';
import s15a from '../images/PSADNov2024/s15a.jpg';
import s15b from '../images/PSADNov2024/s15b.jpg';
import s15c from '../images/PSADNov2024/s15c.jpg';
import s16a from '../images/PSADNov2024/s16a.jpg';
import s16b from '../images/PSADNov2024/s16b.jpg';
import s16c from '../images/PSADNov2024/s16c.jpg';
import s17a from '../images/PSADNov2024/s17a.jpg';
import s17b from '../images/PSADNov2024/s17b.jpg';
import s17c from '../images/PSADNov2024/s17c.jpg';
import s18a from '../images/PSADNov2024/s18a.jpg';
import s18b from '../images/PSADNov2024/s18b.jpg';
import s19a from '../images/PSADNov2024/s19a.jpg';
import s19b from '../images/PSADNov2024/s19b.jpg';
import s19c from '../images/PSADNov2024/s19c.jpg';
import s19d from '../images/PSADNov2024/s19d.jpg';
import s20a from '../images/PSADNov2024/s20a.jpg';
import s20b from '../images/PSADNov2024/s20b.jpg';
import s21a from '../images/PSADNov2024/s21a.jpg';
import s21b from '../images/PSADNov2024/s21b.jpg';
import s21c from '../images/PSADNov2024/s21c.jpg';
import s21d from '../images/PSADNov2024/s21d.jpg';
import s22a from '../images/PSADNov2024/s22a.jpg';
import s22b from '../images/PSADNov2024/s22b.jpg';
import s22c from '../images/PSADNov2024/s22c.jpg';
import s23a from '../images/PSADNov2024/s23a.jpg';
import s23b from '../images/PSADNov2024/s23b.jpg';
import s23c from '../images/PSADNov2024/s23c.jpg';
import s24a from '../images/PSADNov2024/s24a.jpg';
import s24b from '../images/PSADNov2024/s24b.jpg';
import s24c from '../images/PSADNov2024/s24c.jpg';
import s25a from '../images/PSADNov2024/s25a.jpg';
import s25b from '../images/PSADNov2024/s25b.jpg';
import s25c from '../images/PSADNov2024/s25c.jpg';
import s25d from '../images/PSADNov2024/s25d.jpg';

/** Item number -> that item's situation crops, in reading order. */
const SOLUTION_CROPS: Record<number, string[]> = {
  1: [s01],
  2: [s01],
  3: [s01],
  4: [s02a, s02b],
  5: [s02a, s02b],
  6: [s02a, s02b],
  7: [s03a, s03b, s03c],
  8: [s03a, s03b, s03c],
  9: [s03a, s03b, s03c],
  10: [s04a, s04b, s04c],
  11: [s04a, s04b, s04c],
  12: [s04a, s04b, s04c],
  13: [s05a, s05b],
  14: [s05a, s05b],
  15: [s05a, s05b],
  16: [s06a, s06b],
  17: [s06a, s06b],
  18: [s06a, s06b],
  19: [s07a, s07b],
  20: [s07a, s07b],
  21: [s07a, s07b],
  22: [s08a, s08b],
  23: [s08a, s08b],
  24: [s08a, s08b],
  25: [s09a, s09b],
  26: [s09a, s09b],
  27: [s09a, s09b],
  28: [s10a, s10b],
  29: [s10a, s10b],
  30: [s10a, s10b],
  31: [s11a, s11b, s11c],
  32: [s11a, s11b, s11c],
  33: [s11a, s11b, s11c],
  34: [s12a, s12b],
  35: [s12a, s12b],
  36: [s12a, s12b],
  37: [s13a, s13b, s13c],
  38: [s13a, s13b, s13c],
  39: [s13a, s13b, s13c],
  40: [s14a, s14b],
  41: [s14a, s14b],
  42: [s14a, s14b],
  43: [s15a, s15b, s15c],
  44: [s15a, s15b, s15c],
  45: [s15a, s15b, s15c],
  46: [s16a, s16b, s16c],
  47: [s16a, s16b, s16c],
  48: [s16a, s16b, s16c],
  49: [s17a, s17b, s17c],
  50: [s17a, s17b, s17c],
  51: [s17a, s17b, s17c],
  52: [s18a, s18b],
  53: [s18a, s18b],
  54: [s18a, s18b],
  55: [s19a, s19b, s19c, s19d],
  56: [s19a, s19b, s19c, s19d],
  57: [s19a, s19b, s19c, s19d],
  58: [s20a, s20b],
  59: [s20a, s20b],
  60: [s20a, s20b],
  61: [s21a, s21b, s21c, s21d],
  62: [s21a, s21b, s21c, s21d],
  63: [s21a, s21b, s21c, s21d],
  64: [s22a, s22b, s22c],
  65: [s22a, s22b, s22c],
  66: [s22a, s22b, s22c],
  67: [s23a, s23b, s23c],
  68: [s23a, s23b, s23c],
  69: [s23a, s23b, s23c],
  70: [s24a, s24b, s24c],
  71: [s24a, s24b, s24c],
  72: [s24a, s24b, s24c],
  73: [s25a, s25b, s25c, s25d],
  74: [s25a, s25b, s25c, s25d],
  75: [s25a, s25b, s25c, s25d],
};

/** Booklet folio each item's situation starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 282,
  2: 282,
  3: 282,
  4: 283,
  5: 283,
  6: 283,
  7: 284,
  8: 284,
  9: 284,
  10: 286,
  11: 286,
  12: 286,
  13: 288,
  14: 288,
  15: 288,
  16: 289,
  17: 289,
  18: 289,
  19: 290,
  20: 290,
  21: 290,
  22: 291,
  23: 291,
  24: 291,
  25: 292,
  26: 292,
  27: 292,
  28: 294,
  29: 294,
  30: 294,
  31: 296,
  32: 296,
  33: 296,
  34: 298,
  35: 298,
  36: 298,
  37: 299,
  38: 299,
  39: 299,
  40: 302,
  41: 302,
  42: 302,
  43: 304,
  44: 304,
  45: 304,
  46: 306,
  47: 306,
  48: 306,
  49: 308,
  50: 308,
  51: 308,
  52: 310,
  53: 310,
  54: 310,
  55: 311,
  56: 311,
  57: 311,
  58: 314,
  59: 314,
  60: 314,
  61: 316,
  62: 316,
  63: 316,
  64: 319,
  65: 319,
  66: 319,
  67: 322,
  68: 322,
  69: 322,
  70: 324,
  71: 324,
  72: 324,
  73: 326,
  74: 326,
  75: 326,
};

/** Folio the situation ends on, where it runs past a page break. */
const SOLUTION_PAGE_END: Record<number, number> = {
  1: 282,
  2: 282,
  3: 282,
  4: 284,
  5: 284,
  6: 284,
  7: 286,
  8: 286,
  9: 286,
  10: 288,
  11: 288,
  12: 288,
  13: 289,
  14: 289,
  15: 289,
  16: 290,
  17: 290,
  18: 290,
  19: 291,
  20: 291,
  21: 291,
  22: 292,
  23: 292,
  24: 292,
  25: 293,
  26: 293,
  27: 293,
  28: 295,
  29: 295,
  30: 295,
  31: 298,
  32: 298,
  33: 298,
  34: 299,
  35: 299,
  36: 299,
  37: 301,
  38: 301,
  39: 301,
  40: 303,
  41: 303,
  42: 303,
  43: 306,
  44: 306,
  45: 306,
  46: 308,
  47: 308,
  48: 308,
  49: 310,
  50: 310,
  51: 310,
  52: 311,
  53: 311,
  54: 311,
  55: 314,
  56: 314,
  57: 314,
  58: 315,
  59: 315,
  60: 315,
  61: 319,
  62: 319,
  63: 319,
  64: 321,
  65: 321,
  66: 321,
  67: 324,
  68: 324,
  69: 324,
  70: 326,
  71: 326,
  72: 326,
  73: 329,
  74: 329,
  75: 329,
};


/** Booklet crops for one item's situation. */
export function psadNov2024SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[item];
}

/** Whether the booklet prints a worked solution for this item. */
export function psadNov2024HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[item]);
}

/** Booklet folio the item's situation starts on. */
export function psadNov2024SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's situation ends on. */
export function psadNov2024SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item];
}
