/**
 * The results room.
 *
 * Two different screens sharing one frame, because the *social* part is the
 * same: profiles, a way to react, and everyone watching the same thing at the
 * same time.
 *
 *   - **Versus** shows a comparison. Each player's own answers are recovered
 *     from the votes document — `answers[qid][uid]` — so the standings are
 *     computed from what was actually recorded rather than from a score the
 *     client reported about itself. That matters: it is the only number here a
 *     tampered client cannot inflate.
 *   - **Co-op** shows one team result plus who carried it, and plays a
 *     celebration banded by the team's percentage.
 *
 * ## Why the celebration is banded rather than always-on
 *
 * A wall of GIFs over a 40% paper reads as mockery. So the reel's intensity and
 * its moods both come from the band: a clean sweep gets a screenful of hype, and
 * a low score gets a handful that are mostly encouragement. The reaction picker
 * stays available afterwards either way — the band decides the opening, not
 * what people are allowed to say.
 */
import { useEffect, useMemo, useState } from 'react';
import { Crown, Home, Sparkles, Trophy, Users, Zap } from 'lucide-react';
import { summariseScore } from '../data/grading';
import { resolveRoomQuestions } from '../data/livePaper';
import {
  coopAnswers,
  rankStandings,
  roomTitle,
  scoreBand,
  tallyVotes,
  type AnswerVotes,
  type LivePlayer,
  type LiveReaction,
  type LiveRoom,
  type Standing,
} from '../data/liveRoom';
import { hasGifProvider, type ReactionMood } from '../data/gifLibrary';
import { sendReaction } from '../services/liveRooms';
import {
  bandMoodLabels,
  burstsByPlayer,
  CelebrationReel,
  ReactionBurst,
  ReactionPicker,
} from './LiveReactions';
import type { GifResult } from '../data/gifLibrary';

interface Props {
  room: LiveRoom;
  players: LivePlayer[];
  answers: AnswerVotes;
  reactions: LiveReaction[];
  uid: string;
  onExit: () => void;
}

const BAND_COPY: Record<string, { title: string; line: string }> = {
  perfect: { title: 'Clean sweep', line: 'Every item correct. Nobody dropped a point.' },
  great: { title: 'Strong pass', line: 'Comfortably above the line — a few items got away.' },
  ok: { title: 'Passing, barely', line: 'Over 70, but the margin is thinner than it looks.' },
  low: { title: 'Below the line', line: 'Not this time. The topics below are where the marks went.' },
  unknown: { title: 'No score', line: 'These items carry no printed key yet, so nothing can be graded.' },
};

