/**
 * "How hard was this one?" — the rating control.
 *
 * Lives in one place because it is now used twice: the drill header (where the
 * rating steers the very next draw) and the results review (where it feeds the
 * weighted mastery figure). Two copies of the same three buttons would drift
 * the moment one of them changed a label or a clear-on-retap rule, and the two
 * surfaces write to the same storage key — so they must behave identically.
 *
 * The control is a *toggle group*, not a radio group: tapping the rating that
 * is already set clears it. A mis-tap has to be undoable, and a fourth "none"
 * button would take as much room as the three real answers.
 */
import React from 'react';
import { DIFFICULTIES } from '../data/itemDifficulty';
import type { ItemDifficulty } from '../data/itemDifficulty';

export const DIFFICULTY_STYLE: Record<ItemDifficulty, { label: string; on: string; hint: string }> = {
  easy: {
    label: 'Easy',
    on: 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300',
    hint: 'Drawn half as often as a mid item',
  },
  mid: {
    label: 'Mid',
    on: 'border-amber-500/60 bg-amber-500/15 text-amber-300',
    hint: 'The baseline — neither favoured nor held back',
  },
  hard: {
    label: 'Hard',
    on: 'border-rose-500/60 bg-rose-500/15 text-rose-300',
    hint: 'Drawn twice as often as a mid item',
  },
};

interface DifficultyRatingProps {
  /** The rating already stored for this item, if any. */
  value?: ItemDifficulty;
  onRate: (next: ItemDifficulty) => void;
  /** Small caps caption before the buttons. Pass '' to omit it. */
  label?: string;
  /** `panel` is the roomier variant used inside the solution body. */
  variant?: 'inline' | 'panel';
  className?: string;
}

export const DifficultyRating: React.FC<DifficultyRatingProps> = ({
  value,
  onRate,
  label = 'Rate',
  variant = 'inline',
  className = '',
}) => {
  const panel = variant === 'panel';

  return (
    <div
      role="group"
      aria-label="How hard this item felt"
      className={`flex items-center gap-0.5 rounded-xl border border-slate-800 bg-slate-950/70 p-0.5 ${className}`}
    >
      {label ? (
        <span
          className={`pl-1.5 pr-0.5 font-bold uppercase tracking-[0.12em] text-slate-500 ${
            panel ? 'text-[10px]' : 'text-[9px]'
          }`}
        >
          {label}
        </span>
      ) : null}
      {DIFFICULTIES.map((d) => {
        const active = value === d;
        return (
          <button
            key={d}
            type="button"
            aria-pressed={active}
            onClick={() => onRate(d)}
            title={`${DIFFICULTY_STYLE[d].hint}${active ? ' — tap again to clear' : ''}`}
            className={`rounded-lg border font-bold transition-colors cursor-pointer ${
              panel ? 'px-2.5 py-1 text-[11px]' : 'px-2 py-1 text-[10px]'
            } ${
              active
                ? DIFFICULTY_STYLE[d].on
                : 'border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {DIFFICULTY_STYLE[d].label}
          </button>
        );
      })}
    </div>
  );
};
