import { Question } from '../../../types/exam';
import { PSAD_NOV2021_PART1 } from './nov2021_part1';
import { PSAD_NOV2021_PART2 } from './nov2021_part2';
import { PSAD_NOV2021_PART3 } from './nov2021_part3';
import { PSAD_NOV2021_PART4 } from './nov2021_part4';

export const PSAD_NOV_2021_QUESTIONS: Question[] = [
  ...PSAD_NOV2021_PART1,
  ...PSAD_NOV2021_PART2,
  ...PSAD_NOV2021_PART3,
  ...PSAD_NOV2021_PART4,
];
