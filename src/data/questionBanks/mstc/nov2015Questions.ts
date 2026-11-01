import { Question } from '../../../types/exam';
import { MSTC_NOV2015_PART1 } from './nov2015_part1';
import { MSTC_NOV2015_PART2 } from './nov2015_part2';
import { MSTC_NOV2015_PART3 } from './nov2015_part3';
import { MSTC_NOV2015_PART4 } from './nov2015_part4';
import { MSTC_NOV2015_PART5 } from './nov2015_part5';
import { MSTC_NOV2015_PART6 } from './nov2015_part6';

export const MSTC_NOV_2015_QUESTIONS: Question[] = [
  ...MSTC_NOV2015_PART1,
  ...MSTC_NOV2015_PART2,
  ...MSTC_NOV2015_PART3,
  ...MSTC_NOV2015_PART4,
  ...MSTC_NOV2015_PART5,
  ...MSTC_NOV2015_PART6,
];
