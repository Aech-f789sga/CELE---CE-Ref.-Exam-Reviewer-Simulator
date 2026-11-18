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
 * ## Situations
 *
 * The booklet is built out of "Situation N" blocks: one figure plus a few
 * questions that all read off it. A single question is often unsolvable alone —
 * "Determine the resultant" means nothing without the situation's figure and
 * given values. So items stay contiguous by situation, each carries the shared
 * wording in `situationText`, and `text` repeats it so the item still stands on
 * its own in a flat list.
 *
 * `Question` has no image field, so a figure is described in words inside
 * `SITUATIONS`. A description only counts as trustworthy if solving the item
 * against it lands on one of the four printed choices.
 */
import type { TopicQuestion } from './topicBanks';

/**
 * Shared wording + figure description for each "Situation N".
 *
 * Everything a solver needs that is not already in the question itself lives
 * here: force magnitudes, angles, dimensions, and where each figure label sits.
 */
const SITUATIONS: Record<number, string> = {
  1:
    'A steel tank is to be positioned in an excavation. At point $A$ on top of the tank a 425 lb force acts up and to the left at $30^\\circ$ above the horizontal, and a force $P$ acts up and to the right at angle $\\alpha$ above the horizontal.',
  2:
    'It is desired to remove the spike from the timber by applying force along its horizontal axis. An obstruction $A$ prevents direct access, so that two forces, one 1.6 kN and the other $P$, are applied by cables. The cable carrying $P$ rises 100 mm over a horizontal run of 200 mm; the cable carrying the 1.6 kN force drops 150 mm over a horizontal run of 200 mm.',
  3:
    'Three forces are applied to an eye bolt. $T_1$ acts up and to the left at $60^\\circ$ above the negative $x$-axis, $T_2$ acts vertically upward, and $T_3$ acts up and to the right at $40^\\circ$ above the positive $x$-axis.',
  4:
    'A bracket at $O$ carries two rods: a horizontal rod running to the left with a 700 N force applied at its end pointing horizontally away from $O$, and an inclined rod above it with a 400 N force applied at its end pointing up and to the left along the rod. $\\theta$ is the angle at $O$ between the two rods.',
  5:
    'Three forces act on a hook. Force $A$ acts up and to the right at $\\alpha$ above the $+x$ axis; force $B$ acts down and to the right at $\\beta$ below the $+x$ axis; force $C$ acts down and to the left, $\\phi$ being measured from the downward vertical to $C$.',
  9:
    'An L-shaped bracket is fixed at $O$ and hangs down. Its vertical leg is 800 mm long; from the bottom of that leg a horizontal leg runs 600 mm to the right and ends at $A$. A force $F = 90$ N acts at $A$, directed up and to the left at angle $\\theta$ from the vertical.',
  10:
    'A bracket is fastened to a girder by two rivets $A$ and $B$ and supports a 2-kN force. Rivets $A$ and $B$ lie on a vertical line 250 mm apart. The 2-kN force acts horizontally to the right at a point 100 mm below the line through $B$ and 300 mm to the right of the rivet line.',
  11:
    'Bar $OA$ is 1.5 m long, pivoted at $O$ and inclined at $60^\\circ$ above the horizontal. Cable $AB$ runs from $A$ to a point $B$ on the ground 1.2 m to the left of $O$, and prevents the bar from rotating clockwise. At $A$ the $t$ axis lies along the bar pointing away from $O$, and the $n$ axis is perpendicular to the bar.',
  12:
    'The streetlight $A$ is attached to the end of the horizontal boom $AO$. The light weighs 100 N and is subjected to a wind load of 20 N acting in the negative $y$-direction. $P$ and $Q$ are the tensions in two cables attached at point $B$. The resultant of the four forces shown is a force $R$ acting at point $O$. Boom $AO$ is 4 m long, $B$ is 2 m from $O$, and the cable anchorage points $C$ and $D$ are 2 m above $O$ and 1.5 m either side of the post.',
  13:
    'The three forces are perpendicular to the triangular plate. The plate is a right triangle with $O$ at the apex, a 3 m leg running to the left and a 4 m leg running to the right. A 40 kN force acts at $O$, and 20 kN and 50 kN act at the far ends of the 3 m and 4 m legs respectively, all in the $+z$ direction.',
  14:
    'A table stands on legs at the corners of its top, with $O$ at the centre of the top. $a = 1.2$ m and $b = 1.0$ m. $F_1$, $F_2$ and $F_3$ act vertically at three of the corners, and $F$ acts vertically on the top, offset $d$ from $O$.',
  15:
    'A vertical dam wall 20 m long holds water 5 m deep on the shallow side and 8 m deep on the deep side. The pressure at the base is 312 N/m$^2$ on the shallow side and 499 N/m$^2$ on the deep side. $B$ is at the top of the wall and $A$ at its base.',
  16:
    'A high-rise building 180 m tall and 60 m wide is acted on by wind pressure that varies linearly with height, from 1.8 N/m$^2$ near the base to 3.2 N/m$^2$ higher up; 120 m, 80 m and 60 m dimensions mark the building and its setback.',
  17:
    'A 200-kg crate is supported as shown. $A$ and $C$ are 8 m apart on a horizontal ceiling. Cable $AB$ is 6.5 m long and makes $34^\\circ$ with the horizontal; cable $BC$ runs from $B$ up to $C$, where a downward force $F$ is applied. The crate hangs from $B$.',
};

