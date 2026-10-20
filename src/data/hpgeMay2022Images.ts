/**
 * Scanned worked-solution crops for HPGE May 2022.
 *
 * The source booklet prints one worked solution per question, but situations
 * share a single continuous derivation, so a crop is reused by every question
 * in that situation. Images are imported statically so Vite emits them into
 * dist/assets and they survive a Vercel build.
 */
import sol1 from '../images/HPGEMay2022/HPGE_May_2022_1.jpg';
import sol2 from '../images/HPGEMay2022/HPGE_May_2022_2.jpg';
import sol3 from '../images/HPGEMay2022/HPGE_May_2022_3.jpg';
import sol4 from '../images/HPGEMay2022/HPGE_May_2022_4.jpg';
import solS1 from '../images/HPGEMay2022/HPGE_May_2022_S1.jpg';
import solS2 from '../images/HPGEMay2022/HPGE_May_2022_S2.jpg';
import solS3 from '../images/HPGEMay2022/HPGE_May_2022_S3.jpg';
import solS4 from '../images/HPGEMay2022/HPGE_May_2022_S4.jpg';
import solS5 from '../images/HPGEMay2022/HPGE_May_2022_S5.jpg';
import solS6 from '../images/HPGEMay2022/HPGE_May_2022_S6.jpg';
import solS7 from '../images/HPGEMay2022/HPGE_May_2022_S7.jpg';
import solS8 from '../images/HPGEMay2022/HPGE_May_2022_S8.jpg';
import sol29 from '../images/HPGEMay2022/HPGE_May_2022_29.jpg';
import sol30 from '../images/HPGEMay2022/HPGE_May_2022_30.jpg';
import sol31 from '../images/HPGEMay2022/HPGE_May_2022_31.jpg';
import sol32 from '../images/HPGEMay2022/HPGE_May_2022_32.jpg';
import sol33 from '../images/HPGEMay2022/HPGE_May_2022_33.jpg';
import sol34 from '../images/HPGEMay2022/HPGE_May_2022_34.jpg';
import sol35 from '../images/HPGEMay2022/HPGE_May_2022_35.jpg';
import solS9 from '../images/HPGEMay2022/HPGE_May_2022_S9.jpg';
import solS10 from '../images/HPGEMay2022/HPGE_May_2022_S10.jpg';
import solS11 from '../images/HPGEMay2022/HPGE_May_2022_S11.jpg';
import solS12 from '../images/HPGEMay2022/HPGE_May_2022_S12.jpg';

/** Question number -> solution crop(s), in reading order. */
export const HPGE_MAY_2022_SOLUTION_IMAGES: Record<number, string[]> = {
  1: [sol1],
  2: [sol2],
  3: [sol3],
  4: [sol4],
  5: [solS1],
  6: [solS1],
  7: [solS1],
  8: [solS2],
  9: [solS2],
  10: [solS2],
  11: [solS3],
  12: [solS3],
  13: [solS3],
  14: [solS4],
  15: [solS4],
  16: [solS4],
  17: [solS5],
  18: [solS5],
  19: [solS5],
  20: [solS6],
  21: [solS6],
  22: [solS6],
  23: [solS7],
  24: [solS7],
  25: [solS7],
  26: [solS8],
  27: [solS8],
  28: [solS8],
  29: [sol29],
  30: [sol30],
  31: [sol31],
  32: [sol32],
  33: [sol33],
  34: [sol34],
  35: [sol35],
  36: [solS9],
  37: [solS9],
  38: [solS9],
  39: [solS10],
  40: [solS10],
  41: [solS10],
  42: [solS11],
  43: [solS11],
  44: [solS11],
  45: [solS12],
  46: [solS12],
  47: [solS12],
};

/** Booklet page the solution was printed on, for the "Page N Solution" label. */
export const HPGE_MAY_2022_SOLUTION_PAGES: Record<number, number> = {
  1: 419,
  2: 419,
  3: 420,
  4: 420,
  5: 421,
  6: 421,
  7: 421,
  8: 422,
  9: 422,
  10: 422,
  11: 423,
  12: 423,
  13: 423,
  14: 424,
  15: 424,
  16: 424,
  17: 425,
  18: 425,
  19: 425,
  20: 426,
  21: 426,
  22: 426,
  23: 427,
  24: 427,
  25: 427,
  26: 428,
  27: 428,
  28: 428,
  29: 430,
  30: 430,
  31: 430,
  32: 431,
  33: 431,
  34: 431,
  35: 432,
  36: 432,
  37: 432,
  38: 433,
  39: 433,
  40: 433,
  41: 433,
  42: 434,
  43: 434,
  44: 434,
  45: 435,
  46: 435,
  47: 435,
};
