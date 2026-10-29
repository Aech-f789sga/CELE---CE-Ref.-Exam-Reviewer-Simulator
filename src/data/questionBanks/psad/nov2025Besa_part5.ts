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

/** Situation 21 — rectangular combined footing under two column loads. */
const SITUATION_21 =
  '**Situation 21** — A rectangular footing carries the following loads at service conditions.\n\n' +
  'Given: Dimensions: $a = 0.40$ m   $b = 3.5$ m\n' +
  '$c = 0.40$ m   $W = 3$ m\n\n' +
  'Effective concrete cover to centroid of reinforcement $= 100$ mm\n' +
  "Concrete, $f'_c = 28$ MPa\n" +
  'Reinforcing steel, $f_y = 413$ MPa\n' +
  'Ultimate load: $U = 1.2$ DL $+ 1.6$ LL\n' +
  'Strength reduction factor for shear: $\\phi = 0.75$\n\n' +
  '| Column loads | DL (kN) | LL (kN) |\n' +
  '| --- | --- | --- |\n' +
  '| A | 390 | 285 |\n' +
  '| B | 670 | 390 |';

/** Situation 22 — spirally reinforced column designed with an interaction diagram. */
const SITUATION_22 =
  '**Situation 22** — Given:\n\n' +
  '$K_n = 0.40$ and $P_n = 0.18$, the steel ratio $\\rho_g = 0.03$\n' +
  'Column diameter $= 450$ mm\n' +
  'Concrete clear cover to the spiral $= 40$ mm\n' +
  'Strength reduction factor, $\\phi = 0.75$\n' +
  'Spirals $f_{yv} = 275$ MPa\n\n' +
  'Min. ratio of spiral reinforcements:\n\n' +
  '$\\rho_s = \\dfrac{\\pi (D_c - d_b) A_s}{\\dfrac{\\pi D_c^2}{4} S}$\n\n' +
  'Using the interaction diagram shown,';

/** Situation 23 — 40 mm cube cut by a plane at 30°. */
const SITUATION_23 =
  '**Situation 23** — The block is subjected to a compressive force of $P = 80$ kN. Size of ' +
  'the block is 40 mm x 40 mm. The plane is acting at an angle of 30° from the horizontal.';

/** Situation 24 — determinacy and stability of two bar-and-support frames. */
const SITUATION_24 =
  '**Situation 24** — Bars BC and CE are loaded and supported as shown in the figure.';