/**
 * Situations whose figure is transcribed but NOT yet resolved, so their items
 * are held out of the live bank. Each entry says what the figure shows and why
 * the reading is still open. Move the situation into `SITUATIONS` once a
 * reading has been confirmed by solving an item against the printed choices.
 */
const SITUATIONS_PENDING: Record<number, string> = {
  6:
    'A rectangular plate $ABCD$ hangs in the $x$-$y$-$z$ frame, carried by cables $AB$ and $AC$ from a point $A$ above it. Given: tension in cable $AB$ is 1425 N, tension in cable $AC$ is 2130 N. ' +
    'The printed dimensions are 360 mm, 920 mm, 900 mm and 600 mm, but which edge each one measures is not resolvable at scan resolution.',
  7:
    'A rectangular plate lies in the $x$-$y$ plane, held by three forces $T_1$, $T_2$, $T_3$; the printed dimensions are 2 m, 3 m and 2 m, with $T_1$ and $T_3$ applied at the corners and $T_2$ vertical at the centre.',
  8:
    'A $6 \\times 5$ grid of 1.0 m squares with $O$ at the bottom-left corner, $x$ to the right and $y$ up. ' +
    '$P_1$ acts at $A(4, 5)$ on the top edge, up and to the left along a $45^\\circ$ line; $P_3$ acts at $B(3, 0)$ on the bottom edge, down and to the right along a $45^\\circ$ line; $P_2$ acts at $O$, horizontally to the left. ' +
    'Note: as drawn, $P_1$ and $P_3$ are antiparallel and $P_2$ is horizontal, so $\\sum F$ cannot vanish and the system cannot reduce to a pure couple — the printed statement and the figure disagree, or a dimension is misread.',
};

