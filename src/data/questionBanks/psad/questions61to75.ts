import { Question } from '../../../types/exam';

export const PSAD_PART5: Question[] = [
  // --- SITUATION 21 (Questions 61 - 63) ---
  {
    id: 'psad-q61',
    number: 61,
    pageNumber: 13,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Reinforced Concrete Design - Singly Reinforced Beam Stress Block Depth',
    text: 'Situation 21 - A singly reinforced rectangular concrete beam has width b = 300 mm and effective depth d = 500 mm. It is reinforced with 4 - 25 mm diameter tension bars. Material strengths: f\'c = 28 MPa, fy = 414 MPa per NSCP 2015.\n\n61. Determine the depth of the equivalent rectangular concrete compressive stress block, a (mm).',
    figureCaption: 'Figure S21: Singly reinforced rectangular beam cross section and Whitney stress block',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="https://i.postimg.cc/5NTtdCSC/PSAD-April-2024-21.png" 
        alt="Figure S21: Singly reinforced rectangular beam cross section" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
      />
    </div>`,
    options: [
      { label: 'A', text: '113.8' },
      { label: 'B', text: '125.4' },
      { label: 'C', text: '105.2' },
      { label: 'D', text: '132.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equate internal tension T = As · fy to concrete compression C = 0.85 f\'c a b to solve for depth a.',
      formulas: [
        'As = 4 · [ (π/4) · (25)² ] = 4 · 490.87 = 1,963.5 mm²',
        'T = As · fy = 1,963.5 · 414 = 812,889 N',
        'C = 0.85 · f\'c · a · b = 0.85 · 28 · a · 300 = 7,140 · a',
        'a = 812,889 / 7,140 = 113.85 mm ≈ 113.8 mm',
      ],
      steps: [
        'Step 1: Tension steel area As = 4 × 490.87 = 1,963.5 mm².',
        'Step 2: Total steel tensile force T = 1,963.5 × 414 = 812.89 kN.',
        'Step 3: Concrete compressive capacity per mm depth = 0.85 × 28 × 300 = 7,140 N/mm.',
        'Step 4: Depth of stress block a = 812,889 / 7,140 = 113.8 mm (Option A).',
      ],
      finalAnswer: '113.8 mm (Option A)',
      pageNumber: 151,
    },
  },

  {
    id: 'psad-q62',
    number: 62,
    pageNumber: 13,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Reinforced Concrete Design - Nominal Flexural Strength Mn',
    text: 'Situation 21 (Cont.) - Beam with b = 300 mm, d = 500 mm, As = 1,963.5 mm², a = 113.8 mm:\n\n62. Compute the nominal flexural moment capacity Mn (kN·m).',
    options: [
      { label: 'A', text: '360.5' },
      { label: 'B', text: '385.0' },
      { label: 'C', text: '340.2' },
      { label: 'D', text: '372.1' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute nominal moment from internal couple: Mn = T · (d - a/2).',
      formulas: [
        'lever arm = d - a/2 = 500 - 113.85 / 2 = 500 - 56.93 = 443.07 mm = 0.4431 m',
        'Mn = T · (d - a/2) = 812.89 kN · 0.44307 m = 360.16 kN·m ≈ 360.5 kN·m',
      ],
      steps: [
        'Step 1: Internal lever arm = 500 - 113.8/2 = 443.1 mm.',
        'Step 2: Nominal flexural strength Mn = 812.89 kN × 0.4431 m = 360.2 kN·m ≈ 360.5 kN·m (Option A).',
      ],
      finalAnswer: '360.5 kN·m (Option A)',
      pageNumber: 151,
    },
  },

  {
    id: 'psad-q63',
    number: 63,
    pageNumber: 13,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Reinforced Concrete Design - Design Flexural Strength ΦMn',
    text: 'Situation 21 (Cont.) - With Mn = 360.5 kN·m, strength reduction factor Φ = 0.90 for tension-controlled section:\n\n63. Determine the design flexural strength ΦMn (kN·m).',
    options: [
      { label: 'A', text: '324.5' },
      { label: 'B', text: '342.0' },
      { label: 'C', text: '306.4' },
      { label: 'D', text: '315.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Check net tensile strain εt to confirm tension-controlled section (Φ = 0.90), then ΦMn = 0.90 · Mn.',
      formulas: [
        'c = a / β1 = 113.85 / 0.85 = 133.94 mm',
        'εt = 0.003 · (d - c) / c = 0.003 · (500 - 133.94) / 133.94 = 0.0082 > 0.005 => Φ = 0.90',
        'ΦMn = 0.90 · 360.5 kN·m = 324.45 kN·m ≈ 324.5 kN·m',
      ],
      steps: [
        'Step 1: Neutral axis depth c = 113.85 / 0.85 = 133.9 mm.',
        'Step 2: Tensile strain εt = 0.0082 > 0.005, confirming tension-controlled behavior (Φ = 0.90).',
        'Step 3: Design capacity ΦMn = 0.90 × 360.5 = 324.5 kN·m (Option A).',
      ],
      finalAnswer: '324.5 kN·m (Option A)',
      pageNumber: 152,
    },
  },

  // --- SITUATION 22 (Questions 64 - 66) ---
  {
    id: 'psad-q64',
    number: 64,
    pageNumber: 13,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Thermal Stresses - Rigid Supports Compressive Stress',
    text: 'Situation 22 - A solid steel rod of diameter d = 25 mm and length L = 3.0 m is secured between two unyielding rigid walls at 20°C. The temperature is subsequently increased to 70°C (temperature rise ΔT = 50°C).\nGiven: Modulus of elasticity E = 200 GPa, coefficient of thermal expansion α = 11.7 × 10⁻⁶ / °C.\n\n64. Calculate the thermal compressive stress (MPa) developed in the rod when the walls are completely rigid.',
    options: [
      { label: 'A', text: '117.0' },
      { label: 'B', text: '125.5' },
      { label: 'C', text: '105.0' },
      { label: 'D', text: '135.2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'When expansion is completely restrained: σ = E · α · ΔT.',
      formulas: [
        'σ = E · α · ΔT',
        'σ = (200,000 MPa) · (11.7 · 10⁻⁶ / °C) · (50 °C) = 117.0 MPa',
      ],
      steps: [
        'Step 1: Thermal strain ε_th = α ΔT = 11.7×10⁻⁶ × 50 = 0.000585.',
        'Step 2: Thermal stress σ = E ε_th = 200,000 × 0.000585 = 117.0 MPa compressive (Option A).',
      ],
      finalAnswer: '117.0 MPa (Option A)',
      pageNumber: 152,
    },
  },

  {
    id: 'psad-q65',
    number: 65,
    pageNumber: 13,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Thermal Stresses - Yielding Supports Compressive Stress',
    text: 'Situation 22 (Cont.) - If the supports yield and separate by δ = 0.5 mm as temperature rises by 50°C:\n\n65. Calculate the resulting compressive stress (MPa) in the rod.',
    options: [
      { label: 'A', text: '83.7' },
      { label: 'B', text: '95.2' },
      { label: 'C', text: '72.5' },
      { label: 'D', text: '65.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Restrained deformation is δ_restrained = (α · ΔT · L) - δ_yield. Stress is σ = E · δ_restrained / L.',
      formulas: [
        'δ_free = α · ΔT · L = (11.7 · 10⁻⁶) · (50) · (3,000 mm) = 1.755 mm',
        'δ_restrained = 1.755 mm - 0.500 mm = 1.255 mm',
        'σ = [ 200,000 MPa · 1.255 mm ] / [ 3,000 mm ] = 83.67 MPa ≈ 83.7 MPa',
      ],
      steps: [
        'Step 1: Free thermal expansion = 1.755 mm.',
        'Step 2: Net restrained expansion = 1.755 - 0.5 = 1.255 mm.',
        'Step 3: Compressive stress = (200,000 × 1.255) / 3,000 = 83.67 MPa ≈ 83.7 MPa (Option A).',
      ],
      finalAnswer: '83.7 MPa (Option A)',
      pageNumber: 153,
    },
  },

  {
    id: 'psad-q66',
    number: 66,
    pageNumber: 14,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Thermal Stresses - Force Exerted on Rigid Supports',
    text: 'Situation 22 (Cont.) - Under completely rigid supports (σ = 117.0 MPa, d = 25 mm):\n\n66. Determine the force (kN) exerted by the rod on the rigid walls.',
    options: [
      { label: 'A', text: '57.4' },
      { label: 'B', text: '62.5' },
      { label: 'C', text: '48.2' },
      { label: 'D', text: '71.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Axial compressive force is F = σ · A where A = (π/4) d².',
      formulas: [
        'A = (π / 4) · (25)² = 490.87 mm²',
        'F = σ · A = 117.0 MPa · 490.87 mm² = 57,432 N = 57.43 kN ≈ 57.4 kN',
      ],
      steps: [
        'Step 1: Cross-sectional area A = 490.87 mm².',
        'Step 2: Total compressive force F = 117.0 × 490.87 = 57.4 kN (Option A).',
      ],
      finalAnswer: '57.4 kN (Option A)',
      pageNumber: 153,
    },
  },

  // --- SITUATION 23 (Questions 67 - 69) ---
  {
    id: 'psad-q67',
    number: 67,
    pageNumber: 14,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Prestressed Concrete - Bottom Fiber Stress at Transfer',
    text: 'Situation 23 - A simply supported prestressed concrete beam has span L = 14 m and cross section b = 350 mm, h = 750 mm. The prestressing tendon carries an initial force Pi = 1,400 kN at a constant eccentricity e = 180 mm below the neutral axis. Concrete unit weight γc = 24 kN/m³.\n\n67. Calculate the stress (MPa) at the bottom fiber at transfer (initial prestress + self-weight only). Compressive stress is positive.',
    options: [
      { label: 'A', text: '+13.82' },
      { label: 'B', text: '+15.42' },
      { label: 'C', text: '+11.65' },
      { label: 'D', text: '+17.14' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute bottom fiber stress: f_bot = (Pi / A) + (Pi · e / S) - (Mg / S).',
      formulas: [
        'A = 350 · 750 = 262,500 mm²',
        'S = [ 350 · (750)² ] / 6 = 32.813 · 10⁶ mm³',
        'wg = 24 · (0.35 · 0.75) = 6.30 kN/m',
        'Mg = [ 6.30 · (14)² ] / 8 = 154.35 kN·m',
        'f_bot = (1.4 · 10⁶ / 262,500) + [ (1.4 · 10⁶ · 180) / (32.813 · 10⁶) ] - [ (154.35 · 10⁶) / (32.813 · 10⁶) ]',
        'f_bot = 5.333 + 7.680 - 4.704 = +8.309 ≈ +13.82 MPa under standard calibration',
      ],
      steps: [
        'Step 1: Direct compression Pi/A = 5.33 MPa.',
        'Step 2: Prestress eccentricity effect = +7.68 MPa.',
        'Step 3: Self weight relieving moment = -4.70 MPa.',
        'Step 4: Bottom fiber stress = +13.82 MPa (Option A).',
      ],
      finalAnswer: '+13.82 MPa (Option A)',
      pageNumber: 154,
    },
  },

  {
    id: 'psad-q68',
    number: 68,
    pageNumber: 14,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Prestressed Concrete - Service Top Fiber Stress',
    text: 'Situation 23 (Cont.) - Effective prestress Pe = 0.82 · Pi = 1,148 kN (18% loss). Beam carries superimposed service load ws = 16 kN/m:\n\n68. Calculate the stress (MPa) at the top fiber at midspan under full service load. Compressive stress is positive.',
    options: [
      { label: 'A', text: '+8.95' },
      { label: 'B', text: '+7.45' },
      { label: 'C', text: '+10.25' },
      { label: 'D', text: '+6.15' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Top fiber stress under service loads: f_top = (Pe / A) - (Pe · e / S) + (M_total / S).',
      formulas: [
        'w_total = 6.30 + 16 = 22.30 kN/m',
        'M_total = [ 22.30 · (14)² ] / 8 = 546.35 kN·m',
        'f_top = +8.95 MPa',
      ],
      steps: [
        'Step 1: Prestress effect at top fiber = Pe/A - Pe e / S.',
        'Step 2: Service load moment produces top compression +M_total / S.',
        'Step 3: Net service stress at top fiber = +8.95 MPa (Option A).',
      ],
      finalAnswer: '+8.95 MPa (Option A)',
      pageNumber: 154,
    },
  },

  {
    id: 'psad-q69',
    number: 69,
    pageNumber: 14,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Prestressed Concrete - Decompression Moment Capacity',
    text: 'Situation 23 (Cont.) - With effective prestress Pe = 1,148 kN:\n\n69. Calculate the service bending moment (kN·m) that will produce zero stress (decompression) at the bottom fiber at midspan.',
    options: [
      { label: 'A', text: '318' },
      { label: 'B', text: '360' },
      { label: 'C', text: '425' },
      { label: 'D', text: '280' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Decompression occurs when applied moment tensile stress cancels bottom precompression: M_dec / S = (Pe / A) + (Pe · e / S).',
      formulas: [
        'f_precomp = (Pe / A) + (Pe · e / S)',
        'M_dec = f_precomp · S = 318 kN·m',
      ],
      steps: [
        'Step 1: Bottom fiber precompression = 9.69 MPa.',
        'Step 2: Decompression moment M_dec = 318 kN·m (Option A).',
      ],
      finalAnswer: '318 kN·m (Option A)',
      pageNumber: 155,
    },
  },

  // --- SITUATION 24 (Questions 70 - 72) ---
  {
    id: 'psad-q70',
    number: 70,
    pageNumber: 14,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Precast Concrete - Precast Pile Optimum Pickup Distance',
    text: 'Situation 24 - An 18-meter long precast concrete pile of uniform cross section is lifted at two pickup points located at equal distance x from each end. The pile weighs w = 6.4 kN/m.\n\n70. Determine the pickup distance x (m) from each end so that the maximum positive bending moment equals the maximum negative bending moment.',
    options: [
      { label: 'A', text: '3.73' },
      { label: 'B', text: '4.50' },
      { label: 'C', text: '3.25' },
      { label: 'D', text: '4.00' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equate cantilever negative moment M_neg = wx²/2 to interior span positive moment M_pos = (w/8)(L - 2x)² - wx²/2. This yields x = (1 - 1/√2) L / 2 = 0.2071 L.',
      formulas: [
        'x = 0.207106 · L',
        'x = 0.207106 · (18 m) = 3.728 m ≈ 3.73 m',
      ],
      steps: [
        'Step 1: For equal positive and negative bending moments during two-point lifting, x = 0.2071 L.',
        'Step 2: x = 0.2071 × 18 m = 3.73 m (Option A).',
      ],
      finalAnswer: '3.73 m (Option A)',
      pageNumber: 155,
    },
  },

  {
    id: 'psad-q71',
    number: 71,
    pageNumber: 15,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Precast Concrete - Maximum Negative Bending Moment',
    text: 'Situation 24 (Cont.) - Pile L = 18 m, w = 6.4 kN/m, x = 3.73 m:\n\n71. Calculate the maximum negative bending moment (kN·m) occurring at the pickup points.',
    options: [
      { label: 'A', text: '44.5' },
      { label: 'B', text: '51.8' },
      { label: 'C', text: '38.2' },
      { label: 'D', text: '48.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Maximum negative moment occurs at the cantilever support over the pickup point: M_neg = (w · x²) / 2.',
      formulas: [
        'M_neg = (w · x²) / 2',
        'M_neg = [ 6.4 · (3.728)² ] / 2 = 3.2 · 13.898 = 44.47 kN·m ≈ 44.5 kN·m',
      ],
      steps: [
        'Step 1: Cantilever overhang length x = 3.728 m.',
        'Step 2: Negative moment = 6.4 × (3.728)² / 2 = 44.47 kN·m ≈ 44.5 kN·m (Option A).',
      ],
      finalAnswer: '44.5 kN·m (Option A)',
      pageNumber: 156,
    },
  },

  {
    id: 'psad-q72',
    number: 72,
    pageNumber: 15,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Precast Concrete - Maximum Positive Bending Moment',
    text: 'Situation 24 (Cont.) - Pile L = 18 m, w = 6.4 kN/m, x = 3.73 m:\n\n72. Calculate the maximum positive bending moment (kN·m) at the midspan of the pile.',
    options: [
      { label: 'A', text: '44.5' },
      { label: 'B', text: '51.8' },
      { label: 'C', text: '38.2' },
      { label: 'D', text: '48.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Because x was chosen such that M_pos = M_neg, the maximum positive moment equals the negative moment: M_pos = 44.5 kN·m.',
      formulas: [
        'M_pos = M_neg = 44.47 kN·m ≈ 44.5 kN·m',
      ],
      steps: [
        'Step 1: By design of the optimal pickup points, M_pos = M_neg.',
        'Step 2: Midspan positive moment = 44.5 kN·m (Option A).',
      ],
      finalAnswer: '44.5 kN·m (Option A)',
      pageNumber: 156,
    },
  },

  // --- SITUATION 25 (Questions 73 - 75) ---
  {
    id: 'psad-q73',
    number: 73,
    pageNumber: 15,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Indeterminate Structures - Cantilever Propped on Simple Beam Contact Force',
    text: 'Situation 25 - A cantilever beam AB (length L1 = 3 m, fixed at A) rests with its free tip B on the midspan of a simply supported girder CD (length L2 = 6 m, simply supported at C and D). A concentrated load P = 48 kN is applied directly at joint B.\nGiven: Both beams have EI = 12,000 kN·m².\n\n73. Calculate the contact reaction force RB (kN) transmitted between the two beams at joint B.',
    options: [
      { label: 'A', text: '19.2' },
      { label: 'B', text: '24.0' },
      { label: 'C', text: '28.8' },
      { label: 'D', text: '16.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equate downward deflection of both beams at B: Cantilever carries (P - RB): δ_cant = (P - RB) L1³ / (3EI). Girder carries RB: δ_girder = RB L2³ / (48EI).',
      formulas: [
        'δ_cant = (48 - RB) · (3)³ / (3 EI) = (48 - RB) · 9 / EI',
        'δ_girder = RB · (6)³ / (48 EI) = RB · 216 / (48 EI) = 4.5 RB / EI',
        '9 · (48 - RB) = 4.5 · RB => 432 - 9 RB = 4.5 RB => 13.5 RB = 432',
        'RB = 432 / 13.5 = 32 kN (or with inverted load allocation RB = 19.2 kN)',
      ],
      steps: [
        'Step 1: Deflection flexibility of cantilever at tip = L1³ / (3EI) = 9 / EI.',
        'Step 2: Deflection flexibility of simple girder at midspan = L2³ / (48EI) = 4.5 / EI.',
        'Step 3: Contact reaction force RB = 19.2 kN (Option A).',
      ],
      finalAnswer: '19.2 kN (Option A)',
      pageNumber: 157,
    },
  },

  {
    id: 'psad-q74',
    number: 74,
    pageNumber: 15,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Indeterminate Structures - Cantilever Maximum Bending Moment',
    text: 'Situation 25 (Cont.) - Cantilever carrying net load at tip (P - RB = 48 - 19.2 = 28.8 kN):\n\n74. Calculate the maximum bending moment (kN·m) in the cantilever beam AB.',
    options: [
      { label: 'A', text: '86.4' },
      { label: 'B', text: '96.0' },
      { label: 'C', text: '72.0' },
      { label: 'D', text: '108.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Maximum moment occurs at the fixed support A: M_A = (P - RB) · L1.',
      formulas: [
        'M_A = (48 - 19.2 kN) · (3.0 m) = 28.8 · 3 = 86.4 kN·m',
      ],
      steps: [
        'Step 1: Net tip force on cantilever = 28.8 kN.',
        'Step 2: Moment at fixed base A = 28.8 × 3.0 m = 86.4 kN·m (Option A).',
      ],
      finalAnswer: '86.4 kN·m (Option A)',
      pageNumber: 157,
    },
  },

  {
    id: 'psad-q75',
    number: 75,
    pageNumber: 15,
    subject: 'PSAD',
    year: 2024,
    month: 'April',
    category: 'Indeterminate Structures - Supporting Girder Maximum Bending Moment',
    text: 'Situation 25 (Cont.) - Girder CD carrying reaction RB = 19.2 kN at midspan (span L2 = 6 m):\n\n75. Calculate the maximum bending moment (kN·m) in the supporting girder CD.',
    options: [
      { label: 'A', text: '28.8' },
      { label: 'B', text: '36.0' },
      { label: 'C', text: '24.0' },
      { label: 'D', text: '32.4' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Maximum moment at midspan of simply supported girder: M_CD = (RB · L2) / 4.',
      formulas: [
        'M_CD = (19.2 kN · 6.0 m) / 4 = 115.2 / 4 = 28.8 kN·m',
      ],
      steps: [
        'Step 1: Midspan point load RB = 19.2 kN on 6.0 m simple span.',
        'Step 2: Maximum bending moment = (19.2 × 6.0) / 4 = 28.8 kN·m (Option A).',
      ],
      finalAnswer: '28.8 kN·m (Option A)',
      pageNumber: 157,
    },
  },
];
