/**
 * Statics of Rigid Bodies — COMPLETE, items 1–176 across 21 pages.
 *
 * Source: Margallo's Buckling practice set, "Statics of Rigid Bodies".
 *
 * ## Key status
 *
 * Keyed. The booklet's own printed key — "[STATICS OF RIGID BODIES] / ANSWER
 * KEY", one page, items 1–176 in five columns — is encoded in `STATICS_KEY`
 * below, indexed by item number. Every item is therefore scorable and nothing
 * in this module sets `keyPending`.
 *
 * The key is letters only; the booklet prints no worked solutions, so
 * `solution` says exactly that rather than inventing a derivation for an answer
 * we only know the letter of.
 *
 * ## Layout
 *
 *   RESULTANT (2D/3D concurrent, nonconcurrent, distributed)
 *                                    1–47    stat-forces
 *   EQUILIBRIUM (2D/3D concurrent)   48–104  stat-equil
 *   FRAMES / TRUSSES                 105–143 stat-frames
 *   FRICTION                         144–164 stat-equil
 *   CABLES                           165–176 stat-equil
 *
 * All 176 items are live in the three topic arrays.
 *
 * ## Figures
 *
 * All 59 situations have their figure cropped from the booklet into
 * `public/images/statics/situation-NN.png` and attached via `figureSvg`, so an
 * item is solved from the printed drawing rather than from a prose description
 * of it. `FIGURED` lists the situations that have a crop; it is complete.
 *
 * ## Situations
 *
 * The booklet is built out of "Situation N" blocks: one figure plus a few
 * questions that all read off it. A lone question is often unsolvable —
 * "Determine the resultant" means nothing without the situation's figure and
 * given values. So items stay contiguous by situation, each carries the shared
 * wording in `situationText`, and `text` repeats it so the item still stands on
 * its own in a flat list.
 *
 * `situationText` therefore carries only what the booklet prints as text — the
 * given values and the question's own wording. The geometry lives in the
 * attached figure crop, not in prose: describing a 3D drawing in words is both
 * lossy and error-prone, and early attempts to do so produced descriptions that
 * did not reconcile with the printed answer choices.
 */
import type { TopicQuestion } from './topicBanks';

/**
 * Printed key, items 1–176. Index is `number - 1`.
 *
 * Transcribed from the booklet's single-page answer key, which lays the 176
 * answers out in five columns of ten. Ten per line here so the array lines up
 * with the printed rows and can be diffed against a scan by eye.
 *
 * The booklet prints no worked solutions, so this is the whole of the evidence
 * for an answer — the letters are the key, not a summary of one.
 */
export const STATICS_KEY: string[] = [
  'D', 'B', 'A', 'B', 'D', 'C', 'A', 'B', 'D', 'B',
  'B', 'D', 'A', 'B', 'D', 'D', 'A', 'B', 'B', 'A',
  'C', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'D', 'D',
  'B', 'B', 'A', 'B', 'C', 'A', 'A', 'B', 'D', 'B',
  'C', 'B', 'C', 'C', 'B', 'A', 'A', 'A', 'A', 'B',
  'A', 'B', 'A', 'D', 'C', 'C', 'B', 'C', 'A', 'D',
  'D', 'B', 'C', 'A', 'C', 'D', 'A', 'C', 'B', 'C',
  'C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'B', 'C',
  'B', 'C', 'C', 'A', 'B', 'C', 'B', 'A', 'B', 'D',
  'A', 'B', 'B', 'D', 'A', 'A', 'C', 'A', 'C', 'B',
  'D', 'A', 'B', 'B', 'B', 'A', 'C', 'B', 'B', 'B',
  'D', 'B', 'B', 'D', 'D', 'D', 'A', 'D', 'B', 'C',
  'A', 'B', 'D', 'B', 'A', 'C', 'C', 'A', 'A', 'A',
  'C', 'C', 'D', 'A', 'A', 'B', 'C', 'A', 'B', 'D',
  'A', 'D', 'C', 'C', 'C', 'B', 'B', 'D', 'D', 'B',
  'B', 'C', 'A', 'D', 'B', 'B', 'C', 'A', 'A', 'B',
  'A', 'A', 'C', 'B', 'B', 'B', 'B', 'D', 'A', 'C',
  'D', 'B', 'D', 'D', 'D', 'A',
];

/**
 * Shared wording for each "Situation N", transcribed from the booklet.
 *
 * Only what the booklet prints as text: the given values and the situation's
 * own wording. Nothing here describes the drawing — the crop does that, and a
 * prose paraphrase of a 3D drawing is both lossy and easy to get wrong.
 */
