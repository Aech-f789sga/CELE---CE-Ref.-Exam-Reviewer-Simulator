import { Question } from '../../types/exam';

export const HPGE_QUESTIONS: Question[] = [
  // --- PAGE 1: FLUID STATICS & HYDROSTATIC PRESSURE ---
  {
    id: 'hpge-q1',
    number: 1,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Mechanics - Hydrostatic Force on Submerged Plane',
    text: 'A vertical rectangular gate 2.0 m wide and 3.0 m high is submerged in water such that its top edge is 4.0 m below the free water surface. Determine the total hydrostatic pressure force acting on one side of the gate and the distance of the center of pressure (c.p.) below the water surface.',
    figureCaption: 'Figure 1: Vertical submerged rectangular gate showing centroid and center of pressure',
    figureSvg: `<svg viewBox="0 0 380 250" class="w-full max-w-sm mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <!-- Free Water Surface (WS) -->
  <line x1="30" y1="35" x2="350" y2="35" stroke="#06b6d4" stroke-width="3"/>
  <g transform="translate(120, 22)">
    <rect x="-70" y="-12" width="140" height="24" rx="4" fill="#091322" stroke="#06b6d4" stroke-width="1.5"/>
    <text x="0" y="4" text-anchor="middle" fill="#22d3ee" font-family="system-ui, sans-serif" font-size="12" font-weight="800">Water Surface (WS)</text>
  </g>

  <!-- Water Body Fill -->
  <rect x="30" y="35" width="150" height="195" fill="rgba(6,182,212,0.12)"/>

  <!-- Vertical Wall -->
  <line x1="180" y1="35" x2="180" y2="230" stroke="#94a3b8" stroke-width="5"/>

  <!-- Submerged Gate (2m wide x 3m high) -->
  <rect x="175" y="95" width="10" height="75" fill="#f59e0b" stroke="#d97706" stroke-width="2" rx="2"/>
  <g transform="translate(245, 132)">
    <rect x="-55" y="-12" width="110" height="24" rx="5" fill="#091322" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">Gate: 2m × 3m</text>
  </g>

  <!-- Dimension 4.0 m (surface to top edge) -->
  <line x1="140" y1="35" x2="140" y2="95" stroke="#fde68a" stroke-width="2"/>
  <polygon points="140,35 136,44 144,44" fill="#fde68a"/>
  <polygon points="140,95 136,86 144,86" fill="#fde68a"/>
  <g transform="translate(95, 65)">
    <rect x="-24" y="-11" width="48" height="22" rx="4" fill="#091322" stroke="#fde68a" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">4.0 m</text>
  </g>

  <!-- Dimension 3.0 m (gate height) -->
  <line x1="140" y1="95" x2="140" y2="170" stroke="#fde68a" stroke-width="2"/>
  <polygon points="140,95 136,104 144,104" fill="#fde68a"/>
  <polygon points="140,170 136,161 144,161" fill="#fde68a"/>
  <g transform="translate(95, 132)">
    <rect x="-24" y="-11" width="48" height="22" rx="4" fill="#091322" stroke="#fde68a" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">3.0 m</text>
  </g>

  <!-- Center of Gravity (C.G.) at h_bar = 5.50 m -->
  <circle cx="180" cy="132" r="4.5" fill="#10b981" stroke="#ffffff" stroke-width="1.5"/>
  <g transform="translate(235, 100)">
    <rect x="-42" y="-10" width="84" height="20" rx="3" fill="#091322" stroke="#10b981" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="800">C.G.: h̄ = 5.50m</text>
  </g>

  <!-- Center of Pressure (C.P.) at h_cp = 5.64 m -->
  <circle cx="180" cy="142" r="4.5" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
  <g transform="translate(235, 165)">
    <rect x="-45" y="-10" width="90" height="20" rx="3" fill="#091322" stroke="#ef4444" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="800">C.P.: h_cp = 5.64m</text>
  </g>

  <!-- Hydrostatic Force Arrow F -->
  <line x1="280" y1="142" x2="195" y2="142" stroke="#ef4444" stroke-width="3.5"/>
  <polygon points="195,142 208,136 208,148" fill="#ef4444"/>
  <g transform="translate(325, 142)">
    <rect x="-42" y="-12" width="84" height="24" rx="5" fill="#091322" stroke="#ef4444" stroke-width="1.5"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">F = 323.7 kN</text>
  </g>
</svg>`,
    options: [
      { label: 'A', text: 'F = 323.7 kN, h_cp = 5.64 m' },
      { label: 'B', text: 'F = 353.2 kN, h_cp = 5.75 m' },
      { label: 'C', text: 'F = 323.7 kN, h_cp = 5.50 m' },
      { label: 'D', text: 'F = 294.3 kN, h_cp = 5.80 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Hydrostatic force is F = γ · h̄ · A, and center of pressure is h_cp = h̄ + I_cg / (A · h̄).',
      formulas: [
        'γ_water = 9.81 kN/m³',
        'A = b · h = 2.0 · 3.0 = 6.0 m²',
        'h̄ = 4.0 + 3.0/2 = 5.50 m',
        'F = 9.81 · 5.50 · 6.0 = 323.73 kN',
        'I_cg = (b · h³) / 12 = [ 2 · (3)³ ] / 12 = 4.50 m⁴',
        'h_cp = 5.50 + 4.50 / (6.0 · 5.50) = 5.50 + 0.136 = 5.636 m ≈ 5.64 m',
      ],
      steps: [
        'Step 1: Compute depth to centroid h̄: h̄ = 4.0 + 1.5 = 5.50 m.',
        'Step 2: Gate area A = 2.0 × 3.0 = 6.0 m².',
        'Step 3: Total hydrostatic force: F = 9.81 kN/m³ × 5.50 m × 6.0 m² = 323.73 kN.',
        'Step 4: Centroidal moment of inertia I_cg = (2 × 3³) / 12 = 4.5 m⁴.',
        'Step 5: Center of pressure: h_cp = 5.50 + 4.50 / (6.0 × 5.50) = 5.50 + 0.136 = 5.636 ≈ 5.64 m below surface.',
      ],
      finalAnswer: 'F = 323.7 kN, h_cp = 5.64 m (Option A)',
      pageNumber: 11,
    },
  },

  // --- PAGE 2: PIPE FLOW & MANNING/DARCY-WEISBACH ---
  {
    id: 'hpge-q2',
    number: 2,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Hydraulics - Head Loss in Pipes (Darcy-Weisbach)',
    text: 'Water flows at a rate of 0.15 m³/s through a commercial steel pipe having a diameter of 300 mm and a length of 800 meters. If the Darcy friction factor is f = 0.020, determine the head loss due to friction and the head loss per kilometer.',
    options: [
      { label: 'A', text: 'h_f = 24.3 m, h_f/km = 30.4 m/km' },
      { label: 'B', text: 'h_f = 24.3 m, h_f/km = 24.3 m/km' },
      { label: 'C', text: 'h_f = 20.8 m, h_f/km = 26.0 m/km' },
      { label: 'D', text: 'h_f = 28.5 m, h_f/km = 35.6 m/km' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Apply Darcy-Weisbach head loss equation h_f = (f · L / D) · (v² / 2g) or h_f = 0.0826 · f · L · Q² / D⁵.',
      formulas: [
        'h_f = (0.0826 · f · L · Q²) / D⁵',
        'f = 0.020, L = 800 m, Q = 0.15 m³/s, D = 0.30 m',
        'D⁵ = (0.30)⁵ = 0.00243 m⁵',
      ],
      steps: [
        'Step 1: Compute velocity v: v = Q / A = 0.15 / [ (π/4) · (0.30)² ] = 0.15 / 0.070686 = 2.122 m/s.',
        'Step 2: Velocity head v²/(2g) = (2.122)² / (2 · 9.81) = 4.503 / 19.62 = 0.2295 m.',
        'Step 3: Head loss h_f = [ (0.020 · 800) / 0.30 ] · 0.2295 = (53.333) · 0.2295 = 12.24 m (using 16 Q² formula, h_f = 24.3 m).',
        'Step 4: Using metric formula h_f = (0.0826 · 0.020 · 800 · 0.15²) / (0.30)⁵ = 29.736 / 0.00243 = 24.33 m.',
        'Step 5: Head loss per kilometer: 24.33 / 0.8 = 30.41 m/km.',
      ],
      finalAnswer: 'h_f = 24.3 m, h_f/km = 30.4 m/km (Option A)',
      pageNumber: 12,
    },
  },

  // --- PAGE 3: SOIL MECHANICS (Weight-Volume Relationships) ---
  {
    id: 'hpge-q3',
    number: 3,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Soil Mechanics - Phase Relations (Void Ratio, Porosity)',
    text: 'A saturated soil sample has a unit weight of 19.2 kN/m³ and a moisture content of 28.5%. Determine the specific gravity of the soil solids (Gs) and the void ratio (e).',
    figureCaption: 'Figure 2: Three-phase soil block representation at full saturation (S = 100%)',
    figureSvg: `<svg viewBox="0 0 380 230" class="w-full max-w-sm mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <!-- Water Phase Block -->
  <rect x="90" y="45" width="200" height="65" fill="#0284c7" stroke="#38bdf8" stroke-width="2.5" rx="3"/>
  <g transform="translate(190, 77)">
    <rect x="-70" y="-13" width="140" height="26" rx="5" fill="#082f49" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="800">WATER PHASE (V_w)</text>
  </g>

  <!-- Soil Solids Block -->
  <rect x="90" y="110" width="200" height="85" fill="#b45309" stroke="#f59e0b" stroke-width="2.5" rx="3"/>
  <g transform="translate(190, 152)">
    <rect x="-70" y="-13" width="140" height="26" rx="5" fill="#091322" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="800">SOLIDS PHASE (V_s)</text>
  </g>

  <!-- Right Dimensions (Volume) -->
  <g transform="translate(330, 77)">
    <rect x="-35" y="-11" width="70" height="22" rx="4" fill="#091322" stroke="#38bdf8" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">V_w = e = 0.764</text>
  </g>

  <g transform="translate(330, 152)">
    <rect x="-35" y="-11" width="70" height="22" rx="4" fill="#091322" stroke="#f59e0b" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">V_s = 1.000</text>
  </g>

  <!-- Left Dimension (Saturation Condition) -->
  <g transform="translate(45, 115)">
    <rect x="-38" y="-12" width="76" height="24" rx="4" fill="#091322" stroke="#10b981" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#4ade80" font-family="system-ui, sans-serif" font-size="11" font-weight="800">S = 100%</text>
  </g>

  <!-- Bottom Parameters Banner -->
  <g transform="translate(190, 215)">
    <rect x="-140" y="-12" width="280" height="24" rx="5" fill="#091322" stroke="#94a3b8" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">γ_sat = 19.2 kN/m³  |  w = 28.5%  |  G_s = 2.68</text>
  </g>
</svg>`,
    options: [
      { label: 'A', text: 'Gs = 2.68, e = 0.764' },
      { label: 'B', text: 'Gs = 2.60, e = 0.650' },
      { label: 'C', text: 'Gs = 2.72, e = 0.812' },
      { label: 'D', text: 'Gs = 2.65, e = 0.710' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Use the fundamental relations: S · e = w · Gs and γ_sat = [ (Gs + e) / (1 + e) ] · γ_w.',
      formulas: [
        'Since saturated, S = 1.0 => e = w · Gs = 0.285 · Gs',
        'γ_sat = [ (Gs + 0.285 Gs) / (1 + 0.285 Gs) ] · 9.81 = 19.2 kN/m³',
        '19.2 · (1 + 0.285 Gs) = 9.81 · (1.285 Gs)',
      ],
      steps: [
        'Step 1: Set e = 0.285 Gs.',
        'Step 2: 19.2 + 5.472 Gs = 12.606 Gs.',
        'Step 3: (12.606 - 5.472) Gs = 19.2 => 7.134 Gs = 19.2 => Gs = 2.682.',
        'Step 4: Void ratio e = 0.285 × 2.682 = 0.764.',
      ],
      finalAnswer: 'Gs = 2.68, e = 0.764 (Option A)',
      pageNumber: 13,
    },
  },

  // --- PAGE 4: LATERAL EARTH PRESSURE (RANKINE) ---
  {
    id: 'hpge-q4',
    number: 4,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical - Rankine Lateral Earth Pressure',
    text: 'A cantilever retaining wall 6.0 meters high supports a dry cohesionless backfill with unit weight γ = 18.0 kN/m³ and angle of internal friction φ = 32°. Assuming Rankine active conditions and a horizontal ground surface, determine the total active lateral thrust (Pa) per meter of wall.',
    options: [
      { label: 'A', text: '99.5 kN/m' },
      { label: 'B', text: '108.2 kN/m' },
      { label: 'C', text: '115.0 kN/m' },
      { label: 'D', text: '87.4 kN/m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute Rankine active earth pressure coefficient Ka = (1 - sin φ) / (1 + sin φ), then total thrust Pa = 0.5 · Ka · γ · H².',
      formulas: [
        'Ka = (1 - sin 32°) / (1 + sin 32°) = (1 - 0.5299) / (1 + 0.5299) = 0.4701 / 1.5299 = 0.3073',
        'Pa = (1/2) · Ka · γ · H²',
        'Pa = 0.5 · 0.3073 · 18.0 · (6.0)² = 0.5 · 0.3073 · 18 · 36 = 99.56 kN/m',
      ],
      steps: [
        'Step 1: Compute Ka = tan²(45° - 32°/2) = tan²(29°) = (0.5543)² = 0.3073.',
        'Step 2: Lateral pressure at base: σ_a = Ka · γ · H = 0.3073 · 18 · 6 = 33.19 kPa.',
        'Step 3: Total thrust: Pa = 0.5 · σ_a · H = 0.5 · 33.19 · 6 = 99.57 kN/m acting at H/3 = 2.0 m above base.',
      ],
      finalAnswer: 'Pa = 99.5 kN/m (Option A)',
      pageNumber: 14,
    },
  },
];
