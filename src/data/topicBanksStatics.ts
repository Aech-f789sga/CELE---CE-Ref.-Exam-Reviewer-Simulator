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
  18:
    'A block is suspended from the midpoint $B$ of a cord $ABC$ whose supports $A$ and $C$ are 0.4 m apart. The sag at $B$ is $d = 0.15$ m.',
  19:
    'Three spheres, each of mass 2 kg and 350 mm in diameter, rest in a box 760 mm wide. Sphere $A$ sits on top of $B$ and $C$; spheres $B$ and $C$ rest on the floor, one against each side wall.',
  20:
    'The masses of the frictionless cylinders $A$ and $B$ are 2.0 kg and 1.0 kg respectively. The smallest value of the force $P$ that will lift cylinder $A$ off the horizontal surface is 55.5 N. Cylinder $A$ has a radius of 20 mm and rests on the floor against cylinder $B$.',
  21:
    'A tower 30 m tall is guyed by cables running from its top to anchor points on the ground. The anchors are 10 m, 15 m and 12.5 m out from the base, with a further 10 m dimension on the far side.',
  22:
    'The tripod is subjected to a vertical 2-kN force at its apex $D$. The weight of the legs is negligible compared with the applied load. The legs are 1100 mm long; the base spacing dimensions are 520 mm, 400 mm, 440 mm and 600 mm.',
  23:
    'Force $P$ is supported by two cables and a bar. Point $A$ lies in the $yz$ plane, and points $B$ and $C$ lie in the $xz$ plane. Given: $P = 3$ kip. The dimensions are 4 ft, 4 ft, 6 ft, 12 ft, 12 ft and 5 ft.',
  24:
    'Three cables are used to tether a balloon as shown. Knowing that the tension in cable $AC$ is 444 N. The anchors sit 5.60 m, 4.20 m, 3.30 m, 2.40 m and 4.20 m out from the pin.',
  25:
    'A transmission tower is held by three guy wires attached to a pin at $A$ and anchored by bolts at $B$, $C$ and $D$. The tension in wire $AB$ is 630 lb. The anchor offsets are 90 ft, 30 ft, 20 ft, 45 ft, 60 ft, 30 ft and 65 ft.',
  26:
    'The shear-leg derrick shown in the figure supports a vertical load of $W = 2000$ N applied at $A$. Points $B$, $C$ and $D$ are in the same horizontal plane; $A$, $O$ and $D$ are in the $XY$ plane. Dimensions 20 m, 10 m, 15 m, 10 m and 5 m.',
  27:
    'Neglecting the weights of the pulleys, determine the force $T$ required to support the weight $W = 100$ N. Three arrangements are shown: (a) one pulley, (b) two pulleys, (c) three pulleys.',
  28:
    'The hoist shown is used in a machine shop to position heavy workpieces in a lathe. Cable $CD$ and bar $CE$ meet at $C$; the pulley arrangement carries the load $W$.',
  29:
    'A horizontal beam runs from a pin support at $A$ through $C$ to $B$. A 4 kN load acts at $B$. $C$ is 1.5 m to the right of $A$ and $B$ a further 1.5 m on. A strut runs from $A$ down 1.5 m to $D$ and from $D$ up to $C$.',
  30:
    'The boom supports the two vertical loads $F_1$ and $F_2$. Neglect the size of the collars at $D$ and $B$ and the thickness of the boom. The boom is pinned at $A$, $D$ is 1.5 m along it from $A$, $B$ is a further 1 m on, and cable $CB$ makes $30^\\circ$ with the boom.',
  31:
    'A 50-kg crate is attached to the trolley-beam system shown. The trolley runs on a horizontal beam from $A$ to $B$; the crate hangs from it, and a cable runs from $D$ to the trolley at $55^\\circ$ to the vertical. Dimensions 1.4 m and 0.4 m locate $D$ above the beam, and $b$ is the horizontal distance from $B$ to the load line.',
  32:
    'The uniform 18 kg bar $OA$ is held in the position shown by the smooth pin at $O$ and the cable $AB$. Given: length of bar $OA$, $L = 1.5$ m; distance between supports, $x = 1.2$ m. $\\theta$ is the angle the bar makes with the horizontal.',
  33:
    'The wheel-loads (600 lb and 200 lb) on a jeep are given in the figure. The jeep rests on a beam $AB$ of span 15 ft; the 600 lb load is $x$ from $A$, and the 200 lb load is 4 ft to its right.',
  34:
    'The sign has a mass of 100 kg with center of mass at $G$. It is held by a ball-and-socket joint at $A$ and by wires $BC$ and $BD$. Dimensions 1 m and 2 m locate $B$ and the wire anchors relative to the sign.',
  35:
    'A 2.4-m boom is held by a ball-and-socket joint at $C$ and by two cables $AD$ and $AE$. The boom carries a 3.6 kN load. Dimensions 0.6 m, 0.8 m, 1.2 m, 1.2 m, 1.2 m, 1.8 m and 0.8 m locate $A$, $D$, $E$ and the load.',
  36:
    'Refer to the given frame. A 250 N load acts horizontally at $B$. The frame is a triangle $ACD$ with a horizontal member $BD$, pinned at $A$ and on a roller at $E$. The four horizontal panels are 1.5 m each; $C$ is 2 m above $BD$ and $BD$ is 2 m above the base.',
  37:
    'Neglecting the weight of the frame. A 300 N/m distributed load acts downward on the horizontal member $AB$. $AB$ spans 6 m from $A$ to $B$, with a vertical post at $A$ 3 m + 3 m tall carrying $C$ and $E$, and a member $BD$ 4 m long running down to a roller at $D$; $F$ is the support under $B$.',
  38:
    'Neglecting the weight of the frame, find the following: a braced frame with members $AB$ and $DE$ horizontal, crossed diagonals, a 400 lb load acting horizontally at $B$, and dimensions 6 ft, 4 ft, 4 ft and 8 ft.',
  39:
    'Refer to the folding table as shown. Neglect friction and the weights of the members. Given: $a = 0.6$ m; $b = 0.8$ m; $c = 1.2$ m. The top $AB$ carries a uniform load $w$; the legs cross at $C$ and bear at $D$ and $E$.',
  40:
    'The frame supports a suspended weight $W = 40$ lb. Determine the forces on members $ABCD$ and $CEG$. Dimensions 6 in, 6 in, 6 in, 8 in, 8 in and 3 in.',
  41:
    'Refer to the frame shown in the figure. Given: Weight, $W = 600$ N; $h_1 = 10$ m; $h_2 = 6$ m; $s = 8$ m; $r = 4$ m. The weight hangs from a rope over a pulley of radius $r$ at the top of the vertical member; member $AC$ is hinged to that member at $B$.',
  42:
    'Refer to the Pratt roof truss shown. Joints run $A$ to $H$ along the bottom and top chords; the truss is 2.4 m deep, with panel widths 3.8 m, 3.2 m, 3.2 m and 3.8 m, carrying 5.7 kN at each end and 10.5 kN, 9.6 kN, 10.5 kN at the upper joints.',
  43:
    'Refer to the loaded truss below. The truss is 8 m deep with six 4 m panels (6 at 4 m = 24 m) and carries 30 kN and 60 kN loads at its upper joints.',
  44:
    'Refer to the Howe roof truss shown. State whether each member is in tension or compression. Joints run $A$ to $H$; the truss is 6 ft deep with four 8 ft panels and carries 300 lb at $A$ and $H$ and 600 lb at $B$, $D$ and $F$.',
  45:
    'Refer to the given truss below, of the loaded truss. All triangles are isosceles. A 6 kN load acts at $B$ and an 8 kN load at $E$; the truss is 4 m deep with 6 m base panels.',
  46:
    'Refer to the given figure. A 12 kN load acts at $H$ and a 6 kN load at $J$; the truss has six 3 m panels (6 @ 3 m) and is 4 m deep in two 4 m tiers.',
  47:
    'Refer to the given truss. Given: $s = 5$ m; $h = 4$ m.',
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
  // Situation 18 — items 51–53
  qe(51, 'If the mass of the block is 5 kg and sag $d = 0.15$ m, determine the force (N) in cord ABC.',
    ['40.9', '30.7', '47.1', '81.8'], 7, 18),
  qe(52, 'If the allowable tension in the cable is 75 N, determine the maximum weight (kg) of the block it could carry using $d = 0.15$ m',
    ['12.2', '9.2', '4.6', '90'], 7, 18),
  qe(53, 'If the allowable tension in the cable is 70 N, determine the minimum sag "d" (m) that will support the block if its mass is 7 kg.',
    ['0.1126', '0.1011', '0.3553', '0.0100'], 7, 18),

  // Situation 19 — items 54–56
  qe(54, 'Find the reaction (N) of B on A.',
    ['7.1', '36.3', '16.7', '12.1'], 7, 19),
  qe(55, 'Find the reaction (N) of the wall on C.',
    ['4.16', '21.26', '7.09', '9.78'], 7, 19),
  qe(56, 'Find the reaction (N) of the floor on B.',
    ['9.8', '19.6', '29.4', '39.2'], 7, 19),

  // Situation 20 — items 57–59
  qe(57, 'Calculate the radius $R$ (mm) of the cylinder $B$.',
    ['8', '10', '12', '15'], 7, 20),
  qe(58, 'Calculate the normal reaction (N) between the two cylinders.',
    ['61.4', '57.3', '58.9', '56.1'], 7, 20),
  qe(59, 'Calculate the reaction at the horizontal surface (N) of cylinder B.',
    ['29.4', '30.3', '28.9', '19.6'], 7, 20),

  // Situation 21 — items 60–62
  qe(60, 'If cable AD is tightened by a turnbuckle and develops a tension of 1300 lb, determine the tension (lb) developed in cable AB.',
    ['750', '583.', '2100', '808'], 7, 21),
  qe(61, 'If cable AD is tightened by a turnbuckle and develops a tension of 1300 lb, determine the tension (lb) developed in cable AC.',
    ['500', '875', '1400', '538'], 8, 21),
  qe(62, 'If the tension developed in either cable AB or AC cannot exceed 1000 lb, determine the maximum tension (lb) that can be developed in cable AD when it is tightened by the turnbuckle.',
    ['2229', '1610', '2414', '1486'], 8, 21),

  // Situation 22 — items 63–65
  qe(63, 'Compute the compression in leg AD in kN.',
    ['1.036', '0.216', '0.925', '1.726'], 8, 22),
  qe(64, 'Compute the compression in leg CD in kN.',
    ['0.898', '0.349', '0.376', '1.106'], 8, 22),
  qe(65, 'Compute the compression in leg BD in kN.',
    ['0.898', '0.349', '0.376', '1.106'], 8, 22),

  // Situation 23 — items 66–68
  qe(66, 'Determine the force (kip) supported by the cable AC.',
    ['4.57', '1.21', '5.25', '1.88'], 8, 23),
  qe(67, 'Determine the force (kip) supported by the cable AB.',
    ['1.88', '5.25', '4.57', '1.21'], 8, 23),
  qe(68, 'Determine the force (kip) supported by bar AO.',
    ['3.92', '7.83', '6.20', '9.46'], 8, 23),

  // Situation 24 — items 69–71
  qe(69, 'Determine the vertical force exerted by the balloon at A in N.',
    ['940', '956', '870', '978'], 8, 24),
  qe(70, 'Determine the tension in cable AD in N.',
    ['240', '397', '496', '662'], 8, 24),
  qe(71, 'Determine the tension in cable AB in N.',
    ['268', '496', '240', '821'], 8, 24),
  // Situation 25 — items 72–74
  qe(72, 'The vertical force P (lb) exerted by the tower on the pin at $A$.',
    ['1107', '1188', '1572', '1271'], 9, 25),
  qe(73, 'The corresponding tension in AC (lb).',
    ['322', '138', '467', '200'], 9, 25),
  qe(74, 'The corresponding tension in AD (lb).',
    ['561', '814', '484', '703'], 9, 25),

  // Situation 26 — items 75–77
  qe(75, 'Determine the force (N) in member AB.',
    ['2494', '1871', '1247', '3742'], 9, 26),
  qe(76, 'Determine the force (N) in member AD.',
    ['1374', '2748', '1031', '2236'], 9, 26),
  qe(77, 'Determine the force (N) in member AC.',
    ['2748', '1374', '2236', '559'], 9, 26),
  // Situation 27 — items 78–80
  qe(78, '(a) One pulley',
    ['50 N', '100 N', '200 N', '10 N'], 10, 27),
  qe(79, '(b) Two pulleys',
    ['300 N', '25 N', '33 N', '400 N'], 10, 27),
  qe(80, '(c) Three pulleys',
    ['600 N', '16.7 N', '12.5 N', '800 N'], 10, 27),

  // Situation 28 — items 81–83
  qe(81, 'Determine the force (N) in cable CD when W = 100 N.',
    ['153', '229', '67', '219'], 10, 28),
  qe(82, 'Determine the force (N) in bar CE when W = 150 N.',
    ['221', '138', '331', '229'], 10, 28),
  qe(83, 'Given: Cable between pulleys A and B can support a force of 300 N. All other cables can support a force of 500 N. Bar CE can support a compressive force of 600 N. Determine the largest weight W that may be lifted.',
    ['600', '333', '218', '272'], 10, 28),

  // Situation 29 — items 84–86
  qe(84, 'Determine the horizontal component of reaction at the pin $A$.',
    ['8.0', '16.0', '8.0', '4.0'], 10, 29),
  qe(85, 'Determine the vertical component of reaction (kN) at the pin $A$.',
    ['12.0', '4.0', '7.3', '8.0'], 10, 29),
  qe(86, 'Determine the reaction (kN) on the beam at $C$.',
    ['8.0', '5.7', '11.3', '16.9'], 10, 29),
  // Situation 30 — items 87–89
  qe(87, 'Compute the vertical component of force (N) at the pin $A$. Set $F_1 = 800$ N and $F_2 = 350$ N.',
    ['525', '681', '571', '716'], 11, 30),
  qe(88, 'Compute the force (N) in cable $CB$. Set $F_1 = 800$ N and $F_2 = 350$ N.',
    ['782', '724', '451', '418'], 11, 30),
  qe(89, 'If the cable $CB$ can sustain a maximum load of 1500 N before it fails, what is the magnitude of the maximum reaction (N) at pin $A$ if $F_1 = 2F_2$?',
    ['1671', '1749', '1569', '1147'], 11, 30),

  // Situation 31 — items 90–92
  qe(90, 'Determine the tension (kg) in cable. Given: $a = 1.55$ m.',
    ['41.5', '94.6', '75.1', '52.6'], 11, 31),
  qe(91, 'Determine the reaction (kg) at $B$. Given: $a = 1.15$ m.',
    ['42.2', '61.9', '28.7', '47.4'], 11, 31),
  qe(92, 'If the reaction at B is 588 N, find distance $a$ in meters.',
    ['2.39', '2.14', '1.49', '1.66'], 11, 31),

  // Situation 32 — items 93–94
  qe(93, 'Determine the tension (N) in the cable when $\\theta = 60^\\circ$.',
    ['10.1', '99.5', '79.6', '66.3'], 11, 32),
  qe(94, 'Determine the magnitude of the external pin reaction (N) at $O$ when $\\theta = 60^\\circ$.',
    ['147', '265', '232', '246'], 11, 32),
  // Situation 32 — item 95
  qe(95, 'Determine the maximum vertical load (N) that could be carried at point A when $\\theta = 50^\\circ$. Given: Allowable tensile force in the cable = 250 N',
    ['57.6', '136.9', '186.5', '84.2'], 12, 32),

  // Situation 33 — items 96–98
  qe(96, 'Determine the reaction (lb) at A when $x = 6$ ft.',
    ['427', '373', '293', '507'], 12, 33),
  qe(97, 'Determine the distance $x$ (ft) so that the reaction of the beam at $A$ is twice as great as the reaction at $B$.',
    ['5.3', '9.0', '4.0', '6.5'], 12, 33),
  qe(98, 'Determine the distance $x$ (ft) so that the larger load and the resultant of the two loads is located equidistant to midspan.',
    ['7.0', '6.5', '6.0', '4.5'], 12, 33),

  // Situation 34 — items 99–101
  qe(99, 'Determine the reaction at the ball-and-socket joint $A$.',
    ['860.8', '820.8', '766.2', '832.4'], 12, 34),
  qe(100, 'Determine the tension in wires $BC$ (N).',
    ['327.0', '588.6', '735.8', '367.9'], 12, 34),
  qe(101, 'Determine the tension in wires $BD$ (N).',
    ['163.5', '735.8', '367.9', '294.3'], 12, 34),
  // Situation 35 — items 102–104
  qe(102, 'Determine the tension (kN) in cable AD.',
    ['2.60', '6.24', '2.89', '3.90'], 13, 35),
  qe(103, 'Determine the tension (kN) in cable AE.',
    ['6.72', '2.80', '3.11', '4.20'], 13, 35),
  qe(104, 'Determine y-component of the reaction (kN) at C.',
    ['5.40', '1.80', '5.13', '4.80'], 13, 35),

];

