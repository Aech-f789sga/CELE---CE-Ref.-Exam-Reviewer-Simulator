import { Question } from '../../../types/exam';
import {
  besaMar2026HpgeFigure,
  besaMar2026HpgeSolutionImages,
} from '../../besaMar2026HpgeImages';

/** Worked-solution item: no choices, scanned solution revealed on demand. */
const worked = (key: string, page: number, pageEnd: number, answer: string) => ({
  options: [] as Question['options'],
  correctAnswer: 'A' as const,
  workedSolution: true,
  referenceSource: 'Besavilla' as const,
  solution: {
    summary: '',
    steps: [] as string[],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: besaMar2026HpgeSolutionImages(key),
  },
});

const figure = (key: string) => besaMar2026HpgeFigure(key);

export const BESA_HPGE_MAR2026_PART3: Question[] = [
  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q21',
    number: 21,
    pageNumber: 224,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: "Geotechnical — Rankine's Lateral Earth Pressure",
    text:
      'A retaining wall 12 m high has horizontal backfill on its vertical face to its base. Under normal conditions, the backfill has a water content of 10% and a void ratio of 0.50. The specific gravity of the soil grains is 2.50 and the angle of internal friction is 20 degrees. Using Rankine\'s theory of lateral earth pressure,\n\n' +
      'a) Evaluate the total horizontal lateral force per meter width of wall, in kN, due to the water.\n\n' +
      'b) Evaluate the total horizontal lateral force per meter width of wall, in kN, due to the soil.\n\n' +
      'c) How many times would the horizontal lateral force be increased if the backfill is fully saturated with rain water?',
    figureSvg: figure('F21'),
    figureCaption: 'Retaining wall, 12 m high, with the lateral thrust P',
    ...worked('I21', 224, 225, 'a) 706 kN; b) 288.59 kN; c) 1.65 times'),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q22',
    number: 22,
    pageNumber: 225,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Hydrostatic Pressure on a Tank Bottom',
    text:
      'A tank has sloped sides and holds oil (sp.gr. = 0.85). The depth of oil is 3 m. What is the hydrostatic pressure at the bottom in kPa?',
    ...worked('I22', 225, 225, '25 kPa'),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q23',
    number: 23,
    pageNumber: 226,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: "Fluid Mechanics — Bernoulli's Energy Equation",
    text:
      'Water travels from a stream to a reservoir 500 m away with 12 m elevation and 5 m headloss. What is the allowable pressure head in meters?',
    ...worked('I23', 226, 226, '17 m'),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q24',
    number: 24,
    pageNumber: 226,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Buoyancy of a Floating Body',
    text: 'A floating object displaces 0.03 m³ of fresh water. What is its mass in kg?',
    ...worked('I24', 226, 226, '30 kg'),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q25',
    number: 25,
    pageNumber: 226,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Atmospheric Pressure Head',
    text:
      'The atmospheric pressure at sea level is equivalent to a water column of how many meters?',
    ...worked('I25', 226, 226, '10.3 m'),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q26',
    number: 26,
    pageNumber: 226,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Triaxial Test, Angle of Internal Friction',
    text:
      'A specimen of soil under triaxial test was consolidated under a confining pressure of 60 kPa. The axial stress on the specimen was then increased and failure occurred when the axial stress reached 120 kPa. Determine the angle of internal friction of the clay.',
    ...worked('I26', 226, 226, '19.49°'),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q27',
    number: 27,
    pageNumber: 226,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Saturated Unit Weight',
    text:
      'A soil sample has a dry unit weight of 16 kN/m³. If the specific gravity of the solid grains is 2.67, calculate the unit weight of the same sample when fully saturated in kN/m³.',
    ...worked('I27', 226, 227, '19.8 kN/m³'),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q28',
    number: 28,
    pageNumber: 227,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Undrained Shear Strength',
    text:
      'A soil sample tested under unconsolidated undrained condition has a deviator stress of 300 kPa at failure and a confining pressure of 150 kPa. What is the undrained shear strength of the soil?',
    ...worked('I28', 227, 227, '150 kPa'),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q29',
    number: 29,
    pageNumber: 227,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Porosity from Void Ratio',
    text: 'A soil has a void ratio of 0.75, what is the porosity in percent?',
    ...worked('I29', 227, 227, '42.9%'),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q30',
    number: 30,
    pageNumber: 227,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — CD Triaxial Test, Effective Friction Angle',
    text:
      'A consolidated drained (CD) triaxial test on a silty sand yielded the following results: σ₁ = 400 kPa, σ₃ = 100 kPa and pore pressure is zero. Compute the effective angle of internal friction φ.',
    ...worked('I30', 227, 227, '36.9°'),
  },
];
