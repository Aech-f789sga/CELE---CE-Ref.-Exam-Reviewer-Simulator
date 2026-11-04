import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

export const HPGE_NOV2024_PART4: Question[] = [
  // Item 36
  {
    id: 'hpge-nov2024-q36',
    number: 36,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Earthwork & Embankment Compaction',
    text: 'Situation 4 — A highway embankment 10 m wide and 1.5 m thick after compaction is to be constructed using sandy soil hauled from a borrow pit. The soil in the borrow pit has a water content of 15% and a void ratio of 0.69. The embankment specification requires a compacted dry unit weight of 18 kN/m³. Assume a specific gravity of solids of (Gs = 2.7). For a 1 km length of embankment, determine the following:\n\nPart 1: The dry unit weight (kN/m³) of sandy soil from the borrow pit required to construct the embankment.',
    options: [
      { label: 'A', text: '16.54' },
      { label: 'B', text: '15.67' },
      { label: 'C', text: '16.33' },
      { label: 'D', text: '15.44' },
    ],
    ...solved(36, 'B', '15.67 (Option B)'),
  },

  // Item 37
  {
    id: 'hpge-nov2024-q37',
    number: 37,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Earthwork & Truckloads',
    text: 'Situation 4 — Part 2: The number of 10 m³ truckloads of sandy soil required for the construction.',
    options: [
      { label: 'A', text: '1561' },
      { label: 'B', text: '1660' },
      { label: 'C', text: '1821' },
      { label: 'D', text: '1723' },
    ],
    ...solved(37, 'D', '1723 (Option D)'),
  },

  // Item 38
  {
    id: 'hpge-nov2024-q38',
    number: 38,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Degree of Saturation',
    text: 'Situation 4 — Part 3: Determine the degree of saturation of the sandy soil in the borrow pit (in situ).',
    options: [
      { label: 'A', text: '58.7%' },
      { label: 'B', text: '78.5%' },
      { label: 'C', text: '65.7%' },
      { label: 'D', text: '75.6%' },
    ],
    ...solved(38, 'A', '58.7% (Option A)'),
  },

  // Item 39
  {
    id: 'hpge-nov2024-q39',
    number: 39,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Effective Stress Principle',
    text: 'Situation 5 — A 7.6 m thick clay layer is overlain by a 15.2 m thick sand deposit extending to the ground surface. When the groundwater table is at the ground surface, the sand has a saturated unit weight of 21.2 kN/m³ and a dry unit weight of 18.2 kN/m³. The saturated unit weight of the clay is 18.8 kN/m³. The groundwater table is then lowered by 7.6 m. The degree of saturation of the sand above the lowered groundwater table becomes 20%.\n\nPart 1: Evaluate the effective pressure, in kPa at the mid-height of the clay layer, before lowering the water table.',
    options: [
      { label: 'A', text: '393.68' },
      { label: 'B', text: '207.29' },
      { label: 'C', text: '263.61' },
      { label: 'D', text: '375.44' },
    ],
    ...solved(39, 'B', '207.29 (Option B)'),
  },

  // Item 40
  {
    id: 'hpge-nov2024-q40',
    number: 40,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Effective Stress Principle',
    text: 'Situation 5 — Part 2: Evaluate the effective pressure, in kPa, after lowering of the water table.',
    options: [
      { label: 'A', text: '393.68' },
      { label: 'B', text: '207.29' },
      { label: 'C', text: '263.61' },
      { label: 'D', text: '375.44' },
    ],
    ...solved(40, 'C', '263.61 (Option C)'),
  },

  // Item 41
  {
    id: 'hpge-nov2024-q41',
    number: 41,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Effective Stress Principle',
    text: 'Situation 5 — Part 3: Evaluate the effective pressure, in kPa, when there is no water in the sand layer, but it remains in moist condition at the same degree of saturation (S = 20%).',
    options: [
      { label: 'A', text: '319.92' },
      { label: 'B', text: '371.23' },
      { label: 'C', text: '322.31' },
      { label: 'D', text: '357.21' },
    ],
    ...solved(41, 'A', '319.92 (Option A)'),
  },

  // Item 42
  {
    id: 'hpge-nov2024-q42',
    number: 42,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Mechanics - Types of Flow',
    text: 'A stream with steady flow and the average velocity is the same at every cross-section along a given length, the flow is called:',
    options: [
      { label: 'A', text: 'Steady' },
      { label: 'B', text: 'Uniform' },
      { label: 'C', text: 'Laminar' },
      { label: 'D', text: 'Continuous' },
    ],
    ...solved(42, 'B', 'Uniform (Option B)'),
  },

  // Item 43
  {
    id: 'hpge-nov2024-q43',
    number: 43,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Pressure Measurement Instruments',
    text: 'A manometer is used to measure:',
    options: [
      { label: 'A', text: 'Low Pressure' },
      { label: 'B', text: 'Atmospheric Pressure' },
      { label: 'C', text: 'Fluid pressure in pipes' },
      { label: 'D', text: 'Velocity of flow in channels' },
    ],
    ...solved(43, 'C', 'Fluid pressure in pipes (Option C)'),
  },

  // Item 44
  {
    id: 'hpge-nov2024-q44',
    number: 44,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Open Channel Flow - Most Economical Section',
    text: 'What is the most efficient channel section?',
    options: [
      { label: 'A', text: 'Triangular' },
      { label: 'B', text: 'Trapezoidal' },
      { label: 'C', text: 'Rectangular' },
      { label: 'D', text: 'Semi-Circular' },
    ],
    ...solved(44, 'D', 'Semi-Circular (Option D)'),
  },

  // Item 45
  {
    id: 'hpge-nov2024-q45',
    number: 45,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Mechanics - Ideal Fluid Properties',
    text: 'An ideal liquid has the characteristic of:',
    options: [
      { label: 'A', text: 'compressible and viscous' },
      { label: 'B', text: 'same as gas' },
      { label: 'C', text: 'frictionless and compressible' },
      { label: 'D', text: 'frictionless and incompressible' },
    ],
    ...solved(45, 'D', 'frictionless and incompressible (Option D)'),
  },

  // Item 46
  {
    id: 'hpge-nov2024-q46',
    number: 46,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Forced Vortex in Cylindrical Vessel',
    text: 'In a vessel containing water, what is the relationship between the height of the rise at the sides and the depth of the depression at the center?',
    options: [
      { label: 'A', text: 'The rise at the sides is greater than the depression at the center.' },
      { label: 'B', text: 'The rise at the sides is equal to the depression at the center.' },
      { label: 'C', text: 'The rise at the sides is less than the depression at the center.' },
      { label: 'D', text: 'The rise at the sides and the dip in the middle do not have a constant relationship.' },
    ],
    ...solved(46, 'B', 'The rise at the sides is equal to the depression at the center (Option B)'),
  },
];
