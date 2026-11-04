import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const HPGE_APR2025_PART4: Question[] = [
  // Item 37
  {
    id: 'hpge-apr2025-q37',
    number: 37,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Pipe Flow & Hydraulics - Pipes in Series Flow Velocity in Larger Pipe',
    text: 'Situation 4:\nA water-supply pipeline consists of a 3,660-m-long, 450-mm-diameter pipe connected in series to a 5,500-m-long, 300-mm-diameter pipe. The pipeline is connected to the base of a large reservoir. The difference in elevation between the reservoir water surface and the centerline of the 300-mm pipe at the downstream end is 45.7 m.\n\nNeglect the velocity head in the reservoir and all minor head losses, including the entrance loss. Using a Darcy friction factor of 0.02 for both pipes.\n\nObtain the velocity (m/s) if the water in the bigger pipeline.',
    options: [
      { label: 'A', text: '0.456' },
      { label: 'B', text: '0.212' },
      { label: 'C', text: '0.665' },
      { label: 'D', text: '0.945' },
    ],
    ...solved(37, 'C', '0.665 (Option C)'),
  },

  // Item 38
  {
    id: 'hpge-apr2025-q38',
    number: 38,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Pipe Flow & Hydraulics - Pipes in Series Velocity in Smaller Pipe',
    text: 'Situation 4 (Continued):\nA water-supply pipeline consists of a 3,660-m-long, 450-mm-diameter pipe connected in series to a 5,500-m-long, 300-mm-diameter pipe. The pipeline is connected to the base of a large reservoir. The difference in elevation between the reservoir water surface and the centerline of the 300-mm pipe at the downstream end is 45.7 m.\n\nNeglect the velocity head in the reservoir and all minor head losses, including the entrance loss. Using a Darcy friction factor of 0.02 for both pipes.\n\nObtain the velocity (m/s) of the water in the smaller pipeline.',
    options: [
      { label: 'A', text: '0.9' },
      { label: 'B', text: '1.8' },
      { label: 'C', text: '2.1' },
      { label: 'D', text: '1.5' },
    ],
    ...solved(38, 'D', '1.5 (Option D)'),
  },

  // Item 39
  {
    id: 'hpge-apr2025-q39',
    number: 39,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Pipe Flow & Hydraulics - Pipeline Discharge',
    text: 'Situation 4 (Continued):\nA water-supply pipeline consists of a 3,660-m-long, 450-mm-diameter pipe connected in series to a 5,500-m-long, 300-mm-diameter pipe. The pipeline is connected to the base of a large reservoir. The difference in elevation between the reservoir water surface and the centerline of the 300-mm pipe at the downstream end is 45.7 m.\n\nNeglect the velocity head in the reservoir and all minor head losses, including the entrance loss. Using a Darcy friction factor of 0.02 for both pipes.\n\nEvaluate the rate of flow (m³/s).',
    options: [
      { label: 'A', text: '0.116' },
      { label: 'B', text: '0.281' },
      { label: 'C', text: '0.106' },
      { label: 'D', text: '0.144' },
    ],
    ...solved(39, 'C', '0.106 (Option C)'),
  },

  // Item 40
  {
    id: 'hpge-apr2025-q40',
    number: 40,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Phase Relationships & Void Ratio',
    text: 'Situation 5:\nA soil mass has a bulk specific gravity of 1.81. The specific gravity of the solids is 2.78 and the moisture content is 28%.\n\nDetermine the void ratio.',
    options: [
      { label: 'A', text: '0.67' },
      { label: 'B', text: '0.77' },
      { label: 'C', text: '0.87' },
      { label: 'D', text: '0.97' },
    ],
    ...solved(40, 'D', '0.97 (Option D)'),
  },

  // Item 41
  {
    id: 'hpge-apr2025-q41',
    number: 41,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Phase Relationships & Porosity',
    text: 'Situation 5 (Continued):\nA soil mass has a bulk specific gravity of 1.81. The specific gravity of the solids is 2.78 and the moisture content is 28%.\n\nDetermine the porosity.',
    options: [
      { label: 'A', text: '0.69' },
      { label: 'B', text: '0.39' },
      { label: 'C', text: '0.49' },
      { label: 'D', text: '0.59' },
    ],
    ...solved(41, 'C', '0.49 (Option C)'),
  },

  // Item 42
  {
    id: 'hpge-apr2025-q42',
    number: 42,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Phase Relationships & Degree of Saturation',
    text: 'Situation 5 (Continued):\nA soil mass has a bulk specific gravity of 1.81. The specific gravity of the solids is 2.78 and the moisture content is 28%.\n\nDetermine the degree of saturation.',
    options: [
      { label: 'A', text: '0.80' },
      { label: 'B', text: '0.70' },
      { label: 'C', text: '0.60' },
      { label: 'D', text: '0.90' },
    ],
    ...solved(42, 'A', '0.80 (Option A)'),
  },

  // Item 43
  {
    id: 'hpge-apr2025-q43',
    number: 43,
    pageNumber: 394,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Earthworks & Soil Compaction - Borrow Pit Dry Unit Weight',
    text: 'Situation 6:\nAn embankment for a highway 30 m wide and 1.5 m compacted thickness is to be constructed from sandy soil trucked from a borrow pit. The water content of the sandy soil in the borrow pit is 15% and its void ratio is 0.69. The specification required the embankment compacted to a dry unit weight of 18 kN/m³. Assume G_s = 2.7.\n\nDetermine for 1 km length of embankment the following:\n\nThe dry unit weight (kN/m³) of sandy soil from the borrow pit required to construct the embankment.',
    options: [
      { label: 'A', text: '9.95' },
      { label: 'B', text: '19.19' },
      { label: 'C', text: '17.67' },
      { label: 'D', text: '15.67' },
    ],
    ...solved(43, 'D', '15.67 (Option D)'),
  },

  // Item 44
  {
    id: 'hpge-apr2025-q44',
    number: 44,
    pageNumber: 394,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Earthworks & Soil Compaction - Truckload Volume of Borrow Soil',
    text: 'Situation 6 (Continued):\nAn embankment for a highway 30 m wide and 1.5 m compacted thickness is to be constructed from sandy soil trucked from a borrow pit. The water content of the sandy soil in the borrow pit is 15% and its void ratio is 0.69. The specification required the embankment compacted to a dry unit weight of 18 kN/m³. Assume G_s = 2.7.\n\nDetermine for 1 km length of embankment the following:\n\nThe number of 10 m³ truckloads of sandy soil required for the construction.',
    options: [
      { label: 'A', text: '5,030' },
      { label: 'B', text: '5,240' },
      { label: 'C', text: '5,170' },
      { label: 'D', text: '4,500' },
    ],
    ...solved(44, 'C', '5,170 (Option C)'),
  },

  // Item 45
  {
    id: 'hpge-apr2025-q45',
    number: 45,
    pageNumber: 394,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Phase Relationships & Degree of Saturation in Situ',
    text: 'Situation 6 (Continued):\nAn embankment for a highway 30 m wide and 1.5 m compacted thickness is to be constructed from sandy soil trucked from a borrow pit. The water content of the sandy soil in the borrow pit is 15% and its void ratio is 0.69. The specification required the embankment compacted to a dry unit weight of 18 kN/m³. Assume G_s = 2.7.\n\nDetermine for 1 km length of embankment the following:\n\nThe degree of saturation of the sandy soil in situ.',
    options: [
      { label: 'A', text: '86.9%' },
      { label: 'B', text: '69.6%' },
      { label: 'C', text: '59.1%' },
      { label: 'D', text: '58.7%' },
    ],
    ...solved(45, 'D', '58.7% (Option D)'),
  },
];
