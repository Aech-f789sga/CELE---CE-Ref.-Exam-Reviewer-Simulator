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

/** Situation 17 — beam designed for moment, shear and torsion from frame analysis. */
const SITUATION_17 =
  '**Situation 17** — After the frame analysis, the resulting reactions at service condition ' +
  'of a beam are as follows:\n\n' +
  'Dead load:\n' +
  '$M = 220$ kN·m   $V = 255$ kN\n' +
  'Live load:\n' +
  '$M = 130$ kN·m   $V = 104$ kN\n' +
  'Earthquake:\n' +
  '$M = 60$ kN·m   $V = 185$ kN\n\n' +
  'Given:\n' +
  'Beam width $b = 350$ mm\n' +
  "Concrete compressive strength at 28 days, $f'_c = 28$ MPa\n" +
  'Reinforcing steel, main reinforcement: $f_y = 413$ MPa\n' +
  'Stirrups, ties: $f_{yv} = 275$ MPa\n\n' +
  'Strength reduction factor:\n' +
  'For moment: $\\phi = 0.90$\n' +
  'For shear and torsion: $\\phi = 0.75$\n\n' +
  "Allowable concrete shear stress $= 0.17\\sqrt{f'_c}\\,bd$\n" +
  'Shear strength provided by the shear reinforcement:\n' +
  '$V_s = \\dfrac{A_v f_{yv} d}{s}$\n\n' +
  'Ultimate loads: $U = 1.2D + 1.0E + 0.5L$\n' +
  'Steel ratio of balance condition $= 0.029$';

/** Situation 18 — bent hollow shaft under flexure, axial load and torsion. */
const SITUATION_18 =
  '**Situation 18** — The bent shaft is acted upon by the forces as shown.\n\n' +
  'Given:\n' +
  'Outside diameter $= 38$ mm\n' +
  'Thickness of shaft $= 5$ mm';

/** Situation 19 — beam on a hinge supported by a cable through a pulley. */
const SITUATION_19 =
  '**Situation 19** — Beam AC is 6 m long. It is supported by a cable running through a ' +
  'pulley at D.';

/** Situation 20 — sign post under wind pressure, bending and torsion. */
const SITUATION_20 =
  '**Situation 20** — The signage is subjected to 1.44 kPa wind pressure acting on the area ' +
  '$B \\times L$.\n\n' +
  'Given:\n' +
  'Dimension of signage $= B \\times L \\times t = 3$ m $\\times$ 1.5 m $\\times$ 0.25 m\n' +
  'Weight of signage $= 3.2$ kN\n\n' +
  'Dimensions of post:\n' +
  'Outside diameter $D_o = 220$ mm\n' +
  'Inside diameter $D_i = 194$ mm\n' +
  '$H = 6$ m\n' +
  'Weight of the post $= 0.6$ kN/m';

/** Situation 21 — static determinacy of a two-span beam with an internal hinge. */
const SITUATION_21 =
  '**Situation 21** — For the beam shown, a continuous beam A-B-C carries an internal hinge ' +
  'at B, with the ends A and C fixed unless stated otherwise.';

