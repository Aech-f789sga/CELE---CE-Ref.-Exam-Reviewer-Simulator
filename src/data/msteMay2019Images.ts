/**
 * Scanned assets for MSTE May 2019.
 *
 * The booklet is titled "Mathematics, Surveying and Transportation Engineering",
 * which is the same subject the simulator labels MSTC, so the set is filed under
 * MSTC / May / 2019.
 *
 * The source is a CamScanner scan with no text layer, so the worked solutions
 * were cropped out of the rendered pages. This booklet prints no stand-alone
 * illustrations on the question pages — every diagram in it lives inside the
 * worked solution, and those are captured by the page crops below. The numeric
 * layouts (cross-section notes, tally tables) are encoded as text.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import sol01 from '../images/MSTEMay2019/MSTE_May_2019_S01.jpg';
import sol02 from '../images/MSTEMay2019/MSTE_May_2019_S02.jpg';
import sol03 from '../images/MSTEMay2019/MSTE_May_2019_S03.jpg';
import sol04 from '../images/MSTEMay2019/MSTE_May_2019_S04.jpg';
import sol05 from '../images/MSTEMay2019/MSTE_May_2019_S05.jpg';
import sol06 from '../images/MSTEMay2019/MSTE_May_2019_S06.jpg';
import sol07 from '../images/MSTEMay2019/MSTE_May_2019_S07.jpg';
import sol08 from '../images/MSTEMay2019/MSTE_May_2019_S08.jpg';
import sol09 from '../images/MSTEMay2019/MSTE_May_2019_S09.jpg';
import sol10 from '../images/MSTEMay2019/MSTE_May_2019_S10.jpg';
import sol11 from '../images/MSTEMay2019/MSTE_May_2019_S11.jpg';
import sol12 from '../images/MSTEMay2019/MSTE_May_2019_S12.jpg';
import sol13 from '../images/MSTEMay2019/MSTE_May_2019_S13.jpg';
import sol14 from '../images/MSTEMay2019/MSTE_May_2019_S14.jpg';
import sol15 from '../images/MSTEMay2019/MSTE_May_2019_S15.jpg';
import sol16 from '../images/MSTEMay2019/MSTE_May_2019_S16.jpg';
import sol17 from '../images/MSTEMay2019/MSTE_May_2019_S17.jpg';
import sol18 from '../images/MSTEMay2019/MSTE_May_2019_S18.jpg';
import sol19 from '../images/MSTEMay2019/MSTE_May_2019_S19.jpg';
import sol20 from '../images/MSTEMay2019/MSTE_May_2019_S20.jpg';
import sol21 from '../images/MSTEMay2019/MSTE_May_2019_S21.jpg';
import sol22 from '../images/MSTEMay2019/MSTE_May_2019_S22.jpg';
import sol23 from '../images/MSTEMay2019/MSTE_May_2019_S23.jpg';
import sol24 from '../images/MSTEMay2019/MSTE_May_2019_S24.jpg';
import sol25 from '../images/MSTEMay2019/MSTE_May_2019_S25.jpg';
import sol26 from '../images/MSTEMay2019/MSTE_May_2019_S26.jpg';

/**
 * Booklet page (12-37) -> solution crop. The crop index is the page number
 * offset by 11, so page 12 is S01 and page 37 is S26.
 */
const SOLUTION_PAGES: Record<number, string> = {
  12: sol01,
  13: sol02,
  14: sol03,
  15: sol04,
  16: sol05,
  17: sol06,
  18: sol07,
  19: sol08,
  20: sol09,
  21: sol10,
  22: sol11,
  23: sol12,
  24: sol13,
  25: sol14,
  26: sol15,
  27: sol16,
  28: sol17,
  29: sol18,
  30: sol19,
  31: sol20,
  32: sol21,
  33: sol22,
  34: sol23,
  35: sol24,
  36: sol25,
  37: sol26,
};

/**
 * Item number -> booklet pages its worked solution is printed on. The booklet
 * runs the solutions together without page breaks between items, so an item
 * that starts near the foot of a page continues onto the next one.
 */
const SOLUTION_SPREAD: Record<number, number[]> = {
  1: [12],
  2: [12],
  3: [12],
  4: [12, 13],
  5: [13],
  6: [13],
  7: [13],
  8: [14],
  9: [14],
  10: [14],
  11: [15],
  12: [15],
  13: [15],
  14: [15],
  15: [16],
  16: [16, 17],
  17: [17],
  18: [17],
  19: [17],
  20: [18],
  21: [18],
  22: [18],
  23: [19],
  24: [19],
  25: [19, 20],
  26: [20],
  27: [21],
  28: [21],
  29: [21],
  30: [22],
  31: [22],
  32: [23],
  33: [23],
  34: [23],
  35: [24],
  36: [24],
  37: [25],
  38: [25, 26],
  39: [26],
  40: [26],
  41: [26],
  42: [27],
  43: [27],
  44: [27, 28],
  45: [28],
  46: [28, 29],
  47: [29],
  48: [30],
  49: [30, 31],
  50: [32],
  51: [32, 33],
  52: [33],
  53: [33],
  54: [34],
  55: [34],
  56: [34],
  57: [35],
  58: [35, 36],
  59: [36],
  60: [37],
};

export const msteMay2019SolutionImages = (item: number): string[] =>
  (SOLUTION_SPREAD[item] ?? []).map((p) => SOLUTION_PAGES[p]).filter(Boolean);

export const msteMay2019SolutionPage = (item: number): number =>
  SOLUTION_SPREAD[item]?.[0] ?? 12;

export const msteMay2019SolutionPageEnd = (item: number): number => {
  const pages = SOLUTION_SPREAD[item] ?? [];
  return pages.length ? pages[pages.length - 1] : 12;
};
