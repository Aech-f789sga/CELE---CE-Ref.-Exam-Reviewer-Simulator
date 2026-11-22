/**
 * Phase routing for a live room.
 *
 * The four screens — hub, lobby, paper, results — are chosen from one fact:
 * `room.phase` on the document. Nobody navigates between them; the room moves
 * and every client follows. That is what makes "the host pressed Start" mean
 * the same thing on four different devices, and it is why this component holds
 * almost no state of its own beyond which room we are in.
 */
import { useState } from 'react';
import { Loader2, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLiveRoom } from '../hooks/useLiveRoom';
import { leaveRoom } from '../services/liveRooms';
import { LiveHub } from './LiveHub';
import { LiveLobby } from './LiveLobby';
import { LiveExam } from './LiveExam';
import { LiveResults } from './LiveResults';

interface Props {
  onExit: () => void;
}

export function LiveSession({ onExit }: Props) {
  return (
    <div className="space-y-3">
      <BetaStrip />
      <LiveSessionBody onExit={onExit} />
    </div>
  );
}

/**
 * The beta warning, on every multiplayer screen.
 *
 * Deliberately specific rather than "this feature is in beta": what a player
 * actually needs to know is that a score here is not the one that reaches the
 * leaderboards, and that a room is a shared thing they can lose by closing the
 * tab. A vague warning trains people to ignore warnings.
 */
function BetaStrip() {
  return (
    <div className="mx-auto flex max-w-4xl items-start gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-2">
      <span className="mt-0.5 shrink-0 rounded border border-amber-500/50 bg-amber-500/20 px-1.5 py-px text-[9px] font-black uppercase tracking-wider text-amber-200">
        Beta
      </span>
      <p className="text-[11px] leading-relaxed text-amber-100/85">
        Multiplayer is in development. Rooms are peer-run — the host's browser keeps the clock and
        the standings, so treat a result here as practice, not as a record. Nothing from a room
        reaches the leaderboards.
      </p>
    </div>
  );
}

function LiveSessionBody({ onExit }: Props) {
  const { user } = useAuth();
  const uid = user?.uid;
  const [code, setCode] = useState<string | null>(null);
  const live = useLiveRoom(code, uid);

  const exit = async () => {
    if (code && uid && live.room) {
      // Best effort: leaving a room should never trap someone on a spinner if
      // the delete is refused.
      await leaveRoom(code, uid, live.room.hostId === uid, live.room.phase).catch(() => {});
    }
    setCode(null);
    onExit();
  };

  if (!code) {
    return <LiveHub onJoined={(joined) => setCode(joined)} onExit={onExit} />;
  }

  if (live.loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center gap-2 text-[12.5px] text-slate-400">
        <Loader2 className="h-4 w-4 animate-spin" />
        Opening room {code}…
      </div>
    );
  }

  if (live.gone || !live.room) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center">
        <LogOut className="mx-auto h-8 w-8 text-slate-600" />
        <h2 className="mt-3 font-arnie text-lg font-bold text-white">This room is closed</h2>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-400">
          The host closed it, or it timed out after everyone left. Nothing else is affected.
        </p>
        <button
          type="button"
          onClick={() => setCode(null)}
          className="mt-4 rounded-xl bg-amber-500 px-4 py-2 text-[12px] font-bold text-amber-950 hover:bg-amber-400 cursor-pointer"
        >
          Back to rooms
        </button>
      </div>
    );
  }

  const room = live.room;

  if (room.phase === 'lobby') {
    return <LiveLobby room={room} players={live.players} uid={uid!} onLeave={() => void exit()} />;
  }

  if (room.phase === 'live') {
    return (
      <LiveExam
        room={room}
        players={live.players}
        answers={live.answers}
        uid={uid!}
        onExit={() => void exit()}
      />
    );
  }

  return (
    <LiveResults
      room={room}
      players={live.players}
      answers={live.answers}
      reactions={live.reactions}
      uid={uid!}
      onExit={() => void exit()}
    />
  );
}
