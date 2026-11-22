/**
 * The reaction layer: a picker, a floating burst, and the celebration reel.
 *
 * Three shapes, because a GIF means something different in each place:
 *
 *   - **picker** — you choose a mood, then a GIF from that mood. Two taps, no
 *     search box: a reaction sent during a results screen is sent in a hurry.
 *   - **burst** — one GIF rises above the profile card of whoever sent it and
 *     fades. Positioned per card rather than per screen, so "who laughed" is
 *     answered by where the GIF appeared.
 *   - **reel** — the co-op celebration, which is deliberately *not* anchored to
 *     a card: GIFs land anywhere on the screen, several at once, for a few
 *     seconds. That is a different feeling from a burst and it is the reason
 *     the two are separate components.
 *
 * The built-in fallback renders an emoji card in the same slot as a GIF, so
 * every one of the three works identically with or without a provider key.
 */
import { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import {
  BAND_MOODS,
  pickGif,
  REACTION_MOODS,
  searchGifs,
  type GifResult,
  type ReactionMood,
} from '../data/gifLibrary';
import type { ScoreBand } from '../data/liveRoom';
import '../styles/live.css';

/* --------------------------------------------------------------------------
   One GIF
   -------------------------------------------------------------------------- */

function GifTile({ gif, className = '' }: { gif: GifResult; className?: string }) {
  if (!gif.url) {
    // Built-in pack: an emoji card. Same footprint as a GIF so layout does not
    // jump when a provider comes back.
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-3xl ${className}`}
        title={gif.title}
      >
        <span className="animate-pulse">{moodEmoji(gif.mood)}</span>
      </div>
    );
  }
  return (
    <img
      src={gif.preview || gif.url}
      alt={gif.title}
      loading="lazy"
      className={`rounded-xl object-cover ${className}`}
    />
  );
}

function moodEmoji(mood?: ReactionMood): string {
  return REACTION_MOODS.find((m) => m.id === mood)?.emoji ?? '🎉';
}

/* --------------------------------------------------------------------------
   Picker
   -------------------------------------------------------------------------- */

interface PickerProps {
  onSend: (gif: GifResult, mood: ReactionMood) => void;
  disabled?: boolean;
  /** Compact drops the labels, for a card header. */
  compact?: boolean;
}

export function ReactionPicker({ onSend, disabled, compact }: PickerProps) {
  const [openMood, setOpenMood] = useState<ReactionMood | null>(null);
  const [gifs, setGifs] = useState<GifResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!openMood) return;
    let cancelled = false;
    setLoading(true);
    setGifs([]);
    void searchGifs(openMood, 6)
      .then((found) => {
        if (!cancelled) setGifs(found);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [openMood]);

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-1.5">
        {REACTION_MOODS.map((mood) => (
          <button
            key={mood.id}
            type="button"
            disabled={disabled}
            onClick={() => setOpenMood((cur) => (cur === mood.id ? null : mood.id))}
            title={mood.label}
            aria-pressed={openMood === mood.id}
            className={`flex items-center gap-1 rounded-lg border px-2 py-1 text-[11px] font-semibold transition-colors cursor-pointer disabled:opacity-40 ${
              openMood === mood.id
                ? 'border-amber-500/60 bg-amber-500/15 text-amber-200'
                : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="text-sm leading-none">{mood.emoji}</span>
            {!compact && <span>{mood.label}</span>}
          </button>
        ))}
      </div>

      {openMood && (
        <div className="absolute bottom-full left-0 z-30 mb-2 w-64 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-2xl">
          <div className="mb-1.5 flex items-center justify-between px-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {REACTION_MOODS.find((m) => m.id === openMood)?.label}
            </span>
            <button
              type="button"
              onClick={() => setOpenMood(null)}
              aria-label="Close"
              className="text-slate-500 hover:text-white cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          {loading ? (
            <p className="px-1 py-4 text-center text-[11px] text-slate-500">Finding a GIF…</p>
          ) : (
            <div className="grid grid-cols-3 gap-1.5">
              {gifs.map((gif) => (
                <button
                  key={gif.id}
                  type="button"
                  onClick={() => {
                    onSend(gif, openMood);
                    setOpenMood(null);
                  }}
                  className="overflow-hidden rounded-lg border border-transparent transition-colors hover:border-amber-500/60 cursor-pointer"
                >
                  <GifTile gif={gif} className="h-16 w-full" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Burst — above one player's card
   -------------------------------------------------------------------------- */

export interface BurstItem {
  key: string;
  gif: GifResult;
  from: string;
}

/**
 * A GIF that rises and fades, anchored to a card.
 *
 * Mounted by the card itself, so it is clipped by nothing and needs no
 * coordinate maths. The animation is CSS-only: a `keyframes` rise plus opacity,
 * which keeps it off the main thread while a room full of reactions is firing.
 */
export function ReactionBurst({ items }: { items: BurstItem[] }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-2 z-20 flex flex-wrap justify-center gap-1">
      {items.map((item) => (
        <div
          key={item.key}
          className="reaction-burst overflow-hidden rounded-lg border border-slate-700 shadow-xl"
          title={`${item.from}: ${item.gif.title}`}
        >
          <GifTile gif={item.gif} className="h-16 w-16" />
        </div>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Reel — the co-op celebration
   -------------------------------------------------------------------------- */

interface ReelProps {
  band: ScoreBand;
  active: boolean;
  onDone?: () => void;
}

/**
 * GIFs landing anywhere on screen, for the co-op celebration.
 *
 * Positions are seeded once per mount from the band's moods, then held in
 * state: recomputing them on every render would make the reel twitch as the
 * clock ticks elsewhere on the page.
 *
 * The intensity is banded rather than uniform — a 100% gets a screenful, a
 * sub-70% gets a handful, because a wall of confetti over a failed paper reads
 * as mockery rather than celebration.
 */
export function CelebrationReel({ band, active, onDone }: ReelProps) {
  const [items, setItems] = useState<{ key: string; gif: GifResult; left: number; top: number; delay: number }[]>([]);

  const count = band === 'perfect' ? 14 : band === 'great' ? 9 : band === 'ok' ? 6 : 4;

  useEffect(() => {
    if (!active) {
      setItems([]);
      return;
    }
    let cancelled = false;
    const moods = BAND_MOODS[band] ?? BAND_MOODS.unknown;

    void Promise.all(moods.map((m) => searchGifs(m, 8))).then((lists) => {
      if (cancelled) return;
      const pool = lists.flat();
      const next = Array.from({ length: count }, (_, i) => ({
        key: `reel-${i}`,
        gif: pickGif(pool) ?? { id: `none-${i}`, url: '', preview: '', title: '', mood: moods[i % moods.length] },
        // Kept off the extreme edges so a GIF is never half off-screen.
        left: 4 + Math.random() * 84,
        top: 6 + Math.random() * 76,
        delay: Math.random() * 1.6,
      }));
      setItems(next);
    });

    const timer = window.setTimeout(() => onDone?.(), 7000);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [active, band, count, onDone]);

  if (!active || items.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] overflow-hidden">
      {items.map((item) => (
        <div
          key={item.key}
          className="celebration-drop absolute"
          style={{ left: `${item.left}%`, top: `${item.top}%`, animationDelay: `${item.delay}s` }}
        >
          <GifTile gif={item.gif} className="h-24 w-24 shadow-2xl" />
        </div>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Shared: group reactions by sender
   -------------------------------------------------------------------------- */

export interface LiveReactionLike {
  id: string;
  uid: string;
  name: string;
  gifId: string;
  url?: string;
  at: string;
}

/**
 * The most recent few reactions per player, as bursts.
 *
 * Grouped by sender because that is how they are displayed — above that
 * person's card — and capped at two so one enthusiastic player cannot bury
 * everyone else's reaction under their own.
 */
export function burstsByPlayer(
  reactions: LiveReactionLike[],
  now = Date.now(),
  windowMs = 6000
): Record<string, BurstItem[]> {
  const out: Record<string, BurstItem[]> = {};
  for (const r of reactions) {
    const at = Date.parse(r.at);
    if (Number.isNaN(at) || now - at > windowMs) continue;
    const list = (out[r.uid] ??= []);
    if (list.length >= 2) continue;
    list.push({
      key: r.id,
      from: r.name,
      gif: {
        id: r.gifId,
        url: r.url ?? '',
        preview: r.url ?? '',
        title: r.name,
      },
    });
  }
  return out;
}

/** Moods for a band, exposed so the results screen can label the reel. */
export function bandMoodLabels(band: ScoreBand): string[] {
  const moods = BAND_MOODS[band] ?? BAND_MOODS.unknown;
  return moods.map((id) => REACTION_MOODS.find((m) => m.id === id)?.label ?? id);
}

/** Stable key for a reaction list, so effects do not re-run on every render. */
export function useReactionSignature(reactions: LiveReactionLike[]): string {
  return useMemo(() => reactions.map((r) => r.id).join(','), [reactions]);
}
