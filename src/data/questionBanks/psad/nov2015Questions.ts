import { Question } from '../../../types/exam';
import { PSAD_NOV2015_PART1 } from './nov2015_part1';
import { PSAD_NOV2015_PART2 } from './nov2015_part2';
import { PSAD_NOV2015_PART3 } from './nov2015_part3';
import { PSAD_NOV2015_PART4 } from './nov2015_part4';
import { PSAD_NOV2015_PART5 } from './nov2015_part5';
import { PSAD_NOV2015_PART6 } from './nov2015_part6';

/**
 * Gillesania Volume 4 — Structural Engineering & Construction (PSAD),
 * November 2015 PRC board examination. Items 1–88, questions on booklet pages
 * 194–212 with the printed answer key at the foot of page 212 and worked
 * solutions on pages 213–242.
 *
 * The booklet prints A–D choices and its own key, so every item carries a key
 * letter; the working for each item is cropped from the booklet rather than
 * retyped, and where the printed working and the printed option disagree the
 * item carries a `note` recording the discrepancy.
 */
export const PSAD_NOV_2015_QUESTIONS: Question[] = [
  ...PSAD_NOV2015_PART1,
  ...PSAD_NOV2015_PART2,
  ...PSAD_NOV2015_PART3,
  ...PSAD_NOV2015_PART4,
  ...PSAD_NOV2015_PART5,
  ...PSAD_NOV2015_PART6,
];
