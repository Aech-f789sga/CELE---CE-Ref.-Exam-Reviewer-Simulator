/**
 * Scanned assets for Gillesania Volume 4, PSAD (Structural Engineering &
 * Construction) November 2015.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Structural Engineering & Construction section of the November 2015 PRC board
 * examination, booklet pages 194-243 (questions pp. 194-212, answer key at the
 * foot of p. 212, worked solutions pp. 213-243).
 *
 * Two kinds of asset live here:
 *
 * - Solutions (`i*` keys, one entry per **item**): the booklet prints its working
 *   in a single full-width column and groups the situation items under a
 *   "Situation N" heading, tagging sub-answers "Part 1 / Part 2 / Part 3" in the
 *   margin. Each item is cropped on its own band, so an item never reveals the
 *   answer to a later item in the same situation. Where an item's working runs
 *   over a page break it yields two crops (`a`, `b`) shown in reading order.
 *
 *   Two situations need care: Situation 4 works its three parts out of numerical
 *   order (member BG, then AB, then BC), and Situation 25 answers Part 3 before
 *   Part 2 in print. The crops follow the printed order, not the item order.
 * - Figures (`fig*` keys): the drawings printed inside the question stems — the
 *   crane of Situation 1, the trusses of Situations 2-4, the eyebar of Situation
 *   5, the signage pole, the two Mohr circles, the beam and cantilever diagrams,
 *   the bolted joint, the angle-to-gusset weld, the column base plate, the floor
 *   framing and slab plans, the T-beam, the tied column and the double-tee.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/PSADNov2015/i01.jpg';
import i02 from '../images/PSADNov2015/i02.jpg';
import i03 from '../images/PSADNov2015/i03.jpg';
import i04 from '../images/PSADNov2015/i04.jpg';
import i05 from '../images/PSADNov2015/i05.jpg';
import i06 from '../images/PSADNov2015/i06.jpg';
import i07 from '../images/PSADNov2015/i07.jpg';
import i08 from '../images/PSADNov2015/i08.jpg';
import i09 from '../images/PSADNov2015/i09.jpg';
import i10 from '../images/PSADNov2015/i10.jpg';
import i11 from '../images/PSADNov2015/i11.jpg';
import i12 from '../images/PSADNov2015/i12.jpg';
import i13 from '../images/PSADNov2015/i13.jpg';
import i14a from '../images/PSADNov2015/i14a.jpg';
import i14b from '../images/PSADNov2015/i14b.jpg';
import i15 from '../images/PSADNov2015/i15.jpg';
import i16 from '../images/PSADNov2015/i16.jpg';
import i17a from '../images/PSADNov2015/i17a.jpg';
import i17b from '../images/PSADNov2015/i17b.jpg';
import i18 from '../images/PSADNov2015/i18.jpg';
import i19 from '../images/PSADNov2015/i19.jpg';
import i20 from '../images/PSADNov2015/i20.jpg';
import i21 from '../images/PSADNov2015/i21.jpg';
import i22 from '../images/PSADNov2015/i22.jpg';
import i23 from '../images/PSADNov2015/i23.jpg';
import i24 from '../images/PSADNov2015/i24.jpg';
import i25 from '../images/PSADNov2015/i25.jpg';
import i26 from '../images/PSADNov2015/i26.jpg';
import i27 from '../images/PSADNov2015/i27.jpg';
import i28 from '../images/PSADNov2015/i28.jpg';
import i29 from '../images/PSADNov2015/i29.jpg';
import i30 from '../images/PSADNov2015/i30.jpg';
import i31 from '../images/PSADNov2015/i31.jpg';
import i32 from '../images/PSADNov2015/i32.jpg';
import i33 from '../images/PSADNov2015/i33.jpg';
import i34 from '../images/PSADNov2015/i34.jpg';
import i35 from '../images/PSADNov2015/i35.jpg';
import i36 from '../images/PSADNov2015/i36.jpg';
import i37 from '../images/PSADNov2015/i37.jpg';
import i38 from '../images/PSADNov2015/i38.jpg';
import i39 from '../images/PSADNov2015/i39.jpg';
import i40 from '../images/PSADNov2015/i40.jpg';
import i41 from '../images/PSADNov2015/i41.jpg';
import i42 from '../images/PSADNov2015/i42.jpg';
import i43 from '../images/PSADNov2015/i43.jpg';
import i44 from '../images/PSADNov2015/i44.jpg';
import i45 from '../images/PSADNov2015/i45.jpg';
import i46 from '../images/PSADNov2015/i46.jpg';
import i47a from '../images/PSADNov2015/i47a.jpg';
import i47b from '../images/PSADNov2015/i47b.jpg';
import i48 from '../images/PSADNov2015/i48.jpg';
import i49 from '../images/PSADNov2015/i49.jpg';
import i50 from '../images/PSADNov2015/i50.jpg';
import i51 from '../images/PSADNov2015/i51.jpg';
import i52a from '../images/PSADNov2015/i52a.jpg';
import i52b from '../images/PSADNov2015/i52b.jpg';
import i53 from '../images/PSADNov2015/i53.jpg';
import i54 from '../images/PSADNov2015/i54.jpg';
import i55a from '../images/PSADNov2015/i55a.jpg';
import i55b from '../images/PSADNov2015/i55b.jpg';
import i56 from '../images/PSADNov2015/i56.jpg';
import i57 from '../images/PSADNov2015/i57.jpg';
import i58 from '../images/PSADNov2015/i58.jpg';
import i59 from '../images/PSADNov2015/i59.jpg';
import i60 from '../images/PSADNov2015/i60.jpg';
import i61 from '../images/PSADNov2015/i61.jpg';
import i62a from '../images/PSADNov2015/i62a.jpg';
import i62b from '../images/PSADNov2015/i62b.jpg';
import i63 from '../images/PSADNov2015/i63.jpg';
import i64 from '../images/PSADNov2015/i64.jpg';
import i65 from '../images/PSADNov2015/i65.jpg';
import i66 from '../images/PSADNov2015/i66.jpg';
import i67 from '../images/PSADNov2015/i67.jpg';
import i68 from '../images/PSADNov2015/i68.jpg';
import i69a from '../images/PSADNov2015/i69a.jpg';
import i69b from '../images/PSADNov2015/i69b.jpg';
import i70 from '../images/PSADNov2015/i70.jpg';
import i71 from '../images/PSADNov2015/i71.jpg';
import i72 from '../images/PSADNov2015/i72.jpg';
import i73a from '../images/PSADNov2015/i73a.jpg';
import i73b from '../images/PSADNov2015/i73b.jpg';
import i74 from '../images/PSADNov2015/i74.jpg';
import i75 from '../images/PSADNov2015/i75.jpg';
import i76 from '../images/PSADNov2015/i76.jpg';
import i77a from '../images/PSADNov2015/i77a.jpg';
import i77b from '../images/PSADNov2015/i77b.jpg';
import i78 from '../images/PSADNov2015/i78.jpg';
import i79 from '../images/PSADNov2015/i79.jpg';
import i80 from '../images/PSADNov2015/i80.jpg';
import i81 from '../images/PSADNov2015/i81.jpg';
import i82 from '../images/PSADNov2015/i82.jpg';
import i83a from '../images/PSADNov2015/i83a.jpg';
import i83b from '../images/PSADNov2015/i83b.jpg';
import i84 from '../images/PSADNov2015/i84.jpg';
import i85 from '../images/PSADNov2015/i85.jpg';
import i86a from '../images/PSADNov2015/i86a.jpg';
import i86b from '../images/PSADNov2015/i86b.jpg';
import i87 from '../images/PSADNov2015/i87.jpg';
import i88 from '../images/PSADNov2015/i88.jpg';
import fig01_crane from '../images/PSADNov2015/fig01_crane.jpg';
import fig02_truss from '../images/PSADNov2015/fig02_truss.jpg';
import fig03_truss from '../images/PSADNov2015/fig03_truss.jpg';
import fig04_truss from '../images/PSADNov2015/fig04_truss.jpg';
import fig05_eyebar from '../images/PSADNov2015/fig05_eyebar.jpg';
import fig06_beam from '../images/PSADNov2015/fig06_beam.jpg';
import fig07_sign from '../images/PSADNov2015/fig07_sign.jpg';
import fig09_footing from '../images/PSADNov2015/fig09_footing.jpg';
import fig10_pad from '../images/PSADNov2015/fig10_pad.jpg';
import fig11_mohr from '../images/PSADNov2015/fig11_mohr.jpg';
import fig12_mohr from '../images/PSADNov2015/fig12_mohr.jpg';
import fig13_cantilever from '../images/PSADNov2015/fig13_cantilever.jpg';
import fig16_beam from '../images/PSADNov2015/fig16_beam.jpg';
import fig17_joint from '../images/PSADNov2015/fig17_joint.jpg';
import fig18_angle from '../images/PSADNov2015/fig18_angle.jpg';
import fig19_baseplate from '../images/PSADNov2015/fig19_baseplate.jpg';
import fig22_plan from '../images/PSADNov2015/fig22_plan.jpg';
import fig23_slab from '../images/PSADNov2015/fig23_slab.jpg';
import fig24_tbeam from '../images/PSADNov2015/fig24_tbeam.jpg';
import fig25_column from '../images/PSADNov2015/fig25_column.jpg';
import fig27_dt from '../images/PSADNov2015/fig27_dt.jpg';

/** Solution crops keyed by item; `a`/`b` pairs are shown in reading order. */
export const SOLUTION_CROPS: Record<string, string[]> = {
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
  i14: [i14a, i14b],
  i15: [i15],
  i16: [i16],
  i17: [i17a, i17b],
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
  i47: [i47a, i47b],
  i48: [i48],
  i49: [i49],
  i50: [i50],
  i51: [i51],
  i52: [i52a, i52b],
  i53: [i53],
  i54: [i54],
  i55: [i55a, i55b],
  i56: [i56],
  i57: [i57],
  i58: [i58],
  i59: [i59],
  i60: [i60],
  i61: [i61],
  i62: [i62a, i62b],
  i63: [i63],
  i64: [i64],
  i65: [i65],
  i66: [i66],
  i67: [i67],
  i68: [i68],
  i69: [i69a, i69b],
  i70: [i70],
  i71: [i71],
  i72: [i72],
  i73: [i73a, i73b],
  i74: [i74],
  i75: [i75],
  i76: [i76],
  i77: [i77a, i77b],
  i78: [i78],
  i79: [i79],
  i80: [i80],
  i81: [i81],
  i82: [i82],
  i83: [i83a, i83b],
  i84: [i84],
  i85: [i85],
  i86: [i86a, i86b],
  i87: [i87],
  i88: [i88],
};

