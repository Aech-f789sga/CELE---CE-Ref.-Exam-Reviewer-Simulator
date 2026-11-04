import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

export const HPGE_NOV2024_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-nov2024-q1',
    number: 1,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Atmospheric Pressure & Barometer',
    text: 'A mercury barometer at the top of a mountain reads 538 mmHg, while another barometer at the base reads 700 mmHg. Assuming a constant unit weight of air of 12 N/m³, determine the height of the mountain in kilometers.',
    options: [
      { label: 'A', text: '3.13' },
      { label: 'B', text: '0.8' },
      { label: 'C', text: '2.2' },
      { label: 'D', text: '1.8' },
    ],
    ...solved(1, 'D', '1.8 (Option D)'),
  },

  // Item 2
  {
    id: 'hpge-nov2024-q2',
    number: 2,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Phase Relationships',
    text: 'A soil sample has a specific gravity of solids of 2.3, a water content of 15%, a moist unit weight of 18 kN/m³, and a void ratio of 0.45. Determine the dry unit weight of the soil, in kN/m³.',
    options: [
      { label: 'A', text: '18.34' },
      { label: 'B', text: '14.44' },
      { label: 'C', text: '15.13' },
      { label: 'D', text: '15.65' },
    ],
    ...solved(2, 'D', '15.65 (Option D)'),
  },

  // Item 3
  {
    id: 'hpge-nov2024-q3',
    number: 3,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Variable Density Hydrostatic Pressure',
    text: 'The weight density of a mud is given by γ = 12 + 0.5h, where γ is in kN/m³ and h is in meters. Determine the pressure, in kPa, at a depth of 2 m.',
    options: [
      { label: 'A', text: '26.0' },
      { label: 'B', text: '25.3' },
      { label: 'C', text: '25.0' },
      { label: 'D', text: '26.2' },
    ],
    ...solved(3, 'C', '25.0 (Option C)'),
  },

  // Item 4
  {
    id: 'hpge-nov2024-q4',
    number: 4,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Submerged Gates',
    text: 'A vertical trapezoidal gate has its top edge at the water surface and is 1.5 m long. Its two vertical sides are 2.4 m and 3.0 m, respectively. The gate is hinged along its top edge. Determine the force, in kN, required at the bottom of the gate to just open it. The applied force acts normal to the gate at a point located 0.75 m from each side of the gate.',
    options: [
      { label: 'A', text: '36.2' },
      { label: 'B', text: '35.2' },
      { label: 'C', text: '21.3' },
      { label: 'D', text: '33.6' },
    ],
    ...solved(4, 'A', '36.2 (Option A)'),
  },

  // Item 5
  {
    id: 'hpge-nov2024-q5',
    number: 5,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Accelerated Liquid Mass',
    text: 'A tank contains water to a depth of 0.60 m and is transported by an elevator moving upward at a constant velocity of 2 m/s. Determine the pressure at the bottom of the tank, in kPa.',
    options: [
      { label: 'A', text: '4.1' },
      { label: 'B', text: '5.9' },
      { label: 'C', text: '5.7' },
      { label: 'D', text: '2.5' },
    ],
    ...solved(5, 'B', '5.9 (Option B)'),
  },

  // Item 6
  {
    id: 'hpge-nov2024-q6',
    number: 6,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Rotating Cylindrical Vessels',
    text: 'An open cylindrical tank is 2.1 m high and 1.3 m in diameter. It is initially filled with water to two-thirds of its height. The tank is rotated about its vertical central axis at 90 rpm. Determine the volume of water spilled, in liters.',
    options: [
      { label: 'A', text: '81.3' },
      { label: 'B', text: '313.4' },
      { label: 'C', text: '91.3' },
      { label: 'D', text: '340.3' },
    ],
    ...solved(6, 'D', '340.3 (Option D)'),
  },

  // Item 7
  {
    id: 'hpge-nov2024-q7',
    number: 7,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Rotating Cylindrical Vessels',
    text: 'An open cylindrical tank is 1.5 m high and 0.40 m in diameter and initially contains water. The tank rotates about its vertical central axis at 240 rpm. Determine the maximum initial water depth (in meter) that will prevent spillage during rotation.',
    options: [
      { label: 'A', text: '0.131' },
      { label: 'B', text: '0.856' },
      { label: 'C', text: '0.912' },
      { label: 'D', text: '0.713' },
    ],
    ...solved(7, 'B', '0.856 (Option B)'),
  },

  // Item 8
  {
    id: 'hpge-nov2024-q8',
    number: 8,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: "Fluid Statics - Buoyancy & Archimedes' Principle",
    text: 'An irregular stone weighs 300 N in air and 230 N when fully submerged in water. Determine the volume of the stone in liters.',
    options: [
      { label: 'A', text: '7.14' },
      { label: 'B', text: '31.4' },
      { label: 'C', text: '7.33' },
      { label: 'D', text: '23.6' },
    ],
    ...solved(8, 'A', '7.14 (Option A)'),
  },

  // Item 9
  {
    id: 'hpge-nov2024-q9',
    number: 9,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Buoyancy & Moored Submerged Bodies',
    text: 'A sphere with a radius of 375 mm is fully immersed in seawater with a specific gravity of 1.026 and is anchored to the seabed. The tension in the mooring line is 270 N. Determine the unit weight of the sphere in kN/m³.',
    options: [
      { label: 'A', text: '0.901' },
      { label: 'B', text: '0.475' },
      { label: 'C', text: '0.385' },
      { label: 'D', text: '0.914' },
    ],
    ...solved(9, 'A', '0.901 (Option A)'),
  },

  // Item 10
  {
    id: 'hpge-nov2024-q10',
    number: 10,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Flotation & Ship Hydrostatics',
    text: 'A barge has an unloaded weight of 70,000 metric tons and carries a cargo load of 20,000 metric tons. Its waterline area is 10,000 m², and its draft in seawater with a specific gravity of 1.03 is 10.37 m. Obtain the draft of the loaded barge when floating in freshwater.',
    options: [
      { label: 'A', text: '10.13' },
      { label: 'B', text: '10.63' },
      { label: 'C', text: '10.44' },
      { label: 'D', text: '11.27' },
    ],
    ...solved(10, 'B', '10.63 (Option B)'),
  },

  // Item 11
  {
    id: 'hpge-nov2024-q11',
    number: 11,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Theoretical Soil Limits',
    text: 'A soil mass has a specific gravity of solids (Gs = 2.10). Determine its maximum possible unit weight.',
    options: [
      { label: 'A', text: '20.6' },
      { label: 'B', text: '17.8' },
      { label: 'C', text: '21.4' },
      { label: 'D', text: '19.2' },
    ],
    ...solved(11, 'A', '20.6 (Option A)'),
  },

  // Item 12
  {
    id: 'hpge-nov2024-q12',
    number: 12,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Moisture Content Testing',
    text: 'A soil sample has a total volume of 100 cm³ and a wet weight of 190 g. After oven drying, its dry weight is 160 g. Determine the water content of the soil, expressed as a percentage.',
    options: [
      { label: 'A', text: '18.75' },
      { label: 'B', text: '15.59' },
      { label: 'C', text: '17.15' },
      { label: 'D', text: '20.57' },
    ],
    ...solved(12, 'A', '18.75 (Option A)'),
  },
];
