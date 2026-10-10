import { Question } from '../../../types/exam';

export const PSAD_PART2: Question[] = [
  // --- SITUATION 6 (Questions 16 - 18) ---
  {
    id: 'psad-q16',
    number: 16,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Torsion of Shafts - Allowable Torsional Load for Solid Shaft',
    text: 'Situation 6 - The wrench is subjected to the forces, as shown in the figure.\nGiven: a = 400 mm; b = 250 mm; c = 100 mm\n\n16. What is the maximum value of P (N) if the allowable torsional shearing stress in the 20-mm diameter solid shaft is 87 MPa?',
    figureCaption: 'Figure S6: Wrench subjected to forces P with arm lengths a, b and shaft c',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/MKNG2QmP/PSAD-April-2024-6.png" 
        alt="Figure S6: Wrench subjected to forces P with arm lengths a and b" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '420' },
      { label: 'B', text: '210' },
      { label: 'C', text: '310' },
      { label: 'D', text: '620' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Torque T = P(a + b). Equate torsional shearing stress to allowable value τ_all = 16T / (π d³).',
      formulas: [
        'T = P · (a + b) = P · (400 + 250) = 650P N·mm',
        'τ = (16 · T) / (π · d³) <= 87 MPa',
        '[ 16 · (650P) ] / [ π · (20)³ ] <= 87 => P = 210.245 N ≈ 210 N',
      ],
      steps: [
        'Step 1: Total twisting torque produced by force couple = P × (400 + 250) = 650P N·mm.',
        'Step 2: Polar section modulus of 20 mm shaft: Z_p = π d³ / 16 = π(8000) / 16 = 500π = 1570.8 mm³.',
        'Step 3: Allowable torque T = 87 × 1570.8 = 136,659 N·mm.',
        'Step 4: P = 136,659 / 650 = 210.2 N ≈ 210 N (Option B).',
      ],
      finalAnswer: '210 N (Option B)',
      pageNumber: 127,
    },
  },

  {
    id: 'psad-q17',
    number: 17,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Torsion of Shafts - Angle of Twist in Hollow Shaft',
    text: 'Situation 6 (Cont.) - Outer diameter D₀ = 50 mm, thickness t = 6 mm, G = 79 GPa:\n\n17. What is the maximum value of P (N) if the allowable angle of twist in the hollow shaft is 0.5°?',
    options: [
      { label: 'A', text: '2168' },
      { label: 'B', text: '2267' },
      { label: 'C', text: '4336' },
      { label: 'D', text: '4533' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Compute polar moment of inertia J = π/32 (D₀⁴ - D_i⁴), then solve for P from angle of twist θ = TL / (JG).',
      formulas: [
        'D_i = 50 - 2(6) = 38 mm',
        'J = (π / 32) · [ (50)⁴ - (38)⁴ ] = 408,887 mm⁴',
        'θ = (T · L) / (J · G) = [ 650P · (100) ] / [ 408,887 · 79,000 ] <= 0.5° · (π / 180)',
        'P = 4,336.75 N ≈ 4336 N',
      ],
      steps: [
        'Step 1: Inner diameter D_i = 50 - 12 = 38 mm.',
        'Step 2: Polar moment of inertia J = π/32 (50⁴ - 38⁴) = 408,887 mm⁴.',
        'Step 3: Convert 0.5° to radians: 0.5 × π / 180 = 0.008726 rad.',
        'Step 4: Solve for P = (0.008726 × 408,887 × 79,000) / (650 × 100) = 4,336.75 N ≈ 4336 N (Option C).',
      ],
      finalAnswer: '4336 N (Option C)',
      pageNumber: 128,
    },
  },

  {
    id: 'psad-q18',
    number: 18,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Torsion of Shafts - Maximum Shearing Stress in Hollow Shaft',
    text: 'Situation 6 (Cont.) - Outer diameter D₀ = 50 mm, thickness t = 6 mm:\n\n18. If a torque, T = 200 N·m is applied to the hollow shaft, what is the maximum torsional shearing stress (MPa) in the hollow shaft?',
    options: [
      { label: 'A', text: '24.4' },
      { label: 'B', text: '12.2' },
      { label: 'C', text: '16.2' },
      { label: 'D', text: '8.1' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Apply elastic torsion formula for hollow circular shaft: τ_max = (T · R) / J.',
      formulas: [
        'τ_max = (16 · T · D₀) / [ π · (D₀⁴ - D_i⁴) ] = (T · c) / J',
        'τ_max = [ 200,000 · (25) ] / 408,887 = 5,000,000 / 408,887 = 12.228 MPa ≈ 12.2 MPa',
      ],
      steps: [
        'Step 1: Torque T = 200 N·m = 200,000 N·mm.',
        'Step 2: Outer radius c = D₀ / 2 = 25 mm.',
        'Step 3: Shearing stress τ = (200,000 × 25) / 408,887 = 12.23 MPa ≈ 12.2 MPa.',
      ],
      finalAnswer: '12.2 MPa (Option B)',
      pageNumber: 128,
    },
  },

  // --- SITUATION 7 (Questions 19 - 21) ---
  {
    id: 'psad-q19',
    number: 19,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Mohr\'s Circle of Stress - Average Normal Stress',
    text: 'Situation 7 - An element is subjected to the stresses as presented in the Mohr\'s circle shown.\n\n19. Which of the following represents the average normal tensile stress?',
    figureCaption: 'Figure S7: Left: Stressed differential element. Right: Mohr\'s stress circle with points A, B, C, D, E, F, G, and origin O',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/BQkv9KBh/PSAD-April-2024-7.png" 
        alt="Figure S7: Stressed differential element" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: 'OA' },
      { label: 'B', text: 'OC' },
      { label: 'C', text: 'OF' },
      { label: 'D', text: 'OB' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The center of Mohr\'s circle C represents the average normal stress σ_avg = (σ_x + σ_y)/2. Distance from origin O is OC.',
      formulas: [
        'σ_avg = (σ_x + σ_y) / 2 = OC',
      ],
      steps: [
        'Step 1: In Mohr\'s circle, the abscissa of the center C is the average normal stress.',
        'Step 2: Distance from origin O to center C is OC.',
      ],
      finalAnswer: 'OC (Option B)',
      pageNumber: 128,
    },
  },

  {
    id: 'psad-q20',
    number: 20,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Mohr\'s Circle of Stress - Shear Stress at y-Face',
    text: 'Situation 7 (Cont.) - Mohr\'s circle of stress:\n\n20. Which of the following represents the shear stress at the y-face of the element?',
    options: [
      { label: 'A', text: 'OG' },
      { label: 'B', text: 'GE' },
      { label: 'C', text: 'OF' },
      { label: 'D', text: 'FD' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Point D represents the stress state on the y-face. Its shear stress coordinate is the vertical distance FD.',
      formulas: [
        'τ_y = FD',
      ],
      steps: [
        'Step 1: Point D represents the y-face of the stress element.',
        'Step 2: Shear stress is the ordinate (vertical projection) onto the σ-axis at F, which is distance FD.',
      ],
      finalAnswer: 'FD (Option D)',
      pageNumber: 128,
    },
  },

  {
    id: 'psad-q21',
    number: 21,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Mohr\'s Circle of Stress - Tensile Stress at x-Face',
    text: 'Situation 7 (Cont.) - Mohr\'s circle of stress:\n\n21. Which of the following represents the tensile stress at the x-face of the element?',
    options: [
      { label: 'A', text: 'OG' },
      { label: 'B', text: 'GE' },
      { label: 'C', text: 'OF' },
      { label: 'D', text: 'FD' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Point E represents the x-face stress state. Its normal stress is the horizontal coordinate from origin O to G: OG.',
      formulas: [
        'σ_x = OG',
      ],
      steps: [
        'Step 1: Point E represents the stress state on the x-face.',
        'Step 2: Normal tensile stress is the horizontal distance from the origin O to projection point G, which is OG.',
      ],
      finalAnswer: 'OG (Option A)',
      pageNumber: 129,
    },
  },

  // --- SITUATION 8 (Questions 22 - 24) ---
  {
    id: 'psad-q22',
    number: 22,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Shear & Moment Diagrams - Concentrated Load from Shear Jump',
    text: 'Situation 8 - The figure below shows the shear diagram of a simply supported beam.\nGiven: a = 17 kN, b = 12 kN, c = -12 kN, d = -17 kN, L₁ = 2 m, L₂ = 4 m\n\n22. How much is the concentrated load (kN) at B?',
    figureCaption: 'Figure S8: Shear diagram with coordinates a, b, c, d at points A, B, C, D',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/ZK2qtdxV/PSAD-April-2024-8.png" 
        alt="Figure S8: Shear diagram with coordinates a, b, c, d, e" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '29' },
      { label: 'B', text: '12' },
      { label: 'C', text: '5' },
      { label: 'D', text: '10' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'A vertical jump in the shear diagram indicates a concentrated load: ΔV = a - b = 17 - 12 = 5 kN.',
      formulas: [
        'P_B = a - b = 17 - 12 = 5 kN',
      ],
      steps: [
        'Step 1: Shear immediately to the left of B is a = 17 kN.',
        'Step 2: Shear immediately to the right of B is b = 12 kN.',
        'Step 3: Downward concentrated load at B is ΔV = 17 - 12 = 5 kN.',
      ],
      finalAnswer: '5 kN (Option C)',
      pageNumber: 129,
    },
  },

  {
    id: 'psad-q23',
    number: 23,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Shear & Moment Diagrams - Uniform Load from Shear Slope',
    text: 'Situation 8 (Cont.) - Shear diagram a = 17 kN, b = 12 kN, c = -12 kN, L₂ = 4 m:\n\n23. How much is the uniform load (kN/m) carried by the span BC?',
    options: [
      { label: 'A', text: '6' },
      { label: 'B', text: '7.25' },
      { label: 'C', text: '7.25' },
      { label: 'D', text: '8' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Slope of shear diagram equals load intensity: w = ΔV / Δx = [ 12 - (-12) ] / 4 = 24 / 4 = 6 kN/m.',
      formulas: [
        'w = [ V_B - V_C ] / L₂ = [ 12 - (-12) ] / 4 = 24 / 4 = 6 kN/m',
      ],
      steps: [
        'Step 1: Total shear change between B and C = 12 - (-12) = 24 kN.',
        'Step 2: Span length L₂ = 4 m.',
        'Step 3: Uniform load w = 24 / 4 = 6 kN/m (Option A).',
      ],
      finalAnswer: '6 kN/m (Option A)',
      pageNumber: 130,
    },
  },

  {
    id: 'psad-q24',
    number: 24,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Shear & Moment Diagrams - Maximum Bending Moment',
    text: 'Situation 8 (Cont.) - Shear diagram parameters:\n\n24. Determine the maximum moment (kN·m) in the beam.',
    options: [
      { label: 'A', text: '64' },
      { label: 'B', text: '34' },
      { label: 'C', text: '43' },
      { label: 'D', text: '46' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Maximum moment equals the total area under the shear diagram from support to zero shear.',
      formulas: [
        'Area_AB = 17 · 2 = 34 kN·m',
        'Area_(B to zero) = (1/2) · 12 · 2 = 12 kN·m',
        'M_max = 34 + 12 = 46 kN·m',
      ],
      steps: [
        'Step 1: Area under shear from A to B = 17 kN × 2 m = 34 kN·m.',
        'Step 2: Triangle area from B to midspan zero shear (x = 2 m) = 0.5 × 12 × 2 = 12 kN·m.',
        'Step 3: M_max = 34 + 12 = 46 kN·m (Option D).',
      ],
      finalAnswer: '46 kN·m (Option D)',
      pageNumber: 130,
    },
  },

  // --- SITUATION 9 (Questions 25 - 27) ---
  {
    id: 'psad-q25',
    number: 25,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Flexural Members - Wide Flange Maximum Shear Stress',
    text: 'Situation 9 - The beam with a built-up section is subjected by a uniform load, w = 21 kN/m including the beam weight. The beam is simply supported with a span length of 6 m. Properties:\nWide Flange (W300×33): A = 4181 mm², d = 312 mm, bf = 102 mm, tf = 10.8 mm, tw = 6.6 mm, Ix = 64.932 × 10⁶ mm⁴\nChannel (C225×20): A = 2542 mm², d = 229 mm, tf = 10.5 mm, tw = 5.9 mm, xc = 15.3 mm, Iy = 0.728 × 10⁶ mm⁴\n\n25. Determine the maximum shear stress (MPa) if only the wide flange section is used.',
    figureCaption: 'Figure S9: Wide Flange Section, Channel Section, and Built Up Section with channel welded to top flange',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/bNWvct9g/PSAD-April-2024-9.png" 
        alt="Figure S9: Wide Flange Section, Channel Section, and Built-up Beam cross sections" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '24.8' },
      { label: 'B', text: '34.6' },
      { label: 'C', text: '36.4' },
      { label: 'D', text: '28.4' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Calculate maximum shear force V_max = wL/2 = 63 kN, then compute shear stress at neutral axis: f_vmax = VQ / (I tw).',
      formulas: [
        'V_max = (w · L) / 2 = (21 · 6) / 2 = 63 kN = 63,000 N',
        'Q = 102 · (10.8) · (150.6) + 6.6 · (145.2) · (72.6) = 235,475 mm³',
        'f_vmax = [ 63,000 · (235,475) ] / [ 64.932 · 10⁶ · (6.6) ] = 34.617 MPa ≈ 34.6 MPa',
      ],
      steps: [
        'Step 1: End shear V = 21 × 6 / 2 = 63 kN.',
        'Step 2: First moment of area Q above neutral axis = 235,475 mm³.',
        'Step 3: Web shear stress = (63,000 × 235,475) / (64.932×10⁶ × 6.6) = 34.6 MPa.',
      ],
      finalAnswer: '34.6 MPa (Option B)',
      pageNumber: 130,
    },
  },

  {
    id: 'psad-q26',
    number: 26,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Flexural Members - Wide Flange Maximum Flexural Stress',
    text: 'Situation 9 (Cont.) - Simply supported beam L = 6 m, w = 21 kN/m:\n\n26. Determine the maximum flexural stress (MPa) of only the wide flange section is used.',
    options: [
      { label: 'A', text: '445' },
      { label: 'B', text: '454' },
      { label: 'C', text: '272' },
      { label: 'D', text: '227' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute maximum moment M_max = wL²/8, then flexural stress f_b = Mc / I.',
      formulas: [
        'M_max = (w · L²) / 8 = [ 21 · (6)² ] / 8 = 94.5 kN·m = 94.5 · 10⁶ N·mm',
        'c = d / 2 = 312 / 2 = 156 mm',
        'f_bmax = (M_max · c) / I_x = [ 94.5 · 10⁶ · (156) ] / [ 64.932 · 10⁶ ] = 227.04 MPa ≈ 227 MPa',
      ],
      steps: [
        'Step 1: Midspan moment M = 21 × 6² / 8 = 94.5 kN·m.',
        'Step 2: Distance to extreme fiber c = 312 / 2 = 156 mm.',
        'Step 3: Maximum bending stress = 94.5×10⁶ × 156 / 64.932×10⁶ = 227.04 MPa ≈ 227 MPa.',
      ],
      finalAnswer: '227 MPa (Option D)',
      pageNumber: 131,
    },
  },

  {
    id: 'psad-q27',
    number: 27,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Flexural Members - Built-Up Beam Flexural Stress',
    text: 'Situation 9 (Cont.) - Built-up section with channel welded to top flange:\n\n27. Determine the maximum flexural stress (MPa) using the built-up section.',
    options: [
      { label: 'A', text: '200.5' },
      { label: 'B', text: '307.7' },
      { label: 'C', text: '155.0' },
      { label: 'D', text: '168.1' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Locate composite neutral axis y_na = 211.43 mm from bottom, composite I_na = 99.635 × 10⁶ mm⁴, then f_b = Mc / I.',
      formulas: [
        'y_na = [ 4181(156) + 2542(312 + 5.9 - 15.3) ] / (4181 + 2542) = 211.43 mm',
        'I_na = 99.635 · 10⁶ mm⁴',
        'c_max = y_na = 211.43 mm (bottom fiber)',
        'f_bmax = [ 94.5 · 10⁶ · (211.43) ] / [ 99.635 · 10⁶ ] = 200.53 MPa ≈ 200.5 MPa',
      ],
      steps: [
        'Step 1: Centroid of built-up section y_na = 211.43 mm above bottom.',
        'Step 2: Moment of inertia about composite NA: I_na = 99.635 × 10⁶ mm⁴.',
        'Step 3: Extreme distance c = 211.43 mm (bottom tension fiber).',
        'Step 4: Flexural stress = 94.5×10⁶ × 211.43 / 99.635×10⁶ = 200.53 MPa ≈ 200.5 MPa (Option A).',
      ],
      finalAnswer: '200.5 MPa (Option A)',
      pageNumber: 131,
    },
  },

  // --- SITUATION 10 (Questions 28 - 30) ---
  {
    id: 'psad-q28',
    number: 28,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Roof Purlin Design - Bending Stress about Strong Axis',
    text: 'Situation 10 - A wide flange is used as a purlin of a truss whose top chord is sloped at θ = 30° from the horizontal. The trusses are 8 m apart, and the purlins are spaced at 3 m on centers along the top chord.\nGravity loads: Dead load, D = 1.44 kPa; Live load, L = 1.0 kPa\nProperties: d = 310 mm, bf = 250 mm, tf = 16 mm, tw = 13.5 mm, Ix = 1.97 × 10⁸ mm⁴, Iy = 2.0 × 10⁷ mm⁴\n\n28. Calculate the maximum bending stress f_bx (MPa).',
    figureCaption: 'Figure S10: Wide-flange purlin resting on top chord of roof truss inclined at angle θ',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/gkQ0FZH4/PSAD-April-2024-10.png" 
        alt="Figure S10: Wide-flange purlin resting on top chord of roof truss inclined at angle θ" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '54.7' },
      { label: 'B', text: '57.0' },
      { label: 'C', text: '39.9' },
      { label: 'D', text: '50.7' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Decompose gravity load perpendicular to roof w_n = w cos 30°, then f_bx = M_x c / I_x.',
      formulas: [
        'w = (1.44 + 1.0) · 3 = 7.32 kN/m',
        'w_n = 7.32 · cos 30° = 6.339 kN/m',
        'M_x = [ 6.339 · (8)² ] / 8 = 50.712 kN·m',
        'f_bx = [ 50.712 · 10⁶ · (155) ] / [ 1.97 · 10⁸ ] = 39.89 MPa ≈ 39.9 MPa',
      ],
      steps: [
        'Step 1: Total uniform gravity load w = (1.44 + 1.0) × 3 m = 7.32 kN/m.',
        'Step 2: Component normal to roof: w_n = 7.32 × cos 30° = 6.339 kN/m.',
        'Step 3: Moment about strong axis M_x = 6.339 × 8² / 8 = 50.712 kN·m.',
        'Step 4: Bending stress f_bx = 50.712×10⁶ × 155 / 1.97×10⁸ = 39.9 MPa.',
      ],
      finalAnswer: '39.9 MPa (Option C)',
      pageNumber: 132,
    },
  },

  {
    id: 'psad-q29',
    number: 29,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Roof Purlin Design - Bending Stress about Weak Axis',
    text: 'Situation 10 (Cont.) - Purlin wide flange:\n\n29. Calculate the maximum bending stress f_by (MPa).',
    options: [
      { label: 'A', text: '138' },
      { label: 'B', text: '183' },
      { label: 'C', text: '29.3' },
      { label: 'D', text: '227' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Decompose gravity load parallel to roof w_t = w sin 30°, then f_by = M_y c / I_y.',
      formulas: [
        'w_t = 7.32 · sin 30° = 3.66 kN/m',
        'M_y = [ 3.66 · (8)² ] / 8 = 29.28 kN·m',
        'f_by = [ 29.28 · 10⁶ · (125) ] / [ 2.0 · 10⁷ ] = 183.0 MPa',
      ],
      steps: [
        'Step 1: Component tangential to roof: w_t = 7.32 × sin 30° = 3.66 kN/m.',
        'Step 2: Moment about weak axis M_y = 3.66 × 8² / 8 = 29.28 kN·m.',
        'Step 3: Extreme distance for weak axis = bf / 2 = 250 / 2 = 125 mm.',
        'Step 4: Bending stress f_by = 29.28×10⁶ × 125 / 2.0×10⁷ = 183.0 MPa.',
      ],
      finalAnswer: '183 MPa (Option B)',
      pageNumber: 132,
    },
  },

  {
    id: 'psad-q30',
    number: 30,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Roof Purlin Design - Maximum Shearing Stress',
    text: 'Situation 10 (Cont.) - Purlin wide flange:\n\n30. Calculate the maximum shearing stress f_vmax (MPa).',
    options: [
      { label: 'A', text: '6.85' },
      { label: 'B', text: '5.14' },
      { label: 'C', text: '7.89' },
      { label: 'D', text: '10.61' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Maximum shear stress on web from normal shear: f_vmax = V_max Q / (I_x tw).',
      formulas: [
        'V_max = (w_n · L) / 2 = (6.339 · 8) / 2 = 25.356 kN',
        'Q = 250 · (16) · (147) + 13.5 · (139) · (69.5) = 718.42 · 10³ mm³',
        'f_vmax = [ 25,356 · (718.42 · 10³) ] / [ 1.97 · 10⁸ · (13.5) ] = 6.85 MPa',
      ],
      steps: [
        'Step 1: Shear force produced by normal component: V = 6.339 × 8 / 2 = 25.356 kN.',
        'Step 2: First moment of area Q above neutral axis = 718,420 mm³.',
        'Step 3: Web shearing stress = (25,356 × 718,420) / (1.97×10⁸ × 13.5) = 6.85 MPa (Option A).',
      ],
      finalAnswer: '6.85 MPa (Option A)',
      pageNumber: 133,
    },
  },
];
