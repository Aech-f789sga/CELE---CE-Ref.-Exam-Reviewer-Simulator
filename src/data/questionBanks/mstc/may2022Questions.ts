import { Question } from '../../../types/exam';
import { MSTC_MAY2022_PART1 } from './may2022_part1';
import { MSTC_MAY2022_PART2 } from './may2022_part2';
import { MSTC_MAY2022_PART3 } from './may2022_part3';
import { MSTC_MAY2022_PART4 } from './may2022_part4';

export const MSTC_MAY_2022_QUESTIONS: Question[] = [
  ...MSTC_MAY2022_PART1,
  ...MSTC_MAY2022_PART2,
  ...MSTC_MAY2022_PART3,
  ...MSTC_MAY2022_PART4,
];
