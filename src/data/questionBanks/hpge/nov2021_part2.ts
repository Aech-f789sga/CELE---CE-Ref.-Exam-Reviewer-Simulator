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

export const HPGE_NOV2021_PART2: Question[] = [
  // Item 14 — Situation 3
  {
    id: 'hpge-nov2021-q14',
    number: 14,
    pageNumber: 298,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 3 — Floating Wooden Buoy: Weight of the Buoy',
    text: 'Situation 3 — A wooden buoy of specific gravity 0.75 floats in a liquid having a specific gravity of 0.85.\n\n14. If the volume above the liquid is 0.045 cubic meters, estimate the weight of the buoy, in kN.',
    options: [
      { label: 'A', text: '3.63' },
      { label: 'B', text: '4.28' },
      { label: 'C', text: '1.85' },
      { label: 'D', text: '2.81' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(14), finalAnswer: 'W = 2.816 kN (Option D)' },
  },

  // Item 15 — Situation 3
  {
    id: 'hpge-nov2021-q15',
    number: 15,
    pageNumber: 298,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 3 — Floating Wooden Buoy: Force to Submerge',
    text: 'Situation 3 — A wooden buoy of specific gravity 0.75 floats in a liquid having a specific gravity of 0.85.\n\n15. What vertical force, in kN, applied to the buoy to fully submerge it?',
    options: [
      { label: 'A', text: '0.268' },
      { label: 'B', text: '0.436' },
      { label: 'C', text: '0.375' },
      { label: 'D', text: '0.524' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(15), finalAnswer: 'F = 0.375 kN (Option C)' },
  },

  // Item 16 — Situation 4
  {
    id: 'hpge-nov2021-q16',
    number: 16,
    pageNumber: 298,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 4 — Stone Weighed in Air and in Water: Buoyant Force',
    text: 'Situation 4 — In order to determine the volume and specific gravity of a stone that weighs 45 kg in air, the engineer observed that when submerged in fresh water the stone weighs 30 kg. Compute the following:\n\n16. The buoyant force acting on the stone, in N.',
    options: [
      { label: 'A', text: '147' },
      { label: 'B', text: '168' },
      { label: 'C', text: '134' },
      { label: 'D', text: '128' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(16), finalAnswer: 'BF = 147 N (Option A)' },
  },

  // Item 17 — Situation 4
  {
    id: 'hpge-nov2021-q17',
    number: 17,
    pageNumber: 298,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 4 — Stone Weighed in Air and in Water: Volume',
    text: 'Situation 4 — In order to determine the volume and specific gravity of a stone that weighs 45 kg in air, the engineer observed that when submerged in fresh water the stone weighs 30 kg. Compute the following:\n\n17. The volume of the stone in cubic meter.',
    options: [
      { label: 'A', text: '0.015' },
      { label: 'B', text: '0.018' },
      { label: 'C', text: '0.012' },
      { label: 'D', text: '0.024' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(17), finalAnswer: 'V = 0.015 m³ (Option A)' },
  },

  // Item 18 — Situation 4
  {
    id: 'hpge-nov2021-q18',
    number: 18,
    pageNumber: 298,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 4 — Stone Weighed in Air and in Water: Specific Gravity',
    text: 'Situation 4 — In order to determine the volume and specific gravity of a stone that weighs 45 kg in air, the engineer observed that when submerged in fresh water the stone weighs 30 kg. Compute the following:\n\n18. The specific gravity of the stone.',
    options: [
      { label: 'A', text: '3.2' },
      { label: 'B', text: '3.5' },
      { label: 'C', text: '2.5' },
      { label: 'D', text: '3.0' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(18), finalAnswer: 'SG = 3 (Option D)' },
  },

  // Item 19 — Situation 5
  {
    id: 'hpge-nov2021-q19',
    number: 19,
    pageNumber: 298,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 5 — Two-Pipe Discharge Line: Velocity in the Bigger Pipe',
    text: 'Situation 5 — The discharge pipeline of water system consists of a 5500 m of 300-mm pipe joined by 3660 m of 450 mm pipe that connects to the base of a huge water reservoir. The difference in elevation between the water surface in the reservoir and the center of the 300-mm pipe at the end of the line is 45.7 m. Neglecting velocity head and other losses in head due to entrances, and using coefficient of friction of 0.02 for both pipes, evaluate the following:\n\n19. The velocity of the water in the bigger pipeline, in m/s.',
    options: [
      { label: 'A', text: '0.728' },
      { label: 'B', text: '0.500' },
      { label: 'C', text: '0.443' },
      { label: 'D', text: '0.665' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(19), finalAnswer: 'v₁ = 0.664 m/s ≈ 0.665 m/s (Option D)' },
  },

  // Item 20 — Situation 5
  {
    id: 'hpge-nov2021-q20',
    number: 20,
    pageNumber: 298,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 5 — Two-Pipe Discharge Line: Velocity in the Smaller Pipe',
    text: 'Situation 5 — The discharge pipeline of water system consists of a 5500 m of 300-mm pipe joined by 3660 m of 450 mm pipe that connects to the base of a huge water reservoir. The difference in elevation between the water surface in the reservoir and the center of the 300-mm pipe at the end of the line is 45.7 m. Neglecting velocity head and other losses in head due to entrances, and using coefficient of friction of 0.02 for both pipes, evaluate the following:\n\n20. The velocity of the water in the smaller pipeline, in m/s.',
    options: [
      { label: 'A', text: '1.50' },
      { label: 'B', text: '1.68' },
      { label: 'C', text: '1.75' },
      { label: 'D', text: '1.40' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(20), finalAnswer: 'v₂ = 1.5 m/s (Option A)' },
  },

  // Item 21 — Situation 5
  {
    id: 'hpge-nov2021-q21',
    number: 21,
    pageNumber: 299,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 5 — Two-Pipe Discharge Line: Rate of Flow',
    text: 'Situation 5 — The discharge pipeline of water system consists of a 5500 m of 300-mm pipe joined by 3660 m of 450 mm pipe that connects to the base of a huge water reservoir. The difference in elevation between the water surface in the reservoir and the center of the 300-mm pipe at the end of the line is 45.7 m. Neglecting velocity head and other losses in head due to entrances, and using coefficient of friction of 0.02 for both pipes, evaluate the following:\n\n21. The rate of flow in the pipes, in m³/sec.',
    options: [
      { label: 'A', text: '0.150' },
      { label: 'B', text: '0.132' },
      { label: 'C', text: '0.106' },
      { label: 'D', text: '0.095' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(21), finalAnswer: 'Q = 0.106 m³/s (Option C)' },
  },

  // Item 22 — Situation 6
  {
    id: 'hpge-nov2021-q22',
    number: 22,
    pageNumber: 299,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 6 — Branching Main: Flow in the 600-mm Pipe',
    text: 'Situation 6 — A 1500-mm-diameter water main carrying 2.15 m³/s branches at a point $J$ to two pipelines, one 300 m long 1,200 mm in diameter and the other 1220 m long and 600 mm in diameter. Both pipes join at point $K$ and continue as a single 1500-mm-diameter pipe. The friction factors for the 1500 mm, 1200 mm, and 600 mm pipes are 0.02, 0.022, and 0.024, respectively. Obtain the following:\n\n22. The flow in the 600-mm-diameter pipeline in m³/s.',
    options: [
      { label: 'A', text: '0.178' },
      { label: 'B', text: '0.463' },
      { label: 'C', text: '0.356' },
      { label: 'D', text: '0.166' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(22), finalAnswer: 'Q₂ = 0.1665 m³/s ≈ 0.166 m³/s (Option D)' },
  },

  // Item 23 — Situation 6
  {
    id: 'hpge-nov2021-q23',
    number: 23,
    pageNumber: 299,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 6 — Branching Main: Flow in the 1200-mm Pipe',
    text: 'Situation 6 — A 1500-mm-diameter water main carrying 2.15 m³/s branches at a point $J$ to two pipelines, one 300 m long 1,200 mm in diameter and the other 1220 m long and 600 mm in diameter. Both pipes join at point $K$ and continue as a single 1500-mm-diameter pipe. The friction factors for the 1500 mm, 1200 mm, and 600 mm pipes are 0.02, 0.022, and 0.024, respectively. Obtain the following:\n\n23. The flow in the 1200-mm-diameter pipeline in m³/s.',
    options: [
      { label: 'A', text: '1.984' },
      { label: 'B', text: '1.794' },
      { label: 'C', text: '1.687' },
      { label: 'D', text: '1.972' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(23), finalAnswer: 'Q₁ = 1.9835 m³/s ≈ 1.984 m³/s (Option A)' },
  },

  // Item 24 — Situation 6
  {
    id: 'hpge-nov2021-q24',
    number: 24,
    pageNumber: 299,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 6 — Branching Main: Velocity in the 600-mm Pipe',
    text: 'Situation 6 — A 1500-mm-diameter water main carrying 2.15 m³/s branches at a point $J$ to two pipelines, one 300 m long 1,200 mm in diameter and the other 1220 m long and 600 mm in diameter. Both pipes join at point $K$ and continue as a single 1500-mm-diameter pipe. The friction factors for the 1500 mm, 1200 mm, and 600 mm pipes are 0.02, 0.022, and 0.024, respectively. Obtain the following:\n\n24. The velocity of flow in the 600-mm-diameter pipeline.',
    options: [
      { label: 'A', text: '1.26' },
      { label: 'B', text: '0.59' },
      { label: 'C', text: '0.63' },
      { label: 'D', text: '1.64' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(24), finalAnswer: 'v₂ = 0.589 m/s ≈ 0.59 m/s (Option B)' },
  },

  // Item 25 — Situation 7
  {
    id: 'hpge-nov2021-q25',
    number: 25,
    pageNumber: 299,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 7 — Parallel Pipelines: Flow in Pipeline 1',
    text: 'Situation 7 — A single pipeline $A$ joins pipelines 1, 2, and 3 at junction $J$ and merges again at junction $K$ to form a single pipeline $B$ as shown in the figure. Pipelines 1, 2, and 3 are parallel to each other. The pressure heads at junctions $J$ and $K$ are 70 m and 45 m, respectively. Using Hazen Williams formula with $C = 110$ for all pipes, obtain the following:\n\n25. The flow rate in pipeline 1 in m³/s.',
    figureSvg: hpgeNov2021Figure(25, 'Figure 25: Pipelines 1, 2 and 3 running in parallel between junctions J and K'),
    figureCaption: 'Parallel pipe network between junctions J and K',
    options: [
      { label: 'A', text: '0.066' },
      { label: 'B', text: '0.097' },
      { label: 'C', text: '0.052' },
      { label: 'D', text: '0.074' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(25), finalAnswer: 'Q₁ = 0.0967 m³/s ≈ 0.097 m³/s (Option B)' },
  },

  // Item 26 — Situation 7
  {
    id: 'hpge-nov2021-q26',
    number: 26,
    pageNumber: 299,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 7 — Parallel Pipelines: Flow in Pipeline 2',
    text: 'Situation 7 — A single pipeline $A$ joins pipelines 1, 2, and 3 at junction $J$ and merges again at junction $K$ to form a single pipeline $B$ as shown in the figure. Pipelines 1, 2, and 3 are parallel to each other. The pressure heads at junctions $J$ and $K$ are 70 m and 45 m, respectively. Using Hazen Williams formula with $C = 110$ for all pipes, obtain the following:\n\n26. The flow rate in pipeline 2 in m³/s.',
    options: [
      { label: 'A', text: '0.097' },
      { label: 'B', text: '0.074' },
      { label: 'C', text: '0.066' },
      { label: 'D', text: '0.052' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(26), finalAnswer: 'Q₂ = 0.0523 m³/s ≈ 0.052 m³/s (Option D)' },
  },

  // Item 27 — Situation 7
  {
    id: 'hpge-nov2021-q27',
    number: 27,
    pageNumber: 299,
    subject: 'HPGE',
    year: 2021,
    month: 'November',
    category: 'Situation 7 — Parallel Pipelines: Flow in Pipeline 3',
    text: 'Situation 7 — A single pipeline $A$ joins pipelines 1, 2, and 3 at junction $J$ and merges again at junction $K$ to form a single pipeline $B$ as shown in the figure. Pipelines 1, 2, and 3 are parallel to each other. The pressure heads at junctions $J$ and $K$ are 70 m and 45 m, respectively. Using Hazen Williams formula with $C = 110$ for all pipes, obtain the following:\n\n27. The flow rate in pipeline 3 in m³/s.',
    options: [
      { label: 'A', text: '0.052' },
      { label: 'B', text: '0.066' },
      { label: 'C', text: '0.074' },
      { label: 'D', text: '0.097' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(27), finalAnswer: 'Q₃ = 0.066 m³/s (Option B)' },
  },
];
