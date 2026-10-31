import { Question } from '../../../types/exam';

export const MSTC_MAY2015_PART1: Question[] = [
  // Item 1
  {
    id: 'mstc-may2015-q1',
    number: 1,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Series and Summation',
    text: 'Evaluate $\\sum_{k=1}^{25}(5k-3)$.',
    options: [
      { label: 'A', text: '1550' },
      { label: 'B', text: '1450' },
      { label: 'C', text: '1660' },
      { label: 'D', text: '1360' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Split the summation into a constant multiple of the sum of the first 25 integers minus 25 times 3.',
      formulas: [
        '\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}',
        '\\sum_{k=1}^{25}(5k-3) = 5\\sum_{k=1}^{25}k - 3(25)',
        '= 5\\left(\\frac{25 \\times 26}{2}\\right) - 75 = 1625 - 75 = 1550',
      ],
      steps: [
        'Step 1: The sum of the first 25 positive integers is 25(26)/2 = 325.',
        'Step 2: The term 5k contributes 5(325) = 1625.',
        'Step 3: The constant −3 is added 25 times, contributing −75.',
        'Step 4: 1625 − 75 = 1550.',
      ],
      finalAnswer: '1550 (Option A)',
    },
  },

  // Item 2
  {
    id: 'mstc-may2015-q2',
    number: 2,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Sequences',
    text: 'Find the 6th term of the sequence 1/3, 2/3, 7/3 ... $(n^2-2)/3$.',
    options: [
      { label: 'A', text: '47/3' },
      { label: 'B', text: '34/3' },
      { label: 'C', text: '43/4' },
      { label: 'D', text: '37/4' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The general term is given explicitly, so substitute n = 6.',
      formulas: [
        'a_n = \\frac{n^2-2}{3}',
        'a_6 = \\frac{6^2-2}{3} = \\frac{34}{3}',
      ],
      steps: [
        'Step 1: The pattern of the sequence is (n² − 2)/3.',
        'Step 2: For the 6th term, n = 6.',
        'Step 3: a₆ = (36 − 2)/3 = 34/3.',
      ],
      finalAnswer: '34/3 (Option B)',
    },
  },

  // Item 3
  {
    id: 'mstc-may2015-q3',
    number: 3,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Binomial Expansion',
    text: 'What is the fourth term in the expansion of $(2x-1/x)^{10}$?',
    options: [
      { label: 'A', text: '-960/x⁴' },
      { label: 'B', text: '13440' },
      { label: 'C', text: '-15360' },
      { label: 'D', text: '3360' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Use the general term of the binomial expansion with r = 3 for the fourth term.',
      formulas: [
        'T_{r+1} = \\binom{10}{r}(2x)^{10-r}\\left(-\\frac{1}{x}\\right)^{r}',
        'T_4 = \\binom{10}{3}(2x)^{7}\\left(-\\frac{1}{x}\\right)^{3}',
        '= 120\\,(128x^7)\\left(-\\frac{1}{x^3}\\right) = -15\\,360x^4',
      ],
      steps: [
        'Step 1: The fourth term corresponds to r = 3.',
        'Step 2: The binomial coefficient is C(10,3) = 120.',
        'Step 3: (2x)⁷ = 128x⁷ and (−1/x)³ = −1/x³.',
        'Step 4: 120 × 128 × (−1) = −15 360, with x⁷/x³ = x⁴.',
      ],
      finalAnswer: '-15 360x⁴ (Option C)',
    },
  },

  // Item 4
  {
    id: 'mstc-may2015-q4',
    number: 4,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Quadratic Equations',
    text: 'Find the value of the constant h in the quadratic equation $3x^2 - hx + x - 7h = 0$ if 3 is one of the roots.',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '-2' },
      { label: 'D', text: '-4' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Substitute x = 3 into the equation and solve the resulting linear equation in h.',
      formulas: [
        '3(3)^2 - h(3) + 3 - 7h = 0',
        '27 + 3 - 10h = 0 \\Rightarrow h = 3',
      ],
      steps: [
        'Step 1: Put x = 3: 27 − 3h + 3 − 7h = 0.',
        'Step 2: Combine: 30 − 10h = 0.',
        'Step 3: h = 3.',
      ],
      finalAnswer: 'h = 3 (Option B)',
    },
  },

  // Item 5
  {
    id: 'mstc-may2015-q5',
    number: 5,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Partial Fractions',
    text: 'Resolve the following into partial fraction and solve for A.\n\n$\\dfrac{3x^2+2x+1}{x^2+x-2} = \\dfrac{A}{x-1} + \\dfrac{B}{x+2}$',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '-1' },
      { label: 'C', text: '1' },
      { label: 'D', text: '3' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Clear the denominators and evaluate at x = 1 to isolate A.',
      formulas: [
        '3x^2+2x+1 = A(x+2) + B(x-1)',
        '\\text{at } x = 1: 3+2+1 = 3A \\Rightarrow A = 2',
      ],
      steps: [
        'Step 1: Factor the denominator: x² + x − 2 = (x − 1)(x + 2).',
        'Step 2: Multiply through: 3x² + 2x + 1 = A(x + 2) + B(x − 1).',
        'Step 3: Set x = 1: 6 = 3A, so A = 2.',
        'Step 4: (Check with x = −2: 12 − 4 + 1 = −3B gives B = −3.)',
      ],
      finalAnswer: 'A = 2 (Option A)',
    },
  },

  // Item 6
  {
    id: 'mstc-may2015-q6',
    number: 6,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Work Problems',
    text: 'Mr. Curry can finish a job in 6 days and Mr. Thompson can finish the same job in 12 days. How many days the job will be done if both of them will work together?',
    options: [
      { label: 'A', text: '3' },
      { label: 'B', text: '4' },
      { label: 'C', text: '5' },
      { label: 'D', text: '2' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Add the individual work rates.',
      formulas: [
        '\\frac{1}{6} + \\frac{1}{12} = \\frac{1}{t}',
        '\\frac{3}{12} = \\frac{1}{t} \\Rightarrow t = 4 \\text{ days}',
      ],
      steps: [
        'Step 1: Curry\'s rate is 1/6 job per day; Thompson\'s is 1/12 job per day.',
        'Step 2: Combined rate = 1/6 + 1/12 = 3/12 = 1/4 job per day.',
        'Step 3: The job is finished in 4 days.',
      ],
      finalAnswer: '4 days (Option B)',
    },
  },

  // Item 7
  {
    id: 'mstc-may2015-q7',
    number: 7,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Rate Problems',
    text: 'Inlet pipes A and B can fill a tank in 6 hours. If the rate of pipe A is twice that of pipe B, find the time of pipe B to fill the tank alone.',
    options: [
      { label: 'A', text: '9 hours' },
      { label: 'B', text: '12 hours' },
      { label: 'C', text: '15 hours' },
      { label: 'D', text: '18 hours' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Let t be the time of pipe B; pipe A needs t/2. Their rates add to 1/6 per hour.',
      formulas: [
        '\\frac{1}{t} + \\frac{2}{t} = \\frac{1}{6}',
        '\\frac{3}{t} = \\frac{1}{6} \\Rightarrow t = 18 \\text{ hours}',
      ],
      steps: [
        'Step 1: Rate of B = 1/t; rate of A = 2/t because A is twice as fast.',
        'Step 2: Combined rate 3/t fills the tank in 6 hours, so 3/t = 1/6.',
        'Step 3: t = 18 hours.',
      ],
      finalAnswer: '18 hours (Option D)',
    },
  },

  // Item 8
  {
    id: 'mstc-may2015-q8',
    number: 8,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Digit Problems',
    text: 'A number is expressed by 3-digits which are in arithmetic progression. If the number is divided by the sum of the digits the quotient will be 26 and if 198 be added to the number, the digits will be inverted. Determine the value of the ten\'s digit.',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '4' },
      { label: 'D', text: '5' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Write the number as 111a + 12d for digits a, a+d, a+2d and use both conditions.',
      formulas: [
        'N = 111a + 12d,\\quad S = 3a + 3d',
        'N = 26S \\Rightarrow 111a + 12d = 78a + 78d \\Rightarrow a = 2d',
        'N + 198 = 111a + 210d \\Rightarrow 198 = 198d \\Rightarrow d = 1',
      ],
      steps: [
        'Step 1: Let the digits be a, a + d and a + 2d.',
        'Step 2: N = 100a + 10(a + d) + (a + 2d) = 111a + 12d and the digit sum is 3a + 3d.',
        'Step 3: N/S = 26 gives 111a + 12d = 78(a + d), hence a = 2d.',
        'Step 4: Adding 198 inverts the digits: 111a + 12d + 198 = 111a + 210d, so d = 1 and a = 2.',
        'Step 5: The digits are 2, 3, 4; the ten\'s digit is 3.',
      ],
      finalAnswer: '3 (Option B)',
    },
  },

  // Item 9
  {
    id: 'mstc-may2015-q9',
    number: 9,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Mean',
    text: 'The average of 90 real numbers is 70. When two numbers are removed namely 28 and 68, find the new average.',
    options: [
      { label: 'A', text: '70.5' },
      { label: 'B', text: '72' },
      { label: 'C', text: '82.75' },
      { label: 'D', text: '63.5' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Subtract the two removed numbers from the total sum and divide by the remaining count.',
      formulas: [
        '\\Sigma = 90(70) = 6300',
        '\\bar{x} = \\frac{6300 - 28 - 68}{88} = \\frac{6204}{88} = 70.5',
      ],
      steps: [
        'Step 1: Original total sum = 90 × 70 = 6300.',
        'Step 2: Remove 28 and 68: 6300 − 96 = 6204.',
        'Step 3: 88 numbers remain: 6204/88 = 70.5.',
      ],
      finalAnswer: '70.5 (Option A)',
    },
  },

  // Item 10
  {
    id: 'mstc-may2015-q10',
    number: 10,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Wind and Current Problems',
    text: 'An airplane travels a distance of 500 km against the wind in one hour and 45 minutes. Traveling the same distance with the wind, the airplane consumed one hour and 15 minutes. Find the velocity of the wind.',
    options: [
      { label: 'A', text: '42.86 kph' },
      { label: 'B', text: '57.14 kph' },
      { label: 'C', text: '71.43 kph' },
      { label: 'D', text: '34.29 kph' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Ground speeds are 500/1.75 against the wind and 500/1.25 with the wind; the wind speed is half their difference.',
      formulas: [
        'v - w = \\frac{500}{1.75} = 285.71 \\text{ kph}',
        'v + w = \\frac{500}{1.25} = 400.00 \\text{ kph}',
        'w = \\frac{400.00 - 285.71}{2} = 57.14 \\text{ kph}',
      ],
      steps: [
        'Step 1: 1 h 45 min = 1.75 h, so the headwind ground speed is 285.71 kph.',
        'Step 2: 1 h 15 min = 1.25 h, so the tailwind ground speed is 400 kph.',
        'Step 3: Adding and subtracting give 2w = 114.29 kph.',
        'Step 4: w = 57.14 kph.',
      ],
      finalAnswer: '57.14 kph (Option B)',
    },
  },

  // Item 11
  {
    id: 'mstc-may2015-q11',
    number: 11,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Rate Problems',
    text: 'A tank can be filled by an inlet pipe in 6 hours and can be emptied by an outlet in 12 hours. How much time needed to fill the tank if both the inlet and outlet pipes are open.',
    options: [
      { label: 'A', text: '12 hours' },
      { label: 'B', text: '18 hours' },
      { label: 'C', text: '9 hours' },
      { label: 'D', text: '6 hours' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Net filling rate is the inlet rate minus the outlet rate.',
      formulas: [
        '\\frac{1}{6} - \\frac{1}{12} = \\frac{1}{t}',
        '\\frac{1}{12} = \\frac{1}{t} \\Rightarrow t = 12 \\text{ hours}',
      ],
      steps: [
        'Step 1: Inlet rate = 1/6 tank per hour; outlet rate = 1/12 tank per hour.',
        'Step 2: Net rate = 1/6 − 1/12 = 1/12 tank per hour.',
        'Step 3: The tank fills in 12 hours.',
      ],
      finalAnswer: '12 hours (Option A)',
    },
  },

  // Item 12
  {
    id: 'mstc-may2015-q12',
    number: 12,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Angles of Elevation',
    text: 'A flagpole and a tower stands 36 meters apart on a horizontal plane. A person standing successively at their bases observes that the angle of elevation of the top of the tower is twice that of the pole, but at a point midway between their bases the angles of elevation are complementary. Find the height of the tower.',
    options: [
      { label: 'A', text: '38 m' },
      { label: 'B', text: '45 m' },
      { label: 'C', text: '32 m' },
      { label: 'D', text: '27 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'At the midpoint the two elevations are complementary, so Hh = 18²; combined with H/36 = tan 2θ where tan θ = h/36, the tower height follows.',
      formulas: [
        '\\frac{H}{18} \\cdot \\frac{h}{18} = 1 \\Rightarrow Hh = 324',
        '\\tan\\theta = \\frac{h}{36},\\quad \\tan 2\\theta = \\frac{H}{36} = \\frac{2t}{1-t^2}',
        '9(1-t^2) = 72t^2 \\Rightarrow t = \\frac{1}{3}',
      ],
      steps: [
        'Step 1: Let H be the tower height, h the pole height and t = h/36.',
        'Step 2: From the bases, tan(elevation of tower) = H/36 = tan 2θ with tan θ = t.',
        'Step 3: At the midpoint the elevations are complementary: (H/18)(h/18) = 1, so H = 324/h = 9/t.',
        'Step 4: 9/(36t) = 2t/(1 − t²) gives 9 − 9t² = 72t², t = 1/3.',
        'Step 5: h = 12 m and H = 9/(1/3) = 27 m.',
      ],
      finalAnswer: '27 m (Option D)',
    },
  },

  // Item 13
  {
    id: 'mstc-may2015-q13',
    number: 13,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Angles of Depression',
    text: 'A 40-m high tower stands vertically on a hillside (sloping ground) which makes an angle of 18° with the horizontal. A tree also stands vertically up the hill from the tower. An observer on the top of the tower finds the angle of depression of the top of the tree to be 28° and the bottom of the tree to be 40°. Determine the height of the tree.',
    options: [
      { label: 'A', text: '12.58 m' },
      { label: 'B', text: '10.56 m' },
      { label: 'C', text: '11.35 m' },
      { label: 'D', text: '8.75 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Resolve the slope distance d to the tree base from the 40° depression, then use the 28° depression to the tree top.',
      formulas: [
        'd\\cos 18^\\circ \\tan 40^\\circ = 40 - d\\sin 18^\\circ \\Rightarrow d = 36.13 \\text{ m}',
        '40 - d\\sin 18^\\circ - h = d\\cos 18^\\circ\\tan 28^\\circ',
        'h = 28.84 - 18.27 = 10.56 \\text{ m}',
      ],
      steps: [
        'Step 1: Let d be the slope distance from the tower base to the tree base.',
        'Step 2: The tree base is d·cos18° away horizontally and d·sin18° higher.',
        'Step 3: Depression 40° to the base: (40 − d sin18°)/(d cos18°) = tan 40°, giving d = 36.13 m.',
        'Step 4: Depression 28° to the top: 40 − 11.16 − h = 34.36 tan 28° = 18.27.',
        'Step 5: h = 10.56 m.',
      ],
      finalAnswer: '10.56 m (Option B)',
    },
  },

  // Item 14
  {
    id: 'mstc-may2015-q14',
    number: 14,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Angles of Elevation',
    text: 'The top of a tower is sighted from point A and found to have an angle of elevation of 26°. When sighted at point B that is 300 m closer to the tower, the angle of elevation is 56°. Points A and B are on the same horizontal plane with the base of the tower. What is the height of the tower?',
    options: [
      { label: 'A', text: '218 m' },
      { label: 'B', text: '197 m' },
      { label: 'C', text: '175 m' },
      { label: 'D', text: '205 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Express both horizontal distances in terms of H and subtract.',
      formulas: [
        '\\frac{H}{\\tan 26^\\circ} - \\frac{H}{\\tan 56^\\circ} = 300',
        'H(2.0503 - 0.6745) = 300 \\Rightarrow H = 218.06 \\text{ m}',
      ],
      steps: [
        'Step 1: From B, the horizontal distance is H/tan 56° = 0.6745H.',
        'Step 2: From A, it is H/tan 26° = 2.0503H.',
        'Step 3: The difference is 300 m: 1.3758H = 300.',
        'Step 4: H = 218.06 m.',
      ],
      finalAnswer: '218 m (Option A)',
    },
  },

  // Item 15
  {
    id: 'mstc-may2015-q15',
    number: 15,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Circles',
    text: 'Points A, B and C are in the horizontal circular plane where AB is the diameter equal to 24 m. The top of the pole standing at point A is sighted at B and C has angles of elevation equal to 20° and 30°, respectively. Point C is along the circumference of the circle. Find the distance BC.',
    options: [
      { label: 'A', text: '15.13 m' },
      { label: 'B', text: '16.78 m' },
      { label: 'C', text: '18.63 m' },
      { label: 'D', text: '17.44 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The pole height comes from the 20° sighting at B; the 30° sighting at C then gives AC, and ABC is right-angled at C.',
      formulas: [
        'H = 24\\tan 20^\\circ = 8.735 \\text{ m}',
        'AC = \\frac{H}{\\tan 30^\\circ} = 15.13 \\text{ m}',
        'BC = \\sqrt{24^2 - 15.13^2} = 18.63 \\text{ m}',
      ],
      steps: [
        'Step 1: AB is a diameter, so ∠ACB = 90°.',
        'Step 2: From B: tan 20° = H/24, so H = 8.735 m.',
        'Step 3: From C: tan 30° = H/AC, so AC = 15.13 m.',
        'Step 4: BC = √(24² − 15.13²) = 18.63 m.',
      ],
      finalAnswer: '18.63 m (Option C)',
    },
  },
];
