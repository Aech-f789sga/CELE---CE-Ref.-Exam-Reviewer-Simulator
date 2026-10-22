import { Question } from '../../../types/exam';
import {
  hpgeNov2019Figure,
  hpgeNov2019SolutionImages,
  hpgeNov2019SolutionPage,
  hpgeNov2019SolutionPageEnd,
} from '../../hpgeNov2019Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: hpgeNov2019SolutionPage(n),
  pageNumberEnd: hpgeNov2019SolutionPageEnd(n),
  images: hpgeNov2019SolutionImages(n),
});

/** Situation 1 preamble, shared by items 43–45. */
const SITUATION_1 =
  'Situation 1 — According to Boussinesq Theory, the increase in stress at a depth $z$, of a semi-infinite homogeneous, isotropic soil mass below the corner of a rectangular area whose dimension is $B \\times L$ due to a uniform load of $q$ can be estimated using the formula:\n\n$$\\Delta\\sigma_z = q\\,I_z$$\n\nwhere $I_z = f(m_1, n_1)$\n\n$$m = \\frac{L}{z} \\qquad n = \\frac{B}{z}$$\n\nThe value of $I_z$ can be found from the table below.\n\nA 4 m × 6 m rectangular footing supports a vertical load of 3.0 MN at its center. The soil below the footing consists of 8 m of sand underlain by 4 m of clay.\n\n';

