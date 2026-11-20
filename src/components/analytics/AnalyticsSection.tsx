/**
 * The analytics panel shown at the top of the Performance tab.
 *
 * Reads only `attempts` (and the drill ledger) and derives everything through
 * `summariseAnalytics`, memoised on those inputs so the question-bank join runs
 * once per change rather than once per render.
 *
 * Deliberate choices worth keeping:
 *
 *   - Readiness is a **band**, never a percentage chance of passing. Three
 *     sittings cannot support a probability, and showing one would be a
 *     confident lie.
 *   - Every topic percentage carries its sample size, and topics below
 *     `MIN_TOPIC_SAMPLE` are kept out of the ranked list entirely — a 100% from
 *     two questions would otherwise jump to the top and hide the real weakness.
 *   - When no attempt carries a joinable answer map (seeded demo data, or an
 *     older import) the panel says so plainly instead of rendering an empty
 *     grid that looks broken.
 */
import React, { useMemo, useState } from 'react';
import { Activity, AlertTriangle, BarChart3, Gauge, Scale, Target, TrendingUp } from 'lucide-react';
import type { ExamAttempt, SubjectArea } from '../../types/exam';
import type { DrillResult } from '../../data/drillResults';
import type { DifficultyMap } from '../../data/itemDifficulty';
import { MIN_TOPIC_SAMPLE, summariseAnalytics } from '../../data/analytics';
import type { ReadinessBand } from '../../data/analytics';
import { ErrorStrip, TopicBars, TrajectoryChart } from './AnalyticsCharts';

interface AnalyticsSectionProps {
  attempts: ExamAttempt[];
  drills?: DrillResult[];
  /**
   * The learner's own easy/mid/hard ratings. Absent means "nothing rated",
   * which weights every item equally and reduces the panel to raw accuracy.
   */
  difficulty?: DifficultyMap;
}

const BAND_META: Record<ReadinessBand, { label: string; className: string; hint: string }> = {
  ready: {
    label: 'On track',
    className: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
    hint: 'Composite at or above 70% with no area below 50%.',
  },
  borderline: {
    label: 'Borderline',
    className: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
    hint: 'Within striking distance of 70% — the gaps below are worth more than another full mock.',
  },
  'at-risk': {
    label: 'At risk',
    className: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
    hint: 'Composite below 60%. Work the weakest area before adding volume.',
  },
  unknown: {
    label: 'Needs all three',
    className: 'bg-slate-800 text-slate-400 border-slate-700',
    hint: 'A readiness reading needs one sitting in each of the three areas.',
  },
};