/**
 * The cropped booklet working for one item. Throws rather than falling back
 * to a neighbouring item, so a missing crop is loud instead of wrong.
 */
export function psadNov2015SolutionImages(item: number): string[] {
  const key = `i${String(item).padStart(2, '0')}`;
  const images = SOLUTION_CROPS[key];
  if (!images) throw new Error(`No PSAD Nov 2015 solution crop for item ${item}`);
  return images;
}

/** Figure crops keyed by the name used in the question data. */
export const PSAD_NOV2015_FIGURES: Record<string, string> = {
  fig01_crane: fig01_crane,
  fig02_truss: fig02_truss,
  fig03_truss: fig03_truss,
  fig04_truss: fig04_truss,
  fig05_eyebar: fig05_eyebar,
  fig06_beam: fig06_beam,
  fig07_sign: fig07_sign,
  fig09_footing: fig09_footing,
  fig10_pad: fig10_pad,
  fig11_mohr: fig11_mohr,
  fig12_mohr: fig12_mohr,
  fig13_cantilever: fig13_cantilever,
  fig16_beam: fig16_beam,
  fig17_joint: fig17_joint,
  fig18_angle: fig18_angle,
  fig19_baseplate: fig19_baseplate,
  fig22_plan: fig22_plan,
  fig23_slab: fig23_slab,
  fig24_tbeam: fig24_tbeam,
  fig25_column: fig25_column,
  fig27_dt: fig27_dt,
};

export function psadNov2015Figure(key: string, alt: string): string {
  const src = PSAD_NOV2015_FIGURES[key];
  if (!src) throw new Error(`No PSAD Nov 2015 figure for "${key}"`);
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
