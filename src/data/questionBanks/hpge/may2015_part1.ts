import { Question } from '../../../types/exam';
import { solved, recall, worked, opts } from './may2015Helpers';

export const HPGE_MAY2015_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-may2015-q1',
    number: 1,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Pressure and Units',
    text: 'Convert 1 atmosphere to mmHg. Specific gravity of mercury is 13.56.',
    options: opts('750', '740', '780', '760'),
    ...solved(1, 'D', '760 mmHg (Option D)', 51),
  },

  // Item 2
  {
    id: 'hpge-may2015-q2',
    number: 2,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Surface Tension',
    text: 'The elastic tendency of liquids which makes them acquire the least surface area possible. It is responsible, for example, when an object or insect such as mosquitoes that is denser than water is able to float or run along the water surface.',
    options: opts('surface tension', 'viscosity', 'modulus of elasticity', 'specific gravity'),
    ...solved(2, 'A', 'surface tension (Option A)', 51),
  },

  // Item 3
  {
    id: 'hpge-may2015-q3',
    number: 3,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Pressure and Units',
    text: 'If water is used to measure the atmospheric pressure, how high would it be?',
    options: opts('9.81 m', '11.25 m', '10.33 m', '10.00 m'),
    ...solved(3, 'C', '10.33 m (Option C)', 51),
  },

  // Item 4
  {
    id: 'hpge-may2015-q4',
    number: 4,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Pressure and Units',
    text: 'How many meter of water is equivalent to 2.75 atmospheres?',
    options: opts('29.4 m', '25.3 m', '30.1 m', '26.8 m'),
    ...solved(4, 'A', '29.4 m (Option A)', 51),
  },

  // Item 5
  {
    id: 'hpge-may2015-q5',
    number: 5,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Barometry',
    text: 'A mercury barometer at the top of a mountain reads 700 mmHg and at the same time the barometer at its base reads 800 mmHg. Assuming that the unit weight of air is 12 N/m³ and specific gravity of mercury is 13.6, what is the approximate height of the mountain?',
    options: opts('1136 m', '1112 m', '1268 m', '1025 m'),
    ...solved(5, 'B', '1112 m (Option B)', 51),
  },

  // Item 6
  {
    id: 'hpge-may2015-q6',
    number: 6,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Pressure Distribution',
    text: 'The weight density of a mud is given by $\\gamma = 10 + 0.5h$, where $\\gamma$ is in kN/m³ and h is in meters. Determine the pressure, in kPa, at a depth of 5 m.',
    options: opts('56.25 kPa', '62.50 kPa', '58.65 kPa', '60.15 kPa'),
    ...solved(6, 'A', '56.25 kPa (Option A)', 51),
  },

  // Item 7
  {
    id: 'hpge-may2015-q7',
    number: 7,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'A vertical square plate 1.20 m in each side is submerged half in oil and half in water. If the top of the plate is flushed with the oil surface, what is the ratio of the force of water to oil. Specific gravity of oil is 0.80.',
    options: opts('3.00', '3.75', '3.25', '3.50'),
    ...solved(7, 'C', '3.25 (Option C)', 52),
  },

  // Item 8
  {
    id: 'hpge-may2015-q8',
    number: 8,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'An iceberg floats in seawater with 500 cubic meters of ice above the water surface. If the specific gravity of seawater is 1.02 and of ice is 0.92, what is the total volume of ice?',
    options: opts('5100 m³', '5150 m³', '5200 m³', '5250 m³'),
    ...solved(8, 'A', '5100 m³ (Option A)', 52),
  },

  // Item 9
  {
    id: 'hpge-may2015-q9',
    number: 9,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'A ship having a displacement of 24,000 metric tons and a draft of 10.4 m in ocean (sp. gr. = 1.03) enters a harbour of fresh water (sp. gr. = 1). If the horizontal section of the ship at the waterline is 3,000 m², what depth of fresh water is required to float the ship?',
    options: opts('10.17 m', '10.63 m', '10.95 m', '11.17 m'),
    ...solved(9, 'B', '10.63 m (Option B)', 52),
  },

  // Item 10
  {
    id: 'hpge-may2015-q10',
    number: 10,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Relative Equilibrium',
    text: 'A tank containing 0.6 m deep of water is transported by an elevator. What is the pressure at the bottom of the tank when the elevator accelerates 2 m/s² downward?',
    options: opts('7.09 kPa', '6.32 kPa', '4.69 kPa', '5.25 kPa'),
    ...solved(10, 'C', '4.69 kPa (Option C)', 53),
  },

  // Item 11
  {
    id: 'hpge-may2015-q11',
    number: 11,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Flow (Manning)',
    text: 'Water flows at the rate of 0.003 m³/s in a 100-mm-diameter pipe. Assuming n = 0.025, find the head lost per kilometer length of pipe.',
    options: opts('4.49 m', '7.98 m', '12.47 m', '17.96 m'),
    ...solved(11, 'C', '12.47 m (Option C)', 53),
  },

  // Item 12
  {
    id: 'hpge-may2015-q12',
    number: 12,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Flow (Manning)',
    text: 'A straight pipeline having a diameter of 0.15 m and roughness coefficient n = 0.015 conveys water. If the total head lost per kilometer length of pipe is 6 m, estimate the discharge.',
    options: opts('0.01004 m³/s', '0.01023 m³/s', '0.01136 m³/s', '0.01065 m³/s'),
    ...solved(12, 'B', '0.01023 m³/s (Option B)', 53),
  },

  // Item 13
  {
    id: 'hpge-may2015-q13',
    number: 13,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Energy and Velocity Head',
    text: 'Water flows through at a velocity of 3.25 m/s. What is the velocity head?',
    options: opts('0.632 m', '0.281 m', '1.394 m', '0.538 m'),
    ...solved(13, 'D', '0.538 m (Option D)', 53),
  },

  // Item 14
  {
    id: 'hpge-may2015-q14',
    number: 14,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Friction (Darcy)',
    text: 'Oil (sp. gr. = 0.80) flows in a 75-mm-diameter pipe, 500 m long at the rate of 20 N/s. Assuming f = 0.025, what is the head lost?',
    options: opts('21.47 m', '1.74 m', '2.83 m', '174.09 m'),
    ...solved(14, 'C', '2.83 m (Option C)', 53),
  },

  // Item 15
  {
    id: 'hpge-may2015-q15',
    number: 15,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Most Efficient Section)',
    text: 'A triangular canal of most efficient proportion has a depth of 3 m. What is the hydraulic radius of this canal?',
    options: opts('1.500 m', '1.061 m', '1.125 m', '1.225 m'),
    ...solved(15, 'B', '1.061 m (Option B)', 54),
  },
];
