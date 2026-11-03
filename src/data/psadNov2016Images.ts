/**
 * Scanned assets for Gillesania Volume 4, PSAD (Structural Engineering &
 * Construction) November 2016.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Structural Engineering & Construction section of the November 2016 PRC board
 * examination, booklet pages 399-418 (questions), answer key on page 419, worked
 * solutions pages 420-447.
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`i*` keys, one entry per **item**): the booklet prints one
 *   continuous column of working, grouping the situation items under a
 *   "Situation N" heading and tagging sub-answers "Part 1 / Part 2 / Part 3".
 *   Each item is cropped on its own band, so an item never reveals the answer
 *   to a *later* item in the same situation. Where an item's working runs over
 *   a page break it yields two crops (`a`, `b`) shown in reading order.
 *
 *   Three situations need care. Situation 3 works Part 1 (T = 160 N) first and
 *   then answers Part 3 (F3 = 60 N) *before* Part 2 (W = 390 N), so the crops
 *   follow the printed order and items 15/14 are cut in that order. Situation 6
 *   derives the whole Mohr circle first and only afterwards the pressure and
 *   the axial force, so the `tau_max` line is held back from items 22 and 23 and
 *   appears only in item 24's crop. Situation 2 has no per-item labels at all,
 *   so its three crops are progressive prefixes of the same block.
 *
 *   Items 1, 2, 7, 8 and 9 are conceptual (no printed working) and carry no crop.
 * - Figures (`fig*` keys): the drawings printed inside the question stems — the
 *   bulb beam of item 5, the three cylinders in a bin, the tilting table, the
 *   rubber sling, the welded strut and its pin, the two Mohr circles, the glued
 *   post, the cantilever, the two moving-load beams, the framing plan, the
 *   welded bracket, the beam-and-slab frame, the ACI load-pattern sheet and the
 *   T-beam section.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i03 from '../images/PSADNov2016/i03.jpg';
import i04 from '../images/PSADNov2016/i04.jpg';
import i05a from '../images/PSADNov2016/i05a.jpg';
import i05b from '../images/PSADNov2016/i05b.jpg';
import i06 from '../images/PSADNov2016/i06.jpg';
import i10 from '../images/PSADNov2016/i10.jpg';
import i11 from '../images/PSADNov2016/i11.jpg';
import i12 from '../images/PSADNov2016/i12.jpg';
import i13 from '../images/PSADNov2016/i13.jpg';
import i14 from '../images/PSADNov2016/i14.jpg';
import i15 from '../images/PSADNov2016/i15.jpg';
import i16a from '../images/PSADNov2016/i16a.jpg';
import i16b from '../images/PSADNov2016/i16b.jpg';
import i17 from '../images/PSADNov2016/i17.jpg';
import i18 from '../images/PSADNov2016/i18.jpg';
import i19 from '../images/PSADNov2016/i19.jpg';
import i20 from '../images/PSADNov2016/i20.jpg';
import i21 from '../images/PSADNov2016/i21.jpg';
import i22a from '../images/PSADNov2016/i22a.jpg';
import i22b from '../images/PSADNov2016/i22b.jpg';
import i23a from '../images/PSADNov2016/i23a.jpg';
import i23b from '../images/PSADNov2016/i23b.jpg';
import i24 from '../images/PSADNov2016/i24.jpg';
import i25 from '../images/PSADNov2016/i25.jpg';
import i26 from '../images/PSADNov2016/i26.jpg';
import i27 from '../images/PSADNov2016/i27.jpg';
import i28 from '../images/PSADNov2016/i28.jpg';
import i29 from '../images/PSADNov2016/i29.jpg';
import i30 from '../images/PSADNov2016/i30.jpg';
import i31 from '../images/PSADNov2016/i31.jpg';
import i32a from '../images/PSADNov2016/i32a.jpg';
import i32b from '../images/PSADNov2016/i32b.jpg';
import i33 from '../images/PSADNov2016/i33.jpg';
import i34 from '../images/PSADNov2016/i34.jpg';
import i35a from '../images/PSADNov2016/i35a.jpg';
import i35b from '../images/PSADNov2016/i35b.jpg';
import i36 from '../images/PSADNov2016/i36.jpg';
import i37 from '../images/PSADNov2016/i37.jpg';
import i38 from '../images/PSADNov2016/i38.jpg';
import i39 from '../images/PSADNov2016/i39.jpg';
import i40 from '../images/PSADNov2016/i40.jpg';
import i41a from '../images/PSADNov2016/i41a.jpg';
import i41b from '../images/PSADNov2016/i41b.jpg';
import i42 from '../images/PSADNov2016/i42.jpg';
import i43a from '../images/PSADNov2016/i43a.jpg';
import i43b from '../images/PSADNov2016/i43b.jpg';
import i44 from '../images/PSADNov2016/i44.jpg';
import i45 from '../images/PSADNov2016/i45.jpg';
import i46a from '../images/PSADNov2016/i46a.jpg';
import i46b from '../images/PSADNov2016/i46b.jpg';
import i47 from '../images/PSADNov2016/i47.jpg';
import i48a from '../images/PSADNov2016/i48a.jpg';
import i48b from '../images/PSADNov2016/i48b.jpg';
import i49 from '../images/PSADNov2016/i49.jpg';
import i50 from '../images/PSADNov2016/i50.jpg';
import i51 from '../images/PSADNov2016/i51.jpg';
import i52 from '../images/PSADNov2016/i52.jpg';
import i53 from '../images/PSADNov2016/i53.jpg';
import i54 from '../images/PSADNov2016/i54.jpg';
import i55 from '../images/PSADNov2016/i55.jpg';
import i56 from '../images/PSADNov2016/i56.jpg';
import i57 from '../images/PSADNov2016/i57.jpg';
import i58a from '../images/PSADNov2016/i58a.jpg';
import i58b from '../images/PSADNov2016/i58b.jpg';
import i59 from '../images/PSADNov2016/i59.jpg';
import i60 from '../images/PSADNov2016/i60.jpg';
import i61a from '../images/PSADNov2016/i61a.jpg';
import i61b from '../images/PSADNov2016/i61b.jpg';
import i62 from '../images/PSADNov2016/i62.jpg';
import i63 from '../images/PSADNov2016/i63.jpg';
import i64 from '../images/PSADNov2016/i64.jpg';
import i65 from '../images/PSADNov2016/i65.jpg';
import i66 from '../images/PSADNov2016/i66.jpg';
import i67a from '../images/PSADNov2016/i67a.jpg';
import i67b from '../images/PSADNov2016/i67b.jpg';
import i68 from '../images/PSADNov2016/i68.jpg';
import i69 from '../images/PSADNov2016/i69.jpg';
import i70 from '../images/PSADNov2016/i70.jpg';
import i71 from '../images/PSADNov2016/i71.jpg';
import i72a from '../images/PSADNov2016/i72a.jpg';
import i72b from '../images/PSADNov2016/i72b.jpg';
import i73a from '../images/PSADNov2016/i73a.jpg';
import i73b from '../images/PSADNov2016/i73b.jpg';
import i74 from '../images/PSADNov2016/i74.jpg';
import i75 from '../images/PSADNov2016/i75.jpg';
import fig05_beam from '../images/PSADNov2016/fig05_beam.jpg';
import figS2_bin from '../images/PSADNov2016/figS2_bin.jpg';
import figS3_table from '../images/PSADNov2016/figS3_table.jpg';
import figS4_sling from '../images/PSADNov2016/figS4_sling.jpg';
import figS5_strut from '../images/PSADNov2016/figS5_strut.jpg';
import figS6_mohr from '../images/PSADNov2016/figS6_mohr.jpg';
import figS7_post from '../images/PSADNov2016/figS7_post.jpg';
import figS8_cant from '../images/PSADNov2016/figS8_cant.jpg';
import figS9_beam from '../images/PSADNov2016/figS9_beam.jpg';
import figS10_beam from '../images/PSADNov2016/figS10_beam.jpg';
import figS14_plan from '../images/PSADNov2016/figS14_plan.jpg';
import figS15_bracket from '../images/PSADNov2016/figS15_bracket.jpg';
import figS17_frame from '../images/PSADNov2016/figS17_frame.jpg';
import figS18_patterns from '../images/PSADNov2016/figS18_patterns.jpg';
import figS19_tbeam from '../images/PSADNov2016/figS19_tbeam.jpg';

/** One entry per item: the crop(s) that show that item's own working. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i03: [i03],
  i04: [i04],
  i05: [i05a, i05b],
  i06: [i06],
  i10: [i10],
  i11: [i11],
  i12: [i12],
  i13: [i13],
  i14: [i14],
  i15: [i15],
  i16: [i16a, i16b],
  i17: [i17],
  i18: [i18],
  i19: [i19],
  i20: [i20],
  i21: [i21],
  i22: [i22a, i22b],
  i23: [i23a, i23b],
  i24: [i24],
  i25: [i25],
  i26: [i26],
  i27: [i27],
  i28: [i28],
  i29: [i29],
  i30: [i30],
  i31: [i31],
  i32: [i32a, i32b],
  i33: [i33],
  i34: [i34],
  i35: [i35a, i35b],
  i36: [i36],
  i37: [i37],
  i38: [i38],
  i39: [i39],
  i40: [i40],
  i41: [i41a, i41b],
  i42: [i42],
  i43: [i43a, i43b],
  i44: [i44],
  i45: [i45],
  i46: [i46a, i46b],
  i47: [i47],
  i48: [i48a, i48b],
  i49: [i49],
  i50: [i50],
  i51: [i51],
  i52: [i52],
  i53: [i53],
  i54: [i54],
  i55: [i55],
  i56: [i56],
  i57: [i57],
  i58: [i58a, i58b],
  i59: [i59],
  i60: [i60],
  i61: [i61a, i61b],
  i62: [i62],
  i63: [i63],
  i64: [i64],
  i65: [i65],
  i66: [i66],
  i67: [i67a, i67b],
  i68: [i68],
  i69: [i69],
  i70: [i70],
  i71: [i71],
  i72: [i72a, i72b],
  i73: [i73a, i73b],
  i74: [i74],
  i75: [i75],
};

/** Booklet folio each crop came from, so the reader can find the page. */
const SOLUTION_PAGES: Record<number, number> = {
  3: 420,
  4: 420,
  5: 420,
  6: 421,
  10: 421,
  11: 421,
  12: 421,
  13: 422,
  14: 422,
  15: 422,
  16: 422,
  17: 423,
  18: 423,
  19: 423,
  20: 423,
  21: 424,
  22: 424,
  23: 424,
  24: 424,
  25: 425,
  26: 425,
  27: 425,
  28: 426,
  29: 426,
  30: 426,
  31: 426,
  32: 426,
  33: 427,
  34: 427,
  35: 427,
  36: 428,
  37: 429,
  38: 429,
  39: 429,
  40: 430,
  41: 430,
  42: 431,
  43: 432,
  44: 433,
  45: 433,
  46: 433,
  47: 434,
  48: 434,
  49: 435,
  50: 435,
  51: 436,
  52: 436,
  53: 436,
  54: 437,
  55: 437,
  56: 438,
  57: 438,
  58: 438,
  59: 439,
  60: 440,
  61: 440,
  62: 441,
  63: 442,
  64: 442,
  65: 443,
  66: 443,
  67: 443,
  68: 444,
  69: 444,
  70: 445,
  71: 445,
  72: 445,
  73: 446,
  74: 447,
  75: 447,
};

