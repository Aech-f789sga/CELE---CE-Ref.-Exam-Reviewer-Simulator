import { Question } from '../../../types/exam';

export const PSAD_PART1: Question[] = [
  // --- SITUATION 1 (Questions 1 - 3) ---
  {
    id: 'psad-q1',
    number: 1,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Engineering Mechanics - Impending Motion & Equilibrium of Crate',
    text: 'Situation 1 - A force P is applied to move a crate weighing 30 kg.\nGiven: w = 1.2 m; h = 0.5 m; Coefficient of friction, μ = 0.25\n\n1. Determine the maximum force P (N) to maintain equilibrium on the crate. θ = 30°.',
    figureCaption: 'Figure S1: Crate subjected to inclined pushing force P at angle θ and height h',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/Fs8K5LV2/PSAD-April-2024-1.png" 
        alt="Figure S1: Crate subjected to inclined pushing force P at angle θ and height h" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '74' },
      { label: 'B', text: '85' },
      { label: 'C', text: '147' },
      { label: 'D', text: '99' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Equate horizontal pushing component to maximum static friction: P cos 30° = μ (W + P sin 30°).',
      formulas: [
        'W = 30 · (9.81) = 294.3 N',
        'N_r = W + P · sin 30° = 294.3 + 0.5P',
        'P · cos 30° = 0.25 · (294.3 + 0.5P)',
        'P · (0.8660 - 0.125) = 73.575 => 0.741 · P = 73.575 => P = 99.3 N ≈ 99 N',
      ],
      steps: [
        'Step 1: Weight of crate W = 30 kg × 9.81 m/s² = 294.3 N.',
        'Step 2: Normal reaction N = W + P sin 30° = 294.3 + 0.5P.',
        'Step 3: Impending sliding condition: P cos 30° = μ N = 0.25 (294.3 + 0.5P).',
        'Step 4: Solve for P = 99.3 N ≈ 99 N (Option D). Impending tipping about O yields a negative/unattainable force in this direction.',
      ],
      finalAnswer: '99 N (Option D)',
      pageNumber: 120,
    },
  },

  {
    id: 'psad-q2',
    number: 2,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Engineering Mechanics - Impending Tipping of Crate',
    text: 'Situation 1 (Cont.) - A force P is applied to move a crate weighing 30 kg (w = 1.2 m, h = 0.5 m, μ = 0.25):\n\n2. Determine the minimum force P (N) that will initiate tipping. θ = 0.',
    options: [
      { label: 'A', text: '965' },
      { label: 'B', text: '354' },
      { label: 'C', text: '294' },
      { label: 'D', text: '804' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Take moment equilibrium about tipping pivot O: ΣM_O = 0 with horizontal force at height h.',
      formulas: [
        'ΣM_O = 0',
        'P_min · (0.5) - W · (0.6) = 0',
        'P_min = [ 294.3 · (0.6) ] / 0.5 = 353.16 N ≈ 354 N',
      ],
      steps: [
        'Step 1: For impending tipping about toe O, the normal reaction shifts completely to O.',
        'Step 2: Moment of horizontal force P about O is P × 0.5 m.',
        'Step 3: Resisting moment from weight is W × (w/2) = 294.3 N × 0.6 m = 176.58 N·m.',
        'Step 4: P_min = 176.58 / 0.5 = 353.16 N ≈ 354 N.',
      ],
      finalAnswer: '354 N (Option B)',
      pageNumber: 120,
    },
  },

  {
    id: 'psad-q3',
    number: 3,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Engineering Mechanics - Resultant Normal Force Location',
    text: 'Situation 1 (Cont.) - A force P is applied to move a crate weighing 30 kg (w = 1.2 m, h = 0.5 m):\n\n3. Determine the location of the resultant normal force (m) from the center of gravity when θ = 30° and P = 120 N.',
    options: [
      { label: 'A', text: '0.045' },
      { label: 'B', text: '0.067' },
      { label: 'C', text: '0.554' },
      { label: 'D', text: '0.667' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Use Varignon\'s theorem to find distance x from pivot O, then eccentricity e = 0.6 - x.',
      formulas: [
        'R_y = W + P · sin 30° = 294.3 + 120(0.5) = 354.3 N',
        'R_y(x) = P · sin 30° · (1.2) - P · cos 30° · (0.5) + W · (0.6)',
        '354.3(x) = 60(1.2) - 103.92(0.5) + 294.3(0.6) = 72 - 51.96 + 176.58 = 196.62',
        'x = 196.62 / 354.3 = 0.5549 m from O',
        'e = 0.6 - 0.5549 = 0.0451 m ≈ 0.045 m',
      ],
      steps: [
        'Step 1: Total vertical resultant force R_y = 294.3 + 60 = 354.3 N.',
        'Step 2: Moment equation about O gives distance x = 0.5549 m.',
        'Step 3: Distance from center of gravity is e = 0.60 m - 0.5549 m = 0.0451 m ≈ 0.045 m.',
      ],
      finalAnswer: '0.045 m (Option A)',
      pageNumber: 121,
    },
  },

  // --- SITUATION 2 (Questions 4 - 6) ---
  {
    id: 'psad-q4',
    number: 4,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: '3D Statics - Cable-Stayed Flagpole Cable AD Tension',
    text: 'Situation 2 - A flagpole is supported by three cables as shown in the figure. The resultant force acting along the pole\'s axis is 570 kN.\nGiven: a = 3 m, b = 2 m, c = 3 m, d = 2 m, h = 6 m\n\n4. Solve for the tensile force (kN) in the cable AD.',
    figureCaption: 'Figure S2: 3D Flagpole along Z-axis supported by cables DA, DB, DC with dimensions a, b, c, d, and h',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/fTpbn9fp/PSAD-April-2024-2.png" 
        alt="Figure S2: 3D Flagpole along Z-axis supported by guy wires AB and AC" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '210' },
      { label: 'B', text: '166' },
      { label: 'C', text: '285' },
      { label: 'D', text: '316' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Formulate 3D vector equilibrium: ΣF_x = 0, ΣF_y = 0, and vertical resultant ΣF_z = 570 kN.',
      formulas: [
        'DA = 3i - 2j - 6k => |DA| = 7',
        'DB = 0i + 3j - 6k => |DB| = √45',
        'DC = -2i + 0j - 6k => |DC| = √40',
        'Solving system: T_AD = 210 kN, T_BD = 134.16 kN, T_CD = 284.6 kN',
      ],
      steps: [
        'Step 1: Express position vectors from top of pole D(0,0,6) to anchors A(3,-2,0), B(0,3,0), and C(-2,0,0).',
        'Step 2: Calculate lengths: L_DA = 7 m, L_DB = √45 m, L_DC = √40 m.',
        'Step 3: Solve linear system for cable tensions under 570 kN axial pole compression.',
        'Step 4: Tensile force T_AD = 210 kN (Option A).',
      ],
      finalAnswer: '210 kN (Option A)',
      pageNumber: 122,
    },
  },

  {
    id: 'psad-q5',
    number: 5,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: '3D Statics - Cable-Stayed Flagpole Cable BD Tension',
    text: 'Situation 2 (Cont.) - Resultant pole force = 570 kN:\n\n5. Solve for the tensile force (kN) in the cable BD.',
    options: [
      { label: 'A', text: '210' },
      { label: 'B', text: '134' },
      { label: 'C', text: '285' },
      { label: 'D', text: '316' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'From the simultaneous 3D static equilibrium equations, solve for tension in cable BD.',
      formulas: [
        'T_BD = 134.16 kN ≈ 134 kN',
      ],
      steps: [
        'Step 1: From the 3D equilibrium matrix, T_BD = 134.16 kN.',
        'Step 2: Rounding to the nearest whole integer gives 134 kN.',
      ],
      finalAnswer: '134 kN (Option B)',
      pageNumber: 122,
    },
  },

  {
    id: 'psad-q6',
    number: 6,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: '3D Statics - Cable CD Tension Under Lateral Load',
    text: 'Situation 2 (Cont.) - Flagpole system:\n\n6. If the load at D is 100 kN along the positive x-axis, what is the tension (kN) in cable CD?',
    options: [
      { label: 'A', text: '210' },
      { label: 'B', text: '166' },
      { label: 'C', text: '285' },
      { label: 'D', text: '316' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Under +X horizontal load, cables AD and BD go slack (cannot take compression). Cable CD alone resists the lateral load.',
      formulas: [
        'tan θ = 2 / 6 => θ = 18.43°',
        'T_CD · sin θ = 100 kN',
        'T_CD = 100 / sin(18.43°) = 100 / (2 / √40) = 50 · √40 = 316.23 kN ≈ 316 kN',
      ],
      steps: [
        'Step 1: Because cables cannot carry compression, cables AD and BD become slack when pulled towards +x.',
        'Step 2: Cable CD must resist the entire 100 kN horizontal force along the x-axis.',
        'Step 3: Tension T_CD = 100 / (2 / √40) = 316.23 kN ≈ 316 kN.',
      ],
      finalAnswer: '316 kN (Option D)',
      pageNumber: 122,
    },
  },

  // --- SITUATION 3 (Questions 7 - 9) ---
  {
    id: 'psad-q7',
    number: 7,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Truss Analysis - Bottom Chord Member FG Force',
    text: 'Situation 3 - Refer to the given truss shown.\nGiven: Dimensions: s = 1.8 m; h = 2.7 m; Roof load, P = 18 kN; Ceiling load, Q = 6 kN\n\n7. Determine the internal force (kN) in member FG.',
    figureCaption: 'Figure S3: Roof truss with 6 bottom panels of width s and central height h',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/YqZSKWzT/PSAD-April-2024-3.png" 
        alt="Figure S3: Roof truss with 6 bottom panels of width d and apex height h" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '60' },
      { label: 'B', text: '120' },
      { label: 'C', text: '80' },
      { label: 'D', text: '160' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute support reaction R_G = 60 kN, then analyze joint G equilibrium to find bottom chord force F_FG.',
      formulas: [
        'Total Load = 5(18) + 5(6) = 120 kN => R_A = R_G = 60 kN',
        'tan θ = 2.7 / (3 · 1.8) = 2.7 / 5.4 = 0.5 => θ = 26.565°',
        'ΣF_v = 0 at G => F_GL · sin θ = R_G = 60 kN',
        'ΣF_h = 0 at G => F_FG = F_GL · cos θ = 60 / tan θ = 60 / 0.5 = 120 kN (Tension)',
      ],
      steps: [
        'Step 1: Total vertical load on symmetrical truss = 5(18) + 5(6) = 120 kN.',
        'Step 2: Vertical reactions R_A = R_G = 60 kN.',
        'Step 3: Slope angle of top chord θ: tan θ = 2.7 / 5.4 = 0.5.',
        'Step 4: At support joint G: F_FG = 60 / tan 26.565° = 120 kN tension.',
      ],
      finalAnswer: '120 kN (Option B)',
      pageNumber: 123,
    },
  },

  {
    id: 'psad-q8',
    number: 8,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Truss Analysis - Web Member EL Internal Force',
    text: 'Situation 3 (Cont.) - Truss s = 1.8 m, h = 2.7 m, P = 18 kN, Q = 6 kN:\n\n8. Determine the internal force (kN) in member EL.',
    options: [
      { label: 'A', text: '26.83 C' },
      { label: 'B', text: '20.13 C' },
      { label: 'C', text: '20.13 T' },
      { label: 'D', text: '26.83 T' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Cut a section through KL, EL, and EF, then sum moments about joint G to isolate member EL.',
      formulas: [
        'ΣM_G = 0',
        'F_EL · sin(26.565°) · (3.6) - (18 + 6) · (1.8) = 0',
        'F_EL · (0.4472 · 3.6) = 43.2 => 1.610 · F_EL = 43.2',
        'F_EL = 26.83 kN (Compression)',
      ],
      steps: [
        'Step 1: Pass cutting plane through members KL, EL, and EF.',
        'Step 2: KL and EF intersect at support joint G, so taking moments about G eliminates both.',
        'Step 3: F_EL × sin 26.565° × 3.6 - (18 + 6) × 1.8 = 0.',
        'Step 4: F_EL = 26.83 kN in compression (Option A).',
      ],
      finalAnswer: '26.83 C (Option A)',
      pageNumber: 124,
    },
  },

  {
    id: 'psad-q9',
    number: 9,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Truss Analysis - Member KD Due to Ceiling Load Only',
    text: 'Situation 3 (Cont.) - Truss s = 1.8 m, h = 2.7 m:\n\n9. Determine the internal force (kN) in member KD due to ceiling load only.',
    options: [
      { label: 'A', text: '33.90 T' },
      { label: 'B', text: '8.49 T' },
      { label: 'C', text: '8.49 C' },
      { label: 'D', text: '33.90 C' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Under ceiling loads Q = 6 kN only, reactions R_A = R_G = 15 kN. Cut section through JK, DK, and DE and take moments about G.',
      formulas: [
        'R_G = 5(6) / 2 = 15 kN',
        'tan β = 1.8 / 1.8 = 1 => β = 45°',
        'ΣM_G = 0 => F_DK · sin 45° · (5.4) - 6 · (1.8) - 6 · (3.6) = 0',
        'F_DK · (3.818) = 10.8 + 21.6 = 32.4 => F_DK = 8.485 kN ≈ 8.49 kN (Compression)',
      ],
      steps: [
        'Step 1: With ceiling loads only, reaction R_G = 15 kN.',
        'Step 2: Section cut through JK, DK, and DE.',
        'Step 3: Moment about G: F_DK sin 45° (5.4) - 6(1.8) - 6(3.6) = 0.',
        'Step 4: F_DK = 8.49 kN compression (Option C).',
      ],
      finalAnswer: '8.49 C (Option C)',
      pageNumber: 124,
    },
  },

  // --- SITUATION 4 (Questions 10 - 12) ---
  {
    id: 'psad-q10',
    number: 10,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Dam Stability - Resultant Force Eccentricity',
    text: 'Situation 4 - The dam below is subjected to the forces shown.\nGiven: F₁ = 340 kN; F₂ = 200 kN; W = 800 kN; a = 1.8 m; b = 5.4 m; c = 1.2 m; x₁ = 2.1 m; θ = 60°\n\n10. Determine the eccentricity (m) of the resultant force.',
    figureCaption: 'Figure S4: Trapezoidal concrete dam subjected to water pressures F₁, F₂ and weight W',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/QxwMGTJy/PSAD-April-2024-4.png" 
        alt="Figure S4: Trapezoidal concrete dam subjected to hydrostatic water pressure" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '0.25' },
      { label: 'B', text: '0.52' },
      { label: 'C', text: '2.52' },
      { label: 'D', text: '0.18' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute vertical resultant R_y = 900 kN, locate resultant location x̄ from toe, then eccentricity e = b/2 - x̄.',
      formulas: [
        'R_y = W + F₂ · cos 60° = 800 + 200(0.5) = 900 kN',
        'R_y · x̄ = F₂(1.2) + W(3.3) - F₁(1.8) = 240 + 2640 - 612 = 2268 kN·m',
        'x̄ = 2268 / 900 = 2.52 m from toe',
        'e = (b / 2) - x̄ = 2.7 - 2.52 = 0.18 m',
      ],
      steps: [
        'Step 1: Vertical force resultant R_y = 800 + 200 cos 60° = 900 kN.',
        'Step 2: Moment about toe O yields resultant location x̄ = 2.52 m.',
        'Step 3: Midpoint of dam base = 5.4 / 2 = 2.7 m.',
        'Step 4: Eccentricity e = 2.70 - 2.52 = 0.18 m (Option D).',
      ],
      finalAnswer: '0.18 m (Option D)',
      pageNumber: 125,
    },
  },

  {
    id: 'psad-q11',
    number: 11,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Dam Stability - Factor of Safety Against Sliding',
    text: 'Situation 4 (Cont.) - Dam subjected to forces (μ = 0.30):\n\n11. Compute the factor of safety against sliding.',
    options: [
      { label: 'A', text: '1.62' },
      { label: 'B', text: '1.78' },
      { label: 'C', text: '2.16' },
      { label: 'D', text: '2.96' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'FS against sliding: FS_s = (μ · R_y) / R_x.',
      formulas: [
        'R_x = F₁ - F₂ · sin 60° = 340 - 200 · sin 60° = 340 - 173.21 = 166.79 kN',
        'FS_s = (0.30 · 900) / 166.79 = 270 / 166.79 = 1.6188 ≈ 1.62',
      ],
      steps: [
        'Step 1: Horizontal net force R_x = 340 - 200 sin 60° = 166.79 kN.',
        'Step 2: Resisting friction force = μ R_y = 0.30 × 900 = 270 kN.',
        'Step 3: FS_sliding = 270 / 166.79 = 1.62.',
      ],
      finalAnswer: '1.62 (Option A)',
      pageNumber: 125,
    },
  },

  {
    id: 'psad-q12',
    number: 12,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Dam Stability - Upstream Water Depth',
    text: 'Situation 4 (Cont.) - Hydrostatic force F₁ = 340 kN acts at a = 1.8 m above the base:\n\n12. Determine the height (m) of water behind the dam.',
    options: [
      { label: 'A', text: '6.4' },
      { label: 'B', text: '5.4' },
      { label: 'C', text: '4.4' },
      { label: 'D', text: '3.4' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Hydrostatic resultant on vertical plane acts at one-third of the water depth from the base: a = h₁ / 3.',
      formulas: [
        'a = (1/3) · h₁',
        'h₁ = 3 · a = 3 · (1.8 m) = 5.4 m',
      ],
      steps: [
        'Step 1: Under hydrostatic triangular pressure distribution, the center of pressure is located at h₁/3 above the bottom.',
        'Step 2: a = 1.8 m = h₁/3 => h₁ = 5.4 m.',
      ],
      finalAnswer: '5.4 m (Option B)',
      pageNumber: 126,
    },
  },

  // --- SITUATION 5 (Questions 13 - 15) ---
  {
    id: 'psad-q13',
    number: 13,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Thin-Walled Pressure Vessels - Hoop Stress',
    text: 'Situation 5 - The 6-mm-thick cylindrical tank with a diameter of 1.2 m is subjected by an internal pressure p = 0.9 MPa. The tank is supported by 24 bolts as shown in the figure.\n\n13. Compute the hoop stress (MPa).',
    figureCaption: 'Figure S5: Cylindrical pressure vessel with end cover fastened by 24 bolts',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/ncgLbDGw/PSAD-April-2024-5.png" 
        alt="Figure S5: Cylindrical pressure vessel with end caps under internal pressure" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '35' },
      { label: 'B', text: '45' },
      { label: 'C', text: '70' },
      { label: 'D', text: '90' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Tangential/hoop stress formula: σ_t = (p · D) / (2 · t).',
      formulas: [
        'σ_t = (p · D) / (2 · t)',
        'σ_t = [ 0.9 · (1200) ] / [ 2 · (6) ] = 1080 / 12 = 90 MPa',
      ],
      steps: [
        'Step 1: Convert diameter to millimeters: D = 1.2 m = 1200 mm.',
        'Step 2: Hoop stress = 0.9 × 1200 / (2 × 6) = 90 MPa.',
      ],
      finalAnswer: '90 MPa (Option D)',
      pageNumber: 126,
    },
  },

  {
    id: 'psad-q14',
    number: 14,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Thin-Walled Pressure Vessels - Longitudinal Stress',
    text: 'Situation 5 (Cont.) - Cylindrical tank D = 1.2 m, t = 6 mm, p = 0.9 MPa:\n\n14. Compute the longitudinal stress (MPa).',
    options: [
      { label: 'A', text: '35' },
      { label: 'B', text: '45' },
      { label: 'C', text: '70' },
      { label: 'D', text: '90' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Longitudinal stress is half of hoop stress: σ_l = (p · D) / (4 · t).',
      formulas: [
        'σ_l = (p · D) / (4 · t)',
        'σ_l = [ 0.9 · (1200) ] / [ 4 · (6) ] = 1080 / 24 = 45 MPa',
      ],
      steps: [
        'Step 1: σ_l = p D / (4t) = 45 MPa.',
      ],
      finalAnswer: '45 MPa (Option B)',
      pageNumber: 126,
    },
  },

  {
    id: 'psad-q15',
    number: 15,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Thin-Walled Pressure Vessels - Allowable Pressure from Bolt Capacity',
    text: 'Situation 5 (Cont.) - Tank with 24 cover bolts:\n\n15. If the bolt tensile capacity is 52.5 kN each, solve for the allowable internal pressure p (MPa). Use factor of safety of 1.50.',
    options: [
      { label: 'A', text: '0.74' },
      { label: 'B', text: '0.37' },
      { label: 'C', text: '1.11' },
      { label: 'D', text: '0.56' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equate total allowable bolt resistance to internal pressure separating force on the end cover.',
      formulas: [
        'F_bolt = N · (f_bolt / FS) = 24 · (52.5 / 1.5) = 840 kN',
        'F_p = p · A_cover = p · [ (π/4) · (1.2)² ] = 0.36π · p = 1.13097 · p',
        'p = 840 / 1.13097 = 742.7 kPa = 0.7427 MPa ≈ 0.74 MPa',
      ],
      steps: [
        'Step 1: Total resisting force of 24 bolts with FS = 1.5: F = 24 × (52.5 / 1.5) = 840 kN.',
        'Step 2: End cover area A = π/4 × (1.2)² = 1.131 m².',
        'Step 3: Allowable pressure p = 840 kN / 1.131 m² = 742.7 kPa = 0.74 MPa.',
      ],
      finalAnswer: '0.74 MPa (Option A)',
      pageNumber: 126,
    },
  },
];
