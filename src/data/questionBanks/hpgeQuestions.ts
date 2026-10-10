import { Question } from '../../types/exam';
import { HPGE_PART1 } from './hpge/questions1to12';
import { HPGE_PART2 } from './hpge/questions13to24';
import { HPGE_PART3 } from './hpge/questions25to36';
import { HPGE_PART4 } from './hpge/questions37to48';

export const HPGE_QUESTIONS: Question[] = [
  ...HPGE_PART1,
  ...HPGE_PART2,
  ...HPGE_PART3,
  ...HPGE_PART4,
];

