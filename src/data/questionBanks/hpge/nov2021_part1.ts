import { Question } from '../../../types/exam';
import {
  hpgeNov2021Figure,
  hpgeNov2021SolutionImages,
  hpgeNov2021SolutionPage,
  hpgeNov2021SolutionPageEnd,
} from '../../hpgeNov2021Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: hpgeNov2021SolutionPage(n),
  pageNumberEnd: hpgeNov2021SolutionPageEnd(n),
  images: hpgeNov2021SolutionImages(n),
});

export const HPGE_NOV2021_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-nov2021-q1',
    number: 1,
    pageNumber: 296,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Fluid Mechanics — Manometer Pressure',
    text: 'A manometer is attached to a conduit as shown. Compute the pressure at $A$ in kPa given the following data:\n\n| Given | Value |\n| :--- | :--- |\n| Specific gravity of Liquid $B$, $SG_B$ | 13.6 |\n| $h$ | 125 mm |\n| $d$ | 375 mm |',
    figureSvg: hpgeNov2021Figure(1, 'Figure 1: Conduit A connected to a U-tube manometer holding Liquid B'),
    figureCaption: 'Manometer connected to the conduit at A',
    options: [
      { label: 'A', text: '18.45' },
      { label: 'B', text: '28.54' },
      { label: 'C', text: '45.13' },
      { label: 'D', text: '36.71' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(1), finalAnswer: '45.13 kPa (Option C)' },
  },

  // Item 2
  {
    id: 'hpge-nov2021-q2',
    number: 2,
    pageNumber: 296,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Fluid Mechanics — Floating Timber in a Container',
    text: 'A right cylindrical container of diameter $D$ (meter) and $H$ (meter) high is filled with water $Z$ (meter) deep. A piece of timber, having a cross-sectional dimension $b \\times t$ (mm) and $L$ (meter) long is freely allowed to submerge and float in a vertical position inside the container. The portion of the wood above the water surface is observed to be 2/3 the length of the timber. Evaluate the specific weight of the timber, in kN/m³.\n\n| Given | Value |\n| :--- | :--- |\n| $D$ | 1.00 m |\n| $H$ | 5.00 m |\n| $Z$ | 3.00 m |\n| $b$ | 250 mm |\n| $t$ | 250 mm |\n| $L$ | 3.00 m |',
    options: [
      { label: 'A', text: '6.54' },
      { label: 'B', text: '7.25' },
      { label: 'C', text: '5.36' },
      { label: 'D', text: '3.27' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(2), finalAnswer: '3.27 kN/m³ (Option D)' },
  },

  // Item 3
  {
    id: 'hpge-nov2021-q3',
    number: 3,
    pageNumber: 296,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Fluid Mechanics — Bulk Modulus of Elasticity',
    text: 'A cubic meter of water is subjected to a pressure increase of 20 MPa. If the bulk modulus of elasticity of the water is 2200 MPa, evaluate the change in volume in m³.',
    options: [
      { label: 'A', text: '0.0136' },
      { label: 'B', text: '0.00909' },
      { label: 'C', text: '0.0146' },
      { label: 'D', text: '0.0178' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(3), finalAnswer: 'ΔV = −0.00909 m³ (Option B)' },
  },

  // Item 4
  {
    id: 'hpge-nov2021-q4',
    number: 4,
    pageNumber: 296,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Fluid Mechanics — Velocity Head',
    text: 'The velocity head of the flow at one section of a pipeline is 5 m. Evaluate the velocity head, in meter(s), at the next section if the velocity of flow increases by one-half that of the previous section.',
    options: [
      { label: 'A', text: '1.25' },
      { label: 'B', text: '11.25' },
      { label: 'C', text: '31.25' },
      { label: 'D', text: '15.50' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(4), finalAnswer: '11.25 m (Option B)' },
  },

  // Item 5
  {
    id: 'hpge-nov2021-q5',
    number: 5,
    pageNumber: 297,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Hydraulics — Pressure Surge',
    text: 'A pressure surge or wave caused when a fluid in motion is forced to stop or change direction suddenly (momentum change) is referred to in hydraulics as',
    options: [
      { label: 'A', text: 'water hammer' },
      { label: 'B', text: 'hydraulic jump' },
      { label: 'C', text: 'potential head' },
      { label: 'D', text: 'hydrodynamics' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(5), finalAnswer: 'Water hammer (Option A)' },
  },

  // Item 6
  {
    id: 'hpge-nov2021-q6',
    number: 6,
    pageNumber: 297,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Hydraulics — Hydraulic Grade Line',
    text: 'A line joining the points of highest elevation of water in series of vertical open pipes rising from a pipeline in which water flows under pressure is referred to as',
    options: [
      { label: 'A', text: 'energy grade line' },
      { label: 'B', text: 'hydraulic loss' },
      { label: 'C', text: 'hydraulic head' },
      { label: 'D', text: 'hydraulic grade line' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(6), finalAnswer: 'Hydraulic grade line, HGL (Option D)' },
  },

  // Item 7 — Situation 1
  {
    id: 'hpge-nov2021-q7',
    number: 7,
    pageNumber: 297,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 1 — Mercury Barometer: Equivalent Water Column',
    text: 'Situation 1 — At a certain elevation above sea level, a mercury barometer reads 700 mm.\n\n7. What would be the corresponding reading of water barometer in millimeters?',
    options: [
      { label: 'A', text: '7680' },
      { label: 'B', text: '8260' },
      { label: 'C', text: '9520' },
      { label: 'D', text: '6720' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(7), finalAnswer: '700 × 13.6 = 9,520 mm (Option C)' },
  },

  // Item 8 — Situation 1
  {
    id: 'hpge-nov2021-q8',
    number: 8,
    pageNumber: 297,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 1 — Mercury Barometer: Atmospheric Pressure',
    text: 'Situation 1 — At a certain elevation above sea level, a mercury barometer reads 700 mm.\n\n8. Evaluate the atmospheric pressure in kPa at that level?',
    options: [
      { label: 'A', text: '89.9' },
      { label: 'B', text: '90.2' },
      { label: 'C', text: '93.4' },
      { label: 'D', text: '86.7' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(8), finalAnswer: '93.391 kPa ≈ 93.4 kPa (Option C)' },
  },

  // Item 9 — Situation 1
  {
    id: 'hpge-nov2021-q9',
    number: 9,
    pageNumber: 297,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 1 — Mercury Barometer: Elevation Above Sea Level',
    text: 'Situation 1 — At a certain elevation above sea level, a mercury barometer reads 700 mm.\n\n9. What is the approximate elevation in meters above sea level, assuming normal atmospheric conditions? Neglect vapor pressure. Air weighs 12 N/m³.',
    options: [
      { label: 'A', text: '6520' },
      { label: 'B', text: '7780' },
      { label: 'C', text: '8270' },
      { label: 'D', text: '9360' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(9), finalAnswer: '93.391/0.012 = 7783 m ≈ 7780 m (Option B)' },
  },

  // Item 10 — Situation 2
  {
    id: 'hpge-nov2021-q10',
    number: 10,
    pageNumber: 297,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 2 — Submerged Triangular Plate: Total Force',
    text: 'Situation 2 — A triangular plate of height $h = 1.20$ m and base $b = 2$ m is submerged vertically in water with its base at the liquid surface and parallel to it.\n\n10. Evaluate the total force acting on one side of the plate, in kN.',
    options: [
      { label: 'A', text: '3.85' },
      { label: 'B', text: '6.24' },
      { label: 'C', text: '5.36' },
      { label: 'D', text: '4.71' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(10), finalAnswer: 'F = 4.709 kN ≈ 4.71 kN (Option D)' },
  },

  // Item 11 — Situation 2
  {
    id: 'hpge-nov2021-q11',
    number: 11,
    pageNumber: 297,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 2 — Submerged Triangular Plate: Eccentricity',
    text: 'Situation 2 — A triangular plate of height $h = 1.20$ m and base $b = 2$ m is submerged vertically in water with its base at the liquid surface and parallel to it.\n\n11. Obtain the location of the force from the center of gravity of the plate, in mm.',
    options: [
      { label: 'A', text: '200' },
      { label: 'B', text: '180' },
      { label: 'C', text: '150' },
      { label: 'D', text: '210' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(11), finalAnswer: 'e = 0.2 m = 200 mm (Option A)' },
  },

  // Item 12 — Situation 2
  {
    id: 'hpge-nov2021-q12',
    number: 12,
    pageNumber: 297,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 2 — Submerged Triangular Plate: Center of Pressure Depth',
    text: 'Situation 2 — A triangular plate of height $h = 1.20$ m and base $b = 2$ m is submerged vertically in water with its base at the liquid surface and parallel to it.\n\n12. Obtain the location of the force from the liquid surface, in mm.',
    options: [
      { label: 'A', text: '400' },
      { label: 'B', text: '600' },
      { label: 'C', text: '800' },
      { label: 'D', text: '620' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(12), finalAnswer: 'e + ȳ = 200 + 400 = 600 mm (Option B)' },
  },

  // Item 13 — Situation 3
  {
    id: 'hpge-nov2021-q13',
    number: 13,
    pageNumber: 298,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 3 — Floating Wooden Buoy: Exposed Volume',
    text: 'Situation 3 — A wooden buoy of specific gravity 0.75 floats in a liquid having a specific gravity of 0.85.\n\n13. Evaluate the percentage of the volume of the buoy above the liquid surface to the total volume of the buoy.',
    options: [
      { label: 'A', text: '11.8' },
      { label: 'B', text: '12.2' },
      { label: 'C', text: '10.6' },
      { label: 'D', text: '13.9' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(13), finalAnswer: 'Ve = 11.76%V (Option A)' },
  },
];
