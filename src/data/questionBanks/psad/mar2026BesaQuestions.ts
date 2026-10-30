import { Question } from '../../../types/exam';
import { BESA_PSAD_MAR2026_PART1 } from './mar2026Besa_part1';
import { BESA_PSAD_MAR2026_PART2 } from './mar2026Besa_part2';
import { BESA_PSAD_MAR2026_PART3 } from './mar2026Besa_part3';
import { BESA_PSAD_MAR2026_PART4 } from './mar2026Besa_part4';
import { BESA_PSAD_MAR2026_PART5 } from './mar2026Besa_part5';

/**
 * BESAVILLA — PSAD March 2026.
 *
 * Transcribed from "Civil Engineering Licensure Examinations — Structural Design and
 * Construction, March 2026" (booklet pages D-470 to D-497, 28 PDF pages).
 *
 * 25 numbered situations. The first three are four-choice concept items whose key the
 * booklet marks by italicising the option and setting a pointing hand beside it; the
 * other 22 are worked examples that print a), b), c) sub-parts each followed by its own
 * "Solution:". Those 66 items set `workedSolution: true`, carry no choices, and are
 * answered by revealing the scanned working and self-marking.
 *
 * Nineteen situations print a statement drawing (beam and moment diagrams, base plate,
 * weld detail, sheet pile, crate on an incline, truss, lamp post, braced frame and steel
 * loop, glued post, DT joist, bent shaft, cable beam, sign post, hinged beam, three-span
 * beam, inclined wide flange). Those are cropped from the booklet and shown with the item.
 * Situations 1-3, 5, 8, 10, 17, 23 and 25 print no drawing: their data is entirely in the
 * text, and situation 25's interaction diagram appears inside the working.
 */
export const BESA_PSAD_MAR2026_QUESTIONS: Question[] = [
  ...BESA_PSAD_MAR2026_PART1,
  ...BESA_PSAD_MAR2026_PART2,
  ...BESA_PSAD_MAR2026_PART3,
  ...BESA_PSAD_MAR2026_PART4,
  ...BESA_PSAD_MAR2026_PART5,
];
