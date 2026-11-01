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
 * - Solutions (`s*` / `i*` keys): the booklet prints its working in a single
 *   full-width column, grouped either by item number or, for the situation
 *   items, under a "Situation N" heading with the sub-answers tagged
 *   "Part 1 / Part 2 / Part 3" in the right margin. Each block is cropped as
 *   one continuous band; where a situation runs over a page break it yields two
 *   crops (`a`, `b`) that are shown in reading order. Nothing is retyped.
 * - Figures (`fig*` keys): the three drawings printed inside question stems —
 *   the manometer of item 4, the pipe network of Situation 10 and the aquifer
 *   section of Situation 13.
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
import s01 from '../images/HPGENov2015/s01.jpg';
import s02a from '../images/HPGENov2015/s02a.jpg';
import s02b from '../images/HPGENov2015/s02b.jpg';
import s03 from '../images/HPGENov2015/s03.jpg';
import i18 from '../images/HPGENov2015/i18.jpg';
import s04a from '../images/HPGENov2015/s04a.jpg';
import s04b from '../images/HPGENov2015/s04b.jpg';
import s05 from '../images/HPGENov2015/s05.jpg';
import s06 from '../images/HPGENov2015/s06.jpg';
import s07a from '../images/HPGENov2015/s07a.jpg';
import s07b from '../images/HPGENov2015/s07b.jpg';
import s08a from '../images/HPGENov2015/s08a.jpg';
import s08b from '../images/HPGENov2015/s08b.jpg';
import i35 from '../images/HPGENov2015/i35.jpg';
import i36 from '../images/HPGENov2015/i36.jpg';
import i37a from '../images/HPGENov2015/i37a.jpg';
import i37b from '../images/HPGENov2015/i37b.jpg';
import i38 from '../images/HPGENov2015/i38.jpg';
import i39 from '../images/HPGENov2015/i39.jpg';
import s09a from '../images/HPGENov2015/s09a.jpg';
import s09b from '../images/HPGENov2015/s09b.jpg';
import s10 from '../images/HPGENov2015/s10.jpg';
import i46 from '../images/HPGENov2015/i46.jpg';
import s11 from '../images/HPGENov2015/s11.jpg';
import i50 from '../images/HPGENov2015/i50.jpg';
import i54 from '../images/HPGENov2015/i54.jpg';
import i55 from '../images/HPGENov2015/i55.jpg';
import i57 from '../images/HPGENov2015/i57.jpg';
import s12a from '../images/HPGENov2015/s12a.jpg';
import s12b from '../images/HPGENov2015/s12b.jpg';
import i62 from '../images/HPGENov2015/i62.jpg';
import s13a from '../images/HPGENov2015/s13a.jpg';
import s13b from '../images/HPGENov2015/s13b.jpg';
import i66 from '../images/HPGENov2015/i66.jpg';
import s14a from '../images/HPGENov2015/s14a.jpg';
import s14b from '../images/HPGENov2015/s14b.jpg';
import i70 from '../images/HPGENov2015/i70.jpg';
import s15a from '../images/HPGENov2015/s15a.jpg';
import s15b from '../images/HPGENov2015/s15b.jpg';
import i74 from '../images/HPGENov2015/i74.jpg';
import i75 from '../images/HPGENov2015/i75.jpg';
import i76 from '../images/HPGENov2015/i76.jpg';
import i77 from '../images/HPGENov2015/i77.jpg';
import s16a from '../images/HPGENov2015/s16a.jpg';
import s16b from '../images/HPGENov2015/s16b.jpg';

import fig04 from '../images/HPGENov2015/fig04.jpg';
import fig10 from '../images/HPGENov2015/fig10.jpg';
import fig13 from '../images/HPGENov2015/fig13.jpg';

/** One entry per printed working block, in booklet reading order. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [i01],
  i02: [i02],
  i03: [i03],
  i04: [i04],
  i05: [i05],
  i06: [i06],
  i07: [i07],
  s01: [s01],
  s02: [s02a, s02b],
  s03: [s03],
  i18: [i18],
  s04: [s04a, s04b],
  s05: [s05],
  s06: [s06],
  s07: [s07a, s07b],
  s08: [s08a, s08b],
  i35: [i35],
  i36: [i36],
  i37: [i37a, i37b],
  i38: [i38],
  i39: [i39],
  s09: [s09a, s09b],
  s10: [s10],
  i46: [i46],
  s11: [s11],
  i50: [i50],
  i54: [i54],
  i55: [i55],
  i57: [i57],
  s12: [s12a, s12b],
  i62: [i62],
  s13: [s13a, s13b],
  i66: [i66],
  s14: [s14a, s14b],
  i70: [i70],
  s15: [s15a, s15b],
  i74: [i74],
  i75: [i75],
  i76: [i76],
  i77: [i77],
  s16: [s16a, s16b],
};

/** Scanned working for one block; `key` is an item (`i50`) or situation (`s12`). */
export function hpgeNov2015SolutionImages(key: string): string[] {
  const images = SOLUTION_CROPS[key];
  if (!images) throw new Error(`No HPGE Nov 2015 solution crop for "${key}"`);
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
