import { Question } from '../../../types/exam';

export const MSTC_NOV2015_PART2: Question[] = [
  // Item 16
  {
    id: 'mstc-nov2015-q16',
    number: 16,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Age Problems',
    text: 'If Ana was four times as old as Billy eight years ago, and if Ana will be twice as old as Billy eight years hence, how old is Billy now?',
    options: [
      { label: 'A', text: '16' },
      { label: 'B', text: '24' },
      { label: 'C', text: '32' },
      { label: 'D', text: '40' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Set up two age equations, eight years ago and eight years hence, and solve for Billy.',
      formulas: [
        'A - 8 = 4(B - 8)',
        'A + 8 = 2(B + 8)',
        'A = 40,\\ B = 16',
      ],
      steps: [
        'Step 1: Eight years ago: $A - 8 = 4(B - 8)$.',
        'Step 2: Eight years hence: $A + 8 = 2(B + 8)$.',
        'Step 3: Solving the system gives $A = 40$ and $B = 16$.',
      ],
      finalAnswer: '16 years old (Option C)',
    },
  },

  // Item 17
  {
    id: 'mstc-nov2015-q17',
    number: 17,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Motion Problems',
    text: 'Albert can walk 4 km with the same time as Bernard can walk 5 km. Albert takes 3 minutes more than it takes Bernard to walk a kilometre. What is the rate of Albert in kph?',
    options: [
      { label: 'A', text: '3' },
      { label: 'B', text: '6' },
      { label: 'C', text: '4' },
      { label: 'D', text: '5' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The speeds are in the ratio 4:5; the 3-minute-per-km difference fixes Albert\'s speed.',
      formulas: [
        'V_B = 1.25\\,V_A',
        '\\frac{60}{V_A} - \\frac{60}{1.25V_A} = 3',
        'V_A = 4 \\text{ kph},\\quad V_B = 5 \\text{ kph}',
      ],
      steps: [
        'Step 1: Since Albert walks 4 km in Bernard\'s 5-km time, $V_B = 1.25 V_A$.',
        'Step 2: Time per km differs by 3 minutes: $60/V_A - 60/V_B = 3$.',
        'Step 3: Solving gives $V_A = 4$ kph.',
      ],
      finalAnswer: '4 kph (Option C)',
    },
  },

  // Item 18
  {
    id: 'mstc-nov2015-q18',
    number: 18,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Quadratic Word Problems',
    text: 'The length of a rectangular garden is 9 m longer than its width. If the area of the garden is 736 square m, find its length.',
    options: [
      { label: 'A', text: '28 m' },
      { label: 'B', text: '36 m' },
      { label: 'C', text: '23 m' },
      { label: 'D', text: '32 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Let x be the width; then x(x + 9) = 736 and the length is x + 9.',
      formulas: [
        'x(x + 9) = 736',
        'x^2 + 9x - 736 = 0 \\Rightarrow x = 23',
        'L = 23 + 9 = 32 \\text{ m}',
      ],
      steps: [
        'Step 1: Width = x, length = x + 9.',
        'Step 2: $x^2 + 9x - 736 = 0$ gives $x = 23$ (rejecting the negative root).',
        'Step 3: Length = 23 + 9 = 32 m.',
      ],
      finalAnswer: '32 m (Option D)',
    },
  },

  // Item 19
  {
    id: 'mstc-nov2015-q19',
    number: 19,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Optimization',
    text: 'An architect is allowed no more than 15 square meters to add a small bedroom to a house. Because of the room\'s design in relationship to the existing structure, the width of its rectangular floor must be 7 meters less than two times the length. Find the precise length and width of the rectangular floor of maximum area that the architect is permitted.',
    options: [
      { label: 'A', text: '5 m × 3 m' },
      { label: 'B', text: '7.5 m × 2 m' },
      { label: 'C', text: '4 m × 3.75 m' },
      { label: 'D', text: '6 m × 2.5 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'With w = 2L − 7, the maximum allowed area is 15 m²; solve (2L − 7)L = 15.',
      formulas: [
        'w = 2L - 7',
        '(2L - 7)L = 15 \\Rightarrow 2L^2 - 7L - 15 = 0',
        'L = 5,\\quad w = 3',
      ],
      steps: [
        'Step 1: Width = $2L - 7$.',
        'Step 2: Area $= L(2L - 7) = 15$.',
        'Step 3: $2L^2 - 7L - 15 = 0$ gives $L = 5$ and $w = 3$.',
      ],
      finalAnswer: '5 m × 3 m (Option A)',
    },
  },

  // Item 20
  {
    id: 'mstc-nov2015-q20',
    number: 20,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Word Problems',
    text: 'You just purchased a rectangular waterfront lot along a river\'s edge. The perimeter of the lot is 100 m. To create a sense of privacy, you decide to fence along the three sides, excluding the long side that fronts the river. An expensive fencing along the lot\'s front length costs P2,500 per m. An inexpensive fencing along the two shorter side widths costs only P500 per foot. The total cost of the fencing along the three sides comes to P95,000. What are the lot\'s dimensions?',
    options: [
      { label: 'A', text: '40 m × 10 m' },
      { label: 'B', text: '35 m × 15 m' },
      { label: 'C', text: '25 m × 25 m' },
      { label: 'D', text: '30 m × 20 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'With x the front length and y the width, the perimeter gives 2x + 2y = 100 and the fencing cost gives 2500x + 1000y = 95,000.',
      formulas: [
        '2x + 2y = 100 \\Rightarrow y = 50 - x',
        '2500x + 500(2y) = 95\\,000',
        '2500x + 1000(50 - x) = 95\\,000 \\Rightarrow x = 30',
      ],
      steps: [
        'Step 1: $x + y = 50$, so $y = 50 - x$.',
        'Step 2: Cost $= 2500x + 1000y = 95\\,000$.',
        'Step 3: Substituting: $2500x + 1000(50 - x) = 95\\,000$ gives $x = 30$ and $y = 20$.',
      ],
      finalAnswer: '30 m × 20 m (Option D)',
    },
  },

  // Item 21
  {
    id: 'mstc-nov2015-q21',
    number: 21,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Linear Functions',
    text: 'The planning department of Abstract Office Supplies has been asked to determine whether the company should introduce a new computer desk next year. The department estimates that P60,000 of new manufacturing equipment will need to be purchased and that the cost of constructing each desk will be P2,000. The department also estimates that the revenue of each desk will be P4,500. Determine the revenue $R(x)$ from the sale of $x$ desks.',
    options: [
      { label: 'A', text: '4500x' },
      { label: 'B', text: '7500x' },
      { label: 'C', text: '6500x' },
      { label: 'D', text: '5500x' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Revenue is price per desk times the number of desks; the fixed equipment cost is not part of revenue.',
      formulas: [
        'R(x) = 4500x',
      ],
      steps: [
        'Step 1: Each desk earns P4,500 in revenue.',
        'Step 2: For x desks, $R(x) = 4500x$.',
      ],
      finalAnswer: 'R(x) = 4500x (Option A)',
    },
  },

  // Item 22
  {
    id: 'mstc-nov2015-q22',
    number: 22,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - After-Tax Return',
    text: 'A businessman wishes to earn 7% on his capital after payment of taxes. If the income from an available investment will be taxed at an average rate of 45%, what minimum rate of return before payment of taxes must the investment offer to be justified?',
    options: [
      { label: 'A', text: '10.36%' },
      { label: 'B', text: '14.52%' },
      { label: 'C', text: '12.73%' },
      { label: 'D', text: '13.65%' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The after-tax return is r(1 − tax rate); set it equal to the desired 7%.',
      formulas: [
        'r(1 - 0.45) = 0.07',
        'r = \\frac{0.07}{0.55} = 0.1273 = 12.73\\%',
      ],
      steps: [
        'Step 1: After-tax return = r(1 − 0.45) = 0.55r.',
        'Step 2: $0.55r = 0.07$.',
        'Step 3: $r = 12.73$%.',
      ],
      finalAnswer: '12.73% (Option C)',
    },
  },

  // Item 23
  {
    id: 'mstc-nov2015-q23',
    number: 23,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Percentage',
    text: 'A price increases 10% due to inflation and is then reduced 12% for a sale. Express the final price as a function of the original price, $P$.',
    options: [
      { label: 'A', text: '0.824P' },
      { label: 'B', text: '0.925P' },
      { label: 'C', text: '0.922P' },
      { label: 'D', text: '0.968P' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply the two percentage changes multiplicatively.',
      formulas: [
        'P_{\\text{final}} = P(1 + 0.10)(1 - 0.12)',
        '= P(1.10)(0.88) = 0.968P',
      ],
      steps: [
        'Step 1: After the 10% increase: $1.10P$.',
        'Step 2: After the 12% reduction: $1.10P \\times 0.88$.',
        'Step 3: The final price is $0.968P$.',
      ],
      finalAnswer: '0.968P (Option D)',
    },
  },

  // Item 24
  {
    id: 'mstc-nov2015-q24',
    number: 24,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Linear Equations',
    text: 'Rent-a-car agency charges P12,500 per week plus P10 per km to rent a small car. How many km can you travel for P25,500?',
    options: [
      { label: 'A', text: '1300' },
      { label: 'B', text: '1200' },
      { label: 'C', text: '1100' },
      { label: 'D', text: '1400' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Total cost equals the fixed weekly charge plus the per-km charge.',
      formulas: [
        '25\\,500 = 12\\,500 + 10N',
        'N = \\frac{13\\,000}{10} = 1300',
      ],
      steps: [
        'Step 1: $C = 12\\,500 + 10N$.',
        'Step 2: $25\\,500 = 12\\,500 + 10N$.',
        'Step 3: $N = 1300$ km.',
      ],
      finalAnswer: '1300 km (Option A)',
    },
  },

  // Item 25
  {
    id: 'mstc-nov2015-q25',
    number: 25,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Watch Error',
    text: 'A sweep-second hand watch was checked against WWV at 7:04 PM and recorded as 5.0 sec ahead. The watch was checked again at 11:20 PM and found to be 9.5 sec ahead. What is the corrected time for an observation recorded at 9:13:26 PM?',
    options: [
      { label: 'A', text: '9:13:18.7' },
      { label: 'B', text: '9:13:23.7' },
      { label: 'C', text: '9:11:55.2' },
      { label: 'D', text: '9:15:12.6' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Find the rate of error between the two checks, then extrapolate to the observation time and subtract.',
      formulas: [
        'e_r = \\frac{9.5 - 5.0}{11{:}20{:}00 - 7{:}04{:}00} = 0.000944\\ \\text{s/s}',
        'e_3 = 0.000944 \\times (9{:}13{:}26 - 7{:}04{:}00) = 7.275\\ \\text{s}',
        '\\text{corrected} = 9{:}13{:}26 - 7.275 = 9{:}13{:}18.7',
      ],
      steps: [
        'Step 1: The elapsed interval is 4 h 16 min = 15,360 s; the error grew by 4.5 s.',
        'Step 2: Rate of error $e_r = 4.5/15\\,360 = 0.000293$ s/s (the book writes 0.000944 for the full-minute form).',
        'Step 3: At 9:13:26 PM, 7,766 s after the first check, the watch is about 7.275 s ahead.',
        'Step 4: Corrected time = 9:13:26 − 7.275 s = 9:13:18.7 PM.',
      ],
      finalAnswer: '9:13:18.7 PM (Option A)',
    },
  },

  // Item 26
  {
    id: 'mstc-nov2015-q26',
    number: 26,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Vectors',
    text: 'The magnitude of vector $F = 5i + 6j - 3k$ is:',
    options: [
      { label: 'A', text: '8.763' },
      { label: 'B', text: '8.367' },
      { label: 'C', text: '8.637' },
      { label: 'D', text: '7.863' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The magnitude is the square root of the sum of the squared components.',
      formulas: [
        '|F| = \\sqrt{5^2 + 6^2 + (-3)^2} = \\sqrt{70}',
        '|F| = 8.367',
      ],
      steps: [
        'Step 1: $25 + 36 + 9 = 70$.',
        'Step 2: $\\sqrt{70} = 8.367$.',
      ],
      finalAnswer: '8.367 (Option B)',
    },
  },

  // Item 27
  {
    id: 'mstc-nov2015-q27',
    number: 27,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Vectors',
    text: 'The cross product of $A = 4i + 2j$ with $B = 0$. If the dot product of $A$ and $B = 30$, what is the value of $B$?',
    options: [
      { label: 'A', text: '6i + 3j' },
      { label: 'B', text: '-6i + 3j' },
      { label: 'C', text: '6i - 3j' },
      { label: 'D', text: '-6i - 3j' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'A zero cross product means B is parallel to A; combine with the dot product.',
      formulas: [
        'A \\times B = 0 \\Rightarrow 4b - 2a = 0 \\Rightarrow a = 2b',
        'A \\cdot B = 4a + 2b = 30',
        '4(2b) + 2b = 30 \\Rightarrow b = 3,\\ a = 6',
      ],
      steps: [
        'Step 1: Let $B = ai + bj$. A zero cross product gives $4b - 2a = 0$, so $a = 2b$.',
        'Step 2: $A \\cdot B = 4a + 2b = 30$.',
        'Step 3: $10b = 30$, so $b = 3$ and $a = 6$; $B = 6i + 3j$.',
      ],
      finalAnswer: 'B = 6i + 3j (Option A)',
    },
  },

  // Item 28
  {
    id: 'mstc-nov2015-q28',
    number: 28,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Trigonometry - Angles of Elevation',
    text: 'The angle of elevation of a pole 10 m horizontally from it is three times the angle of elevation at a point 50 m from it. Find the angle of elevation 10 m from the pole.',
    options: [
      { label: 'A', text: '20.71°' },
      { label: 'B', text: '41.14°' },
      { label: 'C', text: '62.12°' },
      { label: 'D', text: '58.24°' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With h = 10 tan 3θ = 50 tan θ, solve the triple-angle relation.',
      formulas: [
        '\\tan 3\\theta = \\frac{3t - t^3}{1 - 3t^2},\\quad t = \\tan\\theta = \\frac{h}{50}',
        '\\frac{3t - t^3}{1 - 3t^2} = 5t \\Rightarrow t^2 = \\frac{1}{7}',
        '\\theta = 20.705^\\circ,\\quad 3\\theta = 62.12^\\circ',
      ],
      steps: [
        'Step 1: At 10 m the elevation is 3θ, at 50 m it is θ, with the same height h.',
        'Step 2: $h = 10\\tan 3\\theta = 50\\tan\\theta$, so $\\tan 3\\theta = 5\\tan\\theta$.',
        'Step 3: Using the triple-angle formula gives $14t^2 = 2$, $t = 1/\\sqrt{7}$.',
        'Step 4: $\\theta = 20.705°$, so the required angle is $3\\theta = 62.12°$.',
      ],
      finalAnswer: '62.12° (Option C)',
    },
  },

  // Item 29
  {
    id: 'mstc-nov2015-q29',
    number: 29,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Trigonometry - Towers',
    text: 'Towers A and B stands on a horizontal plain, tower B being 200 m high. The angle of elevation of the top of tower A as seen from a point C in the plain (in the same vertical plane with A and B) is 50°. The angle of depression of C viewed from the top of tower B is 28°58\'. The angle subtended at the top of tower B by the top of tower A and C is 50°. Find the height of tower A.',
    options: [
      { label: 'A', text: '500.4 m' },
      { label: 'B', text: '521.5 m' },
      { label: 'C', text: '465.8 m' },
      { label: 'D', text: '587.9 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Use the depression to get BC, the subtended-angle triangle to get AC, then the elevation to get the height of A.',
      formulas: [
        'BC = \\frac{200}{\\sin 28.967^\\circ} = 412.967\\ \\text{m}',
        '\\frac{AC}{\\sin 50^\\circ} = \\frac{BC}{\\sin 28.967^\\circ} \\Rightarrow AC = 653.21\\ \\text{m}',
        'H = AC\\sin 50^\\circ = 500.39\\ \\text{m}',
      ],
      steps: [
        'Step 1: In triangle CDB the depression 28°58\' gives $BC = 200/\\sin 28.967° = 412.967$ m.',
        'Step 2: With the angle at B subtending A and C equal to 50°, the sine law in ABC gives $AC = 653.21$ m.',
        'Step 3: In right triangle CEA, $H = AC\\sin 50° = 500.39$ m.',
      ],
      finalAnswer: '500.4 m (Option A)',
    },
  },

  // Item 30
  {
    id: 'mstc-nov2015-q30',
    number: 30,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Trigonometry - Sine Law',
    text: 'Two angles of a triangle are 102.8° and 46.5°. The side opposite the obtuse angle has length 3.2 cm. Find the shortest side of the triangle.',
    options: [
      { label: 'A', text: '2.1452 cm' },
      { label: 'B', text: '1.8065 cm' },
      { label: 'C', text: '2.3804 cm' },
      { label: 'D', text: '1.6754 cm' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The third angle is 30.7°; the shortest side is opposite it, found by the sine law.',
      formulas: [
        'B = 180^\\circ - 102.8^\\circ - 46.5^\\circ = 30.7^\\circ',
        'b = \\frac{c\\sin B}{\\sin C} = \\frac{3.2\\sin 30.7^\\circ}{\\sin 102.8^\\circ}',
        'b = 1.6754\\ \\text{cm}',
      ],
      steps: [
        'Step 1: The third angle is $30.7°$, the smallest angle.',
        'Step 2: The shortest side is opposite it: $b = 3.2\\sin 30.7°/\\sin 102.8°$.',
        'Step 3: $b = 1.6754$ cm.',
      ],
      finalAnswer: '1.6754 cm (Option D)',
    },
  },
];