const SITUATIONS: Record<number, string> = {
  1: 'A steel tank is to be positioned in an excavation as shown.',
  2:
    'It is desired to remove the spike from the timber by applying force along its horizontal axis. An obstruction $A$ prevents direct access, so that two forces, one 1.6 kN and the other $P$, are applied by cables as shown.',
  3: 'Three forces are applied to the eye bolt as shown.',
  4: 'Refer to the given figure.',
  5:
    'Three forces are acting upon a hook as shown. Given: Forces, $A = 60$ kN, $C = 50$ kN. Angles, $\\alpha = 25^\\circ$, $\\beta = 60^\\circ$.',
  6:
    'Knowing that the tension in cable $AB$ is 1425 N and the tension in cable $AC$ is 2130 N, determine the following:',
  7:
    'The magnitudes of the three forces acting on the plate are $T_1 = 100$ kN, $T_2 = 80$ kN and $T_3 = 50$ kN.',
  8:
    'Refer to the given figure. The resultant of the three forces shown is a counterclockwise couple of magnitude 150 N-m.',
  9: 'Refer to the given figure.',
  10:
    'The bracket is fastened to the girder by means of the two rivets $A$ and $B$ and supports the 2-kN force. Replace this force by a force acting along the centerline between the rivets and a couple. Then redistribute this force and couple by replacing it by two forces, one at $A$ and the other at $B$, and ascertain the forces supported by the rivets.',
  11: 'The cable $AB$ prevents bar $OA$ from rotating clockwise about the pivot $O$.',
  12:
    'The streetlight $A$ is attached to the end of the horizontal boom $ABO$. The light, which weighs 100 N, is subjected to a wind load of 20 N acting in the negative $y$-direction. The forces $P$ and $Q$ represent the tensions in the two cables that are attached at point $B$. The resultant of the four forces shown is a force $R$ acting at point $O$.',
  13: 'The three forces are perpendicular to the triangular plate.',
  14:
    'Refer to the given figure. Given: $a = 1.2$ m, $b = 1.0$ m, $F_1 = 30$ N, $F_2 = 20$ N, $F_3 = 18$ N.',
  15: 'The figure shows the water pressure acting on the sides of a dam that is 20-m long.',
  16:
    'At a certain time during a hurricane, the wind pressure acting on the wall of a high-rise building varies linearly as shown.',
  17: 'A 200-kg crate is being supported as shown in the position below.',
  18:
    'If the block is suspended from the pulley $B$ and the sag of the cord is $d$. Neglect the size of the pulley.',
  19:
    'In the given figure, three spheres each with 2-kg mass and each 350 mm in diameter rest in a box 760 mm wide.',
  20:
    'The masses of the frictionless cylinders $A$ and $B$ are 2.0 kg and 1.0 kg, respectively. The smallest value of the force $P$ that will lift cylinder $A$ off the horizontal surface is 55.5 N.',
  21: 'Refer to the given figure.',
  22:
    'The tripod is subjected to a vertical 2-kN force. The weight of the legs is negligible compared with the applied load.',
  23:
    'Force $P$ is supported by two cables and a bar. Point $A$ lies in the $yz$ plane, and points $B$ and $C$ lie in the $xz$ plane. Given: $P = 3$ kip',
  24:
    'Three cables are used to tether a balloon as shown. Knowing that the tension in cable $AC$ is 444 N.',
  25:
    'A transmission tower is held by three guy wires attached to a pin at $A$ and anchored by bolts at $B$, $C$, and $D$. If the tension in wire $AB$ is 630 lb, determine the following:',
  26:
    'The shear-leg derrick shown in the figure supports a vertical load of $W = 2000$ N applied at $A$. Points $B$, $C$, and $D$ are in the same horizontal plane $A$, $O$, and $D$ are in the $XY$ plane.',
  27:
    'Neglecting the weights of the pulleys, determine the force $T$ required to support the weight $W = 100$ N.',
  28: 'The hoist shown is used in a machine shop to position heavy workpieces in a lathe.',
  29: 'Refer to the given figure.',
  30:
    'The boom supports the two vertical loads. Neglect the size of the collars at $D$ and $B$ and the thickness of the boom.',
  31: 'A 50-kg crate is attached to the trolley-beam system shown.',
  32:
    'The uniform 18-kg bar $OA$ is held in the position shown by the smooth pin at $O$ and the cable $AB$. Given: Length of bar $OA$, $L = 1.5$ m; Distance between supports, $x = 1.2$ m',
  33: 'The wheel-loads (600 lb and 200 lb) on a jeep are given in the figure.',
  34: 'The sign has a mass of 100 kg with center of mass at $G$.',
  35:
    'A 2.4-m boom is held by a ball-and-socket joint at $C$ and by two cables $AD$ and $AE$.',
  36: 'Refer to the given frame below.',
  37: 'Neglecting the weight of the frame.',
  38: 'Neglecting the weight of the frame, find the following:',
  39:
    'Refer to the folding table as shown. Neglect friction and the weights of the members. Given: $a = 0.6$ m; $b = 0.8$ m; $c = 1.2$ m',
  40:
    'The frame supports a suspended weight $W = 40$ lb. Determine the forces on members $ABCD$ and $CEG$.',
  41:
    'Refer to the frame shown in the figure. Given: Weight, $W = 600$ N; $h_1 = 10$ m; $h_2 = 6$ m; $s = 8$ m; $r = 4$ m',
  42: 'Refer to the Pratt roof truss shown.',
  43: 'Refer to the loaded truss below.',
  44:
    'Refer to the Howe roof truss shown. State whether each member is in tension or compression.',
  45: 'Refer to the given truss below. All triangles are isosceles.',
  46: 'Refer to the given figure.',
  47: 'Refer to the given truss. Given: $s = 5$ m; $h = 4$ m',
  48:
    'The roof truss shown in the figure is supported on rollers at $A$ and hinged at $B$. The wind loads are perpendicular to the inclined members. Given: $P_1 = 100$ N; $P_2 = 200$ N; $s = 6$ m; $h = 9$ m.',
  49:
    'The uniform 50-kg plank in the given figure is resting on friction surfaces at $A$ and $B$. The coefficients of static friction are shown in the figure. If a 80-kg man starts walking from $A$ toward $B$, determine the following:',
  50:
    'The top of the 15-kg ladder has a small roller, and at the ground the coefficient of static friction is 0.25. The mass center of the painter is directly below her feet.',
  51: 'The bar $BC$ is supported by a rough floor at $C$ and pin connected at $B$.',
  52:
    'In the figure, two blocks are connected by a solid strut attached to each block with frictionless pins. Given: $\\theta = 60^\\circ$, $\\alpha = 30^\\circ$',
  53:
    'The mass of the van is 2250 kg and the coefficient of static friction between its tires and the road is 0.6. Its front wheels are locked and its rear wheels can turn freely.',
  54:
    'A 40-kg packing crate is pulled by a rope as shown. The coefficient of static friction between the crate and the floor is 0.35. If $\\alpha = 40^\\circ$, determine the following:',
  55:
    'A tool chest has 800 N weight that acts through the midpoint of the chest. The chest is supported by feet at $A$ and rollers at $B$. The surface has a coefficient of friction of 0.3.',
  56:
    'The cable supports the three loads shown. Given: $P_2 = 600$ N and $y_B = 3$ m',
  57:
    'The cable $ABCD$ is held in the position shown by the horizontal force $P$.',
  58:
    'The system of knotted cords shown in the figure support the indicated weights (300 lb and 400 lb).',
  59:
    'A uniform 80-m pipe that weighs 960 kN is supported entirely by a cable $AB$ of negligible weight.',
};