export const BESA_PSAD_MAR2026_PART4: Question[] = [
  // ── Situation 17 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q43',
    number: 43,
    pageNumber: 486,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Beam Design — Effective Depth for a Singly Reinforced Section',
    text:
      SITUATION_17 +
      '\n\n**a)** For a beam to be singly-reinforced, what is the effective beam depth (mm) ' +
      'for a balanced condition?',
    ...worked('S17', 486, 487, '$d = 412$ mm'),
  },
  {
    id: 'psad-mar2026-besa-q44',
    number: 44,
    pageNumber: 486,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Beam Design — Effective Depth to Resist Shear',
    text:
      SITUATION_17 +
      '\n\n**b)** Using 2 sets or 4 legs of 10 mm diameter ties on 100 mm center to center ' +
      'spacing, solve the effective beam depth (mm) required to resist the shear loads.',
    ...worked('S17', 487, 487, '$d = 614$ mm'),
  },
  {
    id: 'psad-mar2026-besa-q45',
    number: 45,
    pageNumber: 486,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Beam Design — Depth Below the Torsion Threshold',
    text:
      SITUATION_17 +
      '\n\n**c)** The beam is to carry a torsional moment of 11 kN·m. What should be the total ' +
      'beam height (mm) such that the effect of torsion can be neglected?\n\n' +
      'Threshold torsion:\n' +
      "$T_{th} = \\dfrac{0.083\\,\\phi\\sqrt{f'_c}\\,A_{cp}^2}{P_{cp}}$",
    ...worked('S17', 487, 487, '$h = 788$ mm'),
  },

  // ── Situation 18 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q46',
    number: 46,
    pageNumber: 487,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Combined Loads — Maximum Flexural Stress',
    text:
      SITUATION_18 +
      '\n\n**a)** Compute the maximum flexural stress (MPa) at the support.',
    figureSvg: figure('S18'),
    figureCaption:
      'Bent hollow shaft in elevation and section, with the 40 N, 70 N and 50 N loads and the applied torque',
    ...worked('S18', 487, 488, '$f_b = 101.9$ MPa'),
  },
  {
    id: 'psad-mar2026-besa-q47',
    number: 47,
    pageNumber: 487,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Combined Loads — Maximum Axial Stress',
    text: SITUATION_18 + '\n\n**b)** Compute the maximum axial stress (MPa).',
    figureSvg: figure('S18'),
    figureCaption:
      'Bent hollow shaft in elevation and section, with the 40 N, 70 N and 50 N loads and the applied torque',
    ...worked('S18', 488, 488, '$f_a = 0.135$ MPa'),
  },
  {
    id: 'psad-mar2026-besa-q48',
    number: 48,
    pageNumber: 487,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Combined Loads — Maximum Torsional Stress',
    text:
      SITUATION_18 +
      '\n\n**c)** The shaft is subjected by a torsional moment of 100 N·m, what must be the ' +
      'maximum torsional stress of the shaft?',
    figureSvg: figure('S18'),
    figureCaption:
      'Bent hollow shaft in elevation and section, with the 40 N, 70 N and 50 N loads and the applied torque',
    ...worked('S18', 488, 488, '$\\tau_{max} = 13.16$ MPa'),
  },

  // ── Situation 19 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q49',
    number: 49,
    pageNumber: 488,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Cables — Maximum Load for an Allowable Tension',
    text:
      SITUATION_19 +
      '\n\n**a)** Refer to Figure (1). The allowable tension in the cable $= 25$ kN. How much ' +
      'is the max load $W$ (kN) which the beam can carry?',
    figureSvg: figure('S19'),
    figureCaption:
      'Figure (1): beam AC on a hinge at A with a cable over the pulley at D. Figure (2): the same beam with the cable anchored at B',
    ...worked('S19', 489, 489, '$W = 31.25$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q50',
    number: 50,
    pageNumber: 488,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Cables — Resultant Reaction at the Hinge',
    text:
      SITUATION_19 +
      '\n\n**b)** In Figure (1), solve the resultant reaction (kN) at the hinged support at A ' +
      'if $W = 35$ kN.',
    figureSvg: figure('S19'),
    figureCaption:
      'Figure (1): beam AC on a hinge at A with a cable over the pulley at D. Figure (2): the same beam with the cable anchored at B',
    ...worked('S19', 489, 490, '$R_A = 25.24$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q51',
    number: 51,
    pageNumber: 488,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Cables — Tension for a Given Load',
    text:
      SITUATION_19 +
      '\n\n**c)** In Figure (1), the load is $W = 35$ kN. Solve the resulting tension (kN) in ' +
      'the cable.',
    figureSvg: figure('S19'),
    figureCaption:
      'Figure (1): beam AC on a hinge at A with a cable over the pulley at D. Figure (2): the same beam with the cable anchored at B',
    ...worked('S19', 490, 490, '$T = 28$ kN'),
  },

  // ── Situation 20 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q52',
    number: 52,
    pageNumber: 489,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Combined Loads — Bending Moment on a Sign Post',
    text: SITUATION_20 + '\n\n**a)** Compute the bending moment about the x-axis.',
    figureSvg: figure('S20'),
    figureCaption: 'Sign post elevation with the signage offset from the post axis, and the plan view',
    ...worked('S20', 490, 490, '$M = 34.02$ kN·m'),
  },
  {
    id: 'psad-mar2026-besa-q53',
    number: 53,
    pageNumber: 489,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Combined Loads — Shear Force on a Sign Post',
    text: SITUATION_20 + '\n\n**b)** Compute the shear force along the y-axis.',
    figureSvg: figure('S20'),
    figureCaption: 'Sign post elevation with the signage offset from the post axis, and the plan view',
    ...worked('S20', 490, 490, '$V = 6.48$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q54',
    number: 54,
    pageNumber: 489,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Combined Loads — Torsional Moment on a Sign Post',
    text: SITUATION_20 + '\n\n**c)** Solve for the maximum torsional moment in the post.',
    figureSvg: figure('S20'),
    figureCaption: 'Sign post elevation with the signage offset from the post axis, and the plan view',
    ...worked('S20', 490, 490, '$T = 9$ kN·m'),
  },

  // ── Situation 21 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q55',
    number: 55,
    pageNumber: 490,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Structural Analysis — Degree of Indeterminacy with an Internal Hinge',
    text:
      SITUATION_21 +
      '\n\n**a)** Determine the determinacy of the beam which has an internal hinge at B and ' +
      'is fixed at both ends A and C.',
    figureSvg: figure('S21'),
    figureCaption: 'Beam A-B-C with an internal hinge at B',
    ...worked('S21', 490, 491, '2nd degree indeterminate'),
  },
  {
    id: 'psad-mar2026-besa-q56',
    number: 56,
    pageNumber: 490,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Structural Analysis — Degree of Indeterminacy Without the Hinge',
    text: SITUATION_21 + '\n\n**b)** Determine the determinacy when the hinge at B is removed.',
    figureSvg: figure('S21'),
    figureCaption: 'Beam A-B-C with an internal hinge at B',
    ...worked('S21', 491, 491, '3rd degree indeterminate'),
  },
  {
    id: 'psad-mar2026-besa-q57',
    number: 57,
    pageNumber: 490,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Structural Analysis — Degree of Indeterminacy with a Hinged End',
    text:
      SITUATION_21 +
      '\n\n**c)** Determine the determinacy when the fixed end at C is replaced with a hinge.',
    figureSvg: figure('S21'),
    figureCaption: 'Beam A-B-C with an internal hinge at B',
    ...worked('S21', 491, 491, '1st degree indeterminate'),
  },
];
