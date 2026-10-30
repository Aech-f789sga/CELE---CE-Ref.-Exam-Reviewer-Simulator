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

/** Situation 22 — three-span beam under dead load and two moving loads. */
const SITUATION_22 =
  '**Situation 22** — Beam A-B-C is supported as shown. It is to be analyzed for the ' +
  'following loads.\n\n' +
  'Dead load $= 15$ kN/m uniformly distributed\n' +
  'Live load $= 2$ moving concentrated loads each 24 kN spaced at 4 m center to center\n\n' +
  'Spans: 8 m each, with an internal hinge at D on the second span.';

/** Situation 23 — 800 mm spiral column checked for slenderness, shear and buckling. */
const SITUATION_23 =
  '**Situation 23** — The diameter of the spiral column is 800 mm.\n\n' +
  'Given:\n' +
  'Main reinforcement $= 16$ of 32 mm bars\n' +
  'Spiral $= 12$ mm diameter bars\n' +
  'Reinforcing steel: $f_y = 413$ MPa for main bars and spirals\n' +
  "Concrete: $f'_c = 34$ MPa\n" +
  'Unsupported height of column $= 3.6$ m\n\n' +
  'Effective length factor:\n' +
  'Bending about x-axis $= 1.2$\n' +
  'Bending about y-axis $= 1.0$\n\n' +
  'Strength reduction factors:\n' +
  'For compression $= 0.65$\n' +
  'For shear $= 0.75$\n\n' +
  'Column shear strength:\n' +
  "$V_c = 0.17\\sqrt{f'_c}\\,bd$\n" +
  '$V_s = \\dfrac{A_v f_y d}{s}$';

/** Situation 24 — wide-flange beam on a 20° incline, bent about both axes. */
const SITUATION_24 =
  '**Situation 24** — A wide flange beam is simply supported on an inclined surface which is ' +
  'at an angle $\\alpha = 20^\\circ$.\n\n' +
  'Beam properties are as follows:\n' +
  'Area, $A = 4{,}735$ mm$^2$\n' +
  'Section modulus: $S_x = 2.74 \\times 10^5$ mm$^3$, $S_y = 0.92 \\times 10^5$ mm$^3$\n' +
  'Plastic modulus: $Z_x = 3.10 \\times 10^5$ mm$^3$, $Z_y = 1.40 \\times 10^5$ mm$^3$\n' +
  'Yield stress, $F_y = 345$ MPa\n\n' +
  'The span of the beam is 8 m.\n' +
  'Dead load, $W_1$ at service condition is 2.8 kN/m.\n' +
  'Resistance factor for flexure, $\\phi = 0.90$\n' +
  'Safety factor for flexure $= 1.67$\n' +
  'Load factors, $U = 1.2D + 1.6L$';

/** Situation 25 — circular column proportioned from an interaction diagram. */
const SITUATION_25 =
  '**Situation 25** — The interaction diagram and the reinforcement layout of a circular ' +
  'column are shown.\n\n' +
  "Concrete: $f'_c = 27.5$ MPa\n" +
  'Reinforcing steel: $f_y = 413$ MPa\n' +
  'Strength reduction factor: $\\phi = 0.90$\n' +
  'Column diameter $= 600$ mm\n' +
  'Concrete cover to center of reinforcement $= 70$ mm';

