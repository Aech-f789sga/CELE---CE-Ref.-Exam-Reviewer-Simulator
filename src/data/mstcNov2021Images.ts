/**
 * Scanned assets for MSTC November 2021.
 *
 * The source booklet is a CamScanner scan with no text layer, so every figure
 * and every worked solution was cropped out of the rendered pages.
 *
 * - Figures: the booklet prints exactly one diagram worth cropping — the
 *   wheel-loader travel-time chart attached to Item 44. Everything else is
 *   typeset maths or a small table, which are encoded as text instead.
 * - Solutions: the booklet prints one continuous solution run (pp. 256-295),
 *   so the crops are page-aligned. A question points at every page its
 *   solution touches, which is why some entries list two or three pages.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import fig44 from '../images/MSTCNov2021/MSTC_Nov_2021_F44.jpg';

import sol01 from '../images/MSTCNov2021/MSTC_Nov_2021_S01.jpg';
import sol02 from '../images/MSTCNov2021/MSTC_Nov_2021_S02.jpg';
import sol03 from '../images/MSTCNov2021/MSTC_Nov_2021_S03.jpg';
import sol04 from '../images/MSTCNov2021/MSTC_Nov_2021_S04.jpg';
import sol05 from '../images/MSTCNov2021/MSTC_Nov_2021_S05.jpg';
import sol06 from '../images/MSTCNov2021/MSTC_Nov_2021_S06.jpg';
import sol07 from '../images/MSTCNov2021/MSTC_Nov_2021_S07.jpg';
import sol08 from '../images/MSTCNov2021/MSTC_Nov_2021_S08.jpg';
import sol09 from '../images/MSTCNov2021/MSTC_Nov_2021_S09.jpg';
import sol10 from '../images/MSTCNov2021/MSTC_Nov_2021_S10.jpg';
import sol11 from '../images/MSTCNov2021/MSTC_Nov_2021_S11.jpg';
import sol12 from '../images/MSTCNov2021/MSTC_Nov_2021_S12.jpg';
import sol13 from '../images/MSTCNov2021/MSTC_Nov_2021_S13.jpg';
import sol14 from '../images/MSTCNov2021/MSTC_Nov_2021_S14.jpg';
import sol15 from '../images/MSTCNov2021/MSTC_Nov_2021_S15.jpg';
import sol16 from '../images/MSTCNov2021/MSTC_Nov_2021_S16.jpg';
import sol17 from '../images/MSTCNov2021/MSTC_Nov_2021_S17.jpg';
import sol18 from '../images/MSTCNov2021/MSTC_Nov_2021_S18.jpg';
import sol19 from '../images/MSTCNov2021/MSTC_Nov_2021_S19.jpg';
import sol20 from '../images/MSTCNov2021/MSTC_Nov_2021_S20.jpg';
import sol21 from '../images/MSTCNov2021/MSTC_Nov_2021_S21.jpg';
import sol22 from '../images/MSTCNov2021/MSTC_Nov_2021_S22.jpg';
import sol23 from '../images/MSTCNov2021/MSTC_Nov_2021_S23.jpg';
import sol24 from '../images/MSTCNov2021/MSTC_Nov_2021_S24.jpg';
import sol25 from '../images/MSTCNov2021/MSTC_Nov_2021_S25.jpg';
import sol26 from '../images/MSTCNov2021/MSTC_Nov_2021_S26.jpg';
import sol27 from '../images/MSTCNov2021/MSTC_Nov_2021_S27.jpg';
import sol28 from '../images/MSTCNov2021/MSTC_Nov_2021_S28.jpg';
import sol29 from '../images/MSTCNov2021/MSTC_Nov_2021_S29.jpg';
import sol30 from '../images/MSTCNov2021/MSTC_Nov_2021_S30.jpg';
import sol31 from '../images/MSTCNov2021/MSTC_Nov_2021_S31.jpg';
import sol32 from '../images/MSTCNov2021/MSTC_Nov_2021_S32.jpg';
import sol33 from '../images/MSTCNov2021/MSTC_Nov_2021_S33.jpg';
import sol34 from '../images/MSTCNov2021/MSTC_Nov_2021_S34.jpg';
import sol35 from '../images/MSTCNov2021/MSTC_Nov_2021_S35.jpg';
import sol36 from '../images/MSTCNov2021/MSTC_Nov_2021_S36.jpg';
import sol37 from '../images/MSTCNov2021/MSTC_Nov_2021_S37.jpg';
import sol38 from '../images/MSTCNov2021/MSTC_Nov_2021_S38.jpg';
import sol39 from '../images/MSTCNov2021/MSTC_Nov_2021_S39.jpg';
import sol40 from '../images/MSTCNov2021/MSTC_Nov_2021_S40.jpg';

/** Item number -> cropped figure, when the item prints one. */
export const MSTC_NOV_2021_FIGURES: Record<number, string> = {
  44: fig44,
};

