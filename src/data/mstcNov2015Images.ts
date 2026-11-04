/**
 * Scanned solution crops for Gillesania Volume 4, MSTC (Mathematics, Surveying &
 * Transportation Engineering) November 2015.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Mathematics, Surveying & Transportation Engineering section of the November
 * 2015 PRC board examination. Questions run to folio 135, whose foot carries the
 * printed answer key, and "Solutions to November 2015 Examination" opens on
 * folio 136 (pdf 140) and closes on folio 163 (pdf 167).
 *
 * ## How the crops were cut
 *
 * Every worked item is marked in the blank left margin with a small open-book
 * glyph followed by the item number. Each crop opens on that marker and closes
 * on the last inked row before the next one, so a block is never cut through a
 * line of working.
 *
 * This section has no usable automatic detector. The scan is a photocopy of a
 * photocopy: page darkness runs from almost blank (pdf 141, 165) to near-solid,
 * the x-offset drifts about 350 px between pages, and the glyph is on some pages
 * only a few grey pixels wide. Template matching, connected-component filtering,
 * a density scan and a full-page OCR pass were each tried and each missed a
 * quarter to a half of the 90 markers. The positions were therefore read off
 * ruled contact sheets of every page's left margin, then pinned exactly by a
 * targeted OCR pass over a 170-row window around each reading (which reads the
 * item number printed beside the glyph). The five glyphs that neither pass could
 * reach are pinned by hand in the crop script.
 *
 * Nine blocks run over a page turn and are cropped in two parts, `a` and `b`,
 * shown in reading order — items 10, 20, 25, 28, 33, 46, 57, 77 and 84.
 *
 * On a page where a block opens at the very top, the running head and its rule
 * sit only a few pixels above the marker; the head is painted out rather than
 * cropped away, so no book title, date banner or folio leaks into an image.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import i01 from '../images/MSTCNov2015/i01.jpg';
import i02 from '../images/MSTCNov2015/i02.jpg';
import i03 from '../images/MSTCNov2015/i03.jpg';
import i04 from '../images/MSTCNov2015/i04.jpg';
import i05 from '../images/MSTCNov2015/i05.jpg';
import i06 from '../images/MSTCNov2015/i06.jpg';
import i07 from '../images/MSTCNov2015/i07.jpg';
import i08 from '../images/MSTCNov2015/i08.jpg';
import i09 from '../images/MSTCNov2015/i09.jpg';
import i10a from '../images/MSTCNov2015/i10a.jpg';
import i10b from '../images/MSTCNov2015/i10b.jpg';
import i11 from '../images/MSTCNov2015/i11.jpg';
import i12 from '../images/MSTCNov2015/i12.jpg';
import i13 from '../images/MSTCNov2015/i13.jpg';
import i14 from '../images/MSTCNov2015/i14.jpg';
import i15 from '../images/MSTCNov2015/i15.jpg';
import i16 from '../images/MSTCNov2015/i16.jpg';
import i17 from '../images/MSTCNov2015/i17.jpg';
import i18 from '../images/MSTCNov2015/i18.jpg';
import i19 from '../images/MSTCNov2015/i19.jpg';
import i20a from '../images/MSTCNov2015/i20a.jpg';
import i20b from '../images/MSTCNov2015/i20b.jpg';
import i21 from '../images/MSTCNov2015/i21.jpg';
import i22 from '../images/MSTCNov2015/i22.jpg';
import i23 from '../images/MSTCNov2015/i23.jpg';
import i24 from '../images/MSTCNov2015/i24.jpg';
import i25a from '../images/MSTCNov2015/i25a.jpg';
import i25b from '../images/MSTCNov2015/i25b.jpg';
import i26 from '../images/MSTCNov2015/i26.jpg';
import i27 from '../images/MSTCNov2015/i27.jpg';
import i28a from '../images/MSTCNov2015/i28a.jpg';
import i28b from '../images/MSTCNov2015/i28b.jpg';
import i29 from '../images/MSTCNov2015/i29.jpg';
import i30 from '../images/MSTCNov2015/i30.jpg';
import i31 from '../images/MSTCNov2015/i31.jpg';
import i32 from '../images/MSTCNov2015/i32.jpg';
import i33a from '../images/MSTCNov2015/i33a.jpg';
import i33b from '../images/MSTCNov2015/i33b.jpg';
import i34 from '../images/MSTCNov2015/i34.jpg';
import i35 from '../images/MSTCNov2015/i35.jpg';
import i36 from '../images/MSTCNov2015/i36.jpg';
import i37 from '../images/MSTCNov2015/i37.jpg';
import i38 from '../images/MSTCNov2015/i38.jpg';
import i39 from '../images/MSTCNov2015/i39.jpg';
import i40 from '../images/MSTCNov2015/i40.jpg';
import i41 from '../images/MSTCNov2015/i41.jpg';
import i42 from '../images/MSTCNov2015/i42.jpg';
import i43 from '../images/MSTCNov2015/i43.jpg';
import i44 from '../images/MSTCNov2015/i44.jpg';
import i45 from '../images/MSTCNov2015/i45.jpg';
import i46a from '../images/MSTCNov2015/i46a.jpg';
import i46b from '../images/MSTCNov2015/i46b.jpg';
import i47 from '../images/MSTCNov2015/i47.jpg';
import i48 from '../images/MSTCNov2015/i48.jpg';
import i49 from '../images/MSTCNov2015/i49.jpg';
import i50 from '../images/MSTCNov2015/i50.jpg';
import i51 from '../images/MSTCNov2015/i51.jpg';
import i52 from '../images/MSTCNov2015/i52.jpg';
import i53 from '../images/MSTCNov2015/i53.jpg';
import i54 from '../images/MSTCNov2015/i54.jpg';
import i55 from '../images/MSTCNov2015/i55.jpg';
import i56 from '../images/MSTCNov2015/i56.jpg';
import i57a from '../images/MSTCNov2015/i57a.jpg';
import i57b from '../images/MSTCNov2015/i57b.jpg';
import i58 from '../images/MSTCNov2015/i58.jpg';
import i59 from '../images/MSTCNov2015/i59.jpg';
import i60 from '../images/MSTCNov2015/i60.jpg';
import i61 from '../images/MSTCNov2015/i61.jpg';
import i62 from '../images/MSTCNov2015/i62.jpg';
import i63 from '../images/MSTCNov2015/i63.jpg';
import i64 from '../images/MSTCNov2015/i64.jpg';
import i65 from '../images/MSTCNov2015/i65.jpg';
import i66 from '../images/MSTCNov2015/i66.jpg';
import i67 from '../images/MSTCNov2015/i67.jpg';
import i68 from '../images/MSTCNov2015/i68.jpg';
import i69 from '../images/MSTCNov2015/i69.jpg';
import i70 from '../images/MSTCNov2015/i70.jpg';
import i71 from '../images/MSTCNov2015/i71.jpg';
import i72 from '../images/MSTCNov2015/i72.jpg';
import i73 from '../images/MSTCNov2015/i73.jpg';
import i74 from '../images/MSTCNov2015/i74.jpg';
import i75 from '../images/MSTCNov2015/i75.jpg';
import i76 from '../images/MSTCNov2015/i76.jpg';
import i77a from '../images/MSTCNov2015/i77a.jpg';
import i77b from '../images/MSTCNov2015/i77b.jpg';
import i78 from '../images/MSTCNov2015/i78.jpg';
import i79 from '../images/MSTCNov2015/i79.jpg';
import i80 from '../images/MSTCNov2015/i80.jpg';
import i81 from '../images/MSTCNov2015/i81.jpg';
import i82 from '../images/MSTCNov2015/i82.jpg';
import i83 from '../images/MSTCNov2015/i83.jpg';
import i84a from '../images/MSTCNov2015/i84a.jpg';
import i84b from '../images/MSTCNov2015/i84b.jpg';
import i85 from '../images/MSTCNov2015/i85.jpg';
import i86 from '../images/MSTCNov2015/i86.jpg';
import i87 from '../images/MSTCNov2015/i87.jpg';
import i88 from '../images/MSTCNov2015/i88.jpg';
import i89 from '../images/MSTCNov2015/i89.jpg';
import i90 from '../images/MSTCNov2015/i90.jpg';

/** Crops per item, in reading order. */
const CROPS: Record<number, string[]> = {
  1: [i01],
  2: [i02],
  3: [i03],
  4: [i04],
  5: [i05],
  6: [i06],
  7: [i07],
  8: [i08],
  9: [i09],
  10: [i10a, i10b],
  11: [i11],
  12: [i12],
  13: [i13],
  14: [i14],
  15: [i15],
  16: [i16],
  17: [i17],
  18: [i18],
  19: [i19],
  20: [i20a, i20b],
  21: [i21],
  22: [i22],
  23: [i23],
  24: [i24],
  25: [i25a, i25b],
  26: [i26],
  27: [i27],
  28: [i28a, i28b],
  29: [i29],
  30: [i30],
  31: [i31],
  32: [i32],
  33: [i33a, i33b],
  34: [i34],
  35: [i35],
  36: [i36],
  37: [i37],
  38: [i38],
  39: [i39],
  40: [i40],
  41: [i41],
  42: [i42],
  43: [i43],
  44: [i44],
  45: [i45],
  46: [i46a, i46b],
  47: [i47],
  48: [i48],
  49: [i49],
  50: [i50],
  51: [i51],
  52: [i52],
  53: [i53],
  54: [i54],
  55: [i55],
  56: [i56],
  57: [i57a, i57b],
  58: [i58],
  59: [i59],
  60: [i60],
  61: [i61],
  62: [i62],
  63: [i63],
  64: [i64],
  65: [i65],
  66: [i66],
  67: [i67],
  68: [i68],
  69: [i69],
  70: [i70],
  71: [i71],
  72: [i72],
  73: [i73],
  74: [i74],
  75: [i75],
  76: [i76],
  77: [i77a, i77b],
  78: [i78],
  79: [i79],
  80: [i80],
  81: [i81],
  82: [i82],
  83: [i83],
  84: [i84a, i84b],
  85: [i85],
  86: [i86],
  87: [i87],
  88: [i88],
  89: [i89],
  90: [i90],
};

