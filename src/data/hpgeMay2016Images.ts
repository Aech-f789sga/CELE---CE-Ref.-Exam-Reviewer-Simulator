/**
 * Scanned assets for Gillesania Volume 4, HPGE (Hydraulics & Geotechnical
 * Engineering) May 2016.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Hydraulics & Geotechnical Engineering section of the May 2016 PRC board
 * examination, booklet pages 277-297 (questions pp. 277-284, printed answer key
 * at the foot of p. 284, worked solutions pp. 285-297).
 *
 * One crop per **item**, cut on the item's own left-margin label so an item
 * never reveals the answer to a later item. The booklet groups the situation
 * items under a "Situation N" heading and tags the sub-answers "Part 1 / Part 2
 * / Part 3"; each part is its own crop. Three items run over a page break and
 * yield two crops (`a`, `b`) shown in reading order: items 21, 24 and 39.
 *
 * Seven items have no crop because the booklet prints no working for them —
 * items 15, 16 and 18 (pure recall, the section skips them) and items 47-50,
 * whose solution page (folio 298) is missing from the scanned volume. Those
 * carry written notes instead of an image.
 *
 * `fig02_tank` is the one drawing that sits inside a question stem (item 2).
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/HPGEMay2016/i01.jpg';
import i02 from '../images/HPGEMay2016/i02.jpg';
import i03 from '../images/HPGEMay2016/i03.jpg';
import i04 from '../images/HPGEMay2016/i04.jpg';
import i05 from '../images/HPGEMay2016/i05.jpg';
import i06 from '../images/HPGEMay2016/i06.jpg';
import i07 from '../images/HPGEMay2016/i07.jpg';
import i08 from '../images/HPGEMay2016/i08.jpg';
import i09 from '../images/HPGEMay2016/i09.jpg';
import i10 from '../images/HPGEMay2016/i10.jpg';
import i11 from '../images/HPGEMay2016/i11.jpg';
import i12 from '../images/HPGEMay2016/i12.jpg';
import i13 from '../images/HPGEMay2016/i13.jpg';
import i14 from '../images/HPGEMay2016/i14.jpg';
import i17 from '../images/HPGEMay2016/i17.jpg';
import i19 from '../images/HPGEMay2016/i19.jpg';
import i20 from '../images/HPGEMay2016/i20.jpg';
import i21a from '../images/HPGEMay2016/i21a.jpg';
import i21b from '../images/HPGEMay2016/i21b.jpg';
import i22 from '../images/HPGEMay2016/i22.jpg';
import i23 from '../images/HPGEMay2016/i23.jpg';
import i24a from '../images/HPGEMay2016/i24a.jpg';
import i24b from '../images/HPGEMay2016/i24b.jpg';
import i25 from '../images/HPGEMay2016/i25.jpg';
import i26 from '../images/HPGEMay2016/i26.jpg';
import i27 from '../images/HPGEMay2016/i27.jpg';
import i28 from '../images/HPGEMay2016/i28.jpg';
import i29 from '../images/HPGEMay2016/i29.jpg';
import i30 from '../images/HPGEMay2016/i30.jpg';
import i31 from '../images/HPGEMay2016/i31.jpg';
import i32 from '../images/HPGEMay2016/i32.jpg';
import i33 from '../images/HPGEMay2016/i33.jpg';
import i34 from '../images/HPGEMay2016/i34.jpg';
import i35 from '../images/HPGEMay2016/i35.jpg';
import i36 from '../images/HPGEMay2016/i36.jpg';
import i37 from '../images/HPGEMay2016/i37.jpg';
import i38 from '../images/HPGEMay2016/i38.jpg';
import i39a from '../images/HPGEMay2016/i39a.jpg';
import i39b from '../images/HPGEMay2016/i39b.jpg';
import i40 from '../images/HPGEMay2016/i40.jpg';
import i41 from '../images/HPGEMay2016/i41.jpg';
import i42 from '../images/HPGEMay2016/i42.jpg';
import i43 from '../images/HPGEMay2016/i43.jpg';
import i44 from '../images/HPGEMay2016/i44.jpg';
import i45 from '../images/HPGEMay2016/i45.jpg';
import i46 from '../images/HPGEMay2016/i46.jpg';
import fig02_tank from '../images/HPGEMay2016/fig02_tank.jpg';

/**
 * Item number -> the crops that make up its worked solution, in reading order.
 * Keyed `i01`..`i50`; a two-page item adds an `a`/`b` suffix.
 */
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
  i11: [i11],
  i12: [i12],
  i13: [i13],
  i14: [i14],
  i17: [i17],
  i19: [i19],
  i20: [i20],
  i21: [i21a, i21b],
  i22: [i22],
  i23: [i23],
  i24: [i24a, i24b],
  i25: [i25],
  i26: [i26],
  i27: [i27],
  i28: [i28],
  i29: [i29],
  i30: [i30],
  i31: [i31],
  i32: [i32],
  i33: [i33],
  i34: [i34],
  i35: [i35],
  i36: [i36],
  i37: [i37],
  i38: [i38],
  i39: [i39a, i39b],
  i40: [i40],
  i41: [i41],
  i42: [i42],
  i43: [i43],
  i44: [i44],
  i45: [i45],
  i46: [i46],
};

/**
 * The cropped booklet working for one item. Throws rather than falling back to
 * a neighbouring item, so a missing crop is loud instead of wrong.
 */
export function hpgeMay2016SolutionImages(item: number): string[] {
  const key = `i${String(item).padStart(2, '0')}`;
  const images = SOLUTION_CROPS[key];
  if (!images) throw new Error(`No HPGE May 2016 solution crop for item ${item}`);
  return images;
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
