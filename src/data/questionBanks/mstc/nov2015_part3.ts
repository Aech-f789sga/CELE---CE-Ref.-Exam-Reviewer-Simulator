import { Question } from '../../../types/exam';

export const MSTC_NOV2015_PART3: Question[] = [
  // Item 31
  {
    id: 'mstc-nov2015-q31',
    number: 31,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Circles',
    text: 'Triangle ABC is inscribed in a circle. The measure of angle B is 80° and angle C is 42°. If point P is the midpoint of arc AB, what is the angle PAC.',
    options: [
      { label: 'A', text: '79°' },
      { label: 'B', text: '75°' },
      { label: 'C', text: '90°' },
      { label: 'D', text: '83°' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Angle A is 58°; P bisects arc AB, so angle PAB equals half the arc AB and angle PAC adds angle A.',
      formulas: [
        '\\alpha = 180^\\circ - 80^\\circ - 42^\\circ = 58^\\circ',
        '\\angle PAB = \\frac{\\theta}{2} = \\frac{42^\\circ}{2} = 21^\\circ',
        '\\angle PAC = 21^\\circ + 58^\\circ = 79^\\circ',
      ],
      steps: [
        'Step 1: The remaining angle A is $180° - 80° - 42° = 58°$.',
        'Step 2: Since P is the midpoint of arc AB, $\\angle PAB = \\theta/2 = 21°$.',
        'Step 3: $\\angle PAC = 21° + 58° = 79°$.',
      ],
      finalAnswer: '79° (Option A)',
    },
  },

  // Item 32
  {
    id: 'mstc-nov2015-q32',
    number: 32,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Tangent Circles',
    text: 'Points A, B, and P are on a periphery of a circle. TA and TB are tangents of the circle with A and B as points of tangency. The angle of intersection formed by TA and TB is 52°. Find the angle BPA.',
    options: [
      { label: 'A', text: '60°' },
      { label: 'B', text: '64°' },
      { label: 'C', text: '38°' },
      { label: 'D', text: '128°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The angle between the tangents is supplementary to the central angle, and the inscribed angle is half the intercepted arc.',
      formulas: [
        '\\angle APB = \\frac{1}{2}(180^\\circ - 52^\\circ)',
        '= \\frac{128^\\circ}{2} = 64^\\circ',
      ],
      steps: [
        'Step 1: The angle between the two tangents is $52°$, so the intercepted arc AB is $128°$.',
        'Step 2: The inscribed angle BPA is half that arc.',
        'Step 3: $\\angle BPA = 64°$.',
      ],
      finalAnswer: '64° (Option B)',
    },
  },

  // Item 33
  {
    id: 'mstc-nov2015-q33',
    number: 33,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Triangles',
    text: 'Given triangle ABC, point E is along side AC and point D is along the side BC. Line BE and AD are the angle bisectors of angle B and A respectively. If the angle BEC = 75° and angle ADC = 84°, find angle ACB.',
    options: [
      { label: 'A', text: '74°' },
      { label: 'B', text: '64°' },
      { label: 'C', text: '86°' },
      { label: 'D', text: '59°' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Express the bisected angles in terms of α and β, then use the two given exterior-type angles.',
      formulas: [
        '\\theta = 180^\\circ - 75^\\circ = 105^\\circ,\\quad \\phi = 180^\\circ - 84^\\circ = 96^\\circ',
        '\\alpha + 2(75^\\circ - 2\\alpha) + 96^\\circ = 180^\\circ \\Rightarrow \\alpha = 22^\\circ',
        '\\angle ACB = 180^\\circ - 2\\alpha - 2\\beta = 180^\\circ - 44^\\circ - 62^\\circ = 74^\\circ',
      ],
      steps: [
        'Step 1: From $\\angle BEC = 75°$ and $\\angle ADC = 84°$, set $\\theta = 105°$ and $\\phi = 96°$.',
        'Step 2: In triangle ABE, $\\alpha + 2\\beta + \\phi = 180°$ with $\\beta = 75° - 2\\alpha$, giving $\\alpha = 22°$.',
        'Step 3: Then $\\beta = 31°$ and $\\angle ACB = 180° - 2(22°) - 2(31°) = 74°$.',
      ],
      finalAnswer: '74° (Option A)',
    },
  },

  // Item 34
  {
    id: 'mstc-nov2015-q34',
    number: 34,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Trigonometry - Medians',
    text: 'In triangle ABC, c = 150 cm, angle C = 70°, and angle A = 45°. Determine the length of the median drawn from the vertex A to the side "a".',
    options: [
      { label: 'A', text: '136.12 cm' },
      { label: 'B', text: '132.54 cm' },
      { label: 'C', text: '141.25 cm' },
      { label: 'D', text: '163.25 cm' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Find side a by the sine law, then apply the median formula from A to side a.',
      formulas: [
        'B = 180^\\circ - 70^\\circ - 45^\\circ = 65^\\circ',
        'a = \\frac{c\\sin A}{\\sin C} = \\frac{150\\sin 45^\\circ}{\\sin 70^\\circ} = 112.873',
        'm_a^2 = c^2 + \\left(\\frac{a}{2}\\right)^2 - 2c\\left(\\frac{a}{2}\\right)\\cos B = 136.12^2',
      ],
      steps: [
        'Step 1: The third angle is $B = 65°$.',
        'Step 2: $a = 150\\sin 45°/\\sin 70° = 112.873$ cm.',
        'Step 3: $m_a^2 = 150^2 + 56.436^2 - 2(150)(56.436)\\cos 65°$.',
        'Step 4: $m_a = 136.12$ cm.',
      ],
      finalAnswer: '136.12 cm (Option A)',
    },
  },

  // Item 35
  {
    id: 'mstc-nov2015-q35',
    number: 35,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Tangent Circles',
    text: 'A circle of radius 6 cm is inscribed in a square. A smaller circle is drawn tangent to the two sides of the square and the bigger circle. What is the radius of the smaller circle?',
    options: [
      { label: 'A', text: '0.956 cm' },
      { label: 'B', text: '1.029 cm' },
      { label: 'C', text: '1.125 cm' },
      { label: 'D', text: '0.856 cm' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The centres and the tangency point form a right triangle: (R + r)² = 2(R − r)².',
      formulas: [
        '(R + r)^2 = (R - r)^2 + (R - r)^2',
        'r = (3 - 2\\sqrt{2})R',
        'r = (3 - 2\\sqrt{2})(6) = 1.029\\ \\text{cm}',
      ],
      steps: [
        'Step 1: The centre of the small circle is (R − r) from each side, so its distance to the centre of the big circle is $\\sqrt{2}(R - r)$.',
        'Step 2: Tangency gives $(R + r)^2 = 2(R - r)^2$.',
        'Step 3: Solving, $r = (3 - 2\\sqrt{2})R = 1.029$ cm.',
      ],
      finalAnswer: '1.029 cm (Option B)',
    },
  },

  // Item 36
  {
    id: 'mstc-nov2015-q36',
    number: 36,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Triangle Inequality',
    text: 'Find the area of the triangle with sides 5, 6, and 13.',
    options: [
      { label: 'A', text: '3.56' },
      { label: 'B', text: '5.25' },
      { label: 'C', text: '1.89' },
      { label: 'D', text: 'no solution' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The triangle inequality fails, so no triangle with these sides exists.',
      formulas: [
        '5 + 6 = 11 < 13',
      ],
      steps: [
        'Step 1: A triangle requires the sum of any two sides to exceed the third.',
        'Step 2: $5 + 6 = 11 < 13$, so the sides cannot form a triangle.',
        'Step 3: There is no solution.',
      ],
      finalAnswer: 'No solution (Option D)',
    },
  },

  // Item 37
  {
    id: 'mstc-nov2015-q37',
    number: 37,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Squares',
    text: 'Given a square ABCD. A point Q inside the square is drawn such that triangle QAB is an equilateral triangle. Find the angle between sides DC and QC.',
    options: [
      { label: 'A', text: '25°' },
      { label: 'B', text: '15°' },
      { label: 'C', text: '20°' },
      { label: 'D', text: '108°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Triangle QAB equilateral makes angle QBA = 60°, so angle QBC = 30° and triangle QBC is isosceles with QB = BC.',
      formulas: [
        '\\angle QBC = 90^\\circ - 60^\\circ = 30^\\circ',
        '\\angle BCQ = \\frac{180^\\circ - 30^\\circ}{2} = 75^\\circ',
        '\\angle DCQ = 90^\\circ - 75^\\circ = 15^\\circ',
      ],
      steps: [
        'Step 1: Since QAB is equilateral, $\\angle QBA = 60°$, hence $\\angle QBC = 30°$.',
        'Step 2: $QB = AB = BC$, so triangle QBC is isosceles and $\\angle BCQ = 75°$.',
        'Step 3: $\\angle DCQ = 90° - 75° = 15°$.',
      ],
      finalAnswer: '15° (Option B)',
    },
  },

  // Item 38
  {
    id: 'mstc-nov2015-q38',
    number: 38,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Excircle',
    text: 'The sides of a triangle ABC are a = 38 cm, b = 22 cm, and c = 32 cm. Calculate the radius of the circle tangent to side b and escribed about the given triangle.',
    options: [
      { label: 'A', text: '25.12 cm' },
      { label: 'B', text: '43.96 cm' },
      { label: 'C', text: '18.95 cm' },
      { label: 'D', text: '14.65 cm' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Use Heron for the area, then the exradius r_b = A/(s − b).',
      formulas: [
        's = \\frac{38 + 22 + 32}{2} = 46',
        'A = \\sqrt{46(8)(24)(14)} = 351.636\\ \\text{cm}^2',
        'r_b = \\frac{A}{s - b} = \\frac{351.636}{46 - 22} = 14.65\\ \\text{cm}',
      ],
      steps: [
        'Step 1: The semi-perimeter is 46 cm.',
        'Step 2: Heron\'s formula gives $A = 351.636$ cm².',
        'Step 3: $r_b = 351.636/(46 - 22) = 14.65$ cm.',
      ],
      finalAnswer: '14.65 cm (Option D)',
    },
  },

  // Item 39
  {
    id: 'mstc-nov2015-q39',
    number: 39,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Tangent-Secant',
    text: 'A, B and C are 3 points on circle. OA is a tangent at A and OBC is a straight line. If BC = 32 and OA = 30, find the value of OB.',
    options: [
      { label: 'A', text: '20' },
      { label: 'B', text: '22' },
      { label: 'C', text: '16' },
      { label: 'D', text: '18' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'By the tangent-secant theorem, OA² = OB·OC with OC = OB + BC.',
      formulas: [
        'OA^2 = OB \\cdot OC',
        '30^2 = b(b + 32) \\Rightarrow b^2 + 32b - 900 = 0',
        'b = 18',
      ],
      steps: [
        'Step 1: Let $OB = b$; then $OC = b + 32$.',
        'Step 2: $900 = b(b + 32)$ gives $b^2 + 32b - 900 = 0$.',
        'Step 3: The positive root is $b = 18$.',
      ],
      finalAnswer: 'OB = 18 (Option D)',
    },
  },

  // Item 40
  {
    id: 'mstc-nov2015-q40',
    number: 40,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Right Triangle',
    text: 'A triangle is inscribed in a circle of radius 10 cm. One side of the triangle is 20 cm long and its area is 96 square centimeters. What is the perimeter of the triangle?',
    options: [
      { label: 'A', text: '36 cm' },
      { label: 'B', text: '52 cm' },
      { label: 'C', text: '48 cm' },
      { label: 'D', text: '24 cm' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'A side equal to the diameter makes the triangle right-angled; combine area and Pythagoras.',
      formulas: [
        '\\tfrac{1}{2}ab = 96 \\Rightarrow a = \\frac{192}{b}',
        '20^2 = \\left(\\frac{192}{b}\\right)^2 + b^2 \\Rightarrow b = 12\\ \\text{or}\\ 16',
        'P = 12 + 16 + 20 = 48\\ \\text{cm}',
      ],
      steps: [
        'Step 1: The 20-cm side is the diameter, so the triangle is right-angled.',
        'Step 2: $\\tfrac{1}{2}ab = 96$ and $a^2 + b^2 = 400$ give $b = 12$ (or 16), $a = 16$ (or 12).',
        'Step 3: Perimeter $= 12 + 16 + 20 = 48$ cm.',
      ],
      finalAnswer: '48 cm (Option C)',
    },
  },

  // Item 41
  {
    id: 'mstc-nov2015-q41',
    number: 41,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Solid Geometry - Cone',
    text: 'The volume of a cone varies jointly as its height and the square of its radius. If the volume of a cone is 75π cubic cm when the radius is 5 cm and the length is 9 cm, find the volume of a cone when the radius is 6 cm and the height is 8 cm.',
    options: [
      { label: 'A', text: '72π' },
      { label: 'B', text: '96π' },
      { label: 'C', text: '81π' },
      { label: 'D', text: '64π' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Determine the constant of joint variation, then re-evaluate.',
      formulas: [
        'V = k h r^2,\\quad 75\\pi = k(9)(25) \\Rightarrow k = \\frac{\\pi}{3}',
        'V = \\frac{\\pi}{3}(8)(36) = 96\\pi',
      ],
      steps: [
        'Step 1: $75\\pi = k(9)(25)$, so $k = \\pi/3$.',
        'Step 2: $V = (\\pi/3)(8)(6^2)$.',
        'Step 3: $V = 96\\pi$ cm³.',
      ],
      finalAnswer: '96π (Option B)',
    },
  },

  // Item 42
  {
    id: 'mstc-nov2015-q42',
    number: 42,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Solid Geometry - Truncated Prism',
    text: 'A truncated prism has a horizontal base ABC. AB = 30 cm, BC = 40 cm and CA = 50 cm. The vertical edges through A and C are 18 cm and 27 cm long. If the volume of the prism is 14,400 cu. cm., determine the height of the vertical edge at B.',
    options: [
      { label: 'A', text: '26 cm' },
      { label: 'B', text: '24 cm' },
      { label: 'C', text: '28 cm' },
      { label: 'D', text: '27 cm' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The base is a right triangle; the volume equals base area times the mean edge height.',
      formulas: [
        'A_{base} = \\tfrac{1}{2}(30)(40) = 600\\ \\text{cm}^2',
        '14\\,400 = 600\\,h_{ave} \\Rightarrow h_{ave} = 24',
        '24 = \\frac{18 + h_B + 27}{3} \\Rightarrow h_B = 27\\ \\text{cm}',
      ],
      steps: [
        'Step 1: The 30-40-50 triangle is right-angled, area $= 600$ cm².',
        'Step 2: $V = A_{base} h_{ave}$ gives $h_{ave} = 24$ cm.',
        'Step 3: $h_{ave} = (18 + h_B + 27)/3$, so $h_B = 27$ cm.',
      ],
      finalAnswer: '27 cm (Option D)',
    },
  },

  // Item 43
  {
    id: 'mstc-nov2015-q43',
    number: 43,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Solid Geometry - Cube',
    text: 'Find the ratio of the volume of a regular hexahedron to its total surface area one of its side measures 18 cm.',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '5' },
      { label: 'D', text: '4' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'For a cube, V = a³ and A = 6a², so the ratio is a/6.',
      formulas: [
        '\\frac{V}{A} = \\frac{a^3}{6a^2} = \\frac{a}{6}',
        '= \\frac{18}{6} = 3',
      ],
      steps: [
        'Step 1: Volume $= 18^3$, total surface area $= 6(18^2)$.',
        'Step 2: The ratio simplifies to $a/6 = 3$.',
      ],
      finalAnswer: '3 (Option B)',
    },
  },

  // Item 44
  {
    id: 'mstc-nov2015-q44',
    number: 44,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Normal Form',
    text: 'The normal form of the equation of a line is $x\\cos\\beta + y\\sin\\beta - \\rho = 0$. Find $\\rho$ if the equation of the line is $x + y + 8 = 0$.',
    options: [
      { label: 'A', text: '$3\\sqrt{2}$' },
      { label: 'B', text: '$2\\sqrt{2}$' },
      { label: 'C', text: '$1\\sqrt{2}$' },
      { label: 'D', text: '$4\\sqrt{2}$' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Normalize by dividing by √(1² + 1²) = √2, then read off ρ.',
      formulas: [
        '\\frac{x + y + 8}{\\sqrt{2}} = 0 \\Rightarrow \\frac{x}{\\sqrt{2}} + \\frac{y}{\\sqrt{2}} + \\frac{8}{\\sqrt{2}} = 0',
        '\\rho = \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}',
      ],
      steps: [
        'Step 1: The normalizing factor is $\\sqrt{1^2 + 1^2} = \\sqrt{2}$.',
        'Step 2: Divide: $x/\\sqrt{2} + y/\\sqrt{2} + 8/\\sqrt{2} = 0$.',
        'Step 3: $\\rho = 8/\\sqrt{2} = 4\\sqrt{2}$.',
      ],
      finalAnswer: '$4\\sqrt{2}$ (Option D)',
    },
  },

  // Item 45
  {
    id: 'mstc-nov2015-q45',
    number: 45,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Linear Functions',
    text: 'It is given that the yearly cost of tuition and required fees for attending a public four-year college full-time can be estimated by the linear function $f(x) = 275.5x + 2860.2$ where $x$ is the number of years after 2000 and $f(x)$ is the total cost. Find the slope of this equation.',
    options: [
      { label: 'A', text: '632.8' },
      { label: 'B', text: '301.2' },
      { label: 'C', text: '275.5' },
      { label: 'D', text: '284.6' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The slope of y = mx + b is the coefficient of x.',
      formulas: [
        'f(x) = 275.5x + 2860.2 \\Rightarrow m = 275.5',
      ],
      steps: [
        'Step 1: The function is already in slope-intercept form.',
        'Step 2: The slope is the coefficient of x, 275.5.',
      ],
      finalAnswer: '275.5 (Option C)',
    },
  },
];
