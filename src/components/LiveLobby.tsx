/**
 * The waiting room.
 *
 * Everything here is about *agreement*: who is here, what they are about to
 * sit, and when it starts. The host is the only one who can start, and the
 * paper is drawn at that moment rather than when the room was created — so a
 * host who spends two minutes choosing topics still gets a fresh draw, and a
 * "surprise" room is not decided before everyone has arrived.
 */
import { useState } from 'react';
import { Check, Copy, Loader2, LogOut, Play, Users, Wifi } from 'lucide-react';
import { leaveRoom, startRoom } from '../services/liveRooms';
import { buildLivePaper, expectedItemCount } from '../data/livePaper';
import { isPlayerStale, roomTitle, type LivePlayer, type LiveRoom } from '../data/liveRoom';
import { topicName } from './LiveHub';

interface Props {
  room: LiveRoom;
  players: LivePlayer[];
  uid: string;
  onLeave: () => void;
}

export function LiveLobby({ room, players, uid, onLeave }: Props) {
  const [starting, setStarting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isHost = room.hostId === uid;
  const draw = expectedItemCount(room.config);
  const activePlayers = players.filter((p) => !isPlayerStale(p));
  const canStart = isHost && activePlayers.length >= (room.mode === 'versus' ? 2 : 1);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(room.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked; the code is on screen anyway */
    }
  };

  const handleStart = async () => {
    if (!canStart || starting) return;
    setStarting(true);
    setError(null);
    try {
      const paper = buildLivePaper(room.config);
      if (paper.length === 0) {
        setError('That configuration draws no items. Try another topic or paper.');
        return;
      }
      await startRoom(room.code, paper.map((q) => q.id), room.config.durationSeconds);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not start the room.');
    } finally {
      setStarting(false);
    }
  };

  const handleLeave = async () => {
    await leaveRoom(room.code, uid, isHost, room.phase);
    onLeave();
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              {room.visibility === 'public' ? 'Public room' : 'Private room'}
            </p>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="font-tech-mono text-3xl font-black tracking-[0.28em] text-white">
                {room.code}
              </span>
              <button
                type="button"
                onClick={() => void copyCode()}
                title="Copy the code"
                className="rounded-lg border border-slate-700 p-1.5 text-slate-400 transition-colors hover:border-slate-600 hover:text-white cursor-pointer"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <p className="mt-1 text-[11.5px] text-slate-400">
              {copied ? 'Copied — send it to whoever is joining.' : 'Share this code to let others in.'}
            </p>
          </div>

          <div className="text-right">
            <p className="font-arnie text-base font-bold text-white">{roomTitle(room)}</p>
            <p className="mt-0.5 text-[11.5px] text-slate-400">
              {draw} items ·{' '}
              {room.config.durationSeconds > 0
                ? `${Math.round(room.config.durationSeconds / 60)} min`
                : 'no clock'}
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              {room.config.kind === 'drill'
                ? room.config.surprise
                  ? 'Topics drawn at random'
                  : room.config.topicIds.map(topicName).join(' · ')
                : `${room.config.subject} · ${room.config.month} ${room.config.year} · ${room.config.source}`}
            </p>
          </div>
        </div>

        {room.mode === 'coop' && (
          <p className="mt-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-[11.5px] leading-relaxed text-cyan-100">
            Co-op: you all share one paper. Split up across the items — whoever gets there first
            answers it, and if two of you disagree the choice with the most picks wins.
          </p>
        )}
        {room.mode === 'versus' && (
          <p className="mt-4 rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-2 text-[11.5px] leading-relaxed text-fuchsia-100">
            Versus: same paper, your own score. You will see which items your opponent has answered
            as you go, but never what they picked.
          </p>
        )}
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="flex items-center gap-2 font-arnie text-base font-bold text-white">
          <Users className="h-4 w-4 text-emerald-400" />
          Players
          <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 font-tech-mono text-[10px] text-slate-300">
            {activePlayers.length}
          </span>
        </h3>

        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {players.map((p) => {
            const stale = isPlayerStale(p);
            return (
              <li
                key={p.uid}
                className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 ${
                  stale ? 'border-slate-800/60 bg-slate-950/30 opacity-60' : 'border-slate-800 bg-slate-950/50'
                }`}
              >
                {p.photoURL ? (
                  <img src={p.photoURL} alt="" className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-[12px] font-bold text-slate-300">
                    {p.name.slice(0, 1).toUpperCase()}
                  </span>
                )}
                <span className="min-w-0 flex-1 truncate text-[12px] font-semibold text-slate-200">
                  {p.name}
                  {p.uid === uid && <span className="ml-1 text-[10px] text-slate-500">(you)</span>}
                </span>
                {p.isHost && (
                  <span className="rounded border border-amber-500/40 bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-amber-300">
                    host
                  </span>
                )}
                {stale ? (
                  <span className="text-[9.5px] uppercase tracking-wider text-slate-500">away</span>
                ) : (
                  <Wifi className="h-3 w-3 text-emerald-500/70" />
                )}
              </li>
            );
          })}
        </ul>

        {error && (
          <p className="mt-3 rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-[11.5px] text-rose-200">
            {error}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 pt-4">
          <button
            type="button"
            onClick={() => void handleLeave()}
            className="flex items-center gap-1.5 rounded-xl border border-slate-800 px-3 py-2 text-[11.5px] font-semibold text-slate-400 transition-colors hover:border-slate-700 hover:text-white cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5" />
            {isHost ? 'Close the room' : 'Leave'}
          </button>

          {isHost ? (
            <div className="flex items-center gap-2">
              {room.mode === 'versus' && activePlayers.length < 2 && (
                <span className="text-[11px] text-slate-500">Versus needs one more player.</span>
              )}
              <button
                type="button"
                onClick={() => void handleStart()}
                disabled={!canStart || starting}
                className="flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-[12px] font-bold text-amber-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
              >
                {starting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
                Start
              </button>
            </div>
          ) : (
            <span className="text-[11.5px] text-slate-500">Waiting for {room.hostName} to start…</span>
          )}
        </div>
      </div>
    </div>
  );
}
