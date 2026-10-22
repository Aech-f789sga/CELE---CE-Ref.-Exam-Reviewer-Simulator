/**
 * Scanned assets for PSAD November 2021.
 *
 * The source booklet is a CamScanner scan with no text layer, so every figure
 * and every worked solution was cropped out of the 150 dpi page renders.
 *
 * - Figures: thirteen diagrams are printed with the questions (eyebolt,
 *   cylinders in a bin, two trusses, shear diagram, concrete pad, curved beam,
 *   bolted bracket, strut frame, floor framing plan, two T-beam sections and
 *   the pile cap). Everything else the booklet gives as data is a table and is
 *   transcribed as markdown.
 * - Solutions: the booklet prints a continuous derivation per item or per
 *   situation. Crop S01 is booklet p. 342 (PDF p. 20) and S31 is p. 372
 *   (PDF p. 50). Note the scan repeats booklet p. 362, so the printed page
 *   numbers run 342-362 twice and then 363-372.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import fig01 from '../images/PSADNov2021/F01.jpg';
import fig02 from '../images/PSADNov2021/F02.jpg';
import fig03 from '../images/PSADNov2021/F03.jpg';
import fig04 from '../images/PSADNov2021/F04.jpg';
import fig05 from '../images/PSADNov2021/F05.jpg';
import fig06 from '../images/PSADNov2021/F06.jpg';
import fig07 from '../images/PSADNov2021/F07.jpg';
import fig10 from '../images/PSADNov2021/F10.jpg';
import fig11 from '../images/PSADNov2021/F11.jpg';
import fig13 from '../images/PSADNov2021/F13.jpg';
import fig14 from '../images/PSADNov2021/F14.jpg';
import fig15 from '../images/PSADNov2021/F15.jpg';
import fig18 from '../images/PSADNov2021/F18.jpg';

import sol01 from '../images/PSADNov2021/S01.jpg';
import sol02 from '../images/PSADNov2021/S02.jpg';
import sol03 from '../images/PSADNov2021/S03.jpg';
import sol04 from '../images/PSADNov2021/S04.jpg';
import sol05 from '../images/PSADNov2021/S05.jpg';
import sol06 from '../images/PSADNov2021/S06.jpg';
import sol07 from '../images/PSADNov2021/S07.jpg';
import sol08 from '../images/PSADNov2021/S08.jpg';
import sol09 from '../images/PSADNov2021/S09.jpg';
import sol10 from '../images/PSADNov2021/S10.jpg';
import sol11 from '../images/PSADNov2021/S11.jpg';
import sol12 from '../images/PSADNov2021/S12.jpg';
import sol13 from '../images/PSADNov2021/S13.jpg';
import sol14 from '../images/PSADNov2021/S14.jpg';
import sol15 from '../images/PSADNov2021/S15.jpg';
import sol16 from '../images/PSADNov2021/S16.jpg';
import sol17 from '../images/PSADNov2021/S17.jpg';
import sol18 from '../images/PSADNov2021/S18.jpg';
import sol19 from '../images/PSADNov2021/S19.jpg';
import sol20 from '../images/PSADNov2021/S20.jpg';
import sol21 from '../images/PSADNov2021/S21.jpg';
import sol22 from '../images/PSADNov2021/S22.jpg';
import sol23 from '../images/PSADNov2021/S23.jpg';
import sol24 from '../images/PSADNov2021/S24.jpg';
import sol25 from '../images/PSADNov2021/S25.jpg';
import sol26 from '../images/PSADNov2021/S26.jpg';
import sol27 from '../images/PSADNov2021/S27.jpg';
import sol28 from '../images/PSADNov2021/S28.jpg';
import sol29 from '../images/PSADNov2021/S29.jpg';
import sol30 from '../images/PSADNov2021/S30.jpg';
import sol31 from '../images/PSADNov2021/S31.jpg';

/**
 * Printed figure crops, keyed by the item that owns the diagram. Items that
 * share a situation reuse the crop of the item that carries it.
 */
