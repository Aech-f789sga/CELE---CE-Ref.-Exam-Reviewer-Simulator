/**
 * One subscription set for a room, shared by every screen in it.
 *
 * The lobby, the paper and the results are three views of the same four
 * documents. Subscribing in each of them would mean re-attaching listeners on
 * every phase change — and, on Spark-plan billing, re-reading the whole roster
 * and every vote each time. So the listeners live here, mounted once for as
 * long as a room is open, and the views are pure functions of what this
 * returns.
 *
 * The heartbeat lives here too. It has to run in every phase: a player sitting
 * in the lobby is just as present as one mid-paper, and the roster should not
 * grey them out for reading the rules.
 */
import { useEffect, useState } from 'react';
import {
  heartbeat,
  subscribeAnswers,
  subscribePlayers,
  subscribeReactions,
  subscribeRoom,
} from '../services/liveRooms';
import type { AnswerVotes, LivePlayer, LiveReaction, LiveRoom } from '../data/liveRoom';

/** How often a player's `lastSeenAt` is refreshed. */
const HEARTBEAT_MS = 30 * 1000;

export interface LiveRoomState {
  room: LiveRoom | null;
  players: LivePlayer[];
  answers: AnswerVotes;
  reactions: LiveReaction[];
  /** True until the room document has been read at least once. */
  loading: boolean;
  /** Set when the room was deleted underneath us — the host closed it. */
  gone: boolean;
}

export function useLiveRoom(code: string | null, uid?: string): LiveRoomState {
  const [room, setRoom] = useState<LiveRoom | null>(null);
  const [players, setPlayers] = useState<LivePlayer[]>([]);
  const [answers, setAnswers] = useState<AnswerVotes>({});
  const [reactions, setReactions] = useState<LiveReaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!code) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setGone(false);

    const unsubRoom = subscribeRoom(code, (next) => {
      setRoom(next);
      setLoading(false);
      // A null room after we had one means it was deleted, not that it is
      // still loading: the host closed it, or a stale-room sweep removed it.
      if (!next) setGone(true);
    });
    const unsubPlayers = subscribePlayers(code, setPlayers);
    const unsubAnswers = subscribeAnswers(code, setAnswers);
    const unsubReactions = subscribeReactions(code, setReactions);

    return () => {
      unsubRoom();
      unsubPlayers();
      unsubAnswers();
      unsubReactions();
    };
  }, [code]);

  useEffect(() => {
    if (!code || !uid) return;
    const beat = () => {
      void heartbeat(code, uid).catch(() => {
        /* a missed beat is not worth surfacing */
      });
    };
    beat();
    const timer = window.setInterval(beat, HEARTBEAT_MS);
    return () => window.clearInterval(timer);
  }, [code, uid]);

  return { room, players, answers, reactions, loading, gone };
}
