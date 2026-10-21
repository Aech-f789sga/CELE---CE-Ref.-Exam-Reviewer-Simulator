import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Layers,
  BookOpen,
  Search,
  X,
  Check,
  ArrowLeft,
  ArrowRight,
  Shuffle,
  RotateCcw,
  Maximize2,
  ExternalLink,
  RefreshCw,
  CloudOff,
  CloudDownload,
  CheckCircle2,
  XCircle,
  Loader2,
  AlertTriangle,
  Copy,
  ChevronRight,
  PanelRightOpen,
  MousePointerClick,
  HelpCircle,
  Sparkles,
  ListFilter,
  BookMarked,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeConfig } from '../types/theme';
import {
  CARD_SITE,
  CARD_REPO,
  SOURCES,
  FormulaCard,
  FormulaDeck,
  TermBook,
  TermItem,
  fallbackImageUrl,
  formatSyncedAt,
  imageUrl,
  loadFormulaDeck,
  loadTermBook,
  sourceLabel,
} from '../services/formulaCards';

/* -------------------------------------------------------------------------- */
/* local persistence                                                          */
/* -------------------------------------------------------------------------- */

const MARK_KEY = 'ce_fc_marks_v1';
const QUIZ_KEY = 'ce_fc_quiz_stats_v1';

type CardMark = 'known' | 'review';

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode */
  }
}

/* -------------------------------------------------------------------------- */
/* theme helpers                                                              */
/* -------------------------------------------------------------------------- */

/** `#0e1334` -> `rgba(14, 19, 52, 0.72)` so panels can be frosted glass. */
function withAlpha(hex: string, alpha: number): string {
  const h = (hex || '').replace('#', '');
  if (h.length !== 6) return hex;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function glass(t: ThemeConfig, alpha = 0.72): React.CSSProperties {
  return {
    backgroundColor: withAlpha(t.bgCard, alpha),
    borderColor: t.border,
    backdropFilter: 'blur(22px) saturate(140%)',
    WebkitBackdropFilter: 'blur(22px) saturate(140%)',
    boxShadow: `0 18px 50px -28px ${withAlpha('#000000', 0.55)}, inset 0 1px 0 0 ${withAlpha('#ffffff', 0.06)}`,
  };
}

function softPanel(t: ThemeConfig): React.CSSProperties {
  return {
    backgroundColor: withAlpha(t.bgCardSubtle, 0.55),
    borderColor: withAlpha(t.border, 0.6),
  };
}

function chip(t: ThemeConfig, active: boolean): React.CSSProperties {
  return active
    ? { backgroundColor: t.accent, borderColor: t.accent, color: t.accentText }
    : { backgroundColor: 'transparent', borderColor: withAlpha(t.border, 0.75), color: t.textSecondary };
}

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0';

/* -------------------------------------------------------------------------- */
/* small shared pieces                                                        */
/* -------------------------------------------------------------------------- */

const Chip: React.FC<{
  active: boolean;
  onClick: () => void;
  t: ThemeConfig;
  children: React.ReactNode;
  count?: number;
  title?: string;
}> = ({ active, onClick, t, children, count, title }) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    style={chip(t, active)}
    className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-all duration-200 hover:-translate-y-px ${focusRing}`}
  >
    <span className="whitespace-nowrap">{children}</span>
    {typeof count === 'number' && (
      <span
        className="ml-1.5 text-[10px] tabular-nums"
        style={{ opacity: active ? 0.75 : 0.6 }}
      >
        {count}
      </span>
    )}
  </button>
);

const GhostButton: React.FC<{
  onClick: () => void;
  t: ThemeConfig;
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
  active?: boolean;
}> = ({ onClick, t, children, title, disabled, active }) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    disabled={disabled}
    style={
      active
        ? { backgroundColor: withAlpha(t.accent, 0.18), borderColor: t.accent, color: t.accent }
        : { backgroundColor: 'transparent', borderColor: withAlpha(t.border, 0.75), color: t.textSecondary }
    }
    className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-[12px] font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${focusRing}`}
  >
    {children}
  </button>
);

/* -------------------------------------------------------------------------- */
/* formula deck                                                               */
/* -------------------------------------------------------------------------- */

type DeckFilter = 'all' | 'unseen' | 'review' | 'known';

