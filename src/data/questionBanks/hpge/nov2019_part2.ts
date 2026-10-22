import { Question } from '../../../types/exam';
import {
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

export const HPGE_NOV2019_PART2: Question[] = [
  // Item 16
  {
    id: 'hpge-nov2019-q16',
    number: 16,
    pageNumber: 150,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Types of Flow',
    text: 'A type of flow where at any instant, the amount of fluid particles passing through a pipe section is constant.',
    options: [
      { label: 'A', text: 'Laminar' },
      { label: 'B', text: 'Continuous' },
      { label: 'C', text: 'Uniform' },
      { label: 'D', text: 'Steady' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(16), finalAnswer: 'Steady (Option D)' },
  },

  // Item 17
  {
    id: 'hpge-nov2019-q17',
    number: 17,
    pageNumber: 151,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Velocity Head',
    text: 'Evaluate the kinetic energy of a unit weight of water flowing at 4 m/s.',
    options: [
      { label: 'A', text: '0.815 m' },
      { label: 'B', text: '0.586 m' },
      { label: 'C', text: '1.256 m' },
      { label: 'D', text: '0.932 m' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(17), finalAnswer: '0.815 m (Option A)' },
  },

  // Item 18
  {
    id: 'hpge-nov2019-q18',
    number: 18,
    pageNumber: 151,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Projectile Water Jet over a Firewall',
    text: 'A fireman must put out a fire but is blocked by a firewall. To reach over the wall, he directed the water jet from the nozzle at an angle of 30° to the horizontal. Evaluate his maximum horizontal distance from the wall if the jet velocity exiting from the nozzle is 20 m/s and the wall is standing 3 m higher than the nozzle of the hose. Neglect friction in the jet and air resistance.',
    options: [
      { label: 'A', text: '22 m' },
      { label: 'B', text: '20 m' },
      { label: 'C', text: '25 m' },
      { label: 'D', text: '29 m' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(18), finalAnswer: '28.98 m (Option D)' },
  },

  // Item 19
  {
    id: 'hpge-nov2019-q19',
    number: 19,
    pageNumber: 151,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Pipe Capacity from Friction Head Loss',
    text: 'Find the capacity (m³/min) of a 1-m-diameter pipe with a head loss of 3 m per km and frictional constant of 0.025.',
    options: [
      { label: 'A', text: '72.3' },
      { label: 'B', text: '52.6' },
      { label: 'C', text: '38.6' },
      { label: 'D', text: '36.8' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(19), finalAnswer: '72.3 m³/min (Option A)' },
  },

  // Item 20
  {
    id: 'hpge-nov2019-q20',
    number: 20,
    pageNumber: 151,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Hydraulic Power in Horsepower',
    text: 'Water flows at the rate of 5 m³/s at a total head of 10 m. Obtain the horsepower in the flow.',
    options: [
      { label: 'A', text: '658' },
      { label: 'B', text: '586' },
      { label: 'C', text: '856' },
      { label: 'D', text: '685' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(20), finalAnswer: '657.8 hp (Option A)' },
  },

  // Item 21
  {
    id: 'hpge-nov2019-q21',
    number: 21,
    pageNumber: 151,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Friction Factor from Mercury Gage Readings',
    text: 'Water flows at the rate of 0.18 m³/s in a straight 200-mm-diameter horizontal pipe. Two mercury gages $A$ and $B$ 150 m apart shows a difference in reading of 1.96 m. Evaluate the friction factor.',
    options: [
      { label: 'A', text: '0.028' },
      { label: 'B', text: '0.016' },
      { label: 'C', text: '0.021' },
      { label: 'D', text: '0.036' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(21), finalAnswer: 'f = 0.021 (Option C)' },
  },

  // Item 22
  {
    id: 'hpge-nov2019-q22',
    number: 22,
    pageNumber: 151,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Jet Force on a Moving Plate',
    text: 'A 25-mm-diameter water jet flowing at 8 m/s hits a flat plate moving at 3 m/s in the same direction as the jet. Obtain the force exerted by the jet on the plane.',
    options: [
      { label: 'A', text: '20.5 N' },
      { label: 'B', text: '18.4 N' },
      { label: 'C', text: '12.3 N' },
      { label: 'D', text: '15.8 N' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(22), finalAnswer: '12.275 N (Option C)' },
  },

  // Item 23
  {
    id: 'hpge-nov2019-q23',
    number: 23,
    pageNumber: 151,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Dynamic Force of Falling Water',
    text: 'Water flows freely from the top of a 20-m-high building. If 0.5 m³ of water flow in 2 seconds, compute the force as it hit the passers-by below.',
    options: [
      { label: 'A', text: '3260 N' },
      { label: 'B', text: '4950 N' },
      { label: 'C', text: '5630 N' },
      { label: 'D', text: '2870 N' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(23), finalAnswer: '4,951 N (Option B)' },
  },

  // Item 24
  {
    id: 'hpge-nov2019-q24',
    number: 24,
    pageNumber: 152,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Fluid Mechanics — Open Channel Discharge by Manning',
    text: 'Water flows on a 5.4-m-wide open channel at a depth of 1.20 m. The channel bed is on a slope of 0.001. Roughness coefficient is 0.025. Obtain the discharge through the channel in m³/s.',
    options: [
      { label: 'A', text: '8.69' },
      { label: 'B', text: '6.25' },
      { label: 'C', text: '7.24' },
      { label: 'D', text: '5.32' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(24), finalAnswer: '7.245 m³/s (Option C)' },
  },

  // Item 25
  {
    id: 'hpge-nov2019-q25',
    number: 25,
    pageNumber: 152,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — USCS Particle Size Classification',
    text: 'According to USCS, particles with size greater than 75 mm are called:',
    options: [
      { label: 'A', text: 'Rock' },
      { label: 'B', text: 'Gravel' },
      { label: 'C', text: 'Boulder' },
      { label: 'D', text: 'Cobble' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(25), finalAnswer: 'Cobble (Option D)' },
  },

  // Item 26
  {
    id: 'hpge-nov2019-q26',
    number: 26,
    pageNumber: 152,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Void Ratio from Moisture Content and Saturation',
    text: 'Evaluate the void ratio of a soil specimen with moisture content of 50%, degree of saturation of 90%, and specific gravity of soil solids of 2.67.',
    options: [
      { label: 'A', text: '0.84' },
      { label: 'B', text: '0.56' },
      { label: 'C', text: '1.12' },
      { label: 'D', text: '1.48' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(26), finalAnswer: 'e = 1.483 (Option D)' },
  },

  // Item 27
  {
    id: 'hpge-nov2019-q27',
    number: 27,
    pageNumber: 152,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Dry Unit Weight',
    text: 'A soil sample has a unit weight of 14 kN/m³ and moisture content of 18%. Compute the dry unit weight of the soil. Use $G_s = 2.50$.',
    options: [
      { label: 'A', text: '15.32 kN/m³' },
      { label: 'B', text: '10.85 kN/m³' },
      { label: 'C', text: '11.86 kN/m³' },
      { label: 'D', text: '12.36 kN/m³' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(27), finalAnswer: '11.86 kN/m³ (Option C)' },
  },

  // Item 28
  {
    id: 'hpge-nov2019-q28',
    number: 28,
    pageNumber: 152,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Unit Weight from Jar and Container Volume',
    text: 'A cohesive soil sample was taken from an SPT and taken to the laboratory in a glass jar. It was found to weigh 145 grams. The sample was then placed in a container having a volume, $V = 500$ cm³ and 425 cm³ of water were added to fill the container. Evaluate the unit weight of the soil in kN/m³.',
    options: [
      { label: 'A', text: '14.71' },
      { label: 'B', text: '18.96' },
      { label: 'C', text: '15.89' },
      { label: 'D', text: '16.32' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(28), finalAnswer: '18.966 kN/m³ (Option B)' },
  },

  // Item 29
  {
    id: 'hpge-nov2019-q29',
    number: 29,
    pageNumber: 152,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Flow Rate through an Inclined Permeable Layer',
    text: 'A water resources engineer conducted a survey on a permeable layer at the foot Mount Makiling. The following data were obtained:\n\n| Given | Value |\n| :--- | :--- |\n| Thickness of permeable layer | 2.6 m |\n| Thickness of impervious layer above | 4.57 m |\n| Horizontal distance between two drill holes | 36.6 m |\n| Angle of inclination of permeable layer | 14° |\n| Drop of hydraulic grade line between two drill holes | 1.4 m |\n| Coefficient of permeability of soil, $k$ | 0.48 × 10⁻³ cm/s |\n\nObtain the flow rate in m³/hr per meter length (at right angles to the direction of flow)',
    options: [
      { label: 'A', text: '3.88 × 10⁻³' },
      { label: 'B', text: '1.96 × 10⁻³' },
      { label: 'C', text: '4.49 × 10⁻³' },
      { label: 'D', text: '1.62 × 10⁻³' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(29), finalAnswer: '1.618 × 10⁻³ m³/hr per meter (Option D)' },
  },

  // Item 30
  {
    id: 'hpge-nov2019-q30',
    number: 30,
    pageNumber: 153,
    subject: 'HPGE',
    year: 2019,
    month: 'November',
    category: 'Geotechnical Engineering — Friction Angle from Chamber and Plunger Stress',
    text: 'A triaxial stress is performed on a cohesionless soil specimen. The soil is consolidated to an all-around chamber pressure of 60 kPa. The axial load was then increased, and failure occurred when the plunger stress reached 120 kPa. Obtain the angle of internal friction of the specimen.',
    options: [
      { label: 'A', text: '22.5°' },
      { label: 'B', text: '28°' },
      { label: 'C', text: '19.5°' },
      { label: 'D', text: '30°' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(30), finalAnswer: 'φ = 30° (Option D)' },
  },
];
