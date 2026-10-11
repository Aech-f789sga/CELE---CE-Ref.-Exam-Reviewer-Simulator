import React, { useState } from 'react';
import { SubjectArea, ExamMonth, Question } from '../types/exam';
import {
  getQuestionsForExam,
  hasExamData,
  ALL_YEARS,
  ALL_MONTHS,
  isYearAvailable,
  isMonthAvailable,
} from '../data/questionBankManager';
import {
  BookOpen,
  FileText,
  FileSpreadsheet,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Lock,
  Calendar,
  Layers,
  AlertCircle,
} from 'lucide-react';
import { EngineeringFigure } from './EngineeringFigure';
import { MathView } from './MathView';

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

  const hasData = hasExamData(activeSubject, activeYear, activeMonth);
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
              disabled={!hasData}
              className={`px-5 py-2.5 rounded-xl font-arnie font-bold text-xs tracking-wider shadow-lg transition-all ${
                hasData
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60'
              }`}
            >
              Take This Exam
            </button>
          </div>
        </div>

        {/* Year and Month Quick Selectors with Blurred Out State */}
        <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            {/* Subject Area Chips */}
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400 font-tech-mono mr-1">Area:</span>
              {(['MSTC', 'HPGE', 'PSAD'] as SubjectArea[]).map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => onSubjectChange(sub)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeSubject === sub
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Year Chips with Blurring for Unavailable Years */}
            <div className="flex items-center space-x-1 overflow-x-auto py-1">
              <span className="text-slate-400 font-tech-mono mr-1">Year:</span>
              {ALL_YEARS.map((yr) => {
                const isAvail = isYearAvailable(yr, activeSubject);
                return (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => isAvail && onYearChange(yr)}
                    disabled={!isAvail}
                    title={isAvail ? `View ${yr}` : `${yr} - No data uploaded (Locked)`}
                    className={`px-2 py-1 rounded text-xs font-tech-mono transition-all ${
                      activeYear === yr
                        ? 'bg-amber-500 text-slate-950 font-bold shadow'
                        : isAvail
                        ? 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800 cursor-pointer'
                        : 'bg-slate-950/20 text-slate-600 border border-slate-900 opacity-30 filter blur-[0.6px] cursor-not-allowed'
                    }`}
                  >
                    {yr}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Month Chips with Blurring for Unavailable Months */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-slate-400 font-tech-mono mr-1">Month:</span>
            {ALL_MONTHS.map((mon) => {
              const isAvail = isMonthAvailable(mon, activeYear, activeSubject);
              return (
                <button
                  key={mon}
                  type="button"
                  onClick={() => isAvail && onMonthChange(mon)}
                  disabled={!isAvail}
                  title={isAvail ? `View ${mon}` : `${mon} - No data uploaded (Locked)`}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeMonth === mon
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : isAvail
                      ? 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800 cursor-pointer'
                      : 'bg-slate-950/20 text-slate-600 border border-slate-900 opacity-30 filter blur-[0.6px] cursor-not-allowed'
                  }`}
                >
                  {mon}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Tabs (Pages 1-10, Page 11, Pages 11-33) */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={() => setSection('questions')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-arnie tracking-wide transition-all cursor-pointer ${
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
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-arnie tracking-wide transition-all cursor-pointer ${
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
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-arnie tracking-wide transition-all cursor-pointer ${
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

      {/* When no data is available for this set */}
      {!hasData && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-white font-arnie">
            No Exam Questions Uploaded for {activeMonth} {activeYear}
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            Data is currently available for <strong>MSTC, HPGE, and PSAD of April 2024</strong>. Other examination periods are locked until you upload or update questions for those categories.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                onYearChange(2024);
                onMonthChange('April');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-tech-mono cursor-pointer transition-all"
            >
              Switch to April 2024 (Active Exam Set)
            </button>
          </div>
        </div>
      )}

      {/* SECTION CONTENT (Only shown if data exists) */}
      {hasData && (
        <>
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
                      className={`w-9 h-9 rounded-xl text-xs font-tech-mono font-bold transition-all cursor-pointer ${
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

                      <div className="font-arnie text-base sm:text-lg text-slate-100 leading-relaxed">
                        <MathView text={q.text} />
                      </div>

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
                            <div className="flex-1 font-sans">
                              <MathView inline text={opt.text} />
                            </div>
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
                    className="flex items-center space-x-1 text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Page {activePage - 1}</span>
                  </button>

                  <span className="text-slate-500 font-tech-mono">
                    Page {activePage} of {totalBookletPages}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActivePage((prev) => Math.min(totalBookletPages, prev + 1))}
                    disabled={activePage === totalBookletPages}
                    className="flex items-center space-x-1 text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer"
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
                    Official PRC Board of Civil Engineering Keys ({activeMonth} {activeYear})
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-tech-mono font-bold">
                  {questions.length} Items Complete
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
                {questions.map((q) => (
                  <div
                    key={q.id}
                    className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <span className="font-tech-mono text-slate-400">Q.{q.number}</span>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-tech-mono font-bold">
                      {q.correctAnswer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. STEP-BY-STEP SOLUTIONS (PAGES 11 - 33) */}
          {section === 'solutions' && (
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h2 className="font-arnie text-lg font-bold text-white">
                    Pages 11–33: Detailed Engineering Derivations &amp; Formulas
                  </h2>
                  <p className="text-xs text-slate-400">
                    Step-by-step calculations with NSCP, CE Board guidelines, and figures
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-tech-mono font-bold">
                  {questions.length} Derivations Available
                </span>
              </div>

              {questions.map((q) => (
                <div
                  key={q.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center space-x-2">
                      <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-tech-mono font-bold text-sm">
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

                  <div className="text-xs text-slate-300 italic font-mono bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <MathView text={q.solution.summary} />
                  </div>

                  {q.figureSvg && (
                    <EngineeringFigure
                      figureSvg={q.figureSvg}
                      figureCaption={q.figureCaption}
                      className="max-w-md mx-auto my-2"
                    />
                  )}

                  {q.solution.formulas && (
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-tech-mono text-xs text-amber-300 space-y-1.5">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">
                        Governing Formulas:
                      </span>
                      {q.solution.formulas.map((f, i) => (
                        <div key={i} className="pl-2 border-l-2 border-amber-500 py-0.5">
                          <MathView text={f} />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-1.5 text-xs text-slate-200">
                    {q.solution.steps.map((st, i) => (
                      <div key={i} className="p-2 rounded bg-slate-950/60 border border-slate-800/80 leading-relaxed font-sans">
                        <MathView text={st} />
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
          )}
        </>
      )}
    </div>
  );
};
