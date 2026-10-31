import { Question } from '../../../types/exam';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART5: Question[] = [
  // Item 61
  {
    id: 'psad-may2015-q61',
    number: 61,
    pageNumber: 84,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Doubly Reinforced Beam',
    text: 'Situation 19 (continued) – If h = 500 mm, calculate the nominal moment strength of the beam.',
    options: [
      { label: 'A', text: '307 kN-m' },
      { label: 'B', text: '404 kN-m' },
      { label: 'C', text: '209 kN-m' },
      { label: 'D', text: '436 kN-m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Deepening the beam raises d to 435 mm but leaves the neutral axis where it is, because the compression-steel term controls the strain equation.',
      formulas: [
        '2513(415) = 0.85(28)(0.85c)(320) + 2463(600)\\dfrac{c - 60}{c}',
        'M_n = C_c(d - a/2) + C\u2019_s(d - d\u2019)',
      ],
      steps: [
        'Step 1: $d = 500 - 65 = 435\\ \\text{mm}$.',
        'Step 2: Solving the equilibrium equation gives $c = 88.17\\ \\text{mm}$ again, so $a = 74.95\\ \\text{mm}$.',
        'Step 3: Check: $f\u2019_s = 191.72\\ \\text{MPa} < f_y$; $f_s = 2360\\ \\text{MPa} > f_y$ — both assumptions hold.',
        'Step 4: $M_n = 0.85(28)(74.95)(320)(435 - 37.475) + 2463(191.72)(435 - 60)$.',
        'Step 5: $M_n = 226.9 + 177.1 = 403.99\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '404 kN-m (Option B)',
    },
  },

  // Item 62
  {
    id: 'psad-may2015-q62',
    number: 62,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Prestressed Concrete - Basic Stresses',
    text: 'Situation 20 – A prestressed concrete beam is 250 mm wide by 450 mm deep. The initial prestressing force is 600 kN. Assume that there is a loss of prestress of 15% at service loads. What is the final compressive stress in the beam if the prestressing force is applied at the centroid of the beam?',
    options: [
      { label: 'A', text: '-5.33 MPa' },
      { label: 'B', text: '-4.53 MPa' },
      { label: 'C', text: '-4.8 MPa' },
      { label: 'D', text: '-5.65 MPa' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'At the centroid there is no bending component, so the stress is purely axial.',
      formulas: ['P_e = 600 - 0.15(600) = 510\\ \\text{kN}'],
      steps: [
        'Step 1: Effective prestress $P_e = 0.85(600) = 510\\ \\text{kN}$.',
        'Step 2: $A = 250(450) = 112{,}500\\ \\text{mm}^2$.',
        'Step 3: $f = -510{,}000/112{,}500 = -4.533\\ \\text{MPa}$ (compression).',
      ],
      finalAnswer: '-4.53 MPa (Option B)',
    },
  },

  // Item 63
  {
    id: 'psad-may2015-q63',
    number: 63,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Prestressed Concrete - Basic Stresses',
    text: 'Situation 20 (continued) – What is the final compressive stress in the beam if the prestressing force is applied at 100 mm below the centroid of the beam?',
    options: [
      { label: 'A', text: '-1.51 MPa' },
      { label: 'B', text: '-12.44 MPa' },
      { label: 'C', text: '-1.2 MPa' },
      { label: 'D', text: '-10.58 MPa' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Eccentric prestress adds a bending term; the largest compression is at the bottom fibre, on the same side as the tendon.',
      formulas: ['f = -\\dfrac{P_e}{A} - \\dfrac{6P_e e}{bh^2}'],
      steps: [
        'Step 1: Axial part $= -510{,}000/112{,}500 = -4.533\\ \\text{MPa}$.',
        'Step 2: Bending part $= 6(510{,}000)(100)/[250(450)^2] = 6.044\\ \\text{MPa}$.',
        'Step 3: Bottom fibre $= -4.533 - 6.044 = -10.578\\ \\text{MPa}$ (governing compression).',
        'Step 4: Top fibre would be $-4.533 + 6.044 = +1.51\\ \\text{MPa}$ (tension).',
      ],
      finalAnswer: '-10.58 MPa (Option D)',
    },
  },

  // Item 64
  {
    id: 'psad-may2015-q64',
    number: 64,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Prestressed Concrete - Basic Stresses',
    text: 'Situation 20 (continued) – What is the maximum eccentricity at which the prestressing force can be applied without producing tensile stress in the beam?',
    options: [
      { label: 'A', text: '100 mm' },
      { label: 'B', text: '125 mm' },
      { label: 'C', text: '150 mm' },
      { label: 'D', text: '75 mm' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Zero stress at the far fibre sets the eccentricity equal to the kern distance, h/6 for a rectangle.',
      formulas: ['e = \\dfrac{h}{6} = \\dfrac{450}{6}'],
      steps: [
        'Step 1: Set $f = -P/A + 6Pe/bh^2 = 0$ at the opposite fibre.',
        'Step 2: $e = h/6 = 450/6$.',
        'Step 3: $e = 75\\ \\text{mm}$.',
      ],
      finalAnswer: '75 mm (Option D)',
    },
  },

  // Item 65
  {
    id: 'psad-may2015-q65',
    number: 65,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Shear Design',
    text: 'Situation 21 – Given the following data for the beam shown in figure: Beam Dimension: Beam width, $b_w$ = 260 mm; Overall depth, h = 600 mm; Effective depth, d = 540 mm; Beam length, L = 7.5 m. $f\u2019_c$ = 21 MPa (normal weight concrete); $f_y$ = 415 MPa; $f_{yt}$ = 275 MPa; Stirrup diameter, $d_h$ = 10 mm; U-stirrup. Loads (factored): $P_u$ = 147 kN; $w_u$ = 19.6 kN/m (including beam weight). Calculate the spacing of stirrups at critical section near the support.',
    figureSvg: psadMay2015Figure(
      21,
      'Figure 21: Beam of span L with two point loads P1 and P2 at the third points, a uniform factored load wu, and end moments M1 and M2.',
    ),
    figureCaption:
      'Figure 21: Beam with third-point loads and uniform load (Situation 21).',
    options: [
      { label: 'A', text: '124 mm' },
      { label: 'B', text: '112 mm' },
      { label: 'C', text: '148 mm' },
      { label: 'D', text: '136 mm' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Shear at the critical section (a distance d from the support) sets the required steel; the 10 mm U-stirrup gives Av = 157.1 mm².',
      formulas: [
        'R_A = \\tfrac{1}{2}(2P_u + w_u L) = 220.5\\ \\text{kN}',
        'V_u = R_A - w_u d = 209.92\\ \\text{kN}',
        'V_c = 0.17\\sqrt{f\u2019_c}\\,b_w d = 109.377\\ \\text{kN}',
        's = \\dfrac{A_v f_{yt} d}{V_s}',
      ],
      steps: [
        'Step 1: $R_A = \\tfrac{1}{2}[2(147) + 19.6(7.5)] = 220.5\\ \\text{kN}$.',
        'Step 2: $V_u = 220.5 - 19.6(0.54) = 209.92\\ \\text{kN}$; $V_n = 209.92/0.75 = 279.89\\ \\text{kN}$.',
        'Step 3: $A_v = 2(\\pi/4)(10)^2 = 157.1\\ \\text{mm}^2$.',
        'Step 4: $V_c = 0.17(1)\\sqrt{21}(260)(540) = 109.377\\ \\text{kN}$; $V_s = 279.89 - 109.377 = 170.51\\ \\text{kN}$.',
        'Step 5: $s = 157.1(275)(540)/170{,}510 = 136.8\\ \\text{mm}$, within the $d/2 = 270\\ \\text{mm}$ limit.',
      ],
      finalAnswer: '136 mm (Option D)',
    },
  },

  // Item 66
  {
    id: 'psad-may2015-q66',
    number: 66,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Shear Design',
    text: 'Situation 21 (continued) – Calculate the spacing of stirrups at the third point of the beam.',
    options: [
      { label: 'A', text: '165 mm' },
      { label: 'B', text: '195 mm' },
      { label: 'C', text: '154 mm' },
      { label: 'D', text: '182 mm' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'At the third point the shear has dropped by wL/3, and the stirrup spacing opens up accordingly.',
      formulas: [
        'V_{u1} = R_A - w_u(L/3) = 171.5\\ \\text{kN}',
        's = \\dfrac{A_v f_{yt} d}{V_s}',
      ],
      steps: [
        'Step 1: $V_{u1} = 220.5 - 19.6(7.5/3) = 171.5\\ \\text{kN}$ (the load just beyond the section reduces it to 24.5 kN, so 171.5 kN governs).',
        'Step 2: $V_n = 171.5/0.75 = 228.67\\ \\text{kN}$.',
        'Step 3: $V_s = 228.67 - 109.377 = 119.29\\ \\text{kN}$.',
        'Step 4: $s = 157.1(275)(540)/119{,}290 = 195.5\\ \\text{mm}$.',
      ],
      finalAnswer: '195 mm (Option B)',
    },
  },

  // Item 67
  {
    id: 'psad-may2015-q67',
    number: 67,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Shear Design',
    text: 'Situation 21 (continued) – Calculate the spacing of stirrups at midspan.',
    options: [
      { label: 'A', text: '300 mm' },
      { label: 'B', text: '150 mm' },
      { label: 'C', text: '270 mm' },
      { label: 'D', text: '135 mm' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'At midspan the shear is below the concrete capacity, so only the maximum-spacing rule governs.',
      formulas: ['s_{max} = \\dfrac{d}{2}'],
      steps: [
        'Step 1: Near midspan $V_u$ falls below $\\phi V_c$, so the section needs no calculated steel.',
        'Step 2: The code maximum for a non-prestressed member is $d/2$.',
        'Step 3: $s_{max} = 540/2 = 270\\ \\text{mm}$.',
      ],
      finalAnswer: '270 mm (Option C)',
    },
  },

  // Item 68
  {
    id: 'psad-may2015-q68',
    number: 68,
    pageNumber: 87,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Shear',
    text: 'Situation 22 – The column shown in the figure is subjected to 480 kN shear parallel to the short side. The nominal shear strength of concrete for shear parallel to the short side is 0.88 MPa. Use 2001 NSCP. Given the following data: b = 450 mm, h = 600 mm, $f\u2019_c$ = 27.5 MPa, $f_y$ = 415 MPa, $f_{yt}$ = 275 MPa. Calculate the nominal shear strength that must be provided by lateral reinforcement.',
    figureSvg: psadMay2015Figure(
      22,
      'Figure 22: Rectangular column section 450 mm by 600 mm with eight 28 mm longitudinal bars, 12 mm ties at 40 mm cover, and a 12 mm cross-tie.',
    ),
    figureCaption:
      'Figure 22: Column section with 28 mm longitudinal bars and 12 mm ties (Situations 22 and 23).',
    options: [
      { label: 'A', text: '362 kN' },
      { label: 'B', text: '372 kN' },
      { label: 'C', text: '346 kN' },
      { label: 'D', text: '387 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Shear parallel to the short side means the 600 mm face is the web; subtract the concrete contribution from the required nominal strength.',
      formulas: [
        'd = 450 - 66 = 384\\ \\text{mm}',
        'V_c = F_{vc}b_w d = 0.88(600)(384)',
        'V_s = V_n - V_c',
      ],
      steps: [
        'Step 1: $d\u2019 = 40 + 12 + \\tfrac{1}{2}(28) = 66\\ \\text{mm}$, so $d = 450 - 66 = 384\\ \\text{mm}$.',
        'Step 2: $V_c = 0.88(600)(384) = 202.752\\ \\text{kN}$.',
        'Step 3: $V_n = V_u/\\phi = 480/0.85 = 564.706\\ \\text{kN}$.',
        'Step 4: $V_s = 564.706 - 202.752 = 361.954\\ \\text{kN}$.',
      ],
      finalAnswer: '362 kN (Option A)',
    },
  },

  // Item 69
  {
    id: 'psad-may2015-q69',
    number: 69,
    pageNumber: 87,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Shear',
    text: 'Situation 22 (continued) – What is the required spacing of lateral reinforcement?',
    options: [
      { label: 'A', text: '140 mm' },
      { label: 'B', text: '130 mm' },
      { label: 'C', text: '110 mm' },
      { label: 'D', text: '120 mm' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Four legs of 12 mm tie resist the shear; the computed spacing is rounded down to the next 10 mm.',
      formulas: [
        'A_v = 4\\left(\\dfrac{\\pi}{4}\\right)(12)^2 = 452.4\\ \\text{mm}^2',
        's = \\dfrac{A_v f_{yt} d}{V_s}',
      ],
      steps: [
        'Step 1: $A_v = 4(113.1) = 452.4\\ \\text{mm}^2$.',
        'Step 2: $s = 452.4(275)(384)/361{,}954 = 132.0\\ \\text{mm}$.',
        'Step 3: Use $130\\ \\text{mm}$ to stay within the requirement.',
      ],
      finalAnswer: '130 mm (Option B)',
    },
  },

  // Item 70
  {
    id: 'psad-may2015-q70',
    number: 70,
    pageNumber: 88,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Shear',
    text: 'Situation 22 (continued) – If the spacing of lateral reinforcements is 100 mm, what is the ultimate shear strength of the column for shear parallel to the short side?',
    options: [
      { label: 'A', text: '570 kN' },
      { label: 'B', text: '562 kN' },
      { label: 'C', text: '578 kN' },
      { label: 'D', text: '596 kN' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With a 100 mm pitch the steel contribution rises; add it to the concrete term and apply the 0.85 factor.',
      formulas: [
        'V_s = \\dfrac{A_v f_{yt} d}{s}',
        'V_u = \\phi(V_s + V_c)',
      ],
      steps: [
        'Step 1: $V_s = 452.4(275)(384)/100 = 477.734\\ \\text{kN}$.',
        'Step 2: $V_n = 477.734 + 202.752 = 680.486\\ \\text{kN}$.',
        'Step 3: $V_u = 0.85(680.486) = 578.4\\ \\text{kN}$.',
      ],
      finalAnswer: '578 kN (Option C)',
    },
  },

  // Item 71
  {
    id: 'psad-may2015-q71',
    number: 71,
    pageNumber: 88,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Seismic Detailing',
    text: 'Situation 23 – The lateral reinforcement of the column shown in the figure (above) is to be designed based on the special provisions for seismic design. The column dimension is b = 450 mm and h = 600 mm. Concrete strength $f\u2019_c$ = 27.5 MPa, longitudinal steel strength $f_y$ = 415 MPa and lateral reinforcement steel strength $f_{yt}$ = 275 MPa. Which of the following gives the required spacing of lateral reinforcement for shear parallel to the short side of the column.',
    figureSvg: psadMay2015Figure(
      23,
      'Figure 23: The same 450 mm by 600 mm column section as Figure 22, used for the seismic lateral-reinforcement design.',
    ),
    figureCaption:
      'Figure 23: Column section for the seismic lateral-reinforcement design (Situation 23).',
    options: [
      { label: 'A', text: '75 mm' },
      { label: 'B', text: '70 mm' },
      { label: 'C', text: '80 mm' },
      { label: 'D', text: '85 mm' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The NSCP seismic provisions size the hoop area from the volumetric-ratio requirement, whichever of the two expressions governs.',
      formulas: [
        'A_{sh} = 0.3\\dfrac{s h_c f\u2019_c}{f_{yt}}\\left(\\dfrac{A_g}{A_{ch}} - 1\\right)',
        'A_{sh} = 0.09\\dfrac{s h_c f\u2019_c}{f_{yt}}',
      ],
      steps: [
        'Step 1: $A_g = 450(600) = 270{,}000\\ \\text{mm}^2$; $A_{ch} = 370(520) = 192{,}400\\ \\text{mm}^2$.',
        'Step 2: For shear parallel to the short side, $h_c = h_x = 508\\ \\text{mm}$ and $A_{sh} = 4(113.1) = 452.4\\ \\text{mm}^2$.',
        'Step 3: $452.4 = 0.3\\dfrac{s_1(508)(27.5)}{275}\\left(\\dfrac{270{,}000}{192{,}400} - 1\\right) \\Rightarrow s_1 = 73.6\\ \\text{mm}$.',
        'Step 4: $452.4 = 0.09\\dfrac{s_2(508)(27.5)}{275} \\Rightarrow s_2 = 98.9\\ \\text{mm}$.',
        'Step 5: The smaller governs; round down to $70\\ \\text{mm}$.',
      ],
      finalAnswer: '70 mm (Option B)',
    },
  },

  // Item 72
  {
    id: 'psad-may2015-q72',
    number: 72,
    pageNumber: 88,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Seismic Detailing',
    text: 'Situation 23 (continued) – Which of the following gives the required spacing of lateral reinforcement for shear parallel to the long side of the column.',
    options: [
      { label: 'A', text: '75 mm' },
      { label: 'B', text: '85 mm' },
      { label: 'C', text: '80 mm' },
      { label: 'D', text: '70 mm' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The other direction uses three legs of tie and the smaller core dimension, giving a slightly larger spacing.',
      formulas: ['A_{sh} = 3(113.1) = 339.3\\ \\text{mm}^2'],
      steps: [
        'Step 1: For shear parallel to the long side, $h_c = h_y = 358\\ \\text{mm}$ and $A_{sh} = 3(113.1) = 339.3\\ \\text{mm}^2$.',
        'Step 2: $339.3 = 0.3\\dfrac{s_1(358)(27.5)}{275}\\left(\\dfrac{270{,}000}{192{,}400} - 1\\right) \\Rightarrow s_1 = 78.3\\ \\text{mm}$.',
        'Step 3: $339.3 = 0.09\\dfrac{s_2(358)(27.5)}{275} \\Rightarrow s_2 = 105.3\\ \\text{mm}$.',
        'Step 4: The smaller governs; round down to $75\\ \\text{mm}$.',
      ],
      finalAnswer: '75 mm (Option A)',
    },
  },

  // Item 73
  {
    id: 'psad-may2015-q73',
    number: 73,
    pageNumber: 88,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Seismic Detailing',
    text: 'Situation 23 (continued) – Which of the following gives the maximum spacing of lateral reinforcement.',
    options: [
      { label: 'A', text: '124 mm' },
      { label: 'B', text: '103 mm' },
      { label: 'C', text: '112 mm' },
      { label: 'D', text: '98 mm' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The code caps the pitch by the smallest of one-quarter of the least dimension, six bar diameters, and the s₀ expression.',
      formulas: [
        's_{max} = \\min\\left(\\dfrac{b}{4},\\ 6d_b,\\ 100 + \\dfrac{350 - h_x}{3}\\right)',
      ],
      steps: [
        'Step 1: $b/4 = 450/4 = 112.5\\ \\text{mm}$.',
        'Step 2: $6d_b = 6(28) = 168\\ \\text{mm}$.',
        'Step 3: $100 + (350 - 199)/3 = 150.3\\ \\text{mm}$ (capped at 150 mm).',
        'Step 4: $s_{max} = 112.5\\ \\text{mm}$, use $112\\ \\text{mm}$.',
      ],
      finalAnswer: '112 mm (Option C)',
    },
  },

  // Item 74
  {
    id: 'psad-may2015-q74',
    number: 74,
    pageNumber: 90,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Centroids',
    text: 'Situation 24 – The column of a non-sway frame is shown in the figure. Concrete strength $f\u2019_c$ = 28 MPa and steel strength $f_y$ = 415 MPa. The diameter is 10 mm with clear cover of 40 mm. Consider bending parallel to line 1 and neglect the concrete area displaced by steel. Given the following dimensions: $x_1$ = 250 mm, $x_2$ = 350 mm, $y_1$ = 150 mm, $y_2$ = 200 mm. Determine the location of the geometric centroid from line 1.',
    figureSvg: psadMay2015Figure(
      24,
      'Figure 24: T-shaped column section with flange x1 wide and 2y1 deep, web x2 long and 2y2 deep, reinforced with 6-25 mm and 4-28 mm bars.',
    ),
    figureCaption:
      'Figure 24: T-shaped column section for the centroid calculations (Situation 24).',
    options: [
      { label: 'A', text: '0' },
      { label: 'B', text: '224 mm' },
      { label: 'C', text: '233 mm' },
      { label: 'D', text: '242 mm' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Split the T into a 500 × 250 flange and a 350 × 200 web, and take first moments about line 1.',
      formulas: [
        '\\bar{y} = \\dfrac{500(250)(125) + 350(200)(425)}{500(250) + 350(200)}',
      ],
      steps: [
        'Step 1: Flange $= 500 \\times 250 = 125{,}000\\ \\text{mm}^2$ at $125\\ \\text{mm}$.',
        'Step 2: Web $= 350 \\times 200 = 70{,}000\\ \\text{mm}^2$ at $425\\ \\text{mm}$.',
        'Step 3: $\\bar{y} = (15{,}625{,}000 + 29{,}750{,}000)/195{,}000$.',
        'Step 4: $\\bar{y} = 232.69\\ \\text{mm}$, say $233\\ \\text{mm}$.',
      ],
      finalAnswer: '233 mm (Option C)',
    },
  },

  // Item 75
  {
    id: 'psad-may2015-q75',
    number: 75,
    pageNumber: 90,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Centroids',
    text: 'Situation 24 (continued) – Determine the location of the plastic centroid from line 1.',
    options: [
      { label: 'A', text: '265 mm' },
      { label: 'B', text: '0' },
      { label: 'C', text: '255 mm' },
      { label: 'D', text: '248 mm' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The plastic centroid is the first moment of the full squash load — steel at yield plus concrete at 0.85f\u2019c — divided by that total force.',
      formulas: [
        '\\bar{y}_p = \\dfrac{\\sum F_i y_i}{\\sum F_i}',
      ],
      steps: [
        'Step 1: Steel: 4 bars of 25 mm at $d_1 = 62.5\\ \\text{mm}$, 2 bars of 25 mm at $d_2 = 187.5\\ \\text{mm}$, 4 bars of 28 mm at $d_3 = 536\\ \\text{mm}$.',
        'Step 2: Concrete: flange $500(250)(0.85f\u2019_c)$ at 125 mm, web $350(200)(0.85f\u2019_c)$ at 425 mm.',
        'Step 3: Taking first moments of these forces about line 1 gives $\\bar{y}_p = 254.9\\ \\text{mm}$.',
        'Step 4: Say $255\\ \\text{mm}$.',
      ],
      finalAnswer: '255 mm (Option C)',
    },
  },
];
