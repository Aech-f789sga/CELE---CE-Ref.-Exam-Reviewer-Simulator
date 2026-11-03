import { Question } from '../../../types/exam';
import { hpgeNov2017Figure } from '../../hpgeNov2017Images';
import { solved, opts } from './nov2017Helpers';

const SIT4 =
  'Situation 4 – An open cylindrical tank 0.3 m in diameter and 0.8 m tall is rotated about its own vertical axis at 240 rpm. The tank is filled with water to a certain depth such that no water is spilled during rotation.';

const SIT5 =
  'Situation 5 – A jet is issued from the side of a tank under a constant head as shown. The side of the tank has an inclination of 1H to 1V. The total depth of water in the tank is $h_1 = 8\\ \\text{m}$ and the orifice is located $h_2 = 3\\ \\text{m}$ above the bottom of the tank. Neglecting air resistance and assuming $C_v = 1.0$, determine the following:';

const SIT5_FIG = hpgeNov2017Figure(
  'fig_jet',
  'A tank whose side slopes at 1H to 1V, with a jet issuing from an orifice and following a parabolic path: y is the height of the jet above the orifice, x the horizontal distance to the plane where it lands, h₁ the total water depth, h₂ the orifice height above the tank bottom and h₃ the drop from the orifice to the landing plane.',
);

const SIT6 =
  'Situation 6 – Given the following data for the three reservoirs shown:\n\n' +
  'Reservoir A: Elevation $= 30\\ \\text{m}$, $L_1 = 1220\\ \\text{m}$, $D_1 = 300\\ \\text{mm}$\n' +
  'Reservoir B: Elevation $= 24\\ \\text{m}$, $L_2 = 900\\ \\text{m}$, $D_2 = 200\\ \\text{mm}$\n' +
  'Reservoir C: Elevation $= 15\\ \\text{m}$, $L_3 = 1500\\ \\text{m}$, $D_3 = 150\\ \\text{mm}$\n\n' +
  'Assuming $n = 0.011$ for all pipes, determine the following:';

const SIT6_FIG = hpgeNov2017Figure(
  'fig_reservoirs',
  'Three reservoirs A, B and C at different water-surface elevations joined by pipes 1, 2 and 3 that meet at a common junction O.',
);

const SIT7 =
  'Situation 7 – Given the following soil properties:\n\n' +
  'Field unit weight of soil $= 1800\\ \\text{kg/m}^3$\n' +
  'Saturated unit weight $= 2000\\ \\text{kg/m}^3$\n' +
  'Moisture content $= 12\\%$\n\n' +
  'Evaluate the following:';

const SIT6_NOTE =
  'The booklet works all three parts of this situation in a single continuous block — there are no Part headings, and the three discharges are read off one closing "Finally:" panel on folio 605. Both crops therefore carry the whole derivation and are shared with items 20 and 22.';

