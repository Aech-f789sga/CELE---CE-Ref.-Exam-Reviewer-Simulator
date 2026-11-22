/**
 * The door to multiplayer: create a room, or join one.
 *
 * Kept as a single screen with two tabs rather than a wizard. The setup form is
 * long but it is one decision per row, and a wizard would hide the shape of what
 * you are about to host behind three Next buttons — a host usually knows they
 * want "a Co-op drill on Statics, 20 items" before they open this.
 *
 * ## What the host cannot choose, and why
 *
 * Unkeyed topics are not offered (see `livePaper.ts`), and a Versus room needs
 * at least two players before it can start. Both are enforced here rather than
 * discovered later, because a room that opens and then cannot produce a score
 * is worse than a button that was never enabled.
 */
import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Globe,
  KeyRound,
  Loader2,
  Lock,
  Plus,
  RefreshCw,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  createRoom,
  joinRoom,
  listPublicRooms,
  pruneMyStaleRooms,
  RoomError,
} from '../services/liveRooms';
import {
  isValidRoomCode,
  roomTitle,
  type LiveRoom,
  type RoomConfig,
  type RoomMode,
  type RoomVisibility,
} from '../data/liveRoom';
import { availablePapers, expectedItemCount, playableTopics, topicIsUnkeyed } from '../data/livePaper';
import { TOPICS, topicCount } from '../data/topicBanks';
import { ALL_MONTHS, ALL_YEARS } from '../data/questionBankManager';
import type { ExamMonth, ReferenceSource, SubjectArea } from '../types/exam';

interface Props {
  onJoined: (code: string, room: LiveRoom) => void;
  onExit: () => void;
}

const SUBJECTS: SubjectArea[] = ['MSTC', 'HPGE', 'PSAD'];
const SOURCES: ReferenceSource[] = ['Gillesania', 'Besavilla'];
const DURATIONS = [
  { label: '15 min', seconds: 15 * 60 },
  { label: '30 min', seconds: 30 * 60 },
  { label: '45 min', seconds: 45 * 60 },
  { label: '60 min', seconds: 60 * 60 },
  { label: 'No clock', seconds: 0 },
];

function defaultConfig(): RoomConfig {
  return {
    kind: 'drill',
    topicIds: [],
    perTopic: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'May',
    source: 'Gillesania',
    surprise: false,
    itemCount: 0,
    durationSeconds: 30 * 60,
  };
}

