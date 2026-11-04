import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

export const MSTC_NOV2024_PART5: Question[] = [
  // Item 49
  {
    id: 'mstc-nov2024-q49',
    number: 49,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Management - CPM Network Critical Path Duration',
    text: 'A certain project includes the activities summarized in the table below. The start date of the project is week 0. The project duration (weeks) is most nearly:\n\n| Activity | Predecessor Activities | Duration (weeks) |\n|:---:|:---:|:---:|\n| **Start** | — | 0 |\n| **A** | Start | 9 |\n| **B** | A | 8 |\n| **C** | A | 2 |\n| **D** | B | 6 |\n| **E** | C, D | 7 |\n| **F** | D | 9 |\n| **G** | E, F | 7 |\n| **Finish** | G | 0 |',
    options: [
      { label: 'A', text: '32' },
      { label: 'B', text: '36' },
      { label: 'C', text: '41' },
      { label: 'D', text: '44' },
    ],
    ...solved(49, 'C', '41 (Option C)'),
  },

  // Item 50
  {
    id: 'mstc-nov2024-q50',
    number: 50,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Safety - OSHA Total Recordable Case (TRC) Rate',
    text: 'The safety log for a steel fabrication yard is shown in the table below:\n\n| Safety Metric / Parameter | Value |\n|:---|:---:|\n| **Total number of full-time employees** | 400 |\n| **Average hours worked per employee during the year** | 1,970 hrs |\n| **Total number of fatalities** | 0 |\n| **Cases with days away from work** | 13 cases |\n| **Total days away from work** | 120 days |\n| **Other recordable injury/illness cases** | 18 cases |\n\nWhat is most nearly the annual Total Recordable Case (TRC) rate, as defined by OSHA?\n\n*Formula:* TRC Rate = $\\frac{N \\times 200{,}000}{EH}$\n\nWhere:\n• $N$ = Total Recordable Cases\n• $EH$ = Total Employee Hours Worked',
    options: [
      { label: 'A', text: '5.15' },
      { label: 'B', text: '7.87' },
      { label: 'C', text: '18.48' },
      { label: 'D', text: '31.24' },
    ],
    ...solved(50, 'B', '7.87 (Option B)'),
  },

  // Item 51
  {
    id: 'mstc-nov2024-q51',
    number: 51,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Materials / Construction Engineering - Concrete Maturity Method',
    text: 'Specifications for a construction job state that wall forms can be removed once the concrete reaches a compressive strength of 3,400 psi. The maturity curve (Nurse-Saul) for the concrete is shown in the figure. The cement hydration is assumed to cease below a datum temperature of 30°F. The average temperature of the concrete during the curing process is 70°F. The number of hours that the contractor has to wait before removing forms is most nearly:',
    figureCaption: 'Figure 51: Concrete maturity curve (Nurse-Saul method, compressive strength vs. temperature-time factor)',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_51.png" 
        alt="Figure 51: Concrete maturity curve" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '24' },
      { label: 'B', text: '36' },
      { label: 'C', text: '45' },
      { label: 'D', text: '60' },
    ],
    ...solved(51, 'C', '45 (Option C)'),
  },

  // Item 52
  {
    id: 'mstc-nov2024-q52',
    number: 52,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Hydraulics - Pumping System Total Head & Equivalent Length',
    text: 'Water must be pumped from a pond to an open discharge 12.2 m above the pump. The line from the pump to discharge consists of 103.7 m of 10.2-cm pipe equipped with a check valve and three standard elbows. The pump is located 3.1 m above the pond water level. The intake line consists of a 6.1-m hose 10.2 cm in diameter equipped with a foot valve. Find the total head that the pump must produce for a flow of 1060 l/min. The equivalent length of the foot valve is 21.4 m. Use friction loss factors for every 100 units of length of 5.4 (for pipe) and 4.3 (for hose).\nNominal check valve eq length = 7.6 m, 3 elbows eq length = 3(3.4) = 10.1 m.',
    figureCaption: 'Figure 52: Pumping system configuration and pipe network schematic',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_52.png" 
        alt="Figure 52: Pumping system layout" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '21.5 m' },
      { label: 'B', text: '20.2 m' },
      { label: 'C', text: '24.9 m' },
      { label: 'D', text: '23.3 m' },
    ],
    ...solved(52, 'D', '23.3 m (Option D)'),
  },

  // Item 53
  {
    id: 'mstc-nov2024-q53',
    number: 53,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Fillet Weld Throat Dimension',
    text: 'The throat in a fillet weld is:',
    options: [
      { label: 'A', text: 'larger side of the triangle of the fillet' },
      { label: 'B', text: 'hypotenuse of the triangle of the fillet' },
      { label: 'C', text: 'smaller side of the triangle of the fillet' },
      { label: 'D', text: 'perpendicular distance from the root to the hypotenuse' },
    ],
    ...solved(53, 'D', 'perpendicular distance from the root to the hypotenuse (Option D)'),
  },

  // Item 54
  {
    id: 'mstc-nov2024-q54',
    number: 54,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway / Architectural Drawings - Plan View Definition',
    text: 'This is a drawing of the facility as it would look to an observer directly above it:',
    options: [
      { label: 'A', text: 'Plan view' },
      { label: 'B', text: 'Profile' },
      { label: 'C', text: 'Geometric Cross-Section' },
      { label: 'D', text: 'Superelevation Diagram' },
    ],
    ...solved(54, 'A', 'Plan view (Option A)'),
  },

  // Item 55
  {
    id: 'mstc-nov2024-q55',
    number: 55,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Engineering / Technology - BIM Definition',
    text: 'Presents a database that includes design data, drawings, specifications, materials and systems parameters, and life cycle data, for all the various disciplines involved in a project and relates those data to each other and to the project as a whole to present an overall view of the project.',
    options: [
      { label: 'A', text: 'BIM' },
      { label: 'B', text: 'The Project Manual' },
      { label: 'C', text: 'CAD' },
      { label: 'D', text: 'Master format' },
    ],
    ...solved(55, 'A', 'BIM (Option A)'),
  },

  // Item 56
  {
    id: 'mstc-nov2024-q56',
    number: 56,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Materials Engineering - Sealant Types',
    text: 'A type of sealant made from a resin and a hardener, that are mixed in specific amounts.',
    options: [
      { label: 'A', text: 'Construction seal' },
      { label: 'B', text: 'Joint seal' },
      { label: 'C', text: 'Epoxy seal' },
      { label: 'D', text: 'Elastomeric seal' },
    ],
    ...solved(56, 'C', 'Epoxy seal (Option C)'),
  },

  // Item 57
  {
    id: 'mstc-nov2024-q57',
    number: 57,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Concrete Technology - Chemical Admixtures (Retarders)',
    text: 'Which of the following acts as retarder for the concrete?',
    options: [
      { label: 'A', text: 'calcium chloride' },
      { label: 'B', text: 'calcium lignosulphonate' },
      { label: 'C', text: 'aluminum powder' },
      { label: 'D', text: 'calcium hydrochloride' },
    ],
    ...solved(57, 'B', 'calcium lignosulphonate (Option B)'),
  },

  // Item 58
  {
    id: 'mstc-nov2024-q58',
    number: 58,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Cement Chemistry - Flash Setting & Accelerators',
    text: 'Which of the following is added for quick setting of cement?',
    options: [
      { label: 'A', text: 'Gypsum' },
      { label: 'B', text: 'Alum' },
      { label: 'C', text: 'Zinc sulphate' },
      { label: 'D', text: 'Aluminium sulphate' },
    ],
    ...solved(58, 'D', 'Aluminium sulphate (Option D)'),
  },

  // Item 59
  {
    id: 'mstc-nov2024-q59',
    number: 59,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Equipment Economics - Operating Cost Elements',
    text: 'The major elements of operating cost include:\nI. Fuel cost\nII. Service cost\nIII. Repair cost\nIV. Tire cost\nV. Cost of special items\nVI. Operator\'s wages\nVII. Storage cost',
    options: [
      { label: 'A', text: 'I, II, III, IV, VI, VII only' },
      { label: 'B', text: 'I, II, III, V, VI, VII only' },
      { label: 'C', text: 'I, II, III, IV, V, VI only' },
      { label: 'D', text: 'All of the above' },
    ],
    ...solved(59, 'C', 'I, II, III, IV, V, VI only (Option C)', 'The booklet keys this item C. Storage cost (VII) is an ownership cost rather than an operating cost, which is what makes C — the set that stops at VI — the printed answer.'),
  },

  // Item 60
  {
    id: 'mstc-nov2024-q60',
    number: 60,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Statistics - Small Sample Student\'s t-Distribution Confidence Interval',
    text: 'Three randomly chosen cars of a particular model are subjected to sideswipe (shallow-angle) collisions and the monetary damages are noted. Assuming that monetary damages in this type of accident are normally distributed, a 95% t-based confidence interval (with t = 4.303) for the mean is found. Which of the following is a correct statement?',
    options: [
      { label: 'A', text: 'The confidence interval is valid.' },
      { label: 'B', text: 'The confidence interval is invalid because the sample size is too small.' },
      { label: 'C', text: 'The confidence interval is invalid because np = 3 < 10.' },
      { label: 'D', text: 'The confidence interval is invalid because t = 3.182 should have been used.' },
    ],
    ...solved(60, 'A', 'The confidence interval is valid. (Option A)'),
  },
];
