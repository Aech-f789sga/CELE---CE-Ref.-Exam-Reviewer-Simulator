/**
 * Scanned assets for Gillesania Volume 4, PSAD (Principles of Structural
 * Analysis and Design) May 2017.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Structural Engineering & Construction section of the May 2017 PRC board
 * examination: questions on booklet folios 508-523, the 66-item answer key at
 * the foot of folio 523, worked solutions folios 524-552.
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`i*` keys, one entry per **item**): the booklet prints one
 *   continuous column of working under a situation heading, tagging each block
 *   "Part 1 / Part 2 / Part 3". Each item is cropped on its own band, so an item
 *   never reveals the answer to a later item. Where the working runs over a page
 *   break the item yields two crops (`a`, `b`) shown in reading order.
 *
 *   Item 9 is the only item with no crop: the booklet works sliding and tipping
 *   separately and never prints a third part, because the answer is simply the
 *   smaller of the two.
 * - Figures (`fig*` keys): the diagrams the questions refer to, plus the two
 *   whole-page tables (Figure 1-A and the NSCP coefficient table).
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/PSADMay2017/i01.jpg';
import i02 from '../images/PSADMay2017/i02.jpg';
import i03a from '../images/PSADMay2017/i03a.jpg';
import i03b from '../images/PSADMay2017/i03b.jpg';
import i04a from '../images/PSADMay2017/i04a.jpg';
import i04b from '../images/PSADMay2017/i04b.jpg';
import i05 from '../images/PSADMay2017/i05.jpg';
import i06 from '../images/PSADMay2017/i06.jpg';
import i07a from '../images/PSADMay2017/i07a.jpg';
import i07b from '../images/PSADMay2017/i07b.jpg';
import i08 from '../images/PSADMay2017/i08.jpg';
import i10 from '../images/PSADMay2017/i10.jpg';
import i11a from '../images/PSADMay2017/i11a.jpg';
import i11b from '../images/PSADMay2017/i11b.jpg';
import i12 from '../images/PSADMay2017/i12.jpg';
import i13 from '../images/PSADMay2017/i13.jpg';
import i14a from '../images/PSADMay2017/i14a.jpg';
import i14b from '../images/PSADMay2017/i14b.jpg';
import i15 from '../images/PSADMay2017/i15.jpg';
import i16 from '../images/PSADMay2017/i16.jpg';
import i17 from '../images/PSADMay2017/i17.jpg';
import i18 from '../images/PSADMay2017/i18.jpg';
import i19 from '../images/PSADMay2017/i19.jpg';
import i20 from '../images/PSADMay2017/i20.jpg';
import i21 from '../images/PSADMay2017/i21.jpg';
import i22a from '../images/PSADMay2017/i22a.jpg';
import i22b from '../images/PSADMay2017/i22b.jpg';
import i23 from '../images/PSADMay2017/i23.jpg';
import i24a from '../images/PSADMay2017/i24a.jpg';
import i24b from '../images/PSADMay2017/i24b.jpg';
import i25 from '../images/PSADMay2017/i25.jpg';
import i26 from '../images/PSADMay2017/i26.jpg';
import i27 from '../images/PSADMay2017/i27.jpg';
import i28 from '../images/PSADMay2017/i28.jpg';
import i29 from '../images/PSADMay2017/i29.jpg';
import i30 from '../images/PSADMay2017/i30.jpg';
import i31 from '../images/PSADMay2017/i31.jpg';
import i32 from '../images/PSADMay2017/i32.jpg';
import i33 from '../images/PSADMay2017/i33.jpg';
import i34 from '../images/PSADMay2017/i34.jpg';
import i35 from '../images/PSADMay2017/i35.jpg';
import i36 from '../images/PSADMay2017/i36.jpg';
import i37 from '../images/PSADMay2017/i37.jpg';
import i38 from '../images/PSADMay2017/i38.jpg';
import i39a from '../images/PSADMay2017/i39a.jpg';
import i39b from '../images/PSADMay2017/i39b.jpg';
import i40a from '../images/PSADMay2017/i40a.jpg';
import i40b from '../images/PSADMay2017/i40b.jpg';
import i41 from '../images/PSADMay2017/i41.jpg';
import i42 from '../images/PSADMay2017/i42.jpg';
import i43 from '../images/PSADMay2017/i43.jpg';
import i44 from '../images/PSADMay2017/i44.jpg';
import i45a from '../images/PSADMay2017/i45a.jpg';
import i45b from '../images/PSADMay2017/i45b.jpg';
import i46a from '../images/PSADMay2017/i46a.jpg';
import i46b from '../images/PSADMay2017/i46b.jpg';
import i47 from '../images/PSADMay2017/i47.jpg';
import i48a from '../images/PSADMay2017/i48a.jpg';
import i48b from '../images/PSADMay2017/i48b.jpg';
import i49 from '../images/PSADMay2017/i49.jpg';
import i50 from '../images/PSADMay2017/i50.jpg';
import i51 from '../images/PSADMay2017/i51.jpg';
import i52a from '../images/PSADMay2017/i52a.jpg';
import i52b from '../images/PSADMay2017/i52b.jpg';
import i53 from '../images/PSADMay2017/i53.jpg';
import i54 from '../images/PSADMay2017/i54.jpg';
import i55 from '../images/PSADMay2017/i55.jpg';
import i56 from '../images/PSADMay2017/i56.jpg';
import i57a from '../images/PSADMay2017/i57a.jpg';
import i57b from '../images/PSADMay2017/i57b.jpg';
import i58a from '../images/PSADMay2017/i58a.jpg';
import i58b from '../images/PSADMay2017/i58b.jpg';
import i59 from '../images/PSADMay2017/i59.jpg';
import i60 from '../images/PSADMay2017/i60.jpg';
import i61a from '../images/PSADMay2017/i61a.jpg';
import i61b from '../images/PSADMay2017/i61b.jpg';
import i62 from '../images/PSADMay2017/i62.jpg';
import i63 from '../images/PSADMay2017/i63.jpg';
import i64a from '../images/PSADMay2017/i64a.jpg';
import i64b from '../images/PSADMay2017/i64b.jpg';
import i65 from '../images/PSADMay2017/i65.jpg';
import i66 from '../images/PSADMay2017/i66.jpg';
import fig01_ladder from '../images/PSADMay2017/fig01_ladder.jpg';
import fig02_beam from '../images/PSADMay2017/fig02_beam.jpg';
import fig03_tank from '../images/PSADMay2017/fig03_tank.jpg';
import fig04_truss from '../images/PSADMay2017/fig04_truss.jpg';
import fig05_cable from '../images/PSADMay2017/fig05_cable.jpg';
import fig06_beam3d from '../images/PSADMay2017/fig06_beam3d.jpg';
import fig07_shear from '../images/PSADMay2017/fig07_shear.jpg';
import fig14_slab from '../images/PSADMay2017/fig14_slab.jpg';
import fig15_gusset from '../images/PSADMay2017/fig15_gusset.jpg';
import fig16_boxcol from '../images/PSADMay2017/fig16_boxcol.jpg';
import fig19_fig1a from '../images/PSADMay2017/fig19_fig1a.jpg';
import fig20_plan from '../images/PSADMay2017/fig20_plan.jpg';
import fig22_tbeam from '../images/PSADMay2017/fig22_tbeam.jpg';
import fig23_nscp from '../images/PSADMay2017/fig23_nscp.jpg';

/** Item -> its solution crop(s), in reading order. */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [i01],
  i02: [i02],
  i03: [i03a, i03b],
  i04: [i04a, i04b],
  i05: [i05],
  i06: [i06],
  i07: [i07a, i07b],
  i08: [i08],
  i10: [i10],
  i11: [i11a, i11b],
  i12: [i12],
  i13: [i13],
  i14: [i14a, i14b],
  i15: [i15],
  i16: [i16],
  i17: [i17],
  i18: [i18],
  i19: [i19],
  i20: [i20],
  i21: [i21],
  i22: [i22a, i22b],
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
  i40: [i40a, i40b],
  i41: [i41],
  i42: [i42],
  i43: [i43],
  i44: [i44],
  i45: [i45a, i45b],
  i46: [i46a, i46b],
  i47: [i47],
  i48: [i48a, i48b],
  i49: [i49],
  i50: [i50],
  i51: [i51],
  i52: [i52a, i52b],
  i53: [i53],
  i54: [i54],
  i55: [i55],
  i56: [i56],
  i57: [i57a, i57b],
  i58: [i58a, i58b],
  i59: [i59],
  i60: [i60],
  i61: [i61a, i61b],
  i62: [i62],
  i63: [i63],
  i64: [i64a, i64b],
  i65: [i65],
  i66: [i66],
};