const DeckView: React.FC<{ deck: FormulaDeck; base: string; t: ThemeConfig }> = ({ deck, base, t }) => {
  const [cat, setCat] = useState<string>('all');
  const [filter, setFilter] = useState<DeckFilter>('all');
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [marks, setMarks] = useState<Record<string, CardMark>>(() => readJson<Record<string, CardMark>>(MARK_KEY, {}));
  const [shuffled, setShuffled] = useState<FormulaCard[] | null>(null);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(false);
  const [browseQuery, setBrowseQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    writeJson(MARK_KEY, marks);
  }, [marks]);

  const catCards = useMemo(
    () => (cat === 'all' ? deck.cards : deck.cards.filter((c) => c.cat === cat)),
    [deck, cat],
  );

  const pool = useMemo(() => {
    const source = shuffled ?? catCards;
    const q = query.trim().toLowerCase();
    return source.filter((c) => {
      if (q && !(`${c.title} ${c.section}`.toLowerCase().includes(q))) return false;
      const mark = marks[c.id];
      if (filter === 'unseen') return !mark;
      if (filter === 'known') return mark === 'known';
      if (filter === 'review') return mark === 'review';
      return true;
    });
  }, [catCards, shuffled, query, filter, marks]);

  // Keep the cursor inside the pool whenever the filters change under it.
  useEffect(() => {
    setIndex((i) => (pool.length === 0 ? 0 : Math.min(i, pool.length - 1)));
  }, [pool.length]);

  useEffect(() => {
    setFlipped(false);
  }, [index, cat, filter, query]);

  // Warm the next crop so the flip never waits on the network.
  useEffect(() => {
    const upcoming = pool[(index + 1) % Math.max(1, pool.length)];
    if (!upcoming) return;
    const pre = new Image();
    pre.src = imageUrl(upcoming.img, base);
  }, [index, pool, base]);

  const card = pool[index] ?? null;

  const progress = useMemo(() => {
    let known = 0;
    let review = 0;
    catCards.forEach((c) => {
      if (marks[c.id] === 'known') known += 1;
      else if (marks[c.id] === 'review') review += 1;
    });
    return { total: catCards.length, known, review, unseen: catCards.length - known - review };
  }, [catCards, marks]);

  const goNext = useCallback(() => {
    if (pool.length === 0) return;
    setIndex((i) => (i + 1) % pool.length);
  }, [pool.length]);

  const goPrev = useCallback(() => {
    if (pool.length === 0) return;
    setIndex((i) => (i - 1 + pool.length) % pool.length);
  }, [pool.length]);

  const markCurrent = useCallback(
    (value: CardMark) => {
      if (!card) return;
      setMarks((prev) => ({ ...prev, [card.id]: value }));
      goNext();
    },
    [card, goNext],
  );

  const toggleShuffle = useCallback(() => {
    if (shuffled) {
      setShuffled(null);
      setIndex(0);
      return;
    }
    const copy = [...catCards];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    setShuffled(copy);
    setIndex(0);
  }, [catCards, shuffled]);

  const jumpTo = useCallback(
    (target: FormulaCard) => {
      const list = cat === target.cat ? catCards : deck.cards.filter((c) => c.cat === target.cat);
      setCat(target.cat);
      setShuffled(null);
      setQuery('');
      setFilter('all');
      setBrowseOpen(false);
      setFlipped(false);
      // Defer so the category switch lands first, then point at the row.
      window.setTimeout(() => {
        const at = list.findIndex((c) => c.id === target.id);
        setIndex(at >= 0 ? at : 0);
      }, 0);
    },
    [cat, catCards, deck.cards],
  );

  const copyLink = useCallback(async () => {
    if (!card) return;
    const url = `${CARD_SITE}/index.html#${card.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt('Copy this link', url);
    }
  }, [card]);

  /* keyboard ------------------------------------------------------------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) return;

      if (zoomOpen) {
        if (e.key === 'Escape') setZoomOpen(false);
        return;
      }
      if (browseOpen && e.key === 'Escape') {
        setBrowseOpen(false);
        return;
      }

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          setFlipped((f) => !f);
          break;
        case 'ArrowRight':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goPrev();
          break;
        case 'KeyK':
          markCurrent('known');
          break;
        case 'KeyR':
          markCurrent('review');
          break;
        case 'KeyS':
          toggleShuffle();
          break;
        case 'KeyB':
          setBrowseOpen((b) => !b);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, markCurrent, toggleShuffle, zoomOpen, browseOpen]);

  /* browse drawer data --------------------------------------------------- */
  const browseGroups = useMemo(() => {
    const q = browseQuery.trim().toLowerCase();
    const rows = q
      ? deck.cards.filter((c) => `${c.title} ${c.section}`.toLowerCase().includes(q))
      : deck.cards;
    const byCat = new Map<string, Map<string, FormulaCard[]>>();
    rows.forEach((c) => {
      if (!byCat.has(c.cat)) byCat.set(c.cat, new Map());
      const sections = byCat.get(c.cat)!;
      if (!sections.has(c.section)) sections.set(c.section, []);
      sections.get(c.section)!.push(c);
    });
    return Array.from(byCat.entries()).map(([catId, sections]) => ({
      catId,
      name: deck.categories[catId]?.name ?? catId,
      sections: Array.from(sections.entries()),
    }));
  }, [deck, browseQuery]);

  const onImgError = (e: React.SyntheticEvent<HTMLImageElement>, path: string) => {
    const img = e.currentTarget;
    const current = img.dataset.base || base;
    const next = fallbackImageUrl(path, current);
    if (!next) return;
    img.dataset.base = SOURCES[SOURCES.indexOf(current) + 1] ?? current;
    img.src = next;
  };

  return (
    <div className="space-y-3">
      {/* deck switcher ---------------------------------------------------- */}
      <div className="flex flex-wrap items-center gap-2">
        <Chip active={cat === 'all'} onClick={() => { setCat('all'); setShuffled(null); setIndex(0); }} t={t} count={deck.cards.length}>
          All decks
        </Chip>
        {Object.entries(deck.categories).map(([id, meta]) => (
          <Chip
            key={id}
            active={cat === id}
            onClick={() => { setCat(id); setShuffled(null); setIndex(0); }}
            t={t}
            count={deck.cards.filter((c) => c.cat === id).length}
            title={meta.blurb}
          >
            {meta.short}
          </Chip>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <GhostButton onClick={() => setBrowseOpen(true)} t={t} title="Browse sections (B)">
            <PanelRightOpen className="h-3.5 w-3.5" />
            Browse
          </GhostButton>
          <GhostButton onClick={toggleShuffle} t={t} active={Boolean(shuffled)} title="Shuffle (S)">
            <Shuffle className="h-3.5 w-3.5" />
            {shuffled ? 'Shuffled' : 'Shuffle'}
          </GhostButton>
        </div>
      </div>

      {/* filters + search -------------------------------------------------- */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-full border p-1" style={{ borderColor: withAlpha(t.border, 0.6) }}>
          {([
            ['all', 'All', progress.total],
            ['unseen', 'Unseen', progress.unseen],
            ['review', 'Review', progress.review],
            ['known', 'Known', progress.known],
          ] as [DeckFilter, string, number][]).map(([id, label, count]) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              style={filter === id ? { backgroundColor: t.accent, color: t.accentText } : { color: t.textMuted }}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${focusRing}`}
            >
              {label}
              <span className="ml-1 opacity-60 tabular-nums">{count}</span>
            </button>
          ))}
        </div>

        <div className="relative min-w-[180px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2" style={{ color: t.textMuted }} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics and sections…"
            className={`w-full rounded-full border py-2 pl-9 pr-8 text-[12px] outline-none transition-colors ${focusRing}`}
            style={{ backgroundColor: withAlpha(t.bgCardSubtle, 0.5), borderColor: withAlpha(t.border, 0.6), color: t.textPrimary }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1"
              style={{ color: t.textMuted }}
              aria-label="Clear search"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* progress rail ----------------------------------------------------- */}
      <div className="flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ backgroundColor: withAlpha(t.border, 0.35) }}>
          <div className="flex h-full">
            <div className="h-full transition-all duration-500" style={{ width: `${(progress.known / (progress.total || 1)) * 100}%`, backgroundColor: '#34d399' }} />
            <div className="h-full transition-all duration-500" style={{ width: `${(progress.review / (progress.total || 1)) * 100}%`, backgroundColor: '#fb7185' }} />
          </div>
        </div>
        <span className="shrink-0 text-[11px] tabular-nums" style={{ color: t.textMuted }}>
          {progress.known + progress.review}/{progress.total} marked
        </span>
      </div>

      {/* the card ---------------------------------------------------------- */}
      {pool.length === 0 || !card ? (
        <div className="rounded-3xl border p-14 text-center" style={glass(t)}>
          <BookOpen className="mx-auto mb-3 h-10 w-10" style={{ color: t.textMuted }} />
          <h3 className="text-base font-semibold" style={{ color: t.textPrimary }}>
            Nothing in this view
          </h3>
          <p className="mt-1 text-[12px]" style={{ color: t.textMuted }}>
            {query ? 'No card matches that search.' : 'Every card here is already marked. Nice work.'}
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <GhostButton onClick={() => { setFilter('all'); setQuery(''); }} t={t}>
              <RotateCcw className="h-3.5 w-3.5" />
              Reset filters
            </GhostButton>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-auto w-full max-w-4xl">
            <div style={{ perspective: '1800px' }}>
              <div
                className="relative w-full transition-transform duration-500 ease-out"
                style={{
                  aspectRatio: '16 / 10',
                  maxHeight: 'calc(100vh - 465px)',
                  minHeight: '280px',
                  transformStyle: 'preserve-3d',
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT — topic title */}
                <button
                  type="button"
                  onClick={() => setFlipped(true)}
                  className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[28px] border p-7 text-left transition-shadow ${focusRing}`}
                  style={{ ...glass(t, 0.82), backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-40 blur-3xl"
                    style={{ backgroundColor: withAlpha(t.accent, 0.55) }}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                      style={{ borderColor: withAlpha(t.border, 0.8), color: t.textMuted }}
                    >
                      {deck.categories[card.cat]?.short ?? card.cat}
                    </span>
                    <span className="text-[11px] tabular-nums" style={{ color: t.textMuted }}>
                      {index + 1} / {pool.length}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col items-center justify-center px-2 text-center">
                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: withAlpha(t.accent, 0.9) }}>
                      {card.section}
                    </div>
                    <h2
                      className="max-w-2xl text-balance text-2xl font-semibold leading-tight sm:text-3xl md:text-[34px]"
                      style={{ color: t.textPrimary, letterSpacing: '-0.02em' }}
                    >
                      {card.title}
                    </h2>
                  </div>

                  <div className="relative flex items-center justify-center gap-2 text-[11px]" style={{ color: t.textMuted }}>
                    <MousePointerClick className="h-3.5 w-3.5" />
                    Click or press <kbd className="rounded border px-1.5 py-0.5 text-[10px]" style={{ borderColor: withAlpha(t.border, 0.7) }}>Space</kbd> to reveal the formula
                  </div>
                </button>

                {/* BACK — the cropped formula */}
                <div
                  className="absolute inset-0 flex flex-col overflow-hidden rounded-[28px] border"
                  style={{
                    ...glass(t, 0.9),
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="flex items-center justify-between gap-2 border-b px-4 py-2.5" style={{ borderColor: withAlpha(t.border, 0.45) }}>
                    <span className="truncate text-[11px] font-semibold" style={{ color: t.textPrimary }}>
                      {card.title}
                    </span>
                    <div className="flex shrink-0 items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setZoomOpen(true)}
                        title="Zoom"
                        className="rounded-lg p-1.5 transition-colors hover:opacity-70"
                        style={{ color: t.textSecondary, backgroundColor: withAlpha(t.border, 0.22) }}
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setFlipped(false)}
                        title="Back to title"
                        className="rounded-lg p-1.5 transition-colors hover:opacity-70"
                        style={{ color: t.textSecondary, backgroundColor: withAlpha(t.border, 0.22) }}
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setZoomOpen(true)}
                    className="relative min-h-0 flex-1 overflow-hidden"
                    title="Click to zoom"
                  >
                    <img
                      src={imageUrl(card.img, base)}
                      alt={`${card.title} — ${card.section}`}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => onImgError(e, card.img)}
                      className="absolute inset-0 h-full w-full rounded-lg object-contain p-2 shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* controls -------------------------------------------------------- */}
          <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <GhostButton onClick={goPrev} t={t} title="Previous (←)">
                <ArrowLeft className="h-3.5 w-3.5" />
              </GhostButton>
              <GhostButton onClick={goNext} t={t} title="Next (→)">
                <ArrowRight className="h-3.5 w-3.5" />
              </GhostButton>
              <GhostButton onClick={copyLink} t={t} title="Copy a shareable link to this card">
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Link'}
              </GhostButton>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => markCurrent('review')}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2 text-[12px] font-semibold transition-all hover:-translate-y-px ${focusRing}`}
                style={{ borderColor: 'rgba(251,113,133,0.5)', backgroundColor: 'rgba(251,113,133,0.12)', color: '#fb7185' }}
                title="Still learning (R)"
              >
                <XCircle className="h-3.5 w-3.5" />
                Still learning
              </button>
              <button
                type="button"
                onClick={() => markCurrent('known')}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2 text-[12px] font-semibold transition-all hover:-translate-y-px ${focusRing}`}
                style={{ borderColor: 'rgba(52,211,153,0.5)', backgroundColor: 'rgba(52,211,153,0.14)', color: '#34d399' }}
                title="Got it (K)"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Got it
              </button>
            </div>
          </div>
        </>
      )}

      {/* zoom lightbox ------------------------------------------------------ */}
      {zoomOpen && card && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(3,5,12,0.88)', backdropFilter: 'blur(10px)' }}
          onClick={() => setZoomOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setZoomOpen(false)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-h-full w-full max-w-6xl text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={imageUrl(card.img, base)}
              alt={`${card.title} — ${card.section}`}
              onError={(e) => onImgError(e, card.img)}
              className="mx-auto max-h-[86vh] w-auto max-w-full rounded-2xl bg-white object-contain shadow-2xl"
            />
            <div className="mt-3 text-[12px] text-white/70">
              {deck.categories[card.cat]?.name ?? card.cat} · {card.section} · {card.title}
            </div>
          </div>
        </div>
      )}

      {/* browse drawer ------------------------------------------------------ */}
      {browseOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/45" onClick={() => setBrowseOpen(false)} />
          <div
            className="relative flex h-full w-full max-w-md flex-col border-l"
            style={{ backgroundColor: withAlpha(t.bgCard, 0.96), borderColor: t.border, backdropFilter: 'blur(24px)' }}
          >
            <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: withAlpha(t.border, 0.45) }}>
              <div className="flex items-center gap-2">
                <BookMarked className="h-4 w-4" style={{ color: t.accent }} />
                <span className="text-sm font-semibold" style={{ color: t.textPrimary }}>
                  Browse sections
                </span>
              </div>
              <button type="button" onClick={() => setBrowseOpen(false)} className="rounded-lg p-1.5 hover:opacity-70" style={{ color: t.textMuted }} aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-3">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2" style={{ color: t.textMuted }} />
                <input
                  value={browseQuery}
                  onChange={(e) => setBrowseQuery(e.target.value)}
                  placeholder="Filter all 971 cards…"
                  className={`w-full rounded-xl border py-2 pl-9 pr-3 text-[12px] outline-none ${focusRing}`}
                  style={{ backgroundColor: withAlpha(t.bgCardSubtle, 0.6), borderColor: withAlpha(t.border, 0.6), color: t.textPrimary }}
                />
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-6">
              {browseGroups.length === 0 && (
                <p className="px-1 py-8 text-center text-[12px]" style={{ color: t.textMuted }}>
                  No card matches “{browseQuery}”.
                </p>
              )}
              {browseGroups.map((group) => (
                <div key={group.catId} className="mb-4">
                  <div className="sticky top-0 z-10 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: t.accent, backgroundColor: withAlpha(t.bgCard, 0.96) }}>
                    {group.name}
                  </div>
                  {group.sections.map(([section, rows]) => (
                    <div key={section} className="mb-2">
                      <div className="px-1 py-1 text-[11px] font-semibold" style={{ color: t.textSecondary }}>
                        {section}
                        <span className="ml-1.5 font-normal" style={{ color: t.textMuted }}>
                          {rows.length}
                        </span>
                      </div>
                      {rows.map((row) => (
                        <button
                          key={row.id}
                          type="button"
                          onClick={() => jumpTo(row)}
                          className="group flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[12px] transition-colors"
                          style={{ color: t.textSecondary }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = withAlpha(t.accent, 0.12); }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                        >
                          <ChevronRight className="h-3 w-3 shrink-0 opacity-40" />
                          <span className="truncate">{row.title}</span>
                          {marks[row.id] === 'known' && <Check className="ml-auto h-3 w-3 shrink-0" style={{ color: '#34d399' }} />}
                          {marks[row.id] === 'review' && <X className="ml-auto h-3 w-3 shrink-0" style={{ color: '#fb7185' }} />}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* term quiz                                                                  */
/* -------------------------------------------------------------------------- */

type QuizMode = 'mcq' | 'cards';

function shuffle<T>(input: T[]): T[] {
  const copy = [...input];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const QuizView: React.FC<{ book: TermBook; t: ThemeConfig }> = ({ book, t }) => {
  const [mode, setMode] = useState<QuizMode>('mcq');
  const [cat, setCat] = useState<string>('all');
  const [seed, setSeed] = useState(0);

  /* ---------------- multiple choice ---------------- */
  const [order, setOrder] = useState<number[]>([]);
  const [pos, setPos] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const [missed, setMissed] = useState<number[]>([]);
  const advanceTimer = useRef<number | null>(null);

  const poolIdx = useMemo(
    () => book.items.map((_, i) => i).filter((i) => cat === 'all' || book.items[i].cat === cat),
    [book, cat],
  );

  useEffect(() => {
    setOrder(shuffle(poolIdx));
    setPos(0);
    setPicked(null);
    setScore({ right: 0, wrong: 0 });
    setMissed([]);
  }, [poolIdx, seed]);

  const currentIdx = order[pos];
  const current: TermItem | undefined = currentIdx !== undefined ? book.items[currentIdx] : undefined;

  const options = useMemo(() => {
    if (!current) return [] as string[];
    const near = (current.near ?? []).filter((i) => i !== currentIdx).slice(0, 12);
    const picks = shuffle(near).slice(0, 3).map((i) => book.items[i]?.t).filter(Boolean) as string[];
    const unique = Array.from(new Set(picks.filter((p) => p !== current.t)));
    while (unique.length < 3) {
      const cand = book.items[Math.floor(Math.random() * book.items.length)]?.t;
      if (cand && cand !== current.t && !unique.includes(cand)) unique.push(cand);
      else if (!cand) break;
    }
    return shuffle([current.t, ...unique.slice(0, 3)]);
  }, [current, currentIdx, book]);

  const answer = useCallback(
    (choice: string) => {
      if (!current || picked !== null) return;
      setPicked(options.indexOf(choice));
      if (choice === current.t) {
        setScore((s) => ({ ...s, right: s.right + 1 }));
        advanceTimer.current = window.setTimeout(() => {
          setPicked(null);
          setPos((p) => (p + 1 < order.length ? p + 1 : p));
        }, 750);
      } else {
        setScore((s) => ({ ...s, wrong: s.wrong + 1 }));
        setMissed((m) => (m.includes(currentIdx) ? m : [...m, currentIdx]));
      }
    },
    [current, picked, options, order.length, currentIdx],
  );

  useEffect(() => () => { if (advanceTimer.current) window.clearTimeout(advanceTimer.current); }, []);

  /* ---------------- flashcards ---------------- */
  const [queue, setQueue] = useState<number[]>([]);
  const [qpos, setQpos] = useState(0);
  const [dir, setDir] = useState<'term' | 'def'>('term');
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [review, setReview] = useState<Set<number>>(new Set());

  useEffect(() => {
    setQueue(shuffle(poolIdx));
    setQpos(0);
    setFlipped(false);
    setKnown(new Set());
    setReview(new Set());
  }, [poolIdx, seed]);

  const qIdx = queue[qpos];
  const qItem: TermItem | undefined = qIdx !== undefined ? book.items[qIdx] : undefined;

  const nextCard = useCallback(() => {
    setFlipped(false);
    setQpos((p) => (queue.length === 0 ? 0 : (p + 1) % queue.length));
  }, [queue.length]);

  const prevCard = useCallback(() => {
    setFlipped(false);
    setQpos((p) => (queue.length === 0 ? 0 : (p - 1 + queue.length) % queue.length));
  }, [queue.length]);

  const cardKnow = useCallback(() => {
    if (qIdx === undefined) return;
    setKnown((k) => new Set(k).add(qIdx));
    setReview((r) => { const n = new Set(r); n.delete(qIdx); return n; });
    setQueue((q) => {
      const copy = q.filter((_, i) => i !== qpos);
      return copy;
    });
    setQpos((p) => (p >= queue.length - 1 ? 0 : p));
    setFlipped(false);
  }, [qIdx, qpos, queue.length]);

  const cardDontKnow = useCallback(() => {
    if (qIdx === undefined) return;
    setReview((r) => new Set(r).add(qIdx));
    setQueue((q) => {
      const copy = [...q];
      const [moved] = copy.splice(qpos, 1);
      const target = Math.min(copy.length, qpos + 4);
      copy.splice(target, 0, moved);
      return copy;
    });
    setQpos((p) => (p + 1 < queue.length ? p + 1 : 0));
    setFlipped(false);
  }, [qIdx, qpos, queue.length]);

  /* ---------------- keyboard ---------------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) return;

      if (mode === 'mcq') {
        if (['Digit1', 'Digit2', 'Digit3', 'Digit4'].includes(e.code)) {
          const i = Number(e.code.slice(-1)) - 1;
          if (options[i]) answer(options[i]);
        } else if (e.code === 'Enter' && picked !== null) {
          setPicked(null);
          setPos((p) => (p + 1 < order.length ? p + 1 : p));
        }
        return;
      }

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          setFlipped((f) => !f);
          break;
        case 'ArrowRight':
          nextCard();
          break;
        case 'ArrowLeft':
          prevCard();
          break;
        case 'KeyK':
          cardKnow();
          break;
        case 'KeyX':
          cardDontKnow();
          break;
        case 'KeyM':
          setMode((m) => (m === 'mcq' ? 'cards' : 'mcq'));
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode, options, answer, picked, order.length, nextCard, prevCard, cardKnow, cardDontKnow]);

  const total = poolIdx.length;

  return (
    <div className="space-y-3">
      {/* mode + deck -------------------------------------------------------- */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 rounded-full border p-1" style={{ borderColor: withAlpha(t.border, 0.6) }}>
          {([['mcq', 'Multiple choice'], ['cards', 'Flashcards']] as [QuizMode, string][]).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              style={mode === id ? { backgroundColor: t.accent, color: t.accentText } : { color: t.textMuted }}
              className={`rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition-colors ${focusRing}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          {mode === 'mcq' ? (
            <span className="text-[11px] tabular-nums" style={{ color: t.textMuted }}>
              <span style={{ color: '#34d399' }}>{score.right}</span> right ·{' '}
              <span style={{ color: '#fb7185' }}>{score.wrong}</span> wrong
            </span>
          ) : (
            <span className="text-[11px] tabular-nums" style={{ color: t.textMuted }}>
              {known.size}/{total} known
            </span>
          )}
          <GhostButton onClick={() => setSeed((s) => s + 1)} t={t} title="New shuffled session">
            <RotateCcw className="h-3.5 w-3.5" />
            New set
          </GhostButton>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <Chip active={cat === 'all'} onClick={() => setCat('all')} t={t} count={book.items.length}>
          All decks
        </Chip>
        {book.cats.map((c) => (
          <Chip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)} t={t} count={c.count}>
            {c.name}
          </Chip>
        ))}
      </div>

      {/* MCQ --------------------------------------------------------------- */}
      {mode === 'mcq' && (
        <div className="mx-auto w-full max-w-3xl space-y-3">
          {!current ? (
            <div className="rounded-3xl border p-12 text-center" style={glass(t)}>
              <Sparkles className="mx-auto mb-3 h-9 w-9" style={{ color: t.accent }} />
              <h3 className="text-base font-semibold" style={{ color: t.textPrimary }}>
                Session complete
              </h3>
              <p className="mt-1 text-[12px]" style={{ color: t.textMuted }}>
                {score.right} right · {score.wrong} wrong
              </p>
              <div className="mt-4 flex justify-center">
                <GhostButton onClick={() => setSeed((s) => s + 1)} t={t}>
                  <RotateCcw className="h-3.5 w-3.5" />
                  Start a new set
                </GhostButton>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-[11px]" style={{ color: t.textMuted }}>
                <span className="rounded-full border px-2 py-0.5" style={{ borderColor: withAlpha(t.border, 0.7) }}>
                  {book.cats.find((c) => c.id === current.cat)?.name ?? current.cat} · {current.sec}
                </span>
                <span className="tabular-nums">
                  {pos + 1} / {order.length}
                </span>
              </div>

              <div className="rounded-3xl border p-6 sm:p-8" style={glass(t, 0.8)}>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: withAlpha(t.accent, 0.9) }}>
                  Which term matches this definition?
                </div>
                <p className="text-[15px] leading-relaxed sm:text-base" style={{ color: t.textPrimary }}>
                  {current.d}
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {options.map((opt, i) => {
                  const isCorrect = opt === current.t;
                  const isPicked = picked !== null && options[picked] === opt;
                  const revealed = picked !== null;
                  const bg = revealed && isCorrect
                    ? 'rgba(52,211,153,0.16)'
                    : isPicked
                      ? 'rgba(251,113,133,0.16)'
                      : withAlpha(t.bgCard, 0.7);
                  const border = revealed && isCorrect
                    ? 'rgba(52,211,153,0.65)'
                    : isPicked
                      ? 'rgba(251,113,133,0.65)'
                      : withAlpha(t.border, 0.65);
                  return (
                    <button
                      key={`${opt}-${i}`}
                      type="button"
                      onClick={() => answer(opt)}
                      disabled={revealed}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-[13px] font-medium transition-all duration-200 disabled:cursor-default ${revealed ? '' : 'hover:-translate-y-0.5'} ${focusRing}`}
                      style={{ backgroundColor: bg, borderColor: border, color: t.textPrimary }}
                    >
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold"
                        style={{ backgroundColor: withAlpha(t.border, 0.3), color: t.textSecondary }}
                      >
                        {i + 1}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {revealed && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: '#34d399' }} />}
                      {isPicked && !isCorrect && <XCircle className="h-4 w-4 shrink-0" style={{ color: '#fb7185' }} />}
                    </button>
                  );
                })}
              </div>

              {picked !== null && (
                <div className="flex items-center justify-between rounded-2xl border px-4 py-2.5" style={softPanel(t)}>
                  <span className="text-[12px]" style={{ color: t.textSecondary }}>
                    {options[picked] === current.t ? 'Correct — next card coming up.' : `The answer is “${current.t}”.`}
                  </span>
                  <GhostButton
                    onClick={() => { setPicked(null); setPos((p) => (p + 1 < order.length ? p + 1 : p)); }}
                    t={t}
                  >
                    Next
                    <ArrowRight className="h-3.5 w-3.5" />
                  </GhostButton>
                </div>
              )}
            </>
          )}

          {missed.length > 0 && (
            <div className="flex items-center gap-2 text-[11px]" style={{ color: t.textMuted }}>
              <HelpCircle className="h-3.5 w-3.5" />
              {missed.length} card{missed.length === 1 ? '' : 's'} filed into needs-review this session
            </div>
          )}
        </div>
      )}

      {/* flashcards -------------------------------------------------------- */}
      {mode === 'cards' && (
        <div className="mx-auto w-full max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1 rounded-full border p-1" style={{ borderColor: withAlpha(t.border, 0.6) }}>
              {([['term', 'Term → Definition'], ['def', 'Definition → Term']] as ['term' | 'def', string][]).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => { setDir(id); setFlipped(false); }}
                  style={dir === id ? { backgroundColor: t.accent, color: t.accentText } : { color: t.textMuted }}
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${focusRing}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <span className="text-[11px] tabular-nums" style={{ color: t.textMuted }}>
              {queue.length === 0 ? 0 : qpos + 1} / {queue.length} in deck
            </span>
          </div>

          {!qItem ? (
            <div className="rounded-3xl border p-12 text-center" style={glass(t)}>
              <CheckCircle2 className="mx-auto mb-3 h-10 w-10" style={{ color: '#34d399' }} />
              <h3 className="text-base font-semibold" style={{ color: t.textPrimary }}>
                Deck cleared
              </h3>
              <p className="mt-1 text-[12px]" style={{ color: t.textMuted }}>
                You marked all {known.size} cards as known.
              </p>
              <div className="mt-4 flex justify-center">
                <GhostButton onClick={() => setSeed((s) => s + 1)} t={t}>
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reload deck
                </GhostButton>
              </div>
            </div>
          ) : (
            <>
              <div style={{ perspective: '1800px' }}>
                <div
                  className="relative w-full transition-transform duration-500 ease-out"
                  style={{
                    aspectRatio: '16 / 9',
                    maxHeight: 'calc(100vh - 465px)',
                    minHeight: '280px',
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {([0, 1] as const).map((face) => {
                    const front = dir === 'term' ? qItem.t : qItem.d;
                    const back = dir === 'term' ? qItem.d : qItem.t;
                    const text = face === 0 ? front : back;
                    const label = face === 0
                      ? (dir === 'term' ? 'Term' : 'Definition')
                      : (dir === 'term' ? 'Definition' : 'Term');
                    return (
                      <button
                        key={face}
                        type="button"
                        onClick={() => setFlipped((f) => !f)}
                        className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[28px] border p-7 text-left ${focusRing}`}
                        style={{
                          ...glass(t, face === 0 ? 0.8 : 0.9),
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: face === 1 ? 'rotateY(180deg)' : undefined,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ borderColor: withAlpha(t.border, 0.8), color: t.textMuted }}>
                            {label}
                          </span>
                          {review.has(qIdx) && (
                            <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: 'rgba(251,113,133,0.16)', color: '#fb7185' }}>
                              needs review
                            </span>
                          )}
                        </div>
                        <div className="flex flex-1 items-center justify-center px-2 text-center">
                          <p
                            className={`text-balance ${face === 0 && dir === 'term' ? 'text-2xl font-semibold sm:text-3xl' : 'text-[15px] leading-relaxed sm:text-lg'}`}
                            style={{ color: t.textPrimary, letterSpacing: face === 0 && dir === 'term' ? '-0.02em' : undefined }}
                          >
                            {text}
                          </p>
                        </div>
                        <div className="text-center text-[11px]" style={{ color: t.textMuted }}>
                          {face === 0 ? 'Click or Space to flip' : qItem.sec}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <GhostButton onClick={prevCard} t={t} title="Previous (←)">
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </GhostButton>
                  <GhostButton onClick={nextCard} t={t} title="Next (→)">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </GhostButton>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={cardDontKnow}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2 text-[12px] font-semibold transition-all hover:-translate-y-px ${focusRing}`}
                    style={{ borderColor: 'rgba(251,113,133,0.5)', backgroundColor: 'rgba(251,113,133,0.12)', color: '#fb7185' }}
                    title="Don't know (X)"
                  >
                    <XCircle className="h-3.5 w-3.5" />
                    Don&apos;t know
                  </button>
                  <button
                    type="button"
                    onClick={cardKnow}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2 text-[12px] font-semibold transition-all hover:-translate-y-px ${focusRing}`}
                    style={{ borderColor: 'rgba(52,211,153,0.5)', backgroundColor: 'rgba(52,211,153,0.14)', color: '#34d399' }}
                    title="Know (K)"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Know
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* glossary                                                                   */
/* -------------------------------------------------------------------------- */

const PAGE_SIZE = 150;

const GlossaryView: React.FC<{ book: TermBook; t: ThemeConfig }> = ({ book, t }) => {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');
  const [limit, setLimit] = useState(PAGE_SIZE);

  useEffect(() => { setLimit(PAGE_SIZE); }, [query, cat]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return book.items.filter((item) => {
      if (cat !== 'all' && item.cat !== cat) return false;
      if (!q) return true;
      return `${item.t} ${item.d} ${item.sec}`.toLowerCase().includes(q);
    });
  }, [book, query, cat]);

  const shown = rows.slice(0, limit);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2" style={{ color: t.textMuted }} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${book.items.length} terms and definitions…`}
            className={`w-full rounded-full border py-2 pl-9 pr-8 text-[12px] outline-none ${focusRing}`}
            style={{ backgroundColor: withAlpha(t.bgCardSubtle, 0.5), borderColor: withAlpha(t.border, 0.6), color: t.textPrimary }}
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1" style={{ color: t.textMuted }} aria-label="Clear search">
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
        <span className="text-[11px] tabular-nums" style={{ color: t.textMuted }}>
          {rows.length} result{rows.length === 1 ? '' : 's'}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <Chip active={cat === 'all'} onClick={() => setCat('all')} t={t} count={book.items.length}>All</Chip>
        {book.cats.map((c) => (
          <Chip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)} t={t} count={c.count}>{c.name}</Chip>
        ))}
      </div>

      <div className="divide-y overflow-hidden rounded-2xl border" style={{ borderColor: withAlpha(t.border, 0.5), backgroundColor: withAlpha(t.bgCard, 0.55) }}>
        {shown.map((item) => (
          <div key={item.i} className="px-4 py-3" style={{ borderColor: withAlpha(t.border, 0.3) }}>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-[13px] font-semibold" style={{ color: t.textPrimary }}>{item.t}</span>
              <span className="rounded-full px-2 py-0.5 text-[10px]" style={{ backgroundColor: withAlpha(t.border, 0.25), color: t.textMuted }}>
                {book.cats.find((c) => c.id === item.cat)?.name ?? item.cat} · {item.sec}
              </span>
            </div>
            <p className="mt-1 text-[12px] leading-relaxed" style={{ color: t.textSecondary }}>{item.d}</p>
          </div>
        ))}
        {rows.length === 0 && (
          <p className="px-4 py-10 text-center text-[12px]" style={{ color: t.textMuted }}>No term matches “{query}”.</p>
        )}
      </div>

      {limit < rows.length && (
        <div className="flex justify-center">
          <GhostButton onClick={() => setLimit((l) => l + PAGE_SIZE)} t={t}>
            Show {Math.min(PAGE_SIZE, rows.length - limit)} more
          </GhostButton>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* hub                                                                        */
/* -------------------------------------------------------------------------- */

type Tab = 'deck' | 'quiz' | 'glossary';

export const FormulaCardsHub: React.FC = () => {
  const { themeConfig: t } = useTheme();

  const [tab, setTab] = useState<Tab>('deck');
  const [deck, setDeck] = useState<FormulaDeck | null>(null);
  const [book, setBook] = useState<TermBook | null>(null);
  const [base, setBase] = useState<string>(CARD_SITE);
  const [syncedAt, setSyncedAt] = useState<number | null>(null);
  const [status, setStatus] = useState<'loading' | 'syncing' | 'ready' | 'offline' | 'error'>('loading');
  const [tick, setTick] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setStatus((s) => (s === 'ready' ? 'syncing' : 'loading'));
    setError(null);

    (async () => {
      try {
        const [deckResult, bookResult] = await Promise.all([
          loadFormulaDeck({
            force: tick > 0,
            onCached: (r) => {
              if (!alive) return;
              setDeck(r.data);
              setBase(r.base);
              setSyncedAt(r.at);
            },
          }),
          loadTermBook({
            force: tick > 0,
            onCached: (r) => {
              if (alive) setBook(r.data);
            },
          }),
        ]);
        if (!alive) return;
        setDeck(deckResult.data);
        setBook(bookResult.data);
        setBase(deckResult.base);
        setSyncedAt(deckResult.at);
        setStatus(
          deckResult.source === 'cache-fallback' || bookResult.source === 'cache-fallback' ? 'offline' : 'ready',
        );
      } catch (err) {
        if (!alive) return;
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Could not reach the formula deck');
      }
    })();

    return () => { alive = false; };
  }, [tick]);

  const tabs: { id: Tab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'deck', label: 'Formula Deck', icon: <Layers className="h-3.5 w-3.5" />, badge: deck ? String(deck.cards.length) : undefined },
    { id: 'quiz', label: 'Term Quiz', icon: <HelpCircle className="h-3.5 w-3.5" />, badge: book ? String(book.items.length) : undefined },
    { id: 'glossary', label: 'Glossary', icon: <BookOpen className="h-3.5 w-3.5" /> },
  ];

  const ready = Boolean(deck && book);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
      {/* header ------------------------------------------------------------- */}
      <div className="mb-5 overflow-hidden rounded-[26px] border" style={glass(t, 0.7)}>
        <div className="relative px-5 py-4 sm:px-6">
          <div
            className="pointer-events-none absolute -right-10 -top-24 h-56 w-56 rounded-full opacity-50 blur-3xl"
            style={{ backgroundColor: withAlpha(t.accent, 0.45) }}
          />
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border"
                style={{ backgroundColor: withAlpha(t.accent, 0.16), borderColor: withAlpha(t.accent, 0.4) }}
              >
                <Layers className="h-5 w-5" style={{ color: t.accent }} />
              </div>
              <div>
                <h1 className="text-lg font-semibold sm:text-xl" style={{ color: t.textPrimary, letterSpacing: '-0.02em' }}>
                  Formula Deck &amp; Term Quiz
                </h1>
                <p className="mt-0.5 text-[12px]" style={{ color: t.textMuted }}>
                  {deck ? `${deck.cards.length} formula cards` : 'Formula cards'} ·{' '}
                  {book ? `${book.items.length} terms` : 'terms'} · live from{' '}
                  <span style={{ color: t.textSecondary }}>{CARD_REPO}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px]"
                style={{ borderColor: withAlpha(t.border, 0.6), color: t.textSecondary, backgroundColor: withAlpha(t.bgCardSubtle, 0.4) }}
                title={`Content is read from ${base}`}
              >
                {status === 'offline' ? (
                  <CloudOff className="h-3.5 w-3.5" style={{ color: '#fbbf24' }} />
                ) : status === 'loading' || status === 'syncing' ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" style={{ color: t.accent }} />
                ) : (
                  <CloudDownload className="h-3.5 w-3.5" style={{ color: '#34d399' }} />
                )}
                <span>
                  {status === 'offline' && 'Offline copy'}
                  {status === 'loading' && 'Connecting…'}
                  {status === 'syncing' && 'Syncing…'}
                  {(status === 'ready' || status === 'error') && syncedAt && `Synced ${formatSyncedAt(syncedAt)}`}
                </span>
                <span className="opacity-50">·</span>
                <span className="opacity-80">{sourceLabel(base)}</span>
              </div>

              <button
                type="button"
                onClick={() => setTick((v) => v + 1)}
                disabled={status === 'syncing' || status === 'loading'}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors disabled:opacity-50 ${focusRing}`}
                style={{ borderColor: withAlpha(t.border, 0.6), color: t.textSecondary }}
                title="Check the repo for a newer copy"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${status === 'syncing' ? 'animate-spin' : ''}`} />
                Sync
              </button>

              <a
                href={CARD_SITE}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors hover:opacity-80 ${focusRing}`}
                style={{ borderColor: withAlpha(t.accent, 0.5), color: t.accent, backgroundColor: withAlpha(t.accent, 0.1) }}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Standalone
              </a>
            </div>
          </div>
        </div>

        {/* tab bar */}
        <div className="flex items-center gap-1 overflow-x-auto border-t px-3 py-2" style={{ borderColor: withAlpha(t.border, 0.4) }}>
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              style={tab === item.id ? { backgroundColor: withAlpha(t.accent, 0.16), color: t.accent } : { color: t.textMuted }}
              className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-[12px] font-semibold transition-colors ${focusRing}`}
            >
              {item.icon}
              {item.label}
              {item.badge && (
                <span className="hidden text-[10px] tabular-nums opacity-60 sm:inline">{item.badge}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* body --------------------------------------------------------------- */}
      {status === 'error' && !ready ? (
        <div className="rounded-3xl border p-12 text-center" style={glass(t)}>
          <AlertTriangle className="mx-auto mb-3 h-10 w-10" style={{ color: '#fbbf24' }} />
          <h3 className="text-base font-semibold" style={{ color: t.textPrimary }}>
            Could not load the formula deck
          </h3>
          <p className="mx-auto mt-1 max-w-md text-[12px]" style={{ color: t.textMuted }}>
            {error}. Check that {CARD_SITE} is reachable, then retry.
          </p>
          <div className="mt-4 flex justify-center">
            <GhostButton onClick={() => setTick((v) => v + 1)} t={t}>
              <RefreshCw className="h-3.5 w-3.5" />
              Retry
            </GhostButton>
          </div>
        </div>
      ) : !ready ? (
        <div className="rounded-3xl border p-14 text-center" style={glass(t)}>
          <Loader2 className="mx-auto mb-3 h-9 w-9 animate-spin" style={{ color: t.accent }} />
          <p className="text-[12px]" style={{ color: t.textMuted }}>
            Pulling {`${'the'} deck`} from {sourceLabel(base)}…
          </p>
        </div>
      ) : (
        <>
          {tab === 'deck' && <DeckView deck={deck!} base={base} t={t} />}
          {tab === 'quiz' && <QuizView book={book!} t={t} />}
          {tab === 'glossary' && <GlossaryView book={book!} t={t} />}
        </>
      )}
    </div>
  );
};

export default FormulaCardsHub;
