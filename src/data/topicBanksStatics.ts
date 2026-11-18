/**
 * Statics of Rigid Bodies.
 *
 * Source: Margallo's Buckling practice set, "Statics of Rigid Bodies", 21 pages.
 *
 * ## Key status
 *
 * No answer key has been supplied for this booklet, so every item is
 * `keyPending` and the UI must not score it.
 *
 * ## Figures
 *
 * `Question` has no image field, so each "Situation" figure is restated in
 * brackets inside the stem — the force magnitudes, the angles and the
 * dimensions that the drawing carries. Items are grouped by the printed
 * section heading (Resultant, Equilibrium, Frames & Trusses) into separate
 * topic ids.
 */
import type { TopicQuestion } from './topicBanks';

function makeStaticsItem(topicId: string, category: string, idPrefix: string) {
  return (
    number: number,
    text: string,
    opts: [string, string, string, string],
    page: number
  ): TopicQuestion => ({
    id: `${idPrefix}-${number}`,
    number,
    pageNumber: page,
    subject: 'MSTC',
    year: 0,
    month: 'May',
    category,
    text,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: 'A',
    keyPending: true,
    referenceSource: 'Gillesania',
    topicId,
    solution: {
      summary: 'No printed key supplied for this booklet yet.',
      steps: [],
      finalAnswer: '',
      note: 'Answer key pending — this item is not scored.',
    },
  });
}

const qf = makeStaticsItem('stat-forces', 'Forces & Resultants', 'stat-forces');
const qe = makeStaticsItem('stat-equil', 'Equilibrium', 'stat-equil');
const qr = makeStaticsItem('stat-frames', 'Frames & Trusses', 'stat-frames');

const SIT1 =
  'At point $A$ on top of the tank a 425 lb force acts up and to the left at $30^\\circ$ above the horizontal, and a force $P$ acts up and to the right at angle $\\alpha$ above the horizontal.';

const SIT2 =
  'The cable carrying $P$ rises 100 mm over a horizontal run of 200 mm; the cable carrying the 1.6 kN force drops 150 mm over a horizontal run of 200 mm.';

const SIT4 =
  'A bracket at $O$ carries two rods: a horizontal rod running to the left with a 700 N force applied at its end pointing horizontally away from $O$, and an inclined rod above it with a 400 N force applied at its end pointing up and to the left along the rod. $\\theta$ is the angle at $O$ between the two rods.';

const SIT5 =
  'Force $A$ acts up and to the right at $\\alpha$ above the $+x$ axis; force $B$ acts down and to the right at $\\beta$ below the $+x$ axis; force $C$ acts down and to the left, $\\phi$ being measured from the downward vertical to $C$.';

const SIT3 =
  '$T_1$ acts up and to the left at $60^\\circ$ above the negative $x$-axis, $T_2$ acts vertically upward, and $T_3$ acts up and to the right at $40^\\circ$ above the positive $x$-axis.';

