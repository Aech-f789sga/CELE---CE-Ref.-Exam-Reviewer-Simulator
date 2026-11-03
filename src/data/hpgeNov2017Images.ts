/**
 * Scanned assets for Gillesania Volume 4, HPGE (Hydraulics and Geotechnical
 * Engineering) November 2017.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Hydraulics and Geotechnical Engineering section of the November 2017 PRC
 * board examination: questions on booklet folios 588-597, the 49-item answer
 * key at the foot of folio 597, worked solutions on folios 598-614.
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`s*` keys, one entry per **item**): the booklet prints one
 *   continuous column of working, tagging each block with a small open-book
 *   glyph and the item number in the left margin. Each item is cropped on its
 *   own band, so an item never reveals the answer to a later item.
 *
 *   All 49 items carry working, so none is keyed from the stem alone. One item
 *   runs over a page break and yields two crops (`a`, `b`) shown in reading
 *   order: item 34, whose Situation 10 Part 2 starts on folio 609 and finishes
 *   on folio 610. Item 15's Part 3 opens folio 603 and is complete there, so it
 *   needs only a single crop.
 *
 *   Items 20, 21 and 22 are the three parts of Situation 6 and the booklet
 *   works them as a single block -- there are no Part headings, and the three
 *   discharges are read off one closing "Finally:" panel. They therefore
 *   share the same two crops rather than being cut apart.
 * - Figures (`fig*` keys): the jet trajectory, the three-reservoir network and
 *   the three gradation curves printed inside the question stems, plus the
 *   three reference tables the questions tell the candidate to use (the sieve
 *   analysis, the USCS chart and Terzaghi bearing-capacity factors).
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import s001 from '../images/HPGENov2017/s001.jpg';
import s002 from '../images/HPGENov2017/s002.jpg';
import s003 from '../images/HPGENov2017/s003.jpg';
import s004 from '../images/HPGENov2017/s004.jpg';
import s005 from '../images/HPGENov2017/s005.jpg';
import s006 from '../images/HPGENov2017/s006.jpg';
import s007 from '../images/HPGENov2017/s007.jpg';
import s008 from '../images/HPGENov2017/s008.jpg';
import s009 from '../images/HPGENov2017/s009.jpg';
import s010 from '../images/HPGENov2017/s010.jpg';
import s011 from '../images/HPGENov2017/s011.jpg';
import s012 from '../images/HPGENov2017/s012.jpg';
import s013 from '../images/HPGENov2017/s013.jpg';
import s014 from '../images/HPGENov2017/s014.jpg';
import s015 from '../images/HPGENov2017/s015.jpg';
import s016 from '../images/HPGENov2017/s016.jpg';
import s017 from '../images/HPGENov2017/s017.jpg';
import s018 from '../images/HPGENov2017/s018.jpg';
import s019 from '../images/HPGENov2017/s019.jpg';
import s020a from '../images/HPGENov2017/s020a.jpg';
import s020b from '../images/HPGENov2017/s020b.jpg';
import s023 from '../images/HPGENov2017/s023.jpg';
import s024 from '../images/HPGENov2017/s024.jpg';
import s025 from '../images/HPGENov2017/s025.jpg';
import s026 from '../images/HPGENov2017/s026.jpg';
import s027 from '../images/HPGENov2017/s027.jpg';
import s028 from '../images/HPGENov2017/s028.jpg';
import s029 from '../images/HPGENov2017/s029.jpg';
import s030 from '../images/HPGENov2017/s030.jpg';
import s031 from '../images/HPGENov2017/s031.jpg';
import s032 from '../images/HPGENov2017/s032.jpg';
import s033 from '../images/HPGENov2017/s033.jpg';
import s034a from '../images/HPGENov2017/s034a.jpg';
import s034b from '../images/HPGENov2017/s034b.jpg';
import s035 from '../images/HPGENov2017/s035.jpg';
import s036 from '../images/HPGENov2017/s036.jpg';
import s037 from '../images/HPGENov2017/s037.jpg';
import s038 from '../images/HPGENov2017/s038.jpg';
import s039 from '../images/HPGENov2017/s039.jpg';
import s040 from '../images/HPGENov2017/s040.jpg';
import s041 from '../images/HPGENov2017/s041.jpg';
import s042 from '../images/HPGENov2017/s042.jpg';
import s043 from '../images/HPGENov2017/s043.jpg';
import s044 from '../images/HPGENov2017/s044.jpg';
import s045 from '../images/HPGENov2017/s045.jpg';
import s046 from '../images/HPGENov2017/s046.jpg';
import s047 from '../images/HPGENov2017/s047.jpg';
import s048 from '../images/HPGENov2017/s048.jpg';
import s049 from '../images/HPGENov2017/s049.jpg';
import fig_jet from '../images/HPGENov2017/fig_jet.jpg';
import fig_reservoirs from '../images/HPGENov2017/fig_reservoirs.jpg';
import fig_gradation from '../images/HPGENov2017/fig_gradation.jpg';
import fig_sieve from '../images/HPGENov2017/fig_sieve.jpg';
import fig_uscs from '../images/HPGENov2017/fig_uscs.jpg';
import fig_terzaghi from '../images/HPGENov2017/fig_terzaghi.jpg';

/** Item -> the crop(s) of its printed working, in reading order. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [s001],
  i02: [s002],
  i03: [s003],
  i04: [s004],
  i05: [s005],
  i06: [s006],
  i07: [s007],
  i08: [s008],
  i09: [s009],
  i10: [s010],
  i11: [s011],
  i12: [s012],
  i13: [s013],
  i14: [s014],
  i15: [s015],
  i16: [s016],
  i17: [s017],
  i18: [s018],
  i19: [s019],
  i20: [s020a, s020b],
  i21: [s020a, s020b],
  i22: [s020a, s020b],
  i23: [s023],
  i24: [s024],
  i25: [s025],
  i26: [s026],
  i27: [s027],
  i28: [s028],
  i29: [s029],
  i30: [s030],
  i31: [s031],
  i32: [s032],
  i33: [s033],
  i34: [s034a, s034b],
  i35: [s035],
  i36: [s036],
  i37: [s037],
  i38: [s038],
  i39: [s039],
  i40: [s040],
  i41: [s041],
  i42: [s042],
  i43: [s043],
  i44: [s044],
  i45: [s045],
  i46: [s046],
  i47: [s047],
  i48: [s048],
  i49: [s049],
};

/** Item -> booklet folio the working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 598,
  2: 598,
  3: 598,
  4: 599,
  5: 599,
  6: 599,
  7: 600,
  8: 600,
  9: 600,
  10: 601,
  11: 601,
  12: 601,
  13: 602,
  14: 602,
  15: 603,
  16: 603,
  17: 603,
  18: 603,
  19: 604,
  20: 604,
  21: 604,
  22: 604,
  23: 606,
  24: 606,
  25: 606,
  26: 606,
  27: 607,
  28: 607,
  29: 607,
  30: 608,
  31: 608,
  32: 608,
  33: 609,
  34: 609,
  35: 610,
  36: 610,
  37: 611,
  38: 611,
  39: 611,
  40: 612,
  41: 612,
  42: 613,
  43: 613,
  44: 613,
  45: 614,
  46: 614,
  47: 614,
  48: 614,
  49: 614,
};

/** Item -> booklet folio the working ends on, when it runs over a page. */
const SOLUTION_PAGE_END: Record<number, number> = {
  20: 605,
  21: 605,
  22: 605,
  34: 610,
};

export function hpgeNov2017SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function hpgeNov2017HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function hpgeNov2017SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function hpgeNov2017SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}

/** Figure crops keyed by the name used in the question data. */
export const HPGE_NOV_2017_FIGURES: Record<string, string> = {
  fig_jet: fig_jet,
  fig_reservoirs: fig_reservoirs,
  fig_gradation: fig_gradation,
  fig_sieve: fig_sieve,
  fig_uscs: fig_uscs,
  fig_terzaghi: fig_terzaghi,
};

export function hpgeNov2017Figure(key: string, alt: string): string {
  const src = HPGE_NOV_2017_FIGURES[key];
  if (!src) throw new Error(`No HPGE November 2017 figure for "${key}"`);
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
