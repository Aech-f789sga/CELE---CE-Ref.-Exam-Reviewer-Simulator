import { Question } from '../../../types/exam';
import { hpgeNov2017Figure } from '../../hpgeNov2017Images';
import { solved, opts } from './nov2017Helpers';

const SIT12 =
  'Situation 12 – Following are the results of two direct shear tests on a normally consolidated clay:\n\n' +
  'Diameter of specimen $= 50\\ \\text{mm}$\n\n' +
  '| Test No. | Normal Force $P$ (N) | Shear Force at Failure, $V$ (N) |\n' +
  '| --- | --- | --- |\n' +
  '| 1 | 265 | 130 |\n' +
  '| 2 | 410 | 185 |\n\n' +
  'Evaluate the following:';

const SIT13 =
  "Situation 13 – A square footing 2 m on a side and 1.20 m below the ground surface for which the bulk unit weight of the soil is 20 kN/m³. The soil is cohesionless and the angle of internal friction is 25°. Consider the condition of general shear and use Terzaghi's equation for square footing. Use Table 01.";

const SIT14 =
  "Situation 14 – A square footing 3 m on a side and 1.50 m below the ground surface for which the bulk unit weight of the soil is 20 kN/m³. The cohesion of the soil is 8 kPa and the angle of internal friction is 22°. Consider the condition of general shear failure and evaluate the contribution of the following soil bearing capacity, in kPa, using the Terzaghi's equation for square footing. Use Table 01 of the previous problem.";

const TERZAGHI_FIG = hpgeNov2017Figure(
  'fig_terzaghi',
  "Table 01 — Terzaghi's bearing capacity factors for general shear failure, listing Nc, Nq and Nγ for friction angles from 0° to 50°.",
);

export const HPGE_NOV2017_PART4: Question[] = [
  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q40',
    number: 40,
    pageNumber: 595,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Direct Shear Test',
    text: SIT12 + '\n\n(1) The angle of internal friction in degrees.',
    options: opts('28.5', '30.6', '20.8', '22.4'),
    ...solved(40, 'C', '20.77°'),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q41',
    number: 41,
    pageNumber: 595,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Shear Strength Parameters',
    text: SIT12 + '\n\n(2) The cohesion of the soil in kPa.',
    options: opts('18.54', '10.24', '16.32', '15.02'),
    ...solved(41, 'D', '15.022 kPa'),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q42',
    number: 42,
    pageNumber: 595,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Shear Strength Parameters',
    text: SIT12 + '\n\n(3) What normal force will cause failure when the shear force is 124 N?',
    options: opts('249.2 N', '126.9 N', '217.5 N', '187.4 N'),
    ...solved(
      42,
      'A',
      '249 N',
      'The booklet writes the closing line as "$P = 0.249\\ \\text{kN} = 249\\ \\text{kN}$". The first figure is right — $126.9 \\times 0.00196 = 0.249\\ \\text{kN}$ — but the second should read 249 N, not 249 kN. The printed key, A (249.2 N), agrees with the 0.249 kN value.',
    ),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q43',
    number: 43,
    pageNumber: 595,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Triaxial Test',
    text: 'A triaxial test is performed on a cohesionless soil. The chamber pressure is 20 kPa and the soil fails when the total axial compressive stress reaches 44 kPa. Obtain the angle of friction of the soil.',
    options: opts('27.4°', '20.22°', '25.02°', '22.02°'),
    ...solved(43, 'D', '22.02°'),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q44',
    number: 44,
    pageNumber: 595,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: SIT13 + '\n\n(1) Compute the contribution of the depth of embedment to the bearing strength.',
    figureSvg: TERZAGHI_FIG,
    figureCaption: "Table 01 — Terzaghi's bearing capacity factors",
    options: opts('165.8 kPa', '133.4 kPa', '305.3 kPa', '326.9 kPa'),
    ...solved(44, 'C', '305.28 kPa'),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q45',
    number: 45,
    pageNumber: 595,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: SIT13 + '\n\n(2) Compute the contribution of footing dimension to the bearing strength.',
    figureSvg: TERZAGHI_FIG,
    figureCaption: "Table 01 — Terzaghi's bearing capacity factors",
    options: opts('133.4 kPa', '305.3 kPa', '326.9 kPa', '165.8 kPa'),
    ...solved(45, 'A', '133.44 kPa'),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q46',
    number: 46,
    pageNumber: 595,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: SIT13 + '\n\n(3) Evaluate the capacity of the footing using a factor of safety of 3.',
    figureSvg: TERZAGHI_FIG,
    figureCaption: "Table 01 — Terzaghi's bearing capacity factors",
    options: opts('625 kN', '512 kN', '585 kN', '687 kN'),
    ...solved(46, 'C', '584.96 kN'),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q47',
    number: 47,
    pageNumber: 597,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: SIT14 + '\n\n(1) Cohesion strength.',
    figureSvg: TERZAGHI_FIG,
    figureCaption: "Table 01 — Terzaghi's bearing capacity factors",
    options: opts('215.6', '210.8', '226.4', '230.2'),
    ...solved(47, 'B', '210.81 kPa'),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q48',
    number: 48,
    pageNumber: 597,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: SIT14 + '\n\n(2) Soil overburden.',
    figureSvg: TERZAGHI_FIG,
    figureCaption: "Table 01 — Terzaghi's bearing capacity factors",
    options: opts('254.1', '275.7', '260.2', '245.8'),
    ...solved(48, 'B', '275.7 kPa'),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q49',
    number: 49,
    pageNumber: 597,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: SIT14 + '\n\n(3) Footing dimension.',
    figureSvg: TERZAGHI_FIG,
    figureCaption: "Table 01 — Terzaghi's bearing capacity factors",
    options: opts('114.2', '158.9', '122.2', '136.5'),
    ...solved(49, 'C', '122.16 kPa'),
  },
];
