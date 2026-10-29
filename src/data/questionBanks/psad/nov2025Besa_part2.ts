import { Question } from '../../../types/exam';
import {
  besaNov2025Figure,
  besaNov2025SolutionImages,
} from '../../besaNov2025Images';

/** Worked-solution item: no choices, scanned solution revealed on demand. */
const worked = (key: string, page: number, pageEnd: number, answer: string) => ({
  options: [] as Question['options'],
  correctAnswer: 'A' as const,
  workedSolution: true,
  solution: {
    summary: '',
    steps: [],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: besaNov2025SolutionImages(key),
  },
});

const figure = (key: string) => besaNov2025Figure(key);

/** Situation 6 — three identical cylinders stacked in a bin. */
const SITUATION_6 =
  '**Situation 6** — A bin holds three identical cylinders each weighing 400 N and a diameter ' +
  'of 500 mm. The width of the bin is 800 mm.';

/** Situation 7 — roof truss with tension cables and double-angle verticals. */
const SITUATION_7 =
  '**Situation 7** — The diagonal members of a truss consists of 25 mm diameter tension cables. ' +
  'The vertical members are of double angles. The top and bottom chords are of wide tee sections.\n\n' +
  'Given: $S = 3$ m   $h = 4$ m';

/** Situation 9 — influence line for member GH of a bridge truss. */
const SITUATION_9 =
  '**Situation 9** — The influence line for member GH of a truss supporting a bridge deck is ' +
  'shown.\n\n' +
  'Given: $h = 4.3$ m   $S = 4.3$ m\n\n' +
  'Design live loads applied at the bottom chord are as follows:\n' +
  'Lane load $= 9.34$ kN/m\n' +
  'Truck loads $= 2$ loads, 35 kN and 145 kN spaced at 4.3 m\n' +
  'Tandem load $= 2$ loads, 108 kN each space at 1.2 m';

/** Situation 10 — simply supported W410 x 100 beam. */
const SITUATION_10 =
  '**Situation 10** — A wide flange beam with dimensions as shown is simply supported on a ' +
  'span $L = 12$ m.\n\n' +
  'Beam Properties:\n' +
  'Section W 410 x 100 (mm x kg/m)\n' +
  'Area $= 12{,}710$ mm$^2$\n' +
  '$I_x = 3.95 \\times 10^8$ mm$^4$\n' +
  '$S_x = 0.49 \\times 10^6$ mm$^3$\n' +
  '$F_y = 248$ MPa\n\n' +
  'The beam carries a superimposed uniformly distributed load of 18 kN/m and a concentrated ' +
  'live load at midspan.\n\n' +
  'Considering bending about the x-axis,\n' +
  'Load combination, $U = 1.2$ DL $+ 1.6$ LL\n' +
  'Resistance factor ø:\n' +
  '  For flexure $= 0.90$\n' +
  '  For shear $= 0.75$';

