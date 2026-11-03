import { Question } from '../../../types/exam';
import { MSTC_MAY2017_PART1 } from './may2017_part1';
import { MSTC_MAY2017_PART2 } from './may2017_part2';
import { MSTC_MAY2017_PART3 } from './may2017_part3';
import { MSTC_MAY2017_PART4 } from './may2017_part4';

/**
 * MSTC — May 2017, from Gillesania "Civil Engineering Reference Vol. 4".
 *
 * 75 items, printed on booklet pages 449-459 with the answer key at the foot of
 * page 459 and the worked solutions on pages 460-485. The booklet closes the
 * section with "** END **" after item 75.
 *
 * The section is a single running list rather than grouped situations, so each
 * item is cropped on its own margin label. Six items -- 57, 61, 64, 67, 68 and
 * 75 -- are answered from the stem alone; the solution section prints no
 * working for them and they carry a written explanation instead of a crop.
 *
 * Three items print the same value twice among their choices: item 9 has 650 as
 * both A and C, item 20 has 20 as both B and C, and item 50 has 360 kN-m as
 * both B and C. They are reproduced as printed, with the keyed answer noted.
 */
export const MSTC_MAY_2017_QUESTIONS: Question[] = [
  ...MSTC_MAY2017_PART1,
  ...MSTC_MAY2017_PART2,
  ...MSTC_MAY2017_PART3,
  ...MSTC_MAY2017_PART4,
];
