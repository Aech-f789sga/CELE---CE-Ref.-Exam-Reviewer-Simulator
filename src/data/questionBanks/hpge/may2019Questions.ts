import { Question } from '../../../types/exam';
import { HGE_MAY2019_PART1 } from './may2019_part1';
import { HGE_MAY2019_PART2 } from './may2019_part2';
import { HGE_MAY2019_PART3 } from './may2019_part3';
import { HGE_MAY2019_PART4 } from './may2019_part4';
import { HGE_MAY2019_PART5 } from './may2019_part5';

/**
 * Hydraulics and Geotechnical Engineering, May 2019.
 *
 * The booklet is titled "HGE" — the simulator's HPGE paper — so the set is filed
 * under HPGE / May / 2019. It carries 47 items on booklet pp. 38–45, with the
 * answer key printed in a box on p. 45 directly under item 47, and worked
 * solutions on pp. 46–60.
 */
export const HGE_MAY_2019_QUESTIONS: Question[] = [
  ...HGE_MAY2019_PART1,
  ...HGE_MAY2019_PART2,
  ...HGE_MAY2019_PART3,
  ...HGE_MAY2019_PART4,
  ...HGE_MAY2019_PART5,
];
