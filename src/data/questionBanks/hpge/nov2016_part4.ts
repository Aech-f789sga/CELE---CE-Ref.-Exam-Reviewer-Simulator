import { Question } from '../../../types/exam';
import { solved, opts } from './nov2016Helpers';

/**
 * HPGE November 2016, items 39–50.
 *
 * Closes the geotechnics: horizontal flow through a stratified deposit
 * (Situation 8, items 39–41), Rankine earth pressure, the pile-group count, then
 * Boussinesq point-load stresses (Situation 9, items 44–46), the SPT-to-strength
 * correlation with its printed consistency table, and finally the NSCP
 * allowable-bearing increase (Situation 10, items 48–50) that ends the section.
 */
export const HPGE_NOV2016_PART4: Question[] = [
  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q39',
    number: 39,
    pageNumber: 382,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 8 — Equivalent Horizontal Permeability',
    text: 'Situation 8 – A stratified soil consist of the following layers:\n\nLayer 1: Thickness, $H_1 = 4\\text{ cm}$, $k_1 = 3 \\times 10^{-4}\\ \\text{cm/s}$\nLayer 2: Thickness, $H_2 = 5\\text{ cm}$, $k_2 = 2 \\times 10^{-5}\\ \\text{cm/s}$\nLayer 3: Thickness, $H_3 = 3\\text{ cm}$, $k_3 = 3 \\times 10^{-3}\\ \\text{cm/s}$\nLayer 4: Thickness, $H_4 = 3\\text{ cm}$, $k_4 = 3 \\times 10^{-4}\\ \\text{cm/s}$\n\nEvaluate the equivalent coefficient of permeability for flow in the horizontal direction, in cm/s.',
    options: opts('0.00214', '0.00324', '0.00129', '0.00186'),
    ...solved(
      39,
      'C',
      '$0.00129\\ \\text{cm/s}$ (Option C)',
      395,
      395,
      'Weighting the four printed permeabilities by thickness gives about $7.5 \\times 10^{-4}$ cm/s, not the keyed 0.00129. The scanned working on the facing page is the booklet’s own arithmetic and is what the key follows; items 40 and 41 then carry that 0.00129 forward and agree with their own keyed options.',
    ),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q40',
    number: 40,
    pageNumber: 382,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 8 — Flow per Meter Width',
    text: 'Situation 8 – A stratified soil consist of the following layers:\n\nLayer 1: Thickness, $H_1 = 4\\text{ cm}$, $k_1 = 3 \\times 10^{-4}\\ \\text{cm/s}$\nLayer 2: Thickness, $H_2 = 5\\text{ cm}$, $k_2 = 2 \\times 10^{-5}\\ \\text{cm/s}$\nLayer 3: Thickness, $H_3 = 3\\text{ cm}$, $k_3 = 3 \\times 10^{-3}\\ \\text{cm/s}$\nLayer 4: Thickness, $H_4 = 3\\text{ cm}$, $k_4 = 3 \\times 10^{-4}\\ \\text{cm/s}$\n\nObtain the rate of flow per meter width of the deposit, in cubic centimeters per second if the hydraulic gradient for the soil formation is 0.70.',
    options: opts('1.35', '3.32', '4.58', '2.82'),
    ...solved(40, 'A', '$1.35\\ \\text{cm}^3/\\text{s}$ (Option A)', 395),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q41',
    number: 41,
    pageNumber: 382,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 8 — Discharge in Cubic Meters per Day',
    text: 'Situation 8 – A stratified soil consist of the following layers:\n\nLayer 1: Thickness, $H_1 = 4\\text{ cm}$, $k_1 = 3 \\times 10^{-4}\\ \\text{cm/s}$\nLayer 2: Thickness, $H_2 = 5\\text{ cm}$, $k_2 = 2 \\times 10^{-5}\\ \\text{cm/s}$\nLayer 3: Thickness, $H_3 = 3\\text{ cm}$, $k_3 = 3 \\times 10^{-3}\\ \\text{cm/s}$\nLayer 4: Thickness, $H_4 = 3\\text{ cm}$, $k_4 = 3 \\times 10^{-4}\\ \\text{cm/s}$\n\nEvaluate the discharge of the aquifer in cubic meters per day.',
    options: opts('0.325', '0.117', '0.095', '0.228'),
    ...solved(41, 'B', '$0.117\\ \\text{m}^3/\\text{day}$ (Option B)', 395),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q42',
    number: 42,
    pageNumber: 382,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Lateral Earth Pressure — Rankine Active Coefficient',
    text: 'Obtain the Rankine’s active pressure coefficient of a soil mass whose angle of friction $\\phi$ is $18^\\circ$.',
    options: opts('0.85', '0.76', '0.53', '0.42'),
    ...solved(42, 'C', '0.53 (Option C)', 396),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q43',
    number: 43,
    pageNumber: 382,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Deep Foundations — Number of Piles in a Group',
    text: 'Pile group:\n\nPile size: 400 mm × 400 mm\nPile length = 20 m\nTotal load, Q = 12 MN\nEfficiency = 82%\nUnconfined compression strength, $q_u = 120\\text{ kPa}$\nAdhesion factor = 1\n\nWhat is the required number of piles.',
    options: opts('7', '8', '16', '13'),
    ...solved(43, 'B', '8 piles (Option B)', 396),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q44',
    number: 44,
    pageNumber: 383,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 9 — Vertical Stress Directly Under the Load',
    text: 'Situation 9 – According to the elastic theory, the vertical stress induced by a point load of magnitude Q (kN) on the surface of a semi-infinite soil mass can be estimated by the expression\n\n$\\Delta p = 0.477QN/z^2$, where $N = 1/\\left[1 + (r/z)^2\\right]^{2.5}$\n\nWhere:\n$r$ = horizontal distance of the point from the load\n$z$ = depth of the point at which stress is induced\n\nA point load Q = 1500 kN is applied at the ground surface.\n\nEvaluate the stress in the soil caused by the point load at a depth of 2.5 m directly below the load, in kPa.',
    options: opts('136.5', '95.2', '114.5', '127.9'),
    ...solved(44, 'C', '$114.5\\text{ kPa}$ (Option C)', 396),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q45',
    number: 45,
    pageNumber: 383,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 9 — Vertical Stress at 5 m Depth',
    text: 'Situation 9 – According to the elastic theory, the vertical stress induced by a point load of magnitude Q (kN) on the surface of a semi-infinite soil mass can be estimated by the expression\n\n$\\Delta p = 0.477QN/z^2$, where $N = 1/\\left[1 + (r/z)^2\\right]^{2.5}$\n\nWhere:\n$r$ = horizontal distance of the point from the load\n$z$ = depth of the point at which stress is induced\n\nA point load Q = 1500 kN is applied at the ground surface.\n\nEvaluate the stress in the soil caused by the point load at a depth of 5 m directly below the load, in kPa.',
    options: opts('54.8', '15.1', '28.6', '36.9'),
    ...solved(45, 'C', '$28.6\\text{ kPa}$ (Option C)', 396),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q46',
    number: 46,
    pageNumber: 383,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 9 — Stress Off the Load Axis',
    text: 'Situation 9 – According to the elastic theory, the vertical stress induced by a point load of magnitude Q (kN) on the surface of a semi-infinite soil mass can be estimated by the expression\n\n$\\Delta p = 0.477QN/z^2$, where $N = 1/\\left[1 + (r/z)^2\\right]^{2.5}$\n\nWhere:\n$r$ = horizontal distance of the point from the load\n$z$ = depth of the point at which stress is induced\n\nA point load Q = 1500 kN is applied at the ground surface.\n\nEvaluate the stress at a depth of 2.5 m and a horizontal distance of 3 m from the point load.',
    options: opts('19.6', '12.3', '8.2', '5.4'),
    ...solved(46, 'B', '$12.3\\text{ kPa}$ (Option B)', 397),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q47',
    number: 47,
    pageNumber: 383,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Soil Exploration — SPT to Unconfined Strength',
    text:
      'A blow count N = 5 was obtained at a certain depth of a clay soil deposit. Estimate the unconfined compression strength of the clay deposit. See attached table.\n\n' +
      '| Consistency | Very Soft | Soft | Medium | Stiff | Very Stiff | Hard |\n' +
      '| --- | --- | --- | --- | --- | --- | --- |\n' +
      '| Unconfined compression strength (kPa) | 0–25 | 25–50 | 50–100 | 100–200 | 200–400 | — |\n' +
      '| Standard Penetration Resistance, N blows per foot (305 mm) | 0 to 2 | 2 to 4 | 4 to 8 | 8 to 16 | 16 to 32 | — |\n' +
      '| Unit weight (kN/m³) | 11 to 15 | — | 15 to 17 | 17 to 24 | — | > 24 |',
    options: opts('60', '70', '75', '62.5'),
    ...solved(47, 'D', '$62.5\\text{ kPa}$ (Option D)', 397),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q48',
    number: 48,
    pageNumber: 384,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 10 — Allowable Pressure, Width Only',
    text: 'Situation 10 – According to Section 304.2 of NSCP, the designated allowable foundation pressure of 100 kPa (Table 304-1 of NSCP) is for footing having a minimum footing width of 300 mm and minimum depth of 300 mm into the natural grade.\n\nAn increase of 20% is allowed for each additional 300 mm of width and/or depth to a maximum value of three times the designated value.\n\nCalculate the allowable foundation pressure (in kPa) of square footing 1.2 m in width and 300 mm in depth.',
    options: opts('160', '280', '180', '220'),
    ...solved(48, 'A', '$160\\text{ kPa}$ (Option A)', 398),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q49',
    number: 49,
    pageNumber: 384,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 10 — Allowable Pressure, Width and Depth',
    text: 'Situation 10 – According to Section 304.2 of NSCP, the designated allowable foundation pressure of 100 kPa (Table 304-1 of NSCP) is for footing having a minimum footing width of 300 mm and minimum depth of 300 mm into the natural grade.\n\nAn increase of 20% is allowed for each additional 300 mm of width and/or depth to a maximum value of three times the designated value.\n\nCalculate the allowable foundation pressure (in kPa) of square footing 1.2 m in width and 900 mm in depth.',
    options: opts('179', '225', '224', '200'),
    ...solved(49, 'C', '$224\\text{ kPa}$ (Option C)', 398),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q50',
    number: 50,
    pageNumber: 384,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 10 — Safe Load on the Footing',
    text: 'Situation 10 – According to Section 304.2 of NSCP, the designated allowable foundation pressure of 100 kPa (Table 304-1 of NSCP) is for footing having a minimum footing width of 300 mm and minimum depth of 300 mm into the natural grade.\n\nAn increase of 20% is allowed for each additional 300 mm of width and/or depth to a maximum value of three times the designated value.\n\nBased on the second question, find the safe load (in kN) on top of footing.',
    options: opts('254', '322', '328', '298'),
    ...solved(50, 'B', '$322\\text{ kN}$ (Option B)', 398),
  },
];
