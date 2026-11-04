import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

export const MSTC_NOV2024_PART3: Question[] = [
  // Item 25
  {
    id: 'mstc-nov2024-q25',
    number: 25,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Integral Calculus - Properties of Definite Integrals',
    text: 'If a function $f$ is continuous for all values of $x$, which of the following statements is/are always true?\n\nI. $\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$\nII. $\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx - \\int_b^c f(x)\\,dx$\nIII. $\\int_a^b f(x)\\,dx = \\int_b^c f(x)\\,dx - \\int_c^a f(x)\\,dx$',
    options: [
      { label: 'A', text: 'I & II' },
      { label: 'B', text: 'I & III' },
      { label: 'C', text: 'II & III' },
      { label: 'D', text: 'I, II, & III' },
    ],
    ...solved(25, 'B', 'I & III (Option B)'),
  },

  // Item 26
  {
    id: 'mstc-nov2024-q26',
    number: 26,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Integral Calculus - Parabolic Tunnel Excavation Volume',
    text: 'In order to distribute stress, mine tunnels are sometimes rounded. Suppose that the vertical cross sections of a tunnel can be modeled by the parabola $y = 6 - 0.06x^2$. If $x$ and $y$ are measured in feet, how much rock would have to be moved to make such a tunnel that is 100 feet long?',
    figureCaption: 'Figure 26: Parabolic mine tunnel cross section excavation',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_26.png" 
        alt="Figure 26: Parabolic mine tunnel cross section excavation" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '9000' },
      { label: 'B', text: '8000' },
      { label: 'C', text: '7000' },
      { label: 'D', text: '6000' },
    ],
    ...solved(26, 'B', '8000 (Option B)'),
  },

  // Item 27
  {
    id: 'mstc-nov2024-q27',
    number: 27,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Integral Calculus - Solid with Known Cross Sections',
    text: 'What is the volume of the solid whose base is the region enclosed by the graphs of $y = x^2$ and $y = x + 2$ and whose cross sections perpendicular to the $x$-axis are squares?',
    options: [
      { label: 'A', text: '$79/10$' },
      { label: 'B', text: '$81/10$' },
      { label: 'C', text: '$77/10$' },
      { label: 'D', text: '$83/10$' },
    ],
    ...solved(27, 'B', '81/10 (Option B)'),
  },

  // Item 28
  {
    id: 'mstc-nov2024-q28',
    number: 28,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics / Statics - Varignon\'s Theorem & Center of Gravity',
    text: 'A one-meter rod is suspended at its middle so that it balances. Suppose one-gram weights are hung on the rod at the following distances from one end:\n\n| Weight # | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n| **Distance from End** | 5 cm | 20 cm | 37 cm | 44 cm | 52 cm | 68 cm | 71 cm | 85 cm |\n\nThe rod does not balance at the 50-centimeter mark. Where must a one-gram weight be hung so that the rod will balance at the 50-centimeter mark?',
    options: [
      { label: 'A', text: '83' },
      { label: 'B', text: '50' },
      { label: 'C', text: '68' },
      { label: 'D', text: '72' },
    ],
    ...solved(28, 'C', '68 (Option C)'),
  },

  // Item 29
  {
    id: 'mstc-nov2024-q29',
    number: 29,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Physics / Dynamics - Conservation of Linear Momentum',
    text: 'A child in a boat throws a 6.40 kg package out horizontally with a speed of 10.0 m/s. Calculate the velocity of the boat immediately after, assuming it was initially at rest. The mass of the child is 26.0 kg and that of the boat is 45.0 kg. Ignore water resistance.',
    options: [
      { label: 'A', text: '-0.701 m/s' },
      { label: 'B', text: '-0.901 m/s' },
      { label: 'C', text: '-0.901 m/s' },
      { label: 'D', text: '-0.801 m/s' },
    ],
    ...solved(29, 'B', '-0.901 m/s (Option B)'),
  },

  // Item 30
  {
    id: 'mstc-nov2024-q30',
    number: 30,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Transportation / Physics - Skid Marks & Work-Energy Theorem',
    text: 'At an accident scene on a level road, investigators measure a car\'s skid mark to be 88 m long. The accident occurred on a rainy day and the coefficient of kinetic friction was estimated to be 0.42. Use these data to determine the speed of the car when the driver slammed on (and locked) the brakes. (Why does this mass not matter?)',
    options: [
      { label: 'A', text: '27 m/s, mass is not needed because the braking force acts in the same direction from the direction of the car\'s motion' },
      { label: 'B', text: '27 m/s, mass is not needed because the kinetic friction acts in the opposite direction from the direction of the car\'s motion' },
      { label: 'C', text: '27 m/s, mass is not needed because the kinetic friction acts in the same direction from the direction of the car\'s motion' },
      { label: 'D', text: '27 m/s, mass is not needed because the braking force acts in the opposite direction from the direction of the car\'s motion' },
    ],
    ...solved(30, 'D', '27 m/s, mass is not needed because the braking force acts in the opposite direction from the direction of the car\\\'s motion (Option D)'),
  },

  // Item 31
  {
    id: 'mstc-nov2024-q31',
    number: 31,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway Engineering - Minimum Radius of Horizontal Curve',
    text: 'A road is being designed for a speed of 110 km/h on a horizontal curve with a super-elevation of 8%. If the coefficient of side friction is 0.1, the minimum radius of the curve (in m) required for safe vehicular movement is:',
    options: [
      { label: 'A', text: '115' },
      { label: 'B', text: '152' },
      { label: 'C', text: '264.3' },
      { label: 'D', text: '528.74' },
    ],
    ...solved(31, 'D', '528.74 (Option D)'),
  },

  // Item 32
  {
    id: 'mstc-nov2024-q32',
    number: 32,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Physics / Work-Energy Theorem - Spring Bumper Constant',
    text: 'A 4500 kg ore car rolls down an incline and passes point A traveling at 1.2 m/s. The ore car is stopped by a spring bumper that compresses 0.6 m. A constant friction force of 220 N acts on the car at all times. What is the spring constant?\nGiven: Distance along incline d = 75 m from A to spring, then 60 m level track; vertical drop = 1 m.',
    figureCaption: 'Figure 32: Ore car rolling down incline to spring bumper',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_32.png" 
        alt="Figure 32: Ore car rolling down incline to spring bumper" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '99.5 kN/m' },
      { label: 'B', text: '96.5 kN/m' },
      { label: 'C', text: '98.5 kN/m' },
      { label: 'D', text: '97.5 kN/m' },
    ],
    ...solved(32, 'D', '97.5 kN/m (Option D)'),
  },

  // Item 33
  {
    id: 'mstc-nov2024-q33',
    number: 33,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Probability & Statistics - Mathematical Expectation',
    text: 'Assume that a person spins the pointer and is awarded the amount indicated by the pointer. If it costs ₱8 to play the game, determine the expectation of a person who plays the game.\nSpinner division: ₱2 covers 1/4 of circle, ₱5 covers 1/4, ₱10 covers 1/4; two other 1/8 sectors are ₱5 and ₱20.',
    figureCaption: 'Figure 33: Circular prize wheel spinner sectors',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_33.png" 
        alt="Figure 33: Circular prize wheel spinner sectors" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '-0.652' },
      { label: 'B', text: '-0.562' },
      { label: 'C', text: '-0.265' },
      { label: 'D', text: '-0.625' },
    ],
    ...solved(33, 'D', '-0.625 (Option D)'),
  },

  // Item 34
  {
    id: 'mstc-nov2024-q34',
    number: 34,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Probability & Statistics - Sampling Without Replacement',
    text: 'A new medicine was given to a sample of 25 of Dr. Cleary\'s patients with flu symptoms. Of the total, 19 patients reacted favorably, 2 reacted unfavorably, and 4 were unaffected. Three of these patients are selected at random. Determine the probability of all three reacted favorably.',
    options: [
      { label: 'A', text: '19/725' },
      { label: 'B', text: '969/2300' },
      { label: 'C', text: '114/115' },
      { label: 'D', text: '1/115' },
    ],
    ...solved(34, 'B', '969/2300 (Option B)'),
  },

  // Item 35
  {
    id: 'mstc-nov2024-q35',
    number: 35,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Probability & Statistics - Conditional / Prior Probability',
    text: 'Certain birth defects and syndromes are polygenetic in nature. Typically, the chance that an offspring will be born with a polygenetic affliction is small. However, once an offspring is born with the affliction, the probability that future offspring of the same parents will be born with the same affliction increases. Let\'s assume that the probability of a child being born with affliction A is 0.001. If a child is born with this affliction, the probability of a future child being born with the same affliction becomes 0.04. A couple plans to have one child. Determine the probability that the child will be born with this affliction.',
    options: [
      { label: 'A', text: '0.04' },
      { label: 'B', text: '0.001' },
      { label: 'C', text: '0.96' },
      { label: 'D', text: '0.999' },
    ],
    ...solved(35, 'B', '0.001 (Option B)'),
  },

  // Item 36
  {
    id: 'mstc-nov2024-q36',
    number: 36,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Probability & Set Theory - Venn Diagram Stock Categorization',
    text: 'Many local newspapers list "stocks of local interest." Suppose that on a certain day, a prospective investor categorized 23 stocks according to whether:\n• their closing price on the previous day was less than $50/share (set C)\n• their price-to-earnings ratio was less than 20 (set P)\n• their dividend per share was at least $1.50 (set D)\nOf these 23 stocks:\n16 belonged to set P; 12 belonged to set C; 8 belonged to set D;\n3 belonged to both C and D; 10 belonged to both C and P; 7 belonged to both D and P; 2 belonged to all three sets\nWhich of the following Venn diagrams fits the data perfectly?',
    figureCaption: 'Figure 36: Venn diagrams for Stock categorization (Sets C, P, D)',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_36.png" 
        alt="Figure 36: Venn diagrams for Stock categorization" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: 'Diagram a' },
      { label: 'B', text: 'Diagram b' },
      { label: 'C', text: 'Diagram c' },
      { label: 'D', text: 'Diagram d' },
    ],
    ...solved(36, 'D', 'Diagram d (Option D)'),
  },
];