/**
 * Booklet page (256-295) -> solution crop. The crop index is simply the page
 * number offset by 239, so page 256 is S01 and page 295 is S40.
 */
const SOLUTION_PAGES: Record<number, string> = {
  256: sol01,
  257: sol02,
  258: sol03,
  259: sol04,
  260: sol05,
  261: sol06,
  262: sol07,
  263: sol08,
  264: sol09,
  265: sol10,
  266: sol11,
  267: sol12,
  268: sol13,
  269: sol14,
  270: sol15,
  271: sol16,
  272: sol17,
  273: sol18,
  274: sol19,
  275: sol20,
  276: sol21,
  277: sol22,
  278: sol23,
  279: sol24,
  280: sol25,
  281: sol26,
  282: sol27,
  283: sol28,
  284: sol29,
  285: sol30,
  286: sol31,
  287: sol32,
  288: sol33,
  289: sol34,
  290: sol35,
  291: sol36,
  292: sol37,
  293: sol38,
  294: sol39,
  295: sol40,
};

/**
 * Item number -> booklet pages its worked solution is printed on. The booklet
 * runs the solutions together without page breaks between items, so an item
 * that starts near the foot of a page continues onto the next one.
 */
const SOLUTION_SPREAD: Record<number, number[]> = {
  1: [256],
  2: [256, 257],
  3: [257],
  4: [257],
  5: [257],
  6: [258],
  7: [258, 259],
  8: [259],
  9: [259],
  10: [260],
  11: [260],
  12: [260],
  13: [261],
  14: [261],
  15: [262],
  16: [262, 263],
  17: [263],
  18: [263],
  19: [263],
  20: [264],
  21: [264, 265],
  22: [265],
  23: [265],
  24: [265, 266],
  25: [266],
  26: [266, 267],
  27: [267],
  28: [268],
  29: [269],
  30: [269],
  31: [270],
  32: [270],
  33: [270, 271],
  34: [271, 272],
  35: [272],
  36: [273],
  37: [274],
  38: [274, 275],
  39: [275],
  40: [276],
  41: [277],
  42: [278],
  43: [278, 279],
  44: [279],
  45: [280],
  46: [280],
  47: [280, 281, 282],
  48: [281, 282],
  49: [281, 282, 283],
  50: [283],
  51: [283, 284],
  52: [284],
  53: [285],
  54: [285, 286],
  55: [286, 287, 288, 289],
  56: [289, 290],
  57: [290],
  58: [291],
  59: [291],
  60: [292, 293],
  61: [293],
  62: [293],
  63: [293],
  64: [293, 294],
  65: [294],
  66: [294],
  67: [294, 295],
  68: [295],
  69: [295],
};

export const mstcNov2021SolutionImages = (item: number): string[] =>
  (SOLUTION_SPREAD[item] ?? []).map((p) => SOLUTION_PAGES[p]).filter(Boolean);

export const mstcNov2021SolutionPage = (item: number): number =>
  SOLUTION_SPREAD[item]?.[0] ?? 256;

export const mstcNov2021SolutionPageEnd = (item: number): number => {
  const pages = SOLUTION_SPREAD[item] ?? [];
  return pages.length ? pages[pages.length - 1] : 256;
};

/**
 * Wraps a cropped figure into the markup EngineeringFigure expects. Passing the
 * Vite-emitted asset URL keeps the image working in both dev and the production
 * build, unlike a hard-coded /src/... path.
 */
export const mstcFigure = (item: number, alt: string): string | undefined => {
  const src = MSTC_NOV_2021_FIGURES[item];
  if (!src) return undefined;
  return `<div class="flex flex-col items-center justify-center w-full py-2"><img src="${src}" alt="${alt}" class="max-w-2xl w-full h-auto object-contain rounded-lg bg-white p-2 shadow-sm border border-slate-200" loading="eager" referrerpolicy="no-referrer" /></div>`;
};
