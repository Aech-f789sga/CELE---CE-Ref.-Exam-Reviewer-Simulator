import { Question } from '../../../types/exam';
import { solved, recall, worked, opts } from './may2015Helpers';
import { hpgeMay2015Figure } from '../../hpgeMay2015Images';

export const HPGE_MAY2015_PART4: Question[] = [
  // Item 46
  {
    id: 'hpge-may2015-q46',
    number: 46,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Relative Equilibrium (Rotation)',
    text: 'Situation 6 (continued) – For the same depth of water of 1.4 m, what height of the tank is required to avoid spilling any water?',
    options: opts('2.963 m', '3.026 m', '2.690 m', '2.878 m'),
    ...solved(46, 'B', '3.026 m (Option B)', 60, 61),
  },

  // Item 47
  {
    id: 'hpge-may2015-q47',
    number: 47,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Orifices and Jets',
    text: 'Situation 7 – A jet is issued from the side of a tank under a constant as shown. The side of the tank has an inclination of 1H to 1V. The total depth of water in the tank is $h_1$ = 6.70 m and the orifice is located $h_2$ = 3.7 m above the bottom of the tank. Neglecting air resistance and assuming $C_v$ = 1.0, determine the following: The maximum height to which the jet will rise above the orifice.',
    figureSvg: hpgeMay2015Figure(
      7,
      'Figure 4: Tank with a 1H to 1V inclined side, water depth h1 = 6.70 m, orifice at h2 = 3.7 m above the base, showing the jet trajectory and the horizontal distance x.',
    ),
    figureCaption:
      'Figure 4: Jet issuing from an inclined tank wall, with h₁, h₂, x and y marked (Situation 7).',
    options: opts('1.5 meters', '2 meters', '1.85 meters', '2.5 meters'),
    ...solved(47, 'A', '1.5 m (Option A)', 62),
  },

  // Item 48
  {
    id: 'hpge-may2015-q48',
    number: 48,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Orifices and Jets',
    text: 'Situation 7 (continued) – The point "x" the jet will strike a horizontal plane 1.20 m below the bottom of the tank.',
    options: opts('10.87 meters', '12.35 meters', '10.39 meters', '9.2 meters'),
    ...solved(48, 'D', '9.2 m (Option D)', 62),
  },

  // Item 49
  {
    id: 'hpge-may2015-q49',
    number: 49,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Orifices and Jets',
    text: 'Situation 7 (continued) – The time it takes for the jet to strike a horizontal plane 1.20 m below the bottom of the tank.',
    options: opts('1.763 seconds', '1.695 seconds', '1.725 seconds', '1.735 seconds'),
    ...solved(49, 'B', '1.695 s (Option B)', 62),
  },

  // Item 50
  {
    id: 'hpge-may2015-q50',
    number: 50,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Specific Energy)',
    text: 'Situation 8 – A trapezoidal canal has bottom width of 5 m and side slopes of 2H to 1V. The flow is 30 m³/s when the depth of flow is 1.20 m. Use n = 0.013. Calculate the specific energy of flow.',
    options: opts('2.22 m', '1.78 m', '1.46 m', '2.58 m'),
    ...solved(50, 'B', '1.78 m (Option B)', 62, 63),
  },

  // Item 51
  {
    id: 'hpge-may2015-q51',
    number: 51,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Manning)',
    text: 'Situation 8 (continued) – What is the slope of channel bed?',
    options: opts('0.00325', '0.00403', '0.00105', '0.00237'),
    ...solved(51, 'D', '0.00237 (Option D)', 62, 63),
  },

  // Item 52
  {
    id: 'hpge-may2015-q52',
    number: 52,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Boundary Shear)',
    text: 'Situation 8 (continued) – Calculate the boundary shearing stress.',
    options: opts('8.86 Pa', '12.56 Pa', '19.92 Pa', '34.55 Pa'),
    ...solved(52, 'C', '19.92 Pa (Option C)', 62, 63),
  },

  // Item 53
  {
    id: 'hpge-may2015-q53',
    number: 53,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Networks (Three Reservoirs)',
    text: 'Situation 9 – Reservoir B in the figure receives 0.06 m³/s of flow. Determine the following: The flow in line AD.',
    figureSvg: hpgeMay2015Figure(
      9,
      'Figure 5: Three-reservoir network — reservoir A at El 100 m, reservoir C at El 82 m, and reservoir B, joined at junction D. Pipe AD is 1500 m of 450 mm at f = 0.0225; pipe BD is 500 m of 250 mm at f = 0.0178; pipe DC is 750 m of 300 mm at f = 0.0168.',
    ),
    figureCaption:
      'Figure 5: Three-reservoir network with junction D; A at El 100 m, C at El 82 m (Situation 9).',
    options: opts('0.219 m³/s', '0.203 m³/s', '0.233 m³/s', '0.173 m³/s'),
    ...solved(53, 'A', '0.219 m³/s (Option A)', 63, 64),
  },

  // Item 54
  {
    id: 'hpge-may2015-q54',
    number: 54,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Networks (Three Reservoirs)',
    text: 'Situation 9 (continued) – The flow in line DC.',
    options: opts('0.143 m³/s', '0.113 m³/s', '0.159 m³/s', '0.173 m³/s'),
    ...solved(54, 'C', '0.159 m³/s (Option C)', 63, 64),
  },

  // Item 55
  {
    id: 'hpge-may2015-q55',
    number: 55,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Networks (Three Reservoirs)',
    text: 'Situation 9 (continued) – The elevation of reservoir B.',
    options: opts('92.76 m', '90.07 m', '91.06 m', '89.09 m'),
    ...solved(55, 'B', '90.07 m (Option B)', 63, 64),
  },

  // Item 56
  {
    id: 'hpge-may2015-q56',
    number: 56,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Sizing (Distribution)',
    text: 'Situation 10 – Reservoir A, the source of water for towns C and D, is at elevation 200 m. The distribution reservoir at junction B is at elevation 91.56 m and 15,000 m from A. Town C with a population of 250,000 is at elevation 56 m and is 9,000 m from B. Town D with population of 300,000 is at elevation 15.21 m and is 6,000 m from B. The water demand is 150 liters per capita per day. Neglect all minor losses. Assume friction factor f = 0.02 for all pipes. Which of the following is nearest to the required diameter of line AB?',
    figureSvg: hpgeMay2015Figure(
      10,
      'Figure 6: Distribution layout — reservoir A feeding junction B, which splits into line L2 to Town C and line L3 to Town D.',
    ),
    figureCaption:
      'Figure 6: Reservoir A to junction B, then lines L₂ and L₃ to Towns C and D (Situation 10).',
    options: opts('730 mm', '660 mm', '510 mm', '600 mm'),
    ...solved(56, 'A', '730 mm (Option A)', 64, 65),
  },

  // Item 57
  {
    id: 'hpge-may2015-q57',
    number: 57,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Sizing (Distribution)',
    text: 'Situation 10 (continued) – Which of the following is nearest to the required diameter of line BC?',
    options: opts('660 mm', '600 mm', '510 mm', '730 mm'),
    ...solved(57, 'B', '600 mm (Option B)', 64, 65),
  },

  // Item 58
  {
    id: 'hpge-may2015-q58',
    number: 58,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Sizing (Distribution)',
    text: 'Situation 10 (continued) – Which of the following is nearest to the required diameter of line BD?',
    options: opts('510 mm', '730 mm', '600 mm', '660 mm'),
    ...solved(58, 'A', '510 mm (Option A)', 64, 65),
  },

  // Item 59
  {
    id: 'hpge-may2015-q59',
    number: 59,
    pageNumber: 45,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'Situation 11 – Given the following soil properties: Specific gravity of soil solids, $G_s$ = 2.67; Void ratio, e = 0.45; Degree of saturation, S = 40%. Calculate the following: The unit weight of the soil.',
    options: opts('18.52 kN/m³', '20.14 kN/m³', '19.28 kN/m³', '19.63 kN/m³'),
    ...solved(59, 'C', '19.28 kN/m³ (Option C)', 65),
  },

  // Item 60
  {
    id: 'hpge-may2015-q60',
    number: 60,
    pageNumber: 45,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'Situation 11 (continued) – The dry unit weight of the soil.',
    options: opts('18.57 kN/m³', '18.06 kN/m³', '17.56 kN/m³', '19.21 kN/m³'),
    ...solved(60, 'B', '18.06 kN/m³ (Option B)', 65),
  },
];