/**
 * Situations that have a cropped figure in `public/images/statics/`.
 * Every situation in this booklet prints a drawing, so the set is the full
 * 1-59. An item whose situation were absent would simply render without a
 * figure.
 */
const FIGURED = new Set<number>(
  Array.from({ length: 59 }, (_, i) => i + 1),
);

/**
 * Wraps a figure crop in the markup `EngineeringFigure` expects.
 *
 * `figureSvg` is injected with `dangerouslySetInnerHTML`, so it must be HTML,
 * not a bare URL — handing it a URL string renders the path as text.
 */
function staticsFigure(n: number): string | undefined {
  if (!FIGURED.has(n)) return undefined;
  const src = `/images/statics/situation-${String(n).padStart(2, '0')}.png`;
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img
    src="${src}"
    alt="Statics Situation ${n} figure"
    class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
  />
</div>`;
}

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
    figureSvg: staticsFigure(situation),
    figureCaption: `Situation ${situation}`,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    /*
     * `STATICS_KEY` is complete for 1–176. A new item outside that range has no
     * key, and silently inheriting the `'A'` fallback would score it wrongly —
     * extend the array with the printed letter first.
     */
    correctAnswer: (STATICS_KEY[number - 1] ?? 'A') as 'A' | 'B' | 'C' | 'D',
    referenceSource: 'Gillesania',
    topicId,
    situation,
    situationText: SITUATIONS[situation],
    solution: {
      summary: 'Printed key only — this booklet carries no worked solutions.',
      steps: [],
      finalAnswer: STATICS_KEY[number - 1] ?? '',
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
  // Situation 6 — items 16–18
  qf(16, 'The x-component of the force (N) exerted by cable AB on the plate at B.',
    ['750', '450', '903', '1125'], 3, 6),
  qf(17, 'The z-component of the force (N) exerted by cable AC on the plate at C.',
    ['1380', '900', '1350', '1718'], 3, 6),
  qf(18, 'The resultant of the two tension (N) cables at A.',
    ['3036', '3117', '3421', '3270'], 3, 6),

  // Situation 7 — items 19–21
  qf(19, 'Replace these forces with a single equivalent force R (kN).',
    ['213', '208', '224', '229'], 3, 7),
  qf(20, 'Find the x - coordinate of the point where the resultant intersects the plate.',
    ['0.708', '0.630', '0.716', '1.289'], 3, 7),
  qf(21, 'Find the y - coordinate of the point where the resultant intersects the plate.',
    ['0.708', '0.630', '0.716', '1.289'], 3, 7),

  // Situation 8 — items 22–24
  qf(22, 'Calculate the magnitude of the force $P_1$ (N).',
    ['31.8', '77.3', '41.6', '49.2'], 3, 8),
  qf(23, 'Calculate the magnitude of the force $P_2$ (N).',
    ['69.2', '17.6', '23.1', '11.5'], 3, 8),
  qf(24, 'Calculate the magnitude of the force $P_3$ (N).',
    ['44.1', '107.1', '57.7', '68.2'], 3, 8),
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

  // Situation 49 — items 144–146
  qe(144, 'Distance $x$ when the plank will start to slide in meters.',
    ['0.58', '2.9', '2.1', '0.91'], 17, 49),
  qe(145, 'Reaction (N) at A.',
    ['776.1', '694.1', '707.9', '1174'], 17, 49),
  qe(146, 'Reaction (N) at B.',
    ['534.4', '597.5', '545.0', '233.3'], 17, 49),
  // Situation 50 — items 147–149
  qe(147, 'Determine the distance $s$ (in meters) to which the 90-kg painter can climb without causing the 4-m ladder to slip at its lower end A.',
    ['1.21', '2.55', '3.22', '0.96'], 18, 50),
  qe(148, 'Determine the reaction at A in N.',
    ['2575', '1082', '1030', '1062'], 18, 50),
  qe(149, 'Determine the reaction at B in kg.',
    ['29.4', '258', '177', '26.3'], 18, 50),

  // Situation 51 — items 150–152
  qe(150, 'If F = 5 kN determine the reaction (kN) at C.',
    ['9.50', '2.64', '2.50', '2.08'], 18, 51),
  qe(151, 'If F = 5 kN determine the reaction (kN) at A.',
    ['9.50', '2.64', '2.50', '2.08'], 18, 51),
  qe(152, 'If F = 2 kN what is the minimum coefficient of static friction for which bar $BC$ will not slip at $C$?',
    ['0.108', '0.215', '0.333', '0.405'], 18, 51),

  // Situation 52 — item 153
  qe(153, 'If the coefficient of friction under each block is 0.25 and B weighs 270 N, find the minimum weight (N) of A to prevent motion.',
    ['600', '800', '500', '700'], 18, 52),
  // Situation 52 — items 154–155
  qe(154, 'Block A weighs 400 N and B weighs 300 N. If $f = 0.20$ under B, compute the minimum coefficient of friction under A to prevent motion.',
    ['0.20', '0.75', '0.50', '0.40'], 19, 52),
  qe(155, 'If $f = 0.30$ under both blocks and A weighs 400 N, find the maximum weight (N) of B that can be started up the incline by applying to A a rightward horizontal force of P 500 N.',
    ['296', '263', '352', '318'], 19, 52),

  // Situation 53 — items 156–158
  qe(156, 'What is the largest value of $\\alpha$ (in degrees) for which it can remain in equilibrium?',
    ['19.8', '24.2', '16.7', '17.4'], 19, 53),
  qe(157, 'What is the corresponding reaction (N) at the rear wheels.',
    ['15,096', '9,058', '5,032', '3,086'], 19, 53),
  qe(158, 'What is the largest value of $\\alpha$ (in degrees) for which the van can remain in equilibrium if it points up the slope?',
    ['16.7', '11.3', '13.5', '19.8'], 19, 53),

  // Situation 54 — items 159–161
  qe(159, 'the magnitude of the force P required to slide the crate.',
    ['139 N', '175 N', '305 N', '151 N'], 19, 54),
  qe(160, 'the magnitude of the force P required to tip the crate.',
    ['139 N', '175 N', '305 N', '151 N'], 19, 54),
  qe(161, 'whether the crate will slide or tip.',
    ['It will slide first', 'It will tip first', 'It will slide and tip at the same time', "Can't determine"], 19, 54),

  // Situation 55 — items 162–164
  qe(162, 'Determine the value of the horizontal force P (N) necessary to cause sliding of the chest to the right.',
    ['210', '171', '120', '223'], 19, 55),
  qe(163, 'Determine the value of the horizontal force P (N) necessary to cause tipping of the chest to the right.',
    ['400', '286', '280', '200'], 19, 55),
  qe(164, 'When P = 150 N, determine the reaction (N) at point A.',
    ['614', '632', '641', '786'], 19, 55),
  // Situation 56 — items 165–167
  qe(165, 'Determine the magnitude of $P_1$ in Newtons.',
    ['160', '320', '950', '520'], 20, 56),
  qe(166, 'Determine the reaction at support E in Newtons.',
    ['800', '1076', '720', '1018'], 20, 56),
  qe(167, 'Find sag $y_B$ in meters.',
    ['3.33', '2.33', '1.69', '2.69'], 20, 56),

  // Situation 57 — items 168–170
  qe(168, 'Determine $P$ in Newtons.',
    ['80.0', '26.7', '120.0', '53.3'], 20, 57),
  qe(169, 'Determine the force (N) in segment $BC$ of the cable.',
    ['66.7', '126.5', '48.1', '89.4'], 20, 57),
  qe(170, 'Determine the force (N) in segment $CD$ of the cable.',
    ['84.3', '113.1', '96.1', '144.2'], 20, 57),

  // Situation 58 — items 171–172
  qe(171, 'Compute the tensile force (lb) in cord D.',
    ['293', '359', '400', '207'], 20, 58),
  qe(172, 'Compute the tensile force (lb) in cord A.',
    ['699', '846', '993', '646'], 20, 58),
  // Situation 58 — item 173
  qe(173, 'Compute the tensile force (lb) in cord B.',
    ['678', '707', '424', '914'], 21, 58),

  // Situation 59 — items 174–176
  qe(174, 'Determine the maximum tensile force (Kn) in the cable.',
    ['832', '768', '600', '960'], 21, 59),
  qe(175, 'Determine the minimum tensile force (Kn) in the cable.',
    ['500', '300', '600', '750'], 21, 59),
  qe(176, 'Determine the total length (m) of the cable.\n\nHint:\n\n$$L=\\int\\sqrt{1+\\left(\\frac{wx}{T_{min}}\\right)^2}\\,dx$$',
    ['86.0', '82.0', '84.0', '71.3'], 21, 59),
];

/** Section: FRAMES. */
export const STAT_FRAMES: TopicQuestion[] = [
  // Situation 36 — items 105–107
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
  // Situation 47 — items 138–140
  qr(138, 'Determine the force (kN) in member BC. Given: $P_1 = 30$ kN and $P_2 = 60$ kN',
    ['75.0', '48.0', '24.0', '37.5'], 17, 47),
  qr(139, 'Determine the force (kN) in member BH. Given: $P_1 = 25$ kN and $P_2 = 50$ kN',
    ['56.3', '50.0', '60.0', '45.0'], 17, 47),
  qr(140, 'If the reaction at support A is 115 kN, determine the force (kN) in member CH. Given: $P_2 = 2P_1$',
    ['73.6', '101.6', '124.1', '92.0'], 17, 47),

  // Situation 48 — items 141–143
  qr(141, 'Determine the reaction at A in N.',
    ['495', '425', '415', '575'], 17, 48),
  qr(142, 'Determine the reaction at E in N.',
    ['550', '425', '532', '488'], 17, 48),
  qr(143, 'Determine the force in member GH in N.',
    ['975', '1122', '842', '631'], 17, 48),
];
