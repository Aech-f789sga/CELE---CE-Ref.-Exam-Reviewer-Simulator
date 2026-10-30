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

/**
 * Situation 4 — two-span beam ABC, simply supported at A, B and C, with the
 * shear and moment diagrams printed beside the load diagram.
 */
const SITUATION_4 =
  '**Situation 4** — Beam ABC is simply supported at A, B and C. The shear diagram in ' +
  'figure (b) and the moment diagram in figure (c) correspond to the load diagram shown ' +
  'in figure (a).\n\n' +
  'Given:\n' +
  'Span length, $L = 6$ m\n' +
  'Dead load $= 18$ kN/m\n' +
  'Live load $= 13.8$ kN/m\n\n' +
  'From the printed diagrams:\n' +
  '$V_1 = V_3 = \\dfrac{wL}{16}$   $V_2 = \\dfrac{7wL}{16}$\n' +
  '$M_{max}$ at $x = \\dfrac{7L}{16}$, equal to $\\dfrac{wL^2}{512}$\n' +
  '$M_1$ at support B $= \\dfrac{wL^2}{16}$';

/** Situation 5 — W-section beam of 10 m span checked against three allowable stresses. */
const SITUATION_5 =
  '**Situation 5** — A simply supported beam spans 10 m.\n\n' +
  'Beam section:\n' +
  'Area, $A = 12{,}710$ mm$^2$\n' +
  'Depth, $d = 410$ mm\n' +
  'Flange width, $b_f = 250$ mm\n' +
  'Flange thickness, $t_f = 17$ mm\n' +
  'Web thickness, $t_w = 10$ mm\n' +
  'Moment of inertia, $I_x = 397 \\times 10^6$ mm$^4$\n' +
  'Moment of inertia, $I_y = 49 \\times 10^6$ mm$^4$\n' +
  '$F_y = 248$ MPa   $F_v = 99$ MPa   $F_b = 148$ MPa\n\n' +
  'The total dead load on the beam is 15 kN/m.\n\n' +
  'Determine the maximum concentrated load at midspan that the beam can safely carry ' +
  'without exceeding the following stresses:';

/** Situation 6 — welded steel column base plate on a concrete pedestal, 6 anchor bolts. */
const SITUATION_6 =
  '**Situation 6** — The steel column is welded to the base plate which bears on a concrete ' +
  'pedestal. The base plate is anchored to the pedestal by 6 bolts as shown.\n\n' +
  'Column properties:\n' +
  'Depth, $d = 305$ mm\n' +
  'Flange width, $b_f = 200$ mm\n' +
  'Flange thickness, $t_f = 12$ mm\n' +
  'Web thickness, $t_w = 7.5$ mm\n\n' +
  'Base plate section: $N \\times B = 450$ mm $\\times$ 300 mm\n\n' +
  'The base plate is assumed fixed along the edges of a rectangle whose sides are ' +
  '$0.80\\,b_f$ and $0.95\\,d$ with the minimum value not less than 92 mm.';

