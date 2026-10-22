import { Question } from '../../../types/exam';
import {
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

export const HPGE_NOV2021_PART3: Question[] = [
  // Item 28 — Situation 8
  {
    id: 'hpge-nov2021-q28',
    number: 28,
    pageNumber: 300,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 8 — Non-Uniform Open Channel Flow: Head Loss',
    text: 'Situation 8 — Water flows in an almost level rectangular channel 3 m wide at 12 m³/s. The depth of the channel gradually increases from 1 m to 1.1 m for a length of 5 m. Obtain the following:\n\n28. The head loss in meters.',
    options: [
      { label: 'A', text: '0.042' },
      { label: 'B', text: '0.036' },
      { label: 'C', text: '0.056' },
      { label: 'D', text: '0.066' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(28), finalAnswer: 'HL = 0.04152 m ≈ 0.042 m (Option A)' },
  },

  // Item 29 — Situation 8
  {
    id: 'hpge-nov2021-q29',
    number: 29,
    pageNumber: 300,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 8 — Non-Uniform Open Channel Flow: Energy Grade Line Slope',
    text: 'Situation 8 — Water flows in an almost level rectangular channel 3 m wide at 12 m³/s. The depth of the channel gradually increases from 1 m to 1.1 m for a length of 5 m. Obtain the following:\n\n29. The slope of the energy grade line.',
    options: [
      { label: 'A', text: '0.011' },
      { label: 'B', text: '0.0072' },
      { label: 'C', text: '0.0083' },
      { label: 'D', text: '0.013' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(29), finalAnswer: 'S = 0.04152/5 = 0.0083 (Option C)' },
  },

  // Item 30 — Situation 8
  {
    id: 'hpge-nov2021-q30',
    number: 30,
    pageNumber: 300,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 8 — Non-Uniform Open Channel Flow: Roughness Coefficient',
    text: 'Situation 8 — Water flows in an almost level rectangular channel 3 m wide at 12 m³/s. The depth of the channel gradually increases from 1 m to 1.1 m for a length of 5 m. Obtain the following:\n\n30. The roughness coefficient.',
    options: [
      { label: 'A', text: '0.013' },
      { label: 'B', text: '0.036' },
      { label: 'C', text: '0.021' },
      { label: 'D', text: '0.017' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(30), finalAnswer: 'n = 0.0172 ≈ 0.017 (Option D)' },
  },

  // Item 31
  {
    id: 'hpge-nov2021-q31',
    number: 31,
    pageNumber: 300,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Soil Mechanics — Groundwater Table and Bearing Capacity',
    text: 'If the ground water table in a soil formation rises as a resulting of flooding, the bearing capacity of the soil',
    options: [
      { label: 'A', text: 'depends on the footing load' },
      { label: 'B', text: 'unaffected' },
      { label: 'C', text: 'decreases' },
      { label: 'D', text: 'increases' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(31), finalAnswer: 'Decreases (Option C)' },
  },

  // Item 32
  {
    id: 'hpge-nov2021-q32',
    number: 32,
    pageNumber: 300,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Soil Mechanics — Bearing Capacity Factors',
    text: 'One of the following foundation conditions does not affect the bearing capacity of the supporting soil.',
    options: [
      { label: 'A', text: 'unit weight of the soil' },
      { label: 'B', text: 'load imposed onto the soil' },
      { label: 'C', text: 'position of ground water table' },
      { label: 'D', text: 'depth of founding of footings' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(32), finalAnswer: 'Load imposed onto the soil (Option B)' },
  },

  // Item 33
  {
    id: 'hpge-nov2021-q33',
    number: 33,
    pageNumber: 300,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Soil Mechanics — Dry Unit Weight from Void Ratio',
    text: 'Obtain the dry unit weight of a soil mass having a void ratio of 0.50 with specific gravity of 2.5 for its solid grains, in kN/m³.',
    options: [
      { label: 'A', text: '15.25' },
      { label: 'B', text: '14.52' },
      { label: 'C', text: '16.35' },
      { label: 'D', text: '17.35' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(33), finalAnswer: 'γd = 16.35 kN/m³ (Option C)' },
  },

  // Item 34
  {
    id: 'hpge-nov2021-q34',
    number: 34,
    pageNumber: 301,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Soil Mechanics — Unconfined Compression Test',
    text: 'An unconfined compression test was conducted on a sample of clay having a diameter of 50 mm. The failure load was recorded at 250 N. The cohesion strength of the clay, in kPa, is nearest to a value of',
    options: [
      { label: 'A', text: '86.5' },
      { label: 'B', text: '127.3' },
      { label: 'C', text: '63.7' },
      { label: 'D', text: '48.2' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(34), finalAnswer: 'cu = ½(127.324) = 63.66 kPa ≈ 63.7 kPa (Option C)' },
  },

  // Item 35
  {
    id: 'hpge-nov2021-q35',
    number: 35,
    pageNumber: 301,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Soil Mechanics — Boussinesq Point Load',
    text: 'An underground tunnel is to be constructed at a depth of 10 m below the ground surface for a subway. On ground surface and radially located from the line of the tunnel is a vertical load of 10 MN. Design specification requires that the vertical stress due to the load at the level of the tunnel should not exceed 5% the stress at the same depth directly below the load. Evaluate the minimum distance at which the alignment of the tunnel be located from the line of application of the load.\n\nUse Boussinesq theory due to point load.\n\n$p = 0.477\\,\\dfrac{QN}{z^2}$\n\n$N = \\dfrac{1}{\\left(1 + \\left(\\dfrac{r}{z}\\right)^2\\right)^{2.5}}$',
    options: [
      { label: 'A', text: '15 m' },
      { label: 'B', text: '16 m' },
      { label: 'C', text: '13 m' },
      { label: 'D', text: '14 m' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(35), finalAnswer: 'r ≥ 15.21 m, choose r = 16 m (Option B)' },
  },

  // Item 36 — Situation 9
  {
    id: 'hpge-nov2021-q36',
    number: 36,
    pageNumber: 301,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 9 — Soil Properties: Degree of Saturation',
    text: 'Situation 9 — In its natural state, a soil has a moisture content of 32% and unit weight of 16 kN/m³. The specific gravity of the soil particles is 2.50. Obtain the following soil properties:\n\n36. The degree of saturation in percent.',
    options: [
      { label: 'A', text: '65.3' },
      { label: 'B', text: '82.5' },
      { label: 'C', text: '78.2' },
      { label: 'D', text: '62.3' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(36), finalAnswer: 'S = 78.18% ≈ 78.2% (Option C)' },
  },

  // Item 37 — Situation 9
  {
    id: 'hpge-nov2021-q37',
    number: 37,
    pageNumber: 301,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 9 — Soil Properties: Void Ratio',
    text: 'Situation 9 — In its natural state, a soil has a moisture content of 32% and unit weight of 16 kN/m³. The specific gravity of the soil particles is 2.50. Obtain the following soil properties:\n\n37. The void ratio.',
    options: [
      { label: 'A', text: '1.15' },
      { label: 'B', text: '0.87' },
      { label: 'C', text: '1.02' },
      { label: 'D', text: '0.95' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(37), finalAnswer: 'e = 1.023 ≈ 1.02 (Option C)' },
  },

  // Item 38 — Situation 9
  {
    id: 'hpge-nov2021-q38',
    number: 38,
    pageNumber: 301,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 9 — Soil Properties: Dry Unit Weight',
    text: 'Situation 9 — In its natural state, a soil has a moisture content of 32% and unit weight of 16 kN/m³. The specific gravity of the soil particles is 2.50. Obtain the following soil properties:\n\n38. The dry unit weight in kN/m³.',
    options: [
      { label: 'A', text: '12.1' },
      { label: 'B', text: '10.5' },
      { label: 'C', text: '11.3' },
      { label: 'D', text: '13.6' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(38), finalAnswer: 'γd = 12.12 kN/m³ ≈ 12.1 kN/m³ (Option A)' },
  },

  // Item 39 — Situation 10
  {
    id: 'hpge-nov2021-q39',
    number: 39,
    pageNumber: 302,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 10 — Layered Soil: Equivalent Horizontal Permeability',
    text: 'Situation 10 — Given the following properties of a three-layered soil from top to bottom.\n\n| Layer | Coefficient of permeability, $k$ (cm/s) | Thickness, $H$ (m) |\n| :---: | :---: | :---: |\n| 1 | $2.1 \\times 10^{-4}$ | 4.0 |\n| 2 | $3.6 \\times 10^{-2}$ | 3.0 |\n| 3 | $4.2 \\times 10^{-5}$ | 5.0 |\n\nEvaluate the following:\n\n39. The equivalent horizontal coefficient of permeability in cm/s.',
    options: [
      { label: 'A', text: '0.0132' },
      { label: 'B', text: '0.0091' },
      { label: 'C', text: '0.0067' },
      { label: 'D', text: '0.0058' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(39), finalAnswer: '(kx)eq = 0.00909 cm/s ≈ 0.0091 cm/s (Option B)' },
  },
];
