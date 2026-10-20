import { Question } from '../../../types/exam';
import {
  mstcNov2021SolutionImages,
  mstcNov2021SolutionPage,
  mstcNov2021SolutionPageEnd,
} from '../../mstcNov2021Images';

const sol = (item: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: mstcNov2021SolutionPage(item),
  pageNumberEnd: mstcNov2021SolutionPageEnd(item),
  images: mstcNov2021SolutionImages(item),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const base = { subject: 'MSTC' as const, year: 2021, month: 'November' as const };

export const MSTC_NOV2021_PART4: Question[] = [
  {
    ...base,
    id: 'mstc-nov2021-q55',
    number: 55,
    pageNumber: 252,
    category: 'Coastal Engineering — Wave Types',
    text:
      'Waves are formed by the frictional drag of wind across the water surface. This is a process of transferring energy from wind to water. Water particles are moved from their position by the wind, and then return to the original position by gravity, which is restoring force. These waves are called:',
    options: opt('Shallow waves', 'Equivalent waves', 'Significant waves', 'Gravity waves'),
    correctAnswer: 'D',
    solution: { ...sol(55), finalAnswer: 'Gravity waves (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q56',
    number: 56,
    pageNumber: 253,
    category: 'Traffic Engineering — Capacity Parameters',
    text: 'Which is more accurate parameter of traffic capacity; volume or density? Why?',
    options: opt(
      'Volume is more accurate: Only volume is a function of cars in a given length of roadway',
      'Density is more accurate: Only density is a function of cars in a given length of roadway',
      'Volume is more accurate: Only volume has units of time',
      'Density is more accurate: Only density has units of time',
    ),
    correctAnswer: 'B',
    solution: { ...sol(56), finalAnswer: 'Density is more accurate (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q57',
    number: 57,
    pageNumber: 253,
    category: 'Construction Safety — Safe Design',
    text:
      'Which of the following are the concept of safe design for construction?\n\n' +
      'I. The design of the structure to be built.\n' +
      'II. The subsystem to be included in the structure (electrical, mechanical, plumbing, etc.)\n' +
      'III. The equipment involved in building the structure.\n' +
      'IV. The on-site facilities such as man lifts, elevators, concrete batch plants and rock crushing/gravel processing or asphalt plants.\n' +
      'V. The manpower of the structure.',
    options: opt(
      'All of the above',
      'III, IV & V',
      'I, II, III & IV',
      'I, III, IV & V',
    ),
    correctAnswer: 'D',
    solution: { ...sol(57), finalAnswer: 'I, III, IV & V (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q58',
    number: 58,
    pageNumber: 254,
    category: 'Concrete — Shrinkage',
    text:
      'It occurs as concrete hardens, being greater in wet mixes. Curing helps to limit effects and therefore concrete in the actual structure should be thoroughly and continuously moistened for some considerable period after placing.',
    options: opt('Moisture content', 'Compaction', 'Concrete', 'Shrinkage'),
    correctAnswer: 'D',
    solution: { ...sol(58), finalAnswer: 'Shrinkage (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q59',
    number: 59,
    pageNumber: 254,
    category: 'Highway — Bituminous Surface Treatment',
    text:
      'The single initial application of bituminous material to an existing bituminous, Portland concrete, or block surface or base is called:',
    options: opt('tact coat', 'prime coat', 'seal coat', 'overcoat'),
    correctAnswer: 'B',
    solution: { ...sol(59), finalAnswer: 'Prime coat (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q60',
    number: 60,
    pageNumber: 254,
    category: 'Highway — Road Capacity',
    text: 'The ideal capacity of road in vehicles per hour is:',
    options: opt('1800 vph', '2000 vph', '1400 vph', '1200 vph'),
    correctAnswer: 'B',
    solution: { ...sol(60), finalAnswer: '2000 vph (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q61',
    number: 61,
    pageNumber: 254,
    category: 'Project Management — PERT',
    text:
      'Which of the following satisfy the requirement for estimating expected activity times in a PERT network?\n\n' +
      'I. Makes use of three estimates\n' +
      'II. Puts the greatest weight on the most likely times estimate\n' +
      'III. Is motivated by the beta distribution',
    options: opt('III only', 'I only', 'II only', 'All of the above'),
    correctAnswer: 'D',
    solution: { ...sol(61), finalAnswer: 'All of the above (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q62',
    number: 62,
    pageNumber: 254,
    category: 'Materials — Properties',
    text:
      'The sound creaks and groans that one hears inside the building are in fact materials response to external stimuli such as heart, wind and gravity loads. These stimuli fall into four categories. What are these major properties that exhibited by materials?',
    options: opt(
      'temperature, thermal, conductivity and ductility',
      'mechanical, thermal, electrical and chemical',
      'ionic bonding, metallic bonding covalent bonding and secondary bonding',
      'atoms, ions, electron and molecules',
    ),
    correctAnswer: 'B',
    solution: { ...sol(62), finalAnswer: 'Mechanical, thermal, electrical and chemical (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q63',
    number: 63,
    pageNumber: 255,
    category: 'Surveying — Zenith Angles',
    text:
      'In the standard practice of measuring vertical or zenith angles, the following practices are great importance:\n\n' +
      'I. Be sure the instrument is level\n' +
      'II. Sight with vertical crosshair\n' +
      'III. Sight exactly on the target\n' +
      'IV. Sight direct and reverse\n\n' +
      'Which standard practices are true?',
    options: opt('I only', 'I, III, IV only', 'All of the above', 'I & III only'),
    correctAnswer: 'B',
    solution: { ...sol(63), finalAnswer: 'I, III and IV only (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q64',
    number: 64,
    pageNumber: 255,
    category: 'Project Management — Critical Path Probability',
    text:
      'Which of the following is the calculation of the probability that the critical path will be completed by the time $T$?\n\n' +
      'I. Assumes that the activity times are the statistically independent\n' +
      'II. Assumes that the total time of the critical path has approximately beta distribution\n' +
      'III. Requires knowledge of the standard deviation for all activities in the network.',
    options: opt('I only', 'All of the above', 'II only', 'III only'),
    correctAnswer: 'D',
    solution: { ...sol(64), finalAnswer: 'III only (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q65',
    number: 65,
    pageNumber: 255,
    category: 'Reliability — Definitions',
    text:
      'It is the probability of a mechanism that will function satisfactorily. If the mechanism is to operate intermittently and briefly, it is also refers to performance on a given occasion. If the mechanism is to operate continuously, it refers its performance for a specific period of time.',
    options: opt('Standard deviation', 'Infinite set', 'Reliability', 'mean'),
    correctAnswer: 'C',
    solution: { ...sol(65), finalAnswer: 'Reliability (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q66',
    number: 66,
    pageNumber: 255,
    category: 'Geotechnical — Compaction',
    text:
      "Compacting applies energy to soil to consolidate it by compressing air voids to increase the soil's dry density. Which of these are the objectives of proper compacting?\n\n" +
      'I. Minimize settling\n' +
      "II. Increases the soil's load bearing characteristics\n" +
      'III. Increases soil stability\n' +
      'IV. Reduces water penetration\n' +
      'V. Protects slope that will drain water away',
    options: opt('I, III, IV, V', 'I, II, III, IV', 'II, III, IV, V', 'all of these'),
    correctAnswer: 'B',
    solution: { ...sol(66), finalAnswer: 'I, II, III and IV (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q67',
    number: 67,
    pageNumber: 255,
    category: 'Railway — Superelevation',
    text: 'When train passes on curves, which have no super-elevation, it will give thrust on the:',
    options: opt(
      'Inner rail',
      'Inner side of inner rail',
      'Outer rail',
      'Inner side of outer rail',
    ),
    correctAnswer: 'D',
    solution: { ...sol(67), finalAnswer: 'Inner side of outer rail (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q68',
    number: 68,
    pageNumber: 255,
    category: 'Project Management — Critical Path',
    text: 'Of all paths through the network, the critical path',
    options: opt(
      'has the maximum expected time.',
      'has the minimum expected time.',
      'has the maximum actual time.',
      'has the minimum actual time.',
    ),
    correctAnswer: 'A',
    solution: { ...sol(68), finalAnswer: 'Has the maximum expected time (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q69',
    number: 69,
    pageNumber: 255,
    category: 'Statistics — Normal Distribution',
    text:
      'Which of the following are true statements?\n\n' +
      'I. All symmetric histograms have single peaks\n' +
      'II. All symmetric bell-shaped curves are normal\n' +
      'III. All normal curves are bell-shaped and symmetric.',
    options: opt('I only', 'II only', 'III only', 'I and II'),
    correctAnswer: 'C',
    solution: { ...sol(69), finalAnswer: 'III only (Option C)' },
  },
];
