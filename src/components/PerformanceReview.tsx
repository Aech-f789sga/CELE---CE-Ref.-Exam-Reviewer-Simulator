import React, { useState } from 'react';
import {
  ExamAttempt,
  PairedCycle,
  SubjectArea,
  SUBJECT_CONFIGS,
} from '../types/exam';
import { computePairedCycles, clearAllAttempts, seedSampleAttempts } from '../utils/storage';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  BookOpen,
  PlusCircle,
  Trash2,
  Calculator,
  ChevronRight,
} from 'lucide-react';

interface PerformanceReviewProps {
  attempts: ExamAttempt[];
  onAttemptsChange: (updated: ExamAttempt[]) => void;
  onTakeExamArea: (subject: SubjectArea) => void;
}

export const PerformanceReview: React.FC<PerformanceReviewProps> = ({
  attempts,
  onAttemptsChange,
  onTakeExamArea,
}) => {
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const cycles = computePairedCycles(attempts);

  // Subject statistics
  const getSubjectMetrics = (subject: SubjectArea) => {
    const list = attempts.filter((a) => a.subject === subject);
    if (list.length === 0) return null;
    const scores = list.map((a) => a.ratingPercentage);
    const best = Math.max(...scores);
    const avg = Math.round((scores.reduce((a, b) => a + b, 0) / list.length) * 10) / 10;
    const passedCount = list.filter((a) => a.passedArea).length;
    return {
      totalAttempts: list.length,
      bestRating: best,
      averageRating: avg,
      passingRate: Math.round((passedCount / list.length) * 100),
    };
  };

  const mstcMetrics = getSubjectMetrics('MSTC');
  const hpgeMetrics = getSubjectMetrics('HPGE');
  const psadMetrics = getSubjectMetrics('PSAD');

  const handleClear = () => {
    clearAllAttempts();
    onAttemptsChange([]);
    setShowClearConfirm(false);
  };

  const handleSeed = () => {
    const seeded = seedSampleAttempts();
    onAttemptsChange(seeded);
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoStr;
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-24">
      {/* Header Banner */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden bg-blueprint-grid">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5" />
              <span>Official PRC Licensure Rating System</span>
            </div>
            <h1 className="font-arnie text-3xl sm:text-4xl font-bold text-white tracking-wide">
              Performance Review &amp; Paired Cycles
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-light leading-relaxed">
              In accordance with PRC regulations, attempts are paired sequentially (<strong className="text-amber-400">Attempt 1</strong> across MSTC, HPGE, and PSAD form <strong className="text-amber-400">Cycle #1</strong>). The overall rating requires <strong className="text-emerald-400">≥ 70.00% GWA</strong> with <strong className="text-rose-400">no rating below 50.00%</strong> in any area.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {attempts.length === 0 ? (
              <button
                type="button"
                onClick={handleSeed}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-arnie font-bold text-xs tracking-wider transition-colors shadow-lg cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Load Demonstration Attempt Data</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowClearConfirm(true)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-800 hover:bg-rose-500/10 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 text-xs transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Reset History</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 1: PAIRED EXAM CYCLES (PRC 35% MSTC + 30% HPGE + 35% PSAD) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
              ★
            </span>
            <h2 className="font-arnie text-xl font-bold text-white tracking-wide">
              Paired Board Exam Cycles (Order of Attempts)
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-tech-mono">
            {cycles.length} Cycle{cycles.length !== 1 ? 's' : ''} Tracked
          </span>
        </div>

        {cycles.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
            <p className="text-slate-400 text-sm">
              No examination attempts recorded yet. Take an exam in MSTC, HPGE, or PSAD to begin tracking paired cycles.
            </p>
            <div className="flex justify-center space-x-3">
              <button
                type="button"
                onClick={() => onTakeExamArea('MSTC')}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-arnie tracking-wide cursor-pointer"
              >
                Take MSTC Exam
              </button>
              <button
                type="button"
                onClick={handleSeed}
                className="px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Load Sample Data Demo
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {cycles.map((cycle) => {
              const mstc = cycle.mstcAttempt;
              const hpge = cycle.hpgeAttempt;
              const psad = cycle.psadAttempt;

              const mstcScore = mstc?.ratingPercentage ?? null;
              const hpgeScore = hpge?.ratingPercentage ?? null;
              const psadScore = psad?.ratingPercentage ?? null;

              const mstcContrib = mstcScore !== null ? Math.round(mstcScore * 0.35 * 100) / 100 : null;
              const hpgeContrib = hpgeScore !== null ? Math.round(hpgeScore * 0.30 * 100) / 100 : null;
              const psadContrib = psadScore !== null ? Math.round(psadScore * 0.35 * 100) / 100 : null;

              return (
                <div
                  key={cycle.cycleNumber}
                  className={`rounded-2xl border-2 p-6 shadow-xl transition-all relative overflow-hidden bg-slate-900/90 ${
                    cycle.isComplete
                      ? cycle.isPassed
                        ? 'border-emerald-500/50 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/20'
                        : 'border-rose-500/50 bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950/20'
                      : 'border-slate-800 bg-slate-900/80'
                  }`}
                >
                  {/* Cycle Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-arnie text-xl font-bold">
                        #{cycle.cycleNumber}
                      </span>
                      <div>
                        <h3 className="font-arnie text-lg font-bold text-white tracking-wide">
                          Board Exam Simulation Cycle #{cycle.cycleNumber}
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Paired Attempt #{cycle.cycleNumber} across MSTC, HPGE, and PSAD
                        </p>
                      </div>
                    </div>

                    {/* Overall Status Badge */}
                    <div>
                      {cycle.isComplete ? (
                        cycle.isPassed ? (
                          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs font-tech-mono shadow-md">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>PASSED — LICENSED CIVIL ENGINEER</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-xs font-tech-mono shadow-md">
                            <XCircle className="w-4 h-4 text-rose-400" />
                            <span>FAILED (PRC CRITERION NOT MET)</span>
                          </div>
                        )
                      ) : (
                        <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-xs font-tech-mono">
                          <AlertTriangle className="w-4 h-4" />
                          <span>INCOMPLETE ({[mstc, hpge, psad].filter(Boolean).length}/3 AREAS TAKEN)</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3 Area Breakdown Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    {/* MSTC Item */}
                    <div className={`p-4 rounded-xl border ${
                      mstc
                        ? mstcScore! >= 50
                          ? 'border-amber-500/40 bg-amber-500/5'
                          : 'border-rose-500/40 bg-rose-500/5'
                        : 'border-slate-800 bg-slate-950/40 border-dashed'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-400 font-tech-mono">
                          MSTC (35%)
                        </span>
                        {mstc ? (
                          <span className="text-[10px] text-slate-400 font-tech-mono">
                            {mstc.month} {mstc.year}
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-500 italic">Not taken yet</span>
                        )}
                      </div>

                      {mstc ? (
                        <div className="space-y-1">
                          <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-arnie font-bold text-white">
                              {mstcScore?.toFixed(1)}%
                            </span>
                            <span className="text-xs font-tech-mono text-amber-300">
                              +{mstcContrib?.toFixed(2)}% GWA
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                            <span>Score: {mstc.score}/{mstc.totalQuestions}</span>
                            <span className={mstcScore! >= 50 ? 'text-emerald-400' : 'text-rose-400 font-bold'}>
                              {mstcScore! >= 50 ? '≥ 50% Met' : '< 50% Failed!'}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => onTakeExamArea('MSTC')}
                            className="w-full py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold font-arnie tracking-wide border border-amber-500/30 cursor-pointer"
                          >
                            + Take MSTC Now
                          </button>
                        </div>
                      )}
                    </div>

                    {/* HPGE Item */}
                    <div className={`p-4 rounded-xl border ${
                      hpge
                        ? hpgeScore! >= 50
                          ? 'border-cyan-500/40 bg-cyan-500/5'
                          : 'border-rose-500/40 bg-rose-500/5'
                        : 'border-slate-800 bg-slate-950/40 border-dashed'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-cyan-400 font-tech-mono">
                          HPGE (30%)
                        </span>
                        {hpge ? (
                          <span className="text-[10px] text-slate-400 font-tech-mono">
                            {hpge.month} {hpge.year}
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-500 italic">Not taken yet</span>
                        )}
                      </div>

                      {hpge ? (
                        <div className="space-y-1">
                          <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-arnie font-bold text-white">
                              {hpgeScore?.toFixed(1)}%
                            </span>
                            <span className="text-xs font-tech-mono text-cyan-300">
                              +{hpgeContrib?.toFixed(2)}% GWA
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                            <span>Score: {hpge.score}/{hpge.totalQuestions}</span>
                            <span className={hpgeScore! >= 50 ? 'text-emerald-400' : 'text-rose-400 font-bold'}>
                              {hpgeScore! >= 50 ? '≥ 50% Met' : '< 50% Failed!'}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => onTakeExamArea('HPGE')}
                            className="w-full py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold font-arnie tracking-wide border border-cyan-500/30 cursor-pointer"
                          >
                            + Take HPGE Now
                          </button>
                        </div>
                      )}
                    </div>

                    {/* PSAD Item */}
                    <div className={`p-4 rounded-xl border ${
                      psad
                        ? psadScore! >= 50
                          ? 'border-emerald-500/40 bg-emerald-500/5'
                          : 'border-rose-500/40 bg-rose-500/5'
                        : 'border-slate-800 bg-slate-950/40 border-dashed'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-emerald-400 font-tech-mono">
                          PSAD (35%)
                        </span>
                        {psad ? (
                          <span className="text-[10px] text-slate-400 font-tech-mono">
                            {psad.month} {psad.year}
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-500 italic">Not taken yet</span>
                        )}
                      </div>

                      {psad ? (
                        <div className="space-y-1">
                          <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-arnie font-bold text-white">
                              {psadScore?.toFixed(1)}%
                            </span>
                            <span className="text-xs font-tech-mono text-emerald-300">
                              +{psadContrib?.toFixed(2)}% GWA
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                            <span>Score: {psad.score}/{psad.totalQuestions}</span>
                            <span className={psadScore! >= 50 ? 'text-emerald-400' : 'text-rose-400 font-bold'}>
                              {psadScore! >= 50 ? '≥ 50% Met' : '< 50% Failed!'}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => onTakeExamArea('PSAD')}
                            className="w-full py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold font-arnie tracking-wide border border-emerald-500/30 cursor-pointer"
                          >
                            + Take PSAD Now
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Calculation Breakdown & Rule Evaluation */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs font-tech-mono text-slate-300">
                        <Calculator className="w-3.5 h-3.5 text-amber-400" />
                        <span>GWA Calculation Formula:</span>
                        <span className="text-amber-400 font-bold">
                          ({mstcScore ?? 0}% × 0.35) + ({hpgeScore ?? 0}% × 0.30) + ({psadScore ?? 0}% × 0.35)
                        </span>
                      </div>
                      {cycle.failureReason && (
                        <p className="text-xs text-rose-400 font-medium">
                          • {cycle.failureReason}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center space-x-4 shrink-0 font-tech-mono">
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block uppercase">
                          {cycle.isComplete ? 'TOTAL COMPOSITE GWA' : 'PROJECTED GWA'}
                        </span>
                        <span className={`text-2xl font-bold font-arnie ${
                          cycle.compositeRating !== null && cycle.compositeRating >= 70.0
                            ? 'text-emerald-400'
                            : 'text-amber-400'
                        }`}>
                          {cycle.compositeRating !== null ? `${cycle.compositeRating.toFixed(2)}%` : '—'}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 border-l border-slate-800 pl-3">
                        <div>Target: ≥ 70.00%</div>
                        <div>Min Area: ≥ 50.00%</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* SECTION 2: SUBJECT MASTERY CARDS */}
      <div className="space-y-4 pt-4">
        <h2 className="font-arnie text-xl font-bold text-white tracking-wide">
          Area Mastery Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* MSTC Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-arnie font-bold text-amber-400 text-lg">MSTC (35%)</span>
              <span className="text-xs font-tech-mono text-slate-400">
                {mstcMetrics?.totalAttempts ?? 0} Attempts
              </span>
            </div>
            {mstcMetrics ? (
              <div className="space-y-2 pt-1 font-tech-mono text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Best Rating:</span>
                  <strong className="text-emerald-400">{mstcMetrics.bestRating.toFixed(1)}%</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Average Rating:</span>
                  <strong className="text-amber-400">{mstcMetrics.averageRating.toFixed(1)}%</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Passing (≥50%):</span>
                  <strong className="text-white">{mstcMetrics.passingRate}%</strong>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">No exams taken in MSTC yet.</p>
            )}
          </div>

          {/* HPGE Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-arnie font-bold text-cyan-400 text-lg">HPGE (30%)</span>
              <span className="text-xs font-tech-mono text-slate-400">
                {hpgeMetrics?.totalAttempts ?? 0} Attempts
              </span>
            </div>
            {hpgeMetrics ? (
              <div className="space-y-2 pt-1 font-tech-mono text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Best Rating:</span>
                  <strong className="text-emerald-400">{hpgeMetrics.bestRating.toFixed(1)}%</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Average Rating:</span>
                  <strong className="text-cyan-400">{hpgeMetrics.averageRating.toFixed(1)}%</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Passing (≥50%):</span>
                  <strong className="text-white">{hpgeMetrics.passingRate}%</strong>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">No exams taken in HPGE yet.</p>
            )}
          </div>

          {/* PSAD Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-arnie font-bold text-emerald-400 text-lg">PSAD (35%)</span>
              <span className="text-xs font-tech-mono text-slate-400">
                {psadMetrics?.totalAttempts ?? 0} Attempts
              </span>
            </div>
            {psadMetrics ? (
              <div className="space-y-2 pt-1 font-tech-mono text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Best Rating:</span>
                  <strong className="text-emerald-400">{psadMetrics.bestRating.toFixed(1)}%</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Average Rating:</span>
                  <strong className="text-emerald-400">{psadMetrics.averageRating.toFixed(1)}%</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Passing (≥50%):</span>
                  <strong className="text-white">{psadMetrics.passingRate}%</strong>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">No exams taken in PSAD yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 3: ATTEMPT HISTORY TABLE */}
      <div className="space-y-4 pt-4">
        <h2 className="font-arnie text-xl font-bold text-white tracking-wide">
          Complete Exam Attempt Log
        </h2>

        {attempts.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center text-xs text-slate-500">
            No attempts logged.
          </div>
        ) : (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 uppercase font-tech-mono text-[10px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="p-4">Date Taken</th>
                    <th className="p-4">Area / Subject</th>
                    <th className="p-4">Board Paper</th>
                    <th className="p-4">Score</th>
                    <th className="p-4">Rating %</th>
                    <th className="p-4">PRC Area Status</th>
                    <th className="p-4">Time Spent</th>
                    <th className="p-4">Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-tech-mono">
                  {attempts.map((att) => {
                    const isPassed = att.ratingPercentage >= 50.0;
                    return (
                      <tr key={att.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-4 text-slate-300">
                          {formatDate(att.date)}
                        </td>
                        <td className="p-4 font-bold">
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            att.subject === 'MSTC'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : att.subject === 'HPGE'
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {att.subject} (Attempt #{att.attemptIndexInSubject})
                          </span>
                        </td>
                        <td className="p-4 text-slate-300">
                          {att.month} {att.year}
                        </td>
                        <td className="p-4 text-slate-200">
                          {att.score} / {att.totalQuestions}
                        </td>
                        <td className="p-4 font-bold text-sm">
                          <span className={isPassed ? 'text-emerald-400' : 'text-rose-400'}>
                            {att.ratingPercentage.toFixed(1)}%
                          </span>
                        </td>
                        <td className="p-4">
                          {isPassed ? (
                            <span className="inline-flex items-center space-x-1 text-emerald-400 text-[11px] font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Passed (≥50%)</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center space-x-1 text-rose-400 text-[11px] font-semibold">
                              <XCircle className="w-3.5 h-3.5" />
                              <span>Failed (&lt;50%)</span>
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-slate-400">
                          {formatTime(att.timeSpentSeconds)}
                        </td>
                        <td className="p-4 text-slate-400 text-[11px]">
                          {att.isInteractive ? 'Interactive' : 'Simulation'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal for Reset */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl">
            <h3 className="font-arnie text-lg font-bold text-white">
              Reset Attempt History?
            </h3>
            <p className="text-xs text-slate-300">
              This will permanently delete all logged examination attempts and paired cycles.
            </p>
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-xs"
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
