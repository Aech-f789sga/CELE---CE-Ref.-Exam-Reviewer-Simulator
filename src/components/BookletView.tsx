import React, { useState } from 'react';
import { SubjectArea, ExamMonth, Question } from '../types/exam';
import { getQuestionsForExam } from '../data/questionBankManager';
import {
  BookOpen,
  FileText,
  FileSpreadsheet,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { EngineeringFigure } from './EngineeringFigure';

interface BookletViewProps {
  activeSubject: SubjectArea;
  activeYear: number;
  activeMonth: ExamMonth;
  onSubjectChange: (sub: SubjectArea) => void;
  onYearChange: (yr: number) => void;
  onMonthChange: (mon: ExamMonth) => void;
  onStartExam: () => void;
}

export const BookletView: React.FC<BookletViewProps> = ({
  activeSubject,
  activeYear,
  activeMonth,
  onSubjectChange,
  onYearChange,
  onMonthChange,
  onStartExam,
}) => {
  const [section, setSection] = useState<'questions' | 'answer_key' | 'solutions'>('questions');
  const [activePage, setActivePage] = useState<number>(1);

  const questions = getQuestionsForExam(activeSubject, activeYear, activeMonth);

  // Group questions by page
  const availablePages = Array.from(new Set(questions.map((q) => q.pageNumber))).sort((a, b) => a - b);
  const totalBookletPages = availablePages.length > 0 ? Math.max(...availablePages) : 10;
  const pageList = availablePages.length > 0 ? availablePages : Array.from({ length: 10 }, (_, i) => i + 1);

  const pageQuestions = questions.filter((q) => q.pageNumber === activePage);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-24">
      {/* Booklet Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden bg-blueprint-grid">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Board Exam Booklet Reference</span>
            </div>
            <h1 className="font-arnie text-2xl sm:text-3xl font-bold text-white tracking-wide">
              {activeSubject} Examination Booklet
            </h1>
            <p className="text-xs text-slate-400">
              {activeMonth} {activeYear} Licensure Examination for Civil Engineers
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onStartExam}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-arnie font-bold text-xs tracking-wider shadow-lg transition-all cursor-pointer"
            >
              Take This Exam
            </button>
          </div>
        </div>

        {/* Section Tabs (Pages 1-10, Page 11, Pages 11-33) */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={() => setSection('questions')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-arnie tracking-wide transition-all ${
              section === 'questions'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Pages 1–{totalBookletPages}: Questions &amp; Figures</span>
          </button>

          <button
            type="button"
            onClick={() => setSection('answer_key')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-arnie tracking-wide transition-all ${
              section === 'answer_key'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Page 11: Answer Key</span>
          </button>

          <button
            type="button"
            onClick={() => setSection('solutions')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-arnie tracking-wide transition-all ${
              section === 'solutions'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>Pages 11–33: Step-by-Step Solutions</span>
          </button>
        </div>
      </div>

      {/* SECTION CONTENT */}

      {/* 1. QUESTIONS VIEW (PAGES 1 - 10) */}
      {section === 'questions' && (
        <div className="space-y-6">
          {/* Page Navigator bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <span className="font-arnie text-sm font-bold text-amber-400">
              Exam Booklet Page:
            </span>
            <div className="flex items-center space-x-1.5 overflow-x-auto">
              {pageList.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setActivePage(p)}
                  className={`w-9 h-9 rounded-xl text-xs font-tech-mono font-bold transition-all ${
                    activePage === p
                      ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                      : 'bg-slate-950 text-slate-400 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  P.{p}
                </button>
              ))}
            </div>
          </div>

          {/* Page Sheet Container */}
          <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-tech-mono text-slate-400 uppercase tracking-widest">
                BOOKLET PAGE {activePage} OF {totalBookletPages}
              </span>
              <span className="font-arnie text-sm text-amber-400 font-semibold">
                PRC Licensure Examination
              </span>
            </div>

            {pageQuestions.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                No questions assigned to booklet page {activePage} for this set.
              </div>
            ) : (
              pageQuestions.map((q) => (
                <div key={q.id} className="space-y-4 pb-6 border-b border-slate-800/80 last:border-b-0">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-tech-mono font-bold text-sm">
                      {q.number}
                    </span>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider font-tech-mono">
                      {q.category}
                    </span>
                  </div>

                  <p className="font-arnie text-base sm:text-lg text-slate-100 leading-relaxed">
                    {q.text}
                  </p>

                  {/* Figure if present */}
                  {q.figureSvg && (
                    <EngineeringFigure
                      figureSvg={q.figureSvg}
                      figureCaption={q.figureCaption}
                      className="max-w-lg mx-auto"
                    />
                  )}

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {q.options.map((opt) => (
                      <div
                        key={opt.label}
                        className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-start space-x-2.5"
                      >
                        <span className="font-tech-mono font-bold text-amber-400">
                          ({opt.label})
                        </span>
                        <span>{opt.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}

            {/* Pagination footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setActivePage((prev) => Math.max(1, prev - 1))}
                disabled={activePage === 1}
                className="flex items-center space-x-1 text-slate-400 hover:text-white disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Page {activePage - 1}</span>
              </button>

              <span className="text-slate-500 font-tech-mono">
                Page {activePage} of 10
              </span>

              <button
                type="button"
                onClick={() => setActivePage((prev) => Math.min(10, prev + 1))}
                disabled={activePage === 10}
                className="flex items-center space-x-1 text-slate-400 hover:text-white disabled:opacity-30"
              >
                <span>Page {activePage + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. ANSWER KEY VIEW (PAGE 11) */}
      {section === 'answer_key' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h2 className="font-arnie text-xl font-bold text-white tracking-wide">
                Page 11: Official Master Answer Key
              </h2>
              <p className="text-xs text-slate-400">
                Official PRC Board of Civil Engineering Keys
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-tech-mono font-bold">
              {questions.length} Items Complete
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3">
            {questions.map((q) => (
              <div
                key={q.id}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center"
              >
                <span className="text-[10px] text-slate-400 block font-tech-mono">
                  ITEM {q.number}
                </span>
                <strong className="text-xl font-bold font-tech-mono text-emerald-400 mt-1 block">
                  {q.correctAnswer}
                </strong>
                <span className="text-[9px] text-slate-500 font-tech-mono">
                  P.{q.pageNumber}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. SOLUTIONS VIEW (PAGES 11 - 33) */}
      {section === 'solutions' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <h2 className="font-arnie text-lg font-bold text-white">
                Pages 11–33: Complete Engineering Solutions &amp; Derivations
              </h2>
              <p className="text-[11px] text-slate-400">
                Detailed step-by-step calculations with formula derivations
              </p>
            </div>
            <span className="text-xs font-tech-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              {questions.length} Solutions
            </span>
          </div>

          <div className="space-y-4">
            {questions.map((q) => (
              <div
                key={q.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-tech-mono font-bold text-sm">
                      #{q.number}
                    </span>
                    <span className="font-arnie font-bold text-white text-base">
                      {q.category}
                    </span>
                  </div>
                  <span className="text-xs font-tech-mono text-amber-400">
                    Solution on Page {q.solution.pageNumber || 11}
                  </span>
                </div>

                <p className="text-xs text-slate-300 italic font-mono bg-slate-950 p-3 rounded-xl border border-slate-800">
                  {q.solution.summary}
                </p>

                {q.figureSvg && (
                  <EngineeringFigure
                    figureSvg={q.figureSvg}
                    figureCaption={q.figureCaption}
                    className="max-w-md mx-auto my-2"
                  />
                )}

                {q.solution.formulas && (
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-tech-mono text-xs text-amber-300 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      Governing Formulas:
                    </span>
                    {q.solution.formulas.map((f, i) => (
                      <div key={i} className="pl-2 border-l-2 border-amber-500">
                        {f}
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-1.5 text-xs text-slate-200">
                  {q.solution.steps.map((st, i) => (
                    <div key={i} className="p-2 rounded bg-slate-950/60 border border-slate-800/80 leading-relaxed font-sans">
                      {st}
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs font-tech-mono">
                  <span className="text-slate-300">Official Correct Answer:</span>
                  <strong className="text-emerald-300 text-sm">
                    ({q.correctAnswer}) — {q.solution.finalAnswer}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
