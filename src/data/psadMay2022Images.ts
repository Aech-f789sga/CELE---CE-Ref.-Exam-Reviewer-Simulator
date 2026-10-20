/**
 * Scanned assets for PSAD May 2022.
 *
 * The source booklet is a CamScanner scan with no text layer, so every figure
 * and every worked solution was cropped out of the rendered pages.
 *
 * - Figures: one crop per situation that actually prints a diagram.
 * - Solutions: the booklet prints one continuous solution per situation
 *   (24 situations covering 72 items), so the crops are page-aligned and shared
 *   by every question in that situation.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import fig1 from '../images/PSADMay2022/PSAD_May_2022_F1.jpg';
import fig2 from '../images/PSADMay2022/PSAD_May_2022_F2.jpg';
import fig3 from '../images/PSADMay2022/PSAD_May_2022_F3.jpg';
import fig4 from '../images/PSADMay2022/PSAD_May_2022_F4.jpg';
import fig5 from '../images/PSADMay2022/PSAD_May_2022_F5.jpg';
import fig6 from '../images/PSADMay2022/PSAD_May_2022_F6.jpg';
import fig9 from '../images/PSADMay2022/PSAD_May_2022_F9.jpg';
import fig10 from '../images/PSADMay2022/PSAD_May_2022_F10.jpg';
import fig12 from '../images/PSADMay2022/PSAD_May_2022_F12.jpg';
import fig13 from '../images/PSADMay2022/PSAD_May_2022_F13.jpg';
import fig15 from '../images/PSADMay2022/PSAD_May_2022_F15.jpg';
import fig18 from '../images/PSADMay2022/PSAD_May_2022_F18.jpg';
import fig19 from '../images/PSADMay2022/PSAD_May_2022_F19.jpg';
import fig21 from '../images/PSADMay2022/PSAD_May_2022_F21.jpg';
import fig23 from '../images/PSADMay2022/PSAD_May_2022_F23.jpg';

import sol01 from '../images/PSADMay2022/PSAD_May_2022_S01.jpg';
import sol02 from '../images/PSADMay2022/PSAD_May_2022_S02.jpg';
import sol03 from '../images/PSADMay2022/PSAD_May_2022_S03.jpg';
import sol04 from '../images/PSADMay2022/PSAD_May_2022_S04.jpg';
import sol05 from '../images/PSADMay2022/PSAD_May_2022_S05.jpg';
import sol06 from '../images/PSADMay2022/PSAD_May_2022_S06.jpg';
import sol07 from '../images/PSADMay2022/PSAD_May_2022_S07.jpg';
import sol08 from '../images/PSADMay2022/PSAD_May_2022_S08.jpg';
import sol09 from '../images/PSADMay2022/PSAD_May_2022_S09.jpg';
import sol10 from '../images/PSADMay2022/PSAD_May_2022_S10.jpg';
import sol11 from '../images/PSADMay2022/PSAD_May_2022_S11.jpg';
import sol12 from '../images/PSADMay2022/PSAD_May_2022_S12.jpg';
import sol13 from '../images/PSADMay2022/PSAD_May_2022_S13.jpg';
import sol14 from '../images/PSADMay2022/PSAD_May_2022_S14.jpg';
import sol15 from '../images/PSADMay2022/PSAD_May_2022_S15.jpg';
import sol16 from '../images/PSADMay2022/PSAD_May_2022_S16.jpg';
import sol17 from '../images/PSADMay2022/PSAD_May_2022_S17.jpg';
import sol18 from '../images/PSADMay2022/PSAD_May_2022_S18.jpg';
import sol19 from '../images/PSADMay2022/PSAD_May_2022_S19.jpg';
import sol20 from '../images/PSADMay2022/PSAD_May_2022_S20.jpg';
import sol21 from '../images/PSADMay2022/PSAD_May_2022_S21.jpg';
import sol22 from '../images/PSADMay2022/PSAD_May_2022_S22.jpg';
import sol23 from '../images/PSADMay2022/PSAD_May_2022_S23.jpg';
import sol24 from '../images/PSADMay2022/PSAD_May_2022_S24.jpg';
import sol25 from '../images/PSADMay2022/PSAD_May_2022_S25.jpg';
import sol26 from '../images/PSADMay2022/PSAD_May_2022_S26.jpg';
import sol27 from '../images/PSADMay2022/PSAD_May_2022_S27.jpg';
import sol28 from '../images/PSADMay2022/PSAD_May_2022_S28.jpg';
import sol29 from '../images/PSADMay2022/PSAD_May_2022_S29.jpg';
import sol30 from '../images/PSADMay2022/PSAD_May_2022_S30.jpg';
import sol31 from '../images/PSADMay2022/PSAD_May_2022_S31.jpg';
import sol32 from '../images/PSADMay2022/PSAD_May_2022_S32.jpg';
import sol33 from '../images/PSADMay2022/PSAD_May_2022_S33.jpg';
import sol34 from '../images/PSADMay2022/PSAD_May_2022_S34.jpg';
import sol35 from '../images/PSADMay2022/PSAD_May_2022_S35.jpg';
import sol36 from '../images/PSADMay2022/PSAD_May_2022_S36.jpg';
import sol37 from '../images/PSADMay2022/PSAD_May_2022_S37.jpg';
import sol38 from '../images/PSADMay2022/PSAD_May_2022_S38.jpg';

/** Situation number -> printed figure, when the situation has one. */
export const PSAD_MAY_2022_FIGURES: Record<number, string> = {
  1: fig1,
  2: fig2,
  3: fig3,
  4: fig4,
  5: fig5,
  6: fig6,
  9: fig9,
  10: fig10,
  12: fig12,
  13: fig13,
  15: fig15,
  18: fig18,
  19: fig19,
  21: fig21,
  23: fig23,
};