export const BESA_PSAD_NOV2025_PART2: Question[] = [
  // ── Situation 6 ────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q15',
    number: 15,
    pageNumber: 442,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Statics — Stacked Cylinders in a Bin',
    text: SITUATION_6 + '\n\n**a)** What is the surface reaction (N) at point F?',
    figureSvg: figure('F06'),
    figureCaption: 'Three 500 mm cylinders stacked in an 800 mm wide bin',
    ...worked('S06A', 443, 443, '$F = 1200$ N'),
  },
  {
    id: 'psad-nov2025-besa-q16',
    number: 16,
    pageNumber: 442,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Statics — Contact Force Between Cylinders',
    text: SITUATION_6 + '\n\n**b)** What is the force at the point of contact A?',
    figureSvg: figure('F06'),
    figureCaption: 'Three 500 mm cylinders stacked in an 800 mm wide bin',
    ...worked('S06B', 443, 443, '$R_A = 500$ N'),
  },
  {
    id: 'psad-nov2025-besa-q17',
    number: 17,
    pageNumber: 442,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Statics — Friction Force at the Bin Wall',
    text:
      SITUATION_6 +
      '\n\n**c)** The coefficient of friction at point E is 0.15, what is the resulting friction ' +
      'force (N) at E?',
    figureSvg: figure('F06'),
    figureCaption: 'Three 500 mm cylinders stacked in an 800 mm wide bin',
    ...worked('S06C', 443, 443, '$N = 90$ N'),
  },

  // ── Situation 7 ────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q18',
    number: 18,
    pageNumber: 444,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Truss — Stress in a Cable Diagonal',
    text:
      SITUATION_7 +
      '\n\n**a)** If the truss carries a load $P = 140$ kN at joint H, solve for the resulting ' +
      'stress in member CG.',
    figureSvg: figure('F07'),
    figureCaption: 'Roof truss with 25 mm tension cables, double-angle verticals and tee chords',
    ...worked('S07A', 444, 444, '$\\sigma_{CG} = 87.5$ MPa (tension)'),
  },
  {
    id: 'psad-nov2025-besa-q19',
    number: 19,
    pageNumber: 444,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Truss — Stress in a Double-Angle Vertical',
    text:
      SITUATION_7 +
      '\n\n**b)** Member HC is a double angle with an area of 1858 mm$^2$. The load $P$ at ' +
      'joint H is 140 kN. Compute for the stress (MPa) in member HC.',
    figureSvg: figure('F07'),
    figureCaption: 'Roof truss with 25 mm tension cables, double-angle verticals and tee chords',
    ...worked('S07B', 444, 444, '$\\sigma_{HC} = 75.35$ MPa'),
  },
  {
    id: 'psad-nov2025-besa-q20',
    number: 20,
    pageNumber: 444,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Truss — Allowable Load from Cable Stress',
    text:
      SITUATION_7 +
      '\n\n**c)** If the allowable tensile stress in member GC is 163 MPa, determine the load ' +
      '$P$ at joint H that the truss can carry.',
    figureSvg: figure('F07'),
    figureCaption: 'Roof truss with 25 mm tension cables, double-angle verticals and tee chords',
    ...worked('S07C', 445, 445, '$P = 128$ kN'),
  },

  // ── Situation 8 — conceptual multiple-choice ───────────────────────────────
  {
    id: 'psad-nov2025-besa-q21',
    number: 21,
    pageNumber: 444,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Material Properties — Elastic Constants',
    text:
      '**Situation 8** — Identify the following:\n\n' +
      '**1)** What defines the relation between shearing stress and shearing strain?',
    options: [
      { label: 'A', text: 'Modulus of rigidity' },
      { label: 'B', text: 'Modulus of Rupture' },
      { label: "C", text: "Poisson's Ratio" },
      { label: 'D', text: 'Modulus of Elasticity' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'The shear modulus (modulus of rigidity) $G$ is the constant of proportionality ' +
        'between shearing stress $\\tau$ and shearing strain $\\gamma$: $\\tau = G\\gamma$. ' +
        'The booklet marks option (a) as the answer.',
      steps: [],
      finalAnswer: '(a) Modulus of rigidity',
      pageNumber: 444,
    },
  },
  {
    id: 'psad-nov2025-besa-q22',
    number: 22,
    pageNumber: 445,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Material Properties — Lateral Strain',
    text:
      '**Situation 8** — Identify the following:\n\n' +
      '**2)** What defines the relation between strains induced in the perpendicular directions?',
    options: [
      { label: 'A', text: 'Modulus of Elasticity' },
      { label: 'B', text: 'Modulus of Rigidity' },
      { label: "C", text: "Poisson's Ratio" },
      { label: 'D', text: 'Modulus of Rupture' },
    ],
    correctAnswer: 'C',
    solution: {
      summary:
        "Poisson's ratio $\\nu$ is the ratio of the lateral (perpendicular) strain to the " +
        'longitudinal strain, so it is the constant that links strains in perpendicular ' +
        'directions. The booklet marks option (c) as the answer.',
      steps: [],
      finalAnswer: "(c) Poisson's Ratio",
      pageNumber: 445,
    },
  },
  {
    id: 'psad-nov2025-besa-q23',
    number: 23,
    pageNumber: 445,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Soil Properties — Compaction',
    text:
      '**Situation 8** — Identify the following:\n\n' +
      '**3)** Which property of soil increases with an increase in compaction effort?',
    options: [
      { label: 'A', text: "Poisson's Ratio" },
      { label: 'B', text: 'Modulus of Elasticity' },
      { label: 'C', text: 'Modulus of Rupture' },
      { label: 'D', text: 'Modulus of Rigidity' },
    ],
    correctAnswer: 'B',
    solution: {
      summary:
        'Denser soil is stiffer, so its modulus of elasticity rises with compaction effort. ' +
        'The booklet marks option (b) as the answer.',
      steps: [],
      finalAnswer: '(b) Modulus of Elasticity',
      pageNumber: 445,
    },
  },

  // ── Situation 9 ────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q24',
    number: 24,
    pageNumber: 445,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Influence Lines — Truck Load',
    text:
      SITUATION_9 +
      '\n\n**a)** Find the maximum force (kN) in member GH due to the design truck load.',
    figureSvg: figure('F09'),
    figureCaption: 'Bridge truss and the influence line for member GH',
    ...worked('S09A', 446, 446, '$GH = 189.4$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q25',
    number: 25,
    pageNumber: 446,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Influence Lines — Tandem Load',
    text:
      SITUATION_9 +
      '\n\n**b)** Find the max. force (kN) in member GH due to tandem load.',
    figureSvg: figure('F09'),
    figureCaption: 'Bridge truss and the influence line for member GH',
    ...worked('S09B', 446, 446, '$GH = 231.7$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q26',
    number: 26,
    pageNumber: 446,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Influence Lines — Reaction with Impact',
    text:
      SITUATION_9 +
      '\n\n**c)** How much is the reaction at B (in kN) due to lane load and truck load? ' +
      'Apply 30% impact on truck load.',
    figureSvg: figure('F09'),
    figureCaption: 'Bridge truss and the influence line for member GH',
    ...worked('S09C', 446, 446, '$R_B = 302.95$ kN'),
  },

  // ── Situation 10 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q27',
    number: 27,
    pageNumber: 446,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Steel Beam — Flexural Capacity',
    text:
      SITUATION_10 +
      '\n\n**a)** The nominal flexural strength of the beam $M_n = 528$ kN·m.\n' +
      'How much live load can the beam support?',
    figureSvg: figure('F10'),
    figureCaption: 'W410 x 100 section with web and flange dimensions',
    ...worked('S10A', 447, 447, '$P = 18$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q28',
    number: 28,
    pageNumber: 447,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Steel Beam — Shear Capacity',
    text:
      SITUATION_10 +
      '\n\n**b)** The nominal shear strength of the beam $V_n = 0.6\\,F_y\\,A_w$.\n' +
      'What is the maximum value of this live load?',
    figureSvg: figure('F10'),
    figureCaption: 'W410 x 100 section with web and flange dimensions',
    ...worked('S10B', 447, 447, '$P = 410$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q29',
    number: 29,
    pageNumber: 447,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Steel Beam — Horizontal Shear Stress',
    text:
      SITUATION_10 +
      '\n\n**c)** Given:\nLive load $= 45$ kN\n' +
      'First moment of area $Q = 10.45 \\times 10^5$ mm$^3$\n\n' +
      'What is the horizontal shear stress?',
    figureSvg: figure('F10'),
    figureCaption: 'W410 x 100 section with web and flange dimensions',
    ...worked('S10C', 447, 447, '$S = 34.52$ MPa'),
  },
];
