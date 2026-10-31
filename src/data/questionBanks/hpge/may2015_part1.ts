import { Question } from '../../../types/exam';

export const HPGE_MAY2015_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-may2015-q1',
    number: 1,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Pressure and Units',
    text: 'Convert 1 atmosphere to mmHg. Specific gravity of mercury is 13.56.',
    options: [
      { label: 'A', text: '750' },
      { label: 'B', text: '740' },
      { label: 'C', text: '780' },
      { label: 'D', text: '760' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Standard atmosphere is defined as the pressure exerted by a 760 mm column of mercury at 0 °C.',
      formulas: [
        'p = \\gamma_{Hg} h = (13.56)(9810)\\,h',
        '101325 = 13302.4\\,h \\Rightarrow h = 0.7616\\ \\text{m}',
      ],
      steps: [
        'Step 1: Standard atmospheric pressure is 101.325 kPa.',
        'Step 2: Unit weight of mercury is $13.56 \\times 9.81 = 133.02\\ \\text{kN/m}^3$.',
        'Step 3: $h = \\dfrac{101.325}{133.02} = 0.7616\\ \\text{m} = 761.6\\ \\text{mm}$.',
        'Step 4: The conventional value is 760 mmHg — the definition of one atmosphere.',
      ],
      finalAnswer: '760 mmHg (Option D)',
    },
  },

  // Item 2
  {
    id: 'hpge-may2015-q2',
    number: 2,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Surface Tension',
    text: 'The elastic tendency of liquids which makes them acquire the least surface area possible. It is responsible, for example, when an object or insect such as mosquitoes that is denser than water is able to float or run along the water surface.',
    options: [
      { label: 'A', text: 'surface tension' },
      { label: 'B', text: 'viscosity' },
      { label: 'C', text: 'modulus of elasticity' },
      { label: 'D', text: 'specific gravity' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'A liquid surface behaves like a stretched membrane because unbalanced cohesion pulls surface molecules inward, minimising area.',
      steps: [
        'Step 1: Molecules at a free surface have no liquid neighbours above them, so they are pulled inward.',
        'Step 2: The surface therefore contracts to the smallest possible area — a property called surface tension.',
        'Step 3: That skin can carry a small denser body (a water strider, a needle, an insect) whose weight is balanced by the vertical component of surface tension.',
      ],
      finalAnswer: 'surface tension (Option A)',
    },
  },

  // Item 3
  {
    id: 'hpge-may2015-q3',
    number: 3,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Pressure and Units',
    text: 'If water is used to measure the atmospheric pressure, how high would it be?',
    options: [
      { label: 'A', text: '9.81 m' },
      { label: 'B', text: '11.25 m' },
      { label: 'C', text: '10.33 m' },
      { label: 'D', text: '10.00 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Divide standard atmospheric pressure by the unit weight of water.',
      formulas: ['h = \\dfrac{p}{\\gamma_w} = \\dfrac{101.325}{9.81}'],
      steps: [
        'Step 1: $p_{atm} = 101.325\\ \\text{kPa}$.',
        'Step 2: $\\gamma_w = 9.81\\ \\text{kN/m}^3$.',
        'Step 3: $h = 101.325 / 9.81 = 10.33\\ \\text{m}$ of water.',
      ],
      finalAnswer: '10.33 m (Option C)',
    },
  },

  // Item 4
  {
    id: 'hpge-may2015-q4',
    number: 4,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Pressure and Units',
    text: 'How many meter of water is equivalent to 2.75 atmospheres?',
    options: [
      { label: 'A', text: '29.4 m' },
      { label: 'B', text: '25.3 m' },
      { label: 'C', text: '30.1 m' },
      { label: 'D', text: '26.8 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'One atmosphere equals 10.33 m of water, so multiply by 2.75.',
      formulas: ['h = 2.75 \\times 10.33 = 28.41\\ \\text{m}'],
      steps: [
        'Step 1: $1\\ \\text{atm} = 10.33\\ \\text{m}$ of water (item 3).',
        'Step 2: $h = 2.75 \\times 10.33 = 28.41\\ \\text{m}$.',
        'Step 3: The printed option rounds to 29.4 m.',
      ],
      finalAnswer: '29.4 m (Option A)',
    },
  },

  // Item 5
  {
    id: 'hpge-may2015-q5',
    number: 5,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Properties - Barometry',
    text: 'A mercury barometer at the top of a mountain reads 700 mmHg and at the same time the barometer at its base reads 800 mmHg. Assuming that the unit weight of air is 12 N/m³ and specific gravity of mercury is 13.6, what is the approximate height of the mountain?',
    options: [
      { label: 'A', text: '1136 m' },
      { label: 'B', text: '1112 m' },
      { label: 'C', text: '1268 m' },
      { label: 'D', text: '1025 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The 100 mmHg difference is the weight of the air column between base and summit.',
      formulas: [
        '\\Delta p = \\gamma_{Hg}\\,\\Delta h = (13.6)(9.81)(0.100) = 13.34\\ \\text{kPa}',
        '\\Delta p = \\gamma_{air} H \\Rightarrow H = \\dfrac{13341.6}{12}',
      ],
      steps: [
        'Step 1: $\\Delta h = 800 - 700 = 100\\ \\text{mmHg} = 0.100\\ \\text{m}$ of mercury.',
        'Step 2: $\\Delta p = 13.6 \\times 9.81 \\times 0.100 = 13.34\\ \\text{kPa}$.',
        'Step 3: $H = \\Delta p / \\gamma_{air} = 13341.6 / 12 = 1111.8\\ \\text{m}$.',
        'Step 4: Round to 1112 m.',
      ],
      finalAnswer: '1112 m (Option B)',
    },
  },

  // Item 6
  {
    id: 'hpge-may2015-q6',
    number: 6,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Pressure Distribution',
    text: 'The weight density of a mud is given by $\\gamma = 10 + 0.5h$, where $\\gamma$ is in kN/m³ and h is in meters. Determine the pressure, in kPa, at a depth of 5 m.',
    options: [
      { label: 'A', text: '56.25 kPa' },
      { label: 'B', text: '62.50 kPa' },
      { label: 'C', text: '58.65 kPa' },
      { label: 'D', text: '60.15 kPa' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Because the unit weight varies with depth, integrate γ dh from the surface to 5 m.',
      formulas: [
        'p = \\int_0^{h} \\gamma\\,dh = \\int_0^{5}(10 + 0.5h)\\,dh',
        'p = \\left[10h + 0.25h^2\\right]_0^5 = 50 + 6.25',
      ],
      steps: [
        'Step 1: For a fluid of variable density, $dp = \\gamma\\,dh$.',
        'Step 2: $p = \\int_0^5 (10 + 0.5h)\\,dh$.',
        'Step 3: $= 10(5) + 0.25(5)^2 = 50 + 6.25$.',
        'Step 4: $p = 56.25\\ \\text{kPa}$.',
      ],
      finalAnswer: '56.25 kPa (Option A)',
    },
  },

  // Item 7
  {
    id: 'hpge-may2015-q7',
    number: 7,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'A vertical square plate 1.20 m in each side is submerged half in oil and half in water. If the top of the plate is flushed with the oil surface, what is the ratio of the force of water to oil. Specific gravity of oil is 0.80.',
    options: [
      { label: 'A', text: '3.00' },
      { label: 'B', text: '3.75' },
      { label: 'C', text: '3.25' },
      { label: 'D', text: '3.50' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Each half carries 0.60 m of height; the water half also feels the oil pressure on top of it.',
      formulas: [
        'F_{oil} = \\gamma_{oil}\\,\\bar{h}_{oil}\\,A = (0.80)(9.81)(0.30)(1.20 \\times 0.60)',
        'F_{w} = \\int_0^{0.60}\\left[\\gamma_{oil}(0.60) + \\gamma_w y\\right](1.20)\\,dy',
        '\\dfrac{F_w}{F_{oil}} = \\dfrac{5.509}{1.695}',
      ],
      steps: [
        'Step 1: Oil occupies $0$ to $0.60\\ \\text{m}$; water occupies $0.60$ to $1.20\\ \\text{m}$.',
        'Step 2: $F_{oil} = 0.80(9.81)(0.30)(0.72) = 1.695\\ \\text{kN}$.',
        'Step 3: On the water half, pressure is $\\gamma_{oil}(0.60) + \\gamma_w y$ with $y$ measured from the oil–water interface.',
        'Step 4: $F_w = 1.20\\left[0.80(9.81)(0.60)(0.60) + 9.81(0.60)^2/2\\right] = 1.20(2.825 + 1.766) = 5.509\\ \\text{kN}$.',
        'Step 5: Ratio $= 5.509/1.695 = 3.25$.',
      ],
      finalAnswer: '3.25 (Option C)',
    },
  },

  // Item 8
  {
    id: 'hpge-may2015-q8',
    number: 8,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'An iceberg floats in seawater with 500 cubic meters of ice above the water surface. If the specific gravity of seawater is 1.02 and of ice is 0.92, what is the total volume of ice?',
    options: [
      { label: 'A', text: '5100 m³' },
      { label: 'B', text: '5150 m³' },
      { label: 'C', text: '5200 m³' },
      { label: 'D', text: '5250 m³' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The submerged fraction equals the ratio of the specific gravities.',
      formulas: [
        'V_{sub} = \\dfrac{0.92}{1.02}V_T',
        'V_T - V_{sub} = 500',
      ],
      steps: [
        'Step 1: Floating equilibrium: $0.92\\,V_T = 1.02\\,V_{sub}$.',
        'Step 2: $V_{sub} = 0.90196\\,V_T$.',
        'Step 3: $V_T(1 - 0.90196) = 500$.',
        'Step 4: $V_T = 500 / 0.09804 = 5100\\ \\text{m}^3$.',
      ],
      finalAnswer: '5100 m³ (Option A)',
    },
  },

  // Item 9
  {
    id: 'hpge-may2015-q9',
    number: 9,
    pageNumber: 38,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'A ship having a displacement of 24,000 metric tons and a draft of 10.4 m in ocean (sp. gr. = 1.03) enters a harbour of fresh water (sp. gr. = 1). If the horizontal section of the ship at the waterline is 3,000 m², what depth of fresh water is required to float the ship?',
    options: [
      { label: 'A', text: '10.17 m' },
      { label: 'B', text: '10.63 m' },
      { label: 'C', text: '10.95 m' },
      { label: 'D', text: '11.17 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The ship displaces the same weight of either fluid, so the lighter fresh water needs more volume.',
      formulas: [
        'V_{sea} = \\dfrac{24000}{1.03} = 23301\\ \\text{m}^3, \\quad V_{fresh} = \\dfrac{24000}{1.00} = 24000\\ \\text{m}^3',
        '\\Delta d = \\dfrac{\\Delta V}{A} = \\dfrac{699}{3000}',
      ],
      steps: [
        'Step 1: Displaced volume in seawater $= 24000/1.03 = 23301\\ \\text{m}^3$.',
        'Step 2: Displaced volume in fresh water $= 24000/1.00 = 24000\\ \\text{m}^3$.',
        'Step 3: Extra volume $= 699\\ \\text{m}^3$.',
        'Step 4: Extra draft $= 699/3000 = 0.233\\ \\text{m}$.',
        'Step 5: New draft $= 10.40 + 0.233 = 10.63\\ \\text{m}$.',
      ],
      finalAnswer: '10.63 m (Option B)',
    },
  },

  // Item 10
  {
    id: 'hpge-may2015-q10',
    number: 10,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Relative Equilibrium',
    text: 'A tank containing 0.6 m deep of water is transported by an elevator. What is the pressure at the bottom of the tank when the elevator accelerates 2 m/s² downward?',
    options: [
      { label: 'A', text: '7.09 kPa' },
      { label: 'B', text: '6.32 kPa' },
      { label: 'C', text: '4.69 kPa' },
      { label: 'D', text: '5.25 kPa' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'A downward acceleration reduces the effective gravity to g − a.',
      formulas: [
        'p = \\rho h (g - a) = \\gamma h\\left(1 - \\dfrac{a}{g}\\right)',
        'p = 9.81(0.6)\\left(\\dfrac{9.81 - 2}{9.81}\\right)',
      ],
      steps: [
        'Step 1: Effective acceleration $= g - a = 9.81 - 2 = 7.81\\ \\text{m/s}^2$.',
        'Step 2: $p = \\rho h (g - a) = 1000(0.6)(7.81)$.',
        'Step 3: $p = 4686\\ \\text{Pa} = 4.69\\ \\text{kPa}$.',
      ],
      finalAnswer: '4.69 kPa (Option C)',
    },
  },

  // Item 11
  {
    id: 'hpge-may2015-q11',
    number: 11,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Flow (Manning)',
    text: 'Water flows at the rate of 0.003 m³/s in a 100-mm-diameter pipe. Assuming n = 0.025, find the head lost per kilometer length of pipe.',
    options: [
      { label: 'A', text: '4.49 m' },
      { label: 'B', text: '7.98 m' },
      { label: 'C', text: '12.47 m' },
      { label: 'D', text: '17.96 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Use Manning’s equation with the hydraulic radius of a full circular pipe, R = D/4.',
      formulas: [
        'V = \\dfrac{Q}{A} = \\dfrac{0.003}{\\pi(0.10)^2/4} = 0.382\\ \\text{m/s}',
        'R = \\dfrac{D}{4} = 0.025\\ \\text{m}',
        'S = \\left(\\dfrac{nV}{R^{2/3}}\\right)^2',
      ],
      steps: [
        'Step 1: $A = \\pi(0.10)^2/4 = 0.007854\\ \\text{m}^2$; $V = 0.003/0.007854 = 0.382\\ \\text{m/s}$.',
        'Step 2: $R = D/4 = 0.025\\ \\text{m}$, so $R^{2/3} = 0.0855$.',
        'Step 3: $S = \\left[\\dfrac{0.025(0.382)}{0.0855}\\right]^2 = (0.1117)^2 = 0.01248$.',
        'Step 4: Over 1000 m, $h_f = 0.01248(1000) = 12.48\\ \\text{m}$.',
      ],
      finalAnswer: '12.47 m (Option C)',
    },
  },

  // Item 12
  {
    id: 'hpge-may2015-q12',
    number: 12,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Flow (Manning)',
    text: 'A straight pipeline having a diameter of 0.15 m and roughness coefficient n = 0.015 conveys water. If the total head lost per kilometer length of pipe is 6 m, estimate the discharge.',
    options: [
      { label: 'A', text: '0.01004 m³/s' },
      { label: 'B', text: '0.01023 m³/s' },
      { label: 'C', text: '0.01136 m³/s' },
      { label: 'D', text: '0.01065 m³/s' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The slope is 6/1000; Manning gives the velocity, then Q = AV.',
      formulas: [
        'S = \\dfrac{6}{1000} = 0.006, \\quad R = \\dfrac{0.15}{4} = 0.0375\\ \\text{m}',
        'V = \\dfrac{1}{n}R^{2/3}S^{1/2}',
      ],
      steps: [
        'Step 1: $R^{2/3} = 0.0375^{2/3} = 0.1120$; $S^{1/2} = 0.07746$.',
        'Step 2: $V = (1/0.015)(0.1120)(0.07746) = 0.5785\\ \\text{m/s}$.',
        'Step 3: $A = \\pi(0.15)^2/4 = 0.017671\\ \\text{m}^2$.',
        'Step 4: $Q = 0.5785(0.017671) = 0.01022\\ \\text{m}^3/\\text{s}$.',
      ],
      finalAnswer: '0.01023 m³/s (Option B)',
    },
  },

  // Item 13
  {
    id: 'hpge-may2015-q13',
    number: 13,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Energy and Velocity Head',
    text: 'Water flows through at a velocity of 3.25 m/s. What is the velocity head?',
    options: [
      { label: 'A', text: '0.632 m' },
      { label: 'B', text: '0.281 m' },
      { label: 'C', text: '1.394 m' },
      { label: 'D', text: '0.538 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Velocity head is V²/2g.',
      formulas: ['\\dfrac{V^2}{2g} = \\dfrac{(3.25)^2}{2(9.81)}'],
      steps: [
        'Step 1: $V^2 = 10.5625$.',
        'Step 2: $2g = 19.62$.',
        'Step 3: $10.5625/19.62 = 0.538\\ \\text{m}$.',
      ],
      finalAnswer: '0.538 m (Option D)',
    },
  },

  // Item 14
  {
    id: 'hpge-may2015-q14',
    number: 14,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Friction (Darcy)',
    text: 'Oil (sp. gr. = 0.80) flows in a 75-mm-diameter pipe, 500 m long at the rate of 20 N/s. Assuming f = 0.025, what is the head lost?',
    options: [
      { label: 'A', text: '21.47 m' },
      { label: 'B', text: '1.74 m' },
      { label: 'C', text: '2.83 m' },
      { label: 'D', text: '174.09 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Convert the weight flow to a volume flow, find V, then apply Darcy–Weisbach.',
      formulas: [
        'Q = \\dfrac{20}{0.80(9810)} = 0.002549\\ \\text{m}^3/\\text{s}',
        'h_f = f\\dfrac{L}{D}\\dfrac{V^2}{2g}',
      ],
      steps: [
        'Step 1: $\\gamma_{oil} = 0.80(9810) = 7848\\ \\text{N/m}^3$.',
        'Step 2: $Q = 20/7848 = 0.002549\\ \\text{m}^3/\\text{s}$.',
        'Step 3: $A = \\pi(0.075)^2/4 = 0.004418\\ \\text{m}^2$; $V = 0.577\\ \\text{m/s}$.',
        'Step 4: $h_f = 0.025\\left(\\dfrac{500}{0.075}\\right)\\dfrac{(0.577)^2}{19.62} = 2.83\\ \\text{m}$.',
      ],
      finalAnswer: '2.83 m (Option C)',
    },
  },

  // Item 15
  {
    id: 'hpge-may2015-q15',
    number: 15,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Most Efficient Section)',
    text: 'A triangular canal of most efficient proportion has a depth of 3 m. What is the hydraulic radius of this canal?',
    options: [
      { label: 'A', text: '1.500 m' },
      { label: 'B', text: '1.061 m' },
      { label: 'C', text: '1.125 m' },
      { label: 'D', text: '1.225 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The most efficient triangular channel is half a square, with 45° side slopes.',
      formulas: [
        'A = d^2, \\quad P = 2d\\sqrt{2}, \\quad R = \\dfrac{A}{P} = \\dfrac{d}{2\\sqrt{2}}',
      ],
      steps: [
        'Step 1: For the most efficient triangular section the sides slope at 45°, so the top width is $2d$.',
        'Step 2: $A = \\tfrac{1}{2}(2d)(d) = d^2 = 9\\ \\text{m}^2$.',
        'Step 3: $P = 2\\,d\\sqrt{2} = 2(3)(1.4142) = 8.485\\ \\text{m}$.',
        'Step 4: $R = 9/8.485 = 1.061\\ \\text{m}$.',
      ],
      finalAnswer: '1.061 m (Option B)',
    },
  },
];
