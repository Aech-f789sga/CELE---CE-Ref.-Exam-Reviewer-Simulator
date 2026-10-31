import { Question } from '../../../types/exam';
import { hpgeMay2015Figure } from '../../hpgeMay2015Images';

export const HPGE_MAY2015_PART6: Question[] = [
  // Item 76
  {
    id: 'hpge-may2015-q76',
    number: 76,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Lateral Earth Pressure',
    text: 'Situation 16 (continued) – Determine the increase in force on the wall if the soil is fully saturated with rain water.',
    options: [
      { label: 'A', text: '305.8 kN' },
      { label: 'B', text: '287.7 kN' },
      { label: 'C', text: '352.6 kN' },
      { label: 'D', text: '421.2 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Saturation adds two things: the water pressure itself, and the switch of the soil push from total to submerged unit weight.',
      formulas: [
        '\\gamma_{sat} = \\dfrac{(2.65 + 0.50)(9.81)}{1.50} = 20.60\\ \\text{kN/m}^3',
        "\\gamma' = 20.60 - 9.81 = 10.79\\ \\text{kN/m}^3",
        'P_{total} = \\tfrac{1}{2}K_a\\gamma\'H^2 + \\tfrac{1}{2}\\gamma_w H^2',
      ],
      steps: [
        'Step 1: $P_{soil} = \\tfrac{1}{2}(0.4903)(10.79)(100) = 264.5\\ \\text{kN}$.',
        'Step 2: $P_{water} = \\tfrac{1}{2}(9.81)(100) = 490.5\\ \\text{kN}$.',
        'Step 3: Total with full saturation $= 264.5 + 490.5 = 755.0\\ \\text{kN}$.',
        'Step 4: Increase over the moist case (item 74) $= 755.0 - 467.3 = 287.7\\ \\text{kN}$.',
      ],
      finalAnswer: '287.7 kN (Option B)',
    },
  },

  // Item 77
  {
    id: 'hpge-may2015-q77',
    number: 77,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Footings)',
    text: 'Situation 17 – The 4-m square footing shown in the figure supports a load Q = 5000 kN. In this problem, $H_1$ = 8 m and $H_2$ = 12 m. Calculate the pressure at the base of the footing.',
    figureSvg: hpgeMay2015Figure(
      17,
      'Figure 9: Square footing of width B carrying load Q, over a clay layer between depths H1 and H2, with layer thickness t.',
    ),
    figureCaption:
      'Figure 9: Footing of width B over a clay layer defined by H₁, H₂ and thickness t (Situation 17).',
    options: [
      { label: 'A', text: '325.8 kPa' },
      { label: 'B', text: '312.5 kPa' },
      { label: 'C', text: '284.6 kPa' },
      { label: 'D', text: '275.4 kPa' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Contact pressure is the load divided by the footing area.',
      formulas: ['q = \\dfrac{Q}{B^2} = \\dfrac{5000}{4 \\times 4}'],
      steps: [
        'Step 1: Footing area $= 4 \\times 4 = 16\\ \\text{m}^2$.',
        'Step 2: $q = 5000/16$.',
        'Step 3: $q = 312.5\\ \\text{kPa}$.',
      ],
      finalAnswer: '312.5 kPa (Option B)',
    },
  },

  // Item 78
  {
    id: 'hpge-may2015-q78',
    number: 78,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Footings)',
    text: 'Situation 17 (continued) – Calculate the pressure at the midheight of the clay layer assuming that the stress beneath the footing if spread at a slope of 1H to 2V.',
    options: [
      { label: 'A', text: '22.48 kPa' },
      { label: 'B', text: '28.36 kPa' },
      { label: 'C', text: '20.87 kPa' },
      { label: 'D', text: '25.51 kPa' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'A 1H to 2V spread widens the loaded area by 1 m for every 2 m of depth on each side, so the width grows by the depth itself.',
      formulas: [
        'z = \\dfrac{H_1 + H_2}{2} = 10\\ \\text{m}',
        'B_z = B + z = 4 + 10 = 14\\ \\text{m}',
        'q_z = \\dfrac{Q}{B_z^2}',
      ],
      steps: [
        'Step 1: The clay layer runs from $H_1 = 8\\ \\text{m}$ to $H_2 = 12\\ \\text{m}$, so its midheight is 10 m below the footing base.',
        'Step 2: With 1 horizontal to 2 vertical, each side spreads $z/2 = 5\\ \\text{m}$, so the width becomes $4 + 10 = 14\\ \\text{m}$.',
        'Step 3: $q_z = 5000/14^2$.',
        'Step 4: $q_z = 5000/196 = 25.51\\ \\text{kPa}$.',
      ],
      finalAnswer: '25.51 kPa (Option D)',
    },
  },

  // Item 79
  {
    id: 'hpge-may2015-q79',
    number: 79,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Boussinesq)',
    text: 'Situation 17 (continued) – Calculate the pressure at the midheight of the clay layer (below the center of the footing) using Boussinesq Equation assuming point load.',
    options: [
      { label: 'A', text: '22.38 kPa' },
      { label: 'B', text: '24.69 kPa' },
      { label: 'C', text: '28.97 kPa' },
      { label: 'D', text: '23.87 kPa' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The point-load form of Boussinesq gives the vertical stress directly beneath the load.',
      formulas: ['\\Delta\\sigma_z = \\dfrac{3Q}{2\\pi z^2}'],
      steps: [
        'Step 1: $Q = 5000\\ \\text{kN}$, $z = 10\\ \\text{m}$.',
        'Step 2: $\\Delta\\sigma_z = \\dfrac{3(5000)}{2\\pi(10)^2}$.',
        'Step 3: $\\Delta\\sigma_z = 15000/628.32$.',
        'Step 4: $\\Delta\\sigma_z = 23.87\\ \\text{kPa}$.',
      ],
      finalAnswer: '23.87 kPa (Option D)',
    },
  },

  // Item 80
  {
    id: 'hpge-may2015-q80',
    number: 80,
    pageNumber: 50,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Boussinesq)',
    text: 'Situation 18 – A 4-m-diameter circular footing is supporting a water tank. The total weight of the footing, tank and its content is 1.60 MN.\n\nGiven the Boussinesq’s equation:\n\n$\\sigma_z = q \\times I_B$, where $I_B = 1 - 1/N$ and $N = [(R/z)^2 + 1]^{3/2}$\n\nDetermine the pressure at the base of the footing.',
    options: [
      { label: 'A', text: '127.3 kPa' },
      { label: 'B', text: '114.8 kPa' },
      { label: 'C', text: '136.9 kPa' },
      { label: 'D', text: '142.8 kPa' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Base pressure is the total load over the circular area.',
      formulas: ['q = \\dfrac{P}{\\pi R^2} = \\dfrac{1600}{\\pi(2)^2}'],
      steps: [
        'Step 1: $P = 1.60\\ \\text{MN} = 1600\\ \\text{kN}$; $R = 2\\ \\text{m}$.',
        'Step 2: Area $= \\pi(2)^2 = 12.566\\ \\text{m}^2$.',
        'Step 3: $q = 1600/12.566 = 127.3\\ \\text{kPa}$.',
      ],
      finalAnswer: '127.3 kPa (Option A)',
    },
  },

  // Item 81
  {
    id: 'hpge-may2015-q81',
    number: 81,
    pageNumber: 50,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Boussinesq)',
    text: 'Situation 18 (continued) – Using the Boussinesq’s equation, what is the increase in pressure at a depth of 4 meters below the base of footing?',
    options: [
      { label: 'A', text: '32.5 kPa' },
      { label: 'B', text: '30.7 kPa' },
      { label: 'C', text: '36.2 kPa' },
      { label: 'D', text: '28.4 kPa' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Evaluate the influence factor for R/z = 0.5 and multiply by the contact pressure.',
      formulas: [
        'N = \\left[\\left(\\dfrac{2}{4}\\right)^2 + 1\\right]^{3/2} = (1.25)^{3/2} = 1.3975',
        'I_B = 1 - \\dfrac{1}{N}',
      ],
      steps: [
        'Step 1: $R/z = 2/4 = 0.5$, so $(R/z)^2 = 0.25$.',
        'Step 2: $N = (1.25)^{1.5} = 1.3975$.',
        'Step 3: $I_B = 1 - 1/1.3975 = 0.2844$.',
        'Step 4: $\\sigma_z = 127.32(0.2844) = 36.2\\ \\text{kPa}$.',
      ],
      finalAnswer: '36.2 kPa (Option C)',
    },
  },

  // Item 82
  {
    id: 'hpge-may2015-q82',
    number: 82,
    pageNumber: 50,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Boussinesq)',
    text: 'Situation 18 (continued) – Using the Boussinesq’s equation, at what depth below the base of footing is the increase in pressure equal to 1/6 the pressure at the base of footing?',
    options: [
      { label: 'A', text: '5.56 m' },
      { label: 'B', text: '6.32 m' },
      { label: 'C', text: '5.89 m' },
      { label: 'D', text: '4.89 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Set the influence factor to 1/6, invert it to get N, then back-solve for z.',
      formulas: [
        'I_B = \\dfrac{1}{6} \\Rightarrow N = \\dfrac{1}{1 - 1/6} = 1.2',
        '\\left(\\dfrac{R}{z}\\right)^2 + 1 = N^{2/3}',
      ],
      steps: [
        'Step 1: $I_B = 1/6$ gives $1 - 1/N = 1/6$, so $N = 1.2$.',
        'Step 2: $(R/z)^2 + 1 = 1.2^{2/3} = 1.12924$.',
        'Step 3: $(R/z)^2 = 0.12924$, so $4/z^2 = 0.12924$.',
        'Step 4: $z^2 = 30.95$, $z = 5.56\\ \\text{m}$.',
      ],
      finalAnswer: '5.56 m (Option A)',
    },
  },
];
