import { Question } from '../../../types/exam';
import { MSTC_MAY2016_PART1 } from './may2016_part1';
import { MSTC_MAY2016_PART2 } from './may2016_part2';
import { MSTC_MAY2016_PART3 } from './may2016_part3';
import { MSTC_MAY2016_PART4 } from './may2016_part4';
import { MSTC_MAY2016_PART5 } from './may2016_part5';

/**
 * Gillesania Volume 4 — Mathematics, Surveying & Transportation Engineering
 * (MSTC), May 2016 PRC board examination. Items 1–75, questions on booklet
 * pages 243–252 with the printed answer key at the foot of page 252 and worked
 * solutions on pages 253–276.
 *
 * The booklet prints A–D choices and its own key, so every item carries a key
 * letter; the working for each item is cropped from the booklet rather than
 * retyped. Two items (42 and 74) have no printed working — the solution section
 * skips them — and carry a written note in place of an image. Where the printed
 * working disagrees with the printed option, or the stem contradicts itself,
 * the item carries a `note` recording the discrepancy.
 */
export const MSTC_MAY_2016_QUESTIONS: Question[] = [
  ...MSTC_MAY2016_PART1,
  ...MSTC_MAY2016_PART2,
  ...MSTC_MAY2016_PART3,
  ...MSTC_MAY2016_PART4,
  ...MSTC_MAY2016_PART5,
];
