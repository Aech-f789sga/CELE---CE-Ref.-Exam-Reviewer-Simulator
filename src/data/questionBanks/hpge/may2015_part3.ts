import { Question } from '../../../types/exam';
import { hpgeMay2015Figure } from '../../hpgeMay2015Images';

export const HPGE_MAY2015_PART3: Question[] = [
  // Item 31
  {
    id: 'hpge-may2015-q31',
    number: 31,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'Situation 1 (continued) – The specific gravity of the stone.',
    options: [
      { label: 'A', text: '2.692' },
      { label: 'B', text: '3.778' },
      { label: 'C', text: '3.500' },
      { label: 'D', text: '3.182' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Divide the unit weight of the stone by the unit weight of water.',
      formulas: ['G_s = \\dfrac{\\gamma_{stone}}{\\gamma_w} = \\dfrac{31.21}{9.81}'],
      steps: [
        'Step 1: From item 30, $\\gamma_{stone} = 31.21\\ \\text{kN/m}^3$.',
        'Step 2: $G_s = 31.21/9.81$.',
        'Step 3: $G_s = 3.182$.',
      ],
      finalAnswer: '3.182 (Option D)',
    },
  },

  // Item 32
  {
    id: 'hpge-may2015-q32',
    number: 32,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 2 – A rectangular gate 3 m high and 1.2 m wide is hinged at the top. A force to keep the gate closed is applied at the bottom with an angle of 45° with the vertical. Compute the magnitude of this force if: The water surface is level with the top of the gate.',
    options: [
      { label: 'A', text: '62.43 kN' },
      { label: 'B', text: '41.62 kN' },
      { label: 'C', text: '49.94 kN' },
      { label: 'D', text: '58.27 kN' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Take moments about the hinge; only the component of P normal to the gate contributes.',
      formulas: [
        'F = \\gamma\\bar{h}A = 9.81(1.5)(3 \\times 1.2) = 52.97\\ \\text{kN}',
        'y_{cp} = \\tfrac{2}{3}(3) = 2\\ \\text{m below the hinge}',
        'P\\sin 45°(3) = F(2)',
      ],
      steps: [
        'Step 1: Centroid depth $\\bar{h} = 1.5\\ \\text{m}$; $A = 3.6\\ \\text{m}^2$.',
        'Step 2: $F = 9.81(1.5)(3.6) = 52.97\\ \\text{kN}$.',
        'Step 3: For a rectangle with its top edge at the surface, the centre of pressure is at $2h/3 = 2\\ \\text{m}$ from the top.',
        'Step 4: Moment about the hinge: $F(2) = 105.95\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 5: The force acts at the bottom, 3 m from the hinge, at 45° to the vertical, so its normal component is $P\\sin 45°$.',
        'Step 6: $P = 105.95/(3\\sin 45°) = 49.94\\ \\text{kN}$.',
      ],
      finalAnswer: '49.94 kN (Option C)',
    },
  },

  // Item 33
  {
    id: 'hpge-may2015-q33',
    number: 33,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 2 (continued) – The water surface is 0.9 m above the top of the gate.',
    options: [
      { label: 'A', text: '60.35 kN' },
      { label: 'B', text: '72.42 kN' },
      { label: 'C', text: '90.52 kN' },
      { label: 'D', text: '84.49 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The whole gate is now submerged; the centre of pressure moves closer to mid-height.',
      formulas: [
        'F = 9.81(2.4)(3.6) = 84.76\\ \\text{kN}',
        'y_{cp} = 2.4 + \\dfrac{I_g}{\\bar{y}A} = 2.4 + \\dfrac{2.7}{8.64} = 2.7125\\ \\text{m}',
      ],
      steps: [
        'Step 1: $\\bar{h} = 0.9 + 1.5 = 2.4\\ \\text{m}$; $F = 9.81(2.4)(3.6) = 84.76\\ \\text{kN}$.',
        'Step 2: $I_g = bh^3/12 = 1.2(27)/12 = 2.7\\ \\text{m}^4$.',
        'Step 3: $y_{cp} = 2.4 + 2.7/(2.4 \\times 3.6) = 2.7125\\ \\text{m}$ below the water surface.',
        'Step 4: The hinge is 0.9 m below the surface, so the lever arm is $2.7125 - 0.9 = 1.8125\\ \\text{m}$.',
        'Step 5: $P = 84.76(1.8125)/(3\\sin 45°) = 72.42\\ \\text{kN}$.',
      ],
      finalAnswer: '72.42 kN (Option B)',
    },
  },

  // Item 34
  {
    id: 'hpge-may2015-q34',
    number: 34,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 2 (continued) – The water surface is 0.9 m below the top of the gate.',
    options: [
      { label: 'A', text: '32.83 kN' },
      { label: 'B', text: '35.18 kN' },
      { label: 'C', text: '29.14 kN' },
      { label: 'D', text: '23.45 kN' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Only the lower 2.1 m of the gate is wetted, and the centre of pressure lies one-third up that wetted height.',
      formulas: [
        'F = 9.81(1.05)(2.1 \\times 1.2) = 25.96\\ \\text{kN}',
        'y_{cp} = 1.05 + \\dfrac{0.9261}{1.05(2.52)} = 1.40\\ \\text{m below the water line}',
      ],
      steps: [
        'Step 1: Wetted height $= 3.0 - 0.9 = 2.1\\ \\text{m}$; wetted area $= 2.52\\ \\text{m}^2$.',
        'Step 2: $\\bar{h} = 2.1/2 = 1.05\\ \\text{m}$ below the water surface.',
        'Step 3: $F = 9.81(1.05)(2.52) = 25.96\\ \\text{kN}$.',
        'Step 4: $I_g = 1.2(2.1)^3/12 = 0.9261\\ \\text{m}^4$; $y_{cp} = 1.05 + 0.9261/(1.05 \\times 2.52) = 1.40\\ \\text{m}$.',
        'Step 5: Lever arm from the hinge $= 0.9 + 1.40 = 2.30\\ \\text{m}$.',
        'Step 6: $P = 25.96(2.30)/(3\\sin 45°) = 28.14\\ \\text{kN}$.',
        'Step 7: The printed key gives C (29.14 kN); the working above yields 28.14 kN, so the option appears to carry a one-kN typographical slip. C remains the closest and the keyed answer.',
      ],
      finalAnswer: '29.14 kN as printed — 28.14 kN by direct computation (Option C)',
    },
  },

  // Item 35
  {
    id: 'hpge-may2015-q35',
    number: 35,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 3 – The gate shown in the figure is 2 meters wide. What is the force exerted by water on the left side of the gate?',
    figureSvg: hpgeMay2015Figure(
      3,
      'Figure 1: Vertical gate AB, 6 m tall, hinged at G in mid-height, with water 6 m deep on the left and 3 m deep on the right, bearing on a stop at A.',
    ),
    figureCaption:
      'Figure 1: Gate AB hinged at G, with 6 m of water on the left and 3 m on the right (Situation 3).',
    options: [
      { label: 'A', text: '264.87 kN' },
      { label: 'B', text: '353.16 kN' },
      { label: 'C', text: '176.58 kN' },
      { label: 'D', text: '441.45 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Left side carries the full 6 m depth over the 2 m width.',
      formulas: ['F_L = \\gamma\\bar{h}A = 9.81(3.0)(6 \\times 2)'],
      steps: [
        'Step 1: Left depth $= 6\\ \\text{m}$; $\\bar{h} = 3\\ \\text{m}$; $A = 12\\ \\text{m}^2$.',
        'Step 2: $F_L = 9.81(3)(12)$.',
        'Step 3: $F_L = 353.16\\ \\text{kN}$.',
      ],
      finalAnswer: '353.16 kN (Option B)',
    },
  },

  // Item 36
  {
    id: 'hpge-may2015-q36',
    number: 36,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 3 (continued) – What is the force exerted by water on the right side of the gate?',
    options: [
      { label: 'A', text: '44.15 kN' },
      { label: 'B', text: '110.36 kN' },
      { label: 'C', text: '66.22 kN' },
      { label: 'D', text: '88.29 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Right side carries 3 m of water over the same 2 m width.',
      formulas: ['F_R = \\gamma\\bar{h}A = 9.81(1.5)(3 \\times 2)'],
      steps: [
        'Step 1: Right depth $= 3\\ \\text{m}$; $\\bar{h} = 1.5\\ \\text{m}$; $A = 6\\ \\text{m}^2$.',
        'Step 2: $F_R = 9.81(1.5)(6)$.',
        'Step 3: $F_R = 88.29\\ \\text{kN}$.',
      ],
      finalAnswer: '88.29 kN (Option D)',
    },
  },

  // Item 37
  {
    id: 'hpge-may2015-q37',
    number: 37,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Plane Surface',
    text: 'Situation 3 (continued) – What horizontal force at B is required to turn the gate about the hinge?',
    options: [
      { label: 'A', text: '73.58 kN' },
      { label: 'B', text: '29.43 kN·m' },
      { label: 'C', text: '44.15 kN' },
      { label: 'D', text: '58.86 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Balance the moments of the two water forces about the hinge at G, then divide by the 3 m lever arm to B.',
      formulas: [
        'M_L = 353.16(4 - 3) = 353.16\\ \\text{kN}\\cdot\\text{m}',
        'M_R = 88.29(2) = 176.58\\ \\text{kN}\\cdot\\text{m}',
        'P_B(3) = M_L - M_R',
      ],
      steps: [
        'Step 1: The hinge G is 3 m above the base. The left force acts at $2(6)/3 = 4\\ \\text{m}$ below the left water surface, i.e. 1 m below G.',
        'Step 2: $M_L = 353.16(1) = 353.16\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 3: The right force acts at $2(3)/3 = 2\\ \\text{m}$ below the right water surface, i.e. 2 m below G.',
        'Step 4: $M_R = 88.29(2) = 176.58\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 5: Net moment to be resisted $= 353.16 - 176.58 = 176.58\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 6: The force at B is 3 m above the hinge: $P_B = 176.58/3 = 58.86\\ \\text{kN}$.',
      ],
      finalAnswer: '58.86 kN (Option D)',
    },
  },

  // Item 38
  {
    id: 'hpge-may2015-q38',
    number: 38,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Dams and Retaining Walls',
    text: 'Situation 4 – For the concrete gravity dam shown, B = 4.20 m, b = 0.60 m, H = 7 m, and h = 6 m. Unit weight of concrete is 24 kN/m³. Considering 1-m length of dam, calculate the following: The total force exerted by water on the dam.',
    figureSvg: hpgeMay2015Figure(
      4,
      'Figure 2: Concrete gravity dam section, base B = 4.20 m, crest b = 0.60 m, height H = 7 m, impounded water depth h = 6 m.',
    ),
    figureCaption:
      'Figure 2: Gravity dam section with base B, crest b, height H and water depth h (Situation 4).',
    options: [
      { label: 'A', text: '240.35 kN' },
      { label: 'B', text: '176.58 kN' },
      { label: 'C', text: '196.42 kN' },
      { label: 'D', text: '154.78 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The water acts on the vertical face over the 6 m depth, per metre of dam.',
      formulas: ['F = \\gamma\\bar{h}A = 9.81(3)(6 \\times 1)'],
      steps: [
        'Step 1: Water depth $h = 6\\ \\text{m}$; $\\bar{h} = 3\\ \\text{m}$; $A = 6\\ \\text{m}^2$ per metre.',
        'Step 2: $F = 9.81(3)(6)$.',
        'Step 3: $F = 176.58\\ \\text{kN}$.',
      ],
      finalAnswer: '176.58 kN (Option B)',
    },
  },

  // Item 39
  {
    id: 'hpge-may2015-q39',
    number: 39,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Dams and Retaining Walls',
    text: 'Situation 4 (continued) – The resisting moment.',
    options: [
      { label: 'A', text: '1119 kN-m' },
      { label: 'B', text: '1085 kN-m' },
      { label: 'C', text: '1265 kN-m' },
      { label: 'D', text: '956 kN-m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Split the trapezoidal section into a rectangle and a triangle, locate the centroid, then take the weight moment about the toe.',
      formulas: [
        'A = \\dfrac{0.60 + 4.20}{2}(7) = 16.8\\ \\text{m}^2, \\quad W = 16.8(24) = 403.2\\ \\text{kN}',
        '\\bar{x} = \\dfrac{4.2(0.30) + 12.6(1.80)}{16.8} = 1.425\\ \\text{m from the heel}',
        'M_R = W(B - \\bar{x}) = 403.2(4.20 - 1.425)',
      ],
      steps: [
        'Step 1: Section area $= (0.60 + 4.20)/2 \\times 7 = 16.8\\ \\text{m}^2$.',
        'Step 2: $W = 16.8(24) = 403.2\\ \\text{kN}$ per metre of dam.',
        'Step 3: Rectangle $0.60 \\times 7$ has area 4.2 at $x = 0.30$; triangle of base 3.60 has area 12.6 at $x = 0.60 + 1.20 = 1.80$.',
        'Step 4: $\\bar{x} = (4.2 \\times 0.30 + 12.6 \\times 1.80)/16.8 = 1.425\\ \\text{m}$ from the heel.',
        'Step 5: Resisting moment about the toe: $M_R = 403.2(4.20 - 1.425) = 1118.9\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '1119 kN·m (Option A)',
    },
  },

  // Item 40
  {
    id: 'hpge-may2015-q40',
    number: 40,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Dams and Retaining Walls',
    text: 'Situation 4 (continued) – The factor of safety against overturning.',
    options: [
      { label: 'A', text: '2.25' },
      { label: 'B', text: '3.17' },
      { label: 'C', text: '1.99' },
      { label: 'D', text: '3.65' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Divide the resisting moment by the overturning moment, which acts at one-third of the water depth above the base.',
      formulas: [
        'M_O = F\\dfrac{h}{3} = 176.58(2) = 353.16\\ \\text{kN}\\cdot\\text{m}',
        'FS = \\dfrac{M_R}{M_O}',
      ],
      steps: [
        'Step 1: The resultant water force acts $6/3 = 2\\ \\text{m}$ above the base.',
        'Step 2: $M_O = 176.58(2) = 353.16\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 3: $FS = 1118.9/353.16 = 3.168$.',
      ],
      finalAnswer: '3.17 (Option B)',
    },
  },

  // Item 41
  {
    id: 'hpge-may2015-q41',
    number: 41,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Curved Surface',
    text: 'Situation 5 – The 6-m-radius cylindrical gate shown in the figure is 10 m long into the paper. If θ = 60°, determine the following: The vertical component of the hydrostatic force.',
    figureSvg: hpgeMay2015Figure(
      5,
      'Figure 3: Cylindrical gate AB of radius R = 6 m subtending 60 degrees at the centre O, with water on the left up to the level of B.',
    ),
    figureCaption:
      'Figure 3: Cylindrical gate AB of radius R with centre O and θ = 60° (Situation 5).',
    options: [
      { label: 'A', text: '358.7 kN' },
      { label: 'B', text: '486.9 kN' },
      { label: 'C', text: '587.9 kN' },
      { label: 'D', text: '444.7 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The vertical component equals the weight of the water sitting above the curved surface.',
      formulas: [
        'A_{above} = R^2\\sin\\theta - \\int_{R\\cos\\theta}^{R}\\sqrt{R^2 - x^2}\\,dx = 4.533\\ \\text{m}^2',
        'F_V = \\gamma A_{above} L',
      ],
      steps: [
        'Step 1: Put O at the origin with A at $(R, 0)$ and B at $(R\\cos 60°, R\\sin 60°) = (3, 5.196)$.',
        'Step 2: The water surface is level with B, so the water above the arc spans $x = 3$ to $x = 6$.',
        'Step 3: Area above the arc $= 5.196(3) - \\int_3^6\\sqrt{36 - x^2}\\,dx = 15.588 - 11.055 = 4.533\\ \\text{m}^2$.',
        'Step 4: $F_V = 9.81(4.533)(10) = 444.7\\ \\text{kN}$, acting downward.',
      ],
      finalAnswer: '444.7 kN (Option D)',
    },
  },

  // Item 42
  {
    id: 'hpge-may2015-q42',
    number: 42,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Curved Surface',
    text: 'Situation 5 (continued) – The horizontal component of the hydrostatic force.',
    options: [
      { label: 'A', text: '1324.4 kN' },
      { label: 'B', text: '1456.2 kN' },
      { label: 'C', text: '1287.9 kN' },
      { label: 'D', text: '1056.2 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The horizontal component equals the force on the vertical projection of the curved surface.',
      formulas: [
        'h_{proj} = R\\sin 60° = 5.196\\ \\text{m}',
        'F_H = \\gamma\\bar{h}A_{proj} = 9.81(2.598)(5.196 \\times 10)',
      ],
      steps: [
        'Step 1: Vertical projection height $= 6\\sin 60° = 5.196\\ \\text{m}$; projected area $= 51.96\\ \\text{m}^2$.',
        'Step 2: The top of the projection is at the water surface, so $\\bar{h} = 5.196/2 = 2.598\\ \\text{m}$.',
        'Step 3: $F_H = 9.81(2.598)(51.96) = 1324.3\\ \\text{kN}$.',
      ],
      finalAnswer: '1324.4 kN (Option A)',
    },
  },

  // Item 43
  {
    id: 'hpge-may2015-q43',
    number: 43,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Hydrostatic Force on Curved Surface',
    text: 'Situation 5 (continued) – The location (from point O) of the vertical component of the hydrostatic force.',
    options: [
      { label: 'A', text: '4.87 m' },
      { label: 'B', text: '4.52 m' },
      { label: 'C', text: '5.16 m' },
      { label: 'D', text: '5.54 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The resultant on a circular surface passes through the centre O, so the two components share the same moment about O.',
      formulas: [
        'F_V x = F_H\\dfrac{h_{proj}}{3}',
        'x = \\dfrac{1324.3(5.196/3)}{444.7}',
      ],
      steps: [
        'Step 1: Every element of hydrostatic force on a circular arc is normal to the arc, hence passes through O.',
        'Step 2: Therefore $F_V x = F_H (h_{proj}/3)$ with $h_{proj}/3 = 1.732\\ \\text{m}$.',
        'Step 3: $x = 1324.3(1.732)/444.7$.',
        'Step 4: $x = 5.158\\ \\text{m}$ from O.',
      ],
      finalAnswer: '5.16 m (Option C)',
    },
  },

  // Item 44
  {
    id: 'hpge-may2015-q44',
    number: 44,
    pageNumber: 42,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Relative Equilibrium (Rotation)',
    text: 'Situation 6 – An open cylindrical tank 1.70 m in diameter and 2.10 m tall is two-thirds full of water. The tank is rotated about its own vertical axis at the rate of 90 rpm. What is the height of the paraboloid?',
    options: [
      { label: 'A', text: '2.58 m' },
      { label: 'B', text: '2.87 m' },
      { label: 'C', text: '3.27 m' },
      { label: 'D', text: '3.65 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The free surface is a paraboloid whose rise at the wall is ω²R²/2g.',
      formulas: [
        '\\omega = \\dfrac{2\\pi N}{60} = \\dfrac{2\\pi(90)}{60} = 9.425\\ \\text{rad/s}',
        'y = \\dfrac{\\omega^2 R^2}{2g}',
      ],
      steps: [
        'Step 1: $\\omega = 9.425\\ \\text{rad/s}$; $R = 1.70/2 = 0.85\\ \\text{m}$.',
        'Step 2: $y = \\dfrac{9.425^2(0.85)^2}{2(9.81)}$.',
        'Step 3: $y = \\dfrac{88.83(0.7225)}{19.62} = 3.271\\ \\text{m}$.',
      ],
      finalAnswer: '3.27 m (Option C)',
    },
  },

  // Item 45
  {
    id: 'hpge-may2015-q45',
    number: 45,
    pageNumber: 43,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Relative Equilibrium (Rotation)',
    text: 'Situation 6 (continued) – Determine the volume of water spilled.',
    options: [
      { label: 'A', text: '1.524 m³' },
      { label: 'B', text: '1.241 m³' },
      { label: 'C', text: '1.854 m³' },
      { label: 'D', text: '1.648 m³' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Whatever leaves the tank is exactly the increase in the air space, so compare the air volume before and after rotation.',
      formulas: [
        'V_{air,1} = \\pi R^2 (H - h) = \\pi(0.85)^2(2.10 - 1.40) = 1.5889\\ \\text{m}^3',
        'V_{air,2} = \\dfrac{\\pi R^2}{2y}\\left(y_2^2 - y_1^2\\right)',
        'V_{spilled} = V_{air,2} - V_{air,1}',
      ],
      steps: [
        'Step 1: Initial water depth $= \\tfrac{2}{3}(2.10) = 1.40\\ \\text{m}$, so the initial air space is $\\pi(0.7225)(0.70) = 1.5889\\ \\text{m}^3$.',
        'Step 2: The paraboloid height is $y = 3.271\\ \\text{m}$, greater than the tank height, so the vertex sits $3.271 - 2.10 = 1.171\\ \\text{m}$ below the floor.',
        'Step 3: The air space is the paraboloid measured from $y_1 = 1.171\\ \\text{m}$ up to $y_2 = 3.271\\ \\text{m}$.',
        'Step 4: $V_{air,2} = \\dfrac{\\pi(0.7225)}{2(3.271)}\\left(3.271^2 - 1.171^2\\right) = 0.34696(9.328) = 3.2365\\ \\text{m}^3$.',
        'Step 5: $V_{spilled} = 3.2365 - 1.5889 = 1.648\\ \\text{m}^3$.',
      ],
      finalAnswer: '1.648 m³ (Option D)',
    },
  },
];
