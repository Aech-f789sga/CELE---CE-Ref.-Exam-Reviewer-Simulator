import { Question } from '../../../types/exam';
import { PSAD_MAY2019_PART1 } from './may2019_part1';
import { PSAD_MAY2019_PART2 } from './may2019_part2';
import { PSAD_MAY2019_PART3 } from './may2019_part3';
import { PSAD_MAY2019_PART4 } from './may2019_part4';
import { PSAD_MAY2019_PART5 } from './may2019_part5';

export const PSAD_MAY_2019_QUESTIONS: Question[] = [
  ...PSAD_MAY2019_PART1,
  ...PSAD_MAY2019_PART2,
  ...PSAD_MAY2019_PART3,
  ...PSAD_MAY2019_PART4,
  ...PSAD_MAY2019_PART5,
];