/** Section: FRAMES. */
export const STAT_FRAMES: TopicQuestion[] = [  // Situation 36 — items 105–107
  qr(105, 'Determine the horizontal component of reaction (N) at C.',
    ['125', '93.75', '156.25', '250'], 13, 36),
  qr(106, 'Determine the reaction (N) at C.',
    ['156.25', '93.75', '125', '250'], 13, 36),
  qr(107, 'Determine the reaction (N) at B.',
    ['509', '375', '387', '94'], 13, 36),

  // Situation 37 — items 108–110
  qr(108, 'Find the tension (N) in cable CD.',
    ['1800', '3600', '2400', '4800'], 13, 37),
  qr(109, 'Find the reaction (N) at pin B.',
    ['900', '2012', '2563', '3711'], 13, 37),
  qr(110, 'Find the reaction at support F.',
    ['900', '2012', '2563', '3711'], 13, 37),

  // Situation 38 — item 111
  qr(111, 'The reaction at E.',
    ['400', '200', '100', '300'], 13, 38),
  // Situation 38 — items 112–113
  qr(112, 'The vertical component of reaction (N) at C.',
    ['100', '200', '300', '400'], 14, 38),
  qr(113, 'The horizontal component of reaction (N) at B.',
    ['200', '400', '300', '100'], 14, 38),

  // Situation 39 — items 114–116
  qr(114, 'Compute the magnitude of the pin reaction (N) at $A$ when $w = 300$ N/m.',
    ['450', '94', '244', '411'], 14, 39),
  qr(115, 'Compute the magnitude of the pin reaction (N) at $C$ when $w = 200$ N/m.',
    ['267', '168', '416', '277'], 14, 39),
  qr(116, 'Compute the intensity of the uniform load $w$ (N/m) so that reaction at B is 400 N.',
    ['292', '393', '582', '267'], 14, 39),

  // Situation 40 — items 117–119
  qr(117, 'Determine the reaction (lb) at A.',
    ['58.2', '42.2', '40.0', '53.5'], 14, 40),
  qr(118, 'Determine the horizontal component of reaction (lb) at pin C.',
    ['186.7', '35.6', '126.7', '66.7'], 14, 40),
  qr(119, 'Determine the vertical component of reaction (lb) at pin E.',
    ['106.7', '80.0', '95.0', '0'], 14, 40),
  // Situation 41 — items 120–122
  qr(120, 'Determine the horizontal component (N) of the hinge force at B as it acts upon member AC.',
    ['960', '1080', '1600', '1350'], 15, 41),
  qr(121, 'Determine the vertical component (N) of the hinge force at B as it acts upon member AC.',
    ['1500', '1200', '1000', '1600'], 15, 41),
  qr(122, 'Determine the reaction (N) at support C.',
    ['900', '1345', '1000', '1835'], 15, 41),

  // Situation 42 — items 123–125
  qr(123, 'Determine the force (kN) in each member BD.',
    ['51.2', '82.3', '16.2', '47.2'], 15, 42),
  qr(124, 'Determine the force (kN) in each member CD.',
    ['17.5 (C)', '17.5 (T)', '13.1 (T)', '13.1 (C)'], 15, 42),
  qr(125, 'Determine the force (kN) in each member CE.',
    ['30.6', '58.6', '47.3', '28.0'], 15, 42),

  // Situation 43 — items 126–128
  qr(126, 'Determine the reaction (kN) at support F.',
    ['79.5', '198.0', '71.6', '166.4'], 15, 43),
  qr(127, 'Determine the force in member GL.',
    ['20 kN [C]', '20 kN [T]', '45 kN [C]', '45 kN [T]'], 15, 43),
  qr(128, 'Determine the force (kN) in member EL.',
    ['0.46', '129.5', '0.60', '0.33'], 15, 43),
  // Situation 44 — items 129–131
  qr(129, 'Determine the force (lb) in member BD.',
    ['1000 C', '750 C', '1600 C', '1500 C'], 16, 44),
  qr(130, 'Determine the force (lb) in member BE.',
    ['500 C', '375 C', '500 T', '375 T'], 16, 44),
  qr(131, 'Determine the force (lb) in member DE.',
    ['300 T', '1320 T', '600 T', '1200 T'], 16, 44),

  // Situation 45 — items 132–134
  qr(132, 'Calculate the force in member BE (kN).',
    ['2.5 (C)', '3.3 (C)', '2.5 (T)', '3.3 (T)'], 16, 45),
  qr(133, 'Calculate the force in member BC (kN).',
    ['15.0 (T)', '9.0 (T)', '15.0 (C)', '9.0 (C)'], 16, 45),
  qr(134, 'Calculate the force in member AE (kN).',
    ['7.5 (T)', '7.5 (C)', '10.5 (C)', '10.5 (T)'], 16, 45),

  // Situation 46 — items 135–137
  qr(135, 'Determine the force (kN) supported by member DF.',
    ['6 kN (C)', '6 kN (T)', '7.5 (T)', '7.5 (C)'], 16, 46),
  qr(136, 'Determine the force (kN) supported by member HI.',
    ['4 kN (C)', '4 kN (T)', '8 kN (T)', '8 kN (C)'], 16, 46),
  qr(137, 'By inspection, identify the number of zero-force members in the truss.',
    ['3', '4', '5', '6'], 16, 46),
];
