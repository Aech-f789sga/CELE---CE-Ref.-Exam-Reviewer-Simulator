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

/** Situation 11 — lamp post braced by two cables in three dimensions. */
const SITUATION_11 =
  '**Situation 11** — A lamp post is braced by two cables AB and AC to resist a force H at ' +
  'point A.';

/** Situation 12 — cold-formed purlins on a 15° roof slope. */
const SITUATION_12 =
  '**Situation 12** — Purlins spaced at 1.0 m center to center are simply supported on trusses ' +
  'that are 6 m apart. Sag rods are not used to support the purlins.\n\n' +
  'Roof slope $= 15°$\n\n' +
  'Properties of Purlins\n' +
  '$S_x = 6.19 \\times 10^4$ mm$^3$\n' +
  '$S_y = 1.38 \\times 10^4$ mm$^3$\n' +
  'Allowable bending stress $F_b = 165.5$ MPa\n\n' +
  'Loads:\n' +
  'Dead load (applied at the centroid of the section) $= 720$ Pa\n' +
  'Roof live load (applied at the top flange of the purlins) $= 600$ Pa\n\n' +
  'Analyze using ASD.';

/** Situation 13 — mast being raised by a cable and a hoist. */
const SITUATION_13 =
  '**Situation 13** — The assembly shows a weight "W" being lifted.\n\n' +
  'Given: $x_1 = 8$ m   $x_2 = 4.0$ m   $H = 8$ m';

/** Situation 14 — propped cantilever with a uniform load. */
const SITUATION_14 =
  '**Situation 14** — A beam 6 m long, is fixed at the left end and hinged at the right end. ' +
  'It carries a uniformly distributed load of 36 kN/m throughout its length.';

/** Situation 15 — AASHTO Type V prestressed girder. */
const SITUATION_15 =
  '**Situation 15** — The AASHTO Type V girder shown has the following properties:\n\n' +
  'Area $= 7 \\times 10^5$ mm$^2$\n' +
  'Moment of inertia, $I_x = 3.05 \\times 10^{11}$ mm$^4$\n' +
  'Weight of girder $= 16.8$ kN/m\n\n' +
  'The girder is simply supported on a span of 33 m and is pretensioned with 41 strands. ' +
  'At midspan, the layout of the strands is shown in the figure. After 10% loss of prestress ' +
  'at transfer and 15% loss at service loads. The initial prestress force is 7,287 kN.';

