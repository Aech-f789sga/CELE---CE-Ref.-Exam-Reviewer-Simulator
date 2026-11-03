import { Question } from '../../../types/exam';
import { solved, opts } from './may2017Helpers';

export const HPGE_MAY2017_PART2: Question[] = [
  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q13',
    number: 13,
    pageNumber: 487,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 2 — Tension in the Holding Cable',
    text: 'Situation 2 – A tank contains two liquids, half of which has a specific gravity of 1.2 and the other half has specific gravity of 1.5. A metal sphere with radius of 200 mm and specific gravity of 7.4 is submerged such that half of the sphere is in the liquid of sp. gr. of 1.2 and the other half is in liquid with s.g. of 1.5.\n\nObtain the tension of the cable to keep the sphere in this condition, in N.',
    options: opts('1989', '1587', '2018', '2185'),
    ...solved(13, 'A', 'T = 1,989.2 N', 498),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q14',
    number: 14,
    pageNumber: 487,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 2 — Buoyant Force in Water Only',
    text: 'Situation 2 – A tank contains two liquids, half of which has a specific gravity of 1.2 and the other half has specific gravity of 1.5. A metal sphere with radius of 200 mm and specific gravity of 7.4 is submerged such that half of the sphere is in the liquid of sp. gr. of 1.2 and the other half is in liquid with s.g. of 1.5.\n\nIf the liquid is all water, determine the buoyant force on the sphere.',
    options: opts('563.2', '356.7', '328.7', '298.7'),
    ...solved(14, 'C', 'BF = 328.7 N', 498),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q15',
    number: 15,
    pageNumber: 487,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Ship Draft in Fresh Water',
    text: 'A ship, with vertical sides near the water line, weighs 40 MN and draws 6.7 m in salt water (s. gr. = 1.026). Discharge of 2 MN of water ballast decreases the draft to 6.4 m. What would be the draft d of the ship in fresh water?',
    options: opts('6.854 m', '6.632 m', '6.458 m', '6.548 m'),
    ...solved(15, 'D', 'd = 6.5482 m', 498, 499),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q16',
    number: 16,
    pageNumber: 488,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 3 — Solid in a Mercury-Oil Interface',
    text: 'Situation 3 – A 500 cubic-centimeter solid having a specific gravity of 2.05 is submerged in two-liquid interface tank. Part of the solid is in mercury (sg = 13.6) and the other part in oil (sg = 0.81).\n\nWhat part of the solid is in mercury?',
    options: opts('8.2%', '12.5%', '9.7%', '6.3%'),
    ...solved(16, 'C', '9.695%', 499, 500),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q17',
    number: 17,
    pageNumber: 488,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 3 — Part of the Solid in Oil',
    text: 'Situation 3 – A 500 cubic-centimeter solid having a specific gravity of 2.05 is submerged in two-liquid interface tank. Part of the solid is in mercury (sg = 13.6) and the other part in oil (sg = 0.81).\n\nWhat part of the solid is in oil?',
    options: opts('87.5%', '93.7%', '90.3%', '91.8%'),
    ...solved(17, 'C', '90.305%', 500),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q18',
    number: 18,
    pageNumber: 488,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 3 — Solid Fully in Mercury',
    text: 'Situation 3 – A 500 cubic-centimeter solid having a specific gravity of 2.05 is submerged in two-liquid interface tank. Part of the solid is in mercury (sg = 13.6) and the other part in oil (sg = 0.81).\n\nIf the liquid is all mercury, what part of the solid is in mercury?',
    options: opts('23.36%', '15.07%', '18.25%', '12.08%'),
    ...solved(18, 'B', '15.07%', 500),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q19',
    number: 19,
    pageNumber: 488,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 4 — Theoretical Orifice Discharge',
    text: 'Situation 4 – Water flows through a 100-mm-diameter orifice. The depth of water above the orifice center is 9 m.\n\nWhat is the theoretical discharge in $\\text{m}^3/\\text{s}$?',
    options: opts('0.104', '0.156', '0.951', '0.236'),
    ...solved(19, 'A', 'Q = 0.104 m³/s', 500),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q20',
    number: 20,
    pageNumber: 488,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 4 — Orifice Discharge under Downward Acceleration',
    text: 'Situation 4 – Water flows through a 100-mm-diameter orifice. The depth of water above the orifice center is 9 m.\n\nRepeat Part 1 if the tank is going downward at an acceleration equal to one-half the acceleration due to gravity?',
    options: opts('0.074', '0.128', '0.095', '0.110'),
    ...solved(20, 'A', 'Q = 0.074 m³/s', 500),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q21',
    number: 21,
    pageNumber: 488,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 4 — Actual Orifice Discharge',
    text: 'Situation 4 – Water flows through a 100-mm-diameter orifice. The depth of water above the orifice center is 9 m.\n\nRepeat Part 1 if the coefficient of contraction is 0.64 and the coefficient of velocity is 0.987',
    options: opts('0.054', '0.075', '0.095', '0.067'),
    ...solved(
      21,
      'D',
      'Q = 0.067 m³/s',
      500,
      500,
      'The stem gives $C_c = 0.64$ and $C_v = 0.987$, but the printed working uses $C_c = 0.65$ and $C_v = 0.98$, giving $C = 0.627$ and $Q = 0.067\\ \\text{m}^3/\\text{s}$. The key (D = 0.067) follows the working, not the stem.',
    ),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q22',
    number: 22,
    pageNumber: 488,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Specific Gravity of a Mixture',
    text: 'In a bakery, water is forced through pipe A at 150 liters per second. Oil (sg = 0.8) is forced through pipe B at 30 liters per second. Assume ideal mixing of incompressible fluids and the mixture of oil and water form globules and exits through pipe C. Evaluate the specific gravity of the mixture exiting through pipe C.',
    options: opts('0.856', '0.967', '0.976', '0.865'),
    ...solved(22, 'B', 'sgc = 0.967', 501),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q23',
    number: 23,
    pageNumber: 488,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Pipe Sizing from Head Loss',
    text: 'Obtain the diameter of a pipe to carry 30 liters per second with a head loss of 0.5 m in a length of 300 m. The coefficient of friction is 0.025.',
    options: opts('0.385 m', '0.257 m', '0.315 m', '0.235 m'),
    ...solved(23, 'B', 'D = 0.257 m', 501),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q24',
    number: 24,
    pageNumber: 488,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Mean Velocity in a Trapezoidal Canal',
    text: 'Water flows through a trapezoidal irrigation canal, 500 mm deep, by 2 m wide at the top by 1 m wide at bottom, at the rate of $80\\ \\text{m}^3/\\text{min}$. Determine the mean velocity of flow in m/sec.',
    options: opts('2.32', '1.78', '106.7', '85.3'),
    ...solved(24, 'B', 'v = 1.778 m/s', 501),
  },
];
