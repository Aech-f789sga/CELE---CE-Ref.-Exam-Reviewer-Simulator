import { Question } from '../../../types/exam';
import { solved, recall, opts } from './nov2015Helpers';

export const HPGE_NOV2015_PART3: Question[] = [
  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q28',
    number: 28,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 7 — Rotating Tank, Water Reaches the Rim',
    text: 'Situation 7 – An open-top cylindrical tank 1 m in diameter and 2.5 m high is 3/5 full of water. Determine the angular speed in rpm if:\n\n28. The water will just touch the rim.',
    options: opts('119.6', '59.8', '105.4', '98.2'),
    ...solved(28, 'A', '119.6 rpm (Option A)', 180),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q29',
    number: 29,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 7 — Vortex Reaches the Bottom',
    text: 'Situation 7 (continued) – The vortex will just touch the bottom.',
    options: opts('66.9', '145.8', '133.7', '123.8'),
    ...solved(29, 'C', '133.7 rpm (Option C)', 180),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q30',
    number: 30,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 7 — Base Uncovered Near the Axis',
    text: 'Situation 7 (continued) – The base is uncovered within 20 cm from the vertical axis.',
    options: opts('145.9', '124.7', '105.9', '68.2'),
    ...solved(30, 'A', '145.9 rpm (Option A)', 181),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q31',
    number: 31,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 8 — Maximum Speed Without Spilling',
    text: 'Situation 8 – An open cylindrical tank 2 meters in diameter and 4 meters tall is half full of water. The tank is rotated about its vertical axis at constant angular speed.\n\n31. Find the maximum $\\omega$ (rpm) without spilling any water.',
    options: opts('80.21', '84.58', '75.32', '70.25'),
    ...solved(31, 'B', '84.58 rpm (Option B)', 181),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q32',
    number: 32,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 8 — Height at the Sides',
    text: 'Situation 8 (continued) – What is the height of water at the sides if the depth of water at the center is zero?',
    options: opts('3 m', '3.5 m', '4 m', '3.8 m'),
    ...solved(32, 'C', '4 m (Option C)', 181),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q33',
    number: 33,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 8 — Volume Spilled',
    text: 'Situation 8 (continued) – How much water is spilled (in liters) if the angular speed is 90 rpm?',
    options: opts('760', '854', '635', '734'),
    ...solved(33, 'D', '734 liters (Option D)', 182),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q34',
    number: 34,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Fluid Flow — Types of Flow',
    text: 'A flow in which the velocity of the fluid at a particular fixed point does not change with time.',
    options: opts('steady flow', 'continuous flow', 'laminar flow', 'turbulent flow'),
    ...recall(
      'A',
      'steady flow (Option A)',
      'When the velocity at every fixed point is invariant in time the flow is steady — the definition the booklet keys here. It prints no working for this item.',
    ),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q35',
    number: 35,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Pipe Flow — Head Loss Between Two Reservoirs',
    text: 'Water flows at the rate of 182 L/s in a 300-mm-diameter pipeline connecting two reservoirs. If the pipe length is 845 m and using $f = 0.021$, what is the difference in water surface elevation between the two reservoirs?',
    options: opts('18 m', '25 m', '20 m', '22 m'),
    ...solved(35, 'C', '20 m (Option C)', 183),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q36',
    number: 36,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Pipe Flow — Pressure Difference Up a Slope',
    text: 'Water flows upward through a 200 mm pipe laid on a sloping ground inclined 10° with the horizontal. Assuming steady flow of 75 L/s, what is the difference in pressure between a point B to a point A 500 meters up the slope? Assume $f = 0.015$.',
    options: opts('836.2 kPa', '958.6 kPa', '744.9 kPa', '623.4 kPa'),
    ...solved(36, 'B', '958.6 kPa (Option B)', 183),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q37',
    number: 37,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Pipe Flow — Hazen Williams Head Loss',
    text: 'Water flows through a new cast iron pipe at a velocity of 4.2 m/s. The pipe is 400 m long and has a diameter of 150 mm. Determine the head loss due to friction using Hazen Williams formula with $C_H = 110$.',
    options: opts('59.8 m', '55.32 m', '54.21 m', '61.25 m'),
    ...solved(37, 'A', '59.8 m (Option A)', 183, 184),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q38',
    number: 38,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Pipe Flow — Darcy-Weisbach Head Loss',
    text: 'Water flows through a new wrought iron pipe at a velocity of 2.5 m/s. The pipe is 360 m long and has a diameter of 100 mm. Determine the head loss due to friction using Darcy-Weisbach equation with $f = 0.026$.',
    options: opts('25.4 m', '22.1 m', '29.8 m', '32.6 m'),
    ...solved(38, 'C', '29.8 m (Option C)', 184),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q39',
    number: 39,
    pageNumber: 167,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Pipe Flow — Manning Head Loss',
    text: 'Water flows through a new cast iron pipe at a velocity of 1.8 m/s. The pipe is 480 m long and has a diameter of 150 mm. Determine the head loss due to friction using Manning’s formula with $n = 0.012$.',
    options: opts('19.6 m', '17.8 m', '22.4 m', '15.2 m'),
    ...solved(39, 'B', '17.8 m (Option B)', 184),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q40',
    number: 40,
    pageNumber: 168,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 9 — Theoretical Velocity in a Penstock',
    text: 'Situation 9 – A 150-mm-diameter penstock supplies water to a turbine under a constant head of 30 meters.\n\n40. Calculate the theoretical velocity of flow (m/s) through the penstock.',
    options: opts('22.14', '26.20', '19.81', '24.26'),
    ...solved(40, 'D', '24.26 m/s (Option D)', 184),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q41',
    number: 41,
    pageNumber: 168,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 9 — Theoretical Discharge',
    text: 'Situation 9 (continued) – Calculate the theoretical discharge in m³/s.',
    options: opts('0.350', '0.429', '0.391', '0.463'),
    ...solved(41, 'B', '0.429 m³/s (Option B)', 184),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q42',
    number: 42,
    pageNumber: 168,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 9 — Power Delivered by the Turbine',
    text: 'Situation 9 (continued) – Calculate the power (kW) delivered by the turbine if the system efficiency is 70%.',
    options: opts('48.67', '67.18', '111.28', '88.31'),
    ...solved(42, 'D', '88.31 kW (Option D)', 185),
  },
];