export const PSAD_NOV_2021_FIGURES: Record<number, string> = {
  1: fig01,
  6: fig02,
  7: fig03,
  10: fig04,
  13: fig05,
  16: fig06,
  19: fig07,
  28: fig10,
  31: fig11,
  49: fig13,
  52: fig14,
  55: fig15,
  61: fig18,
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
  19: sol19,
  20: sol20,
  21: sol21,
  22: sol22,
  23: sol23,
  24: sol24,
  25: sol25,
  26: sol26,
  27: sol27,
  28: sol28,
  29: sol29,
  30: sol30,
  31: sol31,
};

/**
 * Printed booklet page for each crop. The scan repeats booklet p. 362, which is
 * why S21 and S22 both carry the label 362.
 */
const CROP_PAGE: Record<number, number> = {
  1: 342,
  2: 343,
  3: 344,
  4: 345,
  5: 346,
  6: 347,
  7: 348,
  8: 349,
  9: 350,
  10: 351,
  11: 352,
  12: 353,
  13: 354,
  14: 355,
  15: 356,
  16: 357,
  17: 358,
  18: 359,
  19: 360,
  20: 361,
  21: 362,
  22: 362,
  23: 363,
  24: 364,
  25: 365,
  26: 366,
  27: 367,
  28: 368,
  29: 369,
  30: 370,
  31: 371,
};

/**
 * Question number -> solution crop indices, in reading order. A derivation
 * that runs over a page break lists both pages.
 */
export const PSAD_NOV_2021_SOLUTION_CROPS: Record<number, number[]> = {
  1: [1],
  2: [1],
  3: [1],
  4: [2],
  5: [2],
  6: [2],
  7: [2, 3],
  8: [2, 3],
  9: [2, 3],
  10: [3],
  11: [3],
  12: [3],
  13: [4],
  14: [4],
  15: [4],
  16: [5],
  17: [5],
  18: [5],
  19: [5, 6],
  20: [5, 6],
  21: [5, 6],
  22: [7],
  23: [7],
  24: [7],
  25: [8],
  26: [9],
  27: [9],
  28: [10],
  29: [10],
  30: [10],
  31: [11, 12],
  32: [11, 12],
  33: [11, 12],
  34: [13, 14],
  35: [13, 14],
  36: [13, 14],
  37: [15, 16],
  38: [15, 16],
  39: [15, 16],
  40: [16, 17],
  41: [16, 17],
  42: [16, 17],
  43: [17, 18],
  44: [17, 18],
  45: [17, 18],
  46: [19],
  47: [19],
  48: [19],
  49: [20],
  50: [20],
  51: [20],
  52: [21],
  53: [23],
  54: [23],
  55: [24],
  56: [24],
  57: [24],
  58: [25],
  59: [25],
  60: [25, 26],
  61: [26, 27],
  62: [26, 27],
  63: [28, 29],
  64: [29],
  65: [29],
  66: [30],
  67: [30, 31],
  68: [30, 31],
  69: [30],
};

/** Worked-solution crops for one item, in reading order. */
export function psadNov2021SolutionImages(n: number): string[] {
  const idx = PSAD_NOV_2021_SOLUTION_CROPS[n] ?? [];
  return idx.map((i) => {
    const crop = SOLUTION_CROPS[i];
    if (!crop) throw new Error(`No PSAD Nov 2021 solution crop ${i}`);
    return crop;
  });
}

/** First booklet page of the solution, for the "Page N Solution" label. */
export function psadNov2021SolutionPage(n: number): number | undefined {
  const idx = PSAD_NOV_2021_SOLUTION_CROPS[n] ?? [];
  return idx.length ? CROP_PAGE[idx[0]] : undefined;
}

/** Last booklet page of the solution, when it spans more than one page. */
export function psadNov2021SolutionPageEnd(n: number): number | undefined {
  const idx = PSAD_NOV_2021_SOLUTION_CROPS[n] ?? [];
  return idx.length > 1 ? CROP_PAGE[idx[idx.length - 1]] : undefined;
}

/** Booklet page each crop was taken from, for build-time sanity checks. */
export const PSAD_NOV_2021_CROP_PAGES = CROP_PAGE;

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 * The bundled asset URL is the primary source.
 */
export function psadNov2021Figure(questionNumber: number, alt: string): string {
  const src = PSAD_NOV_2021_FIGURES[questionNumber];
  if (!src) throw new Error(`No PSAD Nov 2021 figure for item ${questionNumber}`);
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
