/**
 * The shared paper.
 *
 * One component serves both modes, because nine tenths of a sitting is the same
 * either way: the same items, the same clock, the same act of picking a letter.
 * What differs is what an answer *means*, and that is confined to two places —
 * where a vote is written, and what the palette shows about other people.
 *
 * ## Why a vote is written on every tap
 *
 * There is no "submit my answers" step in Co-op, because there is no personal
 * answer sheet: the team's answer for an item is whatever the most people
 * picked, so it has to be counted the moment it is picked. In Versus the same
 * write happens for the same reason — it is what lets the opponent see that an
 * item is *done* without seeing what was chosen.
 *
 * ## Why the paper is resolved, not rebuilt
 *
 * `questionIds` on the room is the single source of truth. Rebuilding the draw
 * locally would let two players start from slightly different random numbers
 * and sit subtly different papers, which would make the final comparison
 * meaningless. `resolveQuestionsById` fails loudly instead, and a player whose
 * bank no longer matches is told so rather than scored on a phantom paper.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Flag,
  Send,
  Users,
  Zap,
} from 'lucide-react';
import { EngineeringFigure } from './EngineeringFigure';
import { MathView } from './MathView';
import { castVote, finishRoom, markFinished } from '../services/liveRooms';
import { summariseScore } from '../data/grading';
import { resolveRoomQuestions } from '../data/livePaper';
import {
  isPlayerStale,
  secondsRemaining,
  tallyVotes,
  type AnswerVotes,
  type LivePlayer,
  type LiveRoom,
} from '../data/liveRoom';
import type { Question } from '../types/exam';

interface Props {
  room: LiveRoom;
  players: LivePlayer[];
  answers: AnswerVotes;
  uid: string;
  onExit: () => void;
}

const LABELS = ['A', 'B', 'C', 'D'] as const;

function clock(total: number): string {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

export function LiveExam({ room, players, answers, uid, onExit }: Props) {
  const [index, setIndex] = useState(0);
  const [mine, setMine] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const finishing = useRef(false);

  const questions = useMemo<Question[] | null>(() => resolveRoomQuestions(room), [room]);

  const total = questions?.length ?? 0;
  const current = questions?.[index];
  const isHost = room.hostId === uid;
  const coop = room.mode === 'coop';
  const active = players.filter((p) => !isPlayerStale(p));

  /* ---- clock ------------------------------------------------------------- */

  useEffect(() => {
    if (room.config.durationSeconds <= 0) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [room.config.durationSeconds]);

  const remaining = room.config.durationSeconds > 0 ? secondsRemaining(room, now) : 0;

  /* ---- submitting -------------------------------------------------------- */

  const submit = useCallback(
    (reason: 'manual' | 'time') => {
      if (submitted || !questions) return;
      setSubmitted(true);
      const summary = summariseScore(questions, mine);
      void markFinished(room.code, uid, {
        correct: summary.correct,
        answeredCount: Object.keys(mine).length,
      }).catch((e) => console.error('Could not record the finish:', e));
      if (reason === 'time') {
        console.info('Clock expired; paper submitted.');
      }
    },
    [submitted, questions, mine, room.code, uid]
  );

  useEffect(() => {
    if (room.config.durationSeconds > 0 && remaining === 0 && !submitted) submit('time');
  }, [remaining, submitted, room.config.durationSeconds, submit]);

  /* ---- host closes the room --------------------------------------------- */

  useEffect(() => {
    if (!isHost || submitted || room.phase !== 'live' || finishing.current) return;
    const everyoneDone = active.length > 0 && active.every((p) => Boolean(p.finishedAt));
    const timeUp = room.config.durationSeconds > 0 && remaining === 0;
    if (!everyoneDone && !timeUp) return;
    finishing.current = true;
    void finishRoom(room.code).catch((e) => {
      finishing.current = false;
      console.error('Could not close the room:', e);
    });
  }, [isHost, submitted, room.phase, room.code, active, remaining, room.config.durationSeconds]);

  /* ---- answering --------------------------------------------------------- */

  const answer = (label: string) => {
    if (!current || submitted) return;
    setMine((cur) => ({ ...cur, [current.id]: label }));
    void castVote(room.code, current.id, uid, label).catch((e) =>
      console.error('Vote did not reach the room:', e)
    );
  };

  /* ---- guards ------------------------------------------------------------ */

  if (questions === null) {
    return (
      <Shell onExit={onExit}>
        <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 px-5 py-6 text-center">
          <AlertTriangle className="mx-auto h-7 w-7 text-amber-400" />
          <h3 className="mt-2 font-arnie text-base font-bold text-white">This paper cannot open</h3>
          <p className="mx-auto mt-1.5 max-w-md text-[12px] leading-relaxed text-amber-100/80">
            One or more items in this room are no longer in your copy of the bank — most likely the
            room was created on a newer build. Reload to pick up the current version, or ask the host
            to open a new room.
          </p>
        </div>
      </Shell>
    );
  }

  if (total === 0 || !current) {
    return (
      <Shell onExit={onExit}>
        <p className="text-center text-[12px] text-slate-400">This room has no items.</p>
      </Shell>
    );
  }

  /* ---- waiting screen ---------------------------------------------------- */

  if (submitted) {
    const done = active.filter((p) => Boolean(p.finishedAt)).length;
    return (
      <Shell onExit={onExit}>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
          <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-400" />
          <h3 className="mt-3 font-arnie text-lg font-bold text-white">
            {coop ? 'You are done — the team is not' : 'Paper submitted'}
          </h3>
          <p className="mx-auto mt-1.5 max-w-sm text-[12.5px] leading-relaxed text-slate-400">
            {coop
              ? 'Your answers are in. The result appears once the room closes.'
              : 'Waiting for everyone else to finish before the comparison.'}
          </p>
          <p className="mt-4 font-tech-mono text-[11.5px] text-slate-500">
            {done} of {active.length} finished
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {active.map((p) => (
              <span
                key={p.uid}
                className={`rounded-lg border px-2 py-1 text-[10.5px] ${
                  p.finishedAt
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                    : 'border-slate-800 bg-slate-950/50 text-slate-500'
                }`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  /* ---- the paper --------------------------------------------------------- */

  const tally = coop ? tallyVotes(answers[current.id]) : null;
  const myPick = mine[current.id];
  const opponentDone = !coop
    ? Object.keys(answers[current.id] ?? {}).some((other) => other !== uid)
    : false;

  return (
    <Shell onExit={onExit}>
      {/* Status bar */}
      <div className="sticky top-0 z-10 mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/95 px-4 py-2.5 backdrop-blur">
        <span className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px] font-bold text-slate-200">
          {coop ? <Users className="h-3.5 w-3.5 text-cyan-400" /> : <Zap className="h-3.5 w-3.5 text-fuchsia-400" />}
          {coop ? 'Co-op' : 'Versus'}
        </span>

        <span className="font-tech-mono text-[11.5px] text-slate-400">
          {index + 1} / {total}
        </span>

        <span className="text-[11px] text-slate-500">
          {Object.keys(mine).length} answered
        </span>

        {room.config.durationSeconds > 0 && (
          <span
            className={`ml-auto flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-tech-mono text-[12px] font-bold ${
              remaining <= 60
                ? 'border-rose-500/50 bg-rose-500/15 text-rose-300'
                : 'border-slate-700 bg-slate-950 text-slate-200'
            }`}
          >
            <Clock className="h-3.5 w-3.5" />
            {clock(remaining)}
          </span>
        )}

        <button
          type="button"
          onClick={() => submit('manual')}
          className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-[11.5px] font-bold text-amber-950 transition-colors hover:bg-amber-400 cursor-pointer"
        >
          <Send className="h-3.5 w-3.5" />
          Submit
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_15rem]">
        {/* Question */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg border border-slate-700 bg-slate-950 px-2 py-0.5 font-tech-mono text-[11px] font-bold text-white">
              Item {current.number}
            </span>
            {current.category && (
              <span className="text-[10.5px] text-slate-500">{current.category}</span>
            )}
            {opponentDone && (
              <span className="ml-auto flex items-center gap-1 rounded-lg border border-fuchsia-500/40 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-bold text-fuchsia-300">
                <Flag className="h-3 w-3" />
                opponent answered this
              </span>
            )}
          </div>

          <MathView text={current.text} className="mt-3 text-[13px] leading-relaxed text-slate-100" />

          {current.figureSvg && (
            <EngineeringFigure
              figureSvg={current.figureSvg}
              figureCaption={current.figureCaption}
              className="mt-3"
            />
          )}

          <ul className="mt-4 grid gap-1.5">
            {current.options.map((option) => {
              const picked = myPick === option.label;
              const leading = coop && tally?.label === option.label;
              const votes = coop ? Object.values(answers[current.id] ?? {}).filter((v) => v === option.label).length : 0;
              return (
                <li key={option.label}>
                  <button
                    type="button"
                    onClick={() => answer(option.label)}
                    className={`flex w-full items-start gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-colors cursor-pointer ${
                      picked
                        ? 'border-amber-500/70 bg-amber-500/15'
                        : 'border-slate-800 bg-slate-950/50 hover:border-slate-700'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-tech-mono text-[11px] font-black ${
                        picked ? 'bg-amber-500 text-amber-950' : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {option.label}
                    </span>
                    <MathView text={option.text} className="min-w-0 flex-1 text-[12.5px] text-slate-200" />
                    {coop && votes > 0 && (
                      <span
                        className={`shrink-0 rounded border px-1.5 text-[9.5px] font-bold ${
                          leading
                            ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300'
                            : 'border-slate-700 text-slate-400'
                        }`}
                      >
                        {votes}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {coop && tally && tally.total > 0 && (
            <p className="mt-3 border-t border-slate-800 pt-2.5 text-[11px] text-slate-400">
              {tally.tie ? (
                <>
                  Split {tally.total} ways with no majority — nobody has this item yet.
                </>
              ) : (
                <>
                  <strong className="text-white">{tally.label}</strong> leads with {tally.count} of{' '}
                  {tally.total} pick{tally.total === 1 ? '' : 's'}.
                </>
              )}
            </p>
          )}

          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="rounded-lg border border-slate-800 px-3 py-1.5 text-[11.5px] font-semibold text-slate-300 disabled:opacity-40 cursor-pointer"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
              disabled={index === total - 1}
              className="rounded-lg border border-slate-800 px-3 py-1.5 text-[11.5px] font-semibold text-slate-300 disabled:opacity-40 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>

        {/* Palette */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            {coop ? 'Items' : 'Your items'}
          </h4>
          <div className="mt-2 grid grid-cols-5 gap-1">
            {questions.map((q, i) => {
              const mineDone = Boolean(mine[q.id]);
              const otherDone =
                !coop && Object.keys(answers[q.id] ?? {}).some((other) => other !== uid);
              const currentTally = coop ? tallyVotes(answers[q.id]) : null;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`relative flex h-8 items-center justify-center rounded-md border font-tech-mono text-[10.5px] font-bold transition-colors cursor-pointer ${
                    i === index
                      ? 'border-amber-400 bg-amber-500 text-amber-950'
                      : mineDone
                        ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                  }`}
                  title={
                    coop
                      ? `${currentTally?.total ?? 0} pick(s)${currentTally?.label ? ` — ${currentTally.label} leads` : ''}`
                      : otherDone
                        ? 'Opponent has answered this'
                        : 'Not answered by the opponent'
                  }
                >
                  {i + 1}
                  {otherDone && !mineDone && (
                    <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  )}
                </button>
              );
            })}
          </div>

          <ul className="mt-3 space-y-1 border-t border-slate-800 pt-2.5 text-[10px] text-slate-500">
            <li className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-emerald-500/60" />
              answered by you
            </li>
            {coop ? (
              <li className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-amber-500" />
                current item
              </li>
            ) : (
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                opponent has answered
              </li>
            )}
          </ul>
        </div>
      </div>
    </Shell>
  );
}

function Shell({ children, onExit }: { children: React.ReactNode; onExit: () => void }) {
  return (
    <div className="mx-auto max-w-5xl">
      <button
        type="button"
        onClick={onExit}
        className="mb-3 text-[11px] font-semibold text-slate-500 transition-colors hover:text-slate-300 cursor-pointer"
      >
        ← Leave the room
      </button>
      {children}
    </div>
  );
}
