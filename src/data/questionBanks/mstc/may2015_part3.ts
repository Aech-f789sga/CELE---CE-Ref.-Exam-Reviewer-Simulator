import { Question } from '../../../types/exam';

export const MSTC_MAY2015_PART3: Question[] = [
  // Item 31
  {
    id: 'mstc-may2015-q31',
    number: 31,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Cones',
    text: 'A cone was formed by rolling a thin sheet of metal in the form of a sector of a circle 75 cm in diameter with a central angle of 30°. Find the radius of the cone in mm.',
    options: [
      { label: 'A', text: '56.35' },
      { label: 'B', text: '18.75' },
      { label: 'C', text: '31.25' },
      { label: 'D', text: '42.52' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The arc of the sector becomes the circumference of the cone base.',
      formulas: [
        's = R\\theta = 37.5\\left(\\frac{\\pi}{6}\\right) = 19.635 \\text{ cm}',
        '2\\pi r = 19.635 \\Rightarrow r = 3.125 \\text{ cm} = 31.25 \\text{ mm}',
      ],
      steps: [
        'Step 1: The sector radius is R = 75/2 = 37.5 cm and θ = 30° = π/6.',
        'Step 2: Arc length = Rθ = 19.635 cm.',
        'Step 3: This arc wraps the base: 2πr = 19.635, so r = 3.125 cm.',
        'Step 4: r = 31.25 mm.',
      ],
      finalAnswer: '31.25 mm (Option C)',
    },
  },

  // Item 32
  {
    id: 'mstc-may2015-q32',
    number: 32,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Cylinders',
    text: 'Determine the base diameter of an open top right circular cylinder if its total surface area is 49.48 square feet and its height is 1.5 times its base diameter.',
    options: [
      { label: 'A', text: '48 in' },
      { label: 'B', text: '36 in' },
      { label: 'C', text: '42 in' },
      { label: 'D', text: '30 in' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'With h = 3r the open-top area reduces to 7πr².',
      formulas: [
        'A = \\pi r^2 + 2\\pi r h = \\pi r^2 + 2\\pi r(3r) = 7\\pi r^2',
        '7\\pi r^2 = 49.48 \\Rightarrow r = 1.5 \\text{ ft}',
        'D = 3 \\text{ ft} = 36 \\text{ in}',
      ],
      steps: [
        'Step 1: h = 1.5D = 3r.',
        'Step 2: Open-top area = πr² + 2πrh = 7πr².',
        'Step 3: 7πr² = 49.48 gives r² = 2.25 and r = 1.5 ft.',
        'Step 4: D = 3 ft = 36 in.',
      ],
      finalAnswer: '36 in (Option B)',
    },
  },

  // Item 33
  {
    id: 'mstc-may2015-q33',
    number: 33,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Spherical Frustum',
    text: 'A frustum of a sphere has base diameters of 20 cm and 12 cm and thickness of 3.6 cm. What is the volume of the frustum?',
    options: [
      { label: 'A', text: '744.6 cu. cm.' },
      { label: 'B', text: '793.5 cu. cm.' },
      { label: 'C', text: '752.9 cu. cm.' },
      { label: 'D', text: '789.5 cu. cm.' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Volume of a spherical frustum of thickness h and base radii a, b.',
      formulas: [
        'V = \\frac{\\pi h}{6}\\left(3a^2 + 3b^2 + h^2\\right)',
        'V = \\frac{\\pi(3.6)}{6}\\left(3(100) + 3(36) + 12.96\\right)',
        'V = 1.885(420.96) = 793.5 \\text{ cm}^3',
      ],
      steps: [
        'Step 1: a = 10 cm and b = 6 cm.',
        'Step 2: 3a² + 3b² + h² = 300 + 108 + 12.96 = 420.96.',
        'Step 3: V = (π × 3.6/6)(420.96) = 1.8850(420.96).',
        'Step 4: V = 793.5 cm³.',
      ],
      finalAnswer: '793.5 cm³ (Option B)',
    },
  },

  // Item 34
  {
    id: 'mstc-may2015-q34',
    number: 34,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Spherical Pyramid',
    text: 'Find the volume of a spherical pyramid having a spherical excess of 28° and a radius of 9.2 cm.',
    options: [
      { label: 'A', text: '141.46 cm³' },
      { label: 'B', text: '380.54 cm³' },
      { label: 'C', text: '126.85 cm³' },
      { label: 'D', text: '248.28 cm³' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The volume is one third of the spherical excess (in radians) times the cube of the radius.',
      formulas: [
        'V = \\frac{E}{3}r^3,\\quad E = 28^\\circ = 0.48869 \\text{ rad}',
        'V = \\frac{0.48869}{3}(9.2)^3 = 126.85 \\text{ cm}^3',
      ],
      steps: [
        'Step 1: Convert the excess: 28° × π/180 = 0.48869 rad.',
        'Step 2: r³ = 778.688 cm³.',
        'Step 3: V = (0.48869/3)(778.688) = 126.85 cm³.',
      ],
      finalAnswer: '126.85 cm³ (Option C)',
    },
  },

  // Item 35
  {
    id: 'mstc-may2015-q35',
    number: 35,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Complex Numbers - Polar Form',
    text: 'The exponential form of the complex number 5 + 12i is in the form $re^{ix}$. Determine the value of x.',
    options: [
      { label: 'A', text: '2.521' },
      { label: 'B', text: '1.176' },
      { label: 'C', text: '0.098' },
      { label: 'D', text: '1.683' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The angle is the arctangent of the imaginary over the real part.',
      formulas: [
        'x = \\arctan\\frac{12}{5}',
        'x = 1.176 \\text{ rad}',
      ],
      steps: [
        'Step 1: For 5 + 12i, tan x = 12/5 = 2.4.',
        'Step 2: x = arctan 2.4 = 67.38°.',
        'Step 3: In radians, x = 1.176.',
      ],
      finalAnswer: 'x = 1.176 rad (Option B)',
    },
  },

  // Item 36
  {
    id: 'mstc-may2015-q36',
    number: 36,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Complex Numbers - Operations',
    text: 'From the given equation $(x+yi)(1-2i)=7-4i$, find the value of $x+y$.',
    options: [
      { label: 'A', text: '-1' },
      { label: 'B', text: '3' },
      { label: 'C', text: '2' },
      { label: 'D', text: '5' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Expand and equate the real and imaginary parts.',
      formulas: [
        '(x+yi)(1-2i) = (x+2y) + (y-2x)i',
        'x + 2y = 7,\\quad y - 2x = -4',
        'x = 3,\\ y = 2 \\Rightarrow x + y = 5',
      ],
      steps: [
        'Step 1: Expand: x − 2xi + yi − 2yi² = (x + 2y) + (y − 2x)i.',
        'Step 2: Real part: x + 2y = 7. Imaginary part: y − 2x = −4.',
        'Step 3: From the second, y = 2x − 4; substituting gives 5x = 15, x = 3 and y = 2.',
        'Step 4: x + y = 5.',
      ],
      finalAnswer: '5 (Option D)',
    },
  },

  // Item 37
  {
    id: 'mstc-may2015-q37',
    number: 37,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Complex Numbers - Roots',
    text: 'Which of the following is equivalent to $\\sqrt{i}$?',
    options: [
      { label: 'A', text: '(1 + i)/√2' },
      { label: 'B', text: '(2 - 2i)/√2' },
      { label: 'C', text: '(1 - 2i)/√2' },
      { label: 'D', text: '(2 + i)/√2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'i has modulus 1 and argument 90°, so its square root has argument 45° and modulus 1.',
      formulas: [
        'i = 1\\angle 90^\\circ',
        '\\sqrt{i} = 1\\angle 45^\\circ = \\cos 45^\\circ + i\\sin 45^\\circ',
        '\\sqrt{i} = \\frac{1+i}{\\sqrt{2}}',
      ],
      steps: [
        'Step 1: Write i in polar form: 1∠90°.',
        'Step 2: Taking the square root halves the angle: 1∠45°.',
        'Step 3: cos45° + i sin45° = (1 + i)/√2.',
      ],
      finalAnswer: '(1 + i)/√2 (Option A)',
    },
  },

  // Item 38
  {
    id: 'mstc-may2015-q38',
    number: 38,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Complex Numbers - Powers',
    text: 'The value of $(1+i)^6$ is equal to:',
    options: [
      { label: 'A', text: '-8i' },
      { label: 'B', text: '4i' },
      { label: 'C', text: '-12i' },
      { label: 'D', text: '6i' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Square first: (1 + i)² = 2i, then cube the result.',
      formulas: [
        '(1+i)^2 = 1 + 2i + i^2 = 2i',
        '(1+i)^6 = (2i)^3 = 8i^3',
        'i^3 = -i \\Rightarrow (1+i)^6 = -8i',
      ],
      steps: [
        'Step 1: (1 + i)² = 2i.',
        'Step 2: (1 + i)⁶ = [(1 + i)²]³ = (2i)³.',
        'Step 3: (2i)³ = 8i³ = 8(−i) = −8i.',
      ],
      finalAnswer: '-8i (Option A)',
    },
  },

  // Item 39
  {
    id: 'mstc-may2015-q39',
    number: 39,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Straight Lines',
    text: 'Find the line perpendicular to $x + 3y = 0$ that passes through the point (3, 2).',
    options: [
      { label: 'A', text: '3x + y = 11' },
      { label: 'B', text: '3x - y = 7' },
      { label: 'C', text: 'x - 3y = -3' },
      { label: 'D', text: 'x + 3y = 9' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The given line has slope −1/3, so the perpendicular slope is 3.',
      formulas: [
        'm = -\\frac{1}{3} \\Rightarrow m_\\perp = 3',
        'y - 2 = 3(x - 3)',
        '3x - y = 7',
      ],
      steps: [
        'Step 1: x + 3y = 0 gives y = −x/3, so m = −1/3.',
        'Step 2: The perpendicular slope is the negative reciprocal, m⊥ = 3.',
        'Step 3: Through (3, 2): y − 2 = 3(x − 3).',
        'Step 4: Expanding, 3x − y = 7.',
      ],
      finalAnswer: '3x - y = 7 (Option B)',
    },
  },

  // Item 40
  {
    id: 'mstc-may2015-q40',
    number: 40,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Translation of Axes',
    text: 'A straight line has an equation of $5x + 4y + 3 = 0$. Determine its new equation if the origin is translated to point (1, 2).',
    options: [
      { label: 'A', text: '4x + 5y = 11' },
      { label: 'B', text: '4x - 5y = -9' },
      { label: 'C', text: '5x - 4y = -6' },
      { label: 'D', text: '5x + 4y = 10' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Shift the coordinates by the translation point, as the booklet does: replace x with x − 1 and y with y − 2.',
      formulas: [
        '5(x-1) + 4(y-2) + 3 = 0',
        '5x - 5 + 4y - 8 + 3 = 0',
        '5x + 4y = 10',
      ],
      steps: [
        'Step 1: The origin moves to (1, 2), so the axes shift by h = 1 and k = 2.',
        'Step 2: Substitute x → x − 1 and y → y − 2 in 5x + 4y + 3 = 0.',
        'Step 3: 5x − 5 + 4y − 8 + 3 = 0.',
        'Step 4: 5x + 4y − 10 = 0, that is 5x + 4y = 10.',
      ],
      finalAnswer: '5x + 4y = 10 (Option D)',
    },
  },

  // Item 41
  {
    id: 'mstc-may2015-q41',
    number: 41,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Tangent Circles',
    text: 'Find the equation of the line that is tangent to the point of contact of the circles $x^2+y^2+2x-4y-20=0$ and $x^2+y^2-10x+5y+25=0$.',
    options: [
      { label: 'A', text: '3x - 4y + 7 = 0' },
      { label: 'B', text: '4x - 3y - 15 = 0' },
      { label: 'C', text: '4x + 3y + 21 = 0' },
      { label: 'D', text: '3x + 4y - 18 = 0' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The circles are externally tangent; the point of contact divides the centre line in the ratio of the radii, and the tangent is perpendicular to it.',
      formulas: [
        'C_1(-1,2),\\ r_1 = 5;\\quad C_2(5,-2.5),\\ r_2 = 2.5',
        'P = \\frac{r_2C_1 + r_1C_2}{r_1+r_2} = (3,-1)',
        'm_{C_1C_2} = -\\frac{3}{4} \\Rightarrow m_t = \\frac{4}{3}',
        'y+1 = \\frac{4}{3}(x-3) \\Rightarrow 4x-3y-15 = 0',
      ],
      steps: [
        'Step 1: Centres (−1, 2) and (5, −2.5) with radii 5 and 2.5; the distance 7.5 equals the sum, so they touch externally.',
        'Step 2: The point of contact is (3, −1).',
        'Step 3: The centre line has slope −0.75, so the tangent has slope 4/3.',
        'Step 4: y + 1 = (4/3)(x − 3) simplifies to 4x − 3y − 15 = 0.',
      ],
      finalAnswer: '4x - 3y - 15 = 0 (Option B)',
    },
  },

  // Item 42
  {
    id: 'mstc-may2015-q42',
    number: 42,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Locus',
    text: 'Given a circle of radius 4 and center at (6, 8). Find the locus of the center of all circles that is tangent to the x-axis and the given circle.',
    options: [
      { label: 'A', text: 'x² - 12x - 24y + 84 = 0' },
      { label: 'B', text: 'x² + 12x + 24y - 156 = 0' },
      { label: 'C', text: 'x² + 12x - 24y - 60 = 0' },
      { label: 'D', text: 'x² - 12x + 24y - 12 = 0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equate the distance between centres to the sum of the radii, with the moving circle\'s radius equal to its y-coordinate.',
      formulas: [
        '\\sqrt{(x-6)^2 + (y-8)^2} = y + 4',
        '(x-6)^2 + y^2 - 16y + 64 = y^2 + 8y + 16',
        'x^2 - 12x - 24y + 84 = 0',
      ],
      steps: [
        'Step 1: A circle tangent to the x-axis with centre (x, y) has radius y.',
        'Step 2: External tangency to the given circle: distance = y + 4.',
        'Step 3: Square both sides: (x − 6)² + (y − 8)² = (y + 4)².',
        'Step 4: Expand and simplify to x² − 12x − 24y + 84 = 0.',
      ],
      finalAnswer: 'x² - 12x - 24y + 84 = 0 (Option A)',
    },
  },

  // Item 43
  {
    id: 'mstc-may2015-q43',
    number: 43,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Area Between Curves',
    text: 'Determine the area bounded by the parabola $y^2-8x+6y+17=0$ and the line $2x-y-13=0$.',
    options: [
      { label: 'A', text: '44 sq units' },
      { label: 'B', text: '52 sq units' },
      { label: 'C', text: '48 sq units' },
      { label: 'D', text: '36 sq units' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Rewrite the parabola as (y + 3)² = 8(x − 1) and integrate horizontally between the intersections.',
      formulas: [
        'x_{parabola} = \\frac{(y+3)^2}{8} + 1,\\quad x_{line} = \\frac{y+13}{2}',
        'y^2 + 2y - 35 = 0 \\Rightarrow y = 5,\\ y = -7',
        'A = \\int_{-4}^{8}\\left(\\frac{u}{2} + 4 - \\frac{u^2}{8}\\right)du = 36',
      ],
      steps: [
        'Step 1: Complete the square: (y + 3)² = 8(x − 1).',
        'Step 2: Equate with the line to get y² + 2y − 35 = 0, so y = 5 and y = −7.',
        'Step 3: With u = y + 3, integrate (u/2 + 4 − u²/8) from u = −4 to 8.',
        'Step 4: The antiderivative gives 26.667 − (−9.333) = 36 sq units.',
      ],
      finalAnswer: '36 sq units (Option D)',
    },
  },

  // Item 44
  {
    id: 'mstc-may2015-q44',
    number: 44,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Ellipse',
    text: 'The cross section of a semi-elliptical trough has a top diameter of 18 inches and height of 12 inches. Determine the width of water surface of the trough if the depth of water is 8 inches.',
    options: [
      { label: 'A', text: '15.91 in' },
      { label: 'B', text: '14.35 in' },
      { label: 'C', text: '15.28 in' },
      { label: 'D', text: '16.97 in' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Model the trough with a = 9 in and b = 12 in; at 8 in depth the vertical ordinate is 4 in from the centre.',
      formulas: [
        '\\frac{x^2}{9^2} + \\frac{y^2}{12^2} = 1',
        'y = 12 - 8 = 4 \\Rightarrow x = 9\\sqrt{1 - \\frac{16}{144}} = 8.485',
        '\\text{width} = 2(8.485) = 16.97 \\text{ in}',
      ],
      steps: [
        'Step 1: Semi-axes a = 18/2 = 9 in and b = 12 in.',
        'Step 2: Water depth 8 in leaves y = 4 in above the centre.',
        'Step 3: x = 9√(1 − 16/144) = 8.485 in.',
        'Step 4: The surface width is 2x = 16.97 in.',
      ],
      finalAnswer: '16.97 in (Option D)',
    },
  },

  // Item 45
  {
    id: 'mstc-may2015-q45',
    number: 45,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Hyperbola',
    text: 'What is the angle in degrees, between an asymptote of the hyperbola $x^2-4y^2-2x-63=0$ and the x-axis?',
    options: [
      { label: 'A', text: '42.92°' },
      { label: 'B', text: '26.57°' },
      { label: 'C', text: '32.69°' },
      { label: 'D', text: '63.43°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Reduce the hyperbola to standard form; the asymptote slope is b/a.',
      formulas: [
        '(x-1)^2 - 4y^2 = 64 \\Rightarrow \\frac{(x-1)^2}{64} - \\frac{y^2}{16} = 1',
        'm = \\frac{b}{a} = \\frac{4}{8} = 0.5',
        '\\theta = \\arctan 0.5 = 26.57^\\circ',
      ],
      steps: [
        'Step 1: Complete the square: (x − 1)² − 4y² = 64.',
        'Step 2: In standard form a² = 64 and b² = 16, so a = 8 and b = 4.',
        'Step 3: The asymptotes have slope ±b/a = ±0.5.',
        'Step 4: arctan 0.5 = 26.57°.',
      ],
      finalAnswer: '26.57° (Option B)',
    },
  },
];
