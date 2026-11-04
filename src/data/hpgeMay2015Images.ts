/**
 * Scanned assets for Gillesania Volume 4, HPGE May 2015.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Hydraulics & Geotechnical Engineering section of the May 2015 PRC board
 * examination. The questions occupy booklet folios 38-50 (pdf 42-54), the
 * printed answer key sits at the foot of folio 50, and "Solutions to May 2015
 * Examination" runs from folio 51 (pdf 55) to folio 71 (pdf 74).
 *
 * ## Two kinds of solution block
 *
 * Items 1-28 are worked one at a time, each behind its own margin marker, so
 * each gets a crop of its own (`i01`-`i28`). From item 29 the booklet switches
 * to "Situation n" blocks of three items, and the margin marker sits beside the
 * situation label instead of an item number. Those are cropped whole and shared
 * by their three items, exactly as the booklet groups them -- cutting a
 * situation into three would have to guess where one part's working ends.
 *
 * A block that turns a page yields one image per page segment (`a`, `b`), shown
 * in reading order: Situation 6, for instance, runs from folio 60 through 61
 * and is three segments long.
 *
 * ## Items with no printed working
 *
 * Items 18, 19 and 20 are pure recall -- the booklet prints the term and
 * nothing else, so there is nothing to crop and they carry a one-line reason
 * instead.
 *
 * Items 62-64 (Situation 12) are the USCS classification of three soils. The
 * booklet prints their data on folio 66 -- the sieve table and the gradation
 * curve -- but **folio 67 is absent from the scanned volume**: the scan jumps
 * from folio 66 (pdf 70) straight to folio 68 (pdf 71). The working therefore
 * has no page to crop, so those three carry the classification written out and
 * a note saying why. The gradation curve (`s12`) is the situation's drawing and
 * is shown with the question instead.
 *
 * ## Figures
 *
 * The nine drawings the questions refer to are cropped from the question pages
 * and keyed by the number of the *situation* they belong to, because one
 * drawing serves every item in its situation.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/HPGEMay2015/i01.jpg';
import i02 from '../images/HPGEMay2015/i02.jpg';
import i03 from '../images/HPGEMay2015/i03.jpg';
import i04 from '../images/HPGEMay2015/i04.jpg';
import i05 from '../images/HPGEMay2015/i05.jpg';
import i06 from '../images/HPGEMay2015/i06.jpg';
import i07 from '../images/HPGEMay2015/i07.jpg';
import i08 from '../images/HPGEMay2015/i08.jpg';
import i09 from '../images/HPGEMay2015/i09.jpg';
import i10 from '../images/HPGEMay2015/i10.jpg';
import i11 from '../images/HPGEMay2015/i11.jpg';
import i12 from '../images/HPGEMay2015/i12.jpg';
import i13 from '../images/HPGEMay2015/i13.jpg';
import i14 from '../images/HPGEMay2015/i14.jpg';
import i15 from '../images/HPGEMay2015/i15.jpg';
import i16 from '../images/HPGEMay2015/i16.jpg';
import i17 from '../images/HPGEMay2015/i17.jpg';
import i21 from '../images/HPGEMay2015/i21.jpg';
import i22 from '../images/HPGEMay2015/i22.jpg';
import i23 from '../images/HPGEMay2015/i23.jpg';
import i24 from '../images/HPGEMay2015/i24.jpg';
import i25 from '../images/HPGEMay2015/i25.jpg';
import i26 from '../images/HPGEMay2015/i26.jpg';
import i27 from '../images/HPGEMay2015/i27.jpg';
import i28 from '../images/HPGEMay2015/i28.jpg';
import s01 from '../images/HPGEMay2015/s01.jpg';
import s02a from '../images/HPGEMay2015/s02a.jpg';
import s02b from '../images/HPGEMay2015/s02b.jpg';
import s03 from '../images/HPGEMay2015/s03.jpg';
import s04 from '../images/HPGEMay2015/s04.jpg';
import s05a from '../images/HPGEMay2015/s05a.jpg';
import s05b from '../images/HPGEMay2015/s05b.jpg';
import s06a from '../images/HPGEMay2015/s06a.jpg';
import s06b from '../images/HPGEMay2015/s06b.jpg';
import s07 from '../images/HPGEMay2015/s07.jpg';
import s08a from '../images/HPGEMay2015/s08a.jpg';
import s08b from '../images/HPGEMay2015/s08b.jpg';
import s09a from '../images/HPGEMay2015/s09a.jpg';
import s09b from '../images/HPGEMay2015/s09b.jpg';
import s10a from '../images/HPGEMay2015/s10a.jpg';
import s10b from '../images/HPGEMay2015/s10b.jpg';
import s11 from '../images/HPGEMay2015/s11.jpg';
import s12 from '../images/HPGEMay2015/s12.jpg';
import s13 from '../images/HPGEMay2015/s13.jpg';
import s14a from '../images/HPGEMay2015/s14a.jpg';
import s14b from '../images/HPGEMay2015/s14b.jpg';
import s15 from '../images/HPGEMay2015/s15.jpg';
import s16a from '../images/HPGEMay2015/s16a.jpg';
import s16b from '../images/HPGEMay2015/s16b.jpg';
import s17a from '../images/HPGEMay2015/s17a.jpg';
import s17b from '../images/HPGEMay2015/s17b.jpg';
import s18 from '../images/HPGEMay2015/s18.jpg';
import aquif13 from '../images/HPGEMay2015/aquif13.jpg';
import cyl5 from '../images/HPGEMay2015/cyl5.jpg';
import dam4 from '../images/HPGEMay2015/dam4.jpg';
import foot17 from '../images/HPGEMay2015/foot17.jpg';
import gate3 from '../images/HPGEMay2015/gate3.jpg';
import jet7 from '../images/HPGEMay2015/jet7.jpg';
import net10 from '../images/HPGEMay2015/net10.jpg';
import net9 from '../images/HPGEMay2015/net9.jpg';
import wall16 from '../images/HPGEMay2015/wall16.jpg';

/** Per-item solution crops, keyed by item number. */
const ITEM_CROPS: Record<number, string[]> = {
  1: [i01],
  2: [i02],
  3: [i03],
  4: [i04],
  5: [i05],
  6: [i06],
  7: [i07],
  8: [i08],
  9: [i09],
  10: [i10],
  11: [i11],
  12: [i12],
  13: [i13],
  14: [i14],
  15: [i15],
  16: [i16],
  17: [i17],
  21: [i21],
  22: [i22],
  23: [i23],
  24: [i24],
  25: [i25],
  26: [i26],
  27: [i27],
  28: [i28],
};

