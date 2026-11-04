import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const MSTC_APR2025_PART5: Question[] = [
  // Item 54
  {
    id: 'mstc-apr2025-q54',
    number: 54,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Management & Contracts - Bid Bond Validity',
    text: 'Which of the following statements is valid for a bid bond?\n\nA. It pays for costs incurred by the bidder if the bid deadline is missed.\nB. It represents the costs that the owner incurs if the bidder fails to enter into a contract.\nC. It represents the costs incurred by subcontractors if a project is underbid.\nD. It pays for office overhead costs related to a bid.',
    options: [
      { label: 'A', text: 'It pays for costs incurred by the bidder if the bid deadline is missed.' },
      { label: 'B', text: 'It represents the costs that the owner incurs if the bidder fails to enter into a contract.' },
      { label: 'C', text: 'It represents the costs incurred by subcontractors if a project is underbid.' },
      { label: 'D', text: 'It pays for office overhead costs related to a bid.' },
    ],
    ...solved(54, 'B', 'It represents the costs that the owner incurs if the bidder fails to enter into a contract. (Option B)'),
  },

  // Item 55
  {
    id: 'mstc-apr2025-q55',
    number: 55,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Management - Supply Chain & Logistics',
    text: 'The process of planning, implementing, and controlling the efficient and effective flow and storage of goods, services, and related information from origination to consumption as required by the customer.',
    options: [
      { label: 'A', text: 'Shipping' },
      { label: 'B', text: 'Transportation' },
      { label: 'C', text: 'Freight' },
      { label: 'D', text: 'Logistics' },
    ],
    ...solved(55, 'D', 'Logistics (Option D)'),
  },

  // Item 56
  {
    id: 'mstc-apr2025-q56',
    number: 56,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Highway Engineering - Flexible Pavement Stratigraphy',
    text: 'Which of the following are the correct layers of a flexible pavement constructed above the subgrade?',
    figureCaption: 'Figure 56: Structural layer hierarchy of a flexible asphalt pavement',
    figureSvg: `<svg viewBox="0 0 460 260" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Surface Course (Asphalt) -->
  <rect x="80" y="35" width="300" height="40" fill="#334155" stroke="#0f172a" stroke-width="2"/>
  <text x="230" y="60" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#ffffff">Surface Course (Asphalt Concrete)</text>

  <!-- Base Course -->
  <rect x="80" y="75" width="300" height="50" fill="#94a3b8" stroke="#0f172a" stroke-width="2"/>
  <text x="230" y="105" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">Base Course (Crushed Aggregate)</text>

  <!-- Subbase Course -->
  <rect x="80" y="125" width="300" height="55" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
  <text x="230" y="157" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">Subbase Course (Granular Material)</text>

  <!-- Prepared Subgrade (Native Soil) -->
  <rect x="80" y="180" width="300" height="50" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
  <text x="230" y="210" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#475569">Prepared Subgrade (Native Soil)</text>

  <!-- Left Arrow Sequence -->
  <path d="M 50,205 L 50,55" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="40" y="130" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb" transform="rotate(-90 40 130)">From Subgrade Up</text>
</svg>`,
    options: [
      { label: 'A', text: 'Subbase Course, Base Course, Surface Course' },
      { label: 'B', text: 'Base Course, Surface Course, Binder Course' },
      { label: 'C', text: 'Base Course, Wearing Course, Seal Coat' },
      { label: 'D', text: 'Subbase Course, Bituminous Layer, Wearing Course' },
    ],
    ...solved(56, 'A', 'Subbase Course, Base Course, Surface Course (Option A)'),
  },

  // Item 57
  {
    id: 'mstc-apr2025-q57',
    number: 57,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Safety - Demolition Safety Exclusion Zones',
    text: 'The demolition area where work is done by mechanical devices such as weight balls or power shovels shall be barricaded for a minimum distance of _____ times the height of the structure.',
    options: [
      { label: 'A', text: '1/4' },
      { label: 'B', text: '1 1/2' },
      { label: 'C', text: '1/2' },
      { label: 'D', text: '1' },
    ],
    ...solved(57, 'B', '1 1/2 (Option B)'),
  },

  // Item 58
  {
    id: 'mstc-apr2025-q58',
    number: 58,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Safety - OSHA Scaffolding Clearance Tolerances',
    text: 'Each platform unit (e.g., scaffold plank, fabricated plank, fabricated deck, or fabricated platform) shall be installed so that the space between adjacent units and the space between the platform and the uprights is no more than _____ inch.',
    figureCaption: 'Figure 58: OSHA Scaffold Platform Unit Clearance Limits (≤ 1 inch)',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Left Upright Post -->
  <rect x="40" y="30" width="18" height="150" fill="#475569" stroke="#0f172a" stroke-width="2"/>
  <text x="49" y="195" text-anchor="middle" font-family="monospace" font-size="10" fill="#475569">Upright</text>

  <!-- Gap between Upright and Platform Plank 1 (<= 1 inch) -->
  <line x1="58" y1="80" x2="80" y2="80" stroke="#dc2626" stroke-width="2"/>
  <text x="69" y="72" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#dc2626">≤ 1"</text>

  <!-- Platform Plank 1 -->
  <rect x="80" y="55" width="140" height="90" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
  <text x="150" y="105" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#1e293b">Scaffold Plank 1</text>

  <!-- Gap between adjacent units (<= 1 inch) -->
  <line x1="220" y1="80" x2="242" y2="80" stroke="#dc2626" stroke-width="2"/>
  <text x="231" y="72" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#dc2626">≤ 1"</text>

  <!-- Platform Plank 2 -->
  <rect x="242" y="55" width="140" height="90" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
  <text x="312" y="105" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#1e293b">Scaffold Plank 2</text>

  <!-- Right Upright Post -->
  <rect x="404" y="30" width="18" height="150" fill="#475569" stroke="#0f172a" stroke-width="2"/>
  <text x="413" y="195" text-anchor="middle" font-family="monospace" font-size="10" fill="#475569">Upright</text>

  <!-- Dimension Indicator -->
  <text x="230" y="30" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">OSHA 1926.451 Standard: Gap ≤ 1 inch</text>
</svg>`,
    options: [
      { label: 'A', text: '1 foot' },
      { label: 'B', text: '3 feet' },
      { label: 'C', text: '3 inches' },
      { label: 'D', text: '1 inch' },
    ],
    ...solved(58, 'D', '1 inch (Option D)'),
  },

  // Item 59
  {
    id: 'mstc-apr2025-q59',
    number: 59,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Highway Engineering - Geometric Highway Design Criteria',
    text: 'The _____ is defined as a selected rate of travel used to determine the various geometric features of the roadway.',
    options: [
      { label: 'A', text: 'Average speed' },
      { label: 'B', text: 'Design speed' },
      { label: 'C', text: 'Running speed' },
      { label: 'D', text: 'Maximum speed' },
    ],
    ...solved(59, 'B', 'Design speed (Option B)'),
  },

  // Item 60
  {
    id: 'mstc-apr2025-q60',
    number: 60,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Project Management - Comprehensive Project Success Criteria',
    text: 'Successful project management can then be defined as achieving a continuous stream of project objectives:\n\nI. within time\nII. within cost\nIII. at the desired performance/technology level\nIV. utilizing the assigned resources effectively and efficiently\nV. having the results accepted by the customer and/or stakeholder',
    options: [
      { label: 'A', text: 'I, II, III, and IV' },
      { label: 'B', text: 'I, II, III, and V' },
      { label: 'C', text: 'I, II, IV, and V' },
      { label: 'D', text: 'All of the above' },
    ],
    ...solved(60, 'D', 'All of the above (Option D)'),
  },

  // Item 61
  {
    id: 'mstc-apr2025-q61',
    number: 61,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Project Management - Risk Management Process Stages',
    text: 'Risk management is the act or practice of dealing with risk. It includes:',
    options: [
      { label: 'A', text: 'Risk planning, risk identification, risk analysis, risk response, risk monitoring and controlling' },
      { label: 'B', text: 'Risk planning, risk analysis, risk identification, risk response, risk monitoring and controlling' },
      { label: 'C', text: 'Risk planning, risk identification, risk response, risk analysis, risk monitoring and controlling' },
      { label: 'D', text: 'Risk planning, risk analysis, risk response, risk identification, risk monitoring and controlling' },
    ],
    ...solved(61, 'A', 'Risk planning, risk identification, risk analysis, risk response, risk monitoring and controlling (Option A)'),
  },

  // Item 62
  {
    id: 'mstc-apr2025-q62',
    number: 62,
    pageNumber: 18,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Equipment - Mobile Elevating Work Platforms (MEWPs)',
    text: 'The 3 basic types of Mobile Elevating Work Platforms (MEWPs) are:',
    figureCaption: 'Figure 62: Basic categories of MEWPs (Scissor lift, Articulating boom, Telescopic boom)',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Scissor Lift (Type a) -->
  <g transform="translate(40, 40)">
    <rect x="10" y="120" width="60" height="15" fill="#334155" rx="3"/>
    <circle cx="20" cy="138" r="7" fill="#0f172a"/>
    <circle cx="60" cy="138" r="7" fill="#0f172a"/>
    <!-- Scissor lattice -->
    <line x1="15" y1="120" x2="65" y2="70" stroke="#ea580c" stroke-width="3"/>
    <line x1="65" y1="120" x2="15" y2="70" stroke="#ea580c" stroke-width="3"/>
    <line x1="15" y1="70" x2="65" y2="20" stroke="#ea580c" stroke-width="3"/>
    <line x1="65" y1="70" x2="15" y2="20" stroke="#ea580c" stroke-width="3"/>
    <rect x="10" y="5" width="60" height="15" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <text x="40" y="160" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#334155">(a) Scissor Lift</text>
  </g>

  <!-- Articulating Boom Lift (Type b) -->
  <g transform="translate(180, 40)">
    <rect x="10" y="120" width="60" height="15" fill="#334155" rx="3"/>
    <circle cx="20" cy="138" r="7" fill="#0f172a"/>
    <circle cx="60" cy="138" r="7" fill="#0f172a"/>
    <!-- Jointed knuckle arms -->
    <line x1="25" y1="120" x2="55" y2="60" stroke="#2563eb" stroke-width="3.5"/>
    <circle cx="55" cy="60" r="4" fill="#1e293b"/>
    <line x1="55" y1="60" x2="25" y2="20" stroke="#2563eb" stroke-width="3.5"/>
    <circle cx="25" cy="20" r="4" fill="#1e293b"/>
    <line x1="25" y1="20" x2="60" y2="10" stroke="#2563eb" stroke-width="2.5"/>
    <rect x="60" y="0" width="22" height="18" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>
    <text x="40" y="160" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#334155">(b) Articulating Boom</text>
  </g>

  <!-- Telescopic Boom Lift (Type c) -->
  <g transform="translate(320, 40)">
    <rect x="10" y="120" width="60" height="15" fill="#334155" rx="3"/>
    <circle cx="20" cy="138" r="7" fill="#0f172a"/>
    <circle cx="60" cy="138" r="7" fill="#0f172a"/>
    <!-- Straight extending boom -->
    <line x1="25" y1="120" x2="80" y2="15" stroke="#16a34a" stroke-width="4.5"/>
    <line x1="55" y1="65" x2="95" y2="10" stroke="#86efac" stroke-width="2.5"/>
    <rect x="85" y="0" width="22" height="18" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>
    <text x="45" y="160" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#334155">(c) Telescopic Boom</text>
  </g>
</svg>`,
    options: [
      { label: 'A', text: 'Scissor lift, articulating boom lift, telescopic boom lift' },
      { label: 'B', text: 'Derrick, mast climber, cherry picker' },
      { label: 'C', text: 'Vertical mast lift, boom truck, crane platform' },
      { label: 'D', text: 'Telescopic handler, derrick, forklift' },
    ],
    ...solved(62, 'A', 'Scissor lift, articulating boom lift, telescopic boom lift (Option A)'),
  },

  // Item 63
  {
    id: 'mstc-apr2025-q63',
    number: 63,
    pageNumber: 18,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Project Scheduling - Lead and Lag Time Principles',
    text: 'All of the following are true regarding lead and lag time except which one?\n\nA. Leads and lags are used when there are delays between dependent and independent activities in the project schedule\nB. Leads require time to be subtracted from the start date or the finish date of the dependent activity\nC. Lags delay successor activities and require time to be added to the start date or the finish date of the dependent activity\nD. Lead time is used more often than lag time',
    options: [
      { label: 'A', text: 'Leads and lags are used when there are delays between dependent and independent activities in the project schedule' },
      { label: 'B', text: 'Leads require time to be subtracted from the start date or the finish date of the dependent activity' },
      { label: 'C', text: 'Lags delay successor activities and require time to be added to the start date or the finish date of the dependent activity' },
      { label: 'D', text: 'Lead time is used more often than lag time' },
    ],
    ...solved(63, 'D', 'Lead time is used more often than lag time (Option D)'),
  },

  // Item 64
  {
    id: 'mstc-apr2025-q64',
    number: 64,
    pageNumber: 18,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Foundation Engineering - Perimeter-Inward Pile Driving Sequence',
    text: 'Which of the following is/are true for piles driven from outside perimeter inwards?\n\nI. Little soil lateral movements.\nII. Well-compacted center with an excess pore water pressure built up to resist the loading of piles.\nIII. Shorter pile lengths than the original designed ones may result.\nIV. Excess pore water pressure is dissipated, and the shorter driven piles may not be able to take up the original design loads.',
    options: [
      { label: 'A', text: 'I, II, and III' },
      { label: 'B', text: 'II, III, and IV' },
      { label: 'C', text: 'I, III, IV' },
      { label: 'D', text: 'All of the above' },
    ],
    ...solved(64, 'D', 'All of the above (Option D)'),
  },

  // Item 65
  {
    id: 'mstc-apr2025-q65',
    number: 65,
    pageNumber: 18,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Safety - OSHA Trench Egress Ladder Requirements',
    text: 'An excavation trench is 5 ft deep, 6 ft wide, and 95 ft long. According to OSHA standards, how many ladders are required to provide egress from the trench?',
    figureCaption: 'Figure 65: OSHA Trench Egress Ladder Spacing (25 ft maximum lateral travel)',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="230" y="30" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">Plan View: 95 ft Excavation Trench</text>

  <!-- Trench boundary -->
  <rect x="50" y="60" width="360" height="70" fill="#334155" stroke="#0f172a" stroke-width="2" rx="3"/>
  <rect x="55" y="65" width="350" height="60" fill="#1e293b"/>

  <!-- Ladder 1 at 25 ft -->
  <g transform="translate(145, 55)">
    <rect x="-8" y="0" width="16" height="80" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="15" x2="8" y2="15" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="30" x2="8" y2="30" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="45" x2="8" y2="45" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="60" x2="8" y2="60" stroke="#dc2626" stroke-width="1.5"/>
    <text x="0" y="-8" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#dc2626">Ladder #1 (25 ft)</text>
  </g>

  <!-- Ladder 2 at 70 ft -->
  <g transform="translate(315, 55)">
    <rect x="-8" y="0" width="16" height="80" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="15" x2="8" y2="15" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="30" x2="8" y2="30" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="45" x2="8" y2="45" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="60" x2="8" y2="60" stroke="#dc2626" stroke-width="1.5"/>
    <text x="0" y="-8" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#dc2626">Ladder #2 (70 ft)</text>
  </g>

  <!-- Spacing dimensions -->
  <!-- 0 to 25 ft -->
  <line x1="50" y1="145" x2="145" y2="145" stroke="#2563eb" stroke-width="1.5"/>
  <text x="97" y="158" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">25 ft</text>

  <!-- 25 to 70 ft (45 ft spacing) -->
  <line x1="145" y1="145" x2="315" y2="145" stroke="#2563eb" stroke-width="1.5"/>
  <text x="230" y="158" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">45 ft (Max 25 ft travel)</text>

  <!-- 70 to 95 ft (25 ft) -->
  <line x1="315" y1="145" x2="410" y2="145" stroke="#2563eb" stroke-width="1.5"/>
  <text x="362" y="158" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">25 ft</text>

  <!-- Total 95 ft Dimension -->
  <line x1="50" y1="185" x2="410" y2="185" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="50" y2="190" stroke="#475569" stroke-width="1.5"/>
  <line x1="410" y1="180" x2="410" y2="190" stroke="#475569" stroke-width="1.5"/>
  <text x="230" y="200" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#475569">Total Length = 95 ft (Depth = 5 ft)</text>
</svg>`,
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '3' },
      { label: 'C', text: '2' },
      { label: 'D', text: '1' },
    ],
    ...solved(65, 'C', '2 (Option C)'),
  },

  // Item 66
  {
    id: 'mstc-apr2025-q66',
    number: 66,
    pageNumber: 19,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Geotechnical Engineering & Concrete - Bulking of Sand',
    text: 'Bulking is',
    options: [
      { label: 'A', text: 'increase in volume of sand due to moisture which keeps sand particles apart.' },
      { label: 'B', text: 'increase in density of sand due to impurities like clay, organic matter.' },
      { label: 'C', text: 'ramming of sand so that it occupies minimum volume.' },
      { label: 'D', text: 'compacting of sand.' },
    ],
    ...solved(66, 'A', 'increase in volume of sand due to moisture which keeps sand particles apart. (Option A)'),
  },
];