/**
 * The cropped booklet working for one item. Throws rather than falling back
 * to a neighbouring item, so a missing crop is loud instead of wrong.
 */
export function psadNov2016SolutionImages(item: number): string[] {
  const key = `i${String(item).padStart(2, '0')}`;
  const images = SOLUTION_CROPS[key];
  if (!images) throw new Error(`No PSAD Nov 2016 solution crop for item ${item}`);
  return images;
}

/** True when the booklet prints working for this item. */
export function psadNov2016HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function psadNov2016SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Figure crops keyed by the name used in the question data. */
export const PSAD_NOV_2016_FIGURES: Record<string, string> = {
  fig05_beam: fig05_beam,
  figS2_bin: figS2_bin,
  figS3_table: figS3_table,
  figS4_sling: figS4_sling,
  figS5_strut: figS5_strut,
  figS6_mohr: figS6_mohr,
  figS7_post: figS7_post,
  figS8_cant: figS8_cant,
  figS9_beam: figS9_beam,
  figS10_beam: figS10_beam,
  figS14_plan: figS14_plan,
  figS15_bracket: figS15_bracket,
  figS17_frame: figS17_frame,
  figS18_patterns: figS18_patterns,
  figS19_tbeam: figS19_tbeam,
};

export function psadNov2016Figure(key: string, alt: string): string {
  const src = PSAD_NOV_2016_FIGURES[key];
  if (!src) throw new Error(`No PSAD Nov 2016 figure for "${key}"`);
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
