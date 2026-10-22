import { Question } from '../../../types/exam';
import {
  hpgeNov2019Figure,
  hpgeNov2019SolutionImages,
  hpgeNov2019SolutionPage,
  hpgeNov2019SolutionPageEnd,
} from '../../hpgeNov2019Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: hpgeNov2019SolutionPage(n),
  pageNumberEnd: hpgeNov2019SolutionPageEnd(n),
  images: hpgeNov2019SolutionImages(n),
});

export const HPGE_NOV2019_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-nov2019-q1',
    number: 1,
    pageNumber: 148,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Pressure in a Fluid of Variable Density',
    text: 'If the weight-density of mud is given by $\\gamma = 12 + 0.5h$, where $\\gamma$ is in kN/m³ and depth $h$ is in meters, determine the pressure, in kPa, at a depth of 2.4 m.',
    options: [
      { label: 'A', text: '32.58' },
      { label: 'B', text: '28.65' },
      { label: 'C', text: '30.24' },
      { label: 'D', text: '31.68' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(1), finalAnswer: '30.24 kPa (Option C)' },
  },

  // Item 2
  {
    id: 'hpge-nov2019-q2',
    number: 2,
    pageNumber: 148,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Equivalent Height of Water Column',
    text: 'A column of mercury produces 600 kPa. What is the equivalent height of water column?',
    options: [
      { label: 'A', text: '61.2' },
      { label: 'B', text: '63.4' },
      { label: 'C', text: '4.50' },
      { label: 'D', text: '6.23' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(2), finalAnswer: '61.162 m (Option A)' },
  },

  // Item 3
  {
    id: 'hpge-nov2019-q3',
    number: 3,
    pageNumber: 148,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Height of a Mountain from Barometer Readings',
    text: 'A mercury barometer at the base of the mountain reads 700 mm. At the same time another barometer at the top reads 650 mm. Assuming that the unit weight of air is constant at 10 N/m³, evaluate the approximate height of the mountain.',
    options: [
      { label: 'A', text: '728 m' },
      { label: 'B', text: '843 m' },
      { label: 'C', text: '667 m' },
      { label: 'D', text: '524 m' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(3), finalAnswer: '667 m (Option C)' },
  },

  // Item 4
  {
    id: 'hpge-nov2019-q4',
    number: 4,
    pageNumber: 148,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Height of the Atmosphere',
    text: 'If air had a uniform unit weight of 12 N/m³, what is the height of the atmosphere if the atmospheric pressure at sea level is 101 kPa.',
    options: [
      { label: 'A', text: '8420 m' },
      { label: 'B', text: '9630 m' },
      { label: 'C', text: '7520 m' },
      { label: 'D', text: '6380 m' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(4), finalAnswer: '8417 m (Option A)' },
  },

  // Item 5
  {
    id: 'hpge-nov2019-q5',
    number: 5,
    pageNumber: 148,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Hydraulic Jack Piston Diameter',
    text: 'A hydraulic jack is used to support a load of 90 kN. The hydraulic oil used has a specific gravity of 0.81. If the pressure below the piston is 1.33 MPa, obtain the diameter of the piston in mm.',
    options: [
      { label: 'A', text: '294' },
      { label: 'B', text: '258' },
      { label: 'C', text: '463' },
      { label: 'D', text: '327' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(5), finalAnswer: '294 mm (Option A)' },
  },

  // Item 6
  {
    id: 'hpge-nov2019-q6',
    number: 6,
    pageNumber: 148,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Foam Buoy Holding a Cube in Equilibrium',
    text: 'A cube, 300 mm on each side is to be held in equilibrium under water by attaching a lightweight foam buoy to it. The specific weights of the cube and the foam are 20 kN/m³ and 0.81 kN/m³, respectively. Evaluate the minimum volume of the foam in m³.',
    options: [
      { label: 'A', text: '0.0254' },
      { label: 'B', text: '0.0306' },
      { label: 'C', text: '0.0536' },
      { label: 'D', text: '0.0187' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(6), finalAnswer: '0.0306 m³ (Option B)' },
  },

  // Item 7
  {
    id: 'hpge-nov2019-q7',
    number: 7,
    pageNumber: 149,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Specific Gravity of Floating Wood',
    text: 'A piece of wood 0.6 m square and 1.8 m high floats in water with 0.5 m outstanding. Evaluate the weight of wood in kN.',
    options: [
      { label: 'A', text: '5.87' },
      { label: 'B', text: '2.45' },
      { label: 'C', text: '4.59' },
      { label: 'D', text: '3.65' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(7), finalAnswer: '4.59 kN (Option C)' },
  },

  // Item 8
  {
    id: 'hpge-nov2019-q8',
    number: 8,
    pageNumber: 149,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Block Submerged Across Two Liquid Layers',
    text: 'A block of wood ($sg = 0.90$) having a volume of 0.1 m³ is dropped into a tank containing a layer of liquid whose specific gravity is 0.6 on top of water. Obtain the volume of the block of wood submerged in the upper liquid in cubic meters.',
    options: [
      { label: 'A', text: '0.025' },
      { label: 'B', text: '0.035' },
      { label: 'C', text: '0.045' },
      { label: 'D', text: '0.015' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(8), finalAnswer: '0.025 m³ (Option A)' },
  },

  // Item 9
  {
    id: 'hpge-nov2019-q9',
    number: 9,
    pageNumber: 149,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Lifting a Capsized Banca with an Inflatable Balloon',
    text: 'A capsized banca weighing 12 kN rest on seabed. It is desired to raise the banca by attaching an inflatable balloon to it. Evaluate the minimum volume of balloon to raise the banca. Use $sg_{sw} = 1.03$ and neglect the weight of air and balloon.',
    options: [
      { label: 'A', text: '1.19 m³' },
      { label: 'B', text: '0.58 m³' },
      { label: 'C', text: '1.58 m³' },
      { label: 'D', text: '2.63 m³' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(9), finalAnswer: '1.19 m³ (Option A)' },
  },

  // Item 10
  {
    id: 'hpge-nov2019-q10',
    number: 10,
    pageNumber: 149,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Ship Draft Change in Fresh Water',
    text: 'A ship having a displacement of 30,000 metric tons enters a harbour of fresh water. The ship captain recorded a draft of 12.60 m while the ship was still in seawater (specific gravity = 1.03). Obtain the draft, in meters, of the ship in fresh water if the horizontal section of the ship at the waterline is 3000 m² in both instances.',
    options: [
      { label: 'A', text: '12.75' },
      { label: 'B', text: '13.06' },
      { label: 'C', text: '12.89' },
      { label: 'D', text: '12.31' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(10), finalAnswer: '12.891 m (Option C)' },
  },

  // Item 11
  {
    id: 'hpge-nov2019-q11',
    number: 11,
    pageNumber: 149,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Hydrostatic Force on a Triangular Gate',
    text: 'The triangular gate $AB$ shown is hinged at its base $B$. The gate is 4 m wide perpendicular to the figure.\n\nGiven: $H = 6$ m; $z = 3$ m; $\\theta = 45^\\circ$\n\nFind the horizontal force at vertex $A$ to open the gate, in kN.',
    figureSvg: hpgeNov2019Figure(11, 'Figure 1: Triangular gate AB hinged at base B, with depth H and offset z'),
    figureCaption: 'Triangular gate AB hinged at its base B',
    options: [
      { label: 'A', text: '548' },
      { label: 'B', text: '284' },
      { label: 'C', text: '321' },
      { label: 'D', text: '201' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(11), finalAnswer: '284.11 kN (Option B)' },
  },

  // Item 12
  {
    id: 'hpge-nov2019-q12',
    number: 12,
    pageNumber: 150,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Horizontal Force on a Sector Gate',
    text: 'The sector of a gate shown consist of a cylindrical surface of which $AB$ is the trace. The length of the gate perpendicular to the paper is 10 m, the radius $R = 6$ m, and the angle $\\theta = 60^\\circ$. Evaluate the total horizontal force acting on the gate in kN.',
    figureSvg: hpgeNov2019Figure(12, 'Figure 2: Sector gate with cylindrical surface AB, radius R and angle theta'),
    figureCaption: 'Sector gate with cylindrical surface AB',
    options: [
      { label: 'A', text: '1320' },
      { label: 'B', text: '1180' },
      { label: 'C', text: '1080' },
      { label: 'D', text: '1420' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(12), finalAnswer: '1324.27 kN (Option A)' },
  },

  // Item 13
  {
    id: 'hpge-nov2019-q13',
    number: 13,
    pageNumber: 150,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Pressure under Vertical Acceleration',
    text: 'What is the pressure, in kPa, at the base of a container filled with 1 meter deep water inside an elevator that is accelerating upwards at a rate of 2 meters per second squared?',
    options: [
      { label: 'A', text: '7.81' },
      { label: 'B', text: '12.54' },
      { label: 'C', text: '11.81' },
      { label: 'D', text: '8.96' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(13), finalAnswer: '11.81 kPa (Option C)' },
  },

  // Item 14
  {
    id: 'hpge-nov2019-q14',
    number: 14,
    pageNumber: 150,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Pressure Rise in a Rotating Closed Cylinder',
    text: 'A closed cylindrical tank 1 m in diameter and completely filled with water is rotated about its vertical axis at 120 rpm. Compute the increase in pressure (kPa) at the rim of the tank.',
    options: [
      { label: 'A', text: '20.8' },
      { label: 'B', text: '16.7' },
      { label: 'C', text: '18.5' },
      { label: 'D', text: '19.7' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(14), finalAnswer: '19.74 kPa (Option D)' },
  },

  // Item 15
  {
    id: 'hpge-nov2019-q15',
    number: 15,
    pageNumber: 150,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Water Spilled from a Rotating Open Tank',
    text: 'An open cylindrical tank 1.3 m in diameter and 2.1 m high is 2/3 full of water. If the rank is rotated at 87 rpm about its vertical axis, obtain the volume of water spilled in liters.',
    options: [
      { label: 'A', text: '263' },
      { label: 'B', text: '257' },
      { label: 'C', text: '273' },
      { label: 'D', text: '249' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(15), finalAnswer: '0.2562 m³ = 257 liters (Option B)' },
  },
];
