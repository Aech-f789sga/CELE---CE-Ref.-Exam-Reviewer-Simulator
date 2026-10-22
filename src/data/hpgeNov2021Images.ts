/**
 * Scanned assets for HPGE November 2021.
 *
 * The source booklet is a CamScanner scan with no text layer, so every figure
 * and every worked solution was cropped out of the 150 dpi page renders.
 *
 * - Figures: only two diagrams are printed with the questions (the item 1
 *   manometer and the Situation 7 parallel-pipe network). Everything else the
 *   booklet shows as a "given" is a formula, which is transcribed as KaTeX.
 * - Solutions: the booklet prints a continuous derivation per item or per
 *   situation, and several of them spill onto the next page. The crops are
 *   page-aligned (S01 = booklet p. 305 … S18 = booklet p. 322) and a question
 *   simply references every page its derivation touches.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import fig01 from '../images/HPGENov2021/F01.jpg';
import fig25 from '../images/HPGENov2021/F25.jpg';

import sol01 from '../images/HPGENov2021/S01.jpg';
import sol02 from '../images/HPGENov2021/S02.jpg';
import sol03 from '../images/HPGENov2021/S03.jpg';
import sol04 from '../images/HPGENov2021/S04.jpg';
import sol05 from '../images/HPGENov2021/S05.jpg';
import sol06 from '../images/HPGENov2021/S06.jpg';
import sol07 from '../images/HPGENov2021/S07.jpg';
import sol08 from '../images/HPGENov2021/S08.jpg';
import sol09 from '../images/HPGENov2021/S09.jpg';
import sol10 from '../images/HPGENov2021/S10.jpg';
import sol11 from '../images/HPGENov2021/S11.jpg';
import sol12 from '../images/HPGENov2021/S12.jpg';
import sol13 from '../images/HPGENov2021/S13.jpg';
import sol14 from '../images/HPGENov2021/S14.jpg';
import sol15 from '../images/HPGENov2021/S15.jpg';
import sol16 from '../images/HPGENov2021/S16.jpg';
import sol17 from '../images/HPGENov2021/S17.jpg';
import sol18 from '../images/HPGENov2021/S18.jpg';

/**
 * Printed figure crops, keyed by the item that owns the diagram.
 * Item 25 carries the Situation 7 network, which items 25–27 share.
 */
export const HPGE_NOV_2021_FIGURES: Record<number, string> = {
  1: fig01,
  25: fig25,
};

/** Booklet page the solution crop was taken from, keyed by crop index. */
const SOLUTION_CROP_PAGE: Record<number, number> = {
  1: 305,
  2: 306,
  3: 307,
  4: 308,
  5: 309,
  6: 310,
  7: 311,
  8: 312,
  9: 313,
  10: 314,
  11: 315,
  12: 316,
  13: 317,
  14: 318,
  15: 319,
  16: 320,
  17: 321,
  18: 322,
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
export const HPGE_NOV_2021_SOLUTION_PAGES: Record<number, number[]> = {
  1: [305],
  2: [305],
  3: [305, 306],
  4: [306],
  5: [306],
  6: [306, 307],
  7: [307],
  8: [307],
  9: [307],
  10: [307],
  11: [307, 308],
  12: [308],
  13: [308],
  14: [308],
  15: [308, 309],
  16: [309],
  17: [309],
  18: [309],
  19: [310],
  20: [310],
  21: [310],
  22: [311],
  23: [311],
  24: [311],
  25: [312],
  26: [312],
  27: [312],
  28: [313],
  29: [313],
  30: [314],
  31: [314, 315],
  32: [315],
  33: [315],
  34: [315, 316],
  35: [316, 317],
  36: [317, 318],
  37: [317, 318],
  38: [318],
  39: [318],
  40: [318, 319],
  41: [319],
  42: [319, 320],
  43: [320],
  44: [320],
  45: [320],
  46: [321],
  47: [321],
  48: [322],
  49: [322],
  50: [322],
};

/** Booklet page -> cropped solution image. */
function cropForPage(page: number): string {
  const index = page - 304;
  const crop = SOLUTION_CROPS[index];
  if (!crop) throw new Error(`No HPGE Nov 2021 solution crop for page ${page}`);
  return crop;
}

/** Worked-solution crops for one item, in reading order. */
export function hpgeNov2021SolutionImages(n: number): string[] {
  const pages = HPGE_NOV_2021_SOLUTION_PAGES[n] ?? [];
  return pages.map(cropForPage);
}

/** First booklet page of the solution, for the "Page N Solution" label. */
export function hpgeNov2021SolutionPage(n: number): number | undefined {
  return HPGE_NOV_2021_SOLUTION_PAGES[n]?.[0];
}

/** Last booklet page of the solution, when it spans more than one page. */
export function hpgeNov2021SolutionPageEnd(n: number): number | undefined {
  const pages = HPGE_NOV_2021_SOLUTION_PAGES[n] ?? [];
  return pages.length > 1 ? pages[pages.length - 1] : undefined;
}

/** Sanity check used by the build-time data tests. */
export const HPGE_NOV_2021_CROP_PAGES = SOLUTION_CROP_PAGE;

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 * The bundled asset URL is the primary source; the public path is a fallback.
 */
export function hpgeNov2021Figure(questionNumber: number, alt: string): string {
  const src = HPGE_NOV_2021_FIGURES[questionNumber];
  if (!src) throw new Error(`No HPGE Nov 2021 figure for item ${questionNumber}`);
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