export const HPGE_NOV2019_PART3: Question[] = [
  // Item 31
  {
    id: 'hpge-nov2019-q31',
    number: 31,
    pageNumber: 153,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Consolidated Drained Triaxial Friction Angle',
    text: 'A consolidated drained triaxial test conducted on a consolidated clay specimen has the following results:\n\n| Given | Value |\n| :--- | :--- |\n| Chamber confining pressure | 120 kPa |\n| Total axial stress at failure | 240 kPa |\n\nObtain the angle of internal friction of the specimen.',
    options: [
      { label: 'A', text: '19.5°' },
      { label: 'B', text: '30°' },
      { label: 'C', text: '32.5°' },
      { label: 'D', text: '36°' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(31), finalAnswer: 'φ = 19.47° (Option A)' },
  },

  // Item 32
  {
    id: 'hpge-nov2019-q32',
    number: 32,
    pageNumber: 153,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Friction Angle from Confining and Axial Stress',
    text: 'Given the following results of a triaxial test of a cohesionless soil:\n\n| Given | Value |\n| :--- | :--- |\n| Chamber confining pressure | 80 kPa |\n| Maximum axial stress | 120 |\n\nEvaluate the angle of internal friction of the soil in degrees.',
    options: [
      { label: 'A', text: '20.2' },
      { label: 'B', text: '11.5' },
      { label: 'C', text: '35.1' },
      { label: 'D', text: '25.0' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(32), finalAnswer: 'φ = 11.54° (Option B)' },
  },

  // Item 33
  {
    id: 'hpge-nov2019-q33',
    number: 33,
    pageNumber: 153,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Friction Angle from Failure-Plane Stresses',
    text: 'Given the following data of a triaxial test of a cohesionless soil:\n\n| Given | Value |\n| :--- | :--- |\n| Normal stress at failure plane | 120 kPa |\n| Shear stress at failure plane | 60 kPa |\n\nEvaluate the angle of internal friction of the soil.',
    options: [
      { label: 'A', text: '22.5°' },
      { label: 'B', text: '24°' },
      { label: 'C', text: '30°' },
      { label: 'D', text: '26.6°' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(33), finalAnswer: 'φ = 26.6° (Option D)' },
  },

  // Item 34
  {
    id: 'hpge-nov2019-q34',
    number: 34,
    pageNumber: 153,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Consolidation Settlement from Void Ratio Change',
    text: 'A layer of soft clay having a thickness of 12 m has an initial void ration of 0.90. The layer is subjected to a compressive load applied at the surface reducing the void ratio by one-third. Evaluate the settlement of the layer in meters.',
    options: [
      { label: 'A', text: '1.20' },
      { label: 'B', text: '2.00' },
      { label: 'C', text: '3.79' },
      { label: 'D', text: '1.89' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(34), finalAnswer: 'ΔH = 1.89 m (Option D)' },
  },

  // Item 35
  {
    id: 'hpge-nov2019-q35',
    number: 35,
    pageNumber: 153,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Plastic Settlement of Clay',
    text: 'A 6-m thick layer of plastic clay is subjected to an increase in pressure due to loads above it. Given the following data:\n\n| Given | Value |\n| :--- | :--- |\n| Coefficient of consolidation | 0.315 |\n| Initial void ratio | 1.132 |\n| Initial intergranular pressure | 180 kPa |\n| Increase in intergranular pressure | 110 kPa |\n\nEvaluate the plastic settlement of the layer in meters.',
    options: [
      { label: 'A', text: '0.254' },
      { label: 'B', text: '0.184' },
      { label: 'C', text: '0.426' },
      { label: 'D', text: '0.326' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(35), finalAnswer: 'ΔH = 0.1836 m (Option B)' },
  },

  // Item 36
  {
    id: 'hpge-nov2019-q36',
    number: 36,
    pageNumber: 154,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Rankine Passive Coefficient',
    text: 'Evaluate the angle of friction of a soil, given that the Rankine coefficient of passive resistance is 4.5.',
    options: [
      { label: 'A', text: '32.4°' },
      { label: 'B', text: '35.8°' },
      { label: 'C', text: '39.5°' },
      { label: 'D', text: '25.4°' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(36), finalAnswer: 'φ = 39.5° (Option C)' },
  },

  // Item 37
  {
    id: 'hpge-nov2019-q37',
    number: 37,
    pageNumber: 154,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Rankine Active Coefficient',
    text: 'Evaluate the angle of friction of a soil, given that the Rankine coefficient of active resistance is 0.4.',
    options: [
      { label: 'A', text: '25.4°' },
      { label: 'B', text: '22.1°' },
      { label: 'C', text: '19.6°' },
      { label: 'D', text: '28.7°' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(37), finalAnswer: 'φ = 25.4° (Option A)' },
  },

  // Item 38
  {
    id: 'hpge-nov2019-q38',
    number: 38,
    pageNumber: 154,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Footing Pressure Including Self-Weight',
    text: 'Given the following data for the footing shown:\n\n| Given | Value | Given | Value |\n| :--- | :--- | :--- | :--- |\n| $B$ | 2 m | $a$ | 0.6 m |\n| $L$ | 3 m | $b$ | 0.6 m |\n| $d_1$ | 1.5 m | $d_2$ | 0.75 m |\n\nFooting thickness, $t = 0.6$ m\n\nUnit weight of concrete $= 23.5$ kN/m³\n\nColumn load, $P = 700$ kN.\n\nConsidering the self-weight of the footing, compute the maximum soil pressure in the isolated footing.',
    figureSvg: hpgeNov2019Figure(38, 'Figure 3: Isolated footing plan showing column position and principal axes'),
    figureCaption: 'Isolated footing plan with column at offset d1, d2',
    options: [
      { label: 'A', text: '204.2 kPa' },
      { label: 'B', text: '236.7 kPa' },
      { label: 'C', text: '256.8 kPa' },
      { label: 'D', text: '218.3 kPa' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(38), finalAnswer: 'q_max = 218.27 kPa (Option D)' },
  },

  // Item 39
  {
    id: 'hpge-nov2019-q39',
    number: 39,
    pageNumber: 155,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Footing Pressure with Uplift',
    text: 'Given the following data for the footing shown:\n\n| Given | Value | Given | Value |\n| :--- | :--- | :--- | :--- |\n| $B$ | 2 m | $a$ | 0.6 m |\n| $L$ | 3 m | $b$ | 0.6 m |\n| $d_1$ | 1.5 m | $d_2$ | 0.5 m |\n\nFooting thickness, $t = 0.6$ m\n\nUnit weight of concrete $= 24$ kN/m³\n\nColumn load, $P = 800$ kN.\n\nNeglecting weight of the footing, compute the length of footing base in contact with soil.',
    figureSvg: hpgeNov2019Figure(39, 'Figure 4: Isolated footing plan showing column position and principal axes'),
    figureCaption: 'Isolated footing plan for items 39 and 40',
    options: [
      { label: 'A', text: '333.3 kPa' },
      { label: 'B', text: '387.4 kPa' },
      { label: 'C', text: '355.6 kPa' },
      { label: 'D', text: '325.6 kPa' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(39), finalAnswer: 'q_netmax = 355.6 kPa (Option C)' },
  },

  // Item 40
  {
    id: 'hpge-nov2019-q40',
    number: 40,
    pageNumber: 155,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Footing Pressure with Eccentricity',
    text: 'Given the following data for the footing shown:\n\n| Given | Value | Given | Value |\n| :--- | :--- | :--- | :--- |\n| $B$ | 2 m | $a$ | 0.6 m |\n| $L$ | 3 m | $b$ | 0.6 m |\n| $d_1$ | 1.5 m | $d_2$ | 1 m |\n\nFooting thickness, $t = 0.6$ m\n\nUnit weight of concrete $= 23.5$ kN/m³\n\nColumn load, $P = 800$ kN.\n\nMoment about the major principal axis of footing $= 640$ kN-m\n\nMoment about the minor principal axis of footing $= 0$\n\nNeglecting weight of the footing, compute the maximum soil pressure in the isolated footing.',
    figureSvg: hpgeNov2019Figure(40, 'Figure 4: Isolated footing plan showing column position and principal axes'),
    figureCaption: 'Isolated footing plan for items 39 and 40',
    options: [
      { label: 'A', text: '767 kPa' },
      { label: 'B', text: '889 kPa' },
      { label: 'C', text: '453 kPa' },
      { label: 'D', text: '627 kPa' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(40), finalAnswer: 'q_netmax = 888.9 kPa (Option B)' },
  },

  // Item 41
  {
    id: 'hpge-nov2019-q41',
    number: 41,
    pageNumber: 156,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Contact Area under Eccentric Load',
    text: 'Given the following data for the footing shown:\n\n| Given | Value | Given | Value |\n| :--- | :--- | :--- | :--- |\n| $B$ | 2 m | $a$ | 0.6 m |\n| $L$ | 3 m | $b$ | 0.6 m |\n| $d_1$ | 1.5 m | $d_2$ | 1 m |\n\nFooting thickness, $t = 0.6$ m\n\nUnit weight of concrete $= 23.5$ kN/m³\n\nColumn load, $P = 800$ kN.\n\nMoment about the major principal axis of footing $= 640$ kN-m\n\nMoment about the minor principal axis of footing $= 0$\n\nNeglecting weight of the footing, compute the area of footing in contact with soil.',
    figureSvg: hpgeNov2019Figure(41, 'Figure 5: Isolated footing plan showing column position and principal axes'),
    figureCaption: 'Isolated footing plan for item 41',
    options: [
      { label: 'A', text: '3.6 m²' },
      { label: 'B', text: '1.8 m²' },
      { label: 'C', text: '2.4 m²' },
      { label: 'D', text: '4.2 m²' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(41), finalAnswer: 'A = 1.8 m² (Option B)' },
  },

  // Item 42
  {
    id: 'hpge-nov2019-q42',
    number: 42,
    pageNumber: 157,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Stress Bulb by 1H:2V Distribution',
    text: 'What is the stress at a point 2.4 meters below the base of a 1.8-meter square footing that is supporting a column load of 500 kN, assuming that the pressure in the soil below is distributed at a ratio of 1 horizontal to 2 vertical (1H:2V)?',
    options: [
      { label: 'A', text: '28.3 kPa' },
      { label: 'B', text: '25.4 kPa' },
      { label: 'C', text: '32.6 kPa' },
      { label: 'D', text: '154.3 kPa' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(42), finalAnswer: 'p = 28.34 kPa (Option A)' },
  },

  // Item 43
  {
    id: 'hpge-nov2019-q43',
    number: 43,
    pageNumber: 157,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Boussinesq Situation: Footing Contact Pressure',
    text: `${SITUATION_1}43. Evaluate the soil pressure under the footing in kPa.`,
    options: [
      { label: 'A', text: '145' },
      { label: 'B', text: '75' },
      { label: 'C', text: '100' },
      { label: 'D', text: '125' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(43), finalAnswer: 'q = 125 kPa (Option D)' },
  },

  // Item 44
  {
    id: 'hpge-nov2019-q44',
    number: 44,
    pageNumber: 157,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Boussinesq Stress at Depth',
    text: `${SITUATION_1}44. Compute the stress at the mid-height of the clay layer directly below the center of footing using the Boussinesq Theory.`,
    options: [
      { label: 'A', text: '17.4 kPa' },
      { label: 'B', text: '12.9 kPa' },
      { label: 'C', text: '6.8 kPa' },
      { label: 'D', text: '8.1 kPa' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(44), finalAnswer: 'p = 12.9 kPa (Option B)' },
  },

  // Item 45
  {
    id: 'hpge-nov2019-q45',
    number: 45,
    pageNumber: 157,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — 1H:2V Stress at Depth',
    text: `${SITUATION_1}45. Compute the stress at the mid-height of the clay layer assuming that the pressure in the soil below is distributed at a ratio of 1 horizontal to 2 vertical (1H:2V).`,
    options: [
      { label: 'A', text: '10.7 kPa' },
      { label: 'B', text: '9.6 kPa' },
      { label: 'C', text: '18.7 kPa' },
      { label: 'D', text: '13.4 kPa' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(45), finalAnswer: 'p = 13.4 kPa (Option D)' },
  },
];
