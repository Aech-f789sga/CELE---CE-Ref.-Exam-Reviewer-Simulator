import { Question } from '../../../types/exam';

export const MSTC_MAY2022_PART3: Question[] = [
  // Item 31
  {
    id: 'mstc-may2022-q31',
    number: 31,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Management - Earthmoving Equipment Bucket Load',
    text: 'Estimate the actual bucket load in bank cubic meters whose heaped capacity is 3.82 m³. The soil\'s bucket fill factor is 0.90 and its load factor is 0.80.\nA. 2.35 BCM\nB. 2.75 BCM\nC. 3.52 BCM\nD. 2.57 BCM',
    options: [
      { label: 'A', text: '2.35 BCM' },
      { label: 'B', text: '2.75 BCM' },
      { label: 'C', text: '3.52 BCM' },
      { label: 'D', text: '2.57 BCM' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute the bank cubic meters volume by multiplying heaped bucket capacity by bucket fill factor and soil load factor.',
      formulas: [
        'V_b = V_h \\cdot B_f \\cdot L_f',
        'V_b = 3.82(0.90)(0.80) = 2.7504 \\approx 2.75',
      ],
      steps: [
        'Step 1: Given heaped capacity = 3.82 m³.',
        'Step 2: Bucket fill factor = 0.90 (bucket fills to 90% of capacity).',
        'Step 3: Soil load factor = 0.80 (converts loose volume to bank volume).',
        'Step 4: Bucket load in BCM = 3.82 × 0.90 × 0.80 = 2.7504 BCM ≈ 2.75 BCM (Option B).',
      ],
      finalAnswer: '2.75 BCM (Option B)',
      pageNumber: 398,
    },
  },

  // Item 32
  {
    id: 'mstc-may2022-q32',
    number: 32,
    pageNumber: 378,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Transportation & Earthmoving - Grade & Rolling Resistance',
    text: 'A crawler tractor weighing 36 t is towing a rubber-tired scraper weighing 45.5 t up a grade of 4%. What is the total resistance kg of the combination if the rolling resistance factor of the scraper is 50 kg/t? 1 t = 1000kg.\nA. 4,556 kg\nB. 4,655 kg\nC. 5,355 kg\nD. 5,535 kg',
    options: [
      { label: 'A', text: '4,556 kg' },
      { label: 'B', text: '4,655 kg' },
      { label: 'C', text: '5,355 kg' },
      { label: 'D', text: '5,535 kg' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Calculate the total grade resistance for both vehicles and add the rolling resistance for the rubber-tired scraper.',
      formulas: [
        'M_t = (W_1 + W_2) g_r = (36{,}000 + 45{,}500)(0.04) = 3{,}260',
        'R_r = f_r \\cdot W_2 = 50(45.5) = 2{,}275',
        'R = M_t + R_r = 3{,}260 + 2{,}275 = 5{,}535',
      ],
      steps: [
        'Step 1: Total combined mass = 36,000 kg + 45,500 kg = 81,500 kg.',
        'Step 2: Grade resistance applies to the total mass: M_t = 81,500 × 0.04 = 3,260 kg.',
        'Step 3: Rolling resistance factor = 50 kg/t on the rubber-tired scraper (45.5 t):',
        'Step 4: R_r = 50 kg/t × 45.5 t = 2,275 kg (crawler tractor tracks have no rolling resistance under standard estimation).',
        'Step 5: Total resistance R_total = 3,260 kg + 2,275 kg = 5,535 kg (Option D).',
      ],
      finalAnswer: '5,535 kg (Option D)',
      pageNumber: 399,
    },
  },

  // Item 33
  {
    id: 'mstc-may2022-q33',
    number: 33,
    pageNumber: 378,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Equipment - Dozer Cycle Time & Production',
    text: 'A power-shift crawler tractor has a rated blade capacity of 7.65 LCM. The dozer is excavating loose common earth and pushing it a distance of 61 m. Maximum reverse speed in third range is 8 km/h. Estimate the production of the dozer if job efficiency is 50 min/h.\nTable 4. Typical dozer fixed cycle times:\nPower-shift transmission: 0.05 min\nDirect-drive transmission: 0.10 min\nHard digging: 0.15 min\nTable 5. Typical dozer operating speeds:\nDozing loose materials, haul over 100 ft (30 m): 2.5 mi/h (4.0 km/h)\nReturn over 100 ft (30 m): Maximum reverse speed in third range (power shift)\nA. 275 LCM/h\nB. 251 LCM/h\nC. 269 LCM/h\nD. 243 LCM/h',
    options: [
      { label: 'A', text: '275 LCM/h' },
      { label: 'B', text: '251 LCM/h' },
      { label: 'C', text: '269 LCM/h' },
      { label: 'D', text: '243 LCM/h' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Compute dozing haul time, reverse return time, add fixed cycle time, and compute hourly production adjusted for job efficiency.',
      formulas: [
        't_c = t_1 + t_2 + t_3',
        't_c = 0.05 + \\left(\\frac{0.061}{4.0}\\right)(60) + \\left(\\frac{0.061}{8.0}\\right)(60) = 1.4225',
        'Q = \\left(\\frac{V}{t_c}\\right) E = \\left(\\frac{7.65}{1.4225}\\right)(50) \\approx 269.4',
      ],
      steps: [
        'Step 1: Fixed time for power-shift transmission = 0.05 min (Table 4).',
        'Step 2: Haul distance = 61 m = 0.061 km; dozing speed = 4.0 km/h (Table 5).',
        'Step 3: Dozing time = (0.061 / 4.0) × 60 = 0.915 min.',
        'Step 4: Return speed = 8.0 km/h. Return time = (0.061 / 8.0) × 60 = 0.4575 min.',
        'Step 5: Total cycle time = 0.05 + 0.915 + 0.4575 = 1.4225 min.',
        'Step 6: Production = (7.65 LCM / 1.4225 min) × 50 min/h = 268.89 LCM/h ≈ 269.4 LCM/h ≈ 269 LCM/h (Option C).',
      ],
      finalAnswer: '269 LCM/h (Option C)',
      pageNumber: 399,
    },
  },

  // Item 34
  {
    id: 'mstc-may2022-q34',
    number: 34,
    pageNumber: 378,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Equipment - Hydraulic Excavator Production',
    text: 'Find the expected production in loose cubic meters (Lm³) per hour of small hydraulic excavator. Heaped bucket capacity is 0.57 m³. The material is sand and gravel with a bucket fill factor of 0.95. Job efficiency is 50 min/h. Average depth of cut 4.3 m. Maximum depth of cut is 6.1 m, and average swing is 90°.\nHint: Production (LCV/h) = C × S × V × B × E; Cycle output = 250 cycles/60 min, Swing-depth factor = 1.00.\nA. 113 LCM/h\nB. 111 LCM/h\nC. 131 LCM/h\nD. 133 LCM/h',
    options: [
      { label: 'A', text: '113 LCM/h' },
      { label: 'B', text: '111 LCM/h' },
      { label: 'C', text: '131 LCM/h' },
      { label: 'D', text: '133 LCM/h' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Evaluate excavator hourly production formula: Production = C × S × V × B × E.',
      formulas: [
        'Q = C \\cdot S \\cdot V \\cdot B \\cdot E',
        'Q = \\left(\\frac{250}{60}\\right)(1.00)(0.57)(0.95)(50) = 112.8125 \\approx 113',
      ],
      steps: [
        'Step 1: Cycle output C = 250 cycles / 60 min.',
        'Step 2: Swing-depth factor S = 1.00.',
        'Step 3: Heaped bucket volume V = 0.57 m³.',
        'Step 4: Bucket fill factor B = 0.95.',
        'Step 5: Job efficiency E = 50 min/h.',
        'Step 6: Production = (250 / 60) × 1.00 × 0.57 × 0.95 × 50 = 112.8125 LCM/h ≈ 113 LCM/h (Option A).',
      ],
      finalAnswer: '113 LCM/h (Option A)',
      pageNumber: 400,
    },
  },

  // Item 35
  {
    id: 'mstc-may2022-q35',
    number: 35,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Highway Engineering - Traffic Signs & Delineation',
    text: 'Signs used to guide drivers through a change in horizontal alignment of the road.\nA. Chevron signs\nB. Supplementary signs\nC. Guide post signs\nD. Delineators',
    options: [
      { label: 'A', text: 'Chevron signs' },
      { label: 'B', text: 'Supplementary signs' },
      { label: 'C', text: 'Guide post signs' },
      { label: 'D', text: 'Delineators' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Identify the specific sign designation used for sharp horizontal curve guidance.',
      formulas: [],
      steps: [
        'Step 1: Chevron alignment signs (W1-8) are installed on the outside of sharp curves or abrupt changes in horizontal alignment.',
        'Step 2: They provide a visual emphasis on the direction and sharpness of the curve.',
        'Step 3: Therefore, the correct term is Chevron signs (Option A).',
      ],
      finalAnswer: 'Chevron signs (Option A)',
      pageNumber: 400,
    },
  },

  // Item 36
  {
    id: 'mstc-may2022-q36',
    number: 36,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Highway Engineering - National Road Geometric Design Standards',
    text: 'The basic lane width appropriate for national roads is:\nA. 6.70 m\nB. 7.00 m\nC. 3.35 m\nD. 3.50 m',
    options: [
      { label: 'A', text: '6.70 m' },
      { label: 'B', text: '7.00 m' },
      { label: 'C', text: '3.35 m' },
      { label: 'D', text: '3.50 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'State DPWH Highway Safety Design Standards for standard national road single lane width.',
      formulas: [
        'W = 3.35',
        '2W = 2(3.35) = 6.70',
      ],
      steps: [
        'Step 1: DPWH standards specify the standard lane width for national roads is 3.35 m.',
        'Step 2: A two-lane road has a minimum traveled way width of 6.70 m (2 × 3.35 m).',
        'Step 3: Therefore, the basic lane width is 3.35 m (Option C).',
      ],
      finalAnswer: '3.35 m (Option C)',
      pageNumber: 401,
    },
  },

  // Item 37
  {
    id: 'mstc-may2022-q37',
    number: 37,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Highway Engineering - Delineation Devices',
    text: 'Delineation of the road alignment needs to be considered as part of the design process, to ensure that adequate guidance is provided to road users. Delineation is generally provided by the use of the following devices:\nI. Pavement Markings\nII. Signs\nIII. Guide posts\nIV. Reflective delineators\nV. Lighting\nVI. Curb or other physical devices\nA. I, II and IV only\nB. II, III, IV and VI only\nC. I, IV, V and VI only\nD. All of the above',
    options: [
      { label: 'A', text: 'I, II and IV only' },
      { label: 'B', text: 'II, III, IV and VI only' },
      { label: 'C', text: 'I, IV, V and VI only' },
      { label: 'D', text: 'All of the above' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Road delineation comprehensively encompasses road markings, traffic signs, guide posts, retroreflectors, street illumination, and physical curbs.',
      formulas: [],
      steps: [
        'Step 1: Pavement markings provide visual continuity along lane boundaries.',
        'Step 2: Regulatory, warning, and guide signs convey situational alignment alerts.',
        'Step 3: Guide posts and reflective delineators guide motorists during nighttime and adverse weather.',
        'Step 4: Street lighting enhances visibility across intersections and curves.',
        'Step 5: Physical curbs define edge boundaries and channelize vehicular flow.',
        'Step 6: Hence, all devices I through VI are delineation devices (Option D).',
      ],
      finalAnswer: 'All of the above (Option D)',
      pageNumber: 401,
    },
  },

  // Item 38
  {
    id: 'mstc-may2022-q38',
    number: 38,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Transportation Engineering - Human Factors & Driving Task',
    text: 'Operating a motor vehicle on a street or highway can be complex and demanding at times, but it can be boring at other times. These range of circumstances coupled with the range of driver capabilities presents a challenge to the highway designer. It is helpful to begin by considering the three essential elements such as navigation, guidance and control is referred to as:\nA. Engineering psychology\nB. Ergonomics\nC. Driving task\nD. Range Index',
    options: [
      { label: 'A', text: 'Engineering psychology' },
      { label: 'B', text: 'Ergonomics' },
      { label: 'C', text: 'Driving task' },
      { label: 'D', text: 'Range Index' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Identify the hierarchy of driver responsibilities comprising control, guidance, and navigation.',
      formulas: [],
      steps: [
        'Step 1: The driving task hierarchy includes three main levels: navigation (trip planning and route selection), guidance (lane tracking and speed selection), and control (steering and speed regulation).',
        'Step 2: This concept is central to driver information processing and positive guidance highway engineering.',
        'Step 3: Therefore, the concept is referred to as the Driving task (Option C).',
      ],
      finalAnswer: 'Driving task (Option C)',
      pageNumber: 402,
    },
  },

  // Item 39
  {
    id: 'mstc-may2022-q39',
    number: 39,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Highway Engineering - Traffic Sign Categories',
    text: 'Sign that inform road users about the direction and distances of destinations on the route they are following or along other roads that intersect their route.\nA. supplementary signs\nB. guide signs\nC. warning signs\nD. Stack signs',
    options: [
      { label: 'A', text: 'supplementary signs' },
      { label: 'B', text: 'guide signs' },
      { label: 'C', text: 'warning signs' },
      { label: 'D', text: 'Stack signs' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Recognize the definition of guide signs under standard highway manual classifications.',
      formulas: [],
      steps: [
        'Step 1: Guide signs inform road users regarding destination routes, distances, towns, and junctions.',
        'Step 2: Warning signs warn of hazardous conditions ahead.',
        'Step 3: Supplementary signs provide additional plates below standard signs.',
        'Step 4: Therefore, the correct term is guide signs (Option B).',
      ],
      finalAnswer: 'guide signs (Option B)',
      pageNumber: 402,
    },
  },

  // Item 40
  {
    id: 'mstc-may2022-q40',
    number: 40,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Transportation Engineering - Queuing Theory & Cumulative Diagrams',
    text: 'What are some important properties of queuing diagrams?\nI. The slope of D(t) is the departure rate; the slope of A(t) is the arrival rate.\nII. The departure cannot exceed the service rate or capacity of the server. It may be less.\nIII. Cumulative departures can never exceed cumulative arrivals. D(t) can never be above A(t) in the queuing diagram.\nIV. When a queue is present, the departure rate will equal the service rate. When no queue is present, the departure rate will equal the arrival rate. The queue first forms when the arrival rate first exceeds the service rate.\nA. I, II, and III only\nB. All of the above\nC. II, III, and IV only\nD. I, III, and IV only',
    options: [
      { label: 'A', text: 'I, II, and III only' },
      { label: 'B', text: 'All of the above' },
      { label: 'C', text: 'II, III, and IV only' },
      { label: 'D', text: 'I, III, and IV only' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Verify all physical and mathematical properties of cumulative arrival A(t) and departure D(t) queuing curves.',
      formulas: [
        'D(t) \\le A(t)',
        '\\frac{dD}{dt} \\le \\mu',
        '\\frac{dA}{dt} = \\lambda',
      ],
      steps: [
        'Step 1: Property I: Derivatives dA/dt and dD/dt represent instantaneous arrival and departure rates.',
        'Step 2: Property II: Departure rate cannot exceed maximum server service capacity.',
        'Step 3: Property III: A vehicle cannot depart before it arrives; hence D(t) ≤ A(t) at all times.',
        'Step 4: Property IV: During queued conditions, departure occurs at service capacity; without a queue, departure matches arrival.',
        'Step 5: All four statements are correct: B. All of the above (Option B).',
      ],
      finalAnswer: 'All of the above (Option B)',
      pageNumber: 403,
    },
  },

  // Item 41
  {
    id: 'mstc-may2022-q41',
    number: 41,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Ports & Harbors Engineering - Coastal Marine Structures',
    text: 'Any structure built into the sea but not parallel to the coastline and includes any stage, stair, landing place, landing stage, jetty, floating barge or pontoon, and any bridge or other works connected therewith. A berth structure projecting out from the shoreline.\nA. Wharf\nB. Pier\nC. Port\nD. Yard',
    options: [
      { label: 'A', text: 'Wharf' },
      { label: 'B', text: 'Pier' },
      { label: 'C', text: 'Port' },
      { label: 'D', text: 'Yard' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Differentiate between a pier (projecting perpendicular/angled from the shoreline) and a wharf (parallel to shore).',
      formulas: [],
      steps: [
        'Step 1: A wharf is built parallel to the shore or bank.',
        'Step 2: A pier is built extending out into the water perpendicular or oblique to the shoreline.',
        'Step 3: Therefore, the described projecting structure is a Pier (Option B).',
      ],
      finalAnswer: 'Pier (Option B)',
      pageNumber: 404,
    },
  },

  // Item 42
  {
    id: 'mstc-may2022-q42',
    number: 42,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Materials & Methods - Concrete Forming',
    text: 'Because concrete is unable to maintain a particular shape before it sets, it must be placed in a form or mold. In building construction, this is called:\nA. Formworks\nB. Molder\nC. Scaffoldings\nD. Tube',
    options: [
      { label: 'A', text: 'Formworks' },
      { label: 'B', text: 'Molder' },
      { label: 'C', text: 'Scaffoldings' },
      { label: 'D', text: 'Tube' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Identify the construction term for temporary molds that support and shape wet concrete.',
      formulas: [],
      steps: [
        'Step 1: Fresh concrete is plastic and fluid before curing.',
        'Step 2: Formworks (or forms) are temporary structures of wood, plywood, or steel designed to hold fresh concrete in place until it achieves self-supporting strength.',
        'Step 3: Scaffolding supports workers and materials, not the wet concrete itself.',
        'Step 4: Therefore, the correct term is Formworks (Option A).',
      ],
      finalAnswer: 'Formworks (Option A)',
      pageNumber: 404,
    },
  },

  // Item 43
  {
    id: 'mstc-may2022-q43',
    number: 43,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Safety - Scaffolding Load Capacity Requirements',
    text: 'What is the capacity requirement for all scaffoldings?\nA. At least four times its own weight\nB. At least six times its own weight\nC. At most six times its own weight\nD. At most four times its own weight',
    options: [
      { label: 'A', text: 'At least four times its own weight' },
      { label: 'B', text: 'At least six times its own weight' },
      { label: 'C', text: 'At most six times its own weight' },
      { label: 'D', text: 'At most four times its own weight' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Review scaffolding safety standards in the official answer key for item 43.',
      formulas: [
        'C \\le 4 W',
      ],
      steps: [
        'Step 1: In the board examination question options, the official answer key specifies Option D.',
        'Step 2: Under construction safety regulations (OSHA 1926.451), scaffold components must support their own weight and at least 4 times the maximum intended load without failure.',
        'Step 3: Based on the official examination answer key for Item 43, Option D is designated.',
      ],
      finalAnswer: 'At most four times its own weight (Option D)',
      pageNumber: 405,
    },
  },

  // Item 44
  {
    id: 'mstc-may2022-q44',
    number: 44,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Structural Dynamics & Materials - Vibration Damping',
    text: 'It is a measure of a material\'s ability to dissipate or deaden mechanical vibrations.\nA. damping\nB. frequency\nC. resonance\nD. transmissibility',
    options: [
      { label: 'A', text: 'damping' },
      { label: 'B', text: 'frequency' },
      { label: 'C', text: 'resonance' },
      { label: 'D', text: 'transmissibility' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Define material damping as the property characterizing mechanical energy dissipation during oscillation.',
      formulas: [
        '\\zeta = \\frac{c}{c_c}',
        '\\omega_n = \\sqrt{\\frac{k}{m}}',
      ],
      steps: [
        'Step 1: Damping is the dissipation of oscillatory energy into heat or acoustic energy.',
        'Step 2: Frequency is the number of cycles per unit time.',
        'Step 3: Resonance occurs when forcing frequency matches natural frequency.',
        'Step 4: Transmissibility is the ratio of transmitted force or motion.',
        'Step 5: Therefore, the measure of energy dissipation is damping (Option A).',
      ],
      finalAnswer: 'damping (Option A)',
      pageNumber: 405,
    },
  },

  // Item 45
  {
    id: 'mstc-may2022-q45',
    number: 45,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Foundation Engineering - Dynamic Pile Driving Formulas',
    text: 'The safe capacity of piles driven by powered hammers is based on the following data:\nI. Average penetration per blow, last six blows\nII. Energy of hammer\nIII. Weight of hammer\nIV. Weight of pile including appurtenances\nV. Coefficient of restitution depending on the weight of piles\nA. II, III, IV only\nB. I, II, IV and V only\nC. I, II, III only\nD. All of the above',
    options: [
      { label: 'A', text: 'II, III, IV only' },
      { label: 'B', text: 'I, II, IV and V only' },
      { label: 'C', text: 'I, II, III only' },
      { label: 'D', text: 'All of the above' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Dynamic pile formulas (e.g. Hiley, Janbu, ENR) take into account hammer energy, penetration set per blow, hammer weight, pile weight, and restitution coefficient.',
      formulas: [
        'R_u = \\frac{\\eta W_h h}{s + \\frac{c}{2}} \\cdot \\frac{W_h + e^2 W_p}{W_h + W_p}',
      ],
      steps: [
        'Step 1: Average penetration s per blow (measured over the last six blows).',
        'Step 2: Rated hammer energy Wh × h.',
        'Step 3: Weight of hammer ram Wh.',
        'Step 4: Total weight of pile Wp including driving cap/cushion appurtenances.',
        'Step 5: Coefficient of restitution e representing impact elasticity.',
        'Step 6: Since all parameters I, II, III, IV, and V are included in comprehensive dynamic formulas: D. All of the above (Option D).',
      ],
      finalAnswer: 'All of the above (Option D)',
      pageNumber: 405,
    },
  },
];
