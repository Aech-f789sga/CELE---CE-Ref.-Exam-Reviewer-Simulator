import { Question } from '../../../types/exam';
import { PSAD_NOV2016_PART1 } from './nov2016_part1';
import { PSAD_NOV2016_PART2 } from './nov2016_part2';
import { PSAD_NOV2016_PART3 } from './nov2016_part3';
import { PSAD_NOV2016_PART4 } from './nov2016_part4';

/**
 * Gillesania Volume 4 — Structural Engineering & Construction (PSAD),
 * November 2016 PRC board examination. Items 1–75, questions on booklet pages
 * 399–418 with the printed answer key on page 419 and worked solutions on pages
 * 420–447.
 *
 * The booklet prints A–D choices and its own key, so every item carries a key
 * letter; the working for each item is cropped from the booklet rather than
 * retyped. Five items — 1, 2, 7, 8 and 9 — are definitions, so the booklet
 * prints no working for them and they are answered as recall items. Where the
 * printed working and the printed option disagree, the item carries a `note`
 * recording the discrepancy.
 */
export const PSAD_NOV_2016_QUESTIONS: Question[] = [
  ...PSAD_NOV2016_PART1,
  ...PSAD_NOV2016_PART2,
  ...PSAD_NOV2016_PART3,
  ...PSAD_NOV2016_PART4,
];