/** Booklet page (436-455) -> solution crop index, offset from page 21. */
const SOLUTION_PAGES: Record<number, string> = {
  456: sol01,
  457: sol02,
  458: sol03,
  459: sol04,
  460: sol05,
  461: sol06,
  462: sol07,
  463: sol08,
  464: sol09,
  465: sol10,
  466: sol11,
  467: sol12,
  468: sol13,
  469: sol14,
  470: sol15,
  471: sol16,
  472: sol17,
  473: sol18,
  474: sol19,
  475: sol20,
  476: sol21,
  477: sol22,
  478: sol23,
  479: sol24,
  480: sol25,
  481: sol26,
  482: sol27,
  483: sol28,
  484: sol29,
  485: sol30,
  486: sol31,
  487: sol32,
  488: sol33,
  489: sol34,
  490: sol35,
  491: sol36,
  492: sol37,
  493: sol38,
};

/** Booklet pages each situation's worked solution is printed on. */
const SITUATION_SOLUTION_PAGES: Record<number, number[]> = {
  1: [456],
  2: [457, 458],
  3: [458, 459, 460],
  4: [460, 461],
  5: [461, 462],
  6: [462, 463],
  7: [463, 464],
  8: [464, 465],
  9: [465, 466],
  10: [467, 468],
  11: [468, 469],
  12: [469, 470],
  13: [470, 471, 472, 473],
  14: [473, 474],
  15: [474, 475, 476],
  16: [476, 477],
  17: [477, 478, 479],
  18: [479, 480, 481, 482],
  19: [482, 483, 484, 485],
  20: [485, 486, 487],
  21: [487, 488],
  22: [489, 490],
  23: [491, 492],
  24: [492, 493],
};

export const psadMay2022SolutionImages = (situation: number): string[] =>
  (SITUATION_SOLUTION_PAGES[situation] ?? []).map((p) => SOLUTION_PAGES[p]).filter(Boolean);

export const psadMay2022SolutionPage = (situation: number): number =>
  SITUATION_SOLUTION_PAGES[situation]?.[0] ?? 456;

export const psadMay2022SolutionPageEnd = (situation: number): number => {
  const pages = SITUATION_SOLUTION_PAGES[situation] ?? [];
  return pages.length ? pages[pages.length - 1] : 456;
};

/**
 * Wraps a cropped figure into the markup EngineeringFigure expects. Passing the
 * Vite-emitted asset URL keeps the image working in both dev and the production
 * build, unlike a hard-coded /src/... path.
 */
export const psadFigure = (situation: number, alt: string): string | undefined => {
  const src = PSAD_MAY_2022_FIGURES[situation];
  if (!src) return undefined;
  return `<div class="flex flex-col items-center justify-center w-full py-2"><img src="${src}" alt="${alt}" class="max-w-2xl w-full h-auto object-contain rounded-lg bg-white p-2 shadow-sm border border-slate-200" loading="eager" referrerpolicy="no-referrer" /></div>`;
};
