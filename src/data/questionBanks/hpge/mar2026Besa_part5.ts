import { Question } from '../../../types/exam';
import { besaMar2026HpgeSolutionImages } from '../../besaMar2026HpgeImages';

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

export const BESA_HPGE_MAR2026_PART5: Question[] = [
  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q41',
    number: 41,
    pageNumber: 230,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Barometric Elevation',
    text:
      'Evaluate the elevation in meters from sea level of a town located at the Sierra Madre mountain if a mercurial barometer at that location reads 800 mm. Unit weight of air 12 N/m³.',
    ...worked('I41', 230, 230, '8894 m'),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q42',
    number: 42,
    pageNumber: 230,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Gage Pressure of Layered Liquids',
    text:
      'An open tank contains oil 7 m depth of unit weight of 6 kN/m³. Water is poured over it and the total depth of both liquids is 10 m. Another liquid having a sp.gr. of 1.2 is poured into the container resulting in a total depth of 12 m for the three liquids. Calculate the gage pressure in kPa at that depth of the liquid at the bottom.',
    ...worked('I42', 230, 230, '94.97 kPa'),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q43',
    number: 43,
    pageNumber: 230,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Water Content',
    text:
      'A soil sample has a total volume of 1000 cm³ and contains 300 grams of water and 1500 grams of solids. What is the water content of the soil in percent?',
    ...worked('I43', 230, 230, '20%'),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q44',
    number: 44,
    pageNumber: 230,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Total Vertical Stress',
    text:
      'A soil layer 5 m thick is fully saturated. What is the total vertical stress at the base of the layer? γsat = 19.5 kN/m³',
    ...worked('I44', 230, 230, '97.5 kPa'),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q45',
    number: 45,
    pageNumber: 230,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Continuity in a Reducing Pipe',
    text:
      'Water flows through a 250 mm pipe at 2.5 m/s. The pipe then narrows to 150 mm. What is the velocity in the smaller pipe in meters per second?',
    ...worked('I45', 230, 231, '6.94 m/s'),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q46',
    number: 46,
    pageNumber: 231,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Hydrostatic Force on a Curved Surface',
    text:
      'In a curve surface under water shaped like a quarter cylinder of radius 2 m and 4 m long. Find the hydrostatic force on the surface in kN if the deepest depth of water on the surface is 1.5 m.',
    ...worked('I46', 231, 231, '257 kN'),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q47',
    number: 47,
    pageNumber: 231,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Force on a Curved Vane',
    text:
      'A jet of water with velocity V = 20 m/sec and flow rate Q = 0.03 m³/sec strikes a smooth curve vane fixed in place. The vane deflects the jet by 120°. The water leaves the vane at the same speed (no energy loss). Find the force in N exerted on the vane in the direction of the original jet.',
    ...worked('I47', 231, 231, '900 N'),
  },
];
