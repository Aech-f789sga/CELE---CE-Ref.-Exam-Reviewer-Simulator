import { Question } from '../../../types/exam';
import {
  msteMay2019SolutionImages,
  msteMay2019SolutionPage,
  msteMay2019SolutionPageEnd,
} from '../../msteMay2019Images';

const sol = (item: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: msteMay2019SolutionPage(item),
  pageNumberEnd: msteMay2019SolutionPageEnd(item),
  images: msteMay2019SolutionImages(item),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const base = { subject: 'MSTC' as const, year: 2019, month: 'May' as const };

export const MSTE_MAY2019_PART4: Question[] = [
  {
    ...base,
    id: 'mstc-may2019-q46',
    number: 46,
    pageNumber: 8,
    category: 'Surveying — Tape Correction',
    text:
      'A rectangular field was measured using a 100-m tape which was actually 10 cm too short. The recorded area was 4500 sq. m. What is the true area of the field?',
    options: opt('$4491\\ \\text{m}^2$', '$4509\\ \\text{m}^2$', '$4504\\ \\text{m}^2$', '$4495\\ \\text{m}^2$'),
    correctAnswer: 'A',
    solution: { ...sol(46), finalAnswer: '$A_t = 4491.005\\ \\text{m}^2$ (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q47',
    number: 47,
    pageNumber: 8,
    category: 'Surveying — Standard Error',
    text:
      'A line has been measured 10 times with the results shown in column (1) of the following table. It is assumed that these measurements have already been corrected for all the systematic errors. What is the standard error?\n\n' +
      '| Length | Residual ($V$) | $V^2$ |\n' +
      '|:---:|:---:|:---:|\n' +
      '| 1000.57 | +0.12 | 0.0144 |\n' +
      '| 1000.39 | −0.06 | 0.0036 |\n' +
      '| 1000.37 | −0.08 | 0.0064 |\n' +
      '| 1000.39 | −0.06 | 0.0036 |\n' +
      '| 1000.48 | +0.03 | 0.0009 |\n' +
      '| 1000.49 | +0.04 | 0.0016 |\n' +
      '| 1000.33 | −0.12 | 0.0144 |\n' +
      '| 1000.46 | +0.01 | 0.0001 |\n' +
      '| 1000.47 | +0.02 | 0.0004 |\n' +
      '| 1000.55 | +0.10 | 0.0100 |',
    options: opt('$\\pm 0.78$', '$\\pm 0.68$', '$\\pm 0.85$', '$\\pm 0.96$'),
    correctAnswer: 'A',
    solution: { ...sol(47), finalAnswer: '$SE = \\pm 0.07846$ (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q48',
    number: 48,
    pageNumber: 9,
    category: 'Surveying — Area of a Tract',
    text:
      'A surveyor sets up a transit at point $P$, which is at the inner portion of a four-sided tract of land $ABCD$, and read the bearings and measures the distances as follows:\n\n' +
      '| Line | Bearing | Distance |\n' +
      '|:---:|:---:|:---:|\n' +
      '| PA | N 40° 30′ W | 420.35 |\n' +
      '| PB | N 38° 00′ E | 530.15 |\n' +
      '| PC | S 70° 00′ E | 480.75 |\n' +
      '| PD | E 60° 15′ W | 695.10 |\n\n' +
      'What is the area of the tract in hectares?',
    options: opt('52.32', '48.43', '50.14', '43.23'),
    correctAnswer: 'C',
    solution: { ...sol(48), finalAnswer: '$A = 50.1347$ hectares (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q49',
    number: 49,
    pageNumber: 9,
    category: 'Surveying — Compass Rule',
    text:
      'Determine the corrected values for the latitude of line $BC$ and departure of line $CD$ using compass rule.\n\n' +
      '| Course | Bearing | Length |\n' +
      '|:---:|:---:|:---:|\n' +
      '| AB | N 26° 10′ E | 285.10 |\n' +
      '| BC | S 75° 25′ E | 610.45 |\n' +
      '| CD | S 15° 30′ W | 720.45 |\n' +
      '| DE | N 1° 42′ W | 203.00 |\n' +
      '| EA | N 53° 06′ W | 647.02 |',
    options: opt(
      '$BC_{lat} = 153.537$ m; $CD_{dep} = 192.374$ m',
      '$BC_{lat} = 153.870$ m; $CD_{dep} = 192.690$ m',
      '$BC_{lat} = 153.536$ m; $CD_{dep} = 192.690$ m',
      '$BC_{lat} = 153.870$ m; $CD_{dep} = 192.374$ m'
    ),
    correctAnswer: 'C',
    solution: {
      ...sol(49),
      finalAnswer: '$BC_{lat} = 153.536$ m, $CD_{dep} = 192.690$ m (Option C)',
    },
  },
  {
    ...base,
    id: 'mstc-may2019-q50',
    number: 50,
    pageNumber: 9,
    category: 'Surveying — Simple Curve',
    text:
      'An engineer designs a simple curve at a certain point of a highway. The data are:\n\n' +
      '$I = 44^\\circ$\n\n$R = 400$ feet\n\n$PC$ is at Station $11 + 10.57$\n\n$PI$ is at Station $12 + 72.18$\n\n$PT$ is at Station $14 + 17.75$\n\n' +
      'What is the deflection angle of Station $13 + 00$?',
    options: opt('$13.57^\\circ$', '$27.13^\\circ$', '$17.25^\\circ$', '$15.24^\\circ$'),
    correctAnswer: 'A',
    solution: { ...sol(50), finalAnswer: '$\\alpha = 13.567^\\circ$ (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q51',
    number: 51,
    pageNumber: 10,
    category: 'Highway Engineering — Spiral Curve',
    text:
      'An 80-m spiral connects a tangent with a 180-m radius circular curve. The maximum velocity in kph that a car could pass through the curve without skidding is nearest to:',
    options: opt('72.58', '78.54', '71.24', '73.68'),
    correctAnswer: 'D',
    solution: { ...sol(51), finalAnswer: '$v = 73.68$ kph (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q52',
    number: 52,
    pageNumber: 10,
    category: 'Highway Engineering — Cross-Section',
    text:
      'Given the following cross-section notes for a road grading work:\n\n' +
      '| Depth (cut −, fill +) | −3.2 | +1.2 | +1.2 | +2.8 |\n' +
      '|:---|:---:|:---:|:---:|:---:|\n' +
      '| **Offset from centerline** | $x_1$ | 0 | 3.5 | $x_2$ |\n\n' +
      'The roadbed is 9 m wide and the side slope for cut is 1:1 and for fill is 1.5:1. Determine the area of cut of the section.',
    options: opt('15.425 sq. m.', '7.563 sq. m.', '9.402 sq. m.', '3.142 sq. m.'),
    correctAnswer: 'C',
    solution: { ...sol(52), finalAnswer: '$A_{cut} = 9.402\\ \\text{m}^2$ (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q53',
    number: 53,
    pageNumber: 10,
    category: 'Highway Engineering — Cross-Section',
    text:
      'The cross-sectional area of a road with width of 10 m is 42.9 square meters. The cross-sectional area is as follows:\n\n' +
      '| Depth | 9.8 | 0 | 7.4 |\n' +
      '|:---|:---:|:---:|:---:|\n' +
      '| **Offset** | 2.4 | $x$ | 1.2 |\n\n' +
      'Determine the value of $x$.',
    options: opt('3.45 m', '3.70 m', '3.94 m', '2.45 m'),
    correctAnswer: 'C',
    solution: { ...sol(53), finalAnswer: '$x = 3.94$ m (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q54',
    number: 54,
    pageNumber: 10,
    category: 'Traffic Engineering — Capacity',
    text:
      'In the measures of congestion of highway capacity, what will happen as the density continues to increase?',
    options: opt(
      'Running speed and traffic flow is minimum',
      'The point is reached at which speed declines noticeably',
      'Minimum rate flow is eventually reached',
      'Increase speeds and reduced flow rate'
    ),
    correctAnswer: 'B',
    solution: { ...sol(54), finalAnswer: 'Speed declines noticeably (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q55',
    number: 55,
    pageNumber: 10,
    category: 'Traffic Engineering — Signs',
    text:
      'Device mounted on a fixed support (permanent signs) or portable support (temporary signs) whereby a specific message is conveyed by means of words or symbols placed or erected for the purpose of regulating, warning or guiding traffic.',
    options: opt('Special instruction signs', 'Roadwork signs', 'Traffic signs', 'Overhead signs'),
    correctAnswer: 'C',
    solution: { ...sol(55), finalAnswer: 'Traffic signs (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q56',
    number: 56,
    pageNumber: 10,
    category: 'Construction — Concrete',
    text:
      'What is the process of proportioning the cement, water, aggregates and additives prior to mixing concrete called?',
    options: opt('Batching', 'Curing', 'Paving', 'Mixing'),
    correctAnswer: 'A',
    solution: { ...sol(56), finalAnswer: 'Batching (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q57',
    number: 57,
    pageNumber: 11,
    category: 'Hydraulics — Sheet Pile',
    text:
      'Determine the elevation of residual water level (RWL) for the sheet pile type if the following data are as follows:\n\n' +
      'Elev. of MLL, W (datum) $= 0.00$ m\n\nElev. of HWL $= +1.26$ m\n\nElev. of LWL $= -0.23$ m',
    options: opt('+0.82 m', '+0.76 m', '+0.63 m', '+0.96 m'),
    correctAnswer: 'B',
    solution: { ...sol(57), finalAnswer: 'RWL $= +0.763$ m (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q58',
    number: 58,
    pageNumber: 11,
    category: 'Coastal Engineering — Wave Shoaling',
    text:
      'A wave generated in deep water, when reaching shoaling waters, changes not only in its height but also in its length but the period will',
    options: opt('Decrease', 'Remain Constant', 'None of these', 'Increase'),
    correctAnswer: 'A',
    solution: { ...sol(58), finalAnswer: 'Decrease (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q59',
    number: 59,
    pageNumber: 11,
    category: 'Coastal Engineering — Wave Statistics',
    text: 'A maximum wave height and wave period of the maximum wave height in wave train.',
    options: opt(
      'Significant wave',
      'Highest wave',
      'Equivalent depth water wave height',
      'Deep water wave'
    ),
    correctAnswer: 'A',
    solution: { ...sol(59), finalAnswer: 'Significant wave (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q60',
    number: 60,
    pageNumber: 11,
    category: 'Coastal Engineering — Wind Waves',
    text: 'When directly generated and affected by local winds, a wind wave system is called:',
    options: opt('Wind sea', 'Wind seiching', 'Wind wakes', 'Wind swell'),
    correctAnswer: 'A',
    solution: { ...sol(60), finalAnswer: 'Wind sea (Option A)' },
  },
];
