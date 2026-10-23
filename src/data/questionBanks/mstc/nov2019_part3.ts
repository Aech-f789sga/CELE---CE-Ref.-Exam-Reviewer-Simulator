import { Question } from '../../../types/exam';
import {
  msteNov2019SolutionImages,
  msteNov2019SolutionPage,
  msteNov2019SolutionPageEnd,
} from '../../msteNov2019Images';

const sol = (item: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: msteNov2019SolutionPage(item),
  pageNumberEnd: msteNov2019SolutionPageEnd(item),
  images: msteNov2019SolutionImages(item),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const base = { subject: 'MSTC' as const, year: 2019, month: 'November' as const };

const MIX_DESIGN_TABLE =
  '| Materials | Specific Gravity | % of Weight | Bulk Sp. Gravity |\n' +
  '| --- | --- | --- | --- |\n' +
  '| Asphalt cement | 1.03 | 6.0 | |\n' +
  '| Mineral filler | 3.10 | 8.0 | |\n' +
  '| Fine aggregates | | 30.0 | 2.690 |\n' +
  '| Coarse aggregates | | 56.0 | 2.611 |';

export const MSTE_NOV2019_PART3: Question[] = [
  {
    ...base,
    id: 'mstc-nov2019-q31',
    number: 31,
    pageNumber: 117,
    category: 'Materials — Asphalt Mix Design',
    text:
      'The table below lists data used in obtaining a mix design for an asphalt paving mixture.\n\n' +
      MIX_DESIGN_TABLE +
      '\n\nThe maximum specific gravity of the paving mixture is 2.535, the bulk specific gravity of the compacted paving mix = 2.384. Determine the air voids in the compacted mix in percent.',
    options: opt('5.5', '6.0', '5.0', '6.5'),
    correctAnswer: 'B',
    solution: { ...sol(31), finalAnswer: '5.96% ≈ 6.0% (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q32',
    number: 32,
    pageNumber: 117,
    category: 'Construction — Deep Foundations',
    text:
      'It is nothing more than a column driven into the soil to support a structure by transferring building loads to a deeper and stronger layer of soil or rock.',
    options: opt('caisson', 'shoring', 'pier', 'pile'),
    correctAnswer: 'D',
    solution: { ...sol(32), finalAnswer: 'pile (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q33',
    number: 33,
    pageNumber: 117,
    category: 'Traffic Engineering — Signs',
    text:
      'This sign informs and advise road users of the directions, distances, routes, the location of services for the road users and point of interest.',
    options: opt(
      'advance direction sign',
      'guide sign',
      'traffic instruction sign',
      'crossroad sign'
    ),
    correctAnswer: 'B',
    solution: { ...sol(33), finalAnswer: 'guide sign (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q34',
    number: 34,
    pageNumber: 117,
    category: 'Traffic Engineering — Conflicts',
    text: 'Ways of avoiding traffic conflicts:',
    options: opt('grade separation', 'space-sharing', 'time-sharing', 'All of these'),
    correctAnswer: 'D',
    solution: { ...sol(34), finalAnswer: 'All of these (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q35',
    number: 35,
    pageNumber: 117,
    category: 'Traffic Engineering — Delay',
    text:
      'The difference between the actual travel time of a given segment of a transportation system and some ideal travel time for that segment.',
    options: opt('travel time', 'service time', 'queue time', 'delay'),
    correctAnswer: 'D',
    solution: { ...sol(35), finalAnswer: 'delay (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q36',
    number: 36,
    pageNumber: 118,
    category: 'Pavement — Distress',
    text:
      'Cracks approximately at right angles to the pavement centerline. These may be caused by shrinkage or differential thermal stress of the asphalt concrete or maybe reflective cracks.',
    options: opt(
      'transverse cracks',
      'longitudinal cracks',
      'alligator crack',
      'block crack'
    ),
    correctAnswer: 'A',
    solution: { ...sol(36), finalAnswer: 'transverse cracks (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q37',
    number: 37,
    pageNumber: 118,
    category: 'Highway Design — Sight Distance',
    text:
      'The provision of safety sight distance depends on the characteristics of the road environment such as:\n\n' +
      'I. Road geometry\n' +
      'II. Road surface\n' +
      'III. Road illumination at night\n' +
      'IV. Road topography',
    options: opt(
      'II and IV only',
      'I and IV only',
      'All of the above',
      'I, II, and III only'
    ),
    correctAnswer: 'C',
    solution: { ...sol(37), finalAnswer: 'All of the above (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q38',
    number: 38,
    pageNumber: 118,
    category: 'Highway Design — Sight Distance',
    text:
      'One of the provisions of safety sight distance depends on the characteristics of the vehicle which are as follows:\n\n' +
      'I. Type of vehicles, car, or truck\n' +
      'II. friction between the tire and the road\n' +
      'III. eye height of the driver\n' +
      'IV. speed of vehicle',
    options: opt('II and III only', 'IV only', 'All of the above', 'III only'),
    correctAnswer: 'A',
    solution: { ...sol(38), finalAnswer: 'II and III only (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q39',
    number: 39,
    pageNumber: 118,
    category: 'Concrete — Finishing',
    text:
      'To level a floor or layer of concrete with a straight edge using a back-and-forth motion while moving across the surface.',
    options: opt('floating', 'trowelling', 'finishing', 'screeding'),
    correctAnswer: 'D',
    solution: { ...sol(39), finalAnswer: 'screeding (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q40',
    number: 40,
    pageNumber: 118,
    category: 'Tides and Water Levels',
    text:
      'Owing to the retardation of the tidal wave in the ocean by frictional force, as the earth revolved daily around its axis and as the tides tends to follow the direction of the moon, the highest tide for each location is not coincident with conjunction and opposition but occurs at some constant time after new and full moon. This interval which may amount to as much as 2.5 days is known as:',
    options: opt('semi-diurnal tide', 'age of tides', 'lunar tide', 'diurnal tide'),
    correctAnswer: 'B',
    solution: { ...sol(40), finalAnswer: 'age of tides (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q41',
    number: 41,
    pageNumber: 119,
    category: 'Pavement — Distress',
    text:
      'Wearing way of the pavement surface caused by dislodging of aggregate particles and binder. This is usually a result of insufficient asphalt binder in the mix or stripping of asphalt from particles of aggregate.',
    options: opt('raveling', 'bleeding', 'joint crack spalling', 'flushing'),
    correctAnswer: 'A',
    solution: { ...sol(41), finalAnswer: 'raveling (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q42',
    number: 42,
    pageNumber: 119,
    category: 'Concrete — Proportioning',
    text: 'The most important process to prepare concrete.',
    options: opt(
      'batching',
      'admixture',
      'cement-aggregate ratio',
      'water-cement ratio'
    ),
    correctAnswer: 'A',
    solution: { ...sol(42), finalAnswer: 'batching (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q43',
    number: 43,
    pageNumber: 119,
    category: 'Concrete — Workability',
    text: 'A test to determine the relative consistency of concrete.',
    options: opt(
      'water-cement ratio',
      'aggregate-cement ratio',
      'all of these',
      'slump test'
    ),
    correctAnswer: 'D',
    solution: { ...sol(43), finalAnswer: 'slump test (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q44',
    number: 44,
    pageNumber: 119,
    category: 'Construction — Contract Documents',
    text:
      'These are written instructions detailing how the facility is to be constructed.',
    options: opt('plans', 'estimates', 'specifications', 'bid documents'),
    correctAnswer: 'C',
    solution: { ...sol(44), finalAnswer: 'specifications (Option C)' },
  },
];
