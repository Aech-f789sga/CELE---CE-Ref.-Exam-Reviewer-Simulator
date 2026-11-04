import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

export const MSTC_NOV2024_PART6: Question[] = [
  // Item 61
  {
    id: 'mstc-nov2024-q61',
    number: 61,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Professional Practice / TESDA - Competency Standards',
    text: 'Refers to industry-determined specification of proficiency required for effective work performance.',
    options: [
      { label: 'A', text: 'RA 11058' },
      { label: 'B', text: 'Safety guidelines' },
      { label: 'C', text: 'Competency standards' },
      { label: 'D', text: 'OSH Standards' },
    ],
    ...solved(61, 'C', 'Competency standards (Option C)'),
  },

  // Item 62
  {
    id: 'mstc-nov2024-q62',
    number: 62,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Safety - Demolition Exclusion Zone Buffer',
    text: 'No person except the workers who are directly engaged in the demolition shall enter a demolition area tow within a distance equal to _____ times the height of the structure being demolished.',
    options: [
      { label: 'A', text: '0.25' },
      { label: 'B', text: '1.5' },
      { label: 'C', text: '1.00' },
      { label: 'D', text: '0.75' },
    ],
    ...solved(62, 'B', '1.5 (Option B)'),
  },

  // Item 63
  {
    id: 'mstc-nov2024-q63',
    number: 63,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Occupational Safety & Health - Hierarchy of Controls',
    text: 'Replacing a hazardous material, equipment or process with a less hazardous one.',
    options: [
      { label: 'A', text: 'Engineering Controls' },
      { label: 'B', text: 'Elimination' },
      { label: 'C', text: 'Substitution' },
      { label: 'D', text: 'Administrative Controls' },
    ],
    ...solved(63, 'C', 'Substitution (Option C)'),
  },

  // Item 64
  {
    id: 'mstc-nov2024-q64',
    number: 64,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Building Utilities - Water Supply Piping Terminology',
    text: 'In a water supply system, once the building is separated into two parts, the first forms a cold-water supply tree. The second goes through a water heater and becomes a hot water supply tree. The trees are composed with vertical and horizontal pipes. What is the term used for vertical and horizontal supply pipes?',
    options: [
      { label: 'A', text: 'risers and branches respectively' },
      { label: 'B', text: 'branches and risers respectively' },
      { label: 'C', text: 'roughing ins and connections respectively' },
      { label: 'D', text: 'connections and roughing ins respectively' },
    ],
    ...solved(64, 'A', 'risers and branches respectively (Option A)'),
  },

  // Item 65
  {
    id: 'mstc-nov2024-q65',
    number: 65,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Building Science - Thermal Heat Loss & Enclosure Transfer',
    text: 'Parts of the building that experience the most heat loss or gain.',
    options: [
      { label: 'A', text: 'Windows and door' },
      { label: 'B', text: 'Roof and gutter' },
      { label: 'C', text: 'Floors and basement' },
      { label: 'D', text: 'Walls and fence' },
    ],
    ...solved(65, 'A', 'Windows and door (Option A)'),
  },

  // Item 66
  {
    id: 'mstc-nov2024-q66',
    number: 66,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway Materials - DPWH Minimum Subbase Thickness',
    text: 'What is the minimum thickness of a well-graded subbase (compacted)?',
    options: [
      { label: 'A', text: '0.10 m' },
      { label: 'B', text: '0.15 m' },
      { label: 'C', text: '0.20 m' },
      { label: 'D', text: '0.25 m' },
    ],
    ...solved(66, 'B', '0.15 m (Option B)'),
  },
];
