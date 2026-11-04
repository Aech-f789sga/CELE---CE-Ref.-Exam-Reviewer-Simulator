/**
 * Scanned assets for Gillesania Volume 4, HPGE (Hydraulics & Geotechnical
 * Engineering) May 2016.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Hydraulics & Geotechnical Engineering section of the May 2016 PRC board
 * examination, booklet pages 277-297 (questions pp. 277-284, printed answer key
 * at the foot of p. 284, worked solutions pp. 285-297).
 *
 * ## Why the situation items share a crop
 *
 * The booklet does not work the situation items one by one. It prints a single
 * "Situation n" block, headed by the shared data, divided into "Part 1 / Part 2
 * / Part 3" with no per-item marker between the parts. Earlier revisions cut
 * each part out on its own, and those cuts frequently landed above the last
 * printed line -- that is the truncation this file now avoids. Each situation's
 * working is cropped as one unit and shared by its three member items, which is
 * how the booklet itself groups them; a block that runs over a page turn yields
 * two crops (`a`, `b`) shown in reading order.
 *
 * Standalone items keep a crop of their own, cut on the item's left-margin
 * marker. A crop opens 30 px above the marker, and where a block starts at the
 * top of a page the running head is painted out rather than cropped away, so no
 * book title or folio leaks into the image.
 *
 * ## Items with no crop
 *
 * Items 15, 16 and 18 are pure recall: the section prints no working for them.
 * Items 47-50 sit on folio 298, which is **absent from the scanned volume** --
 * the scan jumps from folio 297 straight to 315 -- so there is nothing to crop.
 * Those four carry written working and a note instead. See
 * `may2016Helpers.worked`.
 *
 * `fig02_tank` is the one drawing that sits inside a question stem (item 2).
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/HPGEMay2016/i01.jpg';
import i02 from '../images/HPGEMay2016/i02.jpg';
import i09 from '../images/HPGEMay2016/i09.jpg';
import i10 from '../images/HPGEMay2016/i10.jpg';
import i11 from '../images/HPGEMay2016/i11.jpg';
import i17 from '../images/HPGEMay2016/i17.jpg';
import i19 from '../images/HPGEMay2016/i19.jpg';
import i23 from '../images/HPGEMay2016/i23.jpg';
import i24a from '../images/HPGEMay2016/i24a.jpg';
import i24b from '../images/HPGEMay2016/i24b.jpg';
import i31 from '../images/HPGEMay2016/i31.jpg';
import i35 from '../images/HPGEMay2016/i35.jpg';
import i36 from '../images/HPGEMay2016/i36.jpg';
import i37 from '../images/HPGEMay2016/i37.jpg';
import i38 from '../images/HPGEMay2016/i38.jpg';
import i42 from '../images/HPGEMay2016/i42.jpg';
import i43 from '../images/HPGEMay2016/i43.jpg';
import s01a from '../images/HPGEMay2016/s01a.jpg';
import s01b from '../images/HPGEMay2016/s01b.jpg';
import s02 from '../images/HPGEMay2016/s02.jpg';
import s03 from '../images/HPGEMay2016/s03.jpg';
import s04a from '../images/HPGEMay2016/s04a.jpg';
import s04b from '../images/HPGEMay2016/s04b.jpg';
import s05 from '../images/HPGEMay2016/s05.jpg';
import s06 from '../images/HPGEMay2016/s06.jpg';
import s07 from '../images/HPGEMay2016/s07.jpg';
import s08a from '../images/HPGEMay2016/s08a.jpg';
import s08b from '../images/HPGEMay2016/s08b.jpg';
import s09 from '../images/HPGEMay2016/s09.jpg';
import fig02_tank from '../images/HPGEMay2016/fig02_tank.jpg';

/** One situation's printed working, shared by every item it answers. */
const SITUATION_CROPS: Record<number, string[]> = {
  3: [s01a, s01b],
  6: [s02],
  12: [s03],
  20: [s04a, s04b],
  25: [s05],
  28: [s06],
  32: [s07],
  39: [s08a, s08b],
  44: [s09],
};

/** Which situation's working answers each item. */
const ITEM_SITUATION: Record<number, number> = {
  3: 3, 4: 3, 5: 3,
  6: 6, 7: 6, 8: 6,
  12: 12, 13: 12, 14: 12,
  20: 20, 21: 20, 22: 20,
  25: 25, 26: 25, 27: 25,
  28: 28, 29: 28, 30: 28,
  32: 32, 33: 32, 34: 32,
  39: 39, 40: 39, 41: 39,
  44: 44, 45: 44, 46: 44,
};

/** Items the booklet works on their own, with their own crop(s). */
const ITEM_CROPS: Record<number, string[]> = {
  1: [i01],
  2: [i02],
  9: [i09],
  10: [i10],
  11: [i11],
  17: [i17],
  19: [i19],
  23: [i23],
  24: [i24a, i24b],
  31: [i31],
  35: [i35],
  36: [i36],
  37: [i37],
  38: [i38],
  42: [i42],
  43: [i43],
};

/**
 * The cropped booklet working for one item. Throws rather than falling back to
 * a neighbouring item, so a missing crop is loud instead of wrong.
 */
export function hpgeMay2016SolutionImages(item: number): string[] {
  const own = ITEM_CROPS[item];
  if (own) return own;
  const situation = ITEM_SITUATION[item];
  if (situation) return SITUATION_CROPS[situation];
  throw new Error(`No HPGE May 2016 solution crop for item ${item}`);
}

/** Whether the booklet prints any working this item can be cropped from. */
export function hpgeMay2016HasSolutionCrop(item: number): boolean {
  return Boolean(ITEM_CROPS[item] || ITEM_SITUATION[item]);
}

export const HPGE_MAY_2016_FIGURES: Record<string, string> = {
  fig02_tank: fig02_tank,
};

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 */
export function hpgeMay2016Figure(key: string, alt: string): string {
  const src = HPGE_MAY_2016_FIGURES[key];
  if (!src) throw new Error(`No HPGE May 2016 figure for "${key}"`);
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
