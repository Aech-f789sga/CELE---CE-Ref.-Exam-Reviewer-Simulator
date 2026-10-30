import { Question } from '../../../types/exam';
import {
  besaMar2026Figure,
  besaMar2026SolutionImages,
} from '../../besaMar2026Images';

/** Worked-solution item: no choices, scanned solution revealed on demand. */
const worked = (key: string, page: number, pageEnd: number, answer: string) => ({
  options: [] as Question['options'],
  correctAnswer: 'A' as const,
  workedSolution: true,
  referenceSource: 'Besavilla' as const,
  solution: {
    summary: '',
    steps: [],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: besaMar2026SolutionImages(key),
  },
});

const figure = (key: string) => besaMar2026Figure(key);

/** Situation 7 — single angle welded to a gusset plate, weld lengths L1 and L2. */
const SITUATION_7 =
  '**Situation 7** — A tension member consists of a single angle welded to a gusset plate.\n\n' +
  'Allowable weld shear stress $= 124$ MPa\n' +
  'Angle section $= 150$ mm $\\times$ 150 mm $\\times$ 12 mm\n' +
  'Weld thickness $= 6$ mm\n\n' +
  'The weld is laid along the two legs of the angle: $L_1$ on the upper leg and $L_2$ on ' +
  'the lower leg, with $T$ applied at 107 mm from the lower weld and 43 mm from the upper ' +
  'one.';

/** Situation 8 — 3 m square footing under axial load and uniaxial moment. */
const SITUATION_8 =
  '**Situation 8** — A footing 3 m wide $\\times$ 3 m long supports a column concentrically.\n\n' +
  'Thickness of footing $= 450$ mm\n' +
  'Effective footing depth $= 350$ mm\n' +
  'Column dimensions $= 400$ mm $\\times$ 400 mm\n' +
  'Concrete: $f\'_c = 35$ MPa\n' +
  'Reinforcing steel: $f_y = 413$ MPa\n\n' +
  'Allowable shear stresses at ultimate loads:\n' +
  'For two-way action shear $= 1.95$ MPa\n' +
  'For wide beam shear $= 0.99$ MPa\n\n' +
  'Strength reduction factor for shear: $\\phi = 0.75$';

/** Situation 9 — cantilever sheet piles retaining earth, with and without water. */
const SITUATION_9 =
  '**Situation 9** — Sheet piles are used to retain earth on one side while preventing water ' +
  'seepage from the other side. Consider the sheet piles to be fixed at C.\n\n' +
  'Earth fill:\n' +
  'Unit weight of soil $= 17.3$ kN/m$^3$\n' +
  'Active earth pressure coefficient $= 1/3$\n' +
  '$H_1 = 3.5$ m\n' +
  '$H_2 = 5.5$ m\n\n' +
  'Sheet piles section modulus: $S_x = 2.76 \\times 10^6$ mm$^3$/m\n\n' +
  'Given: $H_3 = 0$ (no water)';

/** Situation 10 — concrete mix proportioning by the absolute-volume method. */
const SITUATION_10 =
  '**Situation 10** — To proportion concrete with 28-day compressive strength of 35 MPa. ' +
  'The following are specified:\n\n' +
  'Slump $= 50$ mm to 70 mm\n' +
  'Water-cement ratio $= 0.47$\n' +
  'Sp. gr. of cement $= 3.15$\n' +
  'Sp. gr. of coarse aggregate $= 2.7$\n' +
  'Sp. gr. of fine aggregate $= 2.6$\n' +
  'Water (net mixing) $= 160$ kg/m$^3$\n' +
  'Weight of one bag of cement $= 40$ kg';

/** Situation 11 — crate pushed up an inclined plane at constant speed. */
const SITUATION_11 =
  '**Situation 11** — The crate weighing 700 N is to be pushed up the inclined plane at ' +
  'constant speed. The coefficient of kinetic friction between the crate and the plane is ' +
  '0.20. The plane is inclined at an angle $\\theta = 12^\\circ$.';

