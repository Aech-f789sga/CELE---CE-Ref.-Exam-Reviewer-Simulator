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

/** Situation 16 — two equal spans, load / shear / moment diagrams. */
const SITUATION_16 =
  '**Situation 16** — A two span beam is simply supported at A, B and C. The beam at ' +
  'figure (b) and the moment diagram at figure (c), correspond to the load diagram at ' +
  'figure (a).\n\n' +
  'Given: Span length, $L = 8$ m\n' +
  'Dead load $= 15$ kN/m\n' +
  'Live load $= 12$ kN/m';

/** Situation 17 — simply supported beam under a triangular load. */
const SITUATION_17 =
  '**Situation 17** — Figures (a), (b) and (c) show the load diagram, the shear diagram and ' +
  'the moment diagram respectively.';

/** Situation 18 — singly reinforced beam design. */
const SITUATION_18 =
  '**Situation 18** — A beam has to be designed for an ultimate moment $M_u = 320$ kN·m. ' +
  'Consider a singly reinforced beam.\n\n' +
  "Given: $f'_c = 28$ MPa\n" +
  'Reinforcing steel, $f_y = 413$ MPa\n' +
  'Concrete cover to centroid of the reinforcement $= 70$ mm\n' +
  'Balanced steel ratio $= 0.029$';

/** Situation 19 — warehouse column buckling. */
const SITUATION_19 =
  '**Situation 19** — The columns in a warehouse are hinged at the top and fixed at the ' +
  'foundation. The column properties are as follows:\n\n' +
  'Section: W 310 mm x 107 kg/m\n' +
  'Area, $A = 13{,}610$ mm$^2$\n' +
  'Radius of gyration: $r_x = 135$ mm, $r_y = 77$ mm\n' +
  'Modulus of elasticity: $E = 200$ GPa\n' +
  'Yield stress: $F_y = 248$ MPa\n' +
  'Column height: $h = 8$ m\n' +
  'Effective length factor:\n' +
  '  $K = 1.0$ for both ends hinged\n' +
  '  $K = 0.8$ for one hinged while the other end is hinged\n' +
  'Sidesway is prevented.\n' +
  'Resistance factor $= 0.90$\n' +
  'Safety factor $= 1.67$';

/** Situation 20 — three weld groups. */
const SITUATION_20 =
  '**Situation 20** — Three welded bracket details are shown, figures (1), (2) and (3).';

/**
 * AISC allowable compressive stress table printed on booklet p. D-460, which
 * item 55 cites. Reproduced as printed (the booklet itself carries a few
 * typographic slips, e.g. Kℓ/r = 29, 75 and 135).
 */
const ALLOWABLE_STRESS_TABLE = [
  '| Kℓ/r | Fa (MPa) | Kℓ/r | Fa (MPa) | Kℓ/r | Fa (MPa) | Kℓ/r | Fa (MPa) |',
  '| --- | --- | --- | --- | --- | --- | --- | --- |',
  ...[
    [1, 146.7, 41, 131.79, 81, 105.13, 121, 69.92],
    [2, 148.42, 42, 131.23, 82, 104.35, 122, 68.92],
    [3, 148.13, 43, 130.67, 83, 103.57, 123, 67.92],
    [4, 147.53, 44, 130.1, 84, 102.79, 124, 66.91],
    [5, 147.53, 45, 129.52, 85, 102.0, 125, 65.89],
    [6, 147.22, 46, 128.94, 86, 101.2, 126, 64.87],
    [7, 146.9, 47, 128.35, 87, 100.4, 127, 63.85],
    [8, 146.58, 48, 127.76, 88, 99.59, 128, 62.86],
    [9, 146.24, 49, 127.16, 89, 98.78, 129, 61.89],
    [10, 145.9, 50, 126.56, 90, 97.96, 130, 60.94],
    [11, 145.55, 51, 125.95, 91, 97.14, 131, 60.01],
    [12, 145.19, 52, 125.33, 92, 96.31, 132, 59.11],
    [13, 144.83, 53, 124.71, 93, 95.48, 133, 58.22],
    [14, 144.45, 54, 124.08, 94, 94.64, 134, 57.36],
    [15, 144.07, 55, 123.45, 95, 93.8, 135, 58.61],
    [16, 143.69, 56, 122.81, 96, 92.95, 136, 55.68],
    [17, 143.29, 57, 122.17, 97, 92.1, 137, 54.07],
    [18, 142.89, 58, 121.52, 98, 91.24, 138, 54.08],
    [19, 142.48, 59, 120.86, 99, 90.37, 139, 53.3],
    [20, 142.06, 60, 120.21, 100, 89.5, 140, 52.54],
    [21, 141.54, 61, 119.54, 101, 88.63, 141, 51.8],
    [22, 141.21, 62, 118.87, 102, 87.75, 142, 51.07],
    [23, 140.77, 63, 118.19, 103, 86.86, 143, 50.36],
    [24, 140.33, 64, 117.51, 104, 85.97, 144, 49.67],
    [25, 139.88, 65, 116.83, 105, 85.07, 145, 48.98],
    [26, 139.42, 66, 116.13, 106, 84.17, 146, 48.31],
    [27, 138.95, 67, 115.44, 107, 83.26, 147, 47.68],
    [28, 138.49, 68, 114.73, 108, 82.34, 148, 47.02],
    [29, 139.01, 69, 114.03, 109, 81.42, 149, 46.39],
    [30, 137.53, 70, 113.31, 110, 80.5, 150, 45.77],
    [31, 137.04, 71, 112.6, 111, 79.66, 151, 45.17],
    [32, 136.54, 72, 111.67, 112, 78.63, 152, 44.58],
    [33, 136.04, 73, 111.14, 113, 77.68, 153, 43.99],
    [34, 135.53, 74, 110.41, 114, 76.73, 154, 43.43],
    [35, 135.01, 75, 100.67, 115, 75.78, 155, 42.87],
    [36, 134.49, 76, 108.93, 116, 74.82, 156, 42.32],
    [37, 133.96, 77, 108.18, 117, 73.85, 157, 41.76],
    [38, 133.43, 78, 107.42, 118, 72.88, 158, 41.26],
    [39, 132.69, 79, 106.66, 119, 71.9, 159, 40.74],
    [40, 132.34, 80, 105.9, 120, 70.91, 160, 40.28],
  ].map((row) => `| ${row.join(' | ')} |`),
].join('\n');