export const STAT_FORCES: TopicQuestion[] = [
  qf(1, `Situation 1. A steel tank is to be positioned in an excavation. ${SIT1}\n\nKnowing that $\\alpha = 20^\\circ$, determine the required magnitude of the force P (lb) if the resultant R of the two forces applied at A is to be vertical.`,
    ['291', '461', '621', '392'], 1),
  qf(2, `Situation 1. A steel tank is to be positioned in an excavation. ${SIT1}\n\nKnowing that the magnitude of P is 500 lb, determine the required angle $\\alpha$ (degrees) if the resultant R of the two forces applied at A is to be vertical.`,
    ['47.4', '42.6', '64.8', '25.2'], 1),
  qf(3, `Situation 1. A steel tank is to be positioned in an excavation. ${SIT1}\n\nDetermine the magnitude of the smallest force P (lb) for which the resultant R of the two forces applied at A is vertical.`,
    ['368', '213', '245', '736'], 1),
  qf(4, `Situation 2. It is desired to remove the spike from the timber by applying force along its horizontal axis. An obstruction $A$ prevents direct access, so that two forces, one 1.6 kN and the other P, are applied by cables as shown. ${SIT2}\n\nIt is necessary to ensure the resultant to be directed along the spike. Compute the magnitude of P (kN).`,
    ['2.86', '2.15', '1.43', '1.07'], 1),
  qf(5, `Situation 2. It is desired to remove the spike from the timber by applying force along its horizontal axis. An obstruction $A$ prevents direct access, so that two forces, one 1.6 kN and the other P, are applied by cables as shown. ${SIT2}\n\nIt is necessary to ensure the resultant to be directed along the spike. Compute the magnitude of the resultant (kN).`,
    ['1.76', '3.52', '1.6', '3.20'], 1),
  qf(6, `Situation 2. It is desired to remove the spike from the timber by applying force along its horizontal axis. An obstruction $A$ prevents direct access, so that two forces, one 1.6 kN and the other P, are applied by cables as shown. ${SIT2}\n\nIf the resultant of the two forces is 2.80 kN, determine its direction with respect to the horizontal.`,
    ['$7.64^\\circ$', '$32.7^\\circ$', '$4.17^\\circ$', '$29.2^\\circ$'], 1),
  qf(7, `Situation 3. Three forces are applied to the eye bolt as shown. ${SIT3}\n\nThe magnitudes of the three forces are $T_1 = 550$N, $T_2 = 200$ N, and $T_3 = 750$ N. Replace these forces with a single equivalent force (N).`,
    ['1197', '1437', '1050', '1204'], 1),
  qf(8, `Situation 3. Three forces are applied to the eye bolt as shown. ${SIT3}\n\nThe magnitudes of the three forces are $T_1 = 750$N, $T_2 = 200$ N, and $T_3 = 550$ N. Determine the direction of the resultant with respect to the horizontal.`,
    ['$79.6^\\circ$', '$87.8^\\circ$', '$84.0^\\circ$', '$66.3^\\circ$'], 1),
  qf(9, `Situation 3. Three forces are applied to the eye bolt as shown. ${SIT3}\n\nGiven that $T_2 = 300$ N and the resultant of the three forces is 2000 N acting $15^\\circ$ to the left of $T_2$, determine the magnitude of $T_3$ (N).`,
    ['1284', '1607', '678', '373'], 1),
  qf(10, `Situation 4. Refer to the given figure. ${SIT4}\n\nDetermine the resultant (N) of the two forces when $\\theta = 85^\\circ$.`,
    ['775', '836', '1099', '304'], 2),
  qf(11, `Situation 4. Refer to the given figure. ${SIT4}\n\nAt what angle $\\theta$ (in degrees) must the 400-N force be applied in order that the resultant $\\mathbf{R}$ of the two forces have a magnitude of 1000 N?`,
    ['18.2', '51.3', '128.7', '33.1'], 2),
  qf(12, `Situation 4. Refer to the given figure. ${SIT4}\n\nWhen R = 1000N, what will be the angle $\\beta$ (in degrees) between $\\mathbf{R}$ and the horizontal?`,
    ['7.18', '71.81', '12.62', '18.19'], 2),
  qf(13, `Situation 5. Three forces are acting upon a hook as shown. Given: Forces, A = 60 kN, C = 50 kN; Angles, $\\alpha = 25^\\circ$, $\\beta = 60^\\circ$. ${SIT5}\n\nDetermine the resultant (kN) of the force system when force B = 40 kN and angle $\\phi = 50^\\circ$.`,
    ['54.9', '45.6', '63.6', '59.2'], 2),
  qf(14, `Situation 5. Three forces are acting upon a hook as shown. Given: Forces, A = 60 kN, C = 50 kN; Angles, $\\alpha = 25^\\circ$, $\\beta = 60^\\circ$. ${SIT5}\n\nGiven: Angle $\\phi = 80^\\circ$; Resultant is acting along the positive x axis. Determine force B in kN.`,
    ['27.6', '19.3', '39.3', '10.3'], 2),
  qf(15, `Situation 5. Three forces are acting upon a hook as shown. Given: Forces, A = 60 kN, C = 50 kN; Angles, $\\alpha = 25^\\circ$, $\\beta = 60^\\circ$. ${SIT5}\n\nGiven: Force B = 80 kN, Resultant = 100 kN. Determine angle $\\phi$ in degrees.`,
    ['84.1', '5.9', '46.3', '43.7'], 2),
];
