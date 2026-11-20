/**
 * Chart primitives for the analytics panel.
 *
 * Deliberately hand-rolled rather than pulling in a charting library: the app
 * ships no chart dependency, and these are a polyline, a set of bars and a
 * stacked strip. ~200 lines beats ~90 kB.
 *
 * Colour is expressed with Tailwind text-* classes plus `stroke="currentColor"`
 * / `fill="currentColor"`, never as hardcoded hex. That matters here: the
 * palette is re-pointed per theme (see the v2 remap in index.css), so a chart
 * written this way inherits every theme — including Fluent 2 — for free,
 * instead of staying amber on a blue-accented skin.
 */
import React from 'react';
import type { SubjectArea } from '../../types/exam';
import type { ErrorProfile, Trajectory } from '../../data/analytics';

const SERIES: {
  subject: SubjectArea;
  label: string;
  colour: string;
  dash?: string;
}[] = [
  { subject: 'MSTC', label: 'MSTC', colour: 'text-amber-400' },
  { subject: 'HPGE', label: 'HPGE', colour: 'text-cyan-400', dash: '7 5' },
  { subject: 'PSAD', label: 'PSAD', colour: 'text-emerald-400', dash: '2 4' },
];

const W = 640;
const H = 230;
const PAD = { top: 16, right: 14, bottom: 26, left: 38 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;

/** Ratings live on 0–100; 40 is the floor so a pass line at 70 stays readable. */
const Y_MIN = 40;
const Y_MAX = 100;

const xAt = (index: number, count: number): number => {
  if (count <= 1) return PAD.left + PLOT_W / 2;
  return PAD.left + (index / (count - 1)) * PLOT_W;
};

const yAt = (rating: number): number => {
  const clamped = Math.max(Y_MIN, Math.min(Y_MAX, rating));
  return PAD.top + PLOT_H - ((clamped - Y_MIN) / (Y_MAX - Y_MIN)) * PLOT_H;
};

export const TrajectoryChart: React.FC<{ trend: Trajectory }> = ({ trend }) => {
  const count = Math.max(
    trend.subjects.MSTC.length,
    trend.subjects.HPGE.length,
    trend.subjects.PSAD.length
  );

  if (count === 0) {
    return (
      <div className="h-[230px] flex items-center justify-center text-xs text-slate-500">
        No scored attempts yet.
      </div>
    );
  }

  const ticks = [50, 70, 90];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-2">
        {SERIES.map((s) => (
          <span key={s.subject} className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <svg width="16" height="6" aria-hidden="true">
              <line
                x1="0"
                y1="3"
                x2="16"
                y2="3"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={s.dash}
                className={s.colour}
              />
            </svg>
            {s.label}
          </span>
        ))}
        <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <svg width="16" height="6" aria-hidden="true">
            <line x1="0" y1="3" x2="16" y2="3" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
          pass 70%
        </span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        className="block"
        role="img"
        aria-label={`Rating trend across ${count} attempts for MSTC, HPGE and PSAD`}
      >
        <title>Rating trend</title>
        <desc>
          Each subject's rating per attempt, with a dashed line at the 70 percent passing composite.
        </desc>

        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={PAD.left}
              y1={yAt(t)}
              x2={W - PAD.right}
              y2={yAt(t)}
              stroke="currentColor"
              strokeWidth="1"
              className="text-slate-800"
            />
            <text
              x={PAD.left - 8}
              y={yAt(t)}
              textAnchor="end"
              dominantBaseline="central"
              className="fill-current text-slate-500"
              fontSize="10"
            >
              {t}
            </text>
          </g>
        ))}

        <line
          x1={PAD.left}
          y1={yAt(70)}
          x2={W - PAD.right}
          y2={yAt(70)}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          className="text-slate-500"
        />

        {SERIES.map((s) => {
          const points = trend.subjects[s.subject];
          if (points.length === 0) return null;
          const path = points.map((p, i) => `${xAt(i, count)},${yAt(p.rating)}`).join(' ');
          return (
            <g key={s.subject} className={s.colour}>
              <polyline
                points={path}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={s.dash}
                strokeLinejoin="round"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              {points.map((p, i) => (
                <circle key={p.date + i} cx={xAt(i, count)} cy={yAt(p.rating)} r="3" fill="currentColor" />
              ))}
            </g>
          );
        })}

        {Array.from({ length: count }).map((_, i) => (
          <text
            key={i}
            x={xAt(i, count)}
            y={H - 8}
            textAnchor="middle"
            className="fill-current text-slate-500"
            fontSize="10"
          >
            {i + 1}
          </text>
        ))}
      </svg>
    </div>
  );
};

export interface TopicBarRow {
  topicId: string;
  label: string;
  accuracy: number;
  scorable: number;
  blank: number;
}

/*
 * Orange, not amber, for the warning band: amber is the app's *brand* palette,
 * and the v2 skin re-points it at Microsoft blue. A 60% topic would then render
 * as a calm accent instead of a warning. Orange survives every theme as a
 * warning colour.
 */
const barColour = (accuracy: number): string => {
  if (accuracy < 60) return 'bg-rose-500';
  if (accuracy < 70) return 'bg-orange-500';
  if (accuracy < 80) return 'bg-cyan-500';
  return 'bg-emerald-500';
};

export const TopicBars: React.FC<{ rows: TopicBarRow[] }> = ({ rows }) => {
  if (rows.length === 0) {
    return (
      <div className="py-6 text-center text-xs text-slate-500">
        No topic has enough answered questions to score yet.
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {rows.map((row) => (
        <div key={row.topicId}>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <span className="text-xs text-slate-200 truncate">{row.label}</span>
            <span className="text-[11px] text-slate-400 tabular-nums shrink-0">
              {row.accuracy}%
              <span className="text-slate-600"> · {row.scorable}</span>
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full ${barColour(row.accuracy)}`}
              style={{ width: `${Math.max(2, Math.min(100, row.accuracy))}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const ErrorStrip: React.FC<{ errors: ErrorProfile }> = ({ errors }) => {
  const total = errors.scorable;
  if (total === 0) {
    return <div className="py-6 text-center text-xs text-slate-500">Nothing scored yet.</div>;
  }

  const pct = (n: number) => Math.round((n / total) * 1000) / 10;
  const segments = [
    { label: 'Correct', value: errors.correct, colour: 'bg-emerald-500' },
    { label: 'Wrong', value: errors.wrong, colour: 'bg-rose-500' },
    { label: 'Blank', value: errors.blank, colour: 'bg-orange-500' },
    { label: 'Self-marked missed', value: errors.selfMissed, colour: 'bg-slate-500' },
  ].filter((s) => s.value > 0);

  return (
    <div>
      <div className="flex h-2 rounded-full overflow-hidden bg-slate-800 mb-3">
        {segments.map((s) => (
          <span key={s.label} className={s.colour} style={{ width: `${pct(s.value)}%` }} title={`${s.label}: ${pct(s.value)}%`} />
        ))}
      </div>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center justify-between gap-2">
            <dt className="flex items-center gap-1.5 text-[11px] text-slate-400 min-w-0">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.colour}`} />
              <span className="truncate">{s.label}</span>
            </dt>
            <dd className="text-[11px] text-slate-300 tabular-nums shrink-0">{pct(s.value)}%</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
