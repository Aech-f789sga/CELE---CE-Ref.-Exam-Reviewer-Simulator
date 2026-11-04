import React, { useEffect, useMemo, useState } from 'react';
import { Users, Wifi, WifiOff, Moon, Radio } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import {
  subscribeUserPresence,
  isUserCurrentlyOnline,
  isUserIdle,
  PRESENCE_IDLE_TIMEOUT_MS,
  UserPresence,
} from '../services/firebase';

/**
 * Who is online, idle, or offline right now.
 *
 * Presence documents are written by useUserActivityTracker and are already
 * stripped of accounts excluded from analytics, so the administrator never
 * appears in this list. Three states are shown rather than two because a tab
 * left open with nobody at the keyboard is neither "here" nor "gone", and
 * saying so is more useful than guessing between the two.
 */
export const OnlineUsersPanel: React.FC = () => {
  const { themeConfig } = useTheme();
  const { user, profile } = useAuth();
  const activeUser = profile || user;

  const [presences, setPresences] = useState<UserPresence[]>([]);
  const [expanded, setExpanded] = useState<boolean>(false);

  // Presence is only as fresh as the last heartbeat, so re-render on a timer to
  // let people fall out of "online" without needing another write to arrive.
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = subscribeUserPresence(setPresences);
    const id = window.setInterval(() => setTick((t) => t + 1), 30_000);
    return () => {
      unsubscribe();
      window.clearInterval(id);
    };
  }, []);

  const { online, idle, offline } = useMemo(() => {
    const on: UserPresence[] = [];
    const away: UserPresence[] = [];
    const off: UserPresence[] = [];

    for (const p of presences) {
      if (isUserCurrentlyOnline(p)) on.push(p);
      else if (isUserIdle(p)) away.push(p);
      else off.push(p);
    }

    const bySeen = (a: UserPresence, b: UserPresence) =>
      (b.lastSeenAt || '').localeCompare(a.lastSeenAt || '');

    on.sort((a, b) => a.displayName.localeCompare(b.displayName));
    away.sort(bySeen);
    off.sort(bySeen);
    return { online: on, idle: away, offline: off };
    // `tick` is intentionally a dependency: it forces the online/idle split to be
    // recomputed as heartbeats age out, even with no new presence write.
  }, [presences, tick]);

  const total = online.length + idle.length + offline.length;
  const shownOffline = expanded ? offline : offline.slice(0, 6);
  const idleMinutes = Math.round(PRESENCE_IDLE_TIMEOUT_MS / 60000);

  const isSelf = (p: UserPresence) =>
    Boolean(activeUser && (p.userId === (activeUser as { uid?: string }).uid ||
      (activeUser.email && p.email?.toLowerCase() === activeUser.email?.toLowerCase())));

  const Row: React.FC<{ p: UserPresence; state: 'online' | 'idle' | 'offline' }> = ({ p, state }) => {
    const dot =
      state === 'online' ? 'bg-emerald-400' : state === 'idle' ? 'bg-amber-400' : 'bg-slate-600';
    return (
      <div className="flex items-center justify-between gap-3 py-1.5">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`w-2 h-2 rounded-full shrink-0 ${dot}`} />
          <span className="text-sm text-white truncate">
            {p.displayName || 'Candidate'}
            {isSelf(p) && <span className="text-[10px] text-slate-400 ml-1">(you)</span>}
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 truncate shrink-0 max-w-[45%] text-right">
          {state === 'online'
            ? p.currentFeature || 'Browsing'
            : state === 'idle'
              ? 'Idle'
              : p.lastSeenAt
                ? `Seen ${new Date(p.lastSeenAt).toLocaleString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}`
                : 'Offline'}
        </span>
      </div>
    );
  };

  return (
    <div
      className="rounded-2xl p-5 border shadow-lg space-y-3"
      style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-emerald-400" />
          <h3 className="font-arnie text-sm font-bold text-white tracking-wide">
            Examinees Online
          </h3>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
          <Radio className="w-3 h-3 animate-pulse" />
          {online.length} online
        </span>
      </div>

      {total === 0 ? (
        <p className="text-xs text-slate-400">
          No activity recorded yet. Sign in and browse for a moment and you will appear here.
        </p>
      ) : (
        <>
          {online.length > 0 ? (
            <div className="space-y-0.5">
              {online.map((p) => (
                <Row key={`on-${p.userId}`} p={p} state="online" />
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <WifiOff className="w-3.5 h-3.5" />
              Nobody is active right now.
            </p>
          )}

          {idle.length > 0 && (
            <div className="pt-2 border-t border-slate-800/80 space-y-0.5">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-amber-400/90">
                <Moon className="w-3 h-3" />
                Idle over {idleMinutes} min ({idle.length}) — not counted as online
              </div>
              {idle.map((p) => (
                <Row key={`idle-${p.userId}`} p={p} state="idle" />
              ))}
            </div>
          )}

          {offline.length > 0 && (
            <div className="pt-2 border-t border-slate-800/80 space-y-0.5">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                <Wifi className="w-3 h-3" />
                Recently active ({offline.length})
              </div>
              {shownOffline.map((p) => (
                <Row key={`off-${p.userId}`} p={p} state="offline" />
              ))}
              {offline.length > shownOffline.length && (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="text-[11px] text-slate-400 hover:text-white underline underline-offset-2 pt-1 cursor-pointer"
                >
                  Show all {offline.length}
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
