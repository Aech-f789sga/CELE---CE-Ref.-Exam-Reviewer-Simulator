import { Question } from '../../types/exam';
import { PSAD_PART1 } from './psad/questions1to15';
import { PSAD_PART2 } from './psad/questions16to30';
import { PSAD_PART3 } from './psad/questions31to45';
import { PSAD_PART4 } from './psad/questions46to60';
import { PSAD_PART5 } from './psad/questions61to75';

export const PSAD_QUESTIONS: Question[] = [
  ...PSAD_PART1,
  ...PSAD_PART2,
  ...PSAD_PART3,
  ...PSAD_PART4,
  ...PSAD_PART5,
];