export function LiveResults({ room, players, answers, reactions, uid, onExit }: Props) {
  const [now, setNow] = useState(() => Date.now());
  const [celebrating, setCelebrating] = useState(room.mode === 'coop');

  const questions = useMemo(() => resolveRoomQuestions(room), [room]);
  const coop = room.mode === 'coop';

  /* Reactions fade on a timer, so the clock has to tick to make them go away. */
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  /** Every player's own picks, recovered from the vote documents. */
  const perPlayer = useMemo<Record<string, Record<string, string>>>(() => {
    const out: Record<string, Record<string, string>> = {};
    for (const [qid, votes] of Object.entries(answers)) {
      for (const [voter, label] of Object.entries(votes)) {
        (out[voter] ??= {})[qid] = label;
      }
    }
    return out;
  }, [answers]);

  const teamAnswers = useMemo(
    () => (questions ? coopAnswers(questions, answers) : {}),
    [questions, answers]
  );

  const teamSummary = useMemo(
    () => (questions ? summariseScore(questions, teamAnswers) : null),
    [questions, teamAnswers]
  );

  const band = scoreBand(teamSummary?.percentage ?? null);

  const standings = useMemo<Standing[]>(() => {
    if (!questions) return [];
    const rows = players.map((p) => {
      const own = perPlayer[p.uid] ?? {};
      const summary = summariseScore(questions, own);
      const answered = Object.keys(own).length;
      return {
        uid: p.uid,
        name: p.name,
        photoURL: p.photoURL,
        isHost: p.isHost,
        correct: summary.correct,
        answered,
        percentage: summary.percentage,
        // Co-op: what share of the team's correct items this player personally
        // got right. A "who carried" number, not a ranking.
        contribution:
          coop && teamSummary && teamSummary.correct > 0
            ? Math.round((summary.correct / teamSummary.correct) * 100)
            : undefined,
      };
    });
    return rankStandings(rows);
  }, [players, perPlayer, questions, coop, teamSummary]);

  const bursts = burstsByPlayer(reactions, now);

  const send = async (gif: GifResult, mood: ReactionMood) => {
    const me = players.find((p) => p.uid === uid);
    await sendReaction(room.code, {
      uid,
      name: me?.name ?? 'Someone',
      gifId: gif.url ? gif.id : `${gif.id}:${mood}`,
      url: gif.url || undefined,
      at: new Date().toISOString(),
    }).catch((e) => console.error('Reaction did not send:', e));
  };

  const copy = BAND_COPY[band] ?? BAND_COPY.unknown;

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      <CelebrationReel band={band} active={celebrating} onDone={() => setCelebrating(false)} />

      {/* Headline */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {coop ? <Users className="h-3 w-3 text-cyan-400" /> : <Zap className="h-3 w-3 text-fuchsia-400" />}
          {roomTitle(room)}
        </span>

        {coop && teamSummary ? (
          <>
            <p className="mt-3 font-tech-mono text-4xl font-black text-white">
              {teamSummary.percentage === null ? '—' : `${teamSummary.percentage}%`}
            </p>
            <h2 className="mt-1 font-arnie text-xl font-bold text-white">{copy.title}</h2>
            <p className="mt-1 text-[12.5px] text-slate-400">{copy.line}</p>
            <p className="mt-2 font-tech-mono text-[11px] text-slate-500">
              {teamSummary.correct} correct of {teamSummary.scorable} scorable
              {teamSummary.pending > 0 ? ` · ${teamSummary.pending} unkeyed` : ''}
            </p>
            <p className="mt-3 text-[10.5px] text-slate-500">
              Celebration: {bandMoodLabels(band).join(' · ')}
              {!hasGifProvider() && ' · built-in pack (no GIF key configured)'}
            </p>
            <button
              type="button"
              onClick={() => setCelebrating(true)}
              className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-amber-500/50 bg-amber-500/15 px-3 py-1.5 text-[11.5px] font-bold text-amber-200 hover:bg-amber-500/25 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Again
            </button>
          </>
        ) : (
          <>
            <h2 className="mt-3 font-arnie text-xl font-bold text-white">
              {standings[0]?.name ?? 'Nobody'} wins
            </h2>
            <p className="mt-1 text-[12.5px] text-slate-400">
              {standings.length > 1 &&
              standings[0] &&
              standings[1] &&
              standings[0].correct === standings[1].correct
                ? 'Level on correct answers — a draw.'
                : 'Scored from the answers recorded in the room.'}
            </p>
          </>
        )}
      </div>

      {/* Players */}
      <div className="grid gap-3 sm:grid-cols-2">
        {standings.map((s) => {
          const playerBursts = bursts[s.uid] ?? [];
          const isMe = s.uid === uid;
          return (
            <div
              key={s.uid}
              className={`relative rounded-2xl border p-4 ${
                isMe ? 'border-amber-500/50 bg-amber-500/5' : 'border-slate-800 bg-slate-900/70'
              }`}
            >
              <ReactionBurst items={playerBursts} />

              <div className="flex items-center gap-3">
                {s.photoURL ? (
                  <img src={s.photoURL} alt="" className="h-11 w-11 rounded-full object-cover" />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-slate-300">
                    {s.name.slice(0, 1).toUpperCase()}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 truncate text-[13px] font-bold text-white">
                    {s.name}
                    {isMe && <span className="text-[10px] font-normal text-slate-500">(you)</span>}
                    {!coop && s.rank === 1 && <Crown className="h-3.5 w-3.5 text-amber-400" />}
                  </p>
                  <p className="text-[10.5px] text-slate-500">
                    {s.answered} answered{s.isHost ? ' · host' : ''}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-tech-mono text-lg font-black text-white">
                    {s.percentage === null ? '—' : `${s.percentage}%`}
                  </p>
                  <p className="font-tech-mono text-[10px] text-slate-500">
                    {s.correct} correct
                  </p>
                </div>
              </div>

              {coop && s.contribution !== undefined && (
                <div className="mt-2.5">
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>share of the team's correct items</span>
                    <span className="font-tech-mono">{s.contribution}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-cyan-500/70"
                      style={{ width: `${Math.min(100, s.contribution)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Co-op per-item breakdown — where the majority went wrong */}
      {coop && questions && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="flex items-center gap-2 font-arnie text-base font-bold text-white">
            <Trophy className="h-4 w-4 text-amber-400" />
            How the team answered
          </h3>
          <p className="mt-1 text-[11px] text-slate-400">
            A dash means no majority — the picks split evenly, so the item was left unanswered.
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
            {questions.map((q) => {
              const t = tallyVotes(answers[q.id]);
              const key = q.keyPending ? null : q.correctAnswer;
              const right = Boolean(t.label && key && t.label === key);
              return (
                <li
                  key={q.id}
                  className={`flex items-center gap-1.5 rounded-lg border px-2 py-1 text-[10.5px] ${
                    right
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                      : t.label
                        ? 'border-rose-500/30 bg-rose-500/10 text-rose-200'
                        : 'border-slate-800 bg-slate-950/50 text-slate-500'
                  }`}
                  title={
                    t.tie
                      ? 'Split evenly — no answer'
                      : t.label
                        ? `${t.label} won with ${t.count}/${t.total}`
                        : 'Nobody answered'
                  }
                >
                  <span className="font-tech-mono opacity-70">{q.number}</span>
                  <span className="font-bold">{t.label ?? '—'}</span>
                  {key && <span className="ml-auto font-tech-mono opacity-60">key {key}</span>}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Reactions */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <h3 className="font-arnie text-base font-bold text-white">
          {coop ? 'Send a reaction' : 'Send a reaction — it appears above your card'}
        </h3>
        <p className="mt-1 text-[11px] text-slate-400">
          {hasGifProvider()
            ? 'Cats and dogs first, then the usual suspects.'
            : 'No GIF key configured, so these are the built-in animated cards. Add VITE_GIPHY_API_KEY to use real GIFs.'}
        </p>
        <div className="mt-3">
          <ReactionPicker onSend={(gif, mood) => void send(gif, mood)} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pb-6">
        <p className="text-[10.5px] text-slate-500">
          Room {room.code} · this room closes on its own after a while
        </p>
        <button
          type="button"
          onClick={onExit}
          className="flex items-center gap-1.5 rounded-xl border border-slate-800 px-3 py-2 text-[11.5px] font-semibold text-slate-300 transition-colors hover:border-slate-700 hover:text-white cursor-pointer"
        >
          <Home className="h-3.5 w-3.5" />
          Leave
        </button>
      </div>
    </div>
  );
}
