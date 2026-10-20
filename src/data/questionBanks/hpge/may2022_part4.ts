import { Question } from '../../../types/exam';
import {
  HPGE_MAY_2022_SOLUTION_IMAGES,
  HPGE_MAY_2022_SOLUTION_PAGES,
} from '../../hpgeMay2022Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: HPGE_MAY_2022_SOLUTION_PAGES[n],
  images: HPGE_MAY_2022_SOLUTION_IMAGES[n],
});

const SITUATION_9 =
  'Situation 9 — The field unit weight of a soil sample is 1800 kg/m³ with moisture content of 12%. Given that the unit weight of soil particles is 2300 kg/m³, evaluate the following:';

const SITUATION_10 =
  'Situation 10 — Given the following data of a direct shear test of a soil. The specimen has a diameter of 50 mm and a height of 20 mm.\n\n| Test no. | Normal force (N), P | Shear force (N), V |\n|---|---|---|\n| 1 | 134 | 68.5 |\n| 2 | 206 | 105 |';

const SITUATION_11 =
  'Situation 11 — A clay layer 10 m thick rests beneath a deposit of submerged sand 6 m thick. The top of the sand is located 3 m below the surface of a lake. The saturated unit weight of sand is 25 kN/m³ and of clay 20 kN/m³.';

const SITUATION_12 =
  'Situation 12 — According to the Westergaard Theory, the vertical stress at a point below the surface of a semi-infinite, homogeneous, isotropic soil mass due to a point load Q applied at the ground surface is given by the equation\n\n$$P = \\dfrac{0.318QN}{z^2}$$\n\n$$N = \\dfrac{1}{\\left[1 + 2\\left(\\dfrac{r}{z}\\right)^2\\right]^{1.5}}$$\n\nwhere r is the horizontal distance and z is the vertical distance from the applied load. Given that Q = 2.5 MN.';

