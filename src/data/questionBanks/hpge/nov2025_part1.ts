import { Question } from '../../../types/exam';
import { solved, opts } from './nov2025Helpers';

export const HPGE_NOV2025_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-nov2025-q1',
    number: 1,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Properties - Standard Density & Physical Baseline of Water',
    text: 'The specific weight of water is 1000 kg/m³:\nA. At normal pressure of 760 mmHg\nB. At 4°C temperature\nC. At mean sea level\nD. All these',
    options: opts('At normal pressure of 760 mmHg', 'At 4°C temperature', 'At mean sea level', 'All these'),
    ...solved(1, 'D', 'All these (Option D)'),
  },

  // Item 2
  {
    id: 'hpge-nov2025-q2',
    number: 2,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Buoyancy & Flotation - Archimedes Principle in Gases',
    text: 'Low-density of air was added to the balloon. Why does it float?\nA. Due to buoyancy\nB. Kinetic Energy\nC. High Pressure\nD. Surface Tension',
    options: opts('Due to buoyancy', 'Kinetic Energy', 'High Pressure', 'Surface Tension'),
    ...solved(2, 'A', 'Due to buoyancy (Option A)'),
  },

  // Item 3
  {
    id: 'hpge-nov2025-q3',
    number: 3,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Location of Center of Pressure',
    text: 'If a gate is inclined 45° from the horizontal, what is the location of the C.P. (Center of Pressure)?\nA. Above the C.G.\nB. At the C.G\nC. At the water surface\nD. Below of C.G.',
    options: opts('Above the C.G.', 'At the C.G', 'At the water surface', 'Below of C.G.'),
    ...solved(3, 'D', 'Below of C.G. (Option D)'),
  },

  // Item 4
  {
    id: 'hpge-nov2025-q4',
    number: 4,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Mechanics - Regimes & Classification of Flow',
    text: 'What are the types (characteristics) of flow in fluid mechanics?\nA. Chaotic, steady\nB. Laminar, turbulent, uniform\nC. Steady, unsteady, normal\nD. Gravity, pump, pressurized',
    options: opts('Chaotic, steady', 'Laminar, turbulent, uniform', 'Steady, unsteady, normal', 'Gravity, pump, pressurized'),
    ...solved(4, 'B', 'Laminar, turbulent, uniform (Option B)'),
  },

  // Item 5
  {
    id: 'hpge-nov2025-q5',
    number: 5,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Proportionality to Depth',
    text: 'If depth of water doubles, what happens to the hydrostatic force?\nA. It triples\nB. It remains the same\nC. It doubles\nD. It becomes one-half as large',
    options: opts('It triples', 'It remains the same', 'It doubles', 'It becomes one-half as large'),
    ...solved(5, 'C', 'It doubles (Option C)'),
  },

  // Item 6
  {
    id: 'hpge-nov2025-q6',
    number: 6,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Statics - Layered Immiscible Fluids Bottom Pressure',
    text: 'A tank contains two layers of fluids. The top layer consists of oil with a specific gravity (SG) of 0.8 and a depth of 2 meters. The bottom layer consists of mercury (SG = 13.6) with a depth of 1 meter. Determine the total pressure at the bottom of the tank.\nA. 132.7 kPa\nB. 149.1 kPa\nC. 190.3 kPa\nD. 184.2 kPa',
    options: opts('132.7 kPa', '149.1 kPa', '190.3 kPa', '184.2 kPa'),
    ...solved(6, 'B', '149.1 kPa (Option B)'),
  },

  // Item 7
  {
    id: 'hpge-nov2025-q7',
    number: 7,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Statics - Pressure Head Definition',
    text: 'Water rises to the rooftop of a tank 12 m high. What is the pressure head?\nA. 9.81 m\nB. 1.2 m\nC. 10.2 m\nD. 12 m',
    options: opts('9.81 m', '1.2 m', '10.2 m', '12 m'),
    ...solved(7, 'D', '12 m (Option D)'),
  },

  // Item 8
  {
    id: 'hpge-nov2025-q8',
    number: 8,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Buoyancy & Flotation - Equilibrium Weight of Floating Box',
    text: 'A rectangular box with dimensions 0.5 m high, 0.4 m wide, and 1.0 m long floats in water. The draft is observed to be 0.25 m. Determine the weight of the box.\nA. 937.0 N\nB. 1002.3 N\nC. 981.0 N\nD. 993.5 N',
    options: opts('937.0 N', '1002.3 N', '981.0 N', '993.5 N'),
    ...solved(8, 'C', '981.0 N (Option C)'),
  },

  // Item 9
  {
    id: 'hpge-nov2025-q9',
    number: 9,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Buoyancy & Flotation - Ship Draft in Freshwater after Cargo Removal',
    text: 'A ship (or barge) weighing 40 MN has a draft of 6.6 m in seawater (sg = 1.026). When 2 MN of load is removed, the draft decreases to 6.5 m. Determine the draft of the ship in freshwater.\nA. 6.98 m\nB. 6.55 m\nC. 6.43 m\nD. 6.78 m',
    options: opts('6.98 m', '6.55 m', '6.43 m', '6.78 m'),
    ...solved(9, 'B', '6.55 m (Option B)'),
  },

  // Item 10
  {
    id: 'hpge-nov2025-q10',
    number: 10,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Masses Under Acceleration - Horizontal Acceleration Surface Tilt',
    text: 'A closed cylindrical tank is 6 m long and 1.5 m deep. It accelerates horizontally at 3 m/s². Determine the angle of inclination of the water surface.\nA. 17°\nB. 11°\nC. 23°\nD. 15°',
    options: opts('17°', '11°', '23°', '15°'),
    ...solved(10, 'A', '17° (Option A)'),
  },

  // Item 11
  {
    id: 'hpge-nov2025-q11',
    number: 11,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Unsteady Flow - Time to Empty Cylindrical Tank via Bottom Orifice',
    text: 'A cylindrical tank has a diameter of 4 m and a height of 3 m. It contains water up to the brim. A sharp-edged orifice with a diameter of 100 mm is located at the bottom of the tank. If the coefficient of discharge is 0.60, determine the time required to empty the tank.\nA. 26.5 mins\nB. 33.4 mins\nC. 43.4 mins\nD. 34.8 mins',
    options: opts('26.5 mins', '33.4 mins', '43.4 mins', '34.8 mins'),
    ...solved(11, 'D', '34.8 mins (Option D)'),
  },

  // Item 12
  {
    id: 'hpge-nov2025-q12',
    number: 12,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Open Channel Flow - Manning Equation & Hydraulic Radius of Trapezoidal Canal',
    text: 'A trapezoidal channel has a bottom width of 3 m and side slopes of 1.5 horizontal to 1 vertical. The channel is laid on a slope of 0.0008 and has a Manning\'s roughness coefficient n = 0.018. If the discharge is 10 m³/s, determine the Hydraulic Radius.\nA. 0.76 m\nB. 0.98 m\nC. 0.91 m\nD. 0.87 m',
    options: opts('0.76 m', '0.98 m', '0.91 m', '0.87 m'),
    ...solved(12, 'D', '0.87 m (Option D)'),
  },
];
