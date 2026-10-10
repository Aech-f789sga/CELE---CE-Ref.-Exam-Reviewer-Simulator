import { Question } from '../../../types/exam';

export const HPGE_PART1: Question[] = [
  // --- QUESTION 1 ---
  {
    id: 'hpge-q1',
    number: 1,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Fluid Statics - Atmospheric Pressure & Barometer',
    text: 'An improvised barometer uses a liquid which was observed to weigh 0.80 times of mercury. At the base of the mountain the barometer reads 950 mm. At the same instant, another barometer of the same kind at the top of the mountain reads 600 mm. Determine the height (km) of the mountain.',
    options: [
      { label: 'A', text: '4.22' },
      { label: 'B', text: '3.11' },
      { label: 'C', text: '1.22' },
      { label: 'D', text: '2.33' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute pressure difference between base and top: ΔP = γ_liq · Δh = γ_air · h_mountain.',
      formulas: [
        'S_liq = 0.80 · 13.6 = 10.88',
        'Δh = 950 - 600 = 350 mm = 0.35 m',
        'h_m = Δh · (γ_liq / γ_air) = 0.35 · [ 9810 · (10.88) / 12 ] = 3,113 m = 3.113 km',
      ],
      steps: [
        'Step 1: Specific gravity of liquid = 0.8 × 13.6 = 10.88.',
        'Step 2: Head difference Δh = 950 mm - 600 mm = 350 mm = 0.35 m.',
        'Step 3: Pressure difference ΔP = γ_liq · Δh = 9810(10.88) · (0.35) = 37,356.48 N/m².',
        'Step 4: Mountain height h_m = ΔP / γ_air = 37,356.48 / 12 = 3,113 m = 3.11 km.',
      ],
      finalAnswer: '3.11 km (Option B)',
      pageNumber: 74,
    },
  },

  // --- QUESTION 2 ---
  {
    id: 'hpge-q2',
    number: 2,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Fluid Statics - Variable Unit Weight Hydrostatic Pressure',
    text: 'The unit weight of a liquid is variable and is given by the equation γ = 12 + 0.5h, where γ is in kN/m³ and h is the depth of the liquid from the surface in meters. Determine the gage pressure (kPa) at a depth of 3 m.',
    options: [
      { label: 'A', text: '40.50' },
      { label: 'B', text: '45.00' },
      { label: 'C', text: '38.25' },
      { label: 'D', text: '32.85' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Integrate the variable unit weight function over depth: p = ∫₀ʰ γ(h) dh.',
      formulas: [
        'p = ∫₀³ (12 + 0.5h) dh',
        'p = [ 12h + 0.25h² ]₀³',
        'p = 12(3) + 0.25(3)² = 36 + 2.25 = 38.25 kPa',
      ],
      steps: [
        'Step 1: Use hydrostatic differential equation dp = γ dh.',
        'Step 2: Integrate from h = 0 to h = 3 m: p = ∫₀³ (12 + 0.5h) dh.',
        'Step 3: Evaluate antiderivative: [ 12(3) + 0.25(9) ] = 36 + 2.25 = 38.25 kPa.',
        'Common mistake to avoid: Evaluating γ at depth 3 m (13.5) and multiplying by 3 gives 40.5 kPa, which incorrectly assumes uniform weight.',
      ],
      finalAnswer: '38.25 kPa (Option C)',
      pageNumber: 74,
    },
  },

  // --- QUESTION 3 ---
  {
    id: 'hpge-q3',
    number: 3,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Relative Equilibrium - Accelerated Closed Cylindrical Tank',
    text: 'A closed cylindrical tank 4 m long and 1.5 m in diameter fully filled with water is placed on a truck moving at an acceleration of 3.5 m/s². How much force is acting on the back side of the tank?',
    options: [
      { label: 'A', text: '17.67' },
      { label: 'B', text: '37.74' },
      { label: 'C', text: '16.76' },
      { label: 'D', text: '37.06' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Calculate dynamic water head rise at rear: tan θ = a/g, y = L tan θ, h̄ = y + D/2, F = γ h̄ A.',
      formulas: [
        'tan θ = a / g = 3.5 / 9.81 => θ = 19.635°',
        'y = L tan θ = 4 · tan(19.635°) = 1.427 m',
        'h̄ = y + 0.75 = 1.427 + 0.75 = 2.177 m',
        'F = γ · h̄ · A = 9.81 · (2.177) · [ (π/4) · (1.5)² ] = 37.74 kN',
      ],
      steps: [
        'Step 1: Determine hydraulic grade line slope: tan θ = a / g = 3.5 / 9.81 = 0.35678.',
        'Step 2: Head difference across length: y = L tan θ = 4 × 0.35678 = 1.427 m.',
        'Step 3: Depth to centroid of rear circle: h̄ = y + D/2 = 1.427 + 0.75 = 2.177 m.',
        'Step 4: Rear face area A = π/4 × (1.5)² = 1.767 m².',
        'Step 5: Total hydrostatic force: F = 9.81 × 2.177 × 1.767 = 37.74 kN.',
      ],
      finalAnswer: '37.74 kN (Option B)',
      pageNumber: 75,
    },
  },

  // --- QUESTION 4 ---
  {
    id: 'hpge-q4',
    number: 4,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Relative Equilibrium - Rotating Open Cylindrical Vessel',
    text: 'An open cylindrical tank 1.3 m in diameter and 2.1 m high is 2/3 full of water. If the tank is rotated 87 rpm about its vertical axis, obtain the volume (L) of water spilled.',
    options: [
      { label: 'A', text: '263' },
      { label: 'B', text: '257' },
      { label: 'C', text: '273' },
      { label: 'D', text: '249' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute height of paraboloid y = ω²r²/(2g). Compare initial freeboard to y/2 to determine spilled volume.',
      formulas: [
        'ω = 87 · (π/30) = 9.111 rad/s',
        'y = (ω² · r²) / (2g) = [ (9.111)² · (0.65)² ] / [ 2 · 9.81 ] = 1.788 m',
        'Initial water depth h = (2/3) · 2.1 = 1.4 m; Freeboard = 2.1 - 1.4 = 0.7 m',
        'Δh = (y/2) - freeboard = (1.788/2) - 0.7 = 0.194 m',
        'V_spill = π · r² · Δh = π · (0.65)² · (0.194) = 0.2575 m³ = 257.5 L ≈ 257 L',
      ],
      steps: [
        'Step 1: Angular velocity ω = 87 × (π / 30) = 9.111 rad/s.',
        'Step 2: Total height of paraboloid y = ω²r² / (2g) = 1.788 m.',
        'Step 3: Initial water depth = 1.4 m, so freeboard to tank rim is 0.7 m.',
        'Step 4: Liquid rise at rim before spillage is y/2 = 0.894 m. Since 0.894 m > 0.7 m, spillage occurs.',
        'Step 5: The permanent drop in resting water level is Δh = 0.894 - 0.7 = 0.194 m.',
        'Step 6: Spilled volume = π (0.65)² (0.194) = 0.2575 m³ = 257.5 L.',
      ],
      finalAnswer: '257 L (Option B)',
      pageNumber: 76,
    },
  },

  // --- QUESTION 5 ---
  {
    id: 'hpge-q5',
    number: 5,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Fluid Statics - Hydrostatic Horizontal Force on Sector Gate',
    text: 'The sector gate shown consists of a cylindrical surface of which AB is the trace. The length of the gate perpendicular to the paper is 10 m. Given: R = 6 m, θ = 60°. Determine the horizontal force (kN) acting on the gate.',
    figureCaption: 'Sector gate cylindrical surface trace AB with radius R and pivot O',
    figureSvg: `<svg viewBox="0 0 320 290" class="w-full max-w-xs mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hpgeWaterShade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
      <stop offset="25%" stop-color="#334155" stop-opacity="0.8"/>
      <stop offset="65%" stop-color="#64748b" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#94a3b8" stop-opacity="0.2"/>
    </linearGradient>
    <pattern id="hpgeHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" stroke="#475569" stroke-width="0.8"/>
    </pattern>
  </defs>

  <!-- Foundation hatching under floor and point A -->
  <rect x="15" y="226" width="105" height="12" fill="url(#hpgeHatch)" opacity="0.6"/>
  <line x1="15" y1="225" x2="120" y2="225" stroke="#0f172a" stroke-width="1.5"/>

  <!-- Water body behind gate -->
  <path d="M 15 45 L 165 45 A 208 208 0 0 0 60 225 L 15 225 Z" fill="url(#hpgeWaterShade)"/>

  <!-- Wavy water surface at top -->
  <path d="M 15 45 Q 27 43 39 45 T 63 45 T 87 45 T 111 45 T 135 45 T 155 45 L 165 45" fill="none" stroke="#0f172a" stroke-width="1.8"/>

  <!-- Sector Gate Double-Lined Curved Plate -->
  <path d="M 165 45 A 208 208 0 0 0 60 225 L 68 225 A 200 200 0 0 1 169 52 Z" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" stroke-linejoin="round"/>

  <!-- Dashed radius line OA -->
  <line x1="60" y1="225" x2="268" y2="225" stroke="#0f172a" stroke-width="1.2" stroke-dasharray="3,3"/>

  <!-- Dashed radius line OB -->
  <line x1="165" y1="45" x2="268" y2="225" stroke="#0f172a" stroke-width="1.2" stroke-dasharray="3,3"/>

  <!-- Angle theta shaded sector wedge at O -->
  <path d="M 268 225 L 232 225 A 36 36 0 0 1 250 194 Z" fill="#94a3b8" fill-opacity="0.6" stroke="#475569" stroke-width="1"/>

  <!-- Center pivot dot O -->
  <circle cx="268" cy="225" r="4" fill="#0f172a"/>

  <!-- Text Annotations -->
  <text x="162" y="32" text-anchor="middle" font-family="'Times New Roman', serif" font-size="18" font-weight="bold" fill="#0f172a">B</text>
  <text x="56" y="248" text-anchor="middle" font-family="'Times New Roman', serif" font-size="18" font-weight="bold" fill="#0f172a">A</text>
  <text x="282" y="240" text-anchor="start" font-family="'Times New Roman', serif" font-size="18" font-weight="bold" fill="#0f172a">O</text>
  <text x="145" y="248" text-anchor="middle" font-family="'Times New Roman', serif" font-size="17" fill="#0f172a">R</text>
  <text x="230" y="132" text-anchor="middle" font-family="'Times New Roman', serif" font-size="17" fill="#0f172a">R</text>
  <text x="216" y="210" text-anchor="middle" font-family="'Times New Roman', serif" font-size="17" fill="#0f172a">θ</text>
</svg>`,
    options: [
      { label: 'A', text: '1180' },
      { label: 'B', text: '1081' },
      { label: 'C', text: '1234' },
      { label: 'D', text: '1324' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Horizontal force equals the hydrostatic force on the vertical projection of the curved surface: F_h = γ · (h/2) · (h · L).',
      formulas: [
        'h = R · sin θ = 6 · sin 60° = 5.196 m ≈ 5.2 m',
        'A_proj = h · L = 5.196 · 10 = 51.96 m²',
        'F_h = γ · h̄ · A = 9.81 · (5.196 / 2) · 51.96 = 1,324.35 kN ≈ 1,324 kN',
      ],
      steps: [
        'Step 1: Vertical projection height of arc AB: h = R sin 60° = 6 × 0.8660 = 5.196 m.',
        'Step 2: Projected vertical area A = 5.196 m × 10 m = 51.96 m².',
        'Step 3: Depth to centroid of projected rectangle = h / 2 = 2.598 m.',
        'Step 4: Horizontal force F_h = 9.81 kN/m³ × 2.598 m × 51.96 m² = 1,324.35 kN.',
      ],
      finalAnswer: '1324 kN (Option D)',
      pageNumber: 77,
    },
  },

  // --- QUESTION 6 ---
  {
    id: 'hpge-q6',
    number: 6,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Fluid Statics - Layered Liquids on Submerged Plate',
    text: 'A rectangular plate is 1.5 m wide by 2 m long is vertically submerged half in oil having a specific gravity of 0.84 and half in fresh water such that its shorter edge is flushed with the top surface of the upper liquid and parallel to it. Obtain the total force (kN) acting on the lower half of the plate.',
    options: [
      { label: 'A', text: '18.5' },
      { label: 'B', text: '15.8' },
      { label: 'C', text: '17.9' },
      { label: 'D', text: '19.7' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute pressure at centroid of lower plate section: p_cg = γ_oil · h_oil + γ_w · h_w_cg, then F = p_cg · A_lower.',
      formulas: [
        'p_cg = (9.81 · 0.84 · 1.0) + (9.81 · 0.5) = 8.2404 + 4.905 = 13.145 kPa',
        'A_lower = 1.5 · 1.0 = 1.5 m²',
        'F = p_cg · A_lower = 13.145 · 1.5 = 19.718 kN ≈ 19.7 kN',
      ],
      steps: [
        'Step 1: Top 1.0 m is oil (s = 0.84). Pressure at oil-water interface = 9.81 × 0.84 × 1.0 = 8.24 kPa.',
        'Step 2: Centroid of lower 1.0 m is 0.5 m below interface.',
        'Step 3: Gage pressure at centroid = 8.2404 + 9.81 × 0.5 = 13.145 kPa.',
        'Step 4: Force F = 13.145 kPa × (1.5 m × 1.0 m) = 19.718 kN ≈ 19.7 kN.',
      ],
      finalAnswer: '19.7 kN (Option D)',
      pageNumber: 78,
    },
  },

  // --- QUESTION 7 ---
  {
    id: 'hpge-q7',
    number: 7,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Fluid Statics - Hinged Gate Moment Equilibrium',
    text: 'A vertical rectangular gate 1.5 m wide and 3 m high is hinged at the bottom with the shorter edge horizontal. On one side of the gate, water stands level with its top of the gate. On the other side, water stands 2 m below the top. Calculate the force (kN) applied at the top of the gate to open it.',
    options: [
      { label: 'A', text: '23.15' },
      { label: 'B', text: '22.26' },
      { label: 'C', text: '25.13' },
      { label: 'D', text: '21.26' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Take moments about bottom hinge: ΣM_hinge = F₁ · (h₁/3) - F₂ · (h₂/3) - P · h_gate = 0.',
      formulas: [
        'F₁ = γ · (3/2) · (3 · 1.5) = 9.81 · 1.5 · 4.5 = 66.2175 kN (at 1 m from hinge)',
        'F₂ = γ · (1/2) · (1 · 1.5) = 9.81 · 0.5 · 1.5 = 7.358 kN (at 1/3 m from hinge)',
        'P = [ 66.2175 · (1) - 7.358 · (1/3) ] / 3 = [ 66.2175 - 2.4527 ] / 3 = 21.255 kN ≈ 21.26 kN',
      ],
      steps: [
        'Step 1: High side (3m depth): Force F₁ = 66.2175 kN acting at 1.0 m above bottom hinge.',
        'Step 2: Low side (1m depth): Force F₂ = 7.358 kN acting at 0.333 m above bottom hinge.',
        'Step 3: Moment equation about hinge: 66.2175(1) - 7.358(1/3) - P(3) = 0.',
        'Step 4: Solve for opening force P = 21.255 kN ≈ 21.26 kN.',
      ],
      finalAnswer: '21.26 kN (Option D)',
      pageNumber: 78,
    },
  },

  // --- QUESTION 8 ---
  {
    id: 'hpge-q8',
    number: 8,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Buoyancy & Flotation - Floating Timber Weight',
    text: "An engineer wanted to determine the weight of a piece of wood having a rectangular cross section and certain length with only a carpenter's tape available and curing tank containing water 1.8 meters deep. He recorded the cross section of the wood to be 50 mm × 100 mm with a length of 1.5 meters. Placing the wood vertically into the curing tank, he noticed that 0.50 meters projects out of the water as it floats. What is the weight (N) of the wood?",
    options: [
      { label: 'A', text: '45.09' },
      { label: 'B', text: '34.50' },
      { label: 'C', text: '49.05' },
      { label: 'D', text: '35.40' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For a floating body, total weight equals buoyant force: W = BF = γ_w · V_submerged.',
      formulas: [
        'h_submerged = 1.5 - 0.50 = 1.0 m',
        'V_D = (0.05 m) · (0.10 m) · (1.0 m) = 0.005 m³',
        'W = BF = 9810 N/m³ · 0.005 m³ = 49.05 N',
      ],
      steps: [
        'Step 1: Submerged depth = 1.5 m - 0.50 m = 1.0 m.',
        'Step 2: Displaced volume V_D = 0.05 × 0.10 × 1.0 = 0.005 m³.',
        'Step 3: Weight = Buoyant force = 9,810 N/m³ × 0.005 m³ = 49.05 N.',
      ],
      finalAnswer: '49.05 N (Option C)',
      pageNumber: 79,
    },
  },

  // --- QUESTION 9 ---
  {
    id: 'hpge-q9',
    number: 9,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Buoyancy & Flotation - Submerged Anchored Sphere',
    text: 'A sphere of radius 400 mm is immersed in seawater (s.g. = 1.026) by anchoring it to the bottom of the seabed. The mooring line was observed to have a tension of 800 N. Evaluate the specific weight (kN/m³) of the sphere.',
    options: [
      { label: 'A', text: '12.10' },
      { label: 'B', text: '12.78' },
      { label: 'C', text: '7.08' },
      { label: 'D', text: '8.07' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Equilibrium: BF - T - W_sphere = 0, then γ_sphere = W_sphere / V_sphere.',
      formulas: [
        'V_s = (4/3) · π · (0.4)³ = 0.26808 m³',
        'BF = (9810 · 1.026) · (0.26808) = 2,698.3 N',
        'W_s = BF - T = 2,698.3 - 800 = 1,898.3 N = 1.8983 kN',
        'γ_sphere = W_s / V_s = 1.8983 / 0.26808 = 7.081 kN/m³',
      ],
      steps: [
        'Step 1: Volume of sphere V = 4/3 π (0.4)³ = 0.26808 m³.',
        'Step 2: Buoyant force in seawater = 9810 × 1.026 × 0.26808 = 2,698.3 N.',
        'Step 3: Weight of sphere W = BF - T = 2,698.3 - 800 = 1,898.3 N.',
        'Step 4: Specific weight = 1,898.3 N / 0.26808 m³ = 7,081 N/m³ = 7.08 kN/m³.',
      ],
      finalAnswer: '7.08 kN/m³ (Option C)',
      pageNumber: 80,
    },
  },

  // --- QUESTION 10 ---
  {
    id: 'hpge-q10',
    number: 10,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Buoyancy & Flotation - Ship Draft in Seawater vs Freshwater',
    text: 'A ship, with vertical sides near the waterline, weighs 40 MN including its cargo and has a draft of 6.7 meters in seawater (s.g. = 1.026). Unloading 2 MN of its cargo, the draft decreases to 6.4 m. With its cargo reduced, the ship enters a harbor of fresh water. Evaluate the draft of the ship (m) in fresh water.',
    options: [
      { label: 'A', text: '6.51' },
      { label: 'B', text: '6.53' },
      { label: 'C', text: '6.55' },
      { label: 'D', text: '6.59' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Find waterline area A_s from draft change during cargo discharge, then find fresh water draft from volume displacement.',
      formulas: [
        'W₂ = 40 - 2 = 38 MN = 38,000 kN',
        'Δd = 6.7 - 6.4 = 0.3 m => A_s = ΔW / (γ_sw · Δd) = 2,000 / [ 9.81(1.026) · 0.3 ] = 662.37 m²',
        'V_Dfw = 38,000 / 9.81 = 3,873.6 m³; V_Dsw = 38,000 / [ 9.81(1.026) ] = 3,775.4 m³',
        'd_fw = 6.4 + (V_Dfw - V_Dsw) / A_s = 6.4 + (98.2 / 662.37) = 6.4 + 0.148 = 6.548 m ≈ 6.55 m',
      ],
      steps: [
        'Step 1: Reduced ship weight W₂ = 38,000 kN.',
        'Step 2: Waterline section area A_s = 2,000 kN / (10.065 kN/m³ × 0.3 m) = 662.37 m².',
        'Step 3: Displaced volume in freshwater = 38,000 / 9.81 = 3,873.6 m³.',
        'Step 4: Displaced volume in seawater = 38,000 / 10.065 = 3,775.4 m³.',
        'Step 5: Increase in draft Δd = (3,873.6 - 3,775.4) / 662.37 = 0.148 m.',
        'Step 6: Fresh water draft = 6.4 + 0.148 = 6.548 m ≈ 6.55 m.',
      ],
      finalAnswer: '6.55 m (Option C)',
      pageNumber: 80,
    },
  },

  // --- QUESTION 11 ---
  {
    id: 'hpge-q11',
    number: 11,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Fluid Statics - Hydrostatic Vertical Force on Sector Gate',
    text: 'The sector gate shown consists of a cylindrical surface of which AB is the trace. The length of the gate perpendicular to the paper is 10 m. Given: R = 6 m, θ = 60°. Determine the vertical force (kN) acting on the gate.',
    figureCaption: 'Sector gate cylindrical surface trace AB with radius R and pivot O',
    figureSvg: `<svg viewBox="0 0 320 290" class="w-full max-w-xs mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hpgeWaterShade11" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
      <stop offset="25%" stop-color="#334155" stop-opacity="0.8"/>
      <stop offset="65%" stop-color="#64748b" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#94a3b8" stop-opacity="0.2"/>
    </linearGradient>
    <pattern id="hpgeHatch11" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" stroke="#475569" stroke-width="0.8"/>
    </pattern>
  </defs>

  <!-- Foundation hatching under floor and point A -->
  <rect x="15" y="226" width="105" height="12" fill="url(#hpgeHatch11)" opacity="0.6"/>
  <line x1="15" y1="225" x2="120" y2="225" stroke="#0f172a" stroke-width="1.5"/>

  <!-- Water body behind gate -->
  <path d="M 15 45 L 165 45 A 208 208 0 0 0 60 225 L 15 225 Z" fill="url(#hpgeWaterShade11)"/>

  <!-- Wavy water surface at top -->
  <path d="M 15 45 Q 27 43 39 45 T 63 45 T 87 45 T 111 45 T 135 45 T 155 45 L 165 45" fill="none" stroke="#0f172a" stroke-width="1.8"/>

  <!-- Sector Gate Double-Lined Curved Plate -->
  <path d="M 165 45 A 208 208 0 0 0 60 225 L 68 225 A 200 200 0 0 1 169 52 Z" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" stroke-linejoin="round"/>

  <!-- Dashed radius line OA -->
  <line x1="60" y1="225" x2="268" y2="225" stroke="#0f172a" stroke-width="1.2" stroke-dasharray="3,3"/>

  <!-- Dashed radius line OB -->
  <line x1="165" y1="45" x2="268" y2="225" stroke="#0f172a" stroke-width="1.2" stroke-dasharray="3,3"/>

  <!-- Angle theta shaded sector wedge at O -->
  <path d="M 268 225 L 232 225 A 36 36 0 0 1 250 194 Z" fill="#94a3b8" fill-opacity="0.6" stroke="#475569" stroke-width="1"/>

  <!-- Center pivot dot O -->
  <circle cx="268" cy="225" r="4" fill="#0f172a"/>

  <!-- Text Annotations -->
  <text x="162" y="32" text-anchor="middle" font-family="'Times New Roman', serif" font-size="18" font-weight="bold" fill="#0f172a">B</text>
  <text x="56" y="248" text-anchor="middle" font-family="'Times New Roman', serif" font-size="18" font-weight="bold" fill="#0f172a">A</text>
  <text x="282" y="240" text-anchor="start" font-family="'Times New Roman', serif" font-size="18" font-weight="bold" fill="#0f172a">O</text>
  <text x="145" y="248" text-anchor="middle" font-family="'Times New Roman', serif" font-size="17" fill="#0f172a">R</text>
  <text x="230" y="132" text-anchor="middle" font-family="'Times New Roman', serif" font-size="17" fill="#0f172a">R</text>
  <text x="216" y="210" text-anchor="middle" font-family="'Times New Roman', serif" font-size="17" fill="#0f172a">θ</text>
</svg>`,
    options: [
      { label: 'A', text: '1000.6' },
      { label: 'B', text: '692.3' },
      { label: 'C', text: '847.2' },
      { label: 'D', text: '444.7' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Vertical force equals the weight of imaginary water volume above curved trace AB: F_v = γ · [ A_trapezoid - A_sector ] · L.',
      formulas: [
        'A_trapezoid = 0.5 · [ (6 - 6 cos 60°) + 6 ] · 6 sin 60° = 0.5 · [ 3 + 6 ] · 5.196 = 23.383 m²',
        'A_sector = π · (6)² · (60° / 360°) = 18.850 m²',
        'A_net = 23.383 - 18.850 = 4.533 m²',
        'F_v = γ_w · A_net · L = 9.81 · 4.533 · 10 = 444.7 kN',
      ],
      steps: [
        'Step 1: Compute trapezoid area bounded by surface trace and vertical projection = 23.383 m².',
        'Step 2: Compute sector OBA area = (π × 6² × 60) / 360 = 18.850 m².',
        'Step 3: Net water wedge cross section = 23.383 - 18.850 = 4.533 m².',
        'Step 4: Vertical upward hydrostatic force F_v = 9.81 × 4.533 × 10 = 444.7 kN.',
      ],
      finalAnswer: '444.7 kN (Option D)',
      pageNumber: 83,
    },
  },

  // --- QUESTION 12 ---
  {
    id: 'hpge-q12',
    number: 12,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Pipe Flow - Darcy-Weisbach Reservoir Difference',
    text: 'A 3-m diameter pipeline of length 2,500 m conveys water between reservoirs at the rate of 10 m³/s. What must be the difference in water surface elevation between the reservoirs? Neglect minor loss and assume a friction factor of 0.018.',
    options: [
      { label: 'A', text: '2.13' },
      { label: 'B', text: '1.65' },
      { label: 'C', text: '1.53' },
      { label: 'D', text: '1.89' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Between large reservoirs, surface elevation difference equals pipe head loss: ΔH = h_f = 8 f L Q² / (π² g D⁵).',
      formulas: [
        'HL = [ 8 · f · L · Q² ] / [ π² · g · D⁵ ]',
        'HL = [ 8 · (0.018) · (2500) · (10)² ] / [ π² · (9.81) · (3)⁵ ]',
        'HL = 36,000 / [ 96.824 · 243 ] = 36,000 / 23,528 = 1.531 m ≈ 1.53 m',
      ],
      steps: [
        'Step 1: By Bernoulli equation between reservoir water surfaces: z_A - z_B = h_f.',
        'Step 2: Plug parameters into Darcy-Weisbach head loss formula.',
        'Step 3: Head loss HL = 1.531 m ≈ 1.53 m.',
      ],
      finalAnswer: '1.53 m (Option C)',
      pageNumber: 84,
    },
  },
];
