import React, { useState, useEffect } from 'react';
import {
  Question,
  SubjectArea,
  ExamMonth,
  SUBJECT_CONFIGS,
} from '../types/exam';
import confetti from 'canvas-confetti';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Home,
  ArrowRight,
  BarChart3,
  Lightbulb,
  FileSpreadsheet,
  BookOpen,
  Filter,
} from 'lucide-react';
import { EngineeringFigure } from './EngineeringFigure';
import { MathView } from './MathView';

interface ExamResultsProps {
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  questions: Question[];
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  timeSpentSeconds: number;
  onRetakeSameArea: () => void;
  onTakeNextArea: (nextSubject: SubjectArea) => void;
  onViewPerformance: () => void;
  onExitHome: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  subject,
  year,
  month,
  questions,
  userAnswers,
  timeSpentSeconds,
  onRetakeSameArea,
  onTakeNextArea,
  onViewPerformance,
  onExitHome,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'incorrect' | 'correct'>('all');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  const subjectConfig = SUBJECT_CONFIGS[subject];

  // Calculate score
  let correctCount = 0;
  questions.forEach((q) => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const totalQuestions = questions.length;
  const ratingPercentage = Math.round((correctCount / totalQuestions) * 10000) / 100;
  const isSubjectPassed = ratingPercentage >= 50.0; // PRC rule: ≥ 50% in each subject
  const prcContribution = Math.round(ratingPercentage * subjectConfig.weight * 100) / 100;

  // Trigger celebration confetti if passed
  useEffect(() => {
    if (ratingPercentage >= 70.0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [ratingPercentage]);

  const toggleExpand = (qId: string) => {
    setExpandedSolutions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    questions.forEach((q) => {
      all[q.id] = true;
    });
    setExpandedSolutions(all);
  };

  const collapseAll = () => {
    setExpandedSolutions({});
  };

  // Determine next subject in standard PRC board sequence: MSTC -> HPGE -> PSAD
  const getNextSubject = (): SubjectArea => {
    if (subject === 'MSTC') return 'HPGE';
    if (subject === 'HPGE') return 'PSAD';
    return 'MSTC';
  };
  const nextSubject = getNextSubject();

  // Filtered questions for solutions list
  const filteredQuestions = questions.filter((q) => {
    const isCorrect = userAnswers[q.id] === q.correctAnswer;
    if (filterType === 'correct') return isCorrect;
    if (filterType === 'incorrect') return !isCorrect;
    return true;
  });

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-24">
      {/* Scorecard Hero */}
      <div className={`rounded-3xl p-6 sm:p-8 border-2 shadow-2xl relative overflow-hidden bg-blueprint-grid ${
        isSubjectPassed
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 border-emerald-500/40'
          : 'bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950/40 border-rose-500/40'
      }`}>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold">
              <span className="font-tech-mono text-amber-400">{subject}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">{month} {year} Examination</span>
            </div>

            <h1 className="font-arnie text-3xl sm:text-4xl font-bold text-white tracking-wide">
              {subjectConfig.name}
            </h1>

            <p className="text-slate-300 text-sm max-w-xl">
              Completed in {formatTime(timeSpentSeconds)}. Review your answers against the official <strong className="text-amber-400">Page 11 Answer Keys</strong> and <strong className="text-amber-400">Pages 11–33 Step-by-Step Solutions</strong> below.
            </p>

            {/* PRC Subject Status Tag */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
              {isSubjectPassed ? (
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-tech-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>PRC AREA CRITERION SATISFIED (≥ 50.00%)</span>
                </span>
              ) : (
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold font-tech-mono">
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span>BELOW 50.00% MINIMUM THRESHOLD (FAILED)</span>
                </span>
              )}

              <span className="px-3 py-1 rounded-xl bg-slate-800 text-slate-300 text-xs font-tech-mono border border-slate-700">
                PRC Weight: {subjectConfig.weightPercent}% (Contributes: {prcContribution.toFixed(2)}%)
              </span>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl shrink-0 min-w-[200px]">
            <span className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold font-tech-mono">
              AREA RATING
            </span>
            <div className="font-arnie text-5xl font-bold tracking-tight text-white my-1">
              <span className={isSubjectPassed ? 'text-emerald-400' : 'text-rose-400'}>
                {ratingPercentage.toFixed(1)}%
              </span>
            </div>
            <span className="text-xs text-slate-400 font-tech-mono">
              {correctCount} / {totalQuestions} Correct
            </span>
          </div>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <button
            type="button"
            onClick={onRetakeSameArea}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold font-arnie tracking-wide transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Retake {subject}</span>
          </button>

          <button
            type="button"
            onClick={() => onTakeNextArea(nextSubject)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-arnie tracking-wide transition-colors shadow-md cursor-pointer"
          >
            <span>Take Next Area ({nextSubject})</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onViewPerformance}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold font-arnie tracking-wide transition-colors cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span>View Paired Cycles &amp; GWA Rating</span>
          </button>

          <button
            type="button"
            onClick={onExitHome}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-800 hover:bg-slate-800/80 text-slate-400 hover:text-white text-xs font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Portal Home</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: PAGE 11 OFFICIAL ANSWER KEYS */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-arnie text-lg font-bold text-white tracking-wide">
                Page 11: Official Answer Keys
              </h2>
              <p className="text-[11px] text-slate-400">
                Official PRC Examination Master Key &amp; Candidate Response Comparison
              </p>
            </div>
          </div>
          <span className="text-xs text-amber-400 font-tech-mono font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            {correctCount} Correct • {totalQuestions - correctCount} Incorrect
          </span>
        </div>

        {/* Answer key grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2">
          {questions.map((q) => {
            const userAns = userAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            return (
              <div
                key={q.id}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  isCorrect
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                }`}
              >
                <div className="text-[10px] text-slate-400 font-tech-mono mb-1">
                  Q{q.number}
                </div>
                <div className="font-tech-mono font-bold text-sm">
                  KEY: <span className="text-white">{q.correctAnswer}</span>
                </div>
                <div className="text-[10px] mt-1 font-tech-mono">
                  You: {userAns ? (
                    <strong className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>{userAns}</strong>
                  ) : (
                    <span className="text-slate-500 italic">None</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: PAGES 11-33 STEP-BY-STEP ENGINEERING SOLUTIONS */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-arnie text-lg font-bold text-white tracking-wide">
                Pages 11–33: Detailed Step-by-Step Solutions
              </h2>
              <p className="text-[11px] text-slate-400">
                Complete engineering computations, derivations, and formulas
              </p>
            </div>
          </div>

          {/* Filter & Expand Controls */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-slate-950 rounded-xl p-1 border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  filterType === 'all'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All ({questions.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('incorrect')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  filterType === 'incorrect'
                    ? 'bg-rose-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Mistakes ({totalQuestions - correctCount})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('correct')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  filterType === 'correct'
                    ? 'bg-emerald-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Correct ({correctCount})
              </button>
            </div>

            <button
              type="button"
              onClick={expandAll}
              className="px-2.5 py-1.5 rounded-xl border border-slate-800 hover:bg-slate-800 text-[11px] text-slate-300"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="px-2.5 py-1.5 rounded-xl border border-slate-800 hover:bg-slate-800 text-[11px] text-slate-300"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* List of Questions with Solutions */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const userAns = userAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isExpanded = expandedSolutions[q.id] ?? true; // default expanded

            return (
              <div
                key={q.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isCorrect
                    ? 'bg-slate-950/70 border-slate-800'
                    : 'bg-rose-950/10 border-rose-900/40'
                }`}
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-tech-mono font-bold text-xs shrink-0 ${
                      isCorrect
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}>
                      #{q.number}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                          {q.category}
                        </span>
                        <span className="text-[10px] text-slate-500 font-tech-mono">
                          Page {q.solution.pageNumber || 11}
                        </span>
                      </div>
                      <div className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                        <MathView text={q.text} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <div className="text-right text-xs font-tech-mono">
                      <span className="text-slate-400 text-[10px] block">ANSWER</span>
                      <strong className="text-emerald-400">({q.correctAnswer})</strong>
                      {userAns && userAns !== q.correctAnswer && (
                        <span className="text-rose-400 ml-1.5">(You: {userAns})</span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400 px-2 py-1 bg-slate-900 rounded border border-slate-800">
                      {isExpanded ? 'Hide' : 'Show'}
                    </span>
                  </div>
                </div>

                {/* Expanded Solution Body */}
                {isExpanded && (
                  <div className="p-5 border-t border-slate-800 bg-slate-950/90 space-y-4">
                    {/* Full Question Text */}
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="font-arnie text-sm text-slate-200 leading-relaxed">
                        <MathView text={q.text} />
                      </div>
                      {q.figureSvg && (
                        <EngineeringFigure
                          figureSvg={q.figureSvg}
                          figureCaption={q.figureCaption}
                        />
                      )}
                    </div>

                    {/* Choices recap */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt) => (
                        <div
                          key={opt.label}
                          className={`p-2 rounded-lg border font-tech-mono flex items-center space-x-2 ${
                            opt.label === q.correctAnswer
                              ? 'bg-emerald-500/15 border-emerald-500 text-emerald-200 font-bold'
                              : userAns === opt.label
                              ? 'bg-rose-500/15 border-rose-500 text-rose-300'
                              : 'bg-slate-900/60 border-slate-800 text-slate-400'
                          }`}
                        >
                          <span className="font-bold">({opt.label})</span>
                          <span>
                            <MathView text={opt.text} />
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Solution Steps & Derivation */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center space-x-2 text-amber-400 font-semibold text-xs">
                        <Lightbulb className="w-4 h-4" />
                        <span className="font-arnie text-sm">Step-by-Step Solution Breakdown</span>
                      </div>

                      <div className="text-xs text-slate-300 leading-relaxed italic bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                        <MathView text={q.solution.summary} />
                      </div>

                      {q.solution.formulas && (
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-amber-300 space-y-1.5">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                            Governing Civil Engineering Formulas (LaTeX):
                          </span>
                          {q.solution.formulas.map((f, i) => (
                            <div key={i} className="pl-2 border-l-2 border-amber-500 py-0.5">
                              <MathView formula block={false} text={f} className="text-amber-200" />
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="space-y-2 pt-1 text-xs text-slate-200">
                        {q.solution.steps.map((st, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60 leading-relaxed font-sans">
                            <MathView text={st} />
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs font-tech-mono">
                        <span className="text-slate-300">Final Answer:</span>
                        <strong className="text-emerald-300 text-sm">
                          <MathView text={q.solution.finalAnswer} />
                        </strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
