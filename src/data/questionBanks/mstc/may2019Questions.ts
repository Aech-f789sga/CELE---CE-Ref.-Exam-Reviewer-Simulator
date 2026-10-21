import { Question } from '../../../types/exam';
import { MSTE_MAY2019_PART1 } from './may2019_part1';
import { MSTE_MAY2019_PART2 } from './may2019_part2';
import { MSTE_MAY2019_PART3 } from './may2019_part3';
import { MSTE_MAY2019_PART4 } from './may2019_part4';

/**
 * MSTE May 2019 — 60 items, booklet pp. 1-11 (questions), answer key p. 11,
 * worked solutions pp. 12-37.
 *
 * Filed under the MSTC subject because the booklet's own title is
 * "Mathematics, Surveying and Transportation Engineering", which is exactly
 * what the simulator's MSTC subject covers.
 *
 * The printed answer key was read off p. 11 and every item was then checked
 * against its printed worked solution; the two agree throughout. One booklet
 * defect was preserved rather than corrected: item 11's option D prints
 * "621; 1000; 1963" although the worked solution gives 1692.86 kWh for the
 * third cost (i.e. 1693). D remains the only plausible choice.
 */
export const MSTE_MAY2019_QUESTIONS: Question[] = [
  ...MSTE_MAY2019_PART1,
  ...MSTE_MAY2019_PART2,
  ...MSTE_MAY2019_PART3,
  ...MSTE_MAY2019_PART4,
];
