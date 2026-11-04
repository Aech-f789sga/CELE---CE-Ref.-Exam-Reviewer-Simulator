import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const MSTC_APR2025_PART4: Question[] = [
  // Item 41
  {
    id: 'mstc-apr2025-q41',
    number: 41,
    pageNumber: 12,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Traffic Engineering & Queueing Theory - D/D/1 Intersection Queue Length',
    text: 'An approach at a pretimed signalized intersection has an arrival rate of 500 veh/hr and a saturation flow rate of 3000 veh/hr. 30 seconds of effective green are given in a 100-second cycle. Provide analysis of the intersection assuming D/D/1 queueing by describing the maximum number of vehicles in the queue.\n\nHint: Q_{max} = λ r',
    options: [
      { label: 'A', text: '7' },
      { label: 'B', text: '9' },
      { label: 'C', text: '10' },
      { label: 'D', text: '8' },
    ],
    ...solved(41, 'C', '10 (Option C)'),
  },

  // Item 42
  {
    id: 'mstc-apr2025-q42',
    number: 42,
    pageNumber: 12,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Transportation & Accident Reconstruction - Skid Distance & Initial Velocity',
    text: 'You are shown an accident scene with a vehicle and a light pole. The vehicle was estimated to hit the light pole at 50 km/hr. The skid marks are measured to be 210, 205, 190, and 195 meters. A trial run that is conducted to help measure the coefficient of friction reveals that a car traveling at 60 km/hr can stop in 100 meters under conditions present at the time of the accident. How fast was the vehicle traveling to begin with?\n\nHint: Average the skid marks, d_b = (v_i² - v_e²) / [2g(f cos(θ) - sin(θ))]',
    options: [
      { label: 'A', text: '89 km/h' },
      { label: 'B', text: '87 km/h' },
      { label: 'C', text: '78 km/h' },
      { label: 'D', text: '98 km/h' },
    ],
    ...solved(42, 'D', '98 km/h (Option D)'),
  },

  // Item 43
  {
    id: 'mstc-apr2025-q43',
    number: 43,
    pageNumber: 13,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Transportation & Traffic Safety - Critical Crash Rate Analysis',
    text: 'An urban arterial street segment 0.2 mile long has an average annual daily traffic (AADT) of 15,400 veh/day. In a three-year period, there have been eight crashes resulting in death and/or injuries and 15 involving property damage only. The statewide average crash experience for similar types of roadway is 375 per 100 mvm for a three-year period of which 120 involved death and/or injury and 255 caused property damage only. Is the 0.2 mile long street segment hazardous? In identifying hazardous locations, consider that a single death/injury crash is equivalent to three property damage crashes. Use a 95% confidence level.\n\nHint:\nTB = (Years × AADT × segment length × 365 days per year) / 100 million\nAVR = 615 equivalent crashes per 100 mvm per year\nTF = 1.96\nCR = AVR + 0.5/TB + TF √(AVR/TB)',
    options: [
      { label: 'A', text: '0.72' },
      { label: 'B', text: '0.98' },
      { label: 'C', text: '1.62' },
      { label: 'D', text: '1.29' },
    ],
    ...solved(43, 'D', '1.29 (Option D)'),
  },

  // Item 44
  {
    id: 'mstc-apr2025-q44',
    number: 44,
    pageNumber: 13,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Management - Overall Labor Premium Factor',
    text: 'The total duration of a project was estimated as follows:\n522 working days at 6 days per week and 10 hr a day of work.\n30 days (10 hr per day) for contingencies such as bad weather, which would be worked on weekends and holidays.\nThe labor agreement defines the regular workday as an 8-hr-long weekday. Labor cost for premium time is 50% for hours during the week, and 80% for weekend work. What is most nearly the overall labor premium rate for the project?',
    options: [
      { label: 'A', text: '1.25' },
      { label: 'B', text: '1.28' },
      { label: 'C', text: '1.31' },
      { label: 'D', text: '1.34' },
    ],
    ...solved(44, 'A', '1.25 (Option A)'),
  },

  // Item 45
  {
    id: 'mstc-apr2025-q45',
    number: 45,
    pageNumber: 14,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Management - Critical Path Method (CPM) Network',
    text: 'A construction project network consisting of activities B through F is shown, along with their durations in days. The critical path consists of the activities:',
    figureCaption: 'Figure 45: CPM Project Network Diagram with activity durations',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
    </marker>
  </defs>

  <!-- Node A (Start) -->
  <circle cx="60" cy="110" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="60" y="115" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">A</text>
  <text x="40" y="90" font-family="monospace" font-size="10" fill="#475569">start</text>

  <!-- Node B (Duration 4) -->
  <circle cx="150" cy="50" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="150" y="47" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">B</text>
  <text x="150" y="60" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">4</text>

  <!-- Node C (Duration 6) -->
  <circle cx="150" cy="170" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="150" y="167" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">C</text>
  <text x="150" y="180" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">6</text>

  <!-- Node D (Duration 5) -->
  <circle cx="240" cy="110" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="240" y="107" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">D</text>
  <text x="240" y="120" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">5</text>

  <!-- Node E (Duration 2) -->
  <circle cx="330" cy="50" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="330" y="47" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">E</text>
  <text x="330" y="60" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">2</text>

  <!-- Node F (Duration 3) -->
  <circle cx="330" cy="170" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="330" y="167" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">F</text>
  <text x="330" y="180" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">3</text>

  <!-- Node G (End) -->
  <circle cx="410" cy="110" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="410" y="115" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">G</text>
  <text x="415" y="90" font-family="monospace" font-size="10" fill="#475569">end</text>

  <!-- Connecting Arrows -->
  <line x1="75" y1="98" x2="135" y2="58" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>
  <line x1="75" y1="122" x2="135" y2="162" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>

  <line x1="168" y1="50" x2="312" y2="50" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>
  <line x1="162" y1="62" x2="225" y2="98" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrow)"/>

  <line x1="252" y1="122" x2="315" y2="158" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrow)"/>
  <line x1="168" y1="170" x2="312" y2="170" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>

  <line x1="345" y1="58" x2="395" y2="98" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>
  <line x1="345" y1="162" x2="395" y2="122" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrow)"/>
