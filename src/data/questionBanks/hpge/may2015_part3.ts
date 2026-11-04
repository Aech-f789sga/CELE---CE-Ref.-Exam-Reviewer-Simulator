import { Question } from '../../../types/exam';
import { solved, recall, worked, opts } from './may2015Helpers';
import { hpgeMay2015Figure } from '../../hpgeMay2015Images';

export const HPGE_MAY2015_PART3: Question[] = [
  // Item 31
  {
    id: 'hpge-may2015-q31',
    number: 31,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'Situation 1 (continued) – The specific gravity of the stone.',
    options: opts('2.692', '3.778', '3.500', '3.182'),
    ...solved(31, 'D', '3.182 (Option D)', 57),
  },

  // Item 32
  {
    id: 'hpge-may2015-q32',
    number: 32,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 2 – A rectangular gate 3 m high and 1.2 m wide is hinged at the top. A force to keep the gate closed is applied at the bottom with an angle of 45° with the vertical. Compute the magnitude of this force if: The water surface is level with the top of the gate.',
    options: opts('62.43 kN', '41.62 kN', '49.94 kN', '58.27 kN'),
    ...solved(32, 'C', '49.94 kN (Option C)', 57, 58),
  },

  // Item 33
  {
    id: 'hpge-may2015-q33',
    number: 33,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 2 (continued) – The water surface is 0.9 m above the top of the gate.',
    options: opts('60.35 kN', '72.42 kN', '90.52 kN', '84.49 kN'),
    ...solved(33, 'B', '72.42 kN (Option B)', 57, 58),
  },

  // Item 34
  {
    id: 'hpge-may2015-q34',
    number: 34,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 2 (continued) – The water surface is 0.9 m below the top of the gate.',
    options: opts('32.83 kN', '35.18 kN', '29.14 kN', '23.45 kN'),
    ...solved(34, 'C', '29.14 kN as printed — 28.14 kN by direct computation (Option C)', 57, 58),
  },

  // Item 35
  {
    id: 'hpge-may2015-q35',
    number: 35,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 3 – The gate shown in the figure is 2 meters wide. What is the force exerted by water on the left side of the gate?',
    figureSvg: hpgeMay2015Figure(
      3,
      'Figure 1: Vertical gate AB, 6 m tall, hinged at G in mid-height, with water 6 m deep on the left and 3 m deep on the right, bearing on a stop at A.',
    ),
    figureCaption:
      'Figure 1: Gate AB hinged at G, with 6 m of water on the left and 3 m on the right (Situation 3).',
    options: opts('264.87 kN', '353.16 kN', '176.58 kN', '441.45 kN'),
    ...solved(35, 'B', '353.16 kN (Option B)', 58),
  },

  // Item 36
  {
    id: 'hpge-may2015-q36',
    number: 36,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 3 (continued) – What is the force exerted by water on the right side of the gate?',
    options: opts('44.15 kN', '110.36 kN', '66.22 kN', '88.29 kN'),
    ...solved(36, 'D', '88.29 kN (Option D)', 58),
  },

  // Item 37
  {
    id: 'hpge-may2015-q37',
    number: 37,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 3 (continued) – What horizontal force at B is required to turn the gate about the hinge?',
    options: opts('73.58 kN', '29.43 kN·m', '44.15 kN', '58.86 kN'),
    ...solved(37, 'D', '58.86 kN (Option D)', 58),
  },

  // Item 38
  {
    id: 'hpge-may2015-q38',
    number: 38,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Dams and Retaining Walls',
    text: 'Situation 4 – For the concrete gravity dam shown, B = 4.20 m, b = 0.60 m, H = 7 m, and h = 6 m. Unit weight of concrete is 24 kN/m³. Considering 1-m length of dam, calculate the following: The total force exerted by water on the dam.',
    figureSvg: hpgeMay2015Figure(
      4,
      'Figure 2: Concrete gravity dam section, base B = 4.20 m, crest b = 0.60 m, height H = 7 m, impounded water depth h = 6 m.',
    ),
    figureCaption:
      'Figure 2: Gravity dam section with base B, crest b, height H and water depth h (Situation 4).',
    options: opts('240.35 kN', '176.58 kN', '196.42 kN', '154.78 kN'),
    ...solved(38, 'B', '176.58 kN (Option B)', 59),
  },

  // Item 39
  {
    id: 'hpge-may2015-q39',
    number: 39,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Dams and Retaining Walls',
    text: 'Situation 4 (continued) – The resisting moment.',
    options: opts('1119 kN-m', '1085 kN-m', '1265 kN-m', '956 kN-m'),
    ...solved(39, 'A', '1119 kN·m (Option A)', 59),
  },

  // Item 40
  {
    id: 'hpge-may2015-q40',
    number: 40,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Dams and Retaining Walls',
    text: 'Situation 4 (continued) – The factor of safety against overturning.',
    options: opts('2.25', '3.17', '1.99', '3.65'),
    ...solved(40, 'B', '3.17 (Option B)', 59),
  },

  // Item 41
  {
    id: 'hpge-may2015-q41',
    number: 41,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Curved Surface',
    text: 'Situation 5 – The 6-m-radius cylindrical gate shown in the figure is 10 m long into the paper. If θ = 60°, determine the following: The vertical component of the hydrostatic force.',
    figureSvg: hpgeMay2015Figure(
      5,
      'Figure 3: Cylindrical gate AB of radius R = 6 m subtending 60 degrees at the centre O, with water on the left up to the level of B.',
    ),
    figureCaption:
      'Figure 3: Cylindrical gate AB of radius R with centre O and θ = 60° (Situation 5).',
    options: opts('358.7 kN', '486.9 kN', '587.9 kN', '444.7 kN'),
    ...solved(41, 'D', '444.7 kN (Option D)', 59, 60),
  },

  // Item 42
  {
    id: 'hpge-may2015-q42',
    number: 42,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Curved Surface',
    text: 'Situation 5 (continued) – The horizontal component of the hydrostatic force.',
    options: opts('1324.4 kN', '1456.2 kN', '1287.9 kN', '1056.2 kN'),
    ...solved(42, 'A', '1324.4 kN (Option A)', 59, 60),
  },

  // Item 43
  {
    id: 'hpge-may2015-q43',
    number: 43,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Curved Surface',
    text: 'Situation 5 (continued) – The location (from point O) of the vertical component of the hydrostatic force.',
    options: opts('4.87 m', '4.52 m', '5.16 m', '5.54 m'),
    ...solved(43, 'C', '5.16 m (Option C)', 59, 60),
  },

  // Item 44
  {
    id: 'hpge-may2015-q44',
    number: 44,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Relative Equilibrium (Rotation)',
    text: 'Situation 6 – An open cylindrical tank 1.70 m in diameter and 2.10 m tall is two-thirds full of water. The tank is rotated about its own vertical axis at the rate of 90 rpm. What is the height of the paraboloid?',
    options: opts('2.58 m', '2.87 m', '3.27 m', '3.65 m'),
    ...solved(44, 'C', '3.27 m (Option C)', 60, 61),
  },

  // Item 45
  {
    id: 'hpge-may2015-q45',
    number: 45,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Relative Equilibrium (Rotation)',
    text: 'Situation 6 (continued) – Determine the volume of water spilled.',
    options: opts('1.524 m³', '1.241 m³', '1.854 m³', '1.648 m³'),
    ...solved(45, 'D', '1.648 m³ (Option D)', 60, 61),
  },
];