export const BESA_PSAD_NOV2025_PART3: Question[] = [
  // ── Situation 11 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q30',
    number: 30,
    pageNumber: 448,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Space Truss — Cable Force by Moment Equilibrium',
    text:
      SITUATION_11 +
      '\n\n**a)** If $H = 2.4$ kN acting along the positive y-axis, what is the resulting ' +
      'force (kN) in cable AB?',
    figureSvg: figure('F11'),
    figureCaption: 'Lamp post at A braced by cables AB and AC under a horizontal force H',
    ...worked('S11A', 448, 448, '$AB = 1.569$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q31',
    number: 31,
    pageNumber: 448,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Space Truss — Cable Force by Ratio and Proportion',
    text:
      SITUATION_11 +
      '\n\n**b)** If $H = 2.4$ kN acting along the positive y-axis, what is the resulting ' +
      'force (kN) in cable AC?',
    figureSvg: figure('F11'),
    figureCaption: 'Lamp post at A braced by cables AB and AC under a horizontal force H',
    ...worked('S11B', 448, 449, '$AC = 2.493$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q32',
    number: 32,
    pageNumber: 449,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Space Truss — Governing Cable Tension',
    text:
      SITUATION_11 +
      '\n\n**c)** Given:\n' +
      'Allowable tension in cable AB $= 4.5$ kN\n' +
      'Allowable tension in cable AC $= 5.5$ kN\n\n' +
      'How much force H (kN) the cables can sustain?',
    figureSvg: figure('F11'),
    figureCaption: 'Lamp post at A braced by cables AB and AC under a horizontal force H',
    ...worked('S11C', 449, 449, '$H = 5.295$ kN (smaller value governs)'),
  },

  // ── Situation 12 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q33',
    number: 33,
    pageNumber: 449,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Purlins — Bending About the Major Axis',
    text:
      SITUATION_12 +
      '\n\n**a)** Calculate the bending stress (MPa) about the major x-axis on the purlins.',
    ...worked('S12A', 449, 450, '$f_{bx} = 92.69$ MPa'),
  },
  {
    id: 'psad-nov2025-besa-q34',
    number: 34,
    pageNumber: 449,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Purlins — Bending About the Minor Axis',
    text: SITUATION_12 + '\n\n**b)** What is the bending stress (MPa) about the minor y-axis of the purlins?',
    ...worked('S12B', 450, 450, '$f_{by} = 162.05$ MPa'),
  },
  {
    id: 'psad-nov2025-besa-q35',
    number: 35,
    pageNumber: 449,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Purlins — Maximum Permissible Spacing',
    text:
      SITUATION_12 +
      '\n\n**c)** To prevent over-stress of the purlins, solve the maximum spacing (in m) center ' +
      'to center.',
    ...worked('S12C', 450, 451, '$S = 0.65$ m'),
  },

  // ── Situation 13 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q36',
    number: 36,
    pageNumber: 451,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Equilibrium — Reaction at the Mast Foot',
    text:
      SITUATION_13 +
      '\n\n**a)** Solve for the resultant force (kN) at B, if $W = 36$ kN. Neglect the weight ' +
      'of the mast.',
    figureSvg: figure('F13'),
    figureCaption: 'Mast BC raised by cable AC with the load W hung at C',
    ...worked('S13A', 451, 452, '$R_B = 60.4$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q37',
    number: 37,
    pageNumber: 451,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Equilibrium — Cable Force',
    text:
      SITUATION_13 +
      '\n\n**b)** Solve for the force (kN) in the cable AC if $W = 36$ kN. Neglect the weight ' +
      'of the mast.',
    figureSvg: figure('F13'),
    figureCaption: 'Mast BC raised by cable AC with the load W hung at C',
    ...worked('S13B', 451, 451, '$AC = 32.50$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q38',
    number: 38,
    pageNumber: 451,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Equilibrium — Maximum Liftable Weight',
    text:
      SITUATION_13 +
      '\n\n**c)** The mast BC weighs 6 kN and the allowable force in cable AC $= 50$ kN, ' +
      'determine the maximum weight W which can be lifted.',
    figureSvg: figure('F13'),
    figureCaption: 'Mast BC raised by cable AC with the load W hung at C',
    ...worked('S13C', 451, 452, '$W = 52.50$ kN'),
  },

  // ── Situation 14 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q39',
    number: 39,
    pageNumber: 452,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Propped Cantilever — Point of Zero Shear',
    text:
      SITUATION_14 +
      '\n\n**a)** Locate the point of zero shear (m) from the right end.',
    ...worked('S14A', 452, 452, '$x = 2.25$ m from the right end'),
  },
  {
    id: 'psad-nov2025-besa-q40',
    number: 40,
    pageNumber: 452,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Propped Cantilever — Maximum Positive Moment',
    text: SITUATION_14 + '\n\n**b)** Compute the maximum positive moment (kN·m).',
    ...worked('S14B', 452, 452, '$M = 91.125$ kN·m'),
  },
  {
    id: 'psad-nov2025-besa-q41',
    number: 41,
    pageNumber: 452,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Propped Cantilever — Location of Maximum Deflection',
    text:
      SITUATION_14 +
      '\n\n**c)** Determine the distance (m) from the left end where deflection is maximum.',
    ...worked('S14C', 452, 453, '3.471 m from the fixed end A'),
  },

  // ── Situation 15 ───────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q42',
    number: 42,
    pageNumber: 453,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Prestressed Girder — Transfer Stress at Supports',
    text:
      SITUATION_15 +
      '\n\n**a)** At the supports the centroid of the strands coincide with the neutral axis of ' +
      'the beam. What is the compressive stress (MPa) at the supports at transfer of the prestress?',
    figureSvg: figure('F15'),
    figureCaption: 'AASHTO Type V girder section with the 41-strand layout at midspan',
    ...worked('S15A', 453, 453, '$\\sigma = 9.4$ MPa'),
  },
  {
    id: 'psad-nov2025-besa-q43',
    number: 43,
    pageNumber: 453,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Prestressed Girder — Service Load Flexural Stress',
    text:
      SITUATION_15 +
      '\n\n**b)** Determine the maximum flexural stress due to service loads as the total stress ' +
      'in tension at midspan is zero.',
    figureSvg: figure('F15'),
    figureCaption: 'AASHTO Type V girder section with the 41-strand layout at midspan',
    ...worked('S15B', 453, 454, '$\\sigma_3 = 23.81$ MPa (compression)'),
  },
  {
    id: 'psad-nov2025-besa-q44',
    number: 44,
    pageNumber: 454,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Prestressed Girder — Required Eccentricity',
    text:
      SITUATION_15 +
      '\n\n**c)** An external moment $M_o$ applied at the supports results to the following ' +
      'stresses at the ends of the beam.\n' +
      'At the top $= 5.34$ MPa tensile stress\n' +
      'At the bottom $= 5.45$ MPa compressive stress\n\n' +
      'Solve the required eccentricity (mm) of the strands from the neutral axis at the support ' +
      'such that the resulting tensile stress is zero. Assume no loss of prestress.',
    figureSvg: figure('F15'),
    figureCaption: 'AASHTO Type V girder section with the 41-strand layout at midspan',
    ...worked('S15C', 454, 454, '$e = 234$ mm below the N.A.'),
  },
];