export const HPGE_MAY2022_PART4: Question[] = [
  // Item 37 — Situation 9
  {
    id: 'hpge-may2022-q37',
    number: 37,
    pageNumber: 416,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 9 — Soil Phase Relations: Dry Unit Weight',
    text: `${SITUATION_9}\n\n37. The dry unit weight in kN/m³`,
    options: [
      { label: 'A', text: '15.76' },
      { label: 'B', text: '16.21' },
      { label: 'C', text: '15.21' },
      { label: 'D', text: '13.76' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(37), finalAnswer: 'γ_d = 15.77 kN/m³ ≈ 15.76 kN/m³ (Option A)' },
  },

  // Item 38 — Situation 9
  {
    id: 'hpge-may2022-q38',
    number: 38,
    pageNumber: 417,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 9 — Soil Phase Relations: Degree of Saturation',
    text: `${SITUATION_9}\n\n38. The degree of saturation, in percent.`,
    options: [
      { label: 'A', text: '78' },
      { label: 'B', text: '95' },
      { label: 'C', text: '64' },
      { label: 'D', text: '85' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(38), finalAnswer: 'S = 64.04% (Option C)' },
  },

  // Item 39 — Situation 10
  {
    id: 'hpge-may2022-q39',
    number: 39,
    pageNumber: 417,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 10 — Direct Shear Test: Cohesion',
    text: `${SITUATION_10}\n\n39. Determine the cohesion of the soil, in Pa.`,
    options: [
      { label: 'A', text: '290' },
      { label: 'B', text: '280' },
      { label: 'C', text: '310' },
      { label: 'D', text: '340' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(39), finalAnswer: 'c = 0.286 kPa ≈ 290 Pa (Option A)' },
  },

  // Item 40 — Situation 10
  {
    id: 'hpge-may2022-q40',
    number: 40,
    pageNumber: 417,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 10 — Direct Shear Test: Angle of Internal Friction',
    text: `${SITUATION_10}\n\n40. Determine the angle of internal friction, in degrees.`,
    options: [
      { label: 'A', text: '36.5' },
      { label: 'B', text: '22.4' },
      { label: 'C', text: '31.2' },
      { label: 'D', text: '26.9' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(40), finalAnswer: 'φ = 26.89° (Option D)' },
  },

  // Item 41 — Situation 10
  {
    id: 'hpge-may2022-q41',
    number: 41,
    pageNumber: 417,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 10 — Direct Shear Test: Normal Force at a Given Shear',
    text: `${SITUATION_10}\n\n41. What is the value of the normal force (in N) for a shear force of 130 N.`,
    options: [
      { label: 'A', text: '255.3' },
      { label: 'B', text: '289.7' },
      { label: 'C', text: '324.4' },
      { label: 'D', text: '302.1' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(41), finalAnswer: 'P = 255.315 N ≈ 255.3 N (Option A)' },
  },

  // Item 42 — Situation 11
  {
    id: 'hpge-may2022-q42',
    number: 42,
    pageNumber: 417,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 11 — Effective Stress at Mid-Height of a Clay Layer',
    text: `${SITUATION_11}\n\n42. Compute the effective pressure at the mid-height of the clay layer, in kPa.`,
    options: [
      { label: 'A', text: '156.3' },
      { label: 'B', text: '132.9' },
      { label: 'C', text: '137.1' },
      { label: 'D', text: '142.1' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(42), finalAnswer: 'p_e = 279.43 − 137.34 = 142.1 kPa (Option D)' },
  },

  // Item 43 — Situation 11
  {
    id: 'hpge-may2022-q43',
    number: 43,
    pageNumber: 417,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 11 — Pore Water Pressure at Mid-Height of a Clay Layer',
    text: `${SITUATION_11}\n\n43. Compute the pore water pressure at the mid-height of the clay layer, in kPa.`,
    options: [
      { label: 'A', text: '126.8' },
      { label: 'B', text: '132.8' },
      { label: 'C', text: '137.4' },
      { label: 'D', text: '146.9' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(43), finalAnswer: 'p_w = 9.81(5 + 6 + 3) = 137.34 kPa (Option C)' },
  },

  // Item 44 — Situation 11
  {
    id: 'hpge-may2022-q44',
    number: 44,
    pageNumber: 417,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 11 — Total Stress at Mid-Height of a Clay Layer',
    text: `${SITUATION_11}\n\n44. Compute the total pressure at the mid-height of the clay layer, in kPa.`,
    options: [
      { label: 'A', text: '283.1' },
      { label: 'B', text: '274.4' },
      { label: 'C', text: '279.4' },
      { label: 'D', text: '281.8' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(44), finalAnswer: 'p_T = 279.43 kPa (Option C)' },
  },

  // Item 45 — Situation 12
  {
    id: 'hpge-may2022-q45',
    number: 45,
    pageNumber: 418,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 12 — Westergaard Theory: Vertical Stress at 2 m',
    text: `${SITUATION_12}\n\n45. Compute the vertical pressure at a point 2 m below the load.`,
    options: [
      { label: 'A', text: '234.5' },
      { label: 'B', text: '198.8' },
      { label: 'C', text: '145.9' },
      { label: 'D', text: '298.7' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(45), finalAnswer: 'P = 198.75 kPa ≈ 198.8 kPa (Option B)' },
  },

  // Item 46 — Situation 12
  {
    id: 'hpge-may2022-q46',
    number: 46,
    pageNumber: 418,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 12 — Westergaard Theory: Vertical Stress at Twice the Depth',
    text: `${SITUATION_12}\n\n46. Compute the vertical pressure at a point twice the distance in the first part.`,
    options: [
      { label: 'A', text: '89.5' },
      { label: 'B', text: '76.5' },
      { label: 'C', text: '49.7' },
      { label: 'D', text: '67.4' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(46), finalAnswer: 'P = 49.68 kPa ≈ 49.7 kPa (Option C)' },
  },

  // Item 47 — Situation 12
  {
    id: 'hpge-may2022-q47',
    number: 47,
    pageNumber: 418,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 12 — Westergaard Theory: Stress at an Offset Point',
    text: `${SITUATION_12}\n\n47. Compute the vertical pressure at a depth of 6 m and a horizontal distance of 3 m.`,
    options: [
      { label: 'A', text: '12.02' },
      { label: 'B', text: '14.82' },
      { label: 'C', text: '18.43' },
      { label: 'D', text: '20.08' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(47), finalAnswer: 'P = 12.02 kPa (Option A)' },
  },
];
