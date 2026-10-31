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

export const BESA_HPGE_MAR2026_PART4: Question[] = [
  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q31',
    number: 31,
    pageNumber: 227,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Plasticity Index',
    text:
      'A silty soil has a liquid limit of 42% and a plastic limit of 22%. What is the plasticity index?',
    ...worked('I31', 227, 227, '20%'),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q32',
    number: 32,
    pageNumber: 227,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Kinetic Energy per Unit Weight',
    text:
      'A fire truck sprays water at 18 m/s through a 50 mm nozzle. Compute the kinetic energy per unit weight of the jet in meters.',
    ...worked('I32', 227, 228, '16.51 m'),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q33',
    number: 33,
    pageNumber: 228,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Seepage Travel Time',
    text:
      'A laboratory test on a clayey soil yielded permeability of 1.2 × 10⁻⁷ cm/s. If the sample is 10 cm long, how long will it take the water to travel through it in years?',
    ...worked('I33', 228, 228, '2.642 years'),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q34',
    number: 34,
    pageNumber: 228,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Hydrostatic Force on a Circular Gate',
    text:
      'Compute the resultant hydrostatic force on a circular gate of diameter 1.5 m submerged vertically in water at 3 m below the surface in kN.',
    ...worked('I34', 228, 228, '52 kN'),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q35',
    number: 35,
    pageNumber: 228,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Most Efficient Triangular Flume',
    text:
      'In order to provide water from a nearby spring, a triangular flume of efficient cross section was provided on a slope of 0.21%. Given the roughness coefficient of the channel to be 0.018, obtain the depth of flow in meters of the water in the flume if it is discharging at the rate of 2 m³/sec. Use the formula\n\n' +
      '$V = \\dfrac{1}{n} R^{2/3} S^{1/2}$\n\n' +
      'for the velocity of flow.',
    ...worked('I35', 228, 229, 'd = 1.18 m'),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q36',
    number: 36,
    pageNumber: 229,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — U-Tube Manometer',
    text:
      'A U-tube manometer contains mercury and water. The difference in mercury level is 200 mm. What is the pressure difference in kPa?',
    ...worked('I36', 229, 229, '26.67 kPa'),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q37',
    number: 37,
    pageNumber: 229,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Velocity Head Scaling',
    text:
      'The velocity head at one point of a pipe is 6 m. What would be the velocity head in meters if the velocity is increased 2.5 times?',
    ...worked('I37', 229, 229, '15 m'),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q38',
    number: 38,
    pageNumber: 229,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Discharge from a Nozzle',
    text:
      'A barangay tanod uses a hose to extinguish a small fire in a sari-sari store. If the velocity of the nozzle is 12 m/s and the cross sectional area is 0.005 m². What is the discharge in liters/sec?',
    ...worked('I38', 229, 229, '600 liters/sec'),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q39',
    number: 39,
    pageNumber: 229,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Floating Log, Submerged Length',
    text:
      'A log 3 m long and 0.4 m diameter floats in freshwater with its axis vertical. If its specific gravity is 0.60, what length of the log is submerged in meters?',
    ...worked('I39', 229, 229, '1.80 m'),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q40',
    number: 40,
    pageNumber: 229,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Absolute Pressure at a Tank Bottom',
    text:
      'A cylindrical tank is filled with oil of density ρ = 850 kg/m³ to a depth of 4.5 m. Atmospheric pressure is 101 kPa. What is the absolute pressure at the bottom of the tank in kPa?',
    ...worked('I40', 229, 230, '138.52 kPa'),
  },
];