export const BESA_PSAD_NOV2025_PART5: Question[] = [
  // ── Situation 21 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q60',
    number: 60,
    pageNumber: 463,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Combined Footing — Length for Uniform Pressure',
    text:
      SITUATION_21 +
      '\n\n**a)** Determine the total length (m) of the footing so that the resulting soil ' +
      'pressure is uniform throughout.',
    figureSvg: figure('F21'),
    figureCaption: 'Rectangular combined footing with columns A and B',
    ...worked('S21A', 463, 464, '$L = 6$ m'),
  },
  {
    id: 'psad-nov2025-besa-q61',
    number: 61,
    pageNumber: 464,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Combined Footing — Punching Shear Thickness',
    text:
      SITUATION_21 +
      '\n\n**b)** The resulting net soil pressure at ultimate load is 196 kPa. Solve for the ' +
      'required total thickness (m) for punching shear stress if the allowable value is 0.88 MPa.',
    figureSvg: figure('F21'),
    figureCaption: 'Rectangular combined footing with columns A and B',
    ...worked('S21B', 464, 464, 'Total thickness $= 0.65$ m'),
  },
  {
    id: 'psad-nov2025-besa-q62',
    number: 62,
    pageNumber: 465,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Combined Footing — Wide Beam Shear Thickness',
    text:
      SITUATION_21 +
      '\n\n**c)** The net solid pressure at ultimate load is 196 kPa. This results to a maximum ' +
      'shear of 1200 kN at the face of column B along its width W. Compute the required total ' +
      'footing thickness for wide beam shear stress if the allowable value is 0.76 MPa.',
    figureSvg: figure('F21'),
    figureCaption: 'Rectangular combined footing with columns A and B',
    ...worked('S21C', 465, 465, 'Total depth $= 0.65$ m'),
  },

  // ── Situation 22 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q63',
    number: 63,
    pageNumber: 465,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Spiral Column — Longitudinal Bar Diameter',
    text:
      SITUATION_22 +
      '\n\n**a)** For the layout of longitudinal reinforcement shown, compute the diameter (mm) ' +
      'of the reinforcing bars to be provided.',
    ...worked('S22A', 466, 466, '$d = 28$ mm ø (8 bars)'),
  },
  {
    id: 'psad-nov2025-besa-q64',
    number: 64,
    pageNumber: 465,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Spiral Column — Design Eccentricity',
    text: SITUATION_22 + '\n\n**b)** Solve the design eccentricity.',
    ...worked('S22B', 467, 467, '$e = 202.5$ mm'),
  },
  {
    id: 'psad-nov2025-besa-q65',
    number: 65,
    pageNumber: 465,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Spiral Column — Spiral Spacing',
    text:
      SITUATION_22 +
      '\n\n**c)** Using 12 mm diameter spirals and a ratio of spiral reinforcement of 0.0216, ' +
      'what is the center spacing (mm) of spirals should be adopted?',
    ...worked('S22C', 467, 467, '$S = 55$ mm'),
  },

  // ── Situation 23 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q66',
    number: 66,
    pageNumber: 467,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Stress on an Inclined Plane — Normal Stress',
    text: SITUATION_23 + '\n\n**a)** How much is the compressive stress (MPa) at section A – A?',
    figureSvg: figure('F23'),
    figureCaption: '40 mm x 40 mm block cut by plane A–A inclined 30° from the horizontal',
    ...worked('S23A', 468, 468, '$S_c = 37.5$ MPa (compressive)'),
  },
  {
    id: 'psad-nov2025-besa-q67',
    number: 67,
    pageNumber: 467,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Stress on an Inclined Plane — Shear Stress',
    text: SITUATION_23 + '\n\n**b)** Calculate the shear stress (MPa) at section A – A.',
    figureSvg: figure('F23'),
    figureCaption: '40 mm x 40 mm block cut by plane A–A inclined 30° from the horizontal',
    ...worked('S23B', 468, 468, '21.65 MPa'),
  },
  {
    id: 'psad-nov2025-besa-q68',
    number: 68,
    pageNumber: 467,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Stress on an Inclined Plane — Allowable Load',
    text:
      SITUATION_23 +
      '\n\n**c)** The maximum shear stress at a plane 45° from the horizontal with allowance ' +
      'shear stress of 24 MPa. Find the load that the block can be subjected to without ' +
      'exceeding the allowable shear stress.',
    figureSvg: figure('F23'),
    figureCaption: '40 mm x 40 mm block cut by plane A–A inclined 30° from the horizontal',
    ...worked('S23C', 468, 468, '$P = 62.71$ kN'),
  },

  // ── Situation 24 — determinacy multiple-choice ─────────────────────────────
  {
    id: 'psad-nov2025-besa-q69',
    number: 69,
    pageNumber: 469,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Determinacy & Stability — Frame Supporting Bar BC',
    text:
      SITUATION_24 +
      '\n\n**1)** Refer to figure (a)\n' +
      'At what condition is the frame supporting bar BC?',
    figureSvg: figure('F24'),
    figureCaption: 'Figure (a) bar BC and figure (b) bar CE with their supports',
    options: [
      { label: 'A', text: 'Geometrically unstable and not in equilibrium' },
      { label: 'B', text: 'Geometrically unstable but in equilibrium' },
      { label: 'C', text: 'Geometrically stable but not in equilibrium' },
      { label: 'D', text: 'Geometrically sable and in equilibrium' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'Bar BC is carried by a roller at D and a rocker at E, so all three reaction ' +
        'components are vertical. Any horizontal thrust has nothing to resist it: the frame is ' +
        'geometrically unstable and cannot be in equilibrium. The booklet marks option (a).',
      steps: [],
      finalAnswer: '(a) Geometrically unstable and not in equilibrium',
      pageNumber: 469,
    },
  },
  {
    id: 'psad-nov2025-besa-q70',
    number: 70,
    pageNumber: 469,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Determinacy & Stability — Frame Supporting Bar CE',
    text:
      SITUATION_24 +
      '\n\n**2)** Refer to figure (b)\n' +
      'At what condition is the frame supporting bar CE?',
    figureSvg: figure('F24'),
    figureCaption: 'Figure (a) bar BC and figure (b) bar CE with their supports',
    options: [
      { label: 'A', text: 'Geometrically stable and in equilibrium' },
      { label: 'B', text: 'Geometrically stable but not in equilibrium' },
      { label: 'C', text: 'Geometrically unstable and not in equilibrium' },
      { label: 'D', text: 'Geometrically unstable but in equilibrium' },
    ],
    correctAnswer: 'C',
    solution: {
      summary:
        'Bar CE sits on two rockers at A and B with a load hung at midspan D, so again every ' +
        'reaction is vertical and the assembly cannot develop a horizontal reaction. The ' +
        'booklet marks option (c).',
      steps: [],
      finalAnswer: '(c) Geometrically unstable and not in equilibrium',
      pageNumber: 469,
    },
  },
  {
    id: 'psad-nov2025-besa-q71',
    number: 71,
    pageNumber: 469,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Determinacy & Stability — Vertical Loads Only',
    text:
      SITUATION_24 +
      '\n\n**3)** Refer to figure (b)\n' +
      'If the structure shown were acted upon by a system of vertical loads, there would be no ' +
      'tenderness to move horizontally. At what condition is the frame supporting bar CE?',
    figureSvg: figure('F24'),
    figureCaption: 'Figure (a) bar BC and figure (b) bar CE with their supports',
    options: [
      { label: 'A', text: 'Unstable equilibrium and statistically indeterminate' },
      { label: 'B', text: 'Stable equilibrium and statistically indeterminate' },
      { label: 'C', text: 'Unstable equilibrium and statistically determinate' },
      { label: 'D', text: 'Stable equilibrium and statistically determinate' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'With vertical loads only there is no tendency to sway, but the three vertical ' +
        'reactions (two rockers plus the load path through D) cannot be found from statics ' +
        'alone, so the frame is in unstable equilibrium and is statically indeterminate. The ' +
        'booklet marks option (a).',
      steps: [],
      finalAnswer: '(a) Unstable equilibrium and statistically indeterminate',
      pageNumber: 469,
    },
  },
];
