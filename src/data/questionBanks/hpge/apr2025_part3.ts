import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const HPGE_APR2025_PART3: Question[] = [
  // Item 25
  {
    id: 'hpge-apr2025-q25',
    number: 25,
    pageNumber: 391,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Boussinesq Stress Distribution Beneath Circular Area',
    text: 'According to Boussinesq\'s theory, the increase in vertical stress at a point located beneath the center of a uniformly loaded, flexible circular area resting on a semi-infinite, homogeneous, and isotropic soil mass is given by:\n\n$$p = q\\left(1 - \\frac{1}{N}\\right)$$\n\nwhere:\n$$N = \\left[1 + \\left(\\frac{r}{z}\\right)^2\\right]^{1.5}$$\n- $q$ = uniform load per unit area at the base of footing\n- $r$ = radius of the circular loaded area\n- $z$ = depth of point below the center of the circular loaded area\n\nA circular footing 6 m in diameter carries a column load of 2500 kN. Determine the depth, in meters, below the center of the footing at which the increase in vertical stress is reduced to one-eighth of the pressure applied at the base of the footing.',
    options: [
      { label: 'A', text: '9.8' },
      { label: 'B', text: '10.6' },
      { label: 'C', text: '5.5' },
      { label: 'D', text: '7.5' },
    ],
    ...solved(25, 'A', '9.8 (Option A)'),
  },

  // Item 26
  {
    id: 'hpge-apr2025-q26',
    number: 26,
    pageNumber: 391,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Foundation Engineering - Terzaghi Bearing Capacity of Square Footing',
    text: 'A square footing measuring 400 mm × 400 mm in plan is embedded 1.5 m below the ground surface. The supporting soil has a bulk unit weight of 20 kN/m³, a cohesion of 18 kPa, and an angle of internal friction of 20°. Assuming general shear failure, determine the ultimate bearing capacity of the soil, in kilopascals.\n\nGiven bearing capacity factors:\n- $N_c = 17.69$\n- $N_q = 7.44$\n- $N_\\gamma = 3.64$',
    options: [
      { label: 'A', text: '640' },
      { label: 'B', text: '660' },
      { label: 'C', text: '650' },
      { label: 'D', text: '670' },
    ],
    ...solved(26, 'C', '650 (Option C)'),
  },

  // Item 27
  {
    id: 'hpge-apr2025-q27',
    number: 27,
    pageNumber: 391,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Foundation Engineering - Group Pile Capacity in Clay',
    text: 'Given the following data of a pile group:\n\n| Parameter | Value |\n| :--- | :--- |\n| Pile size | 400 mm × 400 mm |\n| Pile length | 20 m |\n| Total load, $Q$ | 12 MN |\n| Group efficiency | 82% |\n| Unconfined compression strength, $q_u$ | 120 kPa |\n| Adhesion factor, $\\alpha$ | 1.0 |\n\nDetermine the required number of piles.',
    options: [
      { label: 'A', text: '10' },
      { label: 'B', text: '8' },
      { label: 'C', text: '7' },
      { label: 'D', text: '9' },
    ],
    ...solved(27, 'B', '8 (Option B)'),
  },

  // Item 28
  {
    id: 'hpge-apr2025-q28',
    number: 28,
    pageNumber: 392,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Fluid Dynamics - Water Jet Trajectory from Sloping Orifice',
    text: 'Situation 1:\nA water tank has sloping side inclined at 45° with the horizontal. The total depth of water in the tank is 8 m. A water jet issues from an orifice located on the inclined side of the tank under a hydrostatic head of 5 m or that the orifice is located 3 m vertically above the bottom of the tank. The bottom of the tank is 1.2 m above the ground. Coefficient of velocity is 1.0. Neglect air resistance on the jet.\n\nDetermine the maximum height (m) travelled by the jet from the center of the orifice.',
    options: [
      { label: 'A', text: '2.5' },
      { label: 'B', text: '3.5' },
      { label: 'C', text: '0.5' },
      { label: 'D', text: '1.5' },
    ],
    ...solved(28, 'A', '2.5 (Option A)'),
  },

  // Item 29
  {
    id: 'hpge-apr2025-q29',
    number: 29,
    pageNumber: 392,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Fluid Dynamics - Water Jet Maximum Range from Orifice',
    text: 'Situation 1 (Continued):\nA water tank has sloping side inclined at 45° with the horizontal. The total depth of water in the tank is 8 m. A water jet issues from an orifice located on the inclined side of the tank under a hydrostatic head of 5 m or that the orifice is located 3 m vertically above the bottom of the tank. The bottom of the tank is 1.2 m above the ground. Coefficient of velocity is 1.0. Neglect air resistance on the jet.\n\nDetermine the maximum horizontal distance (m) travelled by the jet from the center of the orifice.',
    options: [
      { label: 'A', text: '15.2' },
      { label: 'B', text: '11.2' },
      { label: 'C', text: '14.2' },
      { label: 'D', text: '13.2' },
    ],
    ...solved(29, 'D', '13.2 (Option D)'),
  },

  // Item 30
  {
    id: 'hpge-apr2025-q30',
    number: 30,
    pageNumber: 392,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Fluid Dynamics - Time of Flight of Water Jet',
    text: 'Situation 1 (Continued):\nA water tank has sloping side inclined at 45° with the horizontal. The total depth of water in the tank is 8 m. A water jet issues from an orifice located on the inclined side of the tank under a hydrostatic head of 5 m or that the orifice is located 3 m vertically above the bottom of the tank. The bottom of the tank is 1.2 m above the ground. Coefficient of velocity is 1.0. Neglect air resistance on the jet.\n\nDetermine the time (s) it takes for the water to hit the ground.',
    options: [
      { label: 'A', text: '1.55' },
      { label: 'B', text: '1.77' },
      { label: 'C', text: '1.66' },
      { label: 'D', text: '1.88' },
    ],
    ...solved(30, 'D', '1.88 (Option D)'),
  },

  // Item 31
  {
    id: 'hpge-apr2025-q31',
    number: 31,
    pageNumber: 392,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Unsteady Flow - Time to Drain Specified Volume from Cylindrical Tank',
    text: 'Situation 2:\nA vertical cylindrical tank, 6 m in diameter and 6 m high, is initially full of water. A 100-mm-diameter orifice is located at the bottom of the tank and serves as the outlet. The coefficient of discharge of the orifice is 0.60.\n\nCalculate the duration (min) when it drains an amount of 100 m³ of water.',
    options: [
      { label: 'A', text: '49.7' },
      { label: 'B', text: '29.7' },
      { label: 'C', text: '19.7' },
      { label: 'D', text: '39.7' },
    ],
    ...solved(31, 'D', '39.7 (Option D)'),
  },

  // Item 32
  {
    id: 'hpge-apr2025-q32',
    number: 32,
    pageNumber: 392,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Unsteady Flow - Time to Lower Liquid Level in Tank',
    text: 'Situation 2 (Continued):\nA vertical cylindrical tank, 6 m in diameter and 6 m high, is initially full of water. A 100-mm-diameter orifice is located at the bottom of the tank and serves as the outlet. The coefficient of discharge of the orifice is 0.60.\n\nCalculate the duration (min) when the water level in the tank is lowered to 4 m.',
    options: [
      { label: 'A', text: '10.3' },
      { label: 'B', text: '30.3' },
      { label: 'C', text: '20.3' },
      { label: 'D', text: '40.3' },
    ],
    ...solved(32, 'C', '20.3 (Option C)'),
  },

  // Item 33
  {
    id: 'hpge-apr2025-q33',
    number: 33,
    pageNumber: 392,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Unsteady Flow - Time to Completely Empty Cylindrical Tank',
    text: 'Situation 2 (Continued):\nA vertical cylindrical tank, 6 m in diameter and 6 m high, is initially full of water. A 100-mm-diameter orifice is located at the bottom of the tank and serves as the outlet. The coefficient of discharge of the orifice is 0.60.\n\nCalculate the total duration (min) when the tank is empty.',
    options: [
      { label: 'A', text: '120.6' },
      { label: 'B', text: '90.6' },
      { label: 'C', text: '110.6' },
      { label: 'D', text: '100.6' },
    ],
    ...solved(33, 'C', '110.6 (Option C)'),
  },

  // Item 34
  {
    id: 'hpge-apr2025-q34',
    number: 34,
    pageNumber: 392,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Open Channel Flow - Gradually Varied Non-Uniform Flow Head Loss',
    text: 'Situation 3:\nWater flows to an almost level rectangular channel 3 m wide at 12 m³/s. The depth of the channel gradually increases from 1.0 m to 1.1 m for a length of 5 m.\n\nWhat is the head loss (m)?',
    options: [
      { label: 'A', text: '0.012' },
      { label: 'B', text: '0.032' },
      { label: 'C', text: '0.042' },
      { label: 'D', text: '0.022' },
    ],
    ...solved(34, 'C', '0.042 (Option C)'),
  },

  // Item 35
  {
    id: 'hpge-apr2025-q35',
    number: 35,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Open Channel Flow - Energy Gradient Slope',
    text: 'Situation 3 (Continued):\nWater flows to an almost level rectangular channel 3 m wide at 12 m³/s. The depth of the channel gradually increases from 1.0 m to 1.1 m for a length of 5 m.\n\nWhat is the slope of the energy gradient?',
    options: [
      { label: 'A', text: '0.0054' },
      { label: 'B', text: '0.0073' },
      { label: 'C', text: '0.0083' },
      { label: 'D', text: '0.0064' },
    ],
    ...solved(35, 'C', '0.0083 (Option C)'),
  },

  // Item 36
  {
    id: 'hpge-apr2025-q36',
    number: 36,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Open Channel Flow - Manning Roughness Coefficient',
    text: 'Situation 3 (Continued):\nWater flows to an almost level rectangular channel 3 m wide at 12 m³/s. The depth of the channel gradually increases from 1.0 m to 1.1 m for a length of 5 m.\n\nWhat is the value of the roughness coefficient?',
    options: [
      { label: 'A', text: '0.03' },
      { label: 'B', text: '0.02' },
      { label: 'C', text: '0.04' },
      { label: 'D', text: '0.01' },
    ],
    ...solved(36, 'B', '0.02 (Option B)'),
  },
];
