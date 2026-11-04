import { Question } from '../../../types/exam';
import { HPGE_MAY2018_PART1 } from './may2018_part1';
import { HPGE_MAY2018_PART2 } from './may2018_part2';
import { HPGE_MAY2018_PART3 } from './may2018_part3';
import { HPGE_MAY2018_PART4 } from './may2018_part4';

/**
 * Gillesania Volume 4, HPGE (Hydraulics and Geotechnical Engineering) May 2018 —
 * 50 items.
 *
 * Questions run over booklet folios 690-696, the 50-item answer key is printed
 * in five columns of ten at the foot of folio 697 (beneath the full-page Table 01
 * of Terzaghi bearing-capacity factors), and the worked solutions run over
 * folios 698-710 under the running head "Solutions to May 2018 Examination".
 *
 * Notes on the source:
 *
 * - The paper is evenly split: hydraulics through item 24, geotechnics from
 *   item 25 onward.
 * - Nine of the fifty items belong to "Situation" blocks whose parts are printed
 *   out of order and tagged only `→ Part n`, with no per-item number in the
 *   margin. Items 4-6 are the clearest case: the booklet works Part 3
 *   (eccentricity) before Part 1 (total force). Every item has been mapped by the
 *   quantity its stem actually asks for, not by the order the tags appear.
 * - Item 25 is a recall question — which property is *not* a characteristic of a
 *   cohesionless soil — and the solution run skips from 24 straight to 26, so the
 *   item is recorded with the printed key and no crop.
 * - Three printed defects are reproduced rather than silently corrected:
 *   item 42's working transposes 198.16 into "168.16" (key and options say 198);
 *   item 49 labels the cohesion term $q_\gamma$ instead of $q_c$; and item 50's
 *   stem specifies a 400 mm square pile while the working uses a 300 mm one.
 * - Item 3 gives its base barometer reading (600 mm) lower than its summit
 *   reading (850 mm); the booklet works the difference and the options are
 *   reproduced as printed.
 */
export const HPGE_MAY_2018_QUESTIONS: Question[] = [
  ...HPGE_MAY2018_PART1,
  ...HPGE_MAY2018_PART2,
  ...HPGE_MAY2018_PART3,
  ...HPGE_MAY2018_PART4,
];
