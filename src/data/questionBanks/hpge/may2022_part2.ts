import { Question } from '../../../types/exam';
import {
  HPGE_MAY_2022_SOLUTION_IMAGES,
  HPGE_MAY_2022_SOLUTION_PAGES,
} from '../../hpgeMay2022Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: HPGE_MAY_2022_SOLUTION_PAGES[n],
  images: HPGE_MAY_2022_SOLUTION_IMAGES[n],
});

export const HPGE_MAY2022_PART2: Question[] = [
  // Item 13 — Situation 3
  {
    id: 'hpge-may2022-q13',
    number: 13,
    pageNumber: 413,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 3 — Triangular Gate (Vertex at Surface): Depth to Center of Pressure',
    text: 'Situation 3 — A vertical triangular gate with base width of 500 mm and altitude of 1200 mm is submerged in water with its vertex at the water surface and lower base horizontal.\n\n13. Compute the distance from the water surface to the center of pressure, in meters.',
    options: [
      { label: 'A', text: '0.95' },
      { label: 'B', text: '1.00' },
      { label: 'C', text: '0.90' },
      { label: 'D', text: '0.85' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(13), finalAnswer: '0.8 + 0.1 = 0.9 m (Option C)' },
  },

  // Item 14 — Situation 4
  {
    id: 'hpge-may2022-q14',
    number: 14,
    pageNumber: 413,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 4 — Submerged Square Plate: Depth of Top Edge',
    text: 'Situation 4 — A square plate of side 3 m is immersed vertically in water to such a depth that the center of pressure is 12 cm below the center of gravity. The two edges of the plate are horizontal.\n\n14. How much (in meters) is the top edge of the plate below the water surface?',
    options: [
      { label: 'A', text: '4.75' },
      { label: 'B', text: '5.25' },
      { label: 'C', text: '6.25' },
      { label: 'D', text: '4.25' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(14), finalAnswer: 'h₁ = 6.25 − 1.5 = 4.75 m (Option A)' },
  },

  // Item 15 — Situation 4
  {
    id: 'hpge-may2022-q15',
    number: 15,
    pageNumber: 414,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 4 — Submerged Square Plate: Depth to Center of Pressure',
    text: 'Situation 4 — A square plate of side 3 m is immersed vertically in water to such a depth that the center of pressure is 12 cm below the center of gravity. The two edges of the plate are horizontal.\n\n15. Compute the distance from the water surface to the center of pressure, in meters.',
    options: [
      { label: 'A', text: '7.32' },
      { label: 'B', text: '6.87' },
      { label: 'C', text: '8.32' },
      { label: 'D', text: '6.37' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(15), finalAnswer: '6.25 + 0.12 = 6.37 m (Option D)' },
  },

  // Item 16 — Situation 4
  {
    id: 'hpge-may2022-q16',
    number: 16,
    pageNumber: 414,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 4 — Submerged Square Plate: Total Hydrostatic Pressure',
    text: 'Situation 4 — A square plate of side 3 m is immersed vertically in water to such a depth that the center of pressure is 12 cm below the center of gravity. The two edges of the plate are horizontal.\n\n16. Evaluate the total hydrostatic pressure acting on the plate, in kN.',
    options: [
      { label: 'A', text: '598.3' },
      { label: 'B', text: '551.8' },
      { label: 'C', text: '623.4' },
      { label: 'D', text: '501.2' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(16), finalAnswer: '551.8 kN (Option B)' },
  },

  // Item 17 — Situation 5
  {
    id: 'hpge-may2022-q17',
    number: 17,
    pageNumber: 414,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 5 — Floating Buoy: Submerged Volume Percentage',
    text: 'Situation 5 — A wooden buoy of specific gravity 0.75 floats in a liquid having a specific gravity of 0.85.\n\n17. Evaluate the percentage of the volume of the buoy below the liquid surface to the total volume of the buoy.',
    options: [
      { label: 'A', text: '11.8%' },
      { label: 'B', text: '79.8%' },
      { label: 'C', text: '34.2%' },
      { label: 'D', text: '88.2%' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(17), finalAnswer: 'V_d = 0.75/0.85 V = 88.24% V (Option D)' },
  },

  // Item 18 — Situation 5
  {
    id: 'hpge-may2022-q18',
    number: 18,
    pageNumber: 414,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 5 — Floating Buoy: Weight of the Buoy',
    text: 'Situation 5 — A wooden buoy of specific gravity 0.75 floats in a liquid having a specific gravity of 0.85.\n\n18. If the volume above the liquid is 0.028 cubic meters, estimate the weight of the buoy, in N.',
    options: [
      { label: 'A', text: '1298' },
      { label: 'B', text: '1489' },
      { label: 'C', text: '1751' },
      { label: 'D', text: '1654' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(18), finalAnswer: 'W = 9.810(0.75)(0.2381) = 1751 N (Option C)' },
  },

  // Item 19 — Situation 5
  {
    id: 'hpge-may2022-q19',
    number: 19,
    pageNumber: 414,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 5 — Floating Buoy: Force to Fully Submerge',
    text: 'Situation 5 — A wooden buoy of specific gravity 0.75 floats in a liquid having a specific gravity of 0.85.\n\n19. What vertical force, in N, applied to the buoy to fully submerge it?',
    options: [
      { label: 'A', text: '321' },
      { label: 'B', text: '234' },
      { label: 'C', text: '207' },
      { label: 'D', text: '398' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(19), finalAnswer: 'F = 1.985 − 1.751 = 0.234 kN = 234 N (Option B)' },
  },

  // Item 20 — Situation 6
  {
    id: 'hpge-may2022-q20',
    number: 20,
    pageNumber: 414,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 6 — Water Jet from an Inclined Tank: Maximum Height',
    text: 'Situation 6 — A water jet is issued from the side of tank under a head of 5 m. The side of the tank is inclined 45°. The total depth of water in the tank is 8 m. Assume coefficient of velocity of 1.0 and neglect air resistance.\n\n20. Obtain the maximum height the water jet can rise above the level of the orifice, in meters.',
    options: [
      { label: 'A', text: '2.5' },
      { label: 'B', text: '3.0' },
      { label: 'C', text: '3.5' },
      { label: 'D', text: '2.0' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(20), finalAnswer: 'y_max = 7.004² / (2 × 9.81) = 2.5 m (Option A)' },
  },

  // Item 21 — Situation 6
  {
    id: 'hpge-may2022-q21',
    number: 21,
    pageNumber: 414,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 6 — Water Jet from an Inclined Tank: Time of Flight',
    text: 'Situation 6 — A water jet is issued from the side of tank under a head of 5 m. The side of the tank is inclined 45°. The total depth of water in the tank is 8 m. Assume coefficient of velocity of 1.0 and neglect air resistance.\n\n21. Compute the time it takes for the water jet to hit the ground 1.2 m below the bottom of the tank, in seconds.',
    options: [
      { label: 'A', text: '1.43' },
      { label: 'B', text: '2.65' },
      { label: 'C', text: '2.13' },
      { label: 'D', text: '1.88' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(21), finalAnswer: 't = 1.883 s (Option D)' },
  },

  // Item 22 — Situation 6
  {
    id: 'hpge-may2022-q22',
    number: 22,
    pageNumber: 414,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 6 — Water Jet from an Inclined Tank: Horizontal Reach',
    text: 'Situation 6 — A water jet is issued from the side of tank under a head of 5 m. The side of the tank is inclined 45°. The total depth of water in the tank is 8 m. Assume coefficient of velocity of 1.0 and neglect air resistance.\n\n22. Obtain the horizontal distance traveled by the jet as it hit the ground, in meters.',
    options: [
      { label: 'A', text: '10.5' },
      { label: 'B', text: '12.8' },
      { label: 'C', text: '13.7' },
      { label: 'D', text: '15.5' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(22), finalAnswer: 'x₂ = 7.004(1.883) = 13.19 m ≈ 13.7 m (Option C)' },
  },

  // Item 23 — Situation 7
  {
    id: 'hpge-may2022-q23',
    number: 23,
    pageNumber: 415,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 7 — Trapezoidal Canal: Specific Energy',
    text: 'Situation 7 — Water flows at the rate of 20.8 m³/s and depth of 1.20 m in a trapezoidal canal having a bottom width of 6 m and side slope of 1V to 2H.\n\n23. Obtain the specific energy in meters.',
    options: [
      { label: 'A', text: '1.76' },
      { label: 'B', text: '1.42' },
      { label: 'C', text: '1.98' },
      { label: 'D', text: '2.67' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(23), finalAnswer: 'H = 2.0635²/(2×9.81) + 1.2 = 1.417 m (Option B)' },
  },

  // Item 24 — Situation 7
  {
    id: 'hpge-may2022-q24',
    number: 24,
    pageNumber: 415,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: "Situation 7 — Trapezoidal Canal: Bed Slope by Manning's Equation",
    text: "Situation 7 — Water flows at the rate of 20.8 m³/s and depth of 1.20 m in a trapezoidal canal having a bottom width of 6 m and side slope of 1V to 2H.\n\n24. Evaluate the slope of the canal if the roughness coefficient of the canal surface is 0.015. Use Manning's formula.",
    options: [
      { label: 'A', text: '0.00137' },
      { label: 'B', text: '0.00198' },
      { label: 'C', text: '0.00112' },
      { label: 'D', text: '0.00094' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(24), finalAnswer: 'S = 0.001124 ≈ 0.00112 (Option C)' },
  },
];
