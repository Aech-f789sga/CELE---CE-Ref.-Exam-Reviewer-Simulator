import { Question } from '../../../types/exam';
import {
  besaMar2026Figure,
  besaMar2026SolutionImages,
} from '../../besaMar2026Images';

/** Worked-solution item: no choices, scanned solution revealed on demand. */
const worked = (key: string, page: number, pageEnd: number, answer: string) => ({
  options: [] as Question['options'],
  correctAnswer: 'A' as const,
  workedSolution: true,
  referenceSource: 'Besavilla' as const,
  solution: {
    summary: '',
    steps: [],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: besaMar2026SolutionImages(key),
  },
});

const figure = (key: string) => besaMar2026Figure(key);

/** Situation 12 — roof truss of double angles with two tension-rod diagonals. */
const SITUATION_12 =
  '**Situation 12** — Double angles are used for the truss members except for the diagonals ' +
  'DI and EH which are tension rods.\n\n' +
  'Panel dimensions: 3 m horizontally, 2.25 m vertically at the ridge.';

/** Situation 13 — lamp post held by two cables under a horizontal force. */
const SITUATION_13 =
  '**Situation 13** — Two cables, AB and BC, support a lamp post. The lamp post is subjected ' +
  'to a horizontal force of 1.2 kN directed towards the positive y-axis.\n\n' +
  'From the figure: $BD = 4.5$ m horizontally and 4 m vertically, the post is 6 m tall, ' +
  'and the anchors are 3 m and 6 m from the post base.';

/** Situation 14 — steel brace and a steel loop around an aluminum rod. */
const SITUATION_14 =
  '**Situation 14** — Allowable material strength in tension and compression:\n' +
  'Steel $= 230$ MPa\n' +
  'Aluminum $= 100$ MPa';

/** Situation 15 — glued square post loaded across the glued plane. */
const SITUATION_15 =
  '**Situation 15** — A square post is made up of two parts glued together at a plane ' +
  'a-b-c-d. It is subjected to a compressive force $P$.\n\n' +
  '$W = 90$ mm\n' +
  '$\\theta = 30^\\circ$\n' +
  'Allowable stress in compression $= 2.2$ MPa\n' +
  'Allowable stress in shear $= 1.7$ MPa';

/** Situation 16 — prestressed DT joist carrying a warehouse floor. */
const SITUATION_16 =
  '**Situation 16** — The DT joist shown in the figure is used for the flooring of a ' +
  'warehouse. The joists are simply supported on a span of 7.5 m.\n\n' +
  'Section properties of the DT joists:\n' +
  'Width, $a = 2.4$ m\n' +
  'Area $= 2 \\times 10^5$ mm$^2$\n' +
  'Moment of inertia, $I = 1.88 \\times 10^9$ mm$^4$\n' +
  'Location of the neutral axis: $y_t = 88$ mm, $y_b = 267$ mm\n\n' +
  'The joist is pre-tensioned with a 12.7 mm diameter strand in each stem. The prestressing ' +
  'force on each strand is 745 kN, located at 192 mm below the neutral axis at midspan and ' +
  'at the neutral axis at the supports.\n\n' +
  'Loads:\n' +
  'Superimposed dead load $= 2.3$ kPa\n' +
  'Live load $= 6.0$ kPa\n\n' +
  'Loss of prestress:\n' +
  '10% at transfer\n' +
  '18% at service load\n\n' +
  'Unit weight of concrete $= 24$ kN/m$^3$';