</svg>`,
    options: [
      { label: 'A', text: 'A-B-E-G' },
      { label: 'B', text: 'A-B-D-G' },
      { label: 'C', text: 'A-B-D-F-G' },
      { label: 'D', text: 'A-C-F-G' },
    ],
    ...solved(45, 'C', 'A-B-D-F-G (Option C)'),
  },

  // Item 46
  {
    id: 'mstc-apr2025-q46',
    number: 46,
    pageNumber: 14,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Highway Engineering - Concrete Carriageway & Granular Subbase Shortcomings',
    text: 'Which of the following is/are the shortcomings of using granular sub-base in concrete carriageway?\n\nI. Since sub-base is permeable, water can seep through sub-base and soil particles will be pumped out through contraction/expansion joints when subject to traffic load.\nII. Voids can form underneath the pavement structure and the concrete pavement may crack under severe traffic loading.\nIII. Due to workmanship problem, it may have uneven distribution of sub-base and this results in cracking of concrete carriageway when subject to severe traffic loading.',
    options: [
      { label: 'A', text: 'I and II' },
      { label: 'B', text: 'II and III' },
      { label: 'C', text: 'I and III' },
      { label: 'D', text: 'All of the above' },
    ],
    ...solved(46, 'D', 'All of the above (Option D)'),
  },

  // Item 47
  {
    id: 'mstc-apr2025-q47',
    number: 47,
    pageNumber: 14,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Geotechnical Engineering - Slope Stabilization & Soil Nailing Methods',
    text: 'Which of the following is/are methods to treat minor slips?\n\nI. Adoption of larger diameter size bars at closer spacing;\nII. Installation of tie beams at the same horizontal levels;\nIII. Provision of steel wire meshes in-between soil nails;\nIV. Provision of short soil nails in combination of long soil nails.',
    options: [
      { label: 'A', text: 'I, II, and III' },
      { label: 'B', text: 'II, III, and IV' },
      { label: 'C', text: 'I, III, and IV' },
      { label: 'D', text: 'All of the above' },
    ],
    ...solved(47, 'B', 'II, III, and IV (Option B)'),
  },

  // Item 48
  {
    id: 'mstc-apr2025-q48',
    number: 48,
    pageNumber: 15,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Geotechnical Engineering - Soil Nail Pull-Out Testing',
    text: 'Which of the following is/are the main reasons for conducting pull-out tests for soil nails?\n\nI. To check and verify the bond strength between soil and grout adopted during the design of soil nails. This is the main objective of conducting soil nail pull-out test.\nII. To determine the bond strength between soil and grout for future design purpose. However, if this target is to be achieved, the test nails should be loaded to determine the ultimate soil/grout bond with an upper limit of 80% of ultimate tensile strength of steel bars.\nIII. To check if there is any slippage or creep occurrence.\nIV. To check the elastic and plastic deformations of test nails. This is observed during the repeated loading and unloading cycles of soil nails.',
    options: [
      { label: 'A', text: 'I, II, and III' },
      { label: 'B', text: 'II, III, and IV' },
      { label: 'C', text: 'I, III, and IV' },
      { label: 'D', text: 'All of the above' },
    ],
    ...solved(48, 'D', 'All of the above (Option D)'),
  },

  // Item 49
  {
    id: 'mstc-apr2025-q49',
    number: 49,
    pageNumber: 15,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Materials - Timber Moisture Mechanics',
    text: 'Which of the following refers to the property of wood that it expands when it absorbs moisture and shrinks when it dries or loses moisture?',
    options: [
      { label: 'A', text: 'Susceptibility' },
      { label: 'B', text: 'Moisture content' },
      { label: 'C', text: 'Seasoning' },
      { label: 'D', text: 'Hygroscopic' },
    ],
    ...solved(49, 'D', 'Hygroscopic (Option D)'),
  },

  // Item 50
  {
    id: 'mstc-apr2025-q50',
    number: 50,
    pageNumber: 15,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Materials - Physical & Electrical Properties of Glass',
    text: 'Which of the following is NOT TRUE about glass?\n\nA. When light falls on a piece of glass, some of that light is reflected and some is absorbed.\nB. It is nonporous and nonabsorptive, and thus is impervious to many common elements that affect other materials.\nC. Offers low resistance to the passage of electricity.\nD. Glass is fatigue resistant, this means that if pressure is applied to glass, causing it to bend or stretch, the glass will return exactly to its original shape when the bending or stretching force is removed.',
    options: [
      { label: 'A', text: 'When light falls on a piece of glass, some of that light is reflected and some is absorbed.' },
      { label: 'B', text: 'It is nonporous and nonabsorptive, and thus is impervious to many common elements that affect other materials.' },
      { label: 'C', text: 'Offers low resistance to the passage of electricity.' },
      { label: 'D', text: 'Glass is fatigue resistant, this means that if pressure is applied to glass, causing it to bend or stretch, the glass will return exactly to its original shape when the bending or stretching force is removed.' },
    ],
    ...solved(50, 'C', 'Offers low resistance to the passage of electricity. (Option C)'),
  },

  // Item 51
  {
    id: 'mstc-apr2025-q51',
    number: 51,
    pageNumber: 15,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Surveying - Measurement & Observation Classifications',
    text: 'An observation that is secured when it is not possible to apply a measuring instrument directly to the quantity to be observed.',
    options: [
      { label: 'A', text: 'Direct observation' },
      { label: 'B', text: 'Indirect observation' },
      { label: 'C', text: 'Random observation' },
      { label: 'D', text: 'Systematic observation' },
    ],
    ...solved(51, 'B', 'Indirect observation (Option B)'),
  },

  // Item 52
  {
    id: 'mstc-apr2025-q52',
    number: 52,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Materials - Concrete Testing Methods Matching',
    text: 'Column I gives a list of test methods for evaluating properties of concrete and Column II gives the list of properties.\n\n| Column I (Test Method) | Column II (Property) |\n|---|---|\n| P. Resonant frequency | 1. Tensile strength test |\n| Q. Rebound hammer test | 2. Dynamic modulus of elasticity |\n| R. Split cylinder test | 3. Workability |\n| S. Compacting factor test | 4. Compressive strength |\n\nThe correct match of the test with the property is:',
    options: [
      { label: 'A', text: 'P-2, Q-4, R-1, S-3' },
      { label: 'B', text: 'P-2, Q-1, R-4, S-3' },
      { label: 'C', text: 'P-2, Q-4, R-3, S-1' },
      { label: 'D', text: 'P-4, Q-3, R-1, S-2' },
    ],
    ...solved(52, 'A', 'P-2, Q-4, R-1, S-3 (Option A)'),
  },

  // Item 53
  {
    id: 'mstc-apr2025-q53',
    number: 53,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Materials - Water-Cement Ratio Definition',
    text: 'Water-cement ratio is the measure of water and cement used per cubic meter of concrete.',
    options: [
      { label: 'A', text: 'volume by volume' },
      { label: 'B', text: 'weight by weight' },
      { label: 'C', text: 'weight by volume' },
      { label: 'D', text: 'volume by weight' },
    ],
    ...solved(53, 'B', 'weight by weight (Option B)'),
  },
];
