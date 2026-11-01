/**
 * Scanned assets for Gillesania Volume 4, HPGE November 2015.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Hydraulics & Geotechnical Engineering section of the November 2015 PRC board
 * examination, booklet pages 164–193 (questions pp. 164–172, answer key p. 173,
 * worked solutions pp. 174–193).
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`i*` keys, one entry per **item**): the booklet prints its
 *   working in a single full-width column and groups the sixteen situation
 *   items under a "Situation N" heading, tagging the sub-answers
 *   "Part 1 / Part 2 / Part 3" in the right margin. Each item is cropped on its
 *   own band, so an item's solution never reveals the answer to a later item in
 *   the same situation. Where a shared formula derivation sits above the parts
 *   it travels with the item that actually evaluates it — Situation 4's
 *   buoyancy-ratio derivation stays with the specific-gravity item, which is
 *   the one that plugs the weights into it. Where an item's working runs over a
 *   page break it yields two crops (`a`, `b`) shown in reading order.
 *
 *   Situation 8 is the one place the booklet does *not* separate its parts: it
 *   prints a single block headed "Parts 1 & 2" that derives $y = 2a = 4\\text{ m}$
 *   (item 32's answer) and then evaluates $\\omega$ (item 31's answer). That band
 *   is cut three ways — the sketch and givens, the `y = 2a` line, and the
 *   angular-speed working — so item 31 no longer shows item 32's answer.
 * - Figures (`fig*` keys): the three drawings printed inside question stems —
 *   the manometer of item 4, the pipe network of Situation 10 and the aquifer
 *   section of Situation 13. Situation 10's network is redrawn inside its
 *   solution band too, so item 44's crop carries it anyway.
 *
 * Seven items are pure recall questions that the booklet answers without any
 * working at all — 17, 34, 51, 52, 53, 56 and 58 — so they carry no image.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/HPGENov2015/i01.jpg';
import i02 from '../images/HPGENov2015/i02.jpg';
import i03 from '../images/HPGENov2015/i03.jpg';
import i04 from '../images/HPGENov2015/i04.jpg';
import i05 from '../images/HPGENov2015/i05.jpg';
import i06 from '../images/HPGENov2015/i06.jpg';
import i07 from '../images/HPGENov2015/i07.jpg';
import i08 from '../images/HPGENov2015/i08.jpg';
import i09 from '../images/HPGENov2015/i09.jpg';
import i10 from '../images/HPGENov2015/i10.jpg';
import i11a from '../images/HPGENov2015/i11a.jpg';
import i11b from '../images/HPGENov2015/i11b.jpg';
import i12 from '../images/HPGENov2015/i12.jpg';
import i13 from '../images/HPGENov2015/i13.jpg';
import i14 from '../images/HPGENov2015/i14.jpg';
import i15 from '../images/HPGENov2015/i15.jpg';
import i16 from '../images/HPGENov2015/i16.jpg';
import i18 from '../images/HPGENov2015/i18.jpg';
import i19 from '../images/HPGENov2015/i19.jpg';
import i20 from '../images/HPGENov2015/i20.jpg';
import i21 from '../images/HPGENov2015/i21.jpg';
import i22 from '../images/HPGENov2015/i22.jpg';
import i23 from '../images/HPGENov2015/i23.jpg';
import i24 from '../images/HPGENov2015/i24.jpg';
import i25 from '../images/HPGENov2015/i25.jpg';
import i26 from '../images/HPGENov2015/i26.jpg';
import i27 from '../images/HPGENov2015/i27.jpg';
import i28 from '../images/HPGENov2015/i28.jpg';
import i29 from '../images/HPGENov2015/i29.jpg';
import i30 from '../images/HPGENov2015/i30.jpg';
import i31a from '../images/HPGENov2015/i31a.jpg';
import i31b from '../images/HPGENov2015/i31b.jpg';
import i32a from '../images/HPGENov2015/i32a.jpg';
import i32b from '../images/HPGENov2015/i32b.jpg';
import i33 from '../images/HPGENov2015/i33.jpg';
import i35 from '../images/HPGENov2015/i35.jpg';
import i36 from '../images/HPGENov2015/i36.jpg';
import i37a from '../images/HPGENov2015/i37a.jpg';
import i37b from '../images/HPGENov2015/i37b.jpg';
import i38 from '../images/HPGENov2015/i38.jpg';
import i39 from '../images/HPGENov2015/i39.jpg';
import i40 from '../images/HPGENov2015/i40.jpg';
import i41 from '../images/HPGENov2015/i41.jpg';
import i42 from '../images/HPGENov2015/i42.jpg';
import i43 from '../images/HPGENov2015/i43.jpg';
import i44 from '../images/HPGENov2015/i44.jpg';
import i45 from '../images/HPGENov2015/i45.jpg';
import i46 from '../images/HPGENov2015/i46.jpg';
import i47 from '../images/HPGENov2015/i47.jpg';
import i48 from '../images/HPGENov2015/i48.jpg';
import i49 from '../images/HPGENov2015/i49.jpg';
import i50 from '../images/HPGENov2015/i50.jpg';
import i54 from '../images/HPGENov2015/i54.jpg';
import i55 from '../images/HPGENov2015/i55.jpg';
import i57 from '../images/HPGENov2015/i57.jpg';
import i59 from '../images/HPGENov2015/i59.jpg';
import i60 from '../images/HPGENov2015/i60.jpg';
import i61 from '../images/HPGENov2015/i61.jpg';
import i62 from '../images/HPGENov2015/i62.jpg';
import i63a from '../images/HPGENov2015/i63a.jpg';
import i63b from '../images/HPGENov2015/i63b.jpg';
import i64 from '../images/HPGENov2015/i64.jpg';
import i65 from '../images/HPGENov2015/i65.jpg';
import i66 from '../images/HPGENov2015/i66.jpg';
import i67 from '../images/HPGENov2015/i67.jpg';
import i68 from '../images/HPGENov2015/i68.jpg';
import i69 from '../images/HPGENov2015/i69.jpg';
import i70 from '../images/HPGENov2015/i70.jpg';
import i71 from '../images/HPGENov2015/i71.jpg';
import i72 from '../images/HPGENov2015/i72.jpg';
import i73 from '../images/HPGENov2015/i73.jpg';
import i74 from '../images/HPGENov2015/i74.jpg';
import i75 from '../images/HPGENov2015/i75.jpg';
import i76 from '../images/HPGENov2015/i76.jpg';
import i77 from '../images/HPGENov2015/i77.jpg';
import i78a from '../images/HPGENov2015/i78a.jpg';
import i78b from '../images/HPGENov2015/i78b.jpg';
import i79 from '../images/HPGENov2015/i79.jpg';
import i80 from '../images/HPGENov2015/i80.jpg';

import fig04 from '../images/HPGENov2015/fig04.jpg';
import fig10 from '../images/HPGENov2015/fig10.jpg';
import fig13 from '../images/HPGENov2015/fig13.jpg';

/** One entry per item, in booklet reading order. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [i01],
  i02: [i02],
  i03: [i03],
  i04: [i04],
  i05: [i05],
  i06: [i06],
  i07: [i07],
  i08: [i08],
  i09: [i09],
  i10: [i10],
  i11: [i11a, i11b],
  i12: [i12],
  i13: [i13],
  i14: [i14],
  i15: [i15],
  i16: [i16],
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
  i29: [i29],
  i30: [i30],
  i31: [i31a, i31b],
  i32: [i32a, i32b],
  i33: [i33],
  i35: [i35],
  i36: [i36],
  i37: [i37a, i37b],
  i38: [i38],
  i39: [i39],
  i40: [i40],
  i41: [i41],
  i42: [i42],
  i43: [i43],
  i44: [i44],
  i45: [i45],
  i46: [i46],
  i47: [i47],
  i48: [i48],
  i49: [i49],
  i50: [i50],
  i54: [i54],
  i55: [i55],
  i57: [i57],
  i59: [i59],
  i60: [i60],
  i61: [i61],
  i62: [i62],
  i63: [i63a, i63b],
  i64: [i64],
  i65: [i65],
  i66: [i66],
  i67: [i67],
  i68: [i68],
  i69: [i69],
  i70: [i70],
  i71: [i71],
  i72: [i72],
  i73: [i73],
  i74: [i74],
  i75: [i75],
  i76: [i76],
  i77: [i77],
  i78: [i78a, i78b],
  i79: [i79],
  i80: [i80],
};

/** Scanned working for one item, keyed `i` + zero-padded item number. */
export function hpgeNov2015SolutionImages(item: number): string[] {
  const key = `i${String(item).padStart(2, '0')}`;
  const images = SOLUTION_CROPS[key];
  if (!images) throw new Error(`No HPGE Nov 2015 solution crop for item ${item}`);
  return images;
}

export const HPGE_NOV_2015_FIGURES: Record<string, string> = {
  q4: fig04,
  s10: fig10,
  s13: fig13,
};

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 */
export function hpgeNov2015Figure(key: string, alt: string): string {
  const src = HPGE_NOV_2015_FIGURES[key];
  if (!src) throw new Error(`No HPGE Nov 2015 figure for "${key}"`);
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
