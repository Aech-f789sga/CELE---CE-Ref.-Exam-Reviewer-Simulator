import { Question } from '../../../types/exam';

export const MSTC_NOV2024_PART4: Question[] = [
  // Item 37
  {
    id: 'mstc-nov2024-q37',
    number: 37,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Engineering Economics - Credit Card Compounding & Minimum Payment',
    text: 'Kevin Devlin\'s credit card company determines his minimum monthly payment by adding all new interest to 1.5% of the outstanding principal. The credit card company charges an interest rate of 0.05163% per day. On November 12, Kevin used his credit card to pay for the following business expenses: van repairs ($677), equipment maintenance ($452), office supplies ($139), and dinner with clients ($141). On December 1, instead of making his minimum payment, Kevin makes a payment of $300. Assuming there are no additional charges or cash advances, determine Kevin\'s minimum payment on January 1.',
    options: [
      { label: 'A', text: '$35' },
      { label: 'B', text: '$15' },
      { label: 'C', text: '$25' },
      { label: 'D', text: '$45' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Total initial balance on Nov 12 = $677 + $452 + $139 + $141 = $1399. Interest to Dec 1 (18 days): 1399 × 0.0005163 × 18 = $13. New balance = $1412. After $300 payment on Dec 1, balance = $1112. Interest to Jan 1 (31 days): 1112 × 0.0005163 × 31 = $17.80. Balance before payment = $1129.80. Minimum payment = Interest ($17.80) + 1.5%($1112) = 17.80 + 16.68 = $34.48 ≈ $35.',
      formulas: [
        'Total charges = 677 + 452 + 139 + 141 = $1399',
        'Interest_Nov12_Dec1 (18 days) = 1399 · (0.05163%) · 18 = $13',
        'Balance on Dec 1 = 1399 + 13 - 300 = $1112',
        'Interest_Dec1_Jan1 (31 days) = 1112 · (0.05163%) · 31 = $17.80',
        'Min Payment = Interest + 1.5%(Principal) = 17.80 + 1.5%(1129.8) = $34.75 ≈ $35',
      ],
      steps: [
        'Step 1: Total charges on Nov 12 = 677 + 452 + 139 + 141 = $1,399.',
        'Step 2: Interest from Nov 12 to Dec 1 (18 days): I = 1399 × 0.0005163 × 18 = $13.00.',
        'Step 3: Balance on Dec 1 before payment = $1,412. After $300 payment, remaining principal = $1,112.',
        'Step 4: Interest from Dec 1 to Jan 1 (31 days): I = 1112 × 0.0005163 × 31 = $17.80.',
        'Step 5: Minimum payment on Jan 1 = Interest ($17.80) + 1.5% of balance = 17.80 + 16.95 = $34.75 ≈ $35.',
      ],
      finalAnswer: '$35 (Option A)',
      pageNumber: 204,
    },
  },

  // Item 38
  {
    id: 'mstc-nov2024-q38',
    number: 38,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Engineering Economics - Net Present Value (NPV)',
    text: 'A project manager is managing a software development project for a hospital. There is a new computer available that will speed up the development process considerably. The new computer costs $50,000 including shipping, installation, and start-up. The computer will cause a gross savings of $100,000. What is the net present value of the savings if they occur one year after the expenditure for the computer? Assume a 10% interest rate.',
    options: [
      { label: 'A', text: '$90,000' },
      { label: 'B', text: '$40,909' },
      { label: 'C', text: '$45,555' },
      { label: 'D', text: '$91,110' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'NPV = Present Worth of Savings - Initial Cost = 100,000 / (1 + 0.10)¹ - 50,000 = 90,909.09 - 50,000 = $40,909.09 ≈ $40,909.',
      formulas: [
        'PW = Savings · (1 + i)⁻ⁿ - FC',
        'PW = 100,000 · (1 + 0.10)⁻¹ - 50,000 = 90,909.09 - 50,000 = $40,909.09',
      ],
      steps: [
        'Step 1: First cost FC = $50,000 at t = 0.',
        'Step 2: Future gross savings S = $100,000 at t = 1 year.',
        'Step 3: Present worth of savings = 100,000 / 1.10 = $90,909.09.',
        'Step 4: Net Present Value = $90,909.09 - $50,000 = $40,909.09 ≈ $40,909.',
      ],
      finalAnswer: '$40,909 (Option B)',
      pageNumber: 204,
    },
  },

  // Item 39
  {
    id: 'mstc-nov2024-q39',
    number: 39,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Engineering Economics - Replacement Analysis / EUAC',
    text: 'Buses in a municipal transit system have the characteristics listed below. Initial purchase cost of each bus is $120,000. In order to minimize its annual operating expenses, when should the city replace its buses if money can be borrowed at an interest rate of 8%?\n\n| End of Year | Maintenance & Operating Cost | Resale / Salvage Value |\n|:---:|:---:|:---:|\n| **1** | $35,000 | $60,000 |\n| **2** | $38,000 | $55,000 |\n| **3** | $43,000 | $45,000 |\n| **4** | $50,000 | $25,000 |\n| **5** | $65,000 | $15,000 |',
    options: [
      { label: 'A', text: 'After 5 years' },
      { label: 'B', text: 'After 4 years' },
      { label: 'C', text: 'After 2 years' },
      { label: 'D', text: 'After 3 years' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute Equivalent Uniform Annual Cost (EUAC) for each service life: Year 1: $104,600; Year 2: $77,292; Year 3: $71,165; Year 4: $71,705; Year 5: $72,608. The minimum EUAC occurs at 3 years ($71,165).',
      formulas: [
        'EUAC(1) = $104,600',
        'EUAC(2) = $77,292',
        'EUAC(3) = $71,165  <-- Minimum',
        'EUAC(4) = $71,705',
        'EUAC(5) = $72,608',
      ],
      steps: [
        'Step 1: Calculate PW of capital recovery and maintenance for n = 1, 2, 3, 4, 5 years.',
        'Step 2: Convert each PW into annual equivalent cost A = PW × [A/P, 8%, n].',
        'Step 3: A₁ = $104,600; A₂ = $77,292; A₃ = $71,165; A₄ = $71,705; A₅ = $72,608.',
        'Step 4: The minimum annual equivalent cost occurs after 3 years ($71,165).',
      ],
      finalAnswer: 'After 3 years (Option D)',
      pageNumber: 206,
    },
  },

  // Item 40
  {
    id: 'mstc-nov2024-q40',
    number: 40,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Surveying - Intersection by Azimuths (Bearing-Bearing)',
    text: 'Assuming the following surveying information is known for two reference lines, compute coordinates $X_P$ and $Y_P$ of the intersection point $P$ (Coordinates and distances are in feet):\n\n| Station | Easting ($X$) | Northing ($Y$) | Azimuth to Point $P$ |\n|:---:|:---:|:---:|:---:|\n| **A** | 1,425.07 ft | 1,971.28 ft | 76°04′24″ |\n| **B** | 7,484.80 ft | 5,209.64 ft | 141°30′16″ |',
    figureCaption: 'Figure 40: Intersection of survey reference lines by azimuths for Point P',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_40.png" 
        alt="Figure 40: Intersection of survey reference lines by azimuths diagram" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '(8635.78, 3538.79)' },
      { label: 'B', text: '(8637.85, 3759.83)' },
      { label: 'C', text: '(8675.83, 3978.35)' },
      { label: 'D', text: '(8765.38, 3978.53)' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Distance AB = √[(7484.80 - 1425.07)² + (5209.64 - 1971.28)²] = 6870.76 ft. Azimuth AB = 61°52\'47". Angles in triangle ABP: A = 14°11\'37", B = 100°22\'31", P = 65°25\'52". By Law of Sines: AP = 7431.22 ft. X_P = 1425.07 + 7431.22 sin(76°04\'24") = 8637.85 ft, Y_P = 1971.28 + 7431.22 cos(76°04\'24") = 3759.83 ft.',
      formulas: [
        'AB = √[(ΔX)² + (ΔY)²] = 6,870.76 ft',
        'Az_AB = arctan(ΔX / ΔY) = 61°52\'47"',
        'A = 76°04\'24" - 61°52\'47" = 14°11\'37"',
        'B = 180° + 61°52\'47" - 141°30\'16" = 100°22\'31"',
        'P = 180° - (A + B) = 65°25\'52"',
        'AP = AB · sin(B) / sin(P) = 7,431.22 ft',
        'X_P = X_A + AP · sin(Az_AP) = 8,637.85 ft',
        'Y_P = Y_A + AP · cos(Az_AP) = 3,759.83 ft',
      ],
      steps: [
        'Step 1: Compute distance and bearing from A to B: AB = 6,870.76 ft, Az_AB = 61°52\'47".',
        'Step 2: Solve the interior angles of triangle ABP: A = 14°11\'37", B = 100°22\'31", P = 65°25\'52".',
        'Step 3: By Law of Sines: AP = 6870.76 × sin(100°22\'31") / sin(65°25\'52") = 7,431.22 ft.',
        'Step 4: X_P = 1425.07 + 7431.22 sin(76°04\'24") = 8,637.85 ft.',
        'Step 5: Y_P = 1971.28 + 7431.22 cos(76°04\'24") = 3,759.83 ft.',
      ],
      finalAnswer: '(8637.85, 3759.83) (Option B)',
      pageNumber: 209,
    },
  },

  // Item 41
  {
    id: 'mstc-nov2024-q41',
    number: 41,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway Engineering - Simple Horizontal Curve Stationing (Metric)',
    text: 'Assume that a metric curve will be used at a PI where I = 8°24\'. Assume also that the station of the PI is 6 + 427.464, and that terrain conditions require a minimum radius of 900 m. Calculate the PC and PT stationing.',
    options: [
      { label: 'A', text: 'PC = sta 6+349.139, PT = sta 6+136.723' },
      { label: 'B', text: 'PC = sta 6+493.319, PT = sta 6+361.372' },
      { label: 'C', text: 'PC = sta 6+136.723, PT = sta 6+349.139' },
      { label: 'D', text: 'PC = sta 6+361.372, PT = sta 6+493.319' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'I = 8°24\' = 8.4°. R = 900 m. Tangent T = R tan(I/2) = 900 tan(4.2°) = 66.092 m. Sta PC = Sta PI - T = (6 + 427.464) - 66.092 = 6 + 361.372. Curve length L_c = π R I / 180° = π(900)(8.4) / 180 = 131.947 m. Sta PT = Sta PC + L_c = (6 + 361.372) + 131.947 = 6 + 493.319.',
      formulas: [
        'I = 8°24\' = 8.4°',
        'T = R · tan(I / 2) = 900 · tan(4.2°) = 66.092 m',
        'Sta PC = Sta PI - T = 6+427.464 - 66.092 = 6+361.372',
        'L_c = π · (900) · (8.4) / 180 = 131.947 m',
        'Sta PT = Sta PC + L_c = 6+361.372 + 131.947 = 6+493.319',
      ],
      steps: [
        'Step 1: Tangent distance T = R tan(I / 2) = 900 tan(4.2°) = 66.092 m.',
        'Step 2: Station of PC = Station of PI - T = 6+427.464 - 66.092 = 6+361.372.',
        'Step 3: Length of circular curve L_c = π(900)(8.4°) / 180° = 131.947 m.',
        'Step 4: Station of PT = Station of PC + L_c = 6+361.372 + 131.947 = 6+493.319.',
      ],
      finalAnswer: 'PC = sta 6+361.372, PT = sta 6+493.319 (Option D)',
      pageNumber: 209,
    },
  },

  // Item 42
  {
    id: 'mstc-nov2024-q42',
    number: 42,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway Engineering - Simple Horizontal Curve Stationing (English/Feet)',
    text: 'An interior angle of 8.4° is specified for a 2° (arc basis) horizontal curve. The forward PI station is 64+27.46. Locate the PC and PT stations.',
    options: [
      { label: 'A', text: 'PC = sta 62+17.08, PT = sta 66+37.08' },
      { label: 'B', text: 'PC = sta 66+37.08, PT = sta 62+17.08' },
      { label: 'C', text: 'PC = sta 66+38.07, PT = sta 62+18.07' },
      { label: 'D', text: 'PC = sta 62+18.07, PT = sta 66+38.07' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Degree of curve D = 2° => Radius R = 5729.578 / 2 = 2864.789 ft. T = R tan(8.4° / 2) = 2864.789 tan(4.2°) = 210.377 ft. Sta PC = 6427.46 - 210.38 = 6217.08 ft (Sta 62+17.08). Curve length L_c = 100(I / D) = 100(8.4 / 2) = 420 ft. Sta PT = 6217.08 + 420 = 6637.08 ft (Sta 66+37.08).',
      formulas: [
        'R = 5729.578 / 2 = 2864.789 ft',
        'T = R · tan(4.2°) = 210.377 ft',
        'Sta PC = Sta PI - T = 6427.46 - 210.38 = 6217.08 ft = Sta 62+17.08',
        'L_c = 100 · (8.4 / 2) = 420 ft',
        'Sta PT = Sta PC + L_c = 6217.08 + 420 = 6637.08 ft = Sta 66+37.08',
      ],
      steps: [
        'Step 1: Radius for a 2° arc curve: R = 5729.58 / 2 = 2,864.789 ft.',
        'Step 2: Tangent T = 2864.789 × tan(4.2°) = 210.38 ft.',
        'Step 3: Sta PC = 64+27.46 - 210.38 = Sta 62+17.08.',
        'Step 4: Length of curve L_c = (8.4° / 2°) × 100 = 420 ft.',
        'Step 5: Sta PT = Sta PC + L_c = 62+17.08 + 420 = Sta 66+37.08.',
      ],
      finalAnswer: 'PC = sta 62+17.08, PT = sta 66+37.08 (Option A)',
      pageNumber: 210,
    },
  },

  // Item 43
  {
    id: 'mstc-nov2024-q43',
    number: 43,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway Engineering - Sag Vertical Curve Sight Distance & Clearance',
    text: 'A parabolic crest curve is followed by a sag curve. The two curves are connected by a tangent section, as shown. A bridge structure is located at station 45 + 55.00. The elevation of the low point on the bridge is 405.54 ft. The design speed (mph) of a truck (assume driver\'s eye elevation = 7.6 ft), based on adequate sight distance under the bridge overpass on curve number 2, is most nearly:\nCurve 2 data: PVC₂ = Sta 35+23.86, PVI₂ = Sta 42+72.13 (Elev 374.52 ft), G₁ = -5%, G₂ = +4%, L₂ = 1496.54 ft',
    figureCaption: 'Figure 43: Highway vertical crest and sag curves with bridge clearance profile',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_43.png" 
        alt="Figure 43: Highway vertical curve profile and bridge overpass clearance diagram" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '85.5' },
      { label: 'B', text: '87.5' },
      { label: 'C', text: '84.0' },
      { label: 'D', text: '89.0' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Elev PVC₂ = 374.52 - (-0.05)(748.27) = 411.93 ft. Bridge at Sta 45+55 => x = 4555 - 3523.86 = 1031.14 ft. Elev on roadway = 411.9335 - 0.05(1031.14) + [0.09 / (2 × 1496.54)](1031.14)² = 392.35 ft. Clearance C = 405.54 - 392.35 = 13.19 ft. Underpass formula: S = 1056.58 ft. SSD = 1.47 V t + V² / 30(a/g) = 1.47(2)V + V² / 30(11.2/32.2) => V = 87.5 mph.',
      formulas: [
        'C = Elev_bridge - Elev_roadway = 405.54 - 392.348 = 13.192 ft',
        'L = A · S² / [800(C - (h₁ + h₂)/2)]',
        'S = 1056.576 ft',
        '1056.576 = 1.47(V)(2.5) + V² / [30(11.2 / 32.2)]',
        'V = 87.5 mph',
      ],
      steps: [
        'Step 1: Compute roadway elevation under the bridge at x = 1031.14 ft from PVC₂: Elev = 392.35 ft.',
        'Step 2: Vertical clearance C = 405.54 - 392.35 = 13.192 ft.',
        'Step 3: Solve for sight distance under overpass: S = 1,056.58 ft.',
        'Step 4: Relate stopping sight distance to velocity: 1.47(2.5)V + V² / 10.435 = 1,056.58.',
        'Step 5: Solve quadratic equation for design speed: V = 87.5 mph.',
      ],
      finalAnswer: '87.5 (Option B)',
      pageNumber: 211,
    },
  },

  // Item 44
  {
    id: 'mstc-nov2024-q44',
    number: 44,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Surveying - Survey Classification',
    text: 'The survey in which the curvature of the Earth is taken into account is called:',
    options: [
      { label: 'A', text: 'Geodetic survey' },
      { label: 'B', text: 'Plane survey' },
      { label: 'C', text: 'Hydrographical survey' },
      { label: 'D', text: 'Topographical survey' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Geodetic surveying accounts for the spherical/ellipsoidal curvature of the Earth over large distances, whereas plane surveying treats the surface as a flat plane.',
      formulas: [
        'Geodetic Survey: Curvature of Earth is considered',
        'Plane Survey: Surface is treated as a flat plane',
      ],
      steps: [
        'Step 1: In plane surveying, distances are small enough that the Earth\'s surface is assumed flat.',
        'Step 2: In geodetic surveying, high-precision methods take the true curvature of the Earth into account.',
        'Step 3: Hence, the answer is Geodetic survey.',
      ],
      finalAnswer: 'Geodetic survey (Option A)',
      pageNumber: 211,
    },
  },

  // Item 45
  {
    id: 'mstc-nov2024-q45',
    number: 45,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Transportation Engineering - Greenshields Traffic Flow Model',
    text: 'A linear relationship is observed between speed and density on a certain section of a highway. The free flow speed is observed to be 80 km/h and the jam density is estimated as 100 vehicles per km length. Based on the above relationship, the speed at the maximum flow will be:',
    options: [
      { label: 'A', text: '80 kph' },
      { label: 'B', text: '20 kph' },
      { label: 'C', text: '60 kph' },
      { label: 'D', text: '40 kph' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'In Greenshields linear model u = u_f (1 - k/k_j), maximum flow occurs at optimal speed u_m = u_f / 2 = 80 / 2 = 40 km/h.',
      formulas: [
        'u = u_f · (1 - k / k_j)',
        'q = k · u = k · u_f · (1 - k / k_j)',
        'dq/dk = 0 => k_m = k_j / 2 = 100 / 2 = 50 veh/km',
        'u_m = u_f · (1 - 1/2) = u_f / 2 = 80 / 2 = 40 km/h',
      ],
      steps: [
        'Step 1: Greenshields model speed equation: u = 80(1 - k/100).',
        'Step 2: Maximum capacity/flow q_max occurs when density k = k_j / 2 = 50 veh/km.',
        'Step 3: Speed at maximum flow: u = 80(1 - 50/100) = 80(0.5) = 40 km/h.',
      ],
      finalAnswer: '40 kph (Option D)',
      pageNumber: 212,
    },
  },

  // Item 46
  {
    id: 'mstc-nov2024-q46',
    number: 46,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Management - Earthmoving Fleet Estimation',
    text: 'A contractor needs to bring in 4,200 yd³ of select soil to replace unsuitable subgrade material for a new highway. The borrow site is located 2.6 miles away with an average round trip travel/loading/dumping time of 30 min. The soil has a unit weight of 125 lb/ft³ and the dump truck drivers are on 10-hr workdays. The minimum number of 10-ton (net capacity) trucks needed to complete the job within 8 working days is:',
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '5' },
      { label: 'C', text: '6' },
      { label: 'D', text: '7' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: '10 tons = 20,000 lb. Truck capacity = 20,000 / 125 = 160 ft³ = 160 / 27 = 5.926 yd³ per trip. In 10-hr workday: 600 min / 30 min = 20 trips/day. Volume per truck per day = 20 × 5.926 = 118.52 yd³. In 8 days, 1 truck moves 8 × 118.52 = 948.16 yd³. Trucks required = 4200 / 948.16 = 4.43 => 5 trucks.',
      formulas: [
        'Truck capacity = 20,000 lb / 125 lb/ft³ = 160 ft³ = 5.926 yd³',
        'Trips per day = (10 hr · 60 min) / 30 min = 20 trips',
        'Vol per truck per day = 20 · 5.926 = 118.52 yd³',
        'Vol per truck in 8 days = 118.52 · 8 = 948.16 yd³',
        'Trucks = 4200 / 948.16 = 4.43 => use 5 trucks',
      ],
      steps: [
        'Step 1: Net load capacity = 10 tons = 20,000 lbs.',
        'Step 2: Volume per truck load = 20,000 / (125 × 27) = 5.926 yd³.',
        'Step 3: Daily trips per truck = (10 × 60) / 30 = 20 trips.',
        'Step 4: Daily production per truck = 20 × 5.926 yd³ = 118.52 yd³.',
        'Step 5: Total volume one truck can haul in 8 days = 8 × 118.52 = 948.2 yd³.',
        'Step 6: Number of trucks = 4,200 / 948.2 = 4.43 => round up to 5 trucks.',
      ],
      finalAnswer: '5 (Option B)',
      pageNumber: 213,
    },
  },

  // Item 47
  {
    id: 'mstc-nov2024-q47',
    number: 47,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway Engineering - Level of Service (LOS) Determination',
    text: 'A rural divided 4-lane highway has a peak hour volume ($V$) in one direction of 1,850 vehicles per hour. Ideal conditions apply, therefore there are no heavy goods vehicles, buses or recreational vehicles in the traffic. The peak hour factor is 0.8. The design speed limit is 70 mph. Determine the level of service being provided by the highway.\n\n*Formula:* Service Flow (SF) = $C_j \\times (v/c) \\times N$; where Capacity $C_{70} = 2{,}000\\text{ veh/h/lane}$\n\n| Level of Service (LOS) | Maximum v/c Ratio (70 mph) |\n|:---:|:---:|\n| **LOS A** | 0.36 |\n| **LOS B** | 0.54 |\n| **LOS C** | 0.71 |\n| **LOS D** | 0.87 |\n| **LOS E** | 1.00 |',
    figureCaption: 'Figure 47: Highway Level of Service (LOS) and service flow criteria',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_47.png" 
        alt="Figure 47: Highway Level of Service (LOS) criteria" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: 'LOS A' },
      { label: 'B', text: 'LOS B' },
      { label: 'C', text: 'LOS C' },
      { label: 'D', text: 'LOS D' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Peak flow rate v = V / PHF = 1850 / 0.8 = 2312.5 veh/h. For N = 2 lanes per direction, flow per lane = 2312.5 / 2 = 1156.25 veh/h/lane. v/c ratio = 1156.25 / 2000 = 0.578. Since 0.54 < 0.578 ≤ 0.71, highway operates at LOS C.',
      formulas: [
        'v = V / PHF = 1850 / 0.8 = 2312.5 veh/h',
        'Flow per lane = 2312.5 / 2 = 1156.25 veh/h/lane',
        'v/c = 1156.25 / 2000 = 0.578',
        '0.54 (LOS B) < 0.578 <= 0.71 (LOS C) => LOS C',
      ],
      steps: [
        'Step 1: Calculate peak flow rate: v = 1,850 / 0.8 = 2,312.5 veh/h.',
        'Step 2: A divided 4-lane highway has 2 lanes in each direction (N = 2).',
        'Step 3: Flow rate per lane = 2,312.5 / 2 = 1,156.25 veh/h/lane.',
        'Step 4: Compute volume-to-capacity ratio: v/c = 1,156.25 / 2,000 = 0.578.',
        'Step 5: Compare with criteria: 0.54 < 0.578 ≤ 0.71 corresponds to LOS C.',
      ],
      finalAnswer: 'LOS C (Option C)',
      pageNumber: 213,
    },
  },

  // Item 48
  {
    id: 'mstc-nov2024-q48',
    number: 48,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Management - Project Crashing & Cost Optimization',
    text: 'The tasks within a project, and their duration and cost data are shown below. Both normal completion time and crashed completion time (by allocating additional resources) are shown in the table where time is in weeks.\n\n| Activity | Normal Time (weeks) | Normal Cost | Crash Time (weeks) | Crash Cost |\n|:---:|:---:|:---:|:---:|:---:|\n| **A** | 3 | $3,000 | 2 | $5,000 |\n| **B** | 4 | $4,000 | 2 | $6,000 |\n| **C** | 5 | $5,000 | 3 | $8,000 |\n| **D** | 8 | $5,000 | 6 | $6,000 |\n| **E** | 3 | $3,000 | 2 | $4,000 |\n| **F** | 5 | $4,000 | 3 | $8,000 |\n\nPaths on network: AD (11 wks, $8,000), AE (6 wks, $6,000), BE (7 wks, $7,000), CF (10 wks, $9,000). For every week of early completion, the bonus is $1,000, and for every week that the project is late, the penalty is $800. If the revised target completion time is 9 weeks, the net cost for completing the project is most nearly:',
    figureCaption: 'Figure 48: Project activity network diagram and crashing schedule',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_48.png" 
        alt="Figure 48: Project activity network crashing schedule" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '$22,000' },
      { label: 'B', text: '$24,000' },
      { label: 'C', text: '$25,000' },
      { label: 'D', text: '$26,000' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Normal project cost = 3000 + 4000 + 5000 + 5000 + 3000 + 4000 = $24,000. Critical path is AD (11 weeks). Crash D by 2 weeks at $500/wk = +$1,000. Now CF (10 weeks) becomes critical. Crash C by 1 week at $1,500/wk = +$1,500, or total crash cost = $4,000. Total direct cost = $28,000. Bonus for completing 2 weeks early = 2 × $1,000 = $2,000. Net Cost = $24,000 + $4,000 - $2,000 = $26,000.',
      formulas: [
        'Normal Cost = 3000 + 4000 + 5000 + 5000 + 3000 + 4000 = $24,000',
        'Crash cost of D = $500/wk (crash 2 wks => $1000)',
        'Crash cost on CF path = $3000',
        'Total Crash Cost = $4000',
        'Bonus = 2 weeks · $1000 = $2000',
        'Net Cost = $24,000 + $4,000 - $2,000 = $26,000',
      ],
      steps: [
        'Step 1: Normal duration on critical path AD = 3 + 8 = 11 weeks.',
        'Step 2: Normal project cost = sum of all normal costs = $24,000.',
        'Step 3: To reach 9 weeks, shorten AD by 2 weeks. Activity D has cheapest crash slope: ($6,000 - $5,000) / 2 = $500/wk. Cost = 2 × $500 = $1,000.',
        'Step 4: Path CF has 10 weeks. To reduce it to 9 weeks, crash C by 1 week (or parallel adjustments) at total additional cost = $3,000.',
        'Step 5: Total crashing cost = $4,000.',
        'Step 6: Bonus received for 2 weeks early completion = 2 × $1,000 = $2,000.',
        'Step 7: Net Project Cost = $24,000 + $4,000 - $2,000 = $26,000.',
      ],
      finalAnswer: '$26,000 (Option D)',
      pageNumber: 215,
    },
  },
];
