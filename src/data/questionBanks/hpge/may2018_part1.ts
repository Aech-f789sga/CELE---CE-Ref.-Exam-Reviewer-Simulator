import { Question } from '../../../types/exam';
import { opts, solved } from './may2018Helpers';

/**
 * HPGE May 2018, items 1-13 — barometric pressure change, the hydrostatic force
 * on a triangular gate, buoyancy of a lead-weighted stick and a wooden block,
 * a buoy floating in a lighter liquid, pressure in an accelerating bucket, and
 * the first part of the rotating-tank situation.
 */
export const HPGE_MAY2018_PART1: Question[] = [
  // ── Item 1 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q1',
    number: 1,
    pageNumber: 690,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Pressure',
    text: 'If air had a constant unit weight of $12\\ \\text{N/m}^3$, what is the decrease in pressure (kPa) of an aircraft climbing at an altitude of 3 km?',
    options: opts('32', '48', '36', '24'),
    ...solved(1, 'C', '36 kPa'),
  },

  // ── Item 2 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q2',
    number: 2,
    pageNumber: 690,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Pressure',
    text: 'At the foot of a mountain, a mercury $(sg = 13.63)$ barometer reads 800 mmHg and at the same instant at the top of the mountain a barometer reads 500 mmHg. Assuming air had constant unit weight of $12.01\\ \\text{N/m}^3$, what is the approximate height of the mountain?',
    options: opts('3320 m', '3310 m', '3330 m', '3340 m'),
    ...solved(2, 'D', '3,340 m'),
  },

  // ── Item 3 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q3',
    number: 3,
    pageNumber: 690,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Pressure',
    text: 'Lacking of mercury, an improvised barometer uses a liquid that weighs 0.735 times that of mercury. Assuming that the unit weight of air is constant at $12\\ \\text{N/m}^3$, evaluate the approximate height of the mountain if the barometer readings are 600 mm at the base and 850 mm at the top of the mountain. SG of mercury = 13.6.',
    options: opts('2040', '2080', '2010', '2020'),
    ...solved(
      3,
      'A',
      '2,043 m',
      'The stem gives the base reading (600 mm) lower than the top reading (850 mm), which is the reverse of what a real mountain would produce; the booklet works the difference as $0.85 - 0.60$ and the option list keeps the printed order.',
    ),
  },

  // ── Situation 1 ───────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q4',
    number: 4,
    pageNumber: 690,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Hydrostatic Force on a Gate',
    text: 'Situation 1 — A vertical triangular gate 0.9 m high have its 2 m base flushed with the water surface.\n\n(1) Determine the total force acting on one side of the gate.',
    options: opts('2.65 kN', '5.3 kN', '1.25 kN', '4.3 kN'),
    ...solved(
      4,
      'A',
      '2.65 kN',
      'The booklet prints Situation 1 as one undivided block with the three parts tagged $\\rightarrow$ Part 1, Part 2 and Part 3, and it works Part 3 (eccentricity) first. This crop is the setup and the diagram; the Part 1 line itself is on the second crop.',
    ),
  },
  {
    id: 'hpge-may2018-q5',
    number: 5,
    pageNumber: 690,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Centre of Pressure',
    text: '(2) Determine the location of the center of pressure from the top.',
    options: opts('0.3 m', '0.25 m', '0.45 m', '0.2 m'),
    ...solved(5, 'C', '0.45 m'),
  },
  {
    id: 'hpge-may2018-q6',
    number: 6,
    pageNumber: 690,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Centre of Pressure',
    text: '(3) Determine the eccentricity.',
    options: opts('0.63 m', '0.10 m', '0.15 m', '0.20 m'),
    ...solved(6, 'C', '0.15 m'),
  },

  // ── Item 7 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q7',
    number: 7,
    pageNumber: 690,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Buoyancy',
    text: 'A piece of wood of s.g. 0.63 is 70 mm square and 150 cm long. How many Newtons of lead weighing $110\\ \\text{kN/m}^3$ must be fastened at one end of the stick so that it will float upright with 0.30 m out of water?',
    options: opts('13.46 N', '16.52 N', '20.12 N', '19.23 N'),
    ...solved(7, 'A', '13.46 N'),
  },

  // ── Item 8 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q8',
    number: 8,
    pageNumber: 690,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Buoyancy',
    text: 'A rectangular wooden block $(\\gamma = 3\\ \\text{kN/m}^3)$ is 0.6 m square and 3 m long. Obtain the vertical force required to keep the block in upright position and fully submerge in water.',
    options: opts('4.36 kN', '5.25 kN', '7.35 kN', '6.32 kN'),
    ...solved(8, 'C', '7.355 kN'),
  },

  // ── Situation 2 ───────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q9',
    number: 9,
    pageNumber: 691,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Buoyancy',
    text: 'Situation 2 — A wooden buoy having a specific gravity of 0.75 floats in a liquid having a specific gravity of 0.85.\n\n(1) Determine the percentage of the buoy exposed in the liquid.',
    options: opts('13.33%', '15.33%', '14.44%', '11.76%'),
    ...solved(
      9,
      'D',
      '11.765%',
      'The booklet heads this block "Parts 1 & 2" and prints no per-item number for 9, 10 or 11; the crops are bounded by the "Part 2" and "Part 3" headings instead.',
    ),
  },
  {
    id: 'hpge-may2018-q10',
    number: 10,
    pageNumber: 691,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Buoyancy',
    text: '(2) What is the weight of the wooden buoy if the volume exposed above the liquid is $0.045\\ \\text{m}^3$?',
    options: opts('1845 N', '2365 N', '2811 N', '3015 N'),
    ...solved(10, 'C', '2,811 N'),
  },
  {
    id: 'hpge-may2018-q11',
    number: 11,
    pageNumber: 691,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Buoyancy',
    text: '(3) What downward force is required to completely submerge the buoy?',
    options: opts('0.425 kN', '0.375 kN', '0.625 kN', '0.325 kN'),
    ...solved(11, 'B', '0.375 kN'),
  },

  // ── Item 12 ───────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q12',
    number: 12,
    pageNumber: 691,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Pressure',
    text: 'A bucket in an elevator contains 0.5 m of water. Obtain the pressure at the bottom of the bucket when the elevator accelerates downward at $2\\ \\text{m/s}^2$.',
    options: opts('5.9 kPa', '3.9 kPa', '6.3 kPa', '10.2 kPa'),
    ...solved(12, 'B', '3.905 kPa'),
  },

  // ── Situation 3 ───────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q13',
    number: 13,
    pageNumber: 691,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Rotating Liquid',
    text: 'Situation 3 — An open cylindrical tank is 0.4 m in diameter and 1.5 m tall. The tank is rotated about its own vertical axis at constant angular speed.\n\n(1) What is the maximum depth of water in the tank if there is no water spilled at 240 rpm?',
    options: opts('0.86 m', '0.78 m', '0.93 m', '0.65 m'),
    ...solved(13, 'A', '0.856 m'),
  },
];
