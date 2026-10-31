import { Question } from '../../../types/exam';
import { hpgeMay2015Figure } from '../../hpgeMay2015Images';

export const HPGE_MAY2015_PART4: Question[] = [
  // Item 46
  {
    id: 'hpge-may2015-q46',
    number: 46,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Relative Equilibrium (Rotation)',
    text: 'Situation 6 (continued) – For the same depth of water of 1.4 m, what height of the tank is required to avoid spilling any water?',
    options: [
      { label: 'A', text: '2.963 m' },
      { label: 'B', text: '3.026 m' },
      { label: 'C', text: '2.690 m' },
      { label: 'D', text: '2.878 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'For a rotating vessel whose paraboloid vertex stays inside it, the depth to the rim is the original depth plus half the paraboloid height.',
      formulas: [
        'H = h + \\dfrac{y}{2}',
        'H = 1.4 + \\dfrac{3.271}{2}',
      ],
      steps: [
        'Step 1: Volume is conserved, so the surface rises by $y/2$ at the wall and falls by $y/2$ at the axis.',
        'Step 2: The rim must therefore stand $h + y/2$ above the floor.',
        'Step 3: With $y = 3.271\\ \\text{m}$: $H = 1.4 + 1.636 = 3.036\\ \\text{m}$.',
        'Step 4: The booklet rounds ω to 9.4 rad/s for this part, giving $y = 3.253\\ \\text{m}$ and $H = 3.026\\ \\text{m}$ — the printed key.',
      ],
      finalAnswer: '3.026 m (Option B)',
    },
  },

  // Item 47
  {
    id: 'hpge-may2015-q47',
    number: 47,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Orifices and Jets',
    text: 'Situation 7 – A jet is issued from the side of a tank under a constant as shown. The side of the tank has an inclination of 1H to 1V. The total depth of water in the tank is $h_1$ = 6.70 m and the orifice is located $h_2$ = 3.7 m above the bottom of the tank. Neglecting air resistance and assuming $C_v$ = 1.0, determine the following: The maximum height to which the jet will rise above the orifice.',
    figureSvg: hpgeMay2015Figure(
      7,
      'Figure 4: Tank with a 1H to 1V inclined side, water depth h1 = 6.70 m, orifice at h2 = 3.7 m above the base, showing the jet trajectory and the horizontal distance x.',
    ),
    figureCaption:
      'Figure 4: Jet issuing from an inclined tank wall, with h₁, h₂, x and y marked (Situation 7).',
    options: [
      { label: 'A', text: '1.5 meters' },
      { label: 'B', text: '2 meters' },
      { label: 'C', text: '1.85 meters' },
      { label: 'D', text: '2.5 meters' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The head above the orifice fixes the jet speed; the 45° wall makes the jet leave at 45°, so only part of that speed becomes height.',
      formulas: [
        'V = \\sqrt{2g(h_1 - h_2)} = \\sqrt{2(9.81)(3.0)} = 7.672\\ \\text{m/s}',
        'h_{max} = \\dfrac{(V\\sin 45°)^2}{2g}',
      ],
      steps: [
        'Step 1: Head on the orifice $= 6.70 - 3.70 = 3.00\\ \\text{m}$.',
        'Step 2: $V = \\sqrt{2(9.81)(3.0)} = 7.672\\ \\text{m/s}$.',
        'Step 3: A 1H to 1V wall is at 45°, so the jet leaves normal to it, i.e. at 45° above the horizontal.',
        'Step 4: Vertical component $= 7.672\\sin 45° = 5.425\\ \\text{m/s}$.',
        'Step 5: $h_{max} = 5.425^2/(2 \\times 9.81) = 1.50\\ \\text{m}$.',
      ],
      finalAnswer: '1.5 m (Option A)',
    },
  },

  // Item 48
  {
    id: 'hpge-may2015-q48',
    number: 48,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Orifices and Jets',
    text: 'Situation 7 (continued) – The point "x" the jet will strike a horizontal plane 1.20 m below the bottom of the tank.',
    options: [
      { label: 'A', text: '10.87 meters' },
      { label: 'B', text: '12.35 meters' },
      { label: 'C', text: '10.39 meters' },
      { label: 'D', text: '9.2 meters' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Solve the vertical projectile equation for the time of flight, then multiply by the horizontal velocity.',
      formulas: [
        'y = V\\sin 45°\\,t - \\tfrac{1}{2}gt^2, \\quad y = -(3.70 + 1.20) = -4.90\\ \\text{m}',
        'x = V\\cos 45°\\,t',
      ],
      steps: [
        'Step 1: The target plane is $3.70 + 1.20 = 4.90\\ \\text{m}$ below the orifice.',
        'Step 2: $-4.90 = 5.425t - 4.905t^2$.',
        'Step 3: $4.905t^2 - 5.425t - 4.90 = 0$ gives $t = 1.695\\ \\text{s}$.',
        'Step 4: $x = 5.425(1.695) = 9.20\\ \\text{m}$.',
      ],
      finalAnswer: '9.2 m (Option D)',
    },
  },

  // Item 49
  {
    id: 'hpge-may2015-q49',
    number: 49,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Orifices and Jets',
    text: 'Situation 7 (continued) – The time it takes for the jet to strike a horizontal plane 1.20 m below the bottom of the tank.',
    options: [
      { label: 'A', text: '1.763 seconds' },
      { label: 'B', text: '1.695 seconds' },
      { label: 'C', text: '1.725 seconds' },
      { label: 'D', text: '1.735 seconds' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Root of the vertical displacement quadratic for a drop of 4.90 m.',
      formulas: ['4.905t^2 - 5.425t - 4.90 = 0'],
      steps: [
        'Step 1: Vertical drop from the orifice $= 3.70 + 1.20 = 4.90\\ \\text{m}$.',
        'Step 2: Upward positive: $-4.90 = 5.425t - 4.905t^2$.',
        'Step 3: $t = \\dfrac{5.425 + \\sqrt{5.425^2 + 4(4.905)(4.90)}}{2(4.905)}$.',
        'Step 4: $t = \\dfrac{5.425 + 11.206}{9.81} = 1.695\\ \\text{s}$.',
      ],
      finalAnswer: '1.695 s (Option B)',
    },
  },

  // Item 50
  {
    id: 'hpge-may2015-q50',
    number: 50,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Specific Energy)',
    text: 'Situation 8 – A trapezoidal canal has bottom width of 5 m and side slopes of 2H to 1V. The flow is 30 m³/s when the depth of flow is 1.20 m. Use n = 0.013. Calculate the specific energy of flow.',
    options: [
      { label: 'A', text: '2.22 m' },
      { label: 'B', text: '1.78 m' },
      { label: 'C', text: '1.46 m' },
      { label: 'D', text: '2.58 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Specific energy is the depth plus the velocity head.',
      formulas: [
        'A = bd + zd^2 = 5(1.2) + 2(1.2)^2 = 8.88\\ \\text{m}^2',
        'E = d + \\dfrac{V^2}{2g}',
      ],
      steps: [
        'Step 1: $A = 5(1.2) + 2(1.44) = 8.88\\ \\text{m}^2$.',
        'Step 2: $V = 30/8.88 = 3.378\\ \\text{m/s}$.',
        'Step 3: $V^2/2g = 11.411/19.62 = 0.582\\ \\text{m}$.',
        'Step 4: $E = 1.20 + 0.582 = 1.78\\ \\text{m}$.',
      ],
      finalAnswer: '1.78 m (Option B)',
    },
  },

  // Item 51
  {
    id: 'hpge-may2015-q51',
    number: 51,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Manning)',
    text: 'Situation 8 (continued) – What is the slope of channel bed?',
    options: [
      { label: 'A', text: '0.00325' },
      { label: 'B', text: '0.00403' },
      { label: 'C', text: '0.00105' },
      { label: 'D', text: '0.00237' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Wetted perimeter of a trapezoid includes the two inclined sides, each d√(1+z²) long.',
      formulas: [
        'P = b + 2d\\sqrt{1 + z^2} = 5 + 2(1.2)\\sqrt{5} = 10.367\\ \\text{m}',
        'S = \\left(\\dfrac{nV}{R^{2/3}}\\right)^2',
      ],
      steps: [
        'Step 1: $P = 5 + 2(1.2)(2.2361) = 10.367\\ \\text{m}$.',
        'Step 2: $R = A/P = 8.88/10.367 = 0.8566\\ \\text{m}$; $R^{2/3} = 0.9019$.',
        'Step 3: $S = \\left[\\dfrac{0.013(3.378)}{0.9019}\\right]^2 = (0.04869)^2$.',
        'Step 4: $S = 0.00237$.',
      ],
      finalAnswer: '0.00237 (Option D)',
    },
  },

  // Item 52
  {
    id: 'hpge-may2015-q52',
    number: 52,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Boundary Shear)',
    text: 'Situation 8 (continued) – Calculate the boundary shearing stress.',
    options: [
      { label: 'A', text: '8.86 Pa' },
      { label: 'B', text: '12.56 Pa' },
      { label: 'C', text: '19.92 Pa' },
      { label: 'D', text: '34.55 Pa' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Average boundary shear stress is the unit weight times the hydraulic radius times the slope.',
      formulas: ['\\tau = \\gamma R S = 9810(0.8566)(0.0023705)'],
      steps: [
        'Step 1: From item 51, $R = 0.8566\\ \\text{m}$ and $S = 0.0023705$.',
        'Step 2: $\\tau = 9810(0.8566)(0.0023705)$ in pascals.',
        'Step 3: $\\tau = 19.92\\ \\text{Pa}$.',
      ],
      finalAnswer: '19.92 Pa (Option C)',
    },
  },

  // Item 53
  {
    id: 'hpge-may2015-q53',
    number: 53,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Networks (Three Reservoirs)',
    text: 'Situation 9 – Reservoir B in the figure receives 0.06 m³/s of flow. Determine the following: The flow in line AD.',
    figureSvg: hpgeMay2015Figure(
      9,
      'Figure 5: Three-reservoir network — reservoir A at El 100 m, reservoir C at El 82 m, and reservoir B, joined at junction D. Pipe AD is 1500 m of 450 mm at f = 0.0225; pipe BD is 500 m of 250 mm at f = 0.0178; pipe DC is 750 m of 300 mm at f = 0.0168.',
    ),
    figureCaption:
      'Figure 5: Three-reservoir network with junction D; A at El 100 m, C at El 82 m (Situation 9).',
    options: [
      { label: 'A', text: '0.219 m³/s' },
      { label: 'B', text: '0.203 m³/s' },
      { label: 'C', text: '0.233 m³/s' },
      { label: 'D', text: '0.173 m³/s' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Write each pipe as Q = k√(Δh) and solve the junction continuity equation for the head at D.',
      formulas: [
        'k = A\\sqrt{\\dfrac{2gD}{fL}}',
        'k_{AD} = 0.08134,\\quad k_{DC} = 0.04831,\\quad k_{BD} = 0.03644',
        'k_{AD}\\sqrt{100 - H_D} = k_{DC}\\sqrt{H_D - 82} + 0.06',
      ],
      steps: [
        'Step 1: $A_{AD} = 0.15904\\ \\text{m}^2$, so $k_{AD} = 0.15904\\sqrt{2(9.81)(0.45)/(0.0225 \\times 1500)} = 0.08134$.',
        'Step 2: $k_{DC} = 0.070686\\sqrt{2(9.81)(0.30)/(0.0168 \\times 750)} = 0.04831$.',
        'Step 3: $k_{BD} = 0.049087\\sqrt{2(9.81)(0.25)/(0.0178 \\times 500)} = 0.03644$.',
        'Step 4: B receives water, so D feeds B and continuity gives $Q_{AD} = Q_{DC} + 0.06$.',
        'Step 5: Solving gives $H_D = 92.78\\ \\text{m}$.',
        'Step 6: $Q_{AD} = 0.08134\\sqrt{100 - 92.78} = 0.08134(2.687) = 0.219\\ \\text{m}^3/\\text{s}$.',
      ],
      finalAnswer: '0.219 m³/s (Option A)',
    },
  },

  // Item 54
  {
    id: 'hpge-may2015-q54',
    number: 54,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Networks (Three Reservoirs)',
    text: 'Situation 9 (continued) – The flow in line DC.',
    options: [
      { label: 'A', text: '0.143 m³/s' },
      { label: 'B', text: '0.113 m³/s' },
      { label: 'C', text: '0.159 m³/s' },
      { label: 'D', text: '0.173 m³/s' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With the junction head known, DC carries whatever flows from D down to reservoir C.',
      formulas: ['Q_{DC} = k_{DC}\\sqrt{H_D - 82} = 0.04831\\sqrt{10.78}'],
      steps: [
        'Step 1: $H_D = 92.78\\ \\text{m}$ (item 53).',
        'Step 2: $\\Delta h_{DC} = 92.78 - 82 = 10.78\\ \\text{m}$.',
        'Step 3: $Q_{DC} = 0.04831(3.283) = 0.159\\ \\text{m}^3/\\text{s}$.',
        'Step 4: Check: $0.219 = 0.159 + 0.060$ ✓',
      ],
      finalAnswer: '0.159 m³/s (Option C)',
    },
  },

  // Item 55
  {
    id: 'hpge-may2015-q55',
    number: 55,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Networks (Three Reservoirs)',
    text: 'Situation 9 (continued) – The elevation of reservoir B.',
    options: [
      { label: 'A', text: '92.76 m' },
      { label: 'B', text: '90.07 m' },
      { label: 'C', text: '91.06 m' },
      { label: 'D', text: '89.09 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The 0.06 m³/s travelling from D to B must lose enough head in pipe BD to reach reservoir B.',
      formulas: [
        'h_{f,BD} = \\left(\\dfrac{0.06}{k_{BD}}\\right)^2 = \\left(\\dfrac{0.06}{0.03644}\\right)^2',
        'H_B = H_D - h_{f,BD}',
      ],
      steps: [
        'Step 1: $h_{f,BD} = (0.06/0.03644)^2 = (1.6465)^2 = 2.711\\ \\text{m}$.',
        'Step 2: Flow runs from D to B, so B is the lower head.',
        'Step 3: $H_B = 92.78 - 2.71 = 90.07\\ \\text{m}$.',
      ],
      finalAnswer: '90.07 m (Option B)',
    },
  },

  // Item 56
  {
    id: 'hpge-may2015-q56',
    number: 56,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Sizing (Distribution)',
    text: 'Situation 10 – Reservoir A, the source of water for towns C and D, is at elevation 200 m. The distribution reservoir at junction B is at elevation 91.56 m and 15,000 m from A. Town C with a population of 250,000 is at elevation 56 m and is 9,000 m from B. Town D with population of 300,000 is at elevation 15.21 m and is 6,000 m from B. The water demand is 150 liters per capita per day. Neglect all minor losses. Assume friction factor f = 0.02 for all pipes. Which of the following is nearest to the required diameter of line AB?',
    figureSvg: hpgeMay2015Figure(
      10,
      'Figure 6: Distribution layout — reservoir A feeding junction B, which splits into line L2 to Town C and line L3 to Town D.',
    ),
    figureCaption:
      'Figure 6: Reservoir A to junction B, then lines L₂ and L₃ to Towns C and D (Situation 10).',
    options: [
      { label: 'A', text: '730 mm' },
      { label: 'B', text: '660 mm' },
      { label: 'C', text: '510 mm' },
      { label: 'D', text: '600 mm' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Convert both town demands to m³/s, add them for AB, then solve the Darcy–Weisbach relation for D.',
      formulas: [
        'Q = \\dfrac{150\\ \\text{L/cap/d} \\times N}{86\\,400 \\times 1000}',
        'Q_C = 0.4340,\\quad Q_D = 0.5208,\\quad Q_{AB} = 0.9549\\ \\text{m}^3/\\text{s}',
        'h_f = \\dfrac{8fLQ^2}{g\\pi^2 D^5}',
      ],
      steps: [
        'Step 1: $Q_C = 250000(150)/(86400 \\times 1000) = 0.4340\\ \\text{m}^3/\\text{s}$.',
        'Step 2: $Q_D = 300000(150)/(86400 \\times 1000) = 0.5208\\ \\text{m}^3/\\text{s}$.',
        'Step 3: $Q_{AB} = 0.4340 + 0.5208 = 0.9549\\ \\text{m}^3/\\text{s}$.',
        'Step 4: Allowable loss $= 200 - 91.56 = 108.44\\ \\text{m}$ over $L = 15000\\ \\text{m}$.',
        'Step 5: $108.44 = \\dfrac{8(0.02)(15000)(0.9549)^2}{9.81\\pi^2 D^5}$ gives $D^5 = 0.2084$.',
        'Step 6: $D = 0.731\\ \\text{m} = 731\\ \\text{mm}$, nearest to 730 mm.',
      ],
      finalAnswer: '730 mm (Option A)',
    },
  },

  // Item 57
  {
    id: 'hpge-may2015-q57',
    number: 57,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Sizing (Distribution)',
    text: 'Situation 10 (continued) – Which of the following is nearest to the required diameter of line BC?',
    options: [
      { label: 'A', text: '660 mm' },
      { label: 'B', text: '600 mm' },
      { label: 'C', text: '510 mm' },
      { label: 'D', text: '730 mm' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Line BC carries only Town C’s demand, over 9,000 m with a 35.56 m fall.',
      formulas: ['h_f = \\dfrac{8fLQ^2}{g\\pi^2 D^5}, \\quad h_f = 91.56 - 56 = 35.56\\ \\text{m}'],
      steps: [
        'Step 1: $Q_{BC} = 0.4340\\ \\text{m}^3/\\text{s}$; $L = 9000\\ \\text{m}$.',
        'Step 2: $35.56 = \\dfrac{8(0.02)(9000)(0.4340)^2}{9.81\\pi^2 D^5}$ gives $D^5 = 0.07879$.',
        'Step 3: $D = 0.602\\ \\text{m} = 602\\ \\text{mm}$, nearest to 600 mm.',
      ],
      finalAnswer: '600 mm (Option B)',
    },
  },

  // Item 58
  {
    id: 'hpge-may2015-q58',
    number: 58,
    pageNumber: 44,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Pipe Sizing (Distribution)',
    text: 'Situation 10 (continued) – Which of the following is nearest to the required diameter of line BD?',
    options: [
      { label: 'A', text: '510 mm' },
      { label: 'B', text: '730 mm' },
      { label: 'C', text: '600 mm' },
      { label: 'D', text: '660 mm' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Line BD carries Town D’s demand over 6,000 m with a 76.35 m fall — a steep gradient, so a smaller pipe suffices.',
      formulas: ['h_f = 91.56 - 15.21 = 76.35\\ \\text{m}, \\quad L = 6000\\ \\text{m}'],
      steps: [
        'Step 1: $Q_{BD} = 0.5208\\ \\text{m}^3/\\text{s}$.',
        'Step 2: $76.35 = \\dfrac{8(0.02)(6000)(0.5208)^2}{9.81\\pi^2 D^5}$ gives $D^5 = 0.03523$.',
        'Step 3: $D = 0.512\\ \\text{m} = 512\\ \\text{mm}$, nearest to 510 mm.',
      ],
      finalAnswer: '510 mm (Option A)',
    },
  },

  // Item 59
  {
    id: 'hpge-may2015-q59',
    number: 59,
    pageNumber: 45,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'Situation 11 – Given the following soil properties: Specific gravity of soil solids, $G_s$ = 2.67; Void ratio, e = 0.45; Degree of saturation, S = 40%. Calculate the following: The unit weight of the soil.',
    options: [
      { label: 'A', text: '18.52 kN/m³' },
      { label: 'B', text: '20.14 kN/m³' },
      { label: 'C', text: '19.28 kN/m³' },
      { label: 'D', text: '19.63 kN/m³' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Get the water content from S, e and Gs, then apply the moist unit weight formula.',
      formulas: [
        'w = \\dfrac{Se}{G_s} = \\dfrac{0.40(0.45)}{2.67} = 0.06742',
        '\\gamma = \\dfrac{G_s\\gamma_w(1 + w)}{1 + e}',
      ],
      steps: [
        'Step 1: $w = 0.40(0.45)/2.67 = 0.06742 = 6.742\\%$.',
        'Step 2: $G_s\\gamma_w = 2.67(9.81) = 26.193\\ \\text{kN/m}^3$.',
        'Step 3: $\\gamma = 26.193(1.06742)/1.45$.',
        'Step 4: $\\gamma = 19.28\\ \\text{kN/m}^3$.',
      ],
      finalAnswer: '19.28 kN/m³ (Option C)',
    },
  },

  // Item 60
  {
    id: 'hpge-may2015-q60',
    number: 60,
    pageNumber: 45,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'Situation 11 (continued) – The dry unit weight of the soil.',
    options: [
      { label: 'A', text: '18.57 kN/m³' },
      { label: 'B', text: '18.06 kN/m³' },
      { label: 'C', text: '17.56 kN/m³' },
      { label: 'D', text: '19.21 kN/m³' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Dry unit weight depends only on Gs and e.',
      formulas: ['\\gamma_d = \\dfrac{G_s\\gamma_w}{1 + e} = \\dfrac{26.193}{1.45}'],
      steps: [
        'Step 1: $G_s\\gamma_w = 26.193\\ \\text{kN/m}^3$.',
        'Step 2: $\\gamma_d = 26.193/1.45$.',
        'Step 3: $\\gamma_d = 18.06\\ \\text{kN/m}^3$.',
      ],
      finalAnswer: '18.06 kN/m³ (Option B)',
    },
  },
];
