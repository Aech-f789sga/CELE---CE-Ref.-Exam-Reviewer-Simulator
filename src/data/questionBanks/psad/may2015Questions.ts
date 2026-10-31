import { Question } from '../../../types/exam';
import { PSAD_MAY2015_PART1 } from './may2015_part1';
import { PSAD_MAY2015_PART2 } from './may2015_part2';
import { PSAD_MAY2015_PART3 } from './may2015_part3';
import { PSAD_MAY2015_PART4 } from './may2015_part4';
import { PSAD_MAY2015_PART5 } from './may2015_part5';
import { PSAD_MAY2015_PART6 } from './may2015_part6';

/**
 * Gillesania Volume 4 — Structural Engineering & Construction (PSAD),
 * May 2015 PRC board examination. Items 1–85, booklet pages 72–92, with the
 * printed answer key on booklet page 93 and worked solutions on pages 94–125.
 */
export const PSAD_MAY_2015_QUESTIONS: Question[] = [
  ...PSAD_MAY2015_PART1,
  ...PSAD_MAY2015_PART2,
  ...PSAD_MAY2015_PART3,
  ...PSAD_MAY2015_PART4,
  ...PSAD_MAY2015_PART5,
  ...PSAD_MAY2015_PART6,
];
