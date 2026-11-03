/**
 * Scanned solution crops for Gillesania Volume 4, HPGE (Hydraulics & Geotechnical
 * Engineering) November 2016.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * HPGE section of the November 2016 PRC board examination. Questions sit on
 * booklet folios 378-384 (pdf 365-371), the printed key at the foot of folio 384,
 * and the worked solutions on folios 385-398 (pdf 372-385). Folio = pdf + 13.
 *
 * One crop per **item**, cut on the item's own left-margin label (the small
 * open-book glyph followed by the item number) and stopped just short of the
 * next label, so a crop never reveals the answer to a later item. Where several
 * items share one "Situation" block the crop still belongs to a single item: it
 * opens at the Situation/Part heading that item's working answers under, so the
 * student never sees a neighbouring item's result.
 *
 * Situation 3 is the one block whose page breaks that rule: folio 388 (pdf 375)
 * carries no item labels at all — it is a single derivation annotated with
 * "← Part 1" and "← Part 2" arrows, and the booklet prints Part 2 *above*
 * Part 1. Item 15 is Part 1 (the specific gravity, 0.659) and therefore gets
 * only the three-line Part 1 tail, while item 16 is Part 2 (the length,
 * 146.43 mm) and gets the whole derivation from the Situation heading down to
 * its own answer. Cutting it the other way round would have shown item 16's
 * answer inside item 15's crop.
 *
 * Three items have no crop because the booklet prints no working for them —
 * item 2 (Pascal's principle), item 3 (Bernoulli's theorem) and item 31
 * (a property of cohesive soil). The solution section simply runs 1 -> 4 and
 * skips 31. Those three carry a written one-line reason instead.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/HPGENov2016/i01.jpg';
import i04 from '../images/HPGENov2016/i04.jpg';
import i05 from '../images/HPGENov2016/i05.jpg';
import i06 from '../images/HPGENov2016/i06.jpg';
import i07 from '../images/HPGENov2016/i07.jpg';
import i08 from '../images/HPGENov2016/i08.jpg';
import i09 from '../images/HPGENov2016/i09.jpg';
import i10 from '../images/HPGENov2016/i10.jpg';
import i11 from '../images/HPGENov2016/i11.jpg';
import i12 from '../images/HPGENov2016/i12.jpg';
import i13 from '../images/HPGENov2016/i13.jpg';
import i14 from '../images/HPGENov2016/i14.jpg';
import i15 from '../images/HPGENov2016/i15.jpg';
import i16 from '../images/HPGENov2016/i16.jpg';
import i17 from '../images/HPGENov2016/i17.jpg';
import i18 from '../images/HPGENov2016/i18.jpg';
import i19 from '../images/HPGENov2016/i19.jpg';
import i20 from '../images/HPGENov2016/i20.jpg';
import i21 from '../images/HPGENov2016/i21.jpg';
import i22 from '../images/HPGENov2016/i22.jpg';
import i23 from '../images/HPGENov2016/i23.jpg';
import i24 from '../images/HPGENov2016/i24.jpg';
import i25 from '../images/HPGENov2016/i25.jpg';
import i26 from '../images/HPGENov2016/i26.jpg';
import i27 from '../images/HPGENov2016/i27.jpg';
import i28 from '../images/HPGENov2016/i28.jpg';
import i29 from '../images/HPGENov2016/i29.jpg';
import i30 from '../images/HPGENov2016/i30.jpg';
import i32 from '../images/HPGENov2016/i32.jpg';
import i33 from '../images/HPGENov2016/i33.jpg';
import i34 from '../images/HPGENov2016/i34.jpg';
import i35 from '../images/HPGENov2016/i35.jpg';
import i36 from '../images/HPGENov2016/i36.jpg';
import i37 from '../images/HPGENov2016/i37.jpg';
import i38 from '../images/HPGENov2016/i38.jpg';
import i39 from '../images/HPGENov2016/i39.jpg';
import i40 from '../images/HPGENov2016/i40.jpg';
import i41 from '../images/HPGENov2016/i41.jpg';
import i42 from '../images/HPGENov2016/i42.jpg';
import i43 from '../images/HPGENov2016/i43.jpg';
import i44 from '../images/HPGENov2016/i44.jpg';
import i45 from '../images/HPGENov2016/i45.jpg';
import i46 from '../images/HPGENov2016/i46.jpg';
import i47 from '../images/HPGENov2016/i47.jpg';
import i48 from '../images/HPGENov2016/i48.jpg';
import i49 from '../images/HPGENov2016/i49.jpg';
import i50 from '../images/HPGENov2016/i50.jpg';
import fig02 from '../images/HPGENov2016/fig02.jpg';

/**
 * Item number (zero-padded, e.g. `i07`) to its crop(s) in reading order.
 * Items 02, 03 and 31 are absent by design.
 */
const SOLUTION_CROPS: Record<string, string[]> = {
  i01: [i01],
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
  i15: [i15],
  i16: [i16],
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
  i29: [i29],
  i30: [i30],
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
  i47: [i47],
  i48: [i48],
  i49: [i49],
  i50: [i50],
};

/**
 * Item number to the booklet folio its crop came from, used for the "Page N"
 * label in the results table.
 */
const SOLUTION_PAGES: Record<string, number[]> = {
  i01: [385],
  i04: [385],
  i05: [385],
  i06: [385],
  i07: [386],
  i08: [386],
  i09: [386],
  i10: [386],
  i11: [386],
  i12: [387],
  i13: [387],
  i14: [387],
  i15: [388],
  i16: [388],
  i17: [389],
  i18: [389],
  i19: [390],
  i20: [390],
  i21: [391],
  i22: [391],
  i23: [391],
  i24: [391],
  i25: [392],
  i26: [392],
  i27: [393],
  i28: [393],
  i29: [393],
  i30: [393],
  i32: [393],
  i33: [394],
  i34: [394],
  i35: [394],
  i36: [394],
  i37: [394],
  i38: [395],
  i39: [395],
  i40: [395],
  i41: [395],
  i42: [396],
  i43: [396],
  i44: [396],
  i45: [397],
  i46: [397],
  i47: [397],
  i48: [398],
  i49: [398],
  i50: [398],
};

/** First and last booklet folio carrying one item's working. */
export function hpgeNov2016SolutionPages(
  item: number,
): { page: number; pageEnd: number } | null {
  const key = `i${String(item).padStart(2, '0')}`;
  const folios = SOLUTION_PAGES[key];
  if (!folios) return null;
  return { page: folios[0], pageEnd: folios[folios.length - 1] };
}

/** Scanned working for one item, keyed `i` + zero-padded item number. */
export function hpgeNov2016SolutionImages(item: number): string[] {
  const key = `i${String(item).padStart(2, '0')}`;
  const images = SOLUTION_CROPS[key];
  if (!images) throw new Error(`No HPGE Nov 2016 solution crop for item ${item}`);
  return images;
}

/** True when the booklet prints working for this item, i.e. a crop exists. */
export function hpgeNov2016HasSolutionCrop(item: number): boolean {
  const key = `i${String(item).padStart(2, '0')}`;
  return Boolean(SOLUTION_CROPS[key]);
}

export const HPGE_NOV_2016_FIGURES: Record<string, string> = {
  s2: fig02,
};

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 */
export function hpgeNov2016Figure(key: string, alt: string): string {
  const src = HPGE_NOV_2016_FIGURES[key];
  if (!src) throw new Error(`No HPGE Nov 2016 figure for "${key}"`);
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