export const BESA_PSAD_MAR2026_PART2: Question[] = [
  // ── Situation 7 ────────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q13',
    number: 13,
    pageNumber: 474,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Welded Connections — Required Length of Weld L1',
    text:
      SITUATION_7 + '\n\n**a)** When $T = 220$ kN, determine the required length of weld $L_1$.',
    figureSvg: figure('S07'),
    figureCaption:
      'Welded angle-to-gusset detail and the weld-length diagram used to take moments about the weld group',
    ...worked('S07', 474, 474, '$L_1 = 223.35$ mm, say $\\mathbf{224}$ mm'),
  },
  {
    id: 'psad-mar2026-besa-q14',
    number: 14,
    pageNumber: 474,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Welded Connections — Required Length of Weld L2',
    text: SITUATION_7 + '\n\n**b)** Determine the length of weld $L_2$ when $T = 245$ kN.',
    figureSvg: figure('S07'),
    figureCaption:
      'Welded angle-to-gusset detail and the weld-length diagram used to take moments about the weld group',
    ...worked('S07', 474, 475, '$L_2 = 58.52$ mm'),
  },
  {
    id: 'psad-mar2026-besa-q15',
    number: 15,
    pageNumber: 474,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Welded Connections — Weld Shear Stress',
    text:
      SITUATION_7 +
      '\n\n**c)** If $L_1 = L_2 = 200$ mm and the load $T = 100$ kN, what is the maximum ' +
      'yield stress?',
    figureSvg: figure('S07'),
    figureCaption:
      'Welded angle-to-gusset detail and the weld-length diagram used to take moments about the weld group',
    ...worked('S07', 475, 475, '$S_s = 43$ MPa'),
  },

  // ── Situation 8 ────────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q16',
    number: 16,
    pageNumber: 475,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Footings — Wide Beam Shear Stress',
    text:
      SITUATION_8 +
      '\n\n**a)** The net design axial load on the footing $P_u = 1944$ kN. How much is the ' +
      'wide beam shear stress (MPa)?',
    ...worked('S08', 475, 476, '$v = 0.78$ MPa'),
  },
  {
    id: 'psad-mar2026-besa-q17',
    number: 17,
    pageNumber: 475,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Footings — Two-Way Action Shear Capacity',
    text:
      SITUATION_8 +
      '\n\n**b)** Solve the maximum design axial load $P_u$ (kN) that the footing can carry ' +
      'based on two-way action shear.',
    ...worked('S08', 476, 476, '$P_u = 1638$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q18',
    number: 18,
    pageNumber: 475,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Footings — Moment from a Triangular Soil Pressure',
    text:
      SITUATION_8 +
      '\n\n**c)** Due to net axial load and counter-clockwise moment about the y-axis the ' +
      'resulting pressure diagram at the base of the footing is triangular with the ' +
      'following values: $q_1 = 180$ kPa at the toe, $q_2 = 0$ at the heel. Compute the ' +
      'moment (kN·m) causing the given soil pressure.',
    ...worked('S08', 476, 477, '$M = 405$ kN·m'),
  },

  // ── Situation 9 ────────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q19',
    number: 19,
    pageNumber: 477,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Sheet Piles — Maximum Flexural Stress',
    text:
      SITUATION_9 +
      '\n\n**a)** Without the strut and the anchor rod, calculate the maximum flexural stress ' +
      '(MPa) at the sheet piles.',
    figureSvg: figure('S09'),
    figureCaption:
      'Cantilever sheet pile retaining earth, fixed at C, with the strut and horizontal bolt shown',
    ...worked('S09', 477, 477, '$f_b = 254$ MPa'),
  },
  {
    id: 'psad-mar2026-besa-q20',
    number: 20,
    pageNumber: 477,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Sheet Piles — Net Horizontal Force with Water',
    text:
      SITUATION_9 +
      '\n\n**b)** Given: $H_3 = 6$ m. Without the strut and the anchor rod, solve the ' +
      'horizontal force per meter length (kN/m) acting on the piles.',
    figureSvg: figure('S09'),
    figureCaption:
      'Cantilever sheet pile retaining earth, fixed at C, with the strut and horizontal bolt shown',
    ...worked('S09', 477, 478, '$233.55 - 176.40 = 57.2$ kN/m'),
  },
  {
    id: 'psad-mar2026-besa-q21',
    number: 21,
    pageNumber: 477,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Sheet Piles — Anchor Rod Spacing for Zero Deflection',
    text:
      SITUATION_9 +
      '\n\n**c)** The net horizontal force pushing the piles away from the soil equals ' +
      '189.5 kN/m acting at 3.5 m from the fixed end C. The anchor rod is to prevent ' +
      'deflection of the sheet piles at the free end. Using 28 mm diameter anchor rods with ' +
      'allowable tensile stress of 303 MPa, solve the maximum spacing (m) of the anchor rods ' +
      'such that there will be no deflection at the free end of the sheet piles.\n\n' +
      'Maximum deflection at the free end:\n' +
      '$\\delta = \\dfrac{P\\,a^2\\,(3L - a)}{6EI}$\n' +
      'where $a$ is the distance of $P$ from the fixed end and $L$ is the total sheet pile ' +
      'length to the fixed end.',
    figureSvg: figure('S09'),
    figureCaption:
      'Cantilever sheet pile retaining earth, fixed at C, with the strut and horizontal bolt shown',
    ...worked('S09', 478, 478, '$S = 0.98$ m'),
  },

  // ── Situation 10 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q22',
    number: 22,
    pageNumber: 478,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Concrete Mix Design — Cement Content in Bags',
    text:
      SITUATION_10 +
      '\n\n**a)** Compute the quantity of cement in bags needed to produce 5 cu.m of concrete.',
    ...worked('S10', 478, 478, '$42.6$ bags of cement'),
  },
  {
    id: 'psad-mar2026-besa-q23',
    number: 23,
    pageNumber: 478,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Concrete Mix Design — Weight of Dry Sand',
    text:
      SITUATION_10 +
      '\n\n**b)** For every cu.m of concrete, the combined volume of cement, water, coarse ' +
      'aggregate and entrained air is 0.72. What is the required weight of dry sand (kN) for ' +
      'a 12 cu.m of concrete?',
    ...worked('S10', 478, 479, '$85.7$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q24',
    number: 24,
    pageNumber: 478,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Concrete Mix Design — Weight of Coarse Aggregate',
    text:
      SITUATION_10 +
      '\n\n**c)** The volume of coarse aggregate for every cu.m of concrete is 0.43. What is ' +
      'the corresponding weight of coarse aggregate (kN) for the 12 cu.m of concrete?',
    ...worked('S10', 479, 479, '$136.7$ kN'),
  },

  // ── Situation 11 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q25',
    number: 25,
    pageNumber: 479,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Friction — Force at an Angle to the Incline',
    text: SITUATION_11 + '\n\n**a)** Find the force $P$ acting at an angle $\\beta = 24^\\circ$.',
    figureSvg: figure('S11'),
    figureCaption:
      'Crate on a 12° incline with the push P applied at β = 24° to the plane',
    ...worked('S11', 479, 479, '$P = 282.48$ N'),
  },
  {
    id: 'psad-mar2026-besa-q26',
    number: 26,
    pageNumber: 479,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Friction — Force Parallel to the Incline',
    text: SITUATION_11 + '\n\n**b)** Find the force $P$ if it is parallel to the incline plane.',
    figureSvg: figure('S11'),
    figureCaption:
      'Crate on a 12° incline with the push P applied at β = 24° to the plane',
    ...worked('S11', 479, 480, '$P = 282.48$ N'),
  },
  {
    id: 'psad-mar2026-besa-q27',
    number: 27,
    pageNumber: 479,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Friction — Force Parallel to the Ground',
    text:
      SITUATION_11 + '\n\n**c)** Find the force $P$ parallel to the horizontal ground.',
    figureSvg: figure('S11'),
    figureCaption:
      'Crate on a 12° incline with the push P applied at β = 24° to the plane',
    ...worked('S11', 480, 480, '$P = 301.79$ N'),
  },
];
