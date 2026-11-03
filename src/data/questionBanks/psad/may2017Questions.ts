import { Question } from '../../../types/exam';
import { PSAD_MAY2017_PART1 } from './may2017_part1';
import { PSAD_MAY2017_PART2 } from './may2017_part2';
import { PSAD_MAY2017_PART3 } from './may2017_part3';
import { PSAD_MAY2017_PART4 } from './may2017_part4';

/**
 * PSAD — May 2017, all 66 items.
 *
 * Questions on booklet folios 508–523 (pdf 495–510), the printed key at the foot
 * of folio 523, and the worked solutions on folios 524–552 (pdf 511–539). The
 * sitting is 66 items, not 75: the printed key stops at 66, with items 61–66 in a
 * seventh column beside the 6 × 10 block. Folio 518 (pdf 505) is given over
 * entirely to Figure 1-A, the beam-diagram table that items 55–57 refer to, and
 * folio 520 (pdf 507) to the NSCP coefficient table (Figure Code-523) that items
 * 58–60 refer to.
 *
 * ## Where the working comes from
 *
 * Every item whose working the booklet prints shows that working as a **crop of
 * the booklet page**. The 22 situations are printed as one derivation tagged
 * "Part 1 / Part 2 / Part 3"; each member item carries only its own part, and the
 * first item of a group also carries the situation statement. Seventeen items run
 * over a page break and therefore carry two crops, shown in reading order: 3, 4,
 * 7, 11, 14, 22, 24, 39, 40, 45, 46, 48, 52, 57, 58, 61 and 64.
 *
 * Item 9 is the one item with no crop: the booklet works the sliding limit and the
 * tipping limit and never prints a third part, because "equilibrium" is answered by
 * the smaller of the two. It carries a written explanation instead, and no page
 * number.
 *
 * ## Defects in the printed booklet
 *
 * - Item 4: the stem prints the beam length as "4 7 m-long" — the character after
 *   the 4 is smudged in the scan. It is transcribed as 4-m-long, which is what the
 *   working uses ($4\\sin 81.801^\\circ$ in the force triangle).
 * - Items 5 and 6: the stems print "in in Part 1" (the word doubled).
 * - Item 24: choices C and D are both printed as 4.39.
 * - Items 55, 56 and 57: the stems ask for the reaction/moment "at L" and "at O",
 *   but Figure 1-A labels the supports A–E. The booklet's own working resolves it:
 *   the 1.143/1.223 coefficients are those of support B (which its Part 3 heading
 *   calls the "First interior support") and 0.393/0.054 are those of the exterior
 *   support E (its Part 2 heading says "Exterior support").
 * - Item 55: the working computes $R_{t,max} = 345.44\\ \\text{kN}$, which matches
 *   none of the four printed choices; the key is A = 302.
 */
export const PSAD_MAY_2017_QUESTIONS: Question[] = [
  ...PSAD_MAY2017_PART1,
  ...PSAD_MAY2017_PART2,
  ...PSAD_MAY2017_PART3,
  ...PSAD_MAY2017_PART4,
];
