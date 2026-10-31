import { Question } from '../../../types/exam';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART3: Question[] = [
  // Item 31
  {
    id: 'psad-may2015-q31',
    number: 31,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 9 (continued) – If the wall is simply supported at the top, compute the maximum shear in the wall.',
    options: [
      { label: 'A', text: '65.375 kN' },
      { label: 'B', text: '65.075 kN' },
      { label: 'C', text: '69.875 kN' },
      { label: 'D', text: '66.825 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Maximum shear is at the base, where the full pressure resultant minus the prop reaction passes.',
      formulas: ['V_A = 3(3) + \\tfrac{1}{2}(3)(51) - 18.675'],
      steps: [
        'Step 1: Rectangular part of the pressure: $3(3) = 9\\ \\text{kN}$.',
        'Step 2: Triangular part above the base value: $\\tfrac{1}{2}(3)(51) = 76.5\\ \\text{kN}$.',
        'Step 3: $V_A = 9 + 76.5 - 18.675 = 66.825\\ \\text{kN}$.',
      ],
      finalAnswer: '66.825 kN (Option D)',
    },
  },

  // Item 32
  {
    id: 'psad-may2015-q32',
    number: 32,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Timber Design - Truss Members',
    text: 'Situation 10 – The truss shown is made from Guijo. The truss supports a vertical load P = 20 kN at C. Given the following allowable stresses for the grade of wood: Compression parallel to grain = 13.2 MPa; Compression perpendicular to grain = 4.3 MPa; Shear parallel to grain = 2.32 MPa. What is the axial stress of member AC?',
    figureSvg: psadMay2015Figure(
      10,
      'Figure 10: Roof truss with apex at C, members 150 mm x 100 mm, 30 degree slopes, and a detail of the member end showing the bearing dimensions x and y.',
    ),
    figureCaption:
      'Figure 10: Guijo roof truss carrying P = 20 kN at C, with the member-end bearing detail (Situation 10).',
    options: [
      { label: 'A', text: '1.33 MPa' },
      { label: 'B', text: '1.25 MPa' },
      { label: 'C', text: '1.15 MPa' },
      { label: 'D', text: '1 MPa' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Symmetry splits the apex load between the two top chords; the stress follows from the gross area.',
      formulas: ['\\sum F_y = 0:\\ 2F_{AC}\\sin 30° = P'],
      steps: [
        'Step 1: By symmetry $F_{AC} = F_{BC}$.',
        'Step 2: $2F_{AC}\\sin 30° = 20 \\Rightarrow F_{AC} = 20\\ \\text{kN}$.',
        'Step 3: Area $= 100(150) = 15{,}000\\ \\text{mm}^2$.',
        'Step 4: $f_{AC} = 20{,}000/15{,}000 = 1.33\\ \\text{MPa}$.',
      ],
      finalAnswer: '1.33 MPa (Option A)',
    },
  },

  // Item 33
  {
    id: 'psad-may2015-q33',
    number: 33,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Timber Design - Truss Members',
    text: 'Situation 10 (continued) – What is the minimum value of x?',
    options: [
      { label: 'A', text: '100 mm' },
      { label: 'B', text: '50 mm' },
      { label: 'C', text: '75 mm' },
      { label: 'D', text: '125 mm' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'x is the length over which shear parallel to the grain is checked at the member end.',
      formulas: ['F_v A_v = F_{AC}\\cos 30°'],
      steps: [
        'Step 1: The horizontal component at the joint is $20{,}000\\cos 30° = 17{,}320\\ \\text{N}$.',
        'Step 2: Shear area $= 100x$.',
        'Step 3: $2.32(100x) = 17{,}320 \\Rightarrow x = 74.66\\ \\text{mm}$.',
        'Step 4: Round up to the next 25 mm: $x = 75\\ \\text{mm}$.',
      ],
      finalAnswer: '75 mm (Option C)',
    },
  },

  // Item 34
  {
    id: 'psad-may2015-q34',
    number: 34,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Timber Design - Truss Members',
    text: 'Situation 10 (continued) – What is the minimum value of y?',
    options: [
      { label: 'A', text: '20 mm' },
      { label: 'B', text: '25 mm' },
      { label: 'C', text: '15 mm' },
      { label: 'D', text: '30 mm' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'y is set by the allowable compression at 30° to the grain, using the Hankinson formula.',
      formulas: [
        'F_c = \\dfrac{pq}{p\\sin^2\\theta + q\\cos^2\\theta}',
        'F_c = \\dfrac{13.2(4.3)}{13.2\\sin^2 30° + 4.3\\cos^2 30°} = 8.699\\ \\text{MPa}',
      ],
      steps: [
        'Step 1: $p = 13.2\\ \\text{MPa}$ parallel, $q = 4.3\\ \\text{MPa}$ perpendicular, $\\theta = 30°$.',
        'Step 2: Denominator $= 13.2(0.25) + 4.3(0.75) = 3.3 + 3.225 = 6.525$.',
        'Step 3: $F_c = 56.76/6.525 = 8.699\\ \\text{MPa}$.',
        'Step 4: $8.699(100y) = 17{,}320 \\Rightarrow y = 19.91\\ \\text{mm}$, use $20\\ \\text{mm}$.',
      ],
      finalAnswer: '20 mm (Option A)',
    },
  },

  // Item 35
  {
    id: 'psad-may2015-q35',
    number: 35,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Axially Loaded Column',
    text: 'Situation 11 – A steel pipe column resting on a steel base plate concrete pedestal supports an axial load of P = 1200 kN, as shown. The column has an unbraced length of 3.5 m, outside diameter of D = 280 mm and can be assumed hinged at both ends. The allowable compressive strength of column is 60 MPa and the allowable bearing strength of concrete is 9.6 MPa. Which of the following gives the minimum thickness of the column?',
    figureSvg: psadMay2015Figure(
      11,
      'Figure 11: Steel pipe column of length L and outside diameter D on a square base plate over a concrete pedestal, with a circular detail defining the wall thickness t and inner diameter d.',
    ),
    figureCaption:
      'Figure 11: Pipe column on a base plate over a concrete pedestal (Situation 11).',
    options: [
      { label: 'A', text: '32 mm' },
      { label: 'B', text: '28 mm' },
      { label: 'C', text: '30 mm' },
      { label: 'D', text: '25 mm' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Size the steel annulus so the axial stress reaches the 60 MPa allowable, then convert the required area into a wall thickness.',
      formulas: [
        'P = F_c A_c',
        'A_c = \\dfrac{\\pi}{4}(D^2 - d^2)',
      ],
      steps: [
        'Step 1: $1200 \\times 10^3 = 60 A_c \\Rightarrow A_c = 20{,}000\\ \\text{mm}^2$.',
        'Step 2: $20{,}000 = (\\pi/4)(280^2 - d^2) \\Rightarrow 280^2 - d^2 = 25{,}464.8$.',
        'Step 3: $d = \\sqrt{78{,}400 - 25{,}464.8} = 230.077\\ \\text{mm}$.',
        'Step 4: $t = (280 - 230.077)/2 = 24.96\\ \\text{mm}$, use $25\\ \\text{mm}$.',
      ],
      finalAnswer: '25 mm (Option D)',
    },
  },

  // Item 36
  {
    id: 'psad-may2015-q36',
    number: 36,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Base Plate',
    text: 'Situation 11 (continued) – Which of the following gives the minimum diameter of the base plate?',
    options: [
      { label: 'A', text: '500 mm' },
      { label: 'B', text: '400 mm' },
      { label: 'C', text: '450 mm' },
      { label: 'D', text: '420 mm' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The plate area must keep the concrete bearing stress at or below 9.6 MPa.',
      formulas: ['P = F_p A_p = 9.6\\left(\\dfrac{\\pi}{4}D_p^2\\right)'],
      steps: [
        'Step 1: $1200 \\times 10^3 = 9.6\\left(\\dfrac{\\pi}{4}\\right)D_p^2$.',
        'Step 2: $D_p^2 = 159{,}154.9$.',
        'Step 3: $D_p = 398.94\\ \\text{mm}$, use $400\\ \\text{mm}$.',
      ],
      finalAnswer: '400 mm (Option B)',
    },
  },

  // Item 37
  {
    id: 'psad-may2015-q37',
    number: 37,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Axially Loaded Column',
    text: 'Situation 11 (continued) – If the pipe wall is 20 mm thick, which of the following gives the effective slenderness ratio of the column.',
    options: [
      { label: 'A', text: '35.21' },
      { label: 'B', text: '37.96' },
      { label: 'C', text: '38.64' },
      { label: 'D', text: '32.36' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'With t = 20 mm the inner diameter is 240 mm; the slenderness ratio is KL/r with K = 1 for hinged ends.',
      formulas: [
        'I = \\dfrac{\\pi}{64}(D^4 - d^4),\\quad A = \\dfrac{\\pi}{4}(D^2 - d^2),\\quad r = \\sqrt{I/A}',
        '\\dfrac{KL}{r} = \\dfrac{1(3500)}{92.195}',
      ],
      steps: [
        'Step 1: $d = 280 - 2(20) = 240\\ \\text{mm}$.',
        'Step 2: $I = (\\pi/64)(280^4 - 240^4) = 138.858 \\times 10^6\\ \\text{mm}^4$.',
        'Step 3: $A = (\\pi/4)(280^2 - 240^2) = 16{,}336.28\\ \\text{mm}^2$.',
        'Step 4: $r = \\sqrt{138.858 \\times 10^6/16{,}336.28} = 92.195\\ \\text{mm}$.',
        'Step 5: $KL/r = 3500/92.195 = 37.96$.',
      ],
      finalAnswer: '37.96 (Option B)',
    },
  },

  // Item 38
  {
    id: 'psad-may2015-q38',
    number: 38,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Mohr\u2019s Circle',
    text: 'Situation 12 – The stresses on an element is represented by the Moh\u2019r Circle shown in the figure. Determine the following: The maximum normal stress.',
    figureSvg: psadMay2015Figure(
      12,
      'Figure 12: Mohr\u2019s circle with centre at 65 MPa, a stress point at 30 MPa and 19 MPa, and a diameter of 100 MPa across the sigma axis.',
    ),
    figureCaption:
      'Figure 12: Mohr\u2019s circle for the element, all units in MPa (Situation 12).',
    options: [
      { label: 'A', text: '105.511 MPa' },
      { label: 'B', text: '114.283 MPa' },
      { label: 'C', text: '104.825 MPa' },
      { label: 'D', text: '104.283 MPa' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The circle centre sits at the average normal stress and its radius comes from the stress point coordinates.',
      formulas: [
        'C = \\dfrac{\\sigma_x + \\sigma_y}{2} = \\dfrac{30 + 100}{2} = 65\\ \\text{MPa}',
        'R = \\sqrt{35^2 + 19^2} = 39.825\\ \\text{MPa}',
      ],
      steps: [
        'Step 1: From the figure $\\sigma_x = 30\\ \\text{MPa}$, $\\sigma_y = 100\\ \\text{MPa}$, $\\tau_{xy} = 19\\ \\text{MPa}$.',
        'Step 2: Centre $C = 65\\ \\text{MPa}$; horizontal leg $= 65 - 30 = 35\\ \\text{MPa}$.',
        'Step 3: $R = \\sqrt{35^2 + 19^2} = 39.825\\ \\text{MPa}$.',
        'Step 4: $\\sigma_{max} = C + R = 65 + 39.825 = 104.825\\ \\text{MPa}$.',
      ],
      finalAnswer: '104.825 MPa (Option C)',
    },
  },

  // Item 39
  {
    id: 'psad-may2015-q39',
    number: 39,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Mohr\u2019s Circle',
    text: 'Situation 12 (continued) – The minimum normal stress.',
    options: [
      { label: 'A', text: '25.175 MPa' },
      { label: 'B', text: '15.717 MPa' },
      { label: 'C', text: '25.717 MPa' },
      { label: 'D', text: '34.409 MPa' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The minimum normal stress is the centre minus the radius.',
      formulas: ['\\sigma_{min} = C - R = 65 - 39.825'],
      steps: [
        'Step 1: $C = 65\\ \\text{MPa}$, $R = 39.825\\ \\text{MPa}$.',
        'Step 2: $\\sigma_{min} = 65 - 39.825 = 25.175\\ \\text{MPa}$.',
      ],
      finalAnswer: '25.175 MPa (Option A)',
    },
  },

  // Item 40
  {
    id: 'psad-may2015-q40',
    number: 40,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Mohr\u2019s Circle',
    text: 'Situation 12 (continued) – The maximum shearing stress.',
    options: [
      { label: 'A', text: '46.235 MPa' },
      { label: 'B', text: '35.511 MPa' },
      { label: 'C', text: '44.283 MPa' },
      { label: 'D', text: '39.825 MPa' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'On Mohr\u2019s circle the maximum shear stress is simply the radius.',
      formulas: ['\\tau_{max} = R = 39.825\\ \\text{MPa}'],
      steps: [
        'Step 1: The vertical semi-axis of the circle equals its radius.',
        'Step 2: $\\tau_{max} = R = 39.825\\ \\text{MPa}$.',
      ],
      finalAnswer: '39.825 MPa (Option D)',
    },
  },

  // Item 41
  {
    id: 'psad-may2015-q41',
    number: 41,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Plane Stress',
    text: 'Situation 13 – An element in plane stress is subjected to stresses as shown in the figure. All units are in MPa. What is the magnitude of normal stress $\\sigma_x$?',
    figureSvg: psadMay2015Figure(
      13,
      'Figure 13: Plane stress element with sigma-x, sigma-y and tau-xy, beside its Mohr\u2019s circle with stress points A and B and a diameter of 90 MPa.',
    ),
    figureCaption:
      'Figure 13: Plane stress element and its Mohr\u2019s circle, all units in MPa (Situation 13).',
    options: [
      { label: 'A', text: '60' },
      { label: 'B', text: '90' },
      { label: 'C', text: '30' },
      { label: 'D', text: '50' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Reading the circle: the two normal stresses are the ends of the horizontal diameter, and the radius gives the shear.',
      formulas: [
        'C = \\dfrac{\\sigma_x + \\sigma_y}{2},\\quad R = \\sqrt{\\left(\\dfrac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}',
      ],
      steps: [
        'Step 1: On the circle the horizontal leg is $(\\sigma_x - \\sigma_y)/2 = 30\\ \\text{MPa}$ and the vertical leg is $\\tau_{xy} = 40\\ \\text{MPa}$.',
        'Step 2: $R = \\sqrt{30^2 + 40^2} = 50\\ \\text{MPa}$, and the centre is $C = \\sigma_x - 30$.',
        'Step 3: Reading the element, the larger normal stress is $\\sigma_x = 90\\ \\text{MPa}$ (so $C = 60$ and $\\sigma_y = 30$).',
      ],
      finalAnswer: '90 MPa (Option B)',
    },
  },

  // Item 42
  {
    id: 'psad-may2015-q42',
    number: 42,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Plane Stress',
    text: 'Situation 13 (continued) – What is the magnitude of normal stress $\\sigma_y$?',
    options: [
      { label: 'A', text: '90' },
      { label: 'B', text: '50' },
      { label: 'C', text: '60' },
      { label: 'D', text: '30' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The minor principal stress read off the circle is the smaller normal stress on the element.',
      steps: [
        'Step 1: Centre $C = 60\\ \\text{MPa}$ and half-difference $= 30\\ \\text{MPa}$.',
        'Step 2: $\\sigma_y = C - 30 = 60 - 30 = 30\\ \\text{MPa}$.',
      ],
      finalAnswer: '30 MPa (Option D)',
    },
  },

  // Item 43
  {
    id: 'psad-may2015-q43',
    number: 43,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Plane Stress',
    text: 'Situation 13 (continued) – What is the maximum shearing stress?',
    options: [
      { label: 'A', text: '50' },
      { label: 'B', text: '30' },
      { label: 'C', text: '90' },
      { label: 'D', text: '60' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The maximum shear stress equals the radius of the Mohr circle.',
      formulas: ['\\tau_{max} = \\sqrt{30^2 + 40^2} = 50\\ \\text{MPa}'],
      steps: [
        'Step 1: Horizontal leg $= (90 - 30)/2 = 30\\ \\text{MPa}$; vertical leg $= \\tau_{xy} = 40\\ \\text{MPa}$.',
        'Step 2: $\\tau_{max} = \\sqrt{30^2 + 40^2} = 50\\ \\text{MPa}$.',
      ],
      finalAnswer: '50 MPa (Option A)',
    },
  },

  // Item 44
  {
    id: 'psad-may2015-q44',
    number: 44,
    pageNumber: 81,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Bolted Connections',
    text: 'Situation 14 – Two channels are joined together by eight 25-mm-diameter bolts in single shear as shown in the figure. The bolts spacing are $x_1$ = 50 mm and $y_1$ = 60 mm. The steel has $F_y$ = 250 MPa and $F_u$ = 400 MPa. Channel properties: Area = 3644 mm², Web thickness = 12 mm. Allowable stresses of plate: Tension on gross area = 0.60 $F_y$; Tension on net area = 0.50 $F_u$; Shear on net area = 0.30 $F_u$; Bearing on projected area = 1.20 $F_u$. Allowable shearing stress of bolt = 90 MPa; Bolt hole diameter = 27 mm. Find P based on bolt shear.',
    figureSvg: psadMay2015Figure(
      14,
      'Figure 14: Two channels spliced with eight 25 mm bolts in single shear, with bolt spacings x1 to x4 and y1, y2, plus the channel cross-section showing the web thickness.',
    ),
    figureCaption:
      'Figure 14: Bolted channel splice, eight 25 mm bolts in single shear (Situation 14).',
    options: [
      { label: 'A', text: '336 kN' },
      { label: 'B', text: '353 kN' },
      { label: 'C', text: '368 kN' },
      { label: 'D', text: '385 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Eight bolts in single shear, each with the 25 mm nominal diameter resisting 90 MPa.',
      formulas: ['P = F_v A_v = 90\\left(\\dfrac{\\pi}{4}\\right)(25)^2(8)'],
      steps: [
        'Step 1: Bolt area $= (\\pi/4)(25)^2 = 490.87\\ \\text{mm}^2$.',
        'Step 2: $P = 90(490.87)(8) = 353{,}400\\ \\text{N}$.',
        'Step 3: $P = 353.4\\ \\text{kN}$.',
      ],
      finalAnswer: '353 kN (Option B)',
    },
  },

  // Item 45
  {
    id: 'psad-may2015-q45',
    number: 45,
    pageNumber: 81,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Bolted Connections',
    text: 'Situation 14 (continued) – Find P based on bearing on plate.',
    options: [
      { label: 'A', text: '1265 kN' },
      { label: 'B', text: '1063 kN' },
      { label: 'C', text: '956 kN' },
      { label: 'D', text: '1152 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Bearing is checked on the projected area, bolt diameter times plate thickness, at the 1.20 Fu allowable.',
      formulas: ['P = F_p A_p = 480(25 \\times 12)(8)'],
      steps: [
        'Step 1: $F_p = 1.20F_u = 1.20(400) = 480\\ \\text{MPa}$.',
        'Step 2: Projected area per bolt $= 25(12) = 300\\ \\text{mm}^2$.',
        'Step 3: $P = 480(300)(8) = 1{,}152{,}000\\ \\text{N} = 1152\\ \\text{kN}$.',
      ],
      finalAnswer: '1152 kN (Option D)',
    },
  },
];
