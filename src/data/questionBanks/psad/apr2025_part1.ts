import { Question } from '../../../types/exam';

export const PSAD_APR2025_PART1: Question[] = [
  // Item 1
  {
    id: 'psad-apr2025-q1',
    number: 1,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Design Methods & Philosophy',
    text: 'Situation 1 — Answer the following questions:\n\n1. In the consideration of structural steel design, what design method is used within the elastic range?',
    options: [
      { label: 'A', text: 'Collapse mechanism' },
      { label: 'B', text: 'Allowable stress design' },
      { label: 'C', text: 'Ultimate strength design' },
      { label: 'D', text: 'Plastic design' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Allowable Stress Design (ASD) is based on working stress theory where stresses are kept strictly within the linear elastic range under service load conditions.',
      formulas: [
        'f_s \\le F_{\\text{allow}} = \\frac{F_y}{\\text{F.S.}}',
      ],
      steps: [
        'Step 1: Allowable Stress Design (ASD) / Working Stress Design evaluates structural members by ensuring computed working stresses do not exceed specified allowable elastic limits.',
        'Step 2: A factor of safety (F.S.) is applied directly to the material yield strength (Fy).',
        'Step 3: Collapse mechanism and Plastic design evaluate ultimate capacity through plastic hinge formation and redistribution beyond the elastic limit.',
        'Step 4: Ultimate strength design (USD / LRFD) applies load amplification factors and strength reduction factors at ultimate factored limit states.',
        'Step 5: Therefore, the method restricted within the elastic range is Allowable Stress Design (Option B).',
      ],
      finalAnswer: 'Allowable stress design (Option B)',
      pageNumber: 439,
    },
  },

  // Item 2
  {
    id: 'psad-apr2025-q2',
    number: 2,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Design Principles - Load Factors & Safety Criteria',
    text: 'Situation 1 — 2. What factor is used to amplify the load in structural design?',
    options: [
      { label: 'A', text: 'Load resistance' },
      { label: 'B', text: 'Reduction factor' },
      { label: 'C', text: 'Factored load' },
      { label: 'D', text: 'Load factor' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'A load factor is a multiplier applied to nominal/service loads to account for uncertainties in loading, unexpected overloads, and variations in load combinations.',
      formulas: [
        'U = \\sum \\gamma_i L_i',
        '\\text{Factored Load} = \\text{Load Factor} \\times \\text{Service Load}',
      ],
      steps: [
        'Step 1: Load factor (γ) multiplies nominal working loads (e.g., 1.2D + 1.6L in NSCP/ACI) to provide safety margins for overload probability.',
        'Step 2: Resistance factor (or reduction factor φ) reduces nominal capacity to account for material and fabrication variations.',
        'Step 3: Factored load is the resulting product of the load factor and nominal load, not the factor itself.',
        'Step 4: Load resistance refers to the capacity side of the limit state equation.',
        'Step 5: Hence, the factor used to amplify the load is the Load factor (Option D).',
      ],
      finalAnswer: 'Load factor (Option D)',
      pageNumber: 440,
    },
  },

  // Item 3
  {
    id: 'psad-apr2025-q3',
    number: 3,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Materials - Mechanical Properties & Energy Absorption',
    text: 'Situation 1 — 3. Which of the following best describes the material property that reflects a material\'s ability to absorb energy and withstand stress or load before fracturing or rupturing?',
    options: [
      { label: 'A', text: 'Toughness' },
      { label: 'B', text: 'Ductility' },
      { label: 'C', text: 'Hardness' },
      { label: 'D', text: 'Elasticity' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Toughness measures the total energy absorbed per unit volume before fracture, represented by the total area under the complete stress-strain curve up to rupture.',
      formulas: [
        'u_t = \\int_0^{\\epsilon_f} \\sigma \\, d\\epsilon',
      ],
      steps: [
        'Step 1: Toughness is the capacity of a material to absorb kinetic or strain energy and deform plastically prior to fracturing.',
        'Step 2: Ductility refers to the ability to undergo significant plastic deformation before rupture (e.g., percent elongation).',
        'Step 3: Hardness measures resistance to localized plastic deformation, penetration, or surface indentation.',
        'Step 4: Elasticity is the ability of a material to return to its original undeformed state upon removal of applied stress.',
        'Step 5: Therefore, energy absorption before rupture describes Toughness (Option A).',
      ],
      finalAnswer: 'Toughness (Option A)',
      pageNumber: 440,
    },
  },

  // Item 4
  {
    id: 'psad-apr2025-q4',
    number: 4,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - Pulley Equilibrium & Mechanical Advantage',
    text: 'Situation 2 — Refer to the system of pulleys shown.\n\n4. For the system of pulleys in Figure 1, if $W_1 = 500\$, what is the value of $W_2$ (N) to maintain equilibrium? Neglect the weight of the pulleys.',
    figureCaption: 'Situation 2 - Figure 1 & Figure 2: Compound pulley systems in equilibrium',
    figureSvg: `<svg viewBox="0 0 460 300" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#grid4)" rx="12"/>
      
      <!-- FIGURE 1 (Left) -->
      <line x1="80" y1="25" x2="210" y2="25" stroke="#94a3b8" stroke-width="5"/>
      <line x1="140" y1="25" x2="140" y2="45" stroke="#f59e0b" stroke-width="2.5"/>
      <!-- Pulley A (Fixed) -->
      <circle cx="140" cy="65" r="20" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
      <circle cx="140" cy="65" r="4" fill="#f59e0b"/>
      <text x="140" y="69" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">A</text>
      <!-- Pulley B (Movable) -->
      <circle cx="125" cy="130" r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="125" cy="130" r="3" fill="#38bdf8"/>
      <text x="125" y="134" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">B</text>
      <!-- Pulley C (Movable) -->
      <circle cx="155" cy="195" r="16" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
      <circle cx="155" cy="195" r="3" fill="#10b981"/>
      <text x="155" y="199" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">C</text>
      <!-- Load W1 -->
      <rect x="135" y="235" width="40" height="28" rx="4" fill="#334155" stroke="#f8fafc" stroke-width="1.5"/>
      <text x="155" y="253" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">W₁</text>
      <line x1="155" y1="211" x2="155" y2="235" stroke="#94a3b8" stroke-width="2"/>
      <!-- Load W2 -->
      <rect x="100" y="180" width="28" height="22" rx="3" fill="#334155" stroke="#f8fafc" stroke-width="1.5"/>
      <text x="114" y="195" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">W₂</text>
      <line x1="114" y1="140" x2="114" y2="180" stroke="#f59e0b" stroke-width="1.5"/>
      <!-- Rope lines -->
      <path d="M 120 65 L 120 120 M 160 65 L 160 185 M 109 130 L 109 180 M 141 130 L 141 185 M 171 195 L 171 25" stroke="#f8fafc" stroke-width="1.8" fill="none"/>
      <text x="145" y="290" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">FIGURE 1</text>
      
      <!-- FIGURE 2 (Right) -->
      <line x1="290" y1="25" x2="410" y2="25" stroke="#94a3b8" stroke-width="5"/>
      <!-- Pulley A (Fixed) -->
      <line x1="360" y1="25" x2="360" y2="50" stroke="#f59e0b" stroke-width="2.5"/>
      <circle cx="360" cy="70" r="20" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
      <circle cx="360" cy="70" r="4" fill="#f59e0b"/>
      <text x="360" y="74" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">A</text>
      <!-- Pulley B (Movable) -->
      <circle cx="320" cy="150" r="22" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="320" cy="150" r="4" fill="#38bdf8"/>
      <text x="320" y="154" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">B</text>
      <!-- Load W -->
      <rect x="300" y="210" width="40" height="30" rx="4" fill="#334155" stroke="#f8fafc" stroke-width="1.5"/>
      <text x="320" y="229" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">W</text>
      <line x1="320" y1="172" x2="320" y2="210" stroke="#94a3b8" stroke-width="2"/>
      <!-- Ropes in Figure 2 labeled 1, 2, 3, 4 -->
      <line x1="298" y1="25" x2="298" y2="150" stroke="#f8fafc" stroke-width="1.8"/>
      <text x="290" y="90" fill="#38bdf8" font-size="11" font-weight="bold">1</text>
      <line x1="342" y1="150" x2="342" y2="70" stroke="#f8fafc" stroke-width="1.8"/>
      <text x="348" y="120" fill="#38bdf8" font-size="11" font-weight="bold">2</text>
      <line x1="350" y1="25" x2="350" y2="52" stroke="#f8fafc" stroke-width="1.8"/>
      <text x="342" y="42" fill="#f59e0b" font-size="11" font-weight="bold">3</text>
      <line x1="378" y1="70" x2="378" y2="25" stroke="#f8fafc" stroke-width="1.8"/>
      <text x="386" y="42" fill="#f59e0b" font-size="11" font-weight="bold">4</text>
      <text x="350" y="290" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">FIGURE 2</text>
    </svg>`,
    options: [
      { label: 'A', text: '150' },
      { label: 'B', text: '225' },
      { label: 'C', text: '175' },
      { label: 'D', text: '125' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'In the compound pulley system of Figure 1, the load W1 is supported by four rope segments each carrying tension T = W2, yielding W2 = W1 / 4.',
      formulas: [
        '4T = W_1',
        'T = \\frac{W_1}{4}',
        'W_2 = T',
      ],
      steps: [
        'Step 1: Isolate the lower movable pulley C and suspended weight W1 = 500 N.',
        'Step 2: By tracing the continuous cable ropes, the total upward vertical supporting force on pulley C is 4T.',
        'Step 3: Vertical equilibrium: 4T = 500 N => T = 125 N.',
        'Step 4: The free load W2 is supported directly by the continuous tension line: W2 = T = 125 N.',
        'Step 5: Hence, W2 = 125 N (Option D).',
      ],
      finalAnswer: '125 (Option D)',
      pageNumber: 441,
    },
  },

  // Item 5
  {
    id: 'psad-apr2025-q5',
    number: 5,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - Pulley Equilibrium with Self-Weight',
    text: 'Situation 2 — 5. For the system of pulleys in Figure 1, $W_1 = 750\$. If each pulley weighs 50 N, what is the tension (N) in the pulley between A and B? The system is in equilibrium.',
    options: [
      { label: 'A', text: '425' },
      { label: 'B', text: '675' },
      { label: 'C', text: '450' },
      { label: 'D', text: '375' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equilibrium of pulley C yields 2T + T2 = W1 + W_pulley = 800 N, and equilibrium of pulley B yields T2 = 2T + W_pulley = 2T + 50 N. Solving simultaneously gives T = 187.5 N and T2 = 425 N.',
      formulas: [
        '2T + T_2 = W_1 + 50 = 800',
        'T_2 = 2T + 50',
        '800 - 2T = 2T + 50 \\implies 4T = 750 \\implies T = 187.5',
        'T_2 = 2(187.5) + 50 = 425',
      ],
      steps: [
        'Step 1: Consider the vertical equilibrium of pulley C (weight 50 N) supporting W1 = 750 N: Total downward load = 750 + 50 = 800 N.',
        'Step 2: Upward forces on pulley C are 2T from the outer loop and T2 from the suspension line from pulley B: 2T + T2 = 800 N => T2 = 800 - 2T.',
        'Step 3: Consider the vertical equilibrium of movable pulley B (weight 50 N): Downward forces are the pulley weight (50 N) and 2T from the loop, balanced by upward tension T2 between A and B: T2 = 2T + 50 N.',
        'Step 4: Equate expressions for T2: 800 - 2T = 2T + 50 => 4T = 750 => T = 187.5 N.',
        'Step 5: Compute tension T2 in the line connecting pulleys A and B: T2 = 2(187.5) + 50 = 425 N (Option A).',
      ],
      finalAnswer: '425 (Option A)',
      pageNumber: 441,
    },
  },

  // Item 6
  {
    id: 'psad-apr2025-q6',
    number: 6,
    pageNumber: 420,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - Pulley Block System Tension',
    text: 'Situation 2 — 6. For the system of pulleys in Figure 2, if $W = 900\$, what is the tension (N) in rope 4?',
    options: [
      { label: 'A', text: '275' },
      { label: 'B', text: '375' },
      { label: 'C', text: '225' },
      { label: 'D', text: '450' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Pulley B balances weight W = 900 N with two supporting ropes carrying tension T = 450 N. Pulley A divides tension T equally between ropes 3 and 4, giving T4 = T / 2 = 225 N.',
      formulas: [
        '2T = W = 900 \\implies T = 450',
        'T_4 = T_3 = \\frac{T}{2} = \\frac{450}{2} = 225',
      ],
      steps: [
        'Step 1: Consider movable pulley B: It directly supports suspended weight W = 900 N.',
        'Step 2: The two upward lines (1 and 2) from pulley B carry equal tension: 2T = 900 N => T = 450 N.',
        'Step 3: Rope 2 loops over fixed pulley A. Ropes 3 and 4 support pulley A, carrying equal shares of tension T: T4 = T3 = T / 2.',
        'Step 4: Tension in rope 4: T4 = 450 / 2 = 225 N (Option C).',
      ],
      finalAnswer: '225 (Option C)',
      pageNumber: 442,
    },
  },

  // Item 7
  {
    id: 'psad-apr2025-q7',
    number: 7,
    pageNumber: 420,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - Boom Equilibrium & Cable Tension',
    text: 'Situation 3 — The rigid boom $BCD$ is used to lift a load $W = 60\$ with the help of flexible cables $AC$ and $AD$, as shown in the figure. Neglect the weight of the boom and the friction in the pulley.\nGiven: $L_1 = L_2 = 4\$, $H = 6\$\n\n7. Determine the tension (kN) in cable $AC$.',
    figureCaption: 'Situation 3: Rigid boom BCD supported by cables AC and AD lifting load W = 60 kN',
    figureSvg: `<svg viewBox="0 0 500 320" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid7" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#grid7)" rx="12"/>
      
      <!-- Wall at left -->
      <line x1="80" y1="40" x2="80" y2="260" stroke="#94a3b8" stroke-width="4"/>
      <!-- Hinge A and Pin B -->
      <circle cx="80" cy="80" r="5" fill="#f59e0b"/>
      <text x="65" y="85" fill="#f59e0b" font-size="14" font-weight="bold">A</text>
      <circle cx="80" cy="240" r="5" fill="#38bdf8"/>
      <text x="65" y="248" fill="#38bdf8" font-size="14" font-weight="bold">B</text>
      
      <!-- Boom BCD -->
      <line x1="80" y1="240" x2="420" y2="80" stroke="#f8fafc" stroke-width="5" stroke-linecap="round"/>
      <!-- Point C on boom (midpoint) -->
      <circle cx="250" cy="160" r="4" fill="#10b981"/>
      <text x="255" y="180" fill="#10b981" font-size="13" font-weight="bold">C</text>
      <!-- Point D at end of boom -->
      <circle cx="420" cy="80" r="7" fill="#f59e0b"/>
      <text x="430" y="75" fill="#f59e0b" font-size="13" font-weight="bold">D (pulley)</text>
      
      <!-- Cable AD (Horizontal) -->
      <line x1="80" y1="80" x2="420" y2="80" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 2"/>
      <!-- Cable AC -->
      <line x1="80" y1="80" x2="250" y2="160" stroke="#10b981" stroke-width="2.5"/>
      
      <!-- Load W -->
      <line x1="420" y1="80" x2="420" y2="160" stroke="#f8fafc" stroke-width="2"/>
      <rect x="400" y="160" width="40" height="30" rx="4" fill="#334155" stroke="#f8fafc" stroke-width="1.5"/>
      <text x="420" y="180" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">W</text>
      
      <!-- Dimension labels -->
      <line x1="80" y1="55" x2="250" y2="55" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="165" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">L₁ = 4 m</text>
      <line x1="250" y1="55" x2="420" y2="55" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="335" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">L₂ = 4 m</text>
      
      <line x1="50" y1="80" x2="50" y2="240" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="35" y="165" fill="#94a3b8" font-size="11" text-anchor="middle">H = 6 m</text>
      
      <!-- Angle beta at A -->
      <path d="M 120 80 A 40 40 0 0 1 115 97" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="125" y="100" fill="#f59e0b" font-size="11">β</text>
      <!-- Angle alpha at B -->
      <path d="M 80 210 A 30 30 0 0 1 100 230" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="95" y="215" fill="#38bdf8" font-size="11">α</text>
    </svg>`,
    options: [
      { label: 'A', text: '35' },
      { label: 'B', text: '60' },
      { label: 'C', text: '25' },
      { label: 'D', text: '80' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Taking moments about pin B gives horizontal reaction Ah = 80 kN. Geometry gives cable angle β = 36.87°. Horizontal equilibrium at pin A yields TAC = 25 kN.',
      formulas: [
        'T_{AD} = W = 60',
        '\\sum M_B = 0 \\implies 60(8) - A_h(6) = 0 \\implies A_h = 80',
        '\\tan\\beta = \\frac{h}{L_1} = \\frac{3}{4} \\implies \\beta = 36.87^\\circ',
        '\\sum F_h(\\text{at } A) = 0 \\implies T_{AD} + T_{AC}\\cos 36.87^\\circ - A_h = 0',
        '60 + T_{AC}(0.8) - 80 = 0 \\implies T_{AC} = 25',
      ],
      steps: [
        'Step 1: The pulley at D is frictionless, so the horizontal cable AD carries the full suspended load: TAD = W = 60 kN.',
        'Step 2: Take moments about pin B for the entire system: ΣMB = 0 => 60(8) - Ah(6) = 0 => Ah = 80 kN (directed leftward).',
        'Step 3: Point C is at mid-span of the boom: by similar triangles, its vertical depth below A is h = 6 × (4 / 8) = 3 m.',
        'Step 4: Cable AC angle with the horizontal: tan β = 3 / 4 => β = 36.87°, cos β = 0.8, sin β = 0.6.',
        'Step 5: Horizontal equilibrium at joint A: TAD + TAC cos β - Ah = 0 => 60 + 0.8 TAC - 80 = 0 => TAC = 20 / 0.8 = 25 kN (Option C).',
      ],
      finalAnswer: '25 (Option C)',
      pageNumber: 442,
    },
  },

  // Item 8
  {
    id: 'psad-apr2025-q8',
    number: 8,
    pageNumber: 420,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - Frame Support Reactions',
    text: 'Situation 3 — 8. Determine the horizontal reaction (kN) at $B$.',
    options: [
      { label: 'A', text: '80' },
      { label: 'B', text: '60' },
      { label: 'C', text: '25' },
      { label: 'D', text: '45' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Horizontal equilibrium of the entire structure gives Bh - Ah = 0, so Bh = Ah = 80 kN.',
      formulas: [
        '\\sum F_h = 0 \\implies B_h - A_h = 0',
        'B_h = A_h = 80',
      ],
      steps: [
        'Step 1: From the moment equilibrium about B, the horizontal reaction at support A is Ah = 80 kN (leftward).',
        'Step 2: Since the applied load W is purely vertical and cable AD is internal to the boom/frame assembly, global horizontal equilibrium requires ΣFh = 0.',
        'Step 3: Bh - Ah = 0 => Bh = 80 kN (directed rightward).',
        'Step 4: Hence, the horizontal reaction at B is 80 kN (Option A).',
      ],
      finalAnswer: '80 (Option A)',
      pageNumber: 442,
    },
  },

  // Item 9
  {
    id: 'psad-apr2025-q9',
    number: 9,
    pageNumber: 420,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - Frame Support Reactions',
    text: 'Situation 3 — 9. Determine the vertical reaction (kN) at $B$.',
    options: [
      { label: 'A', text: '45' },
      { label: 'B', text: '80' },
      { label: 'C', text: '25' },
      { label: 'D', text: '60' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Vertical equilibrium at joint A gives Av = TAC sin β = 15 kN (upward). Global vertical equilibrium gives Bv = W - Av = 60 - 15 = 45 kN.',
      formulas: [
        'A_v = T_{AC}\\sin\\beta = 25\\sin 36.87^\\circ = 15',
        '\\sum F_v = 0 \\implies A_v + B_v - W = 0',
        '15 + B_v - 60 = 0 \\implies B_v = 45',
      ],
      steps: [
        'Step 1: Isolate joint A to find its vertical reaction component: ΣFv = Av - TAC sin β = 0.',
        'Step 2: Av = 25 × sin(36.87°) = 25 × 0.6 = 15 kN (acting upward).',
        'Step 3: Consider global vertical equilibrium of the entire structure: ΣFv = Av + Bv - W = 0.',
        'Step 4: Substitute known values: 15 + Bv - 60 = 0 => Bv = 45 kN (upward).',
        'Step 5: Therefore, the vertical reaction at B is 45 kN (Option A).',
      ],
      finalAnswer: '45 (Option A)',
      pageNumber: 443,
    },
  },

  // Item 10
  {
    id: 'psad-apr2025-q10',
    number: 10,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - Vehicle Traction & Friction on Inclined Tow',
    text: 'Situation 4 — The pick-up truck shown has a weight of $28\$ and a center of mass at $G$, $0.8\$ above the ground. The coefficient of static friction between the wheels and the ground is $\\mu_w = 0.30$ and between the log and the ground, it is $\\mu_l = 0.60$.\nGiven: $a = 1.6\$; $b = 1.2\$; $h_1 = 0.4\$; $h_2 = 0.8\$.\n\n10. Determine the force (kN) in the cable connecting the truck and the log if the truck has a rear wheel drive while the front wheels are free to roll.',
    figureCaption: 'Situation 4: Pick-up truck pulling log on level ground with rear and four-wheel drive',
    figureSvg: `<svg viewBox="0 0 540 240" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid10" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#grid10)" rx="12"/>
      
      <!-- Ground line -->
      <line x1="20" y1="180" x2="520" y2="180" stroke="#64748b" stroke-width="3"/>
      
      <!-- Log -->
      <rect x="50" y="140" width="100" height="40" rx="6" fill="#78350f" stroke="#d97706" stroke-width="2"/>
      <text x="100" y="165" fill="#fef3c7" font-size="11" font-weight="bold" text-anchor="middle">Log (Wₗ)</text>
      
      <!-- Tow Cable -->
      <line x1="150" y1="156" x2="260" y2="156" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5 2"/>
      <text x="205" y="148" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">F (cable)</text>
      <line x1="200" y1="156" x2="200" y2="180" stroke="#94a3b8" stroke-width="1"/>
      <text x="215" y="172" fill="#94a3b8" font-size="9">h₁=0.4m</text>
      
      <!-- Truck Body -->
      <path d="M 260 156 L 310 156 L 330 110 L 400 110 L 430 140 L 470 140 L 470 165 L 260 165 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
      <rect x="335" y="115" width="30" height="25" rx="2" fill="#0284c7" opacity="0.6"/>
      <rect x="375" y="115" width="25" height="25" rx="2" fill="#0284c7" opacity="0.6"/>
      
      <!-- Wheels -->
      <!-- Rear Wheel B -->
      <circle cx="300" cy="180" r="18" fill="#0f172a" stroke="#e2e8f0" stroke-width="3"/>
      <circle cx="300" cy="180" r="5" fill="#e2e8f0"/>
      <text x="300" y="210" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">B (Rear)</text>
      <!-- Front Wheel A -->
      <circle cx="430" cy="180" r="18" fill="#0f172a" stroke="#e2e8f0" stroke-width="3"/>
      <circle cx="430" cy="180" r="5" fill="#e2e8f0"/>
      <text x="430" y="210" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">A (Front)</text>
      
      <!-- CG point G -->
      <circle cx="374" cy="130" r="4" fill="#ef4444"/>
      <text x="382" y="133" fill="#ef4444" font-size="11" font-weight="bold">G (W=28kN)</text>
      <line x1="374" y1="130" x2="374" y2="180" stroke="#94a3b8" stroke-dasharray="2 2"/>
      
      <!-- Dimension labels -->
      <line x1="300" y1="225" x2="374" y2="225" stroke="#94a3b8" stroke-width="1"/>
      <text x="337" y="237" fill="#94a3b8" font-size="10" text-anchor="middle">a = 1.6 m</text>
      <line x1="374" y1="225" x2="430" y2="225" stroke="#94a3b8" stroke-width="1"/>
      <text x="402" y="237" fill="#94a3b8" font-size="10" text-anchor="middle">b = 1.2 m</text>
    </svg>`,
    options: [
      { label: 'A', text: '13.54' },
      { label: 'B', text: '3.76' },
      { label: 'C', text: '6.25' },
      { label: 'D', text: '15.46' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'With rear wheel drive, front wheels roll freely (fA = 0). Traction force F = fB = 0.30 NB. Moment equilibrium about rear contact B gives NB = 12.537 kN, yielding cable force F = 3.76 kN.',
      formulas: [
        'f_A = 0, \\quad f_B = \\mu_w N_B = 0.30 N_B',
        '\\sum F_h = 0 \\implies F = f_B = 0.30 N_B',
        '\\sum F_v = 0 \\implies N_A + N_B = 28 \\implies N_A = 28 - N_B',
        '\\sum M_B = 0 \\implies 28(1.6) - N_A(2.8) - F(0.4) = 0',
        '44.8 - (28 - N_B)(2.8) - (0.30 N_B)(0.4) = 0 \\implies N_B = 12.537',
        'F = 0.30(12.537) = 3.761',
      ],
      steps: [
        'Step 1: Front wheels are free to roll without traction torque, so friction at A is zero: fA = 0.',
        'Step 2: Rear wheels provide all propulsion force: F = fB = μw NB = 0.30 NB.',
        'Step 3: Vertical equilibrium gives NA = 28 - NB.',
        'Step 4: Take moments about rear wheel contact B: ΣMB = 0 => 28(1.6) - NA(2.8) - F(0.4) = 0.',
        'Step 5: Substitute NA and F: 44.8 - 2.8(28 - NB) - 0.12 NB = 0 => 2.68 NB = 33.6 => NB = 12.537 kN.',
        'Step 6: Compute cable force: F = 0.30(12.537) = 3.761 kN ≈ 3.76 kN (Option B).',
      ],
      finalAnswer: '3.76 (Option B)',
      pageNumber: 444,
    },
  },

  // Item 11
  {
    id: 'psad-apr2025-q11',
    number: 11,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - Friction & Maximum Towing Capacity',
    text: 'Situation 4 — 11. Determine the greatest load (kN) it can move.',
    options: [
      { label: 'A', text: '6.27' },
      { label: 'B', text: '5.14' },
      { label: 'C', text: '8.36' },
      { label: 'D', text: '9.28' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The maximum log weight Wl that can be pulled corresponds to overcoming static friction under the log: F = μl Wl = 0.60 Wl, yielding Wl = 3.761 / 0.60 = 6.27 kN.',
      formulas: [
        'f_l = \\mu_l N_l = \\mu_l W_l = 0.60 W_l',
        'F = f_l = 3.761',
        'W_l = \\frac{F}{0.60} = \\frac{3.761}{0.60} = 6.268',
      ],
      steps: [
        'Step 1: The maximum towing force developed by the rear-wheel drive truck is F = 3.761 kN.',
        'Step 2: For horizontal motion of the log on level ground: ΣFh = F - fl = 0 => F = fl.',
        'Step 3: The maximum static friction opposing log motion is fl = μl Nl = 0.60 Wl.',
        'Step 4: Solve for log weight: Wl = F / 0.60 = 3.761 / 0.60 = 6.268 kN ≈ 6.27 kN (Option A).',
      ],
      finalAnswer: '6.27 (Option A)',
      pageNumber: 444,
    },
  },

  // Item 12
  {
    id: 'psad-apr2025-q12',
    number: 12,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - Four-Wheel Drive Traction Capacity',
    text: 'Situation 4 — 12. Determine the greatest load (kN) it can move if the truck has four-wheel drive.',
    options: [
      { label: 'A', text: '18' },
      { label: 'B', text: '14' },
      { label: 'C', text: '20' },
      { label: 'D', text: '16' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'With four-wheel drive, both front and rear axles contribute traction: F = μw(NA + NB) = 0.30(28) = 8.4 kN. Maximum log load is Wl = F / 0.60 = 14 kN.',
      formulas: [
        'F = f_A + f_B = \\mu_w(N_A + N_B) = 0.30(28) = 8.4',
        'F = f_l = \\mu_l W_l = 0.60 W_l',
        'W_l = \\frac{8.4}{0.60} = 14',
      ],
      steps: [
        'Step 1: In four-wheel drive, all wheels develop traction simultaneously up to static friction limits.',
        'Step 2: Total normal force on all tires equals truck weight: NA + NB = 28 kN.',
        'Step 3: Maximum tractive force developed: F = fA + fB = μw(NA + NB) = 0.30 × 28 = 8.4 kN.',
        'Step 4: Overcoming log ground friction: F = 0.60 Wl => Wl = 8.4 / 0.60 = 14 kN.',
        'Step 5: Therefore, the maximum load the 4WD truck can move is 14 kN (Option B).',
      ],
      finalAnswer: '14 (Option B)',
      pageNumber: 445,
    },
  },

  // Item 13
  {
    id: 'psad-apr2025-q13',
    number: 13,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - 3D Force Vectors & Directional Components',
    text: 'Situation 5 — A force $F$ acts on top of the pole in the direction shown in the figure.\nGiven: $x = 5\$, $y = 4\$, $z = 8\$.\n\n13. If $F = 18\$, find the $x$-component of $F$ (kN).',
    figureCaption: 'Situation 5: 3D force vector F acting from top of vertical pole B along cable BC',
    figureSvg: `<svg viewBox="0 0 460 300" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid13" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#grid13)" rx="12"/>
      
      <!-- Coordinate Axes: Origin A -->
      <line x1="260" y1="240" x2="140" y2="280" stroke="#64748b" stroke-width="2"/>
      <text x="130" y="285" fill="#64748b" font-size="12" font-weight="bold">x</text>
      <line x1="260" y1="240" x2="420" y2="240" stroke="#64748b" stroke-width="2"/>
      <text x="425" y="244" fill="#64748b" font-size="12" font-weight="bold">y</text>
      <line x1="260" y1="240" x2="260" y2="40" stroke="#64748b" stroke-width="2"/>
      <text x="260" y="32" fill="#64748b" font-size="12" font-weight="bold">z</text>
      
      <!-- Base A -->
      <circle cx="260" cy="240" r="4" fill="#f8fafc"/>
      <text x="270" y="248" fill="#f8fafc" font-size="11" font-weight="bold">A</text>
      
      <!-- Vertical Pole AB -->
      <line x1="260" y1="240" x2="260" y2="100" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
      <circle cx="260" cy="100" r="5" fill="#f59e0b"/>
      <text x="270" y="95" fill="#f59e0b" font-size="12" font-weight="bold">B (z = 8m)</text>
      
      <!-- Point C in xy-plane projection -->
      <line x1="260" y1="240" x2="330" y2="240" stroke="#94a3b8" stroke-dasharray="3 3"/>
      <line x1="330" y1="240" x2="210" y2="275" stroke="#94a3b8" stroke-dasharray="3 3"/>
      <!-- Guy Cable BC -->
      <line x1="260" y1="100" x2="210" y2="200" stroke="#38bdf8" stroke-width="3"/>
      <circle cx="210" cy="200" r="5" fill="#38bdf8"/>
      <text x="195" y="200" fill="#38bdf8" font-size="12" font-weight="bold">C</text>
      
      <!-- Force Vector Arrow F -->
      <line x1="260" y1="100" x2="230" y2="160" stroke="#ef4444" stroke-width="3.5" marker-end="url(#arrow)"/>
      <text x="248" y="150" fill="#ef4444" font-size="13" font-weight="bold">F</text>
      
      <!-- Dimension labels -->
      <text x="360" y="235" fill="#94a3b8" font-size="11">y = 4 m</text>
      <text x="170" y="255" fill="#94a3b8" font-size="11">x = 5 m</text>
      <text x="285" y="170" fill="#94a3b8" font-size="11">z = 8 m</text>
    </svg>`,
    options: [
      { label: 'A', text: '8.78' },
      { label: 'B', text: '14.05' },
      { label: 'C', text: '7.03' },
      { label: 'D', text: '12.24' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The true length of cable BC is L = √(x² + y² + z²) = √105 = 10.247 m. The x-component is Fx = F(x / L) = 18(5 / √105) = 8.78 kN.',
      formulas: [
        'L = \\sqrt{x^2 + y^2 + z^2} = \\sqrt{5^2 + 4^2 + 8^2} = \\sqrt{105} = 10.247',
        'F_x = F \\left(\\frac{x}{L}\\right) = 18\\left(\\frac{5}{\\sqrt{105}}\\right) = 8.783',
      ],
      steps: [
        'Step 1: Compute total 3D spatial distance from pole apex B to point C: L = √(5² + 4² + 8²) = √(25 + 16 + 64) = √105 ≈ 10.247 m.',
        'Step 2: The direction cosines are lx = x / L = 5 / √105, ly = y / L = 4 / √105, lz = z / L = 8 / √105.',
        'Step 3: Compute x-component: Fx = F × (x / L) = 18 × (5 / 10.247) = 8.783 kN ≈ 8.78 kN.',
        'Step 4: Therefore, Fx = 8.78 kN (Option A).',
      ],
      finalAnswer: '8.78 (Option A)',
      pageNumber: 445,
    },
  },

  // Item 14
  {
    id: 'psad-apr2025-q14',
    number: 14,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - 3D Force Vectors & Directional Components',
    text: 'Situation 5 — 14. If the $y$-component of the force $F$ is $20\$, find the value of $F$ (kN).',
    options: [
      { label: 'A', text: '25.62' },
      { label: 'B', text: '41.00' },
      { label: 'C', text: '38.51' },
      { label: 'D', text: '51.24' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Using direction cosine ratio Fy = F(y / L), solving for F gives F = 20 × √105 / 4 = 51.24 kN.',
      formulas: [
        'F_y = F \\left(\\frac{y}{L}\\right)',
        '20 = F \\left(\\frac{4}{\\sqrt{105}}\\right)',
        'F = \\frac{20\\sqrt{105}}{4} = 5\\sqrt{105} = 51.235',
      ],
      steps: [
        'Step 1: Given spatial dimensions: x = 5 m, y = 4 m, z = 8 m => L = √105 m.',
        'Step 2: Relation between force vector magnitude and y-component: Fy = F × (y / L).',
        'Step 3: Substitute Fy = 20 kN and y / L = 4 / √105: 20 = F × (4 / √105).',
        'Step 4: Solve for F: F = 20 × (√105 / 4) = 5 × 10.247 = 51.235 kN ≈ 51.24 kN (Option D).',
      ],
      finalAnswer: '51.24 (Option D)',
      pageNumber: 445,
    },
  },

  // Item 15
  {
    id: 'psad-apr2025-q15',
    number: 15,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Engineering Mechanics - 3D Force Vectors & Geometry Reconstruction',
    text: 'Situation 5 — 15. Given: $F_x = 24\$; $F_y = 18\$; $F_z = 16\$; Length of cable $= 6.8\$.\nDetermine the height (m) of the pole.',
    options: [
      { label: 'A', text: '4.8' },
      { label: 'B', text: '3.6' },
      { label: 'C', text: '5.2' },
      { label: 'D', text: '3.2' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute resultant force F = √(24² + 18² + 16²) = 34 kN. The vertical dimension z (pole height) is z = (Fz / F) × L = (16 / 34) × 6.8 = 3.2 m.',
      formulas: [
        'F = \\sqrt{F_x^2 + F_y^2 + F_z^2} = \\sqrt{24^2 + 18^2 + 16^2} = \\sqrt{1156} = 34',
        'z = \\left(\\frac{F_z}{F}\\right) L = \\left(\\frac{16}{34}\\right)(6.8) = 3.2',
      ],
      steps: [
        'Step 1: Compute total vector magnitude of force F: F = √(24² + 18² + 16²) = √(576 + 324 + 256) = √1156 = 34 kN.',
        'Step 2: Force components are strictly proportional to geometric coordinate differences along the cable length L = 6.8 m: Fz / F = z / L.',
        'Step 3: Solve for height of the pole z: z = (Fz / F) × L = (16 / 34) × 6.8 m = 3.2 m.',
        'Step 4: Therefore, the height of the pole is 3.2 m (Option D).',
      ],
      finalAnswer: '3.2 (Option D)',
      pageNumber: 446,
    },
  },
];
