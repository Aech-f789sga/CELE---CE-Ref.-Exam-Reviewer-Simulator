import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

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
    ...solved(37, 'A', '$35 (Option A)'),
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
    ...solved(38, 'B', '$40,909 (Option B)'),
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
    ...solved(39, 'D', 'After 3 years (Option D)'),
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
    ...solved(40, 'B', '(8637.85, 3759.83) (Option B)'),
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
    ...solved(41, 'D', 'PC = sta 6+361.372, PT = sta 6+493.319 (Option D)'),
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
    ...solved(42, 'A', 'PC = sta 62+17.08, PT = sta 66+37.08 (Option A)'),
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
    ...solved(43, 'B', '87.5 (Option B)'),
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
    ...solved(44, 'A', 'Geodetic survey (Option A)'),
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
    ...solved(45, 'D', '40 kph (Option D)'),
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
    ...solved(46, 'B', '5 (Option B)'),
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
    ...solved(47, 'C', 'LOS C (Option C)'),
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
    ...solved(48, 'D', '$26,000 (Option D)'),
  },
];