/** Situation blocks, keyed by the booklet's own situation number. */
const SITUATION_CROPS: Record<number, string[]> = {
  1: [s01],
  2: [s02a, s02b],
  3: [s03],
  4: [s04],
  5: [s05a, s05b],
  6: [s06a, s06b],
  7: [s07],
  8: [s08a, s08b],
  9: [s09a, s09b],
  10: [s10a, s10b],
  11: [s11],
  12: [],
  13: [s13],
  14: [s14a, s14b],
  15: [s15],
  16: [s16a, s16b],
  17: [s17a, s17b],
  18: [s18],
};

/** Which situation each item belongs to; items 1-28 are not in one. */
const ITEM_SITUATION: Record<number, number> = {
  // Situation 1
  29: 1,
  30: 1,
  31: 1,
  // Situation 2
  32: 2,
  33: 2,
  34: 2,
  // Situation 3
  35: 3,
  36: 3,
  37: 3,
  // Situation 4
  38: 4,
  39: 4,
  40: 4,
  // Situation 5
  41: 5,
  42: 5,
  43: 5,
  // Situation 6
  44: 6,
  45: 6,
  46: 6,
  // Situation 7
  47: 7,
  48: 7,
  49: 7,
  // Situation 8
  50: 8,
  51: 8,
  52: 8,
  // Situation 9
  53: 9,
  54: 9,
  55: 9,
  // Situation 10
  56: 10,
  57: 10,
  58: 10,
  // Situation 11
  59: 11,
  60: 11,
  61: 11,
  // Situation 12
  62: 12,
  63: 12,
  64: 12,
  // Situation 13
  65: 13,
  66: 13,
  67: 13,
  // Situation 14
  68: 14,
  69: 14,
  70: 14,
  // Situation 15
  71: 15,
  72: 15,
  73: 15,
  // Situation 16
  74: 16,
  75: 16,
  76: 16,
  // Situation 17
  77: 17,
  78: 17,
  79: 17,
  // Situation 18
  80: 18,
  81: 18,
  82: 18,
};

/**
 * Crops that show the booklet's working for one item.
 *
 * An item inside a situation returns the whole situation block, because that is
 * the smallest unit the booklet actually works; a standalone item returns its
 * own band. Items the booklet does not work return an empty list.
 */
export function hpgeMay2015SolutionImages(item: number): string[] {
  const situation = ITEM_SITUATION[item];
  if (situation !== undefined) return SITUATION_CROPS[situation] ?? [];
  return ITEM_CROPS[item] ?? [];
}

/** Whether the booklet prints working for this item at all. */
export function hpgeMay2015HasSolutionCrop(item: number): boolean {
  return hpgeMay2015SolutionImages(item).length > 0;
}

/**
 * Question-page drawings, keyed by the situation that needs them.
 */
export const HPGE_MAY_2015_FIGURES: Record<number, string> = {
  12: s12,
  3: gate3,
  4: dam4,
  5: cyl5,
  7: jet7,
  9: net9,
  10: net10,
  13: aquif13,
  16: wall16,
  17: foot17,
};

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 */
export function hpgeMay2015Figure(situation: number, alt: string): string {
  const src = HPGE_MAY_2015_FIGURES[situation];
  if (!src) throw new Error(`No HPGE May 2015 figure for situation ${situation}`);
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
