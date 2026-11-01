import { Question } from '../../../types/exam';

export const MSTC_NOV2015_PART4: Question[] = [
  // Item 46
  {
    id: 'mstc-nov2015-q46',
    number: 46,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Linear Functions',
    text: 'In 2006, the median price of an existing home in the country is $222,000. In 2001 the median price of an existing home was $150,900. Let $y$ be the median price of an existing home in the year $x$, where $x = 0$ represents 2001. Write a linear equation that models the median price of an existing home in terms of year $x$.',
    options: [
      { label: 'A', text: 'y = 190,500 − 14,220x' },
      { label: 'B', text: 'y = 190,500 + 12,420x' },
      { label: 'C', text: 'y = 190,950 + 12,420x' },
      { label: 'D', text: 'y = 150,900 + 14,220x' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The points are (0, 150,900) and (5, 222,000); the slope is the yearly increase and the intercept is the 2001 price.',
      formulas: [
        'm = \\frac{222\\,000 - 150\\,900}{5 - 0} = 14\\,220',
        'b = 150\\,900',
        'y = 150\\,900 + 14\\,220x',
      ],
      steps: [
        'Step 1: 2001 is x = 0, so the first point is (0, 150,900).',
        'Step 2: 2006 is x = 5, so the second point is (5, 222,000).',
        'Step 3: Slope $= 71\\,100/5 = 14\\,220$; intercept $= 150\\,900$.',
        'Step 4: $y = 150\\,900 + 14\\,220x$.',
      ],
      finalAnswer: 'y = 150,900 + 14,220x (Option D)',
    },
  },

  // Item 47
  {
    id: 'mstc-nov2015-q47',
    number: 47,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Hyperbola',
    text: 'Find the conjugate axis of the equilateral hyperbola $xy = 9$.',
    options: [
      { label: 'A', text: '8.485' },
      { label: 'B', text: '4.243' },
      { label: 'C', text: '6.325' },
      { label: 'D', text: '10.125' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For xy = k the semi-axes are b = √(2k); the conjugate axis is 2b.',
      formulas: [
        'b = \\sqrt{2k} = \\sqrt{2(9)} = 4.243',
        '\\text{conjugate axis} = 2b = 8.485',
      ],
      steps: [
        'Step 1: For $xy = 9$, $k = 9$.',
        'Step 2: $b = \\sqrt{18} = 4.243$.',
        'Step 3: Conjugate axis $= 2(4.243) = 8.485$.',
      ],
      finalAnswer: '8.485 (Option A)',
    },
  },

  // Item 48
  {
    id: 'mstc-nov2015-q48',
    number: 48,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Conics',
    text: 'Point $P(x, y)$ moves with a distance from point $(0, 1)$ one half of its distance from the line $y = 4$. What is the eccentricity of the curve?',
    options: [
      { label: 'A', text: '0.5' },
      { label: 'B', text: '0.33' },
      { label: 'C', text: '0.67' },
      { label: 'D', text: '2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The locus is a conic whose eccentricity is the ratio of the distance to the focus over the distance to the directrix.',
      formulas: [
        '\\frac{d_1}{d_2} = \\frac{1}{2}',
        'e = \\frac{d_1}{d_2} = 0.5',
      ],
      steps: [
        'Step 1: The focus is (0, 1) and the directrix is $y = 4$.',
        'Step 2: The distance to the focus is half the distance to the directrix.',
        'Step 3: Therefore the eccentricity is $e = 1/2 = 0.5$.',
      ],
      finalAnswer: '0.5 (Option A)',
    },
  },

  // Item 49
  {
    id: 'mstc-nov2015-q49',
    number: 49,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Circles',
    text: 'Determine the length of the tangent to the circle $x^2 + y^2 - 4x - 5 = 0$ from $(4, 6)$.',
    options: [
      { label: 'A', text: '5.568' },
      { label: 'B', text: '5.632' },
      { label: 'C', text: '5.897' },
      { label: 'D', text: '6.025' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Find the centre and radius, then use T = √(d² − r²) with d the distance from the external point to the centre.',
      formulas: [
        '(x - 2)^2 + y^2 = 9 \\Rightarrow \\text{centre } (2, 0),\\ r = 3',
        'd = \\sqrt{(4 - 2)^2 + (6 - 0)^2} = \\sqrt{40}',
        'T = \\sqrt{40 - 9} = 5.568',
      ],
      steps: [
        'Step 1: Completing the square gives centre (2, 0) and radius 3.',
        'Step 2: Distance from (4, 6) to the centre is $\\sqrt{40}$.',
        'Step 3: $T = \\sqrt{40 - 9} = 5.568$.',
      ],
      finalAnswer: '5.568 (Option A)',
    },
  },

  // Item 50
  {
    id: 'mstc-nov2015-q50',
    number: 50,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Parabola',
    text: 'What is the length of the latus rectum of the curve $r = \\dfrac{2}{1 - \\sin\\theta}$?',
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '2' },
      { label: 'C', text: '0.50' },
      { label: 'D', text: '0.25' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Convert to rectangular form: the curve is x² = 4(y + 1), a parabola with 4a = 4.',
      formulas: [
        'r - r\\sin\\theta = 2 \\Rightarrow \\sqrt{x^2 + y^2} = 2 + y',
        'x^2 + y^2 = 4 + 4y + y^2 \\Rightarrow x^2 = 4(y + 1)',
        '4a = 4 \\Rightarrow \\text{latus rectum} = 4',
      ],
      steps: [
        'Step 1: Multiply through by $(1 - \\sin\\theta)$: $r - r\\sin\\theta = 2$.',
        'Step 2: Substitute $r = \\sqrt{x^2+y^2}$ and $r\\sin\\theta = y$: $\\sqrt{x^2+y^2} = 2 + y$.',
        'Step 3: Squaring gives $x^2 = 4(y + 1)$, a parabola with $4a = 4$.',
        'Step 4: The latus rectum is $4a = 4$. (The book prints ¼ on its key; that comes from a slip in reducing $x^2 = 4(y+1)$ — the correct length is 4, Option A.)',
      ],
      finalAnswer: '4 (Option A; the printed key lists ¼, a booklet defect)',
    },
  },

  // Item 51
  {
    id: 'mstc-nov2015-q51',
    number: 51,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Optimization',
    text: 'A manufacturing company has determined that the total cost of producing an item can be determined from the equation $C = 8x^2 - 192x + 1800$, where $x$ is the number of units that the company makes. How many units should the company manufacture in order to minimize the cost?',
    options: [
      { label: 'A', text: '11' },
      { label: 'B', text: '12' },
      { label: 'C', text: '10' },
      { label: 'D', text: '13' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Set dC/dx = 0 to locate the vertex of the cost parabola.',
      formulas: [
        '\\frac{dC}{dx} = 16x - 192 = 0',
        'x = 12',
      ],
      steps: [
        'Step 1: $dC/dx = 16x - 192$.',
        'Step 2: $16x - 192 = 0$ gives $x = 12$.',
        'Step 3: Since $d^2C/dx^2 = 16 > 0$, this is a minimum.',
      ],
      finalAnswer: '12 units (Option B)',
    },
  },

  // Item 52
  {
    id: 'mstc-nov2015-q52',
    number: 52,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Optimization',
    text: 'Find the maximum value (in pesos) taken by the cost function: $C(q) = 98 + 1.64q - 0.0002q^2$, $0 \\le q \\le 5000$.',
    options: [
      { label: 'A', text: 'P4,100' },
      { label: 'B', text: 'P5,200' },
      { label: 'C', text: 'P3,600' },
      { label: 'D', text: 'P3,460' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The maximum of a downward parabola occurs at q = −b/2a.',
      formulas: [
        'q = \\frac{1.64}{2(0.0002)} = 4100',
        'C(4100) = 98 + 1.64(4100) - 0.0002(4100)^2 = 3460',
      ],
      steps: [
        'Step 1: $q = 1.64/(2 \\times 0.0002) = 4100$.',
        'Step 2: $C(4100) = 98 + 6724 - 3362$.',
        'Step 3: $C = 3460$ pesos.',
      ],
      finalAnswer: 'P3,460 (Option D)',
    },
  },

  // Item 53
  {
    id: 'mstc-nov2015-q53',
    number: 53,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Optimization',
    text: 'An open top box with a square bottom and rectangular sides is to have a volume of 864 cu. inches. Find the dimensions that require the minimum amount of material. Hint: The amount of material needed for box is equal to the surface area.',
    options: [
      { label: 'A', text: '12 in × 6 in' },
      { label: 'B', text: '8 in × 13.5 in' },
      { label: 'C', text: '14 in × 4.4 in' },
      { label: 'D', text: '10 in × 8.6 in' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'With base x and height y, V = x²y = 864 and A = x² + 4xy; minimize A.',
      formulas: [
        'y = \\frac{864}{x^2}',
        'A = x^2 + \\frac{3456}{x}',
        '\\frac{dA}{dx} = 2x - \\frac{3456}{x^2} = 0 \\Rightarrow x^3 = 1728 \\Rightarrow x = 12',
      ],
      steps: [
        'Step 1: $V = x^2 y = 864$, so $y = 864/x^2$.',
        'Step 2: Surface area $A = x^2 + 4xy = x^2 + 3456/x$.',
        'Step 3: $dA/dx = 2x - 3456/x^2 = 0$ gives $x = 12$ and $y = 6$.',
      ],
      finalAnswer: '12 in × 6 in (Option A)',
    },
  },

  // Item 54
  {
    id: 'mstc-nov2015-q54',
    number: 54,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Parametric Motion',
    text: 'A particle\'s position in the $xy$-plane at any time $t$ is given by $x = 3t^2 + 2$ and $y = t^4$. Find the $x$-component of the particle\'s velocity at time $t = 4$.',
    options: [
      { label: 'A', text: '15' },
      { label: 'B', text: '24' },
      { label: 'C', text: '20' },
      { label: 'D', text: '16' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Differentiate x(t) to get the x-velocity, then substitute t = 4.',
      formulas: [
        'v_x = \\frac{dx}{dt} = 6t',
        'v_x(4) = 24',
      ],
      steps: [
        'Step 1: $x = 3t^2 + 2$, so $v_x = 6t$.',
        'Step 2: At $t = 4$, $v_x = 24$.',
      ],
      finalAnswer: '24 (Option B)',
    },
  },

  // Item 55
  {
    id: 'mstc-nov2015-q55',
    number: 55,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Related Rates',
    text: 'A cylindrical tank radius 10 feet is being filled with water at the rate of 314 cu feet per minute. How fast is the depth of the water increasing in feet per minute?',
    options: [
      { label: 'A', text: '1' },
      { label: 'B', text: '0.5' },
      { label: 'C', text: '0.25' },
      { label: 'D', text: '1.5' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'V = πr²h with r constant, so dV/dt = πr² dh/dt.',
      formulas: [
        '\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}',
        '314 = \\pi(10)^2 \\frac{dh}{dt} \\Rightarrow \\frac{dh}{dt} = 1',
      ],
      steps: [
        'Step 1: $\\pi r^2 = 100\\pi = 314.16$.',
        'Step 2: $dh/dt = 314/314.16 = 1$ ft/min.',
      ],
      finalAnswer: '1 ft/min (Option A)',
    },
  },

  // Item 56
  {
    id: 'mstc-nov2015-q56',
    number: 56,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Related Rates',
    text: 'A 3-meter long steel pipe has its upper end leaning against a vertical wall and lower end on a level ground. The lower end moves away at a constant rate of 2 cm/s. How fast is the pipe rotating when the lower end is 2 meter from the wall in rad/sec?',
    options: [
      { label: 'A', text: '0.00489' },
      { label: 'B', text: '0.00725' },
      { label: 'C', text: '0.00894' },
      { label: 'D', text: '0.00984' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With x = 3 cos θ, differentiate and substitute x = 2 m and dx/dt = 0.02 m/s.',
      formulas: [
        'x = 3\\cos\\theta \\Rightarrow \\frac{dx}{dt} = -3\\sin\\theta\\,\\frac{d\\theta}{dt}',
        '\\sin\\theta = \\frac{\\sqrt{5}}{3},\\quad \\frac{d\\theta}{dt} = -\\frac{0.02}{3\\sin\\theta}',
        '\\frac{d\\theta}{dt} = 0.00894\\ \\text{rad/s}',
      ],
      steps: [
        'Step 1: $x = 3\\cos\\theta$, so $dx/dt = -3\\sin\\theta\\,d\\theta/dt$.',
        'Step 2: At $x = 2$, $\\sin\\theta = \\sqrt{5}/3$.',
        'Step 3: $d\\theta/dt = 0.02/(3 \\times \\sqrt{5}/3) = 0.00894$ rad/s.',
      ],
      finalAnswer: '0.00894 rad/s (Option C)',
    },
  },

  // Item 57
  {
    id: 'mstc-nov2015-q57',
    number: 57,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Related Rates',
    text: 'A man drives at a rate of 25 kph towards the foot of an 8-m-tall monument. At what rate is he approaching the top when he is 42 m from the foot of the monument?',
    options: [
      { label: 'A', text: '6.82 kph' },
      { label: 'B', text: '21.45 kph' },
      { label: 'C', text: '24.56 kph' },
      { label: 'D', text: '31.58 kph' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Let s be the distance to the top; s² = x² + 64 and ds/dt = (x/s)(dx/dt).',
      formulas: [
        's = \\sqrt{x^2 + 8^2},\\quad \\frac{ds}{dt} = \\frac{x}{s}\\frac{dx}{dt}',
        '\\frac{ds}{dt} = \\frac{42}{\\sqrt{42^2 + 64}}(-25) = -24.56\\ \\text{kph}',
      ],
      steps: [
        'Step 1: $s^2 = x^2 + 64$ with $x = 42$ and $dx/dt = -25$ kph.',
        'Step 2: $s = \\sqrt{1828} = 42.755$ m.',
        'Step 3: $ds/dt = (42/42.755)(-25) = -24.56$ kph, i.e. approaching at 24.56 kph.',
      ],
      finalAnswer: '24.56 kph (Option C)',
    },
  },

  // Item 58
  {
    id: 'mstc-nov2015-q58',
    number: 58,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Integration',
    text: 'It is known that $f(x) = 4$ when $x = 2$. What is the value of $f(x)$ when $x = 0$.\n\n$f(x) = \\int (3x^3 - 7x)\\,dx$',
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '5' },
      { label: 'C', text: '6' },
      { label: 'D', text: '7' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Integrate, apply f(2) = 4 to find the constant, then evaluate at x = 0.',
      formulas: [
        'f(x) = \\frac{3x^4}{4} - \\frac{7x^2}{2} + C',
        'f(2) = \\frac{3(16)}{4} - \\frac{7(4)}{2} + C = 12 - 14 + C = 4 \\Rightarrow C = 6',
        'f(0) = C = 6',
      ],
      steps: [
        'Step 1: $f(x) = 3x^4/4 - 7x^2/2 + C$.',
        'Step 2: $f(2) = 12 - 14 + C = 4$, so $C = 6$.',
        'Step 3: $f(0) = C = 6$.',
      ],
      finalAnswer: '6 (Option C)',
    },
  },

  // Item 59
  {
    id: 'mstc-nov2015-q59',
    number: 59,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Counting',
    text: 'To setup a sound system, a man has to purchase three different components. There are 9 different CD players, 10 different speakers, and 4 different amplifiers. If he will purchase one of each component, how many different sound systems are possible?',
    options: [
      { label: 'A', text: '480' },
      { label: 'B', text: '360' },
      { label: 'C', text: '540' },
      { label: 'D', text: '620' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Multiply the independent choices (fundamental counting principle).',
      formulas: [
        '9 \\times 10 \\times 4 = 360',
      ],
      steps: [
        'Step 1: 9 choices of CD player.',
        'Step 2: 10 choices of speaker and 4 choices of amplifier.',
        'Step 3: $9 \\times 10 \\times 4 = 360$ systems.',
      ],
      finalAnswer: '360 (Option B)',
    },
  },

  // Item 60
  {
    id: 'mstc-nov2015-q60',
    number: 60,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Binomial',
    text: 'Statistical record shows that 25% of smokers wants to quit smoking. In a random of 15 smokers, what is the probability that exactly 8 wants to quit smoking?',
    options: [
      { label: 'A', text: '0.08361' },
      { label: 'B', text: '0.00952' },
      { label: 'C', text: '0.02562' },
      { label: 'D', text: '0.01311' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Binomial probability with n = 15, p = 0.25, r = 8.',
      formulas: [
        'P = \\binom{15}{8}(0.25)^8(0.75)^7',
        'P = 6435 \\times 1.526\\times10^{-5} \\times 0.1335 = 0.0131',
      ],
      steps: [
        'Step 1: $\\binom{15}{8} = 6435$.',
        'Step 2: $(0.25)^8 = 1.526\\times10^{-5}$ and $(0.75)^7 = 0.1335$.',
        'Step 3: $P = 0.0131$.',
      ],
      finalAnswer: '0.01311 (Option D)',
    },
  },
];
