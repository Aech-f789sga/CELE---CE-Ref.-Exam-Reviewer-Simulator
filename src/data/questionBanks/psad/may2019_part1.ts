import { Question } from '../../../types/exam';
import {
  psadMay2019Figure,
  psadMay2019SolutionImages,
  psadMay2019SolutionPage,
  psadMay2019SolutionPageEnd,
} from '../../psadMay2019Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: psadMay2019SolutionPage(n),
  pageNumberEnd: psadMay2019SolutionPageEnd(n),
  images: psadMay2019SolutionImages(n),
});

/** Situation 3 — wind on the canopy of a storage building. */
const SITUATION_3 =
  'Situation 3 — The canopy of a storage building shown in the figure is spaced 4 m apart. ' +
  'The wind load normal to the roof surface is 2.88 kPa. Take $s = 0.8$ m and $H = 1.8$ m. ' +
  'Determine the following:';

/** Situation 4 — five-panel truss loaded at the bottom chord. */
const SITUATION_4 =
  'Situation 4 — Refer to the truss shown:\n\n' +
  'Given:\n$s = 3$ m\n$h = 6$ m\n$P = 2$ kN';

export const PSAD_MAY2019_PART1: Question[] = [
  // Item 1
  {
    id: 'psad-may2019-q1',
    number: 1,
    pageNumber: 61,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Combined Axial and Bending Stress',
    text:
      "A 3-m-high circular pole has a diameter of 250 mm. The pole is subjected to a vertical compressive load of 3 kN applied at an eccentricity of 100 mm from the pole's axis and a lateral load of 0.45 kN at the top. The pole weighs 22 kg per linear meter. Determine the maximum compressive stress (MPa) at the base of the pole.",
    options: [
      { label: 'A', text: '0.954' },
      { label: 'B', text: '0.941' },
      { label: 'C', text: '0.806' },
      { label: 'D', text: '1.150' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(1), finalAnswer: '1.15 MPa (Option D)' },
  },

  // Item 2
  {
    id: 'psad-may2019-q2',
    number: 2,
    pageNumber: 61,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Development Length of a Hooked Bar',
    text:
      'Refer to the figure shown.\n\n' +
      'Given:\n$L = 2$ m\nBar diameter $= 20$ mm\nConcrete cover, $a = 65$ mm\n' +
      'Length of extension bar, $b = 120$ mm\nRadius of bend $r = 4d_b$\n' +
      "f'c = 20.7 MPa; fy = 414 MPa\n\n" +
      'According to 412.6 of NSCP, development length $L_{dh}$ for deformed bars in tension ' +
      'terminating in a standard hook shall not be less than:\n' +
      '1. $\\dfrac{f_y\\,d_b}{4.17\\sqrt{f\'_c}}$\n' +
      '2. $8\\,d_b$\n' +
      '3. 150 mm\n\n' +
      'Determine the total length (m) of the bar.',
    figureSvg: psadMay2019Figure(
      2,
      'Figure: Standard hook at the end of a bar with cover a, extension b, bend radius r and development length Ldh'
    ),
    figureCaption: 'Standard hook detail with development length Ldh',
    options: [
      { label: 'A', text: '2.53' },
      { label: 'B', text: '3.03' },
      { label: 'C', text: '2.98' },
      { label: 'D', text: '3.36' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(2), finalAnswer: '2.98 m (Option C)' },
  },

  // Item 3
  {
    id: 'psad-may2019-q3',
    number: 3,
    pageNumber: 61,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Design Moment of a One-Way Slab',
    text:
      "A 100-mm thick one-way slab is reinforced with 12 mm bars spaced at 200 mm on centers. Given that f'c = 20.7 MPa, fy = 275 MPa, compute the design moment (kN-m) of the slab. Assume 20 mm concrete cover.",
    options: [
      { label: 'A', text: '10.82' },
      { label: 'B', text: '11.75' },
      { label: 'C', text: '10.58' },
      { label: 'D', text: '9.74' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(3), finalAnswer: '9.73 kN-m (Option D)' },
  },

  // Item 4
  // The printed key gives 4D / 5A, i.e. the isotropic and homogeneous answers are
  // swapped relative to the wording. The printed solutions repeat the same
  // assignment, so the booklet is internally consistent and the key is kept
  // verbatim.
  {
    id: 'psad-may2019-q4',
    number: 4,
    pageNumber: 62,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Material Idealisation',
    text:
      'Situation 1 — Answer the following questions.\n\n' +
      'A property of a material which it has the same composition at every point but the ' +
      'elastic property may not be same in all directions.',
    options: [
      { label: 'A', text: 'homogeneous' },
      { label: 'B', text: 'orthotropic' },
      { label: 'C', text: 'prismatic' },
      { label: 'D', text: 'isotropic' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(4), finalAnswer: 'Isotropic (Option D)' },
  },

  // Item 5
  {
    id: 'psad-may2019-q5',
    number: 5,
    pageNumber: 62,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Material Idealisation',
    text: 'A property of a material that has the same elastic properties in all directions.',
    options: [
      { label: 'A', text: 'homogeneous' },
      { label: 'B', text: 'orthotropic' },
      { label: 'C', text: 'prismatic' },
      { label: 'D', text: 'isotropic' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(5), finalAnswer: 'Homogeneous (Option A)' },
  },

  // Item 6
  {
    id: 'psad-may2019-q6',
    number: 6,
    pageNumber: 62,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Material Idealisation',
    text:
      'A property of a material in which the composition material exhibits elastic properties in ' +
      'one direction different from that in perpendicular direction.',
    options: [
      { label: 'A', text: 'homogeneous' },
      { label: 'B', text: 'orthotropic' },
      { label: 'C', text: 'prismatic' },
      { label: 'D', text: 'isotropic' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(6), finalAnswer: 'Orthotropic (Option B)' },
  },

  // Item 7
  {
    id: 'psad-may2019-q7',
    number: 7,
    pageNumber: 62,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Seismology — Earthquake Terminology',
    text:
      'Situation 2 — Answer the following earthquake definition of terms.\n\n' +
      'Which of the following describes the location of an earthquake besides epicenter.',
    options: [
      { label: 'A', text: 'fault line' },
      { label: 'B', text: 'dip angle' },
      { label: 'C', text: 'ground displacement' },
      { label: 'D', text: 'focal depth' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(7), finalAnswer: 'Focal depth (Option D)' },
  },

  // Item 8
  {
    id: 'psad-may2019-q8',
    number: 8,
    pageNumber: 62,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Seismology — Earthquake Terminology',
    text: 'Seismometer measures?',
    options: [
      { label: 'A', text: 'actual displacement' },
      { label: 'B', text: 'components of ground motion' },
      { label: 'C', text: 'reference point' },
      { label: 'D', text: 'attenuation' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(8), finalAnswer: 'Components of ground motion (Option B)' },
  },

  // Item 9
  {
    id: 'psad-may2019-q9',
    number: 9,
    pageNumber: 62,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Seismology — Earthquake Magnitude',
    text: 'A Richter Scale measures ______ of an earthquake.',
    options: [
      { label: 'A', text: 'magnitude' },
      { label: 'B', text: 'intensity' },
      { label: 'C', text: 'drift' },
      { label: 'D', text: 'amplitude' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(9), finalAnswer: 'Magnitude (Option A)' },
  },

  // Item 10
  {
    id: 'psad-may2019-q10',
    number: 10,
    pageNumber: 62,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Reactions of a Canopy Truss under Wind Load',
    text: `${SITUATION_3}\n\nWhat is the resultant reaction (kN) at $D$?`,
    figureSvg: psadMay2019Figure(
      10,
      'Figure: Canopy truss A-B-C-D-E-F-G with wind load Wn normal to the roof and height h'
    ),
    figureCaption: 'Canopy of a storage building under wind load normal to the roof',
    options: [
      { label: 'A', text: '27.65' },
      { label: 'B', text: '28.80' },
      { label: 'C', text: '39.92' },
      { label: 'D', text: '34.20' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(10), finalAnswer: '28.8 kN (Option B)' },
  },

  // Item 11
  {
    id: 'psad-may2019-q11',
    number: 11,
    pageNumber: 62,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Reactions of a Canopy Truss under Wind Load',
    text: `${SITUATION_3}\n\nCalculate the reaction (kN) at $G$.`,
    options: [
      { label: 'A', text: '28.8' },
      { label: 'B', text: '39.92' },
      { label: 'C', text: '34.20' },
      { label: 'D', text: '27.65' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(11), finalAnswer: '28.8 kN (Option A)' },
  },

  // Item 12
  {
    id: 'psad-may2019-q12',
    number: 12,
    pageNumber: 62,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Axial Force in a Canopy Truss Member',
    text: `${SITUATION_3}\n\nCalculate the axial load (kN) of member $EF$.`,
    options: [
      { label: 'A', text: '6.1T' },
      { label: 'B', text: '6.1C' },
      { label: 'C', text: '9.6T' },
      { label: 'D', text: '9.6C' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(12), finalAnswer: '9.6 kN compression (Option D)' },
  },

  // Item 13
  {
    id: 'psad-may2019-q13',
    number: 13,
    pageNumber: 63,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Method of Sections on a Truss',
    text: `${SITUATION_4}\n\nDetermine the axial force (kN) in member $HI$.`,
    figureSvg: psadMay2019Figure(
      13,
      'Figure: Five-panel truss with top chord H-I-J, bottom chord A-B-C-D-E-G and panel width s'
    ),
    figureCaption: 'Five-panel truss loaded at the bottom chord',
    options: [
      { label: 'A', text: '4 T' },
      { label: 'B', text: '4 C' },
      { label: 'C', text: '6 T' },
      { label: 'D', text: '6 C' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(13), finalAnswer: '4 kN compression (Option B)' },
  },

  // Item 14
  {
    id: 'psad-may2019-q14',
    number: 14,
    pageNumber: 63,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Method of Sections on a Truss',
    text: `${SITUATION_4}\n\nDetermine the axial force (kN) in member $JE$.`,
    options: [
      { label: 'A', text: '3.35 T' },
      { label: 'B', text: '3.35 C' },
      { label: 'C', text: '7.83 C' },
      { label: 'D', text: '7.83 T' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(14), finalAnswer: '3.35 kN tension (Option A)' },
  },
];
