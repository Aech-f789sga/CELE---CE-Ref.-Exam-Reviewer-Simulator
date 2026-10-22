/**
 * Scanned assets for HPGE November 2019.
 *
 * The source booklet (Hydraulics & Geotechnical Engineering, November 2019,
 * booklet pp. 148–177) is a CamScanner scan with no text layer, so every
 * figure and every worked solution was cropped out of the page renders.
 *
 * - Figures: five diagrams are printed with the questions — the item 11
 *   triangular gate, the item 12 sector gate, and the isolated-footing plan
 *   that items 38, 39/40 and 41 each repeat. The Boussinesq expressions in
 *   Situation 1 are transcribed as KaTeX rather than cropped.
 * - Solutions: the booklet prints a continuous derivation per item, and
 *   several of them spill onto the next page. The crops are page-aligned
 *   (S01 = booklet p. 160 … S18 = booklet p. 177) and a question simply
 *   references every page its derivation touches.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import fig11 from '../images/HPGENov2019/F11.jpg';
import fig12 from '../images/HPGENov2019/F12.jpg';
import fig38 from '../images/HPGENov2019/F38.jpg';
import fig39 from '../images/HPGENov2019/F39.jpg';
import fig41 from '../images/HPGENov2019/F41.jpg';

import sol01 from '../images/HPGENov2019/S01.jpg';
import sol02 from '../images/HPGENov2019/S02.jpg';
import sol03 from '../images/HPGENov2019/S03.jpg';
import sol04 from '../images/HPGENov2019/S04.jpg';
import sol05 from '../images/HPGENov2019/S05.jpg';
import sol06 from '../images/HPGENov2019/S06.jpg';
import sol07 from '../images/HPGENov2019/S07.jpg';
import sol08 from '../images/HPGENov2019/S08.jpg';
import sol09 from '../images/HPGENov2019/S09.jpg';
import sol10 from '../images/HPGENov2019/S10.jpg';
import sol11 from '../images/HPGENov2019/S11.jpg';
import sol12 from '../images/HPGENov2019/S12.jpg';
import sol13 from '../images/HPGENov2019/S13.jpg';
import sol14 from '../images/HPGENov2019/S14.jpg';
import sol15 from '../images/HPGENov2019/S15.jpg';
import sol16 from '../images/HPGENov2019/S16.jpg';
import sol17 from '../images/HPGENov2019/S17.jpg';
import sol18 from '../images/HPGENov2019/S18.jpg';

/**
 * Printed figure crops, keyed by the item that owns the diagram.
 * Items 39 and 40 share the footing plan printed on booklet p. 155.
 */
export const HPGE_NOV_2019_FIGURES: Record<number, string> = {
  11: fig11,
  12: fig12,
  38: fig38,
  39: fig39,
  40: fig39,
  41: fig41,
};

/** Booklet page the solution crop was taken from, keyed by crop index. */
const SOLUTION_CROP_PAGE: Record<number, number> = {
  1: 160,
  2: 161,
  3: 162,
  4: 163,
  5: 164,
  6: 165,
  7: 166,
  8: 167,
  9: 168,
  10: 169,
  11: 170,
  12: 171,
  13: 172,
  14: 173,
  15: 174,
  16: 175,
  17: 176,
  18: 177,
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
  16: sol16,
  17: sol17,
  18: sol18,
};

/**
 * Question number -> booklet pages carrying its worked solution, in reading
 * order. A derivation that runs over a page break lists both pages.
 */
export const HPGE_NOV_2019_SOLUTION_PAGES: Record<number, number[]> = {
  1: [160],
  2: [160],
  3: [160],
  4: [160],
  5: [161],
  6: [161],
  7: [161, 162],
  8: [162],
  9: [162],
  10: [163],
  11: [163, 164],
  12: [164],
  13: [164],
  14: [165],
  15: [165, 166],
  16: [166],
  17: [166],
  18: [167],
  19: [167],
  20: [168],
  21: [168],
  22: [169],
  23: [169],
  24: [169, 170],
  25: [170],
  26: [170],
  27: [170],
  28: [171],
  29: [171],
  30: [171, 172],
  31: [172],
  32: [172],
  33: [172],
  34: [173],
  35: [173],
  36: [173],
  37: [174],
  38: [174],
  39: [174, 175],
  40: [175],
  41: [175, 176],
  42: [176],
  43: [176],
  44: [177],
  45: [177],
};

/** Booklet page -> cropped solution image. */
function cropForPage(page: number): string {
  const index = page - 159;
  const crop = SOLUTION_CROPS[index];
  if (!crop) throw new Error(`No HPGE Nov 2019 solution crop for page ${page}`);
  return crop;
}

/** Worked-solution crops for one item, in reading order. */
export function hpgeNov2019SolutionImages(n: number): string[] {
  const pages = HPGE_NOV_2019_SOLUTION_PAGES[n] ?? [];
  return pages.map(cropForPage);
}

/** First booklet page of the solution, for the "Page N Solution" label. */
export function hpgeNov2019SolutionPage(n: number): number | undefined {
  return HPGE_NOV_2019_SOLUTION_PAGES[n]?.[0];
}

/** Last booklet page of the solution, when it spans more than one page. */
export function hpgeNov2019SolutionPageEnd(n: number): number | undefined {
  const pages = HPGE_NOV_2019_SOLUTION_PAGES[n] ?? [];
  return pages.length > 1 ? pages[pages.length - 1] : undefined;
}

/** Sanity check used by the build-time data tests. */
export const HPGE_NOV_2019_CROP_PAGES = SOLUTION_CROP_PAGE;

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 * The bundled asset URL is the primary source; the public path is a fallback.
 */
export function hpgeNov2019Figure(questionNumber: number, alt: string): string {
  const src = HPGE_NOV_2019_FIGURES[questionNumber];
  if (!src) throw new Error(`No HPGE Nov 2019 figure for item ${questionNumber}`);
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
