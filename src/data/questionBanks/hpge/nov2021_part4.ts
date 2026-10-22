import { Question } from '../../../types/exam';
import {
  hpgeNov2021SolutionImages,
  hpgeNov2021SolutionPage,
  hpgeNov2021SolutionPageEnd,
} from '../../hpgeNov2021Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: hpgeNov2021SolutionPage(n),
  pageNumberEnd: hpgeNov2021SolutionPageEnd(n),
  images: hpgeNov2021SolutionImages(n),
});

const SITUATION_10 =
  'Situation 10 — Given the following properties of a three-layered soil from top to bottom.\n\n| Layer | Coefficient of permeability, $k$ (cm/s) | Thickness, $H$ (m) |\n| :---: | :---: | :---: |\n| 1 | $2.1 \\times 10^{-4}$ | 4.0 |\n| 2 | $3.6 \\times 10^{-2}$ | 3.0 |\n| 3 | $4.2 \\times 10^{-5}$ | 5.0 |\n\n';

const SITUATION_11 =
  'Situation 11 — A consolidated drained triaxial shear test conducted on a consolidated clay has the following results:\n\n| Given | Value |\n| :--- | :--- |\n| Chamber confining pressure, $\\sigma_3$ | 240 kPa |\n| Deviator stress, $\\sigma_d$ | 450 kPa |\n\n';

const SITUATION_12 =
  'Situation 12 — The coefficient of permeability below a dam is 3 m/day. The water on the upstream side is 30 meter higher than on the downstream side. To estimate the seepage below the dam, a flow net was graphically drawn such that the number of potential drops, $N_d = 10$ and the number of flow channels $N_f = 4$. The base of the dam is founded 1 m below the ground. Between the heel and the toe of the dam, a distance of 25 meters, there are 8 potential drops.\n\n';

const SITUATION_13 =
  'Situation 13 — A 4-m-diameter circular footing supports a column load of 1800 kN.\n\nAccording to the Boussinesq theory, the vertical stress at a point below the center of a flexible circular area in a semi-infinite, homogeneous, isotropic soil mass due to a uniform load is given by the expression\n\n$p = q\\left(1 - \\dfrac{1}{N}\\right)$\n\nWhere:\n\n$N = \\left(1 + \\left(\\dfrac{r}{z}\\right)^2\\right)^{1.5}$\n\n$q$ = uniform load per unit area at the base of the footing\n\n$r$ = radius of circular area\n\n$z$ = depth of point below the center of the circular area\n\n';