export const BESA_PSAD_NOV2025_PART4: Question[] = [
  // ── Situation 16 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q45',
    number: 45,
    pageNumber: 455,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Continuous Beam — Maximum Positive Moment',
    text:
      SITUATION_16 +
      '\n\n**a)** Due to live load only at span AB, what is the resulting maximum positive ' +
      'moment (kN·m)?',
    figureSvg: figure('F16'),
    figureCaption: 'Two-span beam with its shear diagram and moment diagram',
    ...worked('S16A', 455, 455, '$M = 73.5$ kN·m'),
  },
  {
    id: 'psad-nov2025-besa-q46',
    number: 46,
    pageNumber: 455,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Continuous Beam — Reaction at the Outer Support',
    text:
      SITUATION_16 +
      '\n\n**b)** Compute the resulting reaction (kN) at the support at C due to live load at ' +
      'span BC only.',
    figureSvg: figure('F16'),
    figureCaption: 'Two-span beam with its shear diagram and moment diagram',
    ...worked('S16B', 455, 455, '$R_C = 42$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q47',
    number: 47,
    pageNumber: 455,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Continuous Beam — Maximum Shear at the Interior Support',
    text:
      SITUATION_16 +
      '\n\n**c)** Due to dead load and live load, determine the maximum shear (kN) at the end B ' +
      'of span AB.',
    figureSvg: figure('F16'),
    figureCaption: 'Two-span beam with its shear diagram and moment diagram',
    ...worked('S16C', 455, 456, '$V_B = 135$ kN'),
  },

  // ── Situation 17 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q48',
    number: 48,
    pageNumber: 456,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Triangular Load — Maximum Intensity from Reactions',
    text:
      SITUATION_17 +
      '\n\n**a)** From figure (a), $R_A = 9$ kN, $R_B = 18$ kN, $L = 6$ m.\n' +
      'Compute the maximum intensity of the load $w$ (kN/m).',
    figureSvg: figure('F17'),
    figureCaption: 'Triangular load diagram with its shear and moment diagrams',
    ...worked('S17A', 456, 456, '$w = 9$ kN/m'),
  },
  {
    id: 'psad-nov2025-besa-q49',
    number: 49,
    pageNumber: 456,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Triangular Load — Intensity from a Known Moment',
    text:
      SITUATION_17 +
      '\n\n**b)** Given: $x = 5.2$ m, $L = 9$ m\n' +
      'Solve for the intensity of $w$ (kN/m) when $M = 65$ kN·m at $x = 5.2$ m.',
    figureSvg: figure('F17'),
    figureCaption: 'Triangular load diagram with its shear and moment diagrams',
    ...worked('S17B', 456, 457, '$w = 37.79$ kN/m'),
  },
  {
    id: 'psad-nov2025-besa-q50',
    number: 50,
    pageNumber: 457,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Triangular Load — Fixed-End Moment',
    text:
      SITUATION_17 +
      '\n\n**c)** Given: $M_1 = -12.8$ kN·m, $L = 8$ m\n' +
      'Find the value of $M_2$.',
    figureSvg: figure('F17'),
    figureCaption: 'Triangular load diagram with its shear and moment diagrams',
    ...worked('S17C', 457, 457, '$M_2 = 19.2$ kN·m'),
  },

  // ── Situation 18 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q51',
    number: 51,
    pageNumber: 457,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'RC Beam — Balanced Section Depth',
    text:
      SITUATION_18 +
      '\n\n**a)** At balanced condition, determine the required total beam height if the width ' +
      'of the beam is 250 mm.',
    ...worked('S18A', 457, 457, 'Total beam height $= 470$ mm'),
  },
  {
    id: 'psad-nov2025-besa-q52',
    number: 52,
    pageNumber: 457,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'RC Beam — Minimum Bar Count',
    text:
      SITUATION_18 +
      '\n\n**b)** Find the minimum number of 25 mm diameter bars if the beam dimensions are ' +
      '300 mm x 600 mm ($b \\times h$).',
    ...worked('S18B', 457, 458, 'Use 4 – 25 mm bars'),
  },
  {
    id: 'psad-nov2025-besa-q53',
    number: 53,
    pageNumber: 458,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'RC Beam — Nominal Bending Strength',
    text:
      SITUATION_18 +
      '\n\n**c)** Given: Beam dimension 300 mm x 500 mm\n' +
      'Reinforcement:\n' +
      'At the compression side $= 3$ – 20 mm ø bars\n' +
      'At the tension side $= 6$ of 20 mm ø bars\n\n' +
      'What is the nominal bending strength (kN·m) of the beam?',
    ...worked('S18C', 458, 458, '$M_n = 236$ kN·m'),
  },

  // ── Situation 19 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q54',
    number: 54,
    pageNumber: 459,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Steel Column — Elastic Critical Buckling Load',
    text:
      SITUATION_19 +
      '\n\n**a)** The elastic stress at which initial buckling occurs is computed as:\n\n' +
      '$F_e = \\dfrac{\\pi^2 E}{(KL/r)^2}$\n\n' +
      'How much is the critical buckling load?',
    ...worked('S19A', 459, 459, '$P_{cr} = 3888.5$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q55',
    number: 55,
    pageNumber: 459,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Steel Column — Axial Compressive Strength',
    text:
      SITUATION_19 +
      '\n\n**b)** The table gives the nominal axial compressive stress at different value of the ' +
      'slenderness ratio. Compute the axial compressive strength (kN) at service load.\n\n' +
      '**ALLOWABLE STRESS FOR COMPRESSION MEMBERS OF 248 MPa SPECIFIED YIELD STRESS**\n\n' +
      ALLOWABLE_STRESS_TABLE +
      '\n\n*Reproduced as printed on booklet p. D-460. Only the $K\\ell/r = 83$ and 84 rows ' +
      'are needed for this item.*',
    ...worked('S19B', 459, 459, '$P = 1565$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q56',
    number: 56,
    pageNumber: 459,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Steel Column — Slenderness Ratio with Mid-Height Bracing',
    text:
      SITUATION_19 +
      '\n\n**c)** To prevent failure due to buckling, the columns are pinned at mid-height for ' +
      'bending about the y-axis. Calculate the resulting slenderness ratio.',
    ...worked('S19C', 459, 459, '$KL/r_y = 41.6$'),
  },

  // ── Situation 20 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q57',
    number: 57,
    pageNumber: 461,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Welded Connection — Polar Moment of Inertia',
    text:
      SITUATION_20 +
      '\n\n**a)** From figure (1):\n' +
      'Given: $S_1 = 150$ mm, $S_2 = 250$ mm\n\n' +
      'Compute the polar moment of inertia (mm$^4$) of the welds.',
    figureSvg: figure('F20'),
    figureCaption: 'Weld groups for figures (1), (2) and (3)',
    ...worked('S20A', 461, 462, '$J = 7.33 \\times 10^6$ mm$^4$'),
  },
  {
    id: 'psad-nov2025-besa-q58',
    number: 58,
    pageNumber: 462,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Welded Connection — Resultant Shear Stress at A',
    text:
      SITUATION_20 +
      '\n\n**b)** From figure (2):\n' +
      'Given: $P = 8$ kN   $L = 200$ mm\n' +
      '$a = 50$ mm, $b = 150$ mm, $c = 400$ mm\n\n' +
      'The centroidal y-axis of the welds is at 50 mm from the edge. The polar moment of ' +
      'inertia of the welds is $J = 23.3 \\times 10^6$ mm$^4$. Calculate the shear stress (MPa) ' +
      'at point A.',
    figureSvg: figure('F20'),
    figureCaption: 'Weld groups for figures (1), (2) and (3)',
    ...worked('S20B', 462, 463, '$R = 24.36$ MPa'),
  },
  {
    id: 'psad-nov2025-besa-q59',
    number: 59,
    pageNumber: 463,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Welded Connection — Design Strength',
    text:
      SITUATION_20 +
      '\n\n**c)** From figure (3):\n' +
      'Given: $d = 200$ mm   $e = 300$ mm\n' +
      'Weld size $= 5$ mm\n' +
      'Weld tensile strength $= 290$ MPa\n' +
      'Resistance factor $\\phi = 0.75$\n\n' +
      'How much is the design strength of the connection ($T$) in kN?',
    figureSvg: figure('F20'),
    figureCaption: 'Weld groups for figures (1), (2) and (3)',
    ...worked('S20C', 463, 463, '$T = 538.2$ kN'),
  },
];