function makeStaticsItem(topicId: string, category: string, idPrefix: string) {
  return (
    number: number,
    text: string,
    opts: [string, string, string, string],
    page: number,
    situation: number
  ): TopicQuestion => ({
    id: `${idPrefix}-${number}`,
    number,
    pageNumber: page,
    subject: 'MSTC',
    year: 0,
    month: 'May',
    category,
    text: `${SITUATIONS[situation]}\n\n${text}`,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: 'A',
    keyPending: true,
    referenceSource: 'Gillesania',
    topicId,
    situation,
    situationText: SITUATIONS[situation],
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

/** Section: RESULTANT – 2D CONCURRENT FORCES. */
export const STAT_FORCES: TopicQuestion[] = [
  // Situation 1 — items 1–3
  qf(1, 'Knowing that $\\alpha = 20^\\circ$, determine the required magnitude of the force P (lb) if the resultant R of the two forces applied at A is to be vertical.',
    ['291', '461', '621', '392'], 1, 1),
  qf(2, 'Knowing that the magnitude of P is 500 lb, determine the required angle $\\alpha$ (degrees) if the resultant R of the two forces applied at A is to be vertical.',
    ['47.4', '42.6', '64.8', '25.2'], 1, 1),
  qf(3, 'Determine the magnitude of the smallest force P (lb) for which the resultant R of the two forces applied at A is vertical.',
    ['368', '213', '245', '736'], 1, 1),

  // Situation 2 — items 4–6
  qf(4, 'It is necessary to ensure the resultant to be directed along the spike. Compute the magnitude of P (kN).',
    ['2.86', '2.15', '1.43', '1.07'], 1, 2),
  qf(5, 'It is necessary to ensure the resultant to be directed along the spike. Compute the magnitude of the resultant (kN).',
    ['1.76', '3.52', '1.6', '3.20'], 1, 2),
  qf(6, 'If the resultant of the two forces is 2.80 kN, determine its direction with respect to the horizontal.',
    ['$7.64^\\circ$', '$32.7^\\circ$', '$4.17^\\circ$', '$29.2^\\circ$'], 1, 2),

  // Situation 3 — items 7–9
  qf(7, 'The magnitudes of the three forces are $T_1 = 550$N, $T_2 = 200$ N, and $T_3 = 750$ N. Replace these forces with a single equivalent force (N).',
    ['1197', '1437', '1050', '1204'], 1, 3),
  qf(8, 'The magnitudes of the three forces are $T_1 = 750$N, $T_2 = 200$ N, and $T_3 = 550$ N. Determine the direction of the resultant with respect to the horizontal.',
    ['$79.6^\\circ$', '$87.8^\\circ$', '$84.0^\\circ$', '$66.3^\\circ$'], 1, 3),
  qf(9, 'Given that $T_2 = 300$ N and the resultant of the three forces is 2000 N acting $15^\\circ$ to the left of $T_2$, determine the magnitude of $T_3$ (N).',
    ['1284', '1607', '678', '373'], 1, 3),

  // Situation 4 — items 10–12
  qf(10, 'Determine the resultant (N) of the two forces when $\\theta = 85^\\circ$.',
    ['775', '836', '1099', '304'], 2, 4),
  qf(11, 'At what angle $\\theta$ (in degrees) must the 400-N force be applied in order that the resultant $\\mathbf{R}$ of the two forces have a magnitude of 1000 N?',
    ['18.2', '51.3', '128.7', '33.1'], 2, 4),
  qf(12, 'When R = 1000N, what will be the angle $\\beta$ (in degrees) between $\\mathbf{R}$ and the horizontal?',
    ['7.18', '71.81', '12.62', '18.19'], 2, 4),

  // Situation 5 — items 13–15
  qf(13, 'Given: Forces, A = 60 kN, C = 50 kN; Angles, $\\alpha = 25^\\circ$, $\\beta = 60^\\circ$. Determine the resultant (kN) of the force system when force B = 40 kN and angle $\\phi = 50^\\circ$.',
    ['54.9', '45.6', '63.6', '59.2'], 2, 5),
  qf(14, 'Given: Forces, A = 60 kN, C = 50 kN; Angles, $\\alpha = 25^\\circ$, $\\beta = 60^\\circ$. Given: Angle $\\phi = 80^\\circ$; Resultant is acting along the positive x axis. Determine force B in kN.',
    ['27.6', '19.3', '39.3', '10.3'], 2, 5),
  qf(15, 'Given: Forces, A = 60 kN, C = 50 kN; Angles, $\\alpha = 25^\\circ$, $\\beta = 60^\\circ$. Given: Force B = 80 kN, Resultant = 100 kN. Determine angle $\\phi$ in degrees.',
    ['84.1', '5.9', '46.3', '43.7'], 2, 5),
  // Situation 9 — items 25–26
  qf(25, 'Calculate the moment (N-m) of the 90-N force about point $O$ for the condition $\\theta = 15^\\circ$.',
    ['33.5', '55.6', '70.8', '83.5'], 3, 9),
  qf(26, 'Determine the value of $\\theta$ for which the moment about $O$ is zero.',
    ['$53.1^\\circ$', '$36.9^\\circ$', '$48.6^\\circ$', '$41.4^\\circ$'], 3, 9),
  // Situation 9 — item 27
  qf(27, 'Determine the value of $\\theta$ for which the moment about $O$ is a maximum.',
    ['$0^\\circ$', '$30^\\circ$', '$45^\\circ$', '$90^\\circ$'], 4, 9),

  // Situation 10 — items 28–29
  qf(28, 'Determine the force at rivet A in kN.',
    ['0.8', '2.8', '2.4', '1.7'], 4, 10),
  qf(29, 'Determine the force at rivet B in kN.',
    ['1.7', '2.4', '0.8', '2.8'], 4, 10),

  // Situation 11 — items 30–32
  qf(30, 'If the cable tension is 750 N, determine the $n$-component (N) of this force acting on point $A$ of the bar.',
    ['457.5', '624.2', '514.3', '332.6'], 4, 11),
  qf(31, 'If the cable tension is 700 N, determine the $t$-component (N) of this force acting on point $A$ of the bar.',
    ['509.5', '627.4', '554.7', '672.2'], 4, 11),
  qf(32, 'If the moment of the cable tension about point O is 150 N-m, determine the $t$-component (N) of this cable force acting on point $A$ of the bar.',
    ['494.9', '202.1', '100.0', '225.5'], 4, 11),
  // Situation 12 — items 33–35
  qf(33, 'Determine the tension $P$.',
    ['129.7', '224.1', '518.9', '896.2'], 5, 12),
  qf(34, 'Determine the tension $Q$.',
    ['129.7', '224.1', '518.9', '896.2'], 5, 12),
  qf(35, 'Determine the force $R$.',
    ['336.7', '305.6', '304.3', '335.6'], 5, 12),

  // Situation 13 — items 36–38
  qf(36, 'Determine the resulting moment (kN-m) of the three forces about pt. $O$.',
    ['209', '260', '140', '170'], 5, 13),
  qf(37, 'What must be the weight (kN) of the plate so that moment about $x$ and $y$ axis is equal?',
    ['420', '210', '105', '52'], 5, 13),
  qf(38, 'What must be the weight of the plate so that the resulting moment about point $O$ is 100 kN-m?',
    ['21.4', '75.96', '42.86', '37.98'], 5, 13),

  // Situation 14 — items 39–41
  qf(39, 'Compute the combined moment (N-m) of the four parallel forces about point $O$ (the center of the table) using $F = 40$ N and $d = 0.4$ m.',
    ['16.3', '11.9', '3.2', '5.1'], 5, 14),
  qf(40, 'To lift the table without tilting, determine the magnitude of the force F (N).',
    ['68', '32', '8', '28'], 5, 14),
  qf(41, 'To lift the table without tilting, determine the distance $d$ (m).',
    ['0.429', '0.350', '0.450', '0.150'], 5, 14),

  // Situation 15 — items 42–44
  qf(42, 'Determine the resultant force (N) of the water pressure acting on the dam.',
    ['1,216', '24,320', '39,140', '13,604'], 5, 15),
  qf(43, 'Determine the location (meters) of resultant force of the water pressure acting on the dam from B.',
    ['2.39', '5.61', '4.77', '3.22'], 5, 15),
  qf(44, 'Determine the moment (kN-m) due to water pressure acting on the dam at point A.',
    ['2.91', '136.4', '58.0', '6.82'], 5, 15),

  // Situation 16 — items 45–47
  qf(45, 'Determine the resultant force (kN) caused by the wind.',
    ['91.97', '76.97', '68.98', '83.98'], 6, 16),
  qf(46, 'Determine the location of the resultant force from xy plane.',
    ['136 m', '115 m', '98 m', '83 m'], 6, 16),
  qf(47, 'Determine the location of the resultant force from yz plane.',
    ['59 m', '34 m', '71 m', '81 m'], 6, 16),
];

/**
 * Transcribed but held out of the live bank: the figures for situations 6, 7
 * and 8 are not yet resolved (see `SITUATIONS_PENDING`). These items are NOT
 * wired into `TOPIC_QUESTIONS` — an item whose figure is wrong is worse than
 * an item that is missing, because it teaches the wrong method.
 */
function makePendingItem(
  number: number,
  text: string,
  opts: [string, string, string, string],
  page: number,
  situation: number
): TopicQuestion {
  return {
    id: `stat-pending-${number}`,
    number,
    pageNumber: page,
    subject: 'MSTC',
    year: 0,
    month: 'May',
    category: 'Forces & Resultants',
    text: `${SITUATIONS_PENDING[situation]}\n\n${text}`,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: 'A',
    keyPending: true,
    referenceSource: 'Gillesania',
    topicId: 'stat-forces',
    situation,
    situationText: SITUATIONS_PENDING[situation],
    solution: {
      summary: 'Figure not yet resolved for this situation.',
      steps: [],
      finalAnswer: '',
      note: 'Held out of the bank until the figure is confirmed.',
    },
  };
}

export const STAT_PENDING: TopicQuestion[] = [
  // Situation 6 — items 16–18
  makePendingItem(16, 'The x-component of the force (N) exerted by cable AB on the plate at B.',
    ['750', '450', '903', '1125'], 3, 6),
  makePendingItem(17, 'The z-component of the force (N) exerted by cable AC on the plate at C.',
    ['1380', '900', '1350', '1718'], 3, 6),
  makePendingItem(18, 'The resultant of the two tension (N) cables at A.',
    ['3036', '3117', '3421', '3270'], 3, 6),

  // Situation 7 — items 19–21
  makePendingItem(19, 'Replace these forces with a single equivalent force R (kN).',
    ['213', '208', '224', '229'], 3, 7),
  makePendingItem(20, 'Find the x - coordinate of the point where the resultant intersects the plate.',
    ['0.708', '0.630', '0.716', '1.289'], 3, 7),
  makePendingItem(21, 'Find the y - coordinate of the point where the resultant intersects the plate.',
    ['0.708', '0.630', '0.716', '1.289'], 3, 7),

  // Situation 8 — items 22–24
  makePendingItem(22, 'Calculate the magnitude of the force $P_1$ (N).',
    ['31.8', '77.3', '41.6', '49.2'], 3, 8),
  makePendingItem(23, 'Calculate the magnitude of the force $P_2$ (N).',
    ['69.2', '17.6', '23.1', '11.5'], 3, 8),
  makePendingItem(24, 'Calculate the magnitude of the force $P_3$ (N).',
    ['44.1', '107.1', '57.7', '68.2'], 3, 8),
];

/** Section: EQUILIBRIUM – 2D CONCURRENT FORCES. */
export const STAT_EQUIL: TopicQuestion[] = [
  // Situation 17 — items 48–50
  qe(48, 'Determine the force F (N) required to keep the crate in equilibrium.',
    ['1628', '1098', '112', '166'], 6, 17),
  qe(49, 'Determine the force (N) in cable AB to maintain equilibrium.',
    ['1145', '1594', '117', '162'], 6, 17),
  qe(50, 'If the allowable tensile force in the cable is 2000 N, determine the maximum weight (kg) of the crate it could carry.',
    ['309', '246', '349', '404'], 6, 17),
];
