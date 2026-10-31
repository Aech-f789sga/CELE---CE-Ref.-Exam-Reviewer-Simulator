import { Question } from '../../../types/exam';
import { MSTC_MAY2015_PART1 } from './may2015_part1';
import { MSTC_MAY2015_PART2 } from './may2015_part2';
import { MSTC_MAY2015_PART3 } from './may2015_part3';
import { MSTC_MAY2015_PART4 } from './may2015_part4';
import { MSTC_MAY2015_PART5 } from './may2015_part5';
import { MSTC_MAY2015_PART6 } from './may2015_part6';

export const MSTC_MAY_2015_QUESTIONS: Question[] = [
  ...MSTC_MAY2015_PART1,
  ...MSTC_MAY2015_PART2,
  ...MSTC_MAY2015_PART3,
  ...MSTC_MAY2015_PART4,
  ...MSTC_MAY2015_PART5,
  ...MSTC_MAY2015_PART6,
];
