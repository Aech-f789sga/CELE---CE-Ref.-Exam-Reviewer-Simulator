import { Question } from '../../../types/exam';
import { HPGE_NOV2016_PART1 } from './nov2016_part1';
import { HPGE_NOV2016_PART2 } from './nov2016_part2';
import { HPGE_NOV2016_PART3 } from './nov2016_part3';
import { HPGE_NOV2016_PART4 } from './nov2016_part4';

/**
 * HPGE — November 2016, all 50 items.
 *
 * Questions on booklet folios 378–384 (pdf 365–371), the printed key at the foot
 * of folio 384, and the worked solutions on folios 385–398 (pdf 372–385).
 *
 * ## Where the working comes from
 *
 * Every item whose working the booklet prints shows that working as a **crop of
 * the booklet page**, exactly like the other Gillesania sections — one crop per
 * item, cut on the item's own left-margin label so a crop never leaks a later
 * item's answer. The ten situations in this sitting (items 7–9, 10–12, 15–17,
 * 20–22, 23–25, 26–28, 33–35, 39–41, 44–46 and 48–50) each still give one crop
 * per item: a member's crop opens at the Situation or Part heading its own
 * working answers under, so the student never sees a neighbouring item's result.
 *
 * Three items have no crop because the booklet prints no working for them —
 * item 2 (Pascal's principle), item 3 (Bernoulli's theorem) and item 31 (a
 * property of cohesive soil). The solution section simply runs 1 → 4 and skips
 * 31. Those three carry a written one-line explanation instead, and no page
 * number.
 */
export const HPGE_NOV_2016_QUESTIONS: Question[] = [
  ...HPGE_NOV2016_PART1,
  ...HPGE_NOV2016_PART2,
  ...HPGE_NOV2016_PART3,
  ...HPGE_NOV2016_PART4,
];
