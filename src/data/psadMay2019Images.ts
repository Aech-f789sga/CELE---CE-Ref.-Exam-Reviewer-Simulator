/**
 * Scanned assets for SEC May 2019 (registered under PSAD).
 *
 * The booklet is titled "Structural Engineering & Construction — May 2019" but
 * the user asked for it to sit under PSAD, so the ids and the bank registration
 * use the PSAD subject.
 *
 * The source is a CamScanner scan with no text layer. Everything here was
 * cropped out of 300 dpi page renders (the question pages were re-read at
 * 300 dpi half-page because the 150 dpi pass produced unreliable option
 * values on the washed-out pages).
 *
 * - Figures: nineteen diagrams are printed with the questions (bar development
 *   detail, canopy truss, two five-panel trusses, bridge truss printed twice,
 *   flag pole, quarter-circle frame, beam plan with T section, Mohr's circle,
 *   square tube, tripod, bearing plate detail, spandrel beam elevation, T-beam
 *   section, column section, pile cap plan, combined footing with shear
 *   diagram, and the two column interaction-diagram charts). The three
 *   reference tables the booklet inserts (continuous-beam coefficients,
 *   allowable compressive stress for 248 MPa steel, NSCP 408.4 approximate
 *   moments) are book inserts, not question data, and are not reproduced.
 * - Solutions: the booklet prints a continuous derivation per item or per
 *   situation. Crop S01 is booklet p. 81 (PDF p. 21) and S30 is p. 110
 *   (PDF p. 50).
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import fig02 from '../images/PSADMay2019/F02.jpg';
import fig10 from '../images/PSADMay2019/F10.jpg';
import fig13 from '../images/PSADMay2019/F13.jpg';
import fig16 from '../images/PSADMay2019/F16.jpg';
import fig19 from '../images/PSADMay2019/F19.jpg';
import fig22 from '../images/PSADMay2019/F22.jpg';
import fig28 from '../images/PSADMay2019/F28.jpg';
import fig31 from '../images/PSADMay2019/F31.jpg';
import fig34 from '../images/PSADMay2019/F34.jpg';
import fig37 from '../images/PSADMay2019/F37.jpg';
import fig40 from '../images/PSADMay2019/F40.jpg';
import fig46 from '../images/PSADMay2019/F46.jpg';
import fig49 from '../images/PSADMay2019/F49.jpg';
import fig52 from '../images/PSADMay2019/F52.jpg';
import fig55 from '../images/PSADMay2019/F55.jpg';
import fig58 from '../images/PSADMay2019/F58.jpg';
import fig61 from '../images/PSADMay2019/F61.jpg';
import fig64 from '../images/PSADMay2019/F64.jpg';
import fig67 from '../images/PSADMay2019/F67.jpg';

import sol01 from '../images/PSADMay2019/S01.jpg';
import sol02 from '../images/PSADMay2019/S02.jpg';
import sol03 from '../images/PSADMay2019/S03.jpg';
import sol04 from '../images/PSADMay2019/S04.jpg';
import sol05 from '../images/PSADMay2019/S05.jpg';
import sol06 from '../images/PSADMay2019/S06.jpg';
import sol07 from '../images/PSADMay2019/S07.jpg';
import sol08 from '../images/PSADMay2019/S08.jpg';
import sol09 from '../images/PSADMay2019/S09.jpg';
import sol10 from '../images/PSADMay2019/S10.jpg';
import sol11 from '../images/PSADMay2019/S11.jpg';
import sol12 from '../images/PSADMay2019/S12.jpg';
import sol13 from '../images/PSADMay2019/S13.jpg';
import sol14 from '../images/PSADMay2019/S14.jpg';
import sol15 from '../images/PSADMay2019/S15.jpg';
import sol16 from '../images/PSADMay2019/S16.jpg';
import sol17 from '../images/PSADMay2019/S17.jpg';
import sol18 from '../images/PSADMay2019/S18.jpg';
import sol19 from '../images/PSADMay2019/S19.jpg';
import sol20 from '../images/PSADMay2019/S20.jpg';
import sol21 from '../images/PSADMay2019/S21.jpg';
import sol22 from '../images/PSADMay2019/S22.jpg';
import sol23 from '../images/PSADMay2019/S23.jpg';
import sol24 from '../images/PSADMay2019/S24.jpg';
import sol25 from '../images/PSADMay2019/S25.jpg';
import sol26 from '../images/PSADMay2019/S26.jpg';
import sol27 from '../images/PSADMay2019/S27.jpg';
import sol28 from '../images/PSADMay2019/S28.jpg';
import sol29 from '../images/PSADMay2019/S29.jpg';
import sol30 from '../images/PSADMay2019/S30.jpg';

/**
 * Printed figure crops, keyed by the item that owns the diagram. Items that
 * share a situation reuse the crop of the item that carries it.
 */