export const BESA_PSAD_MAR2026_PART3: Question[] = [
  // ── Situation 12 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q28',
    number: 28,
    pageNumber: 480,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Trusses — Panel Load for a Given Member Force',
    text:
      SITUATION_12 +
      '\n\n**a)** What is the value of $P$ which will result to a compressive force of 36 kN ' +
      'in member EF?',
    figureSvg: figure('S12'),
    figureCaption:
      'Roof truss elevation: double-angle members with tension-rod diagonals DI and EH',
    ...worked('S12', 480, 480, '$P = 22.53$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q29',
    number: 29,
    pageNumber: 480,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Trusses — Force in a Diagonal at a Given Load',
    text: SITUATION_12 + '\n\n**b)** If $P = 60$ kN, calculate the force in member JB.',
    figureSvg: figure('S12'),
    figureCaption:
      'Roof truss elevation: double-angle members with tension-rod diagonals DI and EH',
    ...worked('S12', 480, 481, '$F_{JB} = 47.95$ kN, tension'),
  },
  {
    id: 'psad-mar2026-besa-q30',
    number: 30,
    pageNumber: 480,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Trusses — Which Tension Rods Act',
    text:
      SITUATION_12 +
      '\n\n**c)** If $P = 60$ kN, which of the tension rods act and what is the resulting ' +
      'force in kN?',
    figureSvg: figure('S12'),
    figureCaption:
      'Roof truss elevation: double-angle members with tension-rod diagonals DI and EH',
    ...worked('S12', 481, 481, 'Rod DI acts, $F_{DI} = 40$ kN (tension); rod EH carries nothing'),
  },

  // ── Situation 13 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q31',
    number: 31,
    pageNumber: 481,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Space Cables — Force in Cable AB',
    text: SITUATION_13 + '\n\n**a)** What is the resulting force in kN in cable AB?',
    figureSvg: figure('S13'),
    figureCaption: 'Lamp post braced by cables AB and BC with a 1.2 kN horizontal load',
    ...worked('S13', 481, 482, '$F_{AB} = 0.75$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q32',
    number: 32,
    pageNumber: 481,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Space Cables — Force in Cable AC',
    text: SITUATION_13 + '\n\n**b)** What is the resulting force in kN in cable AC?',
    figureSvg: figure('S13'),
    figureCaption: 'Lamp post braced by cables AB and BC with a 1.2 kN horizontal load',
    ...worked('S13', 482, 482, '$F_{AC} = 1.25$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q33',
    number: 33,
    pageNumber: 481,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Space Cables — Resultant Reaction at the Base',
    text: SITUATION_13 + '\n\n**c)** What is the resultant force acting at A?',
    figureSvg: figure('S13'),
    figureCaption: 'Lamp post braced by cables AB and BC with a 1.2 kN horizontal load',
    ...worked('S13', 482, 482, '$R_A = 1.83$ kN'),
  },

  // ── Situation 14 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q34',
    number: 34,
    pageNumber: 482,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Tension Members — Diameter of the Steel Brace',
    text:
      SITUATION_14 +
      '\n\n**a)** For Figure 1, the force $P = 45$ kN. Determine the required diameter (mm) ' +
      'of the diagonal steel brace BD.',
    figureSvg: figure('S14'),
    figureCaption:
      'Figure 1: braced frame with the diagonal steel brace BD. Figure 2: steel loop ABCD around an aluminum rod BD',
    ...worked('S14', 482, 482, '$d = 20$ mm'),
  },
  {
    id: 'psad-mar2026-besa-q35',
    number: 35,
    pageNumber: 482,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Tension Members — Diameter of the Steel Loop',
    text:
      SITUATION_14 +
      '\n\n**b)** Refer to Figure 2. A steel loop ABCD is placed around an aluminum rod BD. ' +
      'The force $T = 55$ kN. Solve the minimum diameter (mm) of the steel loop.',
    figureSvg: figure('S14'),
    figureCaption:
      'Figure 1: braced frame with the diagonal steel brace BD. Figure 2: steel loop ABCD around an aluminum rod BD',
    ...worked('S14', 482, 483, '$d = 16$ mm'),
  },
  {
    id: 'psad-mar2026-besa-q36',
    number: 36,
    pageNumber: 482,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Tension Members — Loop Sized by the Aluminum Rod',
    text:
      SITUATION_14 +
      '\n\n**c)** In Figure 2, based on the capacity of the aluminum rod, what is the ' +
      'required diameter (mm) of the steel loop?',
    figureSvg: figure('S14'),
    figureCaption:
      'Figure 1: braced frame with the diagonal steel brace BD. Figure 2: steel loop ABCD around an aluminum rod BD',
    ...worked('S14', 483, 483, '$d = 24$ mm'),
  },

  // ── Situation 15 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q37',
    number: 37,
    pageNumber: 483,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Combined Stresses — Compression on the Glued Plane',
    text:
      SITUATION_15 +
      '\n\n**a)** What is the maximum force $P$ (kN) so that failure in compression will not ' +
      'occur?',
    figureSvg: figure('S15'),
    figureCaption: 'Square post glued along the inclined plane a-b-c-d, loaded by P',
    ...worked('S15', 483, 483, '$P = 71.28$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q38',
    number: 38,
    pageNumber: 483,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Combined Stresses — Shear on the Glued Plane',
    text:
      SITUATION_15 +
      '\n\n**b)** How much force $P$ (kN) can the post be subjected to so that the allowable ' +
      'shear stress will not be exceeded?',
    figureSvg: figure('S15'),
    figureCaption: 'Square post glued along the inclined plane a-b-c-d, loaded by P',
    ...worked('S15', 483, 484, '$P = 31.8$ kN'),
  },
  {
    id: 'psad-mar2026-besa-q39',
    number: 39,
    pageNumber: 483,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Combined Stresses — Plane of Maximum Shear',
    text:
      SITUATION_15 +
      '\n\n**c)** At what angle in degrees will the maximum shear stress occur?',
    figureSvg: figure('S15'),
    figureCaption: 'Square post glued along the inclined plane a-b-c-d, loaded by P',
    ...worked('S15', 484, 484, '$\\theta = 45^\\circ$'),
  },

  // ── Situation 16 ───────────────────────────────────────────────────────────
  {
    id: 'psad-mar2026-besa-q40',
    number: 40,
    pageNumber: 484,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Prestressed Concrete — Stress at Transfer',
    text:
      SITUATION_16 +
      '\n\n**a)** At transfer of prestress, compute the stress (MPa) at the bottom fiber at ' +
      'the support.',
    figureSvg: figure('S16'),
    figureCaption: 'DT joist cross-section with the neutral axis at yt = 88 mm and yb = 267 mm',
    ...worked('S16', 485, 485, '$f_b = 48.07$ MPa, tension'),
  },
  {
    id: 'psad-mar2026-besa-q41',
    number: 41,
    pageNumber: 484,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Prestressed Concrete — Maximum Compressive Stress at Service',
    text:
      SITUATION_16 +
      '\n\n**b)** At the service load, solve the maximum compressive stress (MPa) at midspan ' +
      'of the beam due to loads and prestress.',
    figureSvg: figure('S16'),
    figureCaption: 'DT joist cross-section with the neutral axis at yt = 88 mm and yb = 267 mm',
    ...worked('S16', 485, 486, '$f_b = 14.75$ MPa, compression'),
  },
  {
    id: 'psad-mar2026-besa-q42',
    number: 42,
    pageNumber: 484,
    subject: 'PSAD',
    year: 2026,
    month: 'March',
    category: 'Prestressed Concrete — Load for Zero Tensile Stress',
    text:
      SITUATION_16 +
      '\n\n**c)** At service load, what additional superimposed load $W$ would result to zero ' +
      'tensile stress at the bottom of the beam at midspan? Loss of stress is 18% at ' +
      'service load.',
    figureSvg: figure('S16'),
    figureCaption: 'DT joist cross-section with the neutral axis at yt = 88 mm and yb = 267 mm',
    ...worked('S16', 486, 486, '$W = 14.77$ kN/m'),
  },
];