export const BESA_PSAD_MAR2026_PART5: Question[] = [
  // ── Situation 22 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q58',
    number: 58,
    pageNumber: 491,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Influence Lines — Reaction at B from Dead Load',
    text:
      SITUATION_22 +
      '\n\n**a)** What is the maximum reaction (kN) at support B due to dead load?',
    figureSvg: figure('S22'),
    figureCaption: 'Three-span beam A-B-D-C with an internal hinge at D',
    ...worked('S22', 491, 492, '$R_B = 360$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q59',
    number: 59,
    pageNumber: 491,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Influence Lines — Reaction at B from Moving Loads',
    text:
      SITUATION_22 +
      '\n\n**b)** Compute the maximum reaction (kN) at support B due to live load.',
    figureSvg: figure('S22'),
    figureCaption: 'Three-span beam A-B-D-C with an internal hinge at D',
    ...worked('S22', 492, 492, '$R_B = 48$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q60',
    number: 60,
    pageNumber: 491,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Influence Lines — Midspan Moment from Dead Load',
    text:
      SITUATION_22 +
      '\n\n**c)** Solve the maximum moment (kN·m) at the midspan of span AB due to dead load.',
    figureSvg: figure('S22'),
    figureCaption: 'Three-span beam A-B-D-C with an internal hinge at D',
    ...worked('S22', 492, 492, '$M = 120$ kN·m'),
  },

  // ── Situation 23 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q61',
    number: 61,
    pageNumber: 491,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Columns — Critical Slenderness Ratio',
    text: SITUATION_23 + '\n\n**a)** What is the critical slenderness ratio?',
    ...worked('S23', 492, 492, '$\\dfrac{KL}{r} = 21.6$'),
  },
  {
    id: 'psad-mar2026-besa-q62',
    number: 62,
    pageNumber: 491,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Columns — Design Shear Strength',
    text:
      SITUATION_23 +
      '\n\n**b)** The center to center spacing of the spiral is 75 mm. What is the design shear ' +
      'strength of the column?',
    ...worked('S23', 492, 493, '$\\phi V_n = 679$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q63',
    number: 63,
    pageNumber: 491,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Columns — Critical Buckling Load',
    text:
      SITUATION_23 +
      '\n\n**c)** Which of the following gives the critical buckling load (kN)? The flexural ' +
      'rigidity of the column $= 5 \\times 10^{14}$ N·mm$^2$.',
    ...worked('S23', 493, 493, '$P_{cr} = 2.64 \\times 10^8$ N $= 264{,}000$ kN'),
  },

  // ── Situation 24 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q64',
    number: 64,
    pageNumber: 492,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Beam Design — Live Load by Allowable Strength Design',
    text:
      SITUATION_24 +
      '\n\n**a)** Using the allowable strength design, solve the value of the live load $W_2$ ' +
      '(kN/m) causing moment about the x-axis.',
    figureSvg: figure('S24'),
    figureCaption: 'Wide-flange beam simply supported on a surface inclined at 20°',
    ...worked('S24', 493, 494, '$W_2 = 4.7$ kN/m'),
  },
  {
    id: 'psad-mar2026-besa-q65',
    number: 65,
    pageNumber: 492,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Beam Design — Live Load by LRFD, Strong Axis',
    text:
      SITUATION_24 +
      '\n\n**b)** Using load and resistance factor design, compute the value of the live load ' +
      '$W_2$ (kN/m) causing moment about the x-axis.',
    figureSvg: figure('S24'),
    figureCaption: 'Wide-flange beam simply supported on a surface inclined at 20°',
    ...worked('S24', 494, 494, '$W_2 = 5.9$ kN/m'),
  },
  {
    id: 'psad-mar2026-besa-q66',
    number: 66,
    pageNumber: 492,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Beam Design — Live Load by LRFD, Weak Axis',
    text:
      SITUATION_24 +
      '\n\n**c)** For bending about the y-axis, how much is the maximum live load $W_2$ (kN/m)? ' +
      'Use load and resistance factor design.',
    figureSvg: figure('S24'),
    figureCaption: 'Wide-flange beam simply supported on a surface inclined at 20°',
    ...worked('S24', 494, 494, '$W_2 = 3.9$ kN/m'),
  },

  // ── Situation 25 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q67',
    number: 67,
    pageNumber: 494,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Columns — Moment Capacity from the Interaction Diagram',
    text:
      SITUATION_25 +
      '\n\n**a)** Determine the ultimate moment capacity of the section $M_u$ in kN·m.\n\n' +
      'Given:\n' +
      'Reinforcement, $A_{st} = 12$ of 25 mm diameter\n' +
      'Design axial load $P_u = 2830$ kN',
    ...worked('S25', 494, 495, '$M_u = 630$ kN·m'),
  },
  {
    id: 'psad-mar2026-besa-q68',
    number: 68,
    pageNumber: 494,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Columns — Bar Diameter for a Given Load and Moment',
    text:
      SITUATION_25 +
      '\n\n**b)** Determine the diameter (mm) of reinforcing bars required.\n\n' +
      'Design moment $M_u = 620$ kN·m\n' +
      'Design axial load $P_u = 1850$ kN',
    ...worked('S25', 495, 496, '$d = 25$ mm'),
  },
  {
    id: 'psad-mar2026-besa-q69',
    number: 69,
    pageNumber: 494,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Columns — Bar Size for a Minimum Steel Ratio',
    text:
      SITUATION_25 +
      '\n\n**c)** For the given layout, what is the required size (mm) of reinforcing bars to ' +
      'provide a minimum steel ratio of 3.3%?',
    ...worked('S25', 496, 497, '$d = 31.5$ mm, say $\\mathbf{32}$ mm'),
  },
];