export const PSAD_MAY_2019_FIGURES: Record<number, string> = {
  2: fig02,
  10: fig10,
  13: fig13,
  16: fig16,
  19: fig19,
  22: fig22,
  28: fig28,
  31: fig31,
  34: fig34,
  37: fig37,
  40: fig40,
  46: fig46,
  49: fig49,
  52: fig52,
  55: fig55,
  58: fig58,
  61: fig61,
  64: fig64,
  67: fig67,
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
};

/** Printed booklet page for each crop: S01 is p. 81, S30 is p. 110. */
const CROP_PAGE: Record<number, number> = {
  1: 81,
  2: 82,
  3: 83,
  4: 84,
  5: 85,
  6: 86,
  7: 87,
  8: 88,
  9: 89,
  10: 90,
  11: 91,
  12: 92,
  13: 93,
  14: 94,
  15: 95,
  16: 96,
  17: 97,
  18: 98,
  19: 99,
  20: 100,
  21: 101,
  22: 102,
  23: 103,
  24: 104,
  25: 105,
  26: 106,
  27: 107,
  28: 108,
  29: 109,
  30: 110,
};

/**
 * Question number -> solution crop indices, in reading order. A derivation
 * that runs over a page break lists both pages.
 */
export const PSAD_MAY_2019_SOLUTION_CROPS: Record<number, number[]> = {
  1: [1],
  2: [1, 2],
  3: [2, 3],
  4: [3],
  5: [3],
  6: [3],
  7: [3, 4],
  8: [4],
  9: [4],
  10: [4, 5],
  11: [5],
  12: [5],
  13: [5, 6],
  14: [6],
  15: [6],
  16: [6],
  17: [6],
  18: [7],
  19: [7],
  20: [7],
  21: [7],
  22: [8],
  23: [8, 9],
  24: [8, 9],
  25: [9],
  26: [9],
  27: [10],
  28: [10, 11],
  29: [11],
  30: [11],
  31: [11, 12],
  32: [12],
  33: [12],
  34: [13],
  35: [13],
  36: [13],
  37: [13],
  38: [13, 14],
  39: [14],
  40: [15],
  41: [15, 16],
  42: [16],
  43: [17, 18],
  44: [18],
  45: [18],
  46: [18, 19],
  47: [19],
  48: [19],
  49: [20],
  50: [20],
  51: [20],
  52: [20],
  53: [21],
  54: [21, 22],
  55: [22],
  56: [22, 23],
  57: [23],
  58: [23, 24],
  59: [24],
  60: [24, 25],
  61: [25, 26],
  62: [27],
  63: [27],
  64: [27],
  65: [28],
  66: [28],
  67: [28],
  68: [28, 29],
  69: [29, 30],
};

/** Worked-solution crops for one item, in reading order. */
export function psadMay2019SolutionImages(n: number): string[] {
  const idx = PSAD_MAY_2019_SOLUTION_CROPS[n] ?? [];
  return idx.map((i) => {
    const crop = SOLUTION_CROPS[i];
    if (!crop) throw new Error(`No PSAD May 2019 solution crop ${i}`);
    return crop;
  });
}

/** First booklet page of the solution, for the "Page N Solution" label. */
export function psadMay2019SolutionPage(n: number): number | undefined {
  const idx = PSAD_MAY_2019_SOLUTION_CROPS[n] ?? [];
  return idx.length ? CROP_PAGE[idx[0]] : undefined;
}

/** Last booklet page of the solution, when it spans more than one page. */
export function psadMay2019SolutionPageEnd(n: number): number | undefined {
  const idx = PSAD_MAY_2019_SOLUTION_CROPS[n] ?? [];
  return idx.length > 1 ? CROP_PAGE[idx[idx.length - 1]] : undefined;
}

/** Booklet page each crop was taken from, for build-time sanity checks. */
export const PSAD_MAY_2019_CROP_PAGES = CROP_PAGE;

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 * The bundled asset URL is the primary source.
 */
export function psadMay2019Figure(questionNumber: number, alt: string): string {
  const src = PSAD_MAY_2019_FIGURES[questionNumber];
  if (!src) throw new Error(`No PSAD May 2019 figure for item ${questionNumber}`);
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
