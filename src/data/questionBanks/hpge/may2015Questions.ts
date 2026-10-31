import { Question } from '../../../types/exam';
import { HPGE_MAY2015_PART1 } from './may2015_part1';
import { HPGE_MAY2015_PART2 } from './may2015_part2';
import { HPGE_MAY2015_PART3 } from './may2015_part3';
import { HPGE_MAY2015_PART4 } from './may2015_part4';
import { HPGE_MAY2015_PART5 } from './may2015_part5';
import { HPGE_MAY2015_PART6 } from './may2015_part6';

/**
 * HPGE — May 2015, from Gillesania "Civil Engineering Reference Vol. 4".
 *
 * 82 items, printed on booklet pages 38–50 with the answer key on page 50 and
 * the worked solutions on pages 51–71. The booklet closes the section with
 * "** END ***" after item 82.
 */
export const HPGE_MAY_2015_QUESTIONS: Question[] = [
  ...HPGE_MAY2015_PART1,
  ...HPGE_MAY2015_PART2,
  ...HPGE_MAY2015_PART3,
  ...HPGE_MAY2015_PART4,
  ...HPGE_MAY2015_PART5,
  ...HPGE_MAY2015_PART6,
];