export const HPGE_NOV2017_PART2: Question[] = [
  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q13',
    number: 13,
    pageNumber: 589,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Rotating Liquid',
    text: SIT4 + '\n\n(1) What is the initial depth of water in the tank?',
    options: opts('0.362 m', '0.438 m', '0.524 m', '0.487 m'),
    ...solved(13, 'B', '0.438 m'),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q14',
    number: 14,
    pageNumber: 589,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Rotating Liquid',
    text: SIT4 + '\n\n(2) What rotation in rpm will spill 1.4 liters of water?',
    options: opts('274.2', '214.8', '258.9', '246.5'),
    ...solved(14, 'D', '246.47 rpm'),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q15',
    number: 15,
    pageNumber: 589,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Rotating Liquid',
    text:
      SIT4 + '\n\n(3) What rotation is needed so that the pressure at the center bottom is zero?',
    options: opts('234.6 rpm', '241.7 rpm', '252.2 rpm', '278.9 rpm'),
    ...solved(15, 'C', '252.2 rpm'),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q16',
    number: 16,
    pageNumber: 589,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Orifice Jet',
    text: SIT5 + '\n\n(1) The maximum height to which the jet will rise above the orifice.',
    figureSvg: SIT5_FIG,
    figureCaption: 'Situation 5 — jet issuing from an inclined tank wall',
    options: opts('2.5 m', '3 m', '2 m', '3.5 m'),
    ...solved(16, 'A', '2.50 m'),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q17',
    number: 17,
    pageNumber: 590,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Jet Trajectory',
    text:
      SIT5 +
      '\n\n(2) The point "x" the jet will strike a horizontal plane 1.20 m below the bottom of the tank.',
    figureSvg: SIT5_FIG,
    figureCaption: 'Situation 5 — jet issuing from an inclined tank wall',
    options: opts('14.7 m', '11.1 m', '15.6 m', '13.2 m'),
    ...solved(17, 'D', '13.185 m'),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q18',
    number: 18,
    pageNumber: 590,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Jet Trajectory',
    text:
      SIT5 +
      '\n\n(3) The time it takes for the jet to strike a horizontal plane 1.20 m below the bottom of the tank.',
    figureSvg: SIT5_FIG,
    figureCaption: 'Situation 5 — jet issuing from an inclined tank wall',
    options: opts('1.88 s', '2.32 s', '1.54 s', '1.62 s'),
    ...solved(18, 'A', '1.883 s'),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q19',
    number: 19,
    pageNumber: 590,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Tank Emptying',
    text: 'A cylindrical tank 2.5 m in diameter and 3 m tall is two-thirds full of water. Compute the time (in minutes) to empty the tank after opening the 50-mm-diameter orifice located at the tank bottom. Assume $C_c = C_v = 1.0$.',
    options: opts('37.6', '28.6', '26.6', '27.6'),
    ...solved(19, 'C', '26.6 min'),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q20',
    number: 20,
    pageNumber: 590,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Pipe Networks',
    text: SIT6 + '\n\n(1) The flow in line 1 in m³/s.',
    figureSvg: SIT6_FIG,
    figureCaption: 'Situation 6 — three-reservoir network',
    options: opts('0.0319', '0.0598', '0.0434', '0.1595'),
    ...solved(20, 'C', '0.0434 m³/s'),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q21',
    number: 21,
    pageNumber: 590,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Pipe Networks',
    text: SIT6 + '\n\n(2) The flow in line 2 in m³/s.',
    figureSvg: SIT6_FIG,
    figureCaption: 'Situation 6 — three-reservoir network',
    options: opts('0.0366', '0.0266', '0.0195', '0.0975'),
    ...solved(21, 'B', '0.0266 m³/s', SIT6_NOTE),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q22',
    number: 22,
    pageNumber: 590,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Pipe Networks',
    text: SIT6 + '\n\n(3) The flow in line 3 in m³/s.',
    figureSvg: SIT6_FIG,
    figureCaption: 'Situation 6 — three-reservoir network',
    options: opts('0.0620', '0.0168', '0.0233', '0.0124'),
    ...solved(22, 'B', '0.0168 m³/s', SIT6_NOTE),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q23',
    number: 23,
    pageNumber: 591,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Weight-Volume Relationships',
    text: 'The porosity of a soil sample is 40%. What is the void ratio?',
    options: opts('66.7%', '28.6%', '73.2%', '56.8%'),
    ...solved(23, 'A', '66.7%'),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q24',
    number: 24,
    pageNumber: 591,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Soil Properties',
    text: SIT7 + '\n\n(1) The porosity of the soil.',
    options: opts('36.5%', '42.1%', '64.7%', '39.3%'),
    ...solved(24, 'D', '39.29%'),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q25',
    number: 25,
    pageNumber: 591,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Soil Properties',
    text: SIT7 + '\n\n(2) The dry unit weight in kN/m³.',
    options: opts('15.77', '12.36', '13.65', '14.25'),
    ...solved(25, 'A', '15.77 kN/m³'),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q26',
    number: 26,
    pageNumber: 591,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Soil Properties',
    text: SIT7 + '\n\n(3) The degree of saturation.',
    options: opts('52.3%', '63.8%', '49.1%', '36.2%'),
    ...solved(26, 'C', '49.1%'),
  },
];