/** Folio range of each item's printed working, keyed by item number. */
export const MSTC_NOV2015_FOLIOS: Record<number, [number, number]> = {
  1: [136, 136],
  2: [136, 136],
  3: [136, 136],
  4: [136, 136],
  5: [136, 136],
  6: [137, 137],
  7: [137, 137],
  8: [137, 137],
  9: [137, 137],
  10: [137, 138],
  11: [138, 138],
  12: [138, 138],
  13: [139, 139],
  14: [139, 139],
  15: [139, 139],
  16: [139, 139],
  17: [140, 140],
  18: [140, 140],
  19: [140, 140],
  20: [140, 141],
  21: [141, 141],
  22: [141, 141],
  23: [141, 141],
  24: [141, 141],
  25: [141, 142],
  26: [142, 142],
  27: [142, 142],
  28: [142, 143],
  29: [143, 143],
  30: [143, 143],
  31: [144, 144],
  32: [144, 144],
  33: [144, 145],
  34: [145, 145],
  35: [145, 145],
  36: [146, 146],
  37: [146, 146],
  38: [146, 146],
  39: [146, 146],
  40: [147, 147],
  41: [147, 147],
  42: [147, 147],
  43: [148, 148],
  44: [148, 148],
  45: [148, 148],
  46: [148, 149],
  47: [149, 149],
  48: [149, 149],
  49: [150, 150],
  50: [150, 150],
  51: [151, 151],
  52: [151, 151],
  53: [151, 151],
  54: [151, 151],
  55: [152, 152],
  56: [152, 152],
  57: [152, 153],
  58: [153, 153],
  59: [153, 153],
  60: [153, 153],
  61: [153, 153],
  62: [154, 154],
  63: [154, 154],
  64: [154, 154],
  65: [154, 154],
  66: [154, 154],
  67: [154, 154],
  68: [155, 155],
  69: [155, 155],
  70: [155, 155],
  71: [156, 156],
  72: [156, 156],
  73: [156, 156],
  74: [157, 157],
  75: [157, 157],
  76: [157, 157],
  77: [157, 158],
  78: [158, 158],
  79: [158, 158],
  80: [158, 158],
  81: [159, 159],
  82: [159, 159],
  83: [160, 160],
  84: [160, 161],
  85: [161, 161],
  86: [161, 161],
  87: [161, 161],
  88: [162, 162],
  89: [163, 163],
  90: [163, 163],
};

export function mstcNov2015SolutionImages(item: number): string[] {
  const crops = CROPS[item];
  if (!crops) throw new Error(`No MSTC Nov 2015 solution crop for item ${item}`);
  return crops;
}

export function mstcNov2015HasSolutionCrop(item: number): boolean {
  return (CROPS[item]?.length ?? 0) > 0;
}
