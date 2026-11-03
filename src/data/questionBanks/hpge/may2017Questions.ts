import { Question } from '../../../types/exam';
import { HPGE_MAY2017_PART1 } from './may2017_part1';
import { HPGE_MAY2017_PART2 } from './may2017_part2';
import { HPGE_MAY2017_PART3 } from './may2017_part3';
import { HPGE_MAY2017_PART4 } from './may2017_part4';

/**
 * HPGE — May 2017, all 47 items.
 *
 * Questions on booklet folios 486–493 (pdf 473–480), the printed key at the foot
 * of folio 493, and the worked solutions on folios 494–507 (pdf 481–494). This
 * sitting is split into a Hydraulics part (items 1–28) and a Geotechnical part
 * (items 29–47), with folio 492 given over entirely to Table 01, Terzaghi's
 * bearing-capacity factors, which items 44–46 refer to.
 *
 * ## Where the working comes from
 *
 * Every item whose working the booklet prints shows that working as a **crop of
 * the booklet page**, one crop per item, cut on the item's own left-margin label
 * so a crop never leaks a later item's answer. Eight situations in this sitting
 * (6–8, 12–14, 16–18, 19–21, 25–27, 34–36, 41–43, 44–46) are printed as a single
 * derivation tagged "Part 1 / Part 2 / Part 3"; each member item carries only its
 * own part, and the first item of a group also carries the situation statement.
 * Four items run over a page break and therefore carry two crops, shown in
 * reading order: 6, 12, 15 and 16.
 *
 * Three items have no crop because the booklet prints no working for them —
 * item 29 and item 30 (definitions of porosity and degree of saturation) and
 * item 47 (the NSCP slope limit). They carry a written one-line explanation
 * instead, and no page number.
 *
 * ## Defects in the printed booklet
 *
 * - Item 21: the stem gives $C_c = 0.64$ and $C_v = 0.987$, but the working uses
 *   0.65 and 0.98. The key follows the working.
 * - Item 30: keyed D (water content), although the ratio of water volume to void
 *   volume is the degree of saturation.
 * - Item 34: choices B and D are both printed as 4.536.
 */
export const HPGE_MAY_2017_QUESTIONS: Question[] = [
  ...HPGE_MAY2017_PART1,
  ...HPGE_MAY2017_PART2,
  ...HPGE_MAY2017_PART3,
  ...HPGE_MAY2017_PART4,
];