export const BESA_PSAD_MAR2026_PART1: Question[] = [
  // ── Situation 1 (multiple choice) ──────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q1',
    number: 1,
    pageNumber: 470,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Mechanical Properties of Materials — Shear Deformation',
    text: 'Resistance to shear deformation.',
    options: [
      { label: 'A', text: 'Modulus of Rigidity' },
      { label: 'B', text: 'Modulus of Rupture' },
      { label: 'C', text: "Poisson's Ratio" },
      { label: 'D', text: 'Modulus of Elasticity' },
    ],
    correctAnswer: 'A',
    referenceSource: 'Besavilla',
    solution: {
      summary:
        'The modulus of rigidity — also called the shear modulus, $G$ — is the ratio of the ' +
        'shear stress to the shear strain, $G = \\dfrac{\\tau}{\\gamma}$. It measures how ' +
        'strongly a material resists a change of shape at constant volume, which is what ' +
        '"resistance to shear deformation" means.',
      steps: [],
      finalAnswer: 'Modulus of Rigidity — Option A',
      pageNumber: 470,
    },
  },

  // ── Situation 2 (multiple choice) ──────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q2',
    number: 2,
    pageNumber: 470,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Mechanical Properties of Materials — Normal Deformation',
    text: 'Resistance to normal deformation such as elongation or shortening.',
    options: [
      { label: 'A', text: "Poisson's Ratio" },
      { label: 'B', text: 'Modulus of Rigidity' },
      { label: 'C', text: 'Modulus of Rupture' },
      { label: 'D', text: 'Modulus of Elasticity' },
    ],
    correctAnswer: 'D',
    referenceSource: 'Besavilla',
    solution: {
      summary:
        'The modulus of elasticity, $E = \\dfrac{\\sigma}{\\varepsilon}$, is the slope of the ' +
        'stress–strain curve in the elastic range, so it measures resistance to elongation or ' +
        'shortening under a normal (axial) stress. Poisson\'s ratio is the lateral response, ' +
        'the modulus of rigidity is the shear response, and the modulus of rupture is a ' +
        'bending strength, not a stiffness.',
      steps: [],
      finalAnswer: 'Modulus of Elasticity — Option D',
      pageNumber: 470,
    },
  },

  // ── Situation 3 (multiple choice) ──────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q3',
    number: 3,
    pageNumber: 470,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Mechanical Properties of Materials — Bending Strength',
    text: 'Resistance to bending until it breaks.',
    options: [
      { label: 'A', text: 'Modulus of Rupture' },
      { label: 'B', text: 'Modulus of Elasticity' },
      { label: 'C', text: 'Modulus of Rigidity' },
      { label: 'D', text: "Poisson's Ratio" },
    ],
    correctAnswer: 'A',
    referenceSource: 'Besavilla',
    solution: {
      summary:
        'The modulus of rupture, $f_r$, is the bending stress at which a specimen actually ' +
        'fails — the extreme fibre stress computed from the ultimate moment on the assumption ' +
        'of elastic behaviour. It is a strength, not a stiffness, which is why it answers the ' +
        '"until it breaks" wording.',
      steps: [],
      finalAnswer: 'Modulus of Rupture — Option A',
      pageNumber: 470,
    },
  },

  // ── Situation 4 ────────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q4',
    number: 4,
    pageNumber: 470,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Indeterminate Beams — Reaction from the Shear Diagram',
    text:
      SITUATION_4 +
      '\n\n**a)** Due to live load only at span AB, what is the resulting reaction (kN) at ' +
      'the support at A?',
    figureSvg: figure('S04'),
    figureCaption:
      'Load diagram (a), shear diagram (b) and moment diagram (c) for the two-span beam ABC',
    ...worked('S04', 470, 471, '$R_A = 36.2$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q5',
    number: 5,
    pageNumber: 470,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Indeterminate Beams — Reaction at the Far Support',
    text:
      SITUATION_4 +
      '\n\n**b)** Compute the resulting reaction (kN) at the support at C due to live load ' +
      'at span AB only.',
    figureSvg: figure('S04'),
    figureCaption:
      'Load diagram (a), shear diagram (b) and moment diagram (c) for the two-span beam ABC',
    ...worked('S04', 471, 471, '$R_C = 5.18$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q6',
    number: 6,
    pageNumber: 470,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Indeterminate Beams — Maximum Interior Reaction',
    text:
      SITUATION_4 +
      '\n\n**c)** Due to dead load and live load, how much is the maximum reaction at the ' +
      'support at B?',
    figureSvg: figure('S04'),
    figureCaption:
      'Load diagram (a), shear diagram (b) and moment diagram (c) for the two-span beam ABC',
    ...worked('S04', 471, 471, '$R_B = 238.5$ kN'),
  },

  // ── Situation 5 ────────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q7',
    number: 7,
    pageNumber: 471,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Beam Design — Allowable Flexural Stress',
    text: SITUATION_5 + '\n\n**a)** Allowable flexural stress.',
    ...worked('S05', 471, 471, '$M = 286.6$ kN·m, $P = 39.6$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q8',
    number: 8,
    pageNumber: 471,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Beam Design — Allowable Web Shear Stress',
    text: SITUATION_5 + '\n\n**b)** Allowable web shear stress.',
    ...worked('S05', 472, 472, '$V = 405.9$ kN, $P = 661.8$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q9',
    number: 9,
    pageNumber: 471,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Beam Design — Allowable Horizontal Shear Stress',
    text: SITUATION_5 + '\n\n**c)** Allowable horizontal shear stress.',
    ...worked('S05', 472, 472, '$V = 388.43$ kN, $P = 626.9$ kN'),
  },

  // ── Situation 6 ────────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q10',
    number: 10,
    pageNumber: 472,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Steel Base Plates — Required Plate Thickness',
    text:
      SITUATION_6 +
      '\n\n**a)** Compute the required thickness of the base plate in mm based on the ' +
      'following: service load $P = 720$ kN, allowable plate bending stress ' +
      '$F_b = 186$ MPa.',
    figureSvg: figure('S06'),
    figureCaption:
      'Base plate plan with the fixed-edge rectangle 0.80bf × 0.95d, and the column elevation on the pedestal',
    ...worked('S06', 472, 473, '$t = 24$ mm'),
  },
  {
    id: 'psad-mar2026-besa-q11',
    number: 11,
    pageNumber: 472,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Anchor Bolts — Diameter for Allowable Shear',
    text:
      SITUATION_6 +
      '\n\n**b)** The unfactored lateral force $H = 220$ kN. Calculate the diameter (mm) of ' +
      'the smallest bolt to be used based on an allowable bolt shear stress of 145 MPa.',
    figureSvg: figure('S06'),
    figureCaption:
      'Base plate plan with the fixed-edge rectangle 0.80bf × 0.95d, and the column elevation on the pedestal',
    ...worked('S06', 473, 473, '$d = 16$ mm'),
  },
  {
    id: 'psad-mar2026-besa-q12',
    number: 12,
    pageNumber: 472,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Anchor Bolts — Lateral Load by LRFD',
    text:
      SITUATION_6 +
      '\n\n**c)** The anchor bolts are 28 mm in diameter. Using load and resistance factor ' +
      'design (LRFD), solve the maximum lateral load $H$ which the anchor bolts can be ' +
      'subjected to. Bolt yield stress $= 400$ MPa, resistance factor for shear $= 0.75$.',
    figureSvg: figure('S06'),
    figureCaption:
      'Base plate plan with the fixed-edge rectangle 0.80bf × 0.95d, and the column elevation on the pedestal',
    ...worked('S06', 473, 474, '$H = 1108.35$ kN'),
  },
];