export const HPGE_NOV2021_PART4: Question[] = [
  // Item 40 — Situation 10
  {
    id: 'hpge-nov2021-q40',
    number: 40,
    pageNumber: 302,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 10 — Layered Soil: Equivalent Vertical Permeability',
    text: `${SITUATION_10}Evaluate the following:\n\n40. The equivalent vertical coefficient of permeability in cm/s.`,
    options: [
      { label: 'A', text: '0.000123' },
      { label: 'B', text: '0.000057' },
      { label: 'C', text: '—' },
      { label: 'D', text: '0.000087' },
    ],
    correctAnswer: 'D',
    solution: {
      ...solution(40),
      finalAnswer: '(kz)eq = 0.0000868 cm/s ≈ 0.000087 cm/s (Option D)',
    },
  },

  // Item 41 — Situation 10
  {
    id: 'hpge-nov2021-q41',
    number: 41,
    pageNumber: 302,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 10 — Layered Soil: Vertical Flow Rate',
    text: `${SITUATION_10}Evaluate the following:\n\n41. The estimated flow in the vertical direction per square meter if the hydraulic gradient is 0.50.`,
    options: [
      { label: 'A', text: '1.974 L/hr' },
      { label: 'B', text: '1.562 L/hr' },
      { label: 'C', text: '1.874 L/hr' },
      { label: 'D', text: '1.369 L/hr' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(41), finalAnswer: 'Q = 1562.4 cm³/hr = 1.5624 L/hr (Option B)' },
  },

  // Item 42 — Situation 11
  {
    id: 'hpge-nov2021-q42',
    number: 42,
    pageNumber: 302,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 11 — Triaxial Test: Angle of Friction',
    text: `${SITUATION_11}Evaluate the following:\n\n42. The angle of friction in degrees.`,
    options: [
      { label: 'A', text: '27.9°' },
      { label: 'B', text: '25.7°' },
      { label: 'C', text: '32.1°' },
      { label: 'D', text: '29.4°' },
    ],
    correctAnswer: 'A',
    solution: {
      ...solution(42),
      finalAnswer: 'φ = 27.91° (Option A) · printed solution uses 250/440',
    },
  },

  // Item 43 — Situation 11
  {
    id: 'hpge-nov2021-q43',
    number: 43,
    pageNumber: 302,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 11 — Triaxial Test: Shear Stress at Failure',
    text: `${SITUATION_11}Evaluate the following:\n\n43. The shear stress at the plane of failure in kPa.`,
    options: [
      { label: 'A', text: '194.4' },
      { label: 'B', text: '178.5' },
      { label: 'C', text: '214.3' },
      { label: 'D', text: '152.3' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(43), finalAnswer: 'τf = R cos φ = 220 cos 27.91° = 194.4 kPa (Option A)' },
  },

  // Item 44 — Situation 11
  {
    id: 'hpge-nov2021-q44',
    number: 44,
    pageNumber: 302,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 11 — Triaxial Test: Normal Stress at Maximum Shear',
    text: `${SITUATION_11}Evaluate the following:\n\n44. The normal stress at the plane of maximum shear in kPa.`,
    options: [
      { label: 'A', text: '485' },
      { label: 'B', text: '460' },
      { label: 'C', text: '455' },
      { label: 'D', text: '470' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(44), finalAnswer: 'σA = σ₃ + R = 250 + 220 = 470 kPa (Option D)' },
  },

  // Item 45 — Situation 12
  {
    id: 'hpge-nov2021-q45',
    number: 45,
    pageNumber: 303,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 12 — Dam Seepage: Flow per Meter Width',
    text: `${SITUATION_12}45. Evaluate the seepage flow per meter width of dam, in liters/min.`,
    options: [
      { label: 'A', text: '28' },
      { label: 'B', text: '22' },
      { label: 'C', text: '33' },
      { label: 'D', text: '25' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(45), finalAnswer: 'q = 25 L/min (Option D)' },
  },

  // Item 46 — Situation 12
  {
    id: 'hpge-nov2021-q46',
    number: 46,
    pageNumber: 303,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 12 — Dam Seepage: Uplift Pressure at the Heel',
    text: `${SITUATION_12}46. Determine the uplift pressure at the heel of the dam, in kPa.`,
    options: [
      { label: 'A', text: '265' },
      { label: 'B', text: '185' },
      { label: 'C', text: '169' },
      { label: 'D', text: '174' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(46), finalAnswer: 'Pheel = 264.87 kPa ≈ 265 kPa (Option A)' },
  },

  // Item 47 — Situation 12
  {
    id: 'hpge-nov2021-q47',
    number: 47,
    pageNumber: 303,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 12 — Dam Seepage: Uplift Force',
    text: `${SITUATION_12}47. Determine the uplift force, in kN per meter, per meter length of dam.`,
    options: [
      { label: 'A', text: '3679' },
      { label: 'B', text: '2568' },
      { label: 'C', text: '4258' },
      { label: 'D', text: '1362' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(47), finalAnswer: 'U = 3679 kN per meter (Option A)' },
  },

  // Item 48 — Situation 13
  {
    id: 'hpge-nov2021-q48',
    number: 48,
    pageNumber: 303,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 13 — Circular Footing: Bearing Pressure',
    text: `${SITUATION_13}48. Obtain the bearing pressure exerted by the footing onto the supporting soil, in kPa.`,
    options: [
      { label: 'A', text: '36' },
      { label: 'B', text: '143' },
      { label: 'C', text: '72' },
      { label: 'D', text: '122' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(48), finalAnswer: 'q = 143.24 kPa ≈ 143 kPa (Option B)' },
  },

  // Item 49 — Situation 13
  {
    id: 'hpge-nov2021-q49',
    number: 49,
    pageNumber: 303,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 13 — Circular Footing: Vertical Stress at Depth',
    text: `${SITUATION_13}49. Evaluate the vertical stress at a depth of 6 m below the center of the footing in kPa.`,
    options: [
      { label: 'A', text: '36.52' },
      { label: 'B', text: '5.24' },
      { label: 'C', text: '10.47' },
      { label: 'D', text: '20.94' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(49), finalAnswer: 'p = 20.94 kPa at z = 6 m (Option D)' },
  },

  // Item 50 — Situation 13
  {
    id: 'hpge-nov2021-q50',
    number: 50,
    pageNumber: 303,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 13 — Circular Footing: Depth for One-Tenth Pressure',
    text: `${SITUATION_13}50. Obtain how deep below the footing would the pressure be reduced to 1/10 of the pressure at the base of the footing.`,
    options: [
      { label: 'A', text: '8.52' },
      { label: 'B', text: '6.91' },
      { label: 'C', text: '7.41' },
      { label: 'D', text: '9.24' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(50), finalAnswer: 'z = 7.414 m ≈ 7.41 m (Option C)' },
  },
];
