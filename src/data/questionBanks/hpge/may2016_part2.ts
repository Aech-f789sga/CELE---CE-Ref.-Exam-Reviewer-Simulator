import { Question } from '../../../types/exam';
import { solved, recall, opts } from './may2016Helpers';

/**
 * HPGE — May 2016, items 14–25.
 *
 * Closes Situation 3, then the flow-classification and water-hammer recall
 * items, the projectile jet, the three-reservoir pipe network (Situation 4) and
 * the two open-channel items that open Situation 5.
 */
export const HPGE_MAY2016_PART2: Question[] = [
  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q14',
    number: 14,
    pageNumber: 278,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 3 — Tank Height to Avoid Spillage',
    text: 'Situation 3 (continued) – What height of tank is required to avoid spilling any water?',
    options: opts('2.357 m', '2.542 m', '2.289 m', '2.485 m'),
    ...solved(14, 'A', '$H_{min} = 2.357\\text{ m}$ (Option A)', 289),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q15',
    number: 15,
    pageNumber: 278,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Flow Classification',
    text: 'When the path lines of the individual particles of a flowing liquid are irregular curves and continually cross each other and form a complicated network, the flow is called:',
    options: opts('continuous', 'laminar', 'turbulent', 'uniform'),
    ...recall(
      'C',
      'turbulent (Option C)',
      'Irregular, mutually crossing path lines that form a tangled network are the definition of turbulent flow; laminar flow has smooth parallel path lines and uniform flow has the same velocity at every point along a streamline.',
    ),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q16',
    number: 16,
    pageNumber: 278,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Energy and Hydraulic Grade',
    text: 'A line joining the points of highest elevation of water in a series of vertical open pipes rising from a pipeline in which water flows under pressure is referred to as:',
    options: opts('hydraulic loss', 'hydraulic gradient', 'hydraulic jump', 'hydraulic head'),
    ...recall(
      'B',
      'hydraulic gradient (Option B)',
      'Those standpipes are piezometers: the height each one reaches is the pressure head plus the elevation head at that section, so the line drawn through their tops is the hydraulic grade line, or hydraulic gradient. The energy grade line sits one velocity head above it.',
    ),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q17',
    number: 17,
    pageNumber: 279,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Energy and Velocity Head',
    text: 'Given a velocity head of 5 m. What will be the velocity head if the velocity is increased to three times its original value?',
    options: opts('15 m', '35 m', '45 m', '30 m'),
    ...solved(17, 'C', '$9 \\times 5 = 45\\text{ m}$ (Option C)', 289),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q18',
    number: 18,
    pageNumber: 279,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Unsteady Flow — Water Hammer',
    text: 'A pressure surge or wave caused when a fluid in motion is forced to stop or change direction suddenly (momentum change) is referred to in hydraulics as:',
    options: opts('potential head', 'hydraulic jump', 'water hammer', 'hydrodynamics'),
    ...recall(
      'C',
      'water hammer (Option C)',
      'The pressure surge raised when a liquid column is brought to rest abruptly — by closing a valve, say — is water hammer. A hydraulic jump is the standing wave in an open channel where supercritical flow is forced back to subcritical.',
    ),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q19',
    number: 19,
    pageNumber: 279,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Kinematics of a Jet',
    text: 'A fireman has to put out a fire but is blocked by a firewall. To reach over the wall, he directed the water jet from the nozzle at an angle of 30° to the horizontal. Evaluate the velocity of the water, in m/s, leaving the nozzle of his hose to reach over the wall if he stands 30 meters away from the wall and the wall is standing 2 m higher than the nozzle of the hose. Neglect friction in the jet.',
    options: opts('25.3', '21.5', '19.6', '17.2'),
    ...solved(19, 'C', '$v_o = 19.597\\text{ m/s}$ (Option C)', 290),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q20',
    number: 20,
    pageNumber: 279,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 4 — Pipe Network Design',
    text: 'Situation 4 – Reservoir A, the source of water for towns C and D, is at elevation 150 m. The distribution reservoir at junction B is at elevation 91.46 m and is 15,200 m from reservoir A. Town C, with a population of 25,000, is at elevation 30.49 m and is 9,150 m from junction B. Town D, with a population of 30,000, is at elevation 15.49 m and is 6,100 m from junction B. The water demand is 150 liters per capita per day. Assume f = 0.02 for all pipes.\n\nWhat is the required diameter of pipe AB in meter?',
    options: opts('0.450', '0.390', '0.330', '0.650'),
    ...solved(20, 'C', '$D_1 = 0.33\\text{ m}$ (Option C)', 291),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q21',
    number: 21,
    pageNumber: 279,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 4 — Diameter of Pipe BC',
    text: 'Situation 4 (continued) – What is the required diameter of pipe BC in meter?',
    options: opts('0.216', '0.254', '0.192', '0.234'),
    ...solved(21, 'A', '$D_2 = 0.2157\\text{ m}$ (Option A)', 290, 291),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q22',
    number: 22,
    pageNumber: 279,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 4 — Diameter of Pipe BD',
    text: 'Situation 4 (continued) – What is the required diameter of pipe BD in meter?',
    options: opts('0.225', '0.205', '0.185', '0.264'),
    ...solved(22, 'B', '$D_3 = 0.2048\\text{ m}$ (Option B)', 291),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q23',
    number: 23,
    pageNumber: 279,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Open Channel Flow — Rectangular Section',
    text: 'Water flows through a rectangular irrigation canal, 500 mm deep by 1 m wide, with a mean velocity of 2.5 m/s. Determine the rate of flow in m³/min.',
    options: opts('75', '1.25', '65', '2.35'),
    ...solved(23, 'A', '$Q = 1.25\\text{ m}^3/\\text{s} = 75\\text{ m}^3/\\text{min}$ (Option A)', 291),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q24',
    number: 24,
    pageNumber: 279,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Open Channel Flow — Manning Slope',
    text: 'A trapezoidal canal has a bottom width of 4 m and side slopes of 2 horizontal to 1 vertical. When the depth of flow is 1.2 m, the flow is 35 m³/s. The roughness coefficient n = 0.015. Evaluate the slope of the channel using Manning\'s formula.',
    options: opts('0.00609', '0.00824', '0.00756', '0.00572'),
    ...solved(24, 'A', '$S = 0.00609$ (Option A)', 291, 292),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q25',
    number: 25,
    pageNumber: 280,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 5 — Hydraulic Radius of a Trapezoidal Canal',
    text: 'Situation 5 – An irrigation canal with a trapezoidal cross-section has the following elements: bottom width = 2 m, depth of water = 0.9 m, side slope = 1.5 horizontal to 1 vertical, slope of canal bed = 0.001, coefficient of roughness n = 0.025. The canal will serve clay-loam rice land.\n\nWhat is the hydraulic radius in meters?',
    options: opts('0.621', '0.575', '0.592', '0.524'),
    ...solved(25, 'B', '$R = 0.5748\\text{ m}$ (Option B)', 292),
  },
];