export function LiveHub({ onJoined, onExit }: Props) {
  const { user, profile } = useAuth();
  const [tab, setTab] = useState<'create' | 'join'>('create');

  const [mode, setMode] = useState<RoomMode>('coop');
  const [visibility, setVisibility] = useState<RoomVisibility>('private');
  const [config, setConfig] = useState<RoomConfig>(defaultConfig);

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [code, setCode] = useState('');
  const [publicRooms, setPublicRooms] = useState<LiveRoom[]>([]);
  const [loadingRooms, setLoadingRooms] = useState(false);

  const uid = user?.uid;
  const name = profile?.displayName || user?.displayName || user?.email || 'Reviewee';

  const topics = useMemo(() => playableTopics(), []);
  const papers = useMemo(() => availablePapers(config.subject, config.source), [config.subject, config.source]);

  const loadPublic = async () => {
    setLoadingRooms(true);
    try {
      setPublicRooms(await listPublicRooms());
    } finally {
      setLoadingRooms(false);
    }
  };

  useEffect(() => {
    if (tab !== 'join') return;
    void loadPublic();
  }, [tab]);

  useEffect(() => {
    // Opportunistic housekeeping, once per mount. See `pruneMyStaleRooms`.
    if (uid) void pruneMyStaleRooms(uid);
  }, [uid]);

  const patch = (next: Partial<RoomConfig>) => setConfig((cur) => ({ ...cur, ...next }));

  const toggleTopic = (id: string) => {
    setConfig((cur) => ({
      ...cur,
      topicIds: cur.topicIds.includes(id)
        ? cur.topicIds.filter((t) => t !== id)
        : [...cur.topicIds, id],
    }));
  };

  const drawCount = expectedItemCount(config);
  const canCreate =
    !busy &&
    Boolean(uid) &&
    (config.kind === 'drill' ? config.surprise || config.topicIds.length > 0 : true) &&
    drawCount > 0;

  const handleCreate = async () => {
    if (!uid || !canCreate) return;
    setBusy(true);
    setError(null);
    try {
      const created = await createRoom({
        config: { ...config, itemCount: drawCount },
        mode,
        visibility,
        host: { uid, name, photoURL: profile?.photoURL },
      });
      const room = await joinRoom(created, { uid, name, photoURL: profile?.photoURL });
      onJoined(created, room);
    } catch (e) {
      setError(e instanceof RoomError ? e.message : 'Could not create the room.');
    } finally {
      setBusy(false);
    }
  };

  const handleJoin = async (target: string) => {
    if (!uid) return;
    const normalised = target.trim().toUpperCase();
    if (!isValidRoomCode(normalised)) {
      setError('A room code is four characters, mixing letters and numbers.');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const room = await joinRoom(normalised, { uid, name, photoURL: profile?.photoURL });
      onJoined(normalised, room);
    } catch (e) {
      setError(e instanceof RoomError ? e.message : 'Could not join that room.');
    } finally {
      setBusy(false);
    }
  };

  if (!uid) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center">
        <Users className="mx-auto h-9 w-9 text-slate-600" />
        <h2 className="mt-3 font-arnie text-lg font-bold text-white">Sign in to play</h2>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-400">
          A room shows everyone's profile at the end, so players need an account. Sign in and come
          back to this tab.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onExit}
          className="flex items-center gap-1.5 rounded-xl border border-slate-800 px-3 py-1.5 text-[11.5px] font-semibold text-slate-400 transition-colors hover:border-slate-700 hover:text-white cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>
        <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900 p-1">
          {(['create', 'join'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTab(t);
                setError(null);
              }}
              className={`rounded-lg px-3.5 py-1.5 text-[11.5px] font-bold capitalize transition-colors cursor-pointer ${
                tab === t ? 'bg-amber-500 text-amber-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t === 'create' ? 'Host a room' : 'Join a room'}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-3.5 py-2.5 text-[12px] text-rose-200">
          {error}
        </div>
      )}

      {tab === 'create' ? (
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          {/* Mode */}
          <section>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Mode</h3>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <ModeCard
                active={mode === 'coop'}
                onClick={() => setMode('coop')}
                icon={<Users className="h-4 w-4" />}
                title="Co-op"
                blurb="One paper, one score. Everyone scatters across the items and the most-picked choice becomes the team's answer."
              />
              <ModeCard
                active={mode === 'versus'}
                onClick={() => setMode('versus')}
                icon={<Zap className="h-4 w-4" />}
                title="Versus"
                blurb="Same paper, separate scores. You can see which items your opponent has already answered — not what they picked."
              />
            </div>
          </section>

          {/* Visibility */}
          <section>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Who can join
            </h3>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <ModeCard
                active={visibility === 'private'}
                onClick={() => setVisibility('private')}
                icon={<Lock className="h-4 w-4" />}
                title="Private"
                blurb="Only people with the four-character code can get in."
              />
              <ModeCard
                active={visibility === 'public'}
                onClick={() => setVisibility('public')}
                icon={<Globe className="h-4 w-4" />}
                title="Public"
                blurb="Listed for anyone to join while the lobby is open."
              />
            </div>
          </section>

          {/* What to sit */}
          <section>
            <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                What you are sitting
              </h3>
              <button
                type="button"
                onClick={() => patch({ surprise: !config.surprise })}
                className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition-colors cursor-pointer ${
                  config.surprise
                    ? 'border-fuchsia-500/50 bg-fuchsia-500/15 text-fuchsia-200'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Surprise me
              </button>
            </div>

            <div className="mt-2 flex gap-1.5">
              {(['drill', 'paper'] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => patch({ kind: k })}
                  className={`rounded-lg border px-3 py-1.5 text-[11.5px] font-bold transition-colors cursor-pointer ${
                    config.kind === k
                      ? 'border-amber-500/60 bg-amber-500/15 text-amber-200'
                      : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {k === 'drill' ? 'By topics drill' : 'Board sitting'}
                </button>
              ))}
            </div>

            {config.kind === 'drill' ? (
              <div className="mt-3 space-y-3">
                {config.surprise ? (
                  <p className="rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-2 text-[11.5px] text-fuchsia-100">
                    The topics and the items will be drawn at random when you start. Three topics are
                    picked from the keyed banks.
                  </p>
                ) : (
                  <div className="grid gap-1.5 sm:grid-cols-2">
                    {topics.map((t) => {
                      const on = config.topicIds.includes(t.id);
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => toggleTopic(t.id)}
                          aria-pressed={on}
                          className={`flex items-center justify-between gap-2 rounded-lg border px-2.5 py-2 text-left text-[11.5px] transition-colors cursor-pointer ${
                            on
                              ? 'border-amber-500/60 bg-amber-500/15 text-amber-100'
                              : 'border-slate-800 bg-slate-950/50 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span className="font-medium">{t.name}</span>
                          <span className="font-tech-mono text-[10px] text-slate-500">
                            {topicCount(t.id)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                <label className="flex items-center gap-2 text-[11.5px] text-slate-400">
                  Items per topic
                  <input
                    type="number"
                    min={1}
                    max={40}
                    value={config.perTopic}
                    onChange={(e) => patch({ perTopic: Math.max(1, Math.min(40, Number(e.target.value) || 1)) })}
                    className="w-16 rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-1 text-[11.5px] text-white focus:border-amber-500/50 focus:outline-none"
                  />
                </label>
              </div>
            ) : (
              <div className="mt-3 space-y-2.5">
                <div className="flex flex-wrap gap-1.5">
                  {SUBJECTS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => patch({ subject: s })}
                      className={`rounded-lg border px-2.5 py-1.5 text-[11.5px] font-bold transition-colors cursor-pointer ${
                        config.subject === s
                          ? 'border-amber-500/60 bg-amber-500/15 text-amber-200'
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                  <span className="mx-1 w-px bg-slate-800" />
                  {SOURCES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => patch({ source: s })}
                      className={`rounded-lg border px-2.5 py-1.5 text-[11.5px] font-semibold transition-colors cursor-pointer ${
                        config.source === s
                          ? 'border-cyan-500/60 bg-cyan-500/15 text-cyan-200'
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {config.surprise ? (
                  <p className="rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-2 text-[11.5px] text-fuchsia-100">
                    A paper from {config.subject} · {config.source} is chosen at random when you start.
                    A sitting is one fixed set of items, so the area is the only thing to randomise.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    <select
                      value={config.year}
                      onChange={(e) => patch({ year: Number(e.target.value) })}
                      className="rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-1.5 text-[11.5px] text-white focus:border-amber-500/50 focus:outline-none"
                    >
                      {ALL_YEARS.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                    <select
                      value={config.month}
                      onChange={(e) => patch({ month: e.target.value as ExamMonth })}
                      className="rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-1.5 text-[11.5px] text-white focus:border-amber-500/50 focus:outline-none"
                    >
                      {ALL_MONTHS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                    {papers.length > 0 && (
                      <span className="self-center text-[10.5px] text-slate-500">
                        {papers.length} paper{papers.length === 1 ? '' : 's'} available for this area
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Clock */}
          <section>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Clock
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {DURATIONS.map((d) => (
                <button
                  key={d.seconds}
                  type="button"
                  onClick={() => patch({ durationSeconds: d.seconds })}
                  className={`rounded-lg border px-2.5 py-1.5 text-[11.5px] font-semibold transition-colors cursor-pointer ${
                    config.durationSeconds === d.seconds
                      ? 'border-amber-500/60 bg-amber-500/15 text-amber-200'
                      : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">
            <p className="text-[11.5px] text-slate-400">
              {drawCount > 0 ? (
                <>
                  <strong className="text-white">{drawCount}</strong> items ·{' '}
                  {mode === 'coop' ? 'Co-op' : 'Versus'} ·{' '}
                  {visibility === 'private' ? 'code only' : 'public'}
                </>
              ) : (
                'Pick at least one topic to see the paper size.'
              )}
            </p>
            <button
              type="button"
              onClick={() => void handleCreate()}
              disabled={!canCreate}
              className="flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-[12px] font-bold text-amber-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
            >
              {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
              Open the room
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="flex items-center gap-2 font-arnie text-base font-bold text-white">
              <KeyRound className="h-4 w-4 text-amber-400" />
              Join with a code
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase().slice(0, 4))}
                placeholder="K7Q2"
                maxLength={4}
                className="w-32 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-center font-tech-mono text-lg font-bold tracking-[0.3em] text-white placeholder:text-slate-700 focus:border-amber-500/50 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => void handleJoin(code)}
                disabled={busy || code.length !== 4}
                className="rounded-xl bg-amber-500 px-4 py-2 text-[12px] font-bold text-amber-950 transition-colors hover:bg-amber-400 disabled:opacity-50 cursor-pointer"
              >
                {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : 'Join'}
              </button>
            </div>
            <p className="mt-2 text-[10.5px] text-slate-500">
              Codes never use 0, O, 1, I, L, 5 or 2, so a code read aloud cannot be mistyped.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-arnie text-base font-bold text-white">
                <Globe className="h-4 w-4 text-cyan-400" />
                Public rooms
              </h3>
              <button
                type="button"
                onClick={() => void loadPublic()}
                disabled={loadingRooms}
                className="flex items-center gap-1.5 rounded-lg border border-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-400 hover:text-white cursor-pointer"
              >
                <RefreshCw className={`h-3 w-3 ${loadingRooms ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>

            {publicRooms.length === 0 ? (
              <p className="mt-3 rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-6 text-center text-[11.5px] text-slate-500">
                {loadingRooms ? 'Looking…' : 'No public rooms waiting right now.'}
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {publicRooms.map((room) => (
                  <li
                    key={room.code}
                    className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2"
                  >
                    <span className="rounded-lg bg-slate-800 px-2 py-0.5 font-tech-mono text-[12px] font-bold tracking-widest text-white">
                      {room.code}
                    </span>
                    <span className="text-[11.5px] text-slate-300">{roomTitle(room)}</span>
                    <span className="text-[10.5px] text-slate-500">hosted by {room.hostName}</span>
                    <button
                      type="button"
                      onClick={() => void handleJoin(room.code)}
                      disabled={busy}
                      className="ml-auto rounded-lg border border-amber-500/50 bg-amber-500/15 px-2.5 py-1 text-[11px] font-bold text-amber-200 hover:bg-amber-500/25 disabled:opacity-50 cursor-pointer"
                    >
                      Join
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ModeCard({
  active,
  onClick,
  icon,
  title,
  blurb,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  blurb: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-xl border p-3 text-left transition-colors cursor-pointer ${
        active
          ? 'border-amber-500/60 bg-amber-500/10'
          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
      }`}
    >
      <span className={`flex items-center gap-1.5 text-[12px] font-bold ${active ? 'text-amber-200' : 'text-slate-200'}`}>
        {icon}
        {title}
      </span>
      <span className="mt-1 block text-[11px] leading-relaxed text-slate-400">{blurb}</span>
    </button>
  );
}

/** Re-exported so the lobby can name a topic without importing the bank twice. */
export function topicName(topicId: string): string {
  return TOPICS.find((t) => t.id === topicId)?.name ?? topicId;
}

/** True when the topic is in the bank but has no printed key. */
export { topicIsUnkeyed };