const FILTERS: { id: 'all' | SubjectArea; label: string }[] = [
  { id: 'all', label: 'All areas' },
  { id: 'MSTC', label: 'MSTC' },
  { id: 'HPGE', label: 'HPGE' },
  { id: 'PSAD', label: 'PSAD' },
];

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({
  attempts,
  drills = [],
  difficulty = {},
}) => {
  const [filter, setFilter] = useState<'all' | SubjectArea>('all');

  const summary = useMemo(
    () => summariseAnalytics(attempts, drills, difficulty),
    [attempts, drills, difficulty]
  );
  const { readiness, topics, errors, trend, pace, actionable, sampleSize, weighting } = summary;

  const band = BAND_META[readiness.band];
  const hasAnswers = topics.attemptsUsed > 0 || drills.length > 0;
  /** Nothing rated yet, so every bar is already its own weighted figure. */
  const weighted = weighting.rated > 0;

  const weakest = actionable[0] ?? topics.rows[0] ?? null;

  const visibleTopics = actionable
    .filter((r) => filter === 'all' || r.subject === filter)
    .slice(0, 8);

  const thinTopics = topics.rows.filter((r) => r.scorable < MIN_TOPIC_SAMPLE).length;

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <h2 className="font-arnie text-lg font-bold text-white tracking-wide">Performance analytics</h2>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {sampleSize > 0
              ? `${sampleSize.toLocaleString()} graded questions across ${topics.attemptsUsed} sitting${topics.attemptsUsed === 1 ? '' : 's'}`
              : drills.length > 0
                ? /*
                   * Drills are the only source here, which happens on a fresh
                   * account: practice is logged per topic but no board paper has
                   * a recorded answer map yet. Saying "waiting for a sitting"
                   * next to five populated topic bars reads as a bug.
                   */
                  `${drills.length} practice drill${drills.length === 1 ? '' : 's'} logged — board papers add to this once their answers are recorded`
                : 'Waiting for a completed sitting with recorded answers.'}
          </p>
        </div>
        <span className="text-[10px] text-slate-500">
          {attempts.length} attempt{attempts.length === 1 ? '' : 's'} logged
        </span>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-slate-500">
            <Target className="w-3 h-3" /> Composite
          </div>
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="font-arnie text-2xl font-bold text-white tabular-nums">
              {readiness.composite === null ? '—' : `${readiness.composite}%`}
            </span>
            {readiness.gapToPass !== null && readiness.gapToPass > 0 && (
              <span className="text-[11px] text-amber-400">{readiness.gapToPass} to pass</span>
            )}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">weighted 35 / 30 / 35</p>
        </div>

        <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-slate-500">
            <Gauge className="w-3 h-3" /> Readiness
          </div>
          <div className="mt-1.5">
            <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full border ${band.className}`}>
              {band.label}
            </span>
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5 leading-snug">{band.hint}</p>
        </div>

        <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-slate-500">
            <AlertTriangle className="w-3 h-3" /> Weakest topic
          </div>
          <div className="mt-1.5">
            {weakest ? (
              <>
                <div className="text-sm font-semibold text-white truncate">{weakest.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5 tabular-nums">
                  {weakest.weightedAccuracy}% over {weakest.scorable} question{weakest.scorable === 1 ? '' : 's'}
                  {weakest.rated > 0 && weakest.weightedAccuracy !== weakest.accuracy && (
                    <span className="text-slate-500"> · {weakest.accuracy}% unweighted</span>
                  )}
                </div>
              </>
            ) : (
              <div className="text-xs text-slate-500">Not enough answered questions yet.</div>
            )}
          </div>
        </div>
      </div>

      {/* Trend + error profile */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="lg:col-span-3 bg-slate-900/95 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" /> Score trajectory
            </div>
            <span className="text-[10px] text-slate-500">by attempt order</span>
          </div>
          <TrajectoryChart trend={trend} />
        </div>

        <div className="lg:col-span-2 bg-slate-900/95 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
              <Activity className="w-3.5 h-3.5 text-amber-400" /> Where marks go
            </div>
            <span className="text-[10px] text-slate-500">{errors.accuracy}% correct</span>
          </div>
          <ErrorStrip errors={errors} />
          <p className="text-[10px] text-slate-500 mt-3 leading-snug">
            A blank is usually time or confidence; a wrong answer is knowledge. They need different work.
          </p>
        </div>
      </div>

      {/* Topic mastery */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
            <Target className="w-3.5 h-3.5 text-amber-400" /> Topic mastery
          </div>
          <div className="flex flex-wrap gap-1">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold border transition-colors cursor-pointer ${
                  filter === f.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'text-slate-400 border-slate-700 hover:text-white hover:border-slate-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/*
         * The weighting is stated before the bars, not after them. A percentage
         * that has been re-weighted without saying so is just a wrong number,
         * and this row is the only place the learner can learn that a hard item
         * counts for four easy ones.
         */}
        <div className="flex items-center gap-1.5 mb-3 text-[10px] leading-snug">
          <Scale className="w-3 h-3 shrink-0 text-slate-500" />
          {weighted ? (
            <span className="text-slate-400">
              Weighted by your own ratings — {weighting.rated.toLocaleString()} item
              {weighting.rated === 1 ? '' : 's'} rated, easy 1 · mid 2 · hard 4. Overall{' '}
              <span className="text-slate-300 font-semibold tabular-nums">{weighting.weightedAccuracy}%</span> weighted.
            </span>
          ) : (
            <span className="text-slate-500">
              Rate a drill item easy / mid / hard and the bars start counting it more — an easy miss costs
              more than a hard one. Until then these are raw percentages.
            </span>
          )}
        </div>

        {!hasAnswers ? (
          <div className="py-6 text-center">
            <p className="text-xs text-slate-400">Topic breakdown needs sittings with recorded answers.</p>
            <p className="text-[10px] text-slate-500 mt-1 max-w-md mx-auto leading-snug">
              A sitting only counts here when its answers can be matched back to the paper's own
              questions. An older import, or a paper that has since been re-keyed, still shows in the
              score trend above but contributes nothing to the topics.
            </p>
          </div>
        ) : (
          <>
            <TopicBars rows={visibleTopics} />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 pt-3 border-t border-slate-800">
              <span className="text-[10px] text-slate-500">
                {weighted ? 'weakest first, by weighted accuracy' : 'weakest first'}
              </span>
              {weighting.easyMisses > 0 && (
                <span className="text-[10px] text-orange-400">
                  {weighting.easyMisses} mark{weighting.easyMisses === 1 ? '' : 's'} lost to items you had
                  already rated easy
                </span>
              )}
              {thinTopics > 0 && (
                <span className="text-[10px] text-slate-500">
                  {thinTopics} topic{thinTopics === 1 ? '' : 's'} below {MIN_TOPIC_SAMPLE} questions — hidden until
                  there is enough to read
                </span>
              )}
              {topics.unmapped > 0 && (
                <span className="text-[10px] text-slate-600">
                  {topics.unmapped} question{topics.unmapped === 1 ? '' : 's'} could not be categorised
                </span>
              )}
            </div>
          </>
        )}
      </div>

      {/* Pacing */}
      {pace.length > 0 && (
        <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 mb-3">
            <Gauge className="w-3.5 h-3.5 text-amber-400" /> Pace against the sitting clock
          </div>
          <div className="space-y-2">
            {pace.map((row) => {
              const over = row.overrun > 0.05;
              const under = row.overrun < -0.05;
              /*
               * Scale to twice the budget so the budget sits at the midpoint.
               * Clamping at 100% of the budget made 4.2 and 6.4 min/q against a
               * 4–5 min budget look identical — both simply filled the track.
               */
              const ratio = row.minutesPerQuestion / Math.max(row.budgetMinutesPerQuestion, 0.1);
              return (
                <div key={row.subject} className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-300 w-14 shrink-0">{row.subject}</span>
                  <div className="relative flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${over ? 'bg-rose-500' : under ? 'bg-emerald-500' : 'bg-cyan-500'}`}
                      style={{ width: `${Math.min(100, (ratio / 2) * 100)}%` }}
                    />
                    <span
                      className="absolute top-0 bottom-0 w-px bg-slate-500/70"
                      style={{ left: '50%' }}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 tabular-nums shrink-0 w-24 text-right">
                    {row.minutesPerQuestion.toFixed(1)} vs {row.budgetMinutesPerQuestion.toFixed(1)} min/q
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-[10px] text-slate-500 mt-2.5 leading-snug">
            Paper-level only — per-question timing is not recorded yet. The tick marks the paper's own budget.
          </p>
        </div>
      )}
    </section>
  );
};
