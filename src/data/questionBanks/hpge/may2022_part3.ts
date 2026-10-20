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

export const HPGE_MAY2022_PART3: Question[] = [
  // Item 25 — Situation 7
  {
    id: 'hpge-may2022-q25',
    number: 25,
    pageNumber: 415,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 7 — Trapezoidal Canal: Boundary Shearing Stress',
    text: 'Situation 7 — Water flows at the rate of 20.8 m³/s and depth of 1.20 m in a trapezoidal canal having a bottom width of 6 m and side slope of 1V to 2H.\n\n25. Obtain the boundary shearing stress on the canal surface in Pascals.',
    options: [
      { label: 'A', text: '12.87' },
      { label: 'B', text: '6.54' },
      { label: 'C', text: '15.43' },
      { label: 'D', text: '9.78' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(25), finalAnswer: 'τ₀ = 9810(0.887)(0.001124) = 9.78 Pa (Option D)' },
  },

  // Item 26 — Situation 8
  {
    id: 'hpge-may2022-q26',
    number: 26,
    pageNumber: 415,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 8 — Jet on a Flat Plate: Stationary Plate',
    text: 'Situation 8 — A water jet moving at 8 m/s is issued from a 20-mm-diameter horizontal nozzle. The jet hits a flat plate held normal to its axis. Evaluate the force (in N) exerted by the jet on the plate if:\n\n26. The plate is stationary.',
    options: [
      { label: 'A', text: '25.4' },
      { label: 'B', text: '15.5' },
      { label: 'C', text: '20.1' },
      { label: 'D', text: '32.8' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(26), finalAnswer: 'F_D = 20.1 N (Option C)' },
  },

  // Item 27 — Situation 8
  {
    id: 'hpge-may2022-q27',
    number: 27,
    pageNumber: 415,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 8 — Jet on a Flat Plate: Plate Receding',
    text: 'Situation 8 — A water jet moving at 8 m/s is issued from a 20-mm-diameter horizontal nozzle. The jet hits a flat plate held normal to its axis. Evaluate the force (in N) exerted by the jet on the plate if:\n\n27. The plate is moving away from the nozzle at 4 m/s.',
    options: [
      { label: 'A', text: '6.87' },
      { label: 'B', text: '5.03' },
      { label: 'C', text: '8.98' },
      { label: 'D', text: '12.12' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(27), finalAnswer: 'F_D = 5.02 N ≈ 5.03 N (Option B)' },
  },

  // Item 28 — Situation 8
  {
    id: 'hpge-may2022-q28',
    number: 28,
    pageNumber: 415,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 8 — Jet on a Flat Plate: Plate Approaching',
    text: 'Situation 8 — A water jet moving at 8 m/s is issued from a 20-mm-diameter horizontal nozzle. The jet hits a flat plate held normal to its axis. Evaluate the force (in N) exerted by the jet on the plate if:\n\n28. The plate is moving towards the nozzle at 5 m/s.',
    options: [
      { label: 'A', text: '50.2' },
      { label: 'B', text: '53.1' },
      { label: 'C', text: '42.7' },
      { label: 'D', text: '38.5' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(28), finalAnswer: 'F_D = 53.1 N (Option B)' },
  },

  // Item 29
  {
    id: 'hpge-may2022-q29',
    number: 29,
    pageNumber: 415,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'NSCP — Slope of Cut Surfaces (Section 302.2.2)',
    text: 'According to Section 302.2.2 of NSCP, the slope of cut surfaces shall be no steeper than is safe for the intended use and shall be no steeper than:',
    options: [
      { label: 'A', text: '1V:3H' },
      { label: 'B', text: '3V:1H' },
      { label: 'C', text: '1V:2H' },
      { label: 'D', text: '2V:1H' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(29), finalAnswer: '1V:2H — 1 unit vertical to 2 units horizontal, i.e. 50% slope (Option C)' },
  },

  // Item 30
  {
    id: 'hpge-may2022-q30',
    number: 30,
    pageNumber: 415,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Geotechnical — Soil Behaviour under Earthquake Shaking',
    text: 'This occurs when a cohesionless saturated or partially saturated soil substantially loses strength and stiffness in response to an applied stress such as shaking during an earthquake or other sudden change in stress condition, in which material that is ordinarily a solid behaves like a liquid.',
    options: [
      { label: 'A', text: 'solidification' },
      { label: 'B', text: 'land slide' },
      { label: 'C', text: 'liquefaction' },
      { label: 'D', text: 'liquidation' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(30), finalAnswer: 'Liquefaction (Option C)' },
  },

  // Item 31
  {
    id: 'hpge-may2022-q31',
    number: 31,
    pageNumber: 416,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Geotechnical — Unit Weight at a Given Moisture Content',
    text: 'A certain soil has a dry unit weight of 15.5 kN/m³. Compute the unit weight of the soil when water is added to a moisture content of 20%.',
    options: [
      { label: 'A', text: '19.2 kN/m³' },
      { label: 'B', text: '18.6 kN/m³' },
      { label: 'C', text: '18.2 kN/m³' },
      { label: 'D', text: '19.8 kN/m³' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(31), finalAnswer: 'γ_m = 15.5(1 + 0.2) = 18.6 kN/m³ (Option B)' },
  },

  // Item 32
  {
    id: 'hpge-may2022-q32',
    number: 32,
    pageNumber: 416,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Geotechnical — Consistency of Cohesive Soil',
    text: 'A cohesive soil deposit is considered soft if the unconfined compression strength, in kPa, is between:',
    options: [
      { label: 'A', text: '0 to 24' },
      { label: 'B', text: '48 to 96' },
      { label: 'C', text: '96 to 192' },
      { label: 'D', text: '24 to 48' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(32), finalAnswer: '24 to 48 kPa — soft consistency (Option D)' },
  },

  // Item 33
  {
    id: 'hpge-may2022-q33',
    number: 33,
    pageNumber: 416,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Geotechnical — Angle of Friction from Passive Pressure',
    text: 'Evaluate the angle of friction of a soil given that the coefficient of passive pressure is 4.5.',
    options: [
      { label: 'A', text: '39.5°' },
      { label: 'B', text: '45.2°' },
      { label: 'C', text: '36.9°' },
      { label: 'D', text: '33.2°' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(33), finalAnswer: 'φ = 39.52° (Option A)' },
  },

  // Item 34
  {
    id: 'hpge-may2022-q34',
    number: 34,
    pageNumber: 416,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Geotechnical — Settlement from Void Ratio Reduction',
    text: 'A 6-m-thick layer of soft clay has an initial void ratio of 1.2. The layer is subject to a compression load applied at the surface reducing its void ratio by one-third of its original value. Obtain the settlement of the layer.',
    options: [
      { label: 'A', text: '1.5 m' },
      { label: 'B', text: '2.2 m' },
      { label: 'C', text: '2.5 m' },
      { label: 'D', text: '1.1 m' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(34), finalAnswer: 'ΔH = 6(1.2 − 0.8)/(1 + 1.2) = 1.091 m (Option D)' },
  },

  // Item 35
  {
    id: 'hpge-may2022-q35',
    number: 35,
    pageNumber: 416,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Geotechnical — Primary Consolidation Settlement',
    text: 'Given the following data of a normally consolidated clay layer:\n\n| Parameter | Value |\n|---|---|\n| Thickness, H | 8 m |\n| Natural void ratio, e₀ | 1.132 |\n| Compression index, C_c | 0.315 |\n| Average effective pressure in the layer | 180 kPa |\n\nObtain the primary consolidation settlement (in mm) caused by a pressure increase of 120 kPa.',
    options: [
      { label: 'A', text: '262' },
      { label: 'B', text: '132' },
      { label: 'C', text: '187' },
      { label: 'D', text: '321' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(35), finalAnswer: 'ΔH = 262.2 mm (Option A)' },
  },

  // Item 36 — Situation 9
  {
    id: 'hpge-may2022-q36',
    number: 36,
    pageNumber: 416,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 9 — Soil Phase Relations: Void Ratio',
    text: `${SITUATION_9}\n\n36. The void ratio.`,
    options: [
      { label: 'A', text: '0.431' },
      { label: 'B', text: '0.224' },
      { label: 'C', text: '0.342' },
      { label: 'D', text: '0.532' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(36), finalAnswer: 'e = 0.431 (Option A)' },
  },
];