/** Item -> the booklet folio its working starts on. */
const SOLUTION_PAGES: Record<number, number> = {
  1: 524,
  2: 524,
  3: 524,
  4: 525,
  5: 526,
  6: 526,
  7: 526,
  8: 527,
  10: 527,
  11: 527,
  12: 528,
  13: 528,
  14: 528,
  15: 529,
  16: 529,
  17: 529,
  18: 529,
  19: 530,
  20: 530,
  21: 530,
  22: 530,
  23: 531,
  24: 531,
  25: 533,
  26: 533,
  27: 533,
  28: 534,
  29: 534,
  30: 534,
  31: 535,
  32: 535,
  33: 535,
  34: 536,
  35: 536,
  36: 536,
  37: 537,
  38: 537,
  39: 537,
  40: 538,
  41: 539,
  42: 540,
  43: 540,
  44: 541,
  45: 541,
  46: 542,
  47: 543,
  48: 543,
  49: 544,
  50: 544,
  51: 545,
  52: 545,
  53: 546,
  54: 546,
  55: 547,
  56: 548,
  57: 548,
  58: 549,
  59: 550,
  60: 550,
  61: 550,
  62: 551,
  63: 551,
  64: 551,
  65: 552,
  66: 552,
};

/** Item -> the folio its working ends on, for the items that cross a page break. */
const SOLUTION_PAGE_END: Record<number, number> = {
  3: 525,
  4: 526,
  7: 527,
  11: 528,
  14: 529,
  22: 531,
  24: 532,
  39: 538,
  40: 539,
  45: 542,
  46: 543,
  48: 544,
  52: 546,
  57: 549,
  58: 550,
  61: 551,
  64: 552,
};

