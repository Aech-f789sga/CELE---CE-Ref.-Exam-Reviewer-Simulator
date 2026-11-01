import { Question } from '../../../types/exam';
import { hpgeNov2015Figure } from '../../hpgeNov2015Images';
import { solved, recall, opts } from './nov2015Helpers';

export const HPGE_NOV2015_PART4: Question[] = [
  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q43',
    number: 43,
    pageNumber: 168,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 10 — Flow in a Parallel Pipe Network',
    text: 'Situation 10 – The flow rate of water through the pipe system shown in the figure is 50 L/s under a total head loss of 9.0 m. Assume a C coefficient of 120 for all pipes.\n\n43. Calculate the flow through line B in L/s.',
    figureSvg: hpgeNov2015Figure(
      's10',
      'Figure for Situation 10: line A, 300 m of 200 mm pipe, enters a loop that splits into line B (266 m of 160 mm pipe) over the top and line C (190 m of pipe) along the bottom, then recombines into line D, 510 m of 250 mm pipe.',
    ),
    figureCaption:
      'Figure 10: Line A feeds a loop of line B (top) and line C (bottom), which discharges into line D.',
    options: opts('21', '28', '15', '19'),
    ...solved(43, 'D', '19 L/s (Option D)', 185),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q44',
    number: 44,
    pageNumber: 168,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 10 — Head Loss in Line B',
    text: 'Situation 10 (continued) – Calculate the head loss in line B in meters.',
    options: opts('2.4', '3.6', '2', '1.5'),
    ...solved(44, 'C', '2 m (Option C)', 185),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q45',
    number: 45,
    pageNumber: 168,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 10 — Diameter of Line C',
    text: 'Situation 10 (continued) – Determine the diameter of line C in mm.',
    options: opts('180', '170', '200', '220'),
    ...solved(45, 'A', '180 mm (Option A)', 185),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q46',
    number: 46,
    pageNumber: 168,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Open Channel — Manning Discharge',
    text: 'Water flows at a depth of 1.5 meters in a 6-m-wide rectangular channel. Find the discharge (in m³/s) if the channel is laid on a slope of 0.002. Use $n = 0.013$.',
    options: opts('30.96', '32.63', '28.54', '25.48'),
    ...solved(46, 'A', '30.96 m³/s (Option A)', 186),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q47',
    number: 47,
    pageNumber: 168,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 11 — Critical Depth From Specific Energy',
    text: 'Situation 11 – A rectangular channel 8-meter wide has constant specific energy of 2.20 meters.\n\n47. What is the critical depth of flow in meters?',
    options: opts('1.47', '1.65', '1.1', '1.76'),
    ...solved(47, 'A', '1.47 m (Option A)', 186),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q48',
    number: 48,
    pageNumber: 168,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 11 — Critical Velocity',
    text: 'Situation 11 (continued) – Calculate the critical velocity in m/s.',
    options: opts('3.28', '3.79', '4.02', '4.15'),
    ...solved(48, 'B', '3.79 m/s (Option B)', 186),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q49',
    number: 49,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 11 — Critical Slope',
    text: 'Situation 11 (continued) – Calculate the critical slope assuming $n = 0.013$.',
    options: opts('0.0020', '0.0024', '0.0022', '0.0026'),
    ...solved(49, 'C', '0.0022 (Option C)', 186),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q50',
    number: 50,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Soil Strength — Cohesion',
    text: 'Which component of rock or soil is independent of interparticle friction?',
    options: opts('adhesion', 'cohesion', 'plasticity', 'skin friction'),
    ...solved(50, 'B', 'cohesion (Option B)', 187),
  },

  // ── Item 51 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q51',
    number: 51,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Soil Behaviour — Liquefaction',
    text: 'A phenomenon in which the strength and stiffness of a soil is reduced by earthquake shaking or other rapid loading.',
    options: opts('liquefaction', 'settlement', 'erosion', 'solidification'),
    ...recall(
      'A',
      'liquefaction (Option A)',
      'Shaking raises the pore pressure until the effective stress — and with it the shear strength — collapses, so the soil behaves as a liquid. The booklet prints the answer without working.',
    ),
  },

  // ── Item 52 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q52',
    number: 52,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Soil Strength — Effective Stress',
    text: 'A pile of sand keeps from spreading out like a liquid because the weight of the sand keeps the grains stuck together in their current arrangement, mostly out of static friction. This weight and pressure is called.',
    options: opts('adhesion', 'internal friction', 'cohesion', 'effective stress'),
    ...recall(
      'D',
      'effective stress (Option D)',
      'The intergranular pressure carried by the grain-to-grain contacts — total stress less pore pressure — is the effective stress. The booklet prints the answer without working.',
    ),
  },

  // ── Item 53 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q53',
    number: 53,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Soil Composition — Phases',
    text: 'Which of the following is not a soil component?',
    options: opts('organic materials', 'minerals', 'gas', 'none of these'),
    ...recall(
      'C',
      'none of these (Option C)',
      'Soil is a three-phase system of solids (minerals), water and air/gas, with organic matter present in many soils — so every listed item is a soil component. The booklet prints the answer without working.',
    ),
  },

  // ── Item 54 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q54',
    number: 54,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Soil Index Properties — Void Ratio From Porosity',
    text: 'Calculate the void ratio of a soil sample with porosity of 0.25.',
    options: opts('40.67%', '30%', '20%', '33.33%'),
    ...solved(54, 'D', '33.33% (Option D)', 187),
  },

  // ── Item 55 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q55',
    number: 55,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Soil Index Properties — Moist Unit Weight',
    text: 'The dry unit weight of a soil sample is 10 kN/m³. What is the moist unit weight of the soil when its moisture content is 15%?',
    options: opts('10.8 kN/m³', '13.6 kN/m³', '11.5 kN/m³', '12.2 kN/m³'),
    ...solved(55, 'C', '11.5 kN/m³ (Option C)', 187),
  },

  // ── Item 56 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q56',
    number: 56,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Soil Testing — Particle Size Distribution',
    text: 'A practice or procedure used to assess the particle size distribution (also called gradation) of a granular material. The size distribution is often of critical importance to the way the material performs in use.',
    options: opts('consolidation test', 'standard penetration test', 'liquid limit test', 'sieve analysis'),
    ...recall(
      'D',
      'sieve analysis (Option D)',
      'Gradation is measured by sieving the sample through a stack of standard sieves and weighing the retained fractions — sieve analysis. The booklet prints the answer without working.',
    ),
  },

  // ── Item 57 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q57',
    number: 57,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Soil Classification — USCS Grain Sizes',
    text: 'According to USCS, what do you call a soil grain with grain size greater than 4.75 mm but less than 75 mm?',
    options: opts('rock', 'gravel', 'boulder', 'cobble'),
    ...solved(57, 'B', 'gravel (Option B)', 187),
  },

  // ── Item 58 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q58',
    number: 58,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Foundation Settlement — Influencing Factors',
    text: 'Which of the following does not affect the settlement of a footing:',
    options: opts('location of GWT', 'depth of backfill', 'plasticity of the soil', 'none of these'),
    ...recall(
      'D',
      'none of these (Option D)',
      'The water table position, the overburden removed or added by the backfill, and the compressibility that plasticity implies all change the settlement — so none can be excluded. The booklet prints the answer without working.',
    ),
  },
];
