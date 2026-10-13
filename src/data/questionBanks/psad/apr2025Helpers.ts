import { Question } from '../../../types/exam';
import { getPsadApr2025FigureHtml, PSAD_APRIL_2025_FIGURES } from './apr2025Figures';

export type AnswerLetter = 'A' | 'B' | 'C' | 'D';

export interface PsadApr2025Record {
  n: number;
  p: number;
  c: string;
  t: string;
  o: string[];
  a: AnswerLetter;
  s: string;
  f?: string[];
  st: string[];
  r: string;
  sp: number;
  fig?: number;
}

/** Build a source-backed question using the same Question schema as the other exam banks. */
export function makePsadApr2025Question(record: PsadApr2025Record): Question {
  if (record.o.length !== 4) throw new Error(`PSAD April 2025 Q${record.n} must have four options.`);
  const labels: AnswerLetter[] = ['A', 'B', 'C', 'D'];
  const figure = record.fig ? PSAD_APRIL_2025_FIGURES[record.fig] : undefined;
  return {
    id: `psad-apr2025-q${record.n}`,
    number: record.n,
    pageNumber: record.p,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: record.c,
    text: record.t,
    ...(figure ? { figureCaption: figure.caption, figureSvg: getPsadApr2025FigureHtml(record.fig!) } : {}),
    options: record.o.map((text, index) => ({ label: labels[index] ?? 'A', text })),
    correctAnswer: record.a,
    solution: {
      summary: record.s,
      ...(record.f && record.f.length ? { formulas: record.f } : {}),
      steps: record.st,
      finalAnswer: `${record.r} (Option ${record.a})`,
      pageNumber: record.sp,
    },
  };
}
