import { Question } from '../../../types/exam';
import { PSAD_NOV2017_PART1 } from './nov2017_part1';
import { PSAD_NOV2017_PART2 } from './nov2017_part2';
import { PSAD_NOV2017_PART3 } from './nov2017_part3';
import { PSAD_NOV2017_PART4 } from './nov2017_part4';

/**
 * PSAD — November 2017, from Gillesania "Civil Engineering Reference Vol. 4".
 *
 * 72 items, printed on booklet folios 615-633 with the answer key at the foot of
 * folio 633 and the worked solutions on folios 634-658. The booklet closes the
 * question section with "*** END ***" after item 72.
 *
 * The key is laid out as an eight-column grid of ten rows, i.e. eighty slots, but
 * only the first 72 are numbered with a letter; 73-80 are printed as bare numbers
 * with no answer. The paper therefore has 72 items, not 80.
 *
 * The paper is built from twenty-four situations:
 *
 *   Situation 1  items 1-3      three cylinders in a rigid bin
 *   Situation 2  items 4-6      the same stack in a wider bin
 *   Situation 3  items 7-9      three-hinged arch
 *   Situation 4  items 10-12    parabolic cable carrying a pipeline
 *   Situation 5  items 13-15    wind on a gable frame
 *   Situation 6  items 16-18    double angle with an eccentric bolt group
 *   Situation 7  items 19-21    stresses on an inclined plane
 *   Situation 8  items 22-24    hollow cylinder in axial compression
 *   Situation 9  items 25-27    lifting a prestressed pile
 *   Situation 10 items 28-30    pattern loading of a continuous beam
 *   Situation 11 items 31-33    retaining-wall stability
 *   Situation 12 items 34-36    eccentric footing bearing pressure
 *   Situation 13 items 37-39    propped cantilever retaining wall
 *   Situation 14 items 40-42    cantilever beam
 *   Situation 15 items 43-45    beam on a spring support
 *   Situation 16 items 46-48    welded bracket
 *   Situation 17 items 49-51    built-up box column
 *   Situation 18 items 52-54    NSCP allowable compressive stress
 *   Situation 19 items 55-57    composite bridge beam
 *   Situation 20 items 58-60    purlin bending and interaction
 *   Situation 21 items 61-63    continuous beam GH reinforcement
 *   Situation 22 items 64-66    circular spiral column
 *   Situation 23 items 67-69    tied column
 *   Situation 24 items 70-72    code recall
 *
 * There are no standalone items: every question belongs to a situation.
 *
 * The booklet tags each answer line with a "-> Part n" note, but the tags are not
 * in reading order -- Situation 3 tags Part 2 on folio 635 and Part 1 on folio
 * 636 -- so the crops were mapped by the quantity each question asks for rather
 * than by the tag number.
 *
 * 69 of the 72 items carry printed working. Items 70-72 are the recall questions
 * of Situation 24 and are keyed from the stem alone. Seven items run over a page
 * break and carry two crops in reading order: 7, 16, 34, 58, 61 and 69, plus 21
 * whose Part 3 is a single sentence on the following folio.
 *
 * Twenty figures are reproduced: the fourteen diagrams printed inside the stems
 * and the four reference sheets the stems tell the candidate to use -- FIGURE
 * 1-A (continuous-beam coefficients), FIGURE CODE-505.3 (NSCP allowable
 * compressive stress) and FIGURE CODE-523 (NSCP continuous-beam coefficients),
 * the last in two pieces.
 */
export const PSAD_NOV_2017_QUESTIONS: Question[] = [
  ...PSAD_NOV2017_PART1,
  ...PSAD_NOV2017_PART2,
  ...PSAD_NOV2017_PART3,
  ...PSAD_NOV2017_PART4,
];
