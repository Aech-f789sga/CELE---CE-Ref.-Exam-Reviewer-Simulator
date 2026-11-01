import { Question } from '../../../types/exam';
import { hpgeNov2015Figure } from '../../hpgeNov2015Images';
import { solved, recall, opts } from './nov2015Helpers';

export const HPGE_NOV2015_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q1',
    number: 1,
    pageNumber: 164,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Fluid Properties — Unit Weight of Air',
    text: 'What is the unit weight of dry air at standard temperature and pressure?',
    options: opts('10.6 N/m³', '15.3 N/m³', '11.3 N/m³', '12.5 N/m³'),
    ...solved(1, 'D', '12.5 N/m³ (Option D)', 174),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q2',
    number: 2,
    pageNumber: 164,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Fluid Properties — Atmosphere to Metres of Water',
    text: 'How many meters of water is equivalent to 2.55 atmospheres?',
    options: opts('23.24 m', '27.37 m', '26.34 m', '25.14 m'),
    ...solved(2, 'C', '26.34 m (Option C)', 174),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q3',
    number: 3,
    pageNumber: 164,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Fluid Properties — Absolute and Gage Pressure',
    text: 'The absolute pressure of air in a water condenser is 40 kPa. What is the gage pressure 1.5 m below the water surface?',
    options: opts('54.72 kPa', '−46.61 kPa', '156.04 kPa', '−63.89 kPa'),
    ...solved(3, 'B', '−46.61 kPa (Option B)', 174),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q4',
    number: 4,
    pageNumber: 164,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Fluid Properties — Manometer',
    text: 'What is the pressure at $A$ in the figure shown?',
    figureSvg: hpgeNov2015Figure(
      'q4',
      'Figure for item 4: a closed vessel A filled with water leads into a U-tube; water runs down the left leg to B, a gage liquid of specific gravity 10 fills the U up to C in the right leg, 150 mm stands between C and the water level in the open leg, and 450 mm of gage liquid lies below C.',
    ),
    figureCaption:
      'Figure 4: Water vessel A on a U-tube manometer with a gage liquid of sg = 10.',
    options: opts('32.56 kPa', '40.89 kPa', '38.26 kPa', '43.25 kPa'),
    ...solved(4, 'C', '38.26 kPa (Option C)', 174),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q5',
    number: 5,
    pageNumber: 164,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Fluid Mechanics — Barometer and Altitude',
    text: 'A mercury barometer at the top of the mountain reads 460 mm Hg. At the same time, another barometer at the base reads 536 mmHg. Assuming that the unit weight of air is constant at $12\\ \\text{N/m}^3$, how high is the mountain?',
    options: opts('765 m', '845 m', '632 m', '812 m'),
    ...solved(5, 'B', '845 m (Option B)', 175),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q6',
    number: 6,
    pageNumber: 164,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Fluid Mechanics — Hydraulic Jack',
    text: 'A 10-kN car is to be lifted by a hydraulic jack. If a 400-N force is applied on a 25-mm-diameter plunger, find the required diameter of the piston.',
    options: opts('120', '135', '130', '125'),
    ...solved(6, 'D', '125 mm (Option D)', 175),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q7',
    number: 7,
    pageNumber: 164,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Hydrostatics — Centre of Pressure on a Triangular Plate',
    text: 'A vertical triangular plate has a base of 1.2 m and depth of 2.4 m. The base is horizontal and flush with the water surface. What is the distance of force of water below the centroid of the plate?',
    options: opts('0.3 m', '0.4 m', '0.2 m', '0.1 m'),
    ...solved(7, 'B', '0.4 m (Option B)', 175),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q8',
    number: 8,
    pageNumber: 164,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 1 — Hydrostatic Force on an Inclined Gate',
    text: 'Situation 1 – A rectangular gate 1.2 m by 3 m is inclined 60° with the horizontal. The top of the gate is submerged at a depth of 2 m, the longer side parallel to the water surface.\n\n8. Find the total hydrostatic force in kN.',
    options: opts('116.51', '168.69', '116.96', '88.98'),
    ...solved(8, 'D', '88.98 kN (Option D)', 176),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q9',
    number: 9,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 1 — Location of the Hydrostatic Force',
    text: 'Situation 1 (continued) – Find the location of total hydrostatic force from the bottom of gate in meters.',
    options: opts('0.641', '1.303', '0.899', '0.559'),
    ...solved(9, 'D', '0.559 m (Option D)', 176),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q10',
    number: 10,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 1 — Force to Open the Gate',
    text: 'Situation 1 (continued) – If the gate is hinged at the top, find the force (kN) at the bottom normal to the gate required to open it.',
    options: opts('63.26', '47.55', '65.90', '92.84'),
    ...solved(10, 'B', '47.55 kN (Option B)', 176),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q11',
    number: 11,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 2 — Hydrostatic Force on a Gate in Molasses',
    text: 'Situation 2 – A vertical circular gate 0.90 m in diameter is immersed in molasses (s = 1.4). The top of the gate is 2.40 m below the surface of molasses. Determine the following:\n\n11. The total force acting on the gate.',
    options: opts('20.97 kN', '22.56 kN', '25.87 kN', '24.90 kN'),
    ...solved(11, 'D', '24.90 kN (Option D)', 176, 177),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q12',
    number: 12,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 2 — Location of the Force',
    text: 'Situation 2 (continued) – The location of the force from the bottom of the gate.',
    options: opts('0.429 m', '0.447 m', '0.103 m', '0.432 m'),
    ...solved(12, 'D', '0.432 m (Option D)', 177),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  // The booklet misprints this number as "12"; the sequence and the key both
  // treat it as item 13.
  {
    id: 'hpge-nov2015-q13',
    number: 13,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 2 — Force to Keep the Gate Closed',
    text: 'Situation 2 (continued) – The horizontal force at the bottom required to keep the gate closed if it is hinged at the top.',
    options: opts('9.58 kN', '10.98 kN', '12.94 kN', '11.21 kN'),
    ...solved(13, 'C', '12.94 kN (Option C)', 177),
  },
];