export function psadMay2017SolutionImages(item: number): string[] | undefined {
  return SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`];
}

/** Whether the booklet prints a worked solution for this item. */
export function psadMay2017HasSolutionCrop(item: number): boolean {
  return Boolean(SOLUTION_CROPS[`i${String(item).padStart(2, '0')}`]);
}

/** Booklet folio the item's working starts on. */
export function psadMay2017SolutionPage(item: number): number {
  return SOLUTION_PAGES[item];
}

/** Booklet folio the item's working ends on. */
export function psadMay2017SolutionPageEnd(item: number): number {
  return SOLUTION_PAGE_END[item] ?? SOLUTION_PAGES[item];
}

/** Figure crops keyed by the name used in the question data. */
export const PSAD_MAY_2017_FIGURES: Record<string, string> = {
  fig01_ladder: fig01_ladder,
  fig02_beam: fig02_beam,
  fig03_tank: fig03_tank,
  fig04_truss: fig04_truss,
  fig05_cable: fig05_cable,
  fig06_beam3d: fig06_beam3d,
  fig07_shear: fig07_shear,
  fig14_slab: fig14_slab,
  fig15_gusset: fig15_gusset,
  fig16_boxcol: fig16_boxcol,
  fig19_fig1a: fig19_fig1a,
  fig20_plan: fig20_plan,
  fig22_tbeam: fig22_tbeam,
  fig23_nscp: fig23_nscp,
};

export function psadMay2017Figure(key: string, alt: string): string {
  const src = PSAD_MAY_2017_FIGURES[key];
  if (!src) throw new Error(`No PSAD May 2017 figure for "${key}"`);
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
