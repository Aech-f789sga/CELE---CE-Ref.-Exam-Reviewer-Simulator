import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

export const MSTC_NOV2024_PART1: Question[] = [
  // Item 1
  {
    id: 'mstc-nov2024-q1',
    number: 1,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Engineering Economics - Break-Even Analysis',
    text: 'A masonry trade contractor makes extra money by providing household keeping services for ₱10 an hour, he will clean the site of laitance and dents. He brings his own tools and often has a helper with him. He estimates his weekly cost and revenue are given by:\nC(x) = 38.50 + 4.5x\nR(x) = 10x\nWhere:\nx = the no. of hours worked per week\nC(x) = masonry contractor weekly cost in ₱\nR(x) = masonry contractor total revenue in ₱\n\nHe plans to attend an upcoming Construction Occupational Safety and Health (COSH) seminar. The seminar fee is priced at ₱22.00 and goes on sale in a week. How many hours must he work in order to pay the seminar fee?',
    options: [
      { label: 'A', text: '7 hrs' },
      { label: 'B', text: '11 hrs' },
      { label: 'C', text: '13 hrs' },
      { label: 'D', text: '9 hrs' },
    ],
    ...solved(1, 'B', '11 hrs (Option B)'),
  },

  // Item 2
  {
    id: 'mstc-nov2024-q2',
    number: 2,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Mathematics - Arithmetic Progression',
    text: 'The Arroyos are planning to build a brick patio that approximates the shape of a trapezoid. The shorter base of the trapezoid needs to start with a row of 5 bricks, and each row must increase by 2 bricks on each side until there are 25 rows. How many bricks do the Arroyos need to buy?',
    options: [
      { label: 'A', text: '1352' },
      { label: 'B', text: '1235' },
      { label: 'C', text: '1523' },
      { label: 'D', text: '1325' },
    ],
    ...solved(2, 'D', '1325 (Option D)'),
  },

  // Item 3
  {
    id: 'mstc-nov2024-q3',
    number: 3,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Engineering Economics - Rate of Return',
    text: 'Instead of investing in the stock market, many people invest in collectibles, like baseball cards. Each year, Anna uses some of the money she receives for her birthday to buy one special baseball card. For the last four birthdays, she purchased cards for $6, $18, $24, and $18. The current value of these cards is modeled by T(x) = 6x⁴ + 18x³ + 24x² + 18x, where x represents the average rate of return plus one. What is the average rate of return on Anna\'s investments?',
    options: [
      { label: 'A', text: '0.0001' },
      { label: 'B', text: '0.01' },
      { label: 'C', text: '0.001' },
      { label: 'D', text: '0.1' },
    ],
    ...solved(3, 'D', '0.1 (Option D)'),
  },

  // Item 4
  {
    id: 'mstc-nov2024-q4',
    number: 4,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Operations Research / Algebra - Inequalities',
    text: 'A package delivery service has a truck that can hold 4200 pounds of cargo and has a capacity of 480 cubic feet. The service handles two types of packages: small, which weigh up to 25 pounds each and are no more than 3 cubic feet each; and large, which are 25 to 50 pounds each and are 3 to 5 cubic feet each. The delivery service charges $5 for each small package and $8 for each large package. Let x be the number of small packages and y be the number of large packages in the truck. Write an inequality to represent the volume, in cubic feet, of packages the truck can carry.',
    options: [
      { label: 'A', text: '$3x + 5y \\le 480$' },
      { label: 'B', text: '$3x - 5y \\le 480$' },
      { label: 'C', text: '$3x - 5y \\ge 480$' },
      { label: 'D', text: '$3x + 5y \\ge 480$' },
    ],
    ...solved(4, 'A', '3x + 5y ≤ 480 (Option A)'),
  },

  // Item 5
  {
    id: 'mstc-nov2024-q5',
    number: 5,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Algebra - Tolerance & Absolute Value Inequalities',
    text: 'The production cost of a job depends in part on the accuracy required. On most sheet metal jobs, an accuracy of 1, 2, or 0.1 mils is required. A mil is 1/1000 inch. This means that a dimension must be less than 1/1000, 2/1000, or 1/10,000 inch larger or smaller than the blueprint states. Industrial jobs often require a higher degree of accuracy. Write inequalities that models the possible dimensions of a part that is supposed to be 8 inches by 4 1/4 inches if the accuracy required is 2 mils.',
    options: [
      { label: 'A', text: '$|8 + x| \\le \\frac{1}{500};\\quad |4\\frac{1}{4} - y| \\le \\frac{1}{500}$' },
      { label: 'B', text: '$|8 - x| \\ge \\frac{1}{500};\\quad |4\\frac{1}{4} - y| \\ge \\frac{1}{500}$' },
      { label: 'C', text: '$|8 - x| \\le \\frac{1}{500};\\quad |4\\frac{1}{4} + y| \\ge \\frac{1}{500}$' },
      { label: 'D', text: '$|8 - x| \\le \\frac{1}{500};\\quad |4\\frac{1}{4} - y| \\le \\frac{1}{500}$' },
    ],
    ...solved(5, 'D', '|8 - x| ≤ 1/500; |4 1/4 - y| ≤ 1/500 (Option D)'),
  },

  // Item 6
  {
    id: 'mstc-nov2024-q6',
    number: 6,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Materials Science / Geometric Progression',
    text: 'When a particular metal is heated to 600°C, its tensile strength drops by 50%. For every 5°C its temperature rises after 600°C, the tensile strength decreases by 35%. This metal has a tensile strength of 280 MPa below 600°C and is used in the construction of industrial ovens. If the minimum safe tensile strength of this material is 38 MPa, what is the maximum safe temperature of the oven, in degrees Celsius?',
    options: [
      { label: 'A', text: '625°C' },
      { label: 'B', text: '615°C' },
      { label: 'C', text: '635°C' },
      { label: 'D', text: '605°C' },
    ],
    ...solved(6, 'B', '615°C (Option B)'),
  },

  // Item 7
  {
    id: 'mstc-nov2024-q7',
    number: 7,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Physics / Acoustics - Decibel Sound Level',
    text: 'During an indoor rock concert, sound intensities of 0.15 W/m² are produced. Determine the intensity levels of these sounds in decibels.\n\n*Hint:* $\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$; where $I_0 = 1 \\times 10^{-12}\\text{ W/m}^2$',
    options: [
      { label: 'A', text: '120 dB' },
      { label: 'B', text: '112 dB' },
      { label: 'C', text: '115 dB' },
      { label: 'D', text: '108 dB' },
    ],
    ...solved(7, 'B', '112 dB (Option B)'),
  },

  // Item 8
  {
    id: 'mstc-nov2024-q8',
    number: 8,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Physics / Optics - Light Attenuation with Depth',
    text: 'If a beam of light has intensity $I_0$ projected vertically downward into water, then its intensity $I(x)$ at a depth of $x$ meters is $I(x) = I_0 \\, e^{-1.4 x}$. At what depth is the intensity one-half its value at the surface?',
    options: [
      { label: 'A', text: '0.594 m' },
      { label: 'B', text: '0.945 m' },
      { label: 'C', text: '0.495 m' },
      { label: 'D', text: '0.549 m' },
    ],
    ...solved(8, 'C', '0.495 m (Option C)'),
  },

  // Item 9
  {
    id: 'mstc-nov2024-q9',
    number: 9,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Applied Mathematics - Exponential Fret Spacing Formula',
    text: 'The spacing of the frets on the neck of a classical guitar is determined from the equation $d = (21.9)(2)^{\\frac{20 - x}{12}}$, where $x$ is the fret number and $d$ is the distance in centimeters of the $x$-th fret from the bridge. Find the distance from the nut to the bridge (rounded to one decimal place).',
    figureCaption: 'Figure 9: Fret spacing diagram on the neck of a classical guitar',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_9.png" 
        alt="Figure 9: Fret spacing diagram on classical guitar neck" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '70.5 cm' },
      { label: 'B', text: '69.0 cm' },
      { label: 'C', text: '70.0 cm' },
      { label: 'D', text: '69.5 cm' },
    ],
    ...solved(9, 'D', '69.5 cm (Option D)'),
  },

  // Item 10
  {
    id: 'mstc-nov2024-q10',
    number: 10,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Analytic Geometry - Circular Motion & Rotation',
    text: 'The Ferris Wheel first appeared at the 1893 Chicago Exposition. Its axle was 45 feet long. Spokes radiated from it that supported 36 wooden cars, which could hold 60 people each. The diameter of the wheel itself was 250 feet. Suppose the axle was at the origin. Find the coordinates of the location of the car at the 90° counterclockwise.',
    options: [
      { label: 'A', text: '(-125, 0)' },
      { label: 'B', text: '(0, 125)' },
      { label: 'C', text: '(125, 0)' },
      { label: 'D', text: '(0, -125)' },
    ],
    ...solved(10, 'C', '(125, 0) (Option C)'),
  },

  // Item 11
  {
    id: 'mstc-nov2024-q11',
    number: 11,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Surveying / Coordinate Geometry - Collinear Points',
    text: 'There are six villages A, B, C, D, E, and F.\nF is 1 km to the west of D.\nB is 1 km to the east of E.\nA is 2 km to the north of E.\nC is 1 km to the east of A.\nD is 1 km to the south of A.\nWhich three villages are in a line?',
    options: [
      { label: 'A', text: 'A, C, B' },
      { label: 'B', text: 'A, D, E' },
      { label: 'C', text: 'C, B, F' },
      { label: 'D', text: 'E, B, D' },
    ],
    ...solved(11, 'B', 'A, D, E (Option B)'),
  },

  // Item 12
  {
    id: 'mstc-nov2024-q12',
    number: 12,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Chemistry / Algebra - Mixture Problem',
    text: 'A chemist has one solution containing 50% acid and a second one containing 25% acid. How much of each should be used to make 10 liters of a 40% acid solution?',
    options: [
      { label: 'A', text: '6 liters from 50% acid solution and 4 liters from 25% acid solution' },
      { label: 'B', text: '4 liters from 50% acid solution and 6 liters from 25% acid solution' },
      { label: 'C', text: '5 liters from 50% acid solution and 7 liters from 25% acid solution' },
      { label: 'D', text: '7 liters from 50% acid solution and 5 liters from 25% acid solution' },
    ],
    ...solved(12, 'A', '6 liters from 50% acid solution and 4 liters from 25% acid solution (Option A)'),
  },
];
