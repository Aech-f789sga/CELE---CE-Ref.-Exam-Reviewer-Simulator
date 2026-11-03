/**
 * Scanned assets for Gillesania Volume 4, HPGE (Hydraulics & Geotechnical
 * Engineering) May 2017.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Hydraulics & Geotechnical Engineering section of the May 2017 PRC board
 * examination: questions on booklet pages 486-493, answer key on page 493,
 * worked solutions pages 494-507.
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`i*` keys, one entry per **item**): the booklet prints one
 *   continuous column of working, tagging each block with a small open-book
 *   glyph and the item number in the left margin. Each item is cropped on its
 *   own band, so an item never reveals the answer to a later item. Where the
 *   working runs over a page break the item yields two crops (`a`, `b`) shown
 *   in reading order.
 *
 *   The situation items (6-8, 12-14, 16-18, 19-21, 25-27, 34-36, 41-43, 44-46)
 *   share one derivation printed under "Part 1 / Part 2 / Part 3"; each item
 *   carries only its own part, with the situation statement kept on the first
 *   item of the group.
 *
 *   Items 29, 30 and 47 are answered from the stem alone -- the booklet prints
 *   no working for them -- and carry no crop.
 * - Figures (`fig*` keys): the consistency/SPT table printed inside item 32 and
 *   Terzaghi's bearing-capacity table (Table 01) that items 44-46 refer to.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/HPGEMay2017/i01.jpg';
import i02 from '../images/HPGEMay2017/i02.jpg';
import i03 from '../images/HPGEMay2017/i03.jpg';
import i04 from '../images/HPGEMay2017/i04.jpg';
import i05 from '../images/HPGEMay2017/i05.jpg';
import i06a from '../images/HPGEMay2017/i06a.jpg';
import i06b from '../images/HPGEMay2017/i06b.jpg';
import i07 from '../images/HPGEMay2017/i07.jpg';
import i08 from '../images/HPGEMay2017/i08.jpg';
import i09 from '../images/HPGEMay2017/i09.jpg';
import i10 from '../images/HPGEMay2017/i10.jpg';
import i11 from '../images/HPGEMay2017/i11.jpg';
import i12a from '../images/HPGEMay2017/i12a.jpg';
import i12b from '../images/HPGEMay2017/i12b.jpg';
import i13 from '../images/HPGEMay2017/i13.jpg';
import i14 from '../images/HPGEMay2017/i14.jpg';
import i15a from '../images/HPGEMay2017/i15a.jpg';
import i15b from '../images/HPGEMay2017/i15b.jpg';
import i16a from '../images/HPGEMay2017/i16a.jpg';
import i16b from '../images/HPGEMay2017/i16b.jpg';
import i17 from '../images/HPGEMay2017/i17.jpg';
import i18 from '../images/HPGEMay2017/i18.jpg';
import i19 from '../images/HPGEMay2017/i19.jpg';
import i20 from '../images/HPGEMay2017/i20.jpg';
import i21 from '../images/HPGEMay2017/i21.jpg';
import i22 from '../images/HPGEMay2017/i22.jpg';
import i23 from '../images/HPGEMay2017/i23.jpg';
import i24 from '../images/HPGEMay2017/i24.jpg';
import i25 from '../images/HPGEMay2017/i25.jpg';
import i26 from '../images/HPGEMay2017/i26.jpg';
import i27 from '../images/HPGEMay2017/i27.jpg';
import i28 from '../images/HPGEMay2017/i28.jpg';
import i31 from '../images/HPGEMay2017/i31.jpg';
import i32 from '../images/HPGEMay2017/i32.jpg';
import i33 from '../images/HPGEMay2017/i33.jpg';
import i34 from '../images/HPGEMay2017/i34.jpg';
import i35 from '../images/HPGEMay2017/i35.jpg';
import i36 from '../images/HPGEMay2017/i36.jpg';
import i37 from '../images/HPGEMay2017/i37.jpg';
import i38 from '../images/HPGEMay2017/i38.jpg';
import i39 from '../images/HPGEMay2017/i39.jpg';
import i40 from '../images/HPGEMay2017/i40.jpg';
import i41 from '../images/HPGEMay2017/i41.jpg';
import i42 from '../images/HPGEMay2017/i42.jpg';
import i43 from '../images/HPGEMay2017/i43.jpg';
import i44 from '../images/HPGEMay2017/i44.jpg';
import i45 from '../images/HPGEMay2017/i45.jpg';
import i46 from '../images/HPGEMay2017/i46.jpg';
import fig32_table from '../images/HPGEMay2017/fig32_table.jpg';
import fig44_table from '../images/HPGEMay2017/fig44_table.jpg';

/** Item key -> its crops in reading order. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [i01],
  i02: [i02],
  i03: [i03],
  i04: [i04],
  i05: [i05],
  i06: [i06a, i06b],
  i07: [i07],
  i08: [i08],
  i09: [i09],
  i10: [i10],
  i11: [i11],
  i12: [i12a, i12b],
  i13: [i13],
  i14: [i14],
  i15: [i15a, i15b],
  i16: [i16a, i16b],
  i17: [i17],
  i18: [i18],
  i19: [i19],
  i20: [i20],
  i21: [i21],
  i22: [i22],
  i23: [i23],
  i24: [i24],
  i25: [i25],
  i26: [i26],
  i27: [i27],
  i28: [i28],
  i31: [i31],
  i32: [i32],
  i33: [i33],
  i34: [i34],
  i35: [i35],
  i36: [i36],
  i37: [i37],
  i38: [i38],
  i39: [i39],
  i40: [i40],
  i41: [i41],
  i42: [i42],
  i43: [i43],
  i44: [i44],
  i45: [i45],
  i46: [i46],
};

/** Item -> the booklet folio its working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 494,
  2: 494,
  3: 494,
  4: 494,
  5: 495,
  6: 495,
  7: 496,
  8: 496,
  9: 496,
  10: 496,
  11: 497,
  12: 497,
  13: 498,
  14: 498,
  15: 498,
  16: 499,
  17: 500,
  18: 500,
  19: 500,
  20: 500,
  21: 500,
  22: 501,
  23: 501,
  24: 501,
  25: 502,
  26: 502,
  27: 502,
  28: 503,
  31: 503,
  32: 504,
  33: 504,
  34: 504,
  35: 505,
  36: 505,
  37: 505,
  38: 505,
  39: 506,
  40: 506,
  41: 506,
  42: 506,
  43: 507,
  44: 507,
  45: 507,
  46: 507,
};

export function hpgeMay2017SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function hpgeMay2017HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function hpgeMay2017SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Figure crops keyed by the name used in the question data. */
export const HPGE_MAY_2017_FIGURES: Record<string, string> = {
  fig32_table: fig32_table,
  fig44_table: fig44_table,
};

export function hpgeMay2017Figure(key: string, alt: string): string {
  const src = HPGE_MAY_2017_FIGURES[key];
  if (!src) throw new Error(`No HPGE May 2017 figure for "${key}"`);
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img
    src="${src}"
    alt="${alt}"
    class="max-w-xl w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
    referrerpolicy="no-referrer"
  />
</div>`;
}
