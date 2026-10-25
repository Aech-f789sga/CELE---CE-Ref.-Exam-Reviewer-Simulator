/**
 * Scanned assets for HPGE May 2019.
 *
 * The booklet is titled "Hydraulics and Geotechnical Engineering — May 2019",
 * which the simulator files under HPGE. The source is a CamScanner scan with no
 * text layer, so every figure and every worked solution was cropped out of the
 * page renders.
 *
 * Booklet page = PDF page + 37. Questions run booklet pp. 38–45 and the answer
 * key is printed in a box on p. 45, under item 47. Solutions run pp. 46–60.
 *
 * - Figures: only one diagram is printed with the questions — the three-pipe
 *   parallel network for Situation 7 (items 27–29), printed on booklet p. 42.
 *   The Situation 7 data table is also on p. 41 but its overprint destroyed it;
 *   the values were recovered from the solution diagram and are encoded as a
 *   markdown table in the question bank.
 * - Reference insert: the Terzaghi bearing-capacity factor table on p. 44 is a
 *   bound-in lookup table rather than question data, so it is not reproduced.
 *   The solution crop for items 42–44 states the factors it actually uses
 *   (Nc = 37.16, Nq = 22.46, Nγ = 19.13, the φ = 30° row).
 * - Solutions: crops are page-aligned (S01 = booklet p. 46 … S15 = booklet
 *   p. 60), and an item references every page its derivation touches.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import fig27 from '../images/HGEMay2019/F27.jpg';

import sol01 from '../images/HGEMay2019/S01.jpg';
import sol02 from '../images/HGEMay2019/S02.jpg';
import sol03 from '../images/HGEMay2019/S03.jpg';
import sol04 from '../images/HGEMay2019/S04.jpg';
import sol05 from '../images/HGEMay2019/S05.jpg';
import sol06 from '../images/HGEMay2019/S06.jpg';
import sol07 from '../images/HGEMay2019/S07.jpg';
import sol08 from '../images/HGEMay2019/S08.jpg';
import sol09 from '../images/HGEMay2019/S09.jpg';
import sol10 from '../images/HGEMay2019/S10.jpg';
import sol11 from '../images/HGEMay2019/S11.jpg';
import sol12 from '../images/HGEMay2019/S12.jpg';
import sol13 from '../images/HGEMay2019/S13.jpg';
import sol14 from '../images/HGEMay2019/S14.jpg';
import sol15 from '../images/HGEMay2019/S15.jpg';

/**
 * Printed figure crops, keyed by the item that owns the diagram. The
 * three-pipe network is printed on booklet p. 42, below item 29, and is
 * attached to item 27, the item that opens Situation 7.
 */
export const HGE_MAY_2019_FIGURES: Record<number, string> = {
  27: fig27,
};

/** Booklet page the solution crop was taken from, keyed by crop index. */
const SOLUTION_CROP_PAGE: Record<number, number> = {
  1: 46,
  2: 47,
  3: 48,
  4: 49,
  5: 50,
  6: 51,
  7: 52,
  8: 53,
  9: 54,
  10: 55,
  11: 56,
  12: 57,
  13: 58,
  14: 59,
  15: 60,
};

const SOLUTION_CROPS: Record<number, string> = {
  1: sol01,
  2: sol02,
  3: sol03,
  4: sol04,
  5: sol05,
  6: sol06,
  7: sol07,
  8: sol08,
  9: sol09,
  10: sol10,
  11: sol11,
  12: sol12,
  13: sol13,
  14: sol14,
  15: sol15,
};

/**
 * Question number -> booklet pages carrying its worked solution, in reading
 * order. A derivation that runs over a page break lists both pages.
 */
export const HGE_MAY_2019_SOLUTION_PAGES: Record<number, number[]> = {
  1: [46],
  2: [46],
  3: [46, 47],
  4: [47],
  5: [47],
  6: [47],
  7: [48],
  8: [48],
  9: [49],
  10: [49],
  11: [49],
  12: [49, 50],
  13: [49, 50],
  14: [50],
  15: [50],
  16: [50],
  17: [50],
  18: [51],
  19: [51],
  20: [51],
  21: [52],
  22: [52],
  23: [52],
  24: [53],
  25: [53],
  26: [53],
  27: [54],
  28: [54],
  29: [54],
  30: [54],
  31: [54],
  32: [55],
  33: [55],
  34: [55, 56],
  35: [56],
  36: [57],
  37: [57],
  38: [57],
  39: [58],
  40: [58],
  41: [58],
  42: [59],
  43: [59],
  44: [59],
  45: [60],
  46: [60],
  47: [60],
};

/** Booklet page -> cropped solution image. */
function cropForPage(page: number): string {
  const index = page - 45;
  const crop = SOLUTION_CROPS[index];
  if (!crop) throw new Error(`No HGE May 2019 solution crop for page ${page}`);
  return crop;
}

/** Worked-solution crops for one item, in reading order. */
export function hgeMay2019SolutionImages(n: number): string[] {
  const pages = HGE_MAY_2019_SOLUTION_PAGES[n] ?? [];
  return pages.map(cropForPage);
}

/** First booklet page of the solution, for the "Page N Solution" label. */
export function hgeMay2019SolutionPage(n: number): number | undefined {
  return HGE_MAY_2019_SOLUTION_PAGES[n]?.[0];
}

/** Last booklet page of the solution, when it spans more than one page. */
export function hgeMay2019SolutionPageEnd(n: number): number | undefined {
  const pages = HGE_MAY_2019_SOLUTION_PAGES[n] ?? [];
  return pages.length > 1 ? pages[pages.length - 1] : undefined;
}

/** Sanity check used by the build-time data tests. */
export const HGE_MAY_2019_CROP_PAGES = SOLUTION_CROP_PAGE;

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 * The bundled asset URL is the primary source; the public path is a fallback.
 */
export function hgeMay2019Figure(questionNumber: number, alt: string): string {
  const src = HGE_MAY_2019_FIGURES[questionNumber];
  if (!src) throw new Error(`No HGE May 2019 figure for item ${questionNumber}`);
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
