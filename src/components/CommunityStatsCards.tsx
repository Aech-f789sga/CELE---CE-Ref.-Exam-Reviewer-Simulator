import React from 'react';
import { Users, UserCheck, ShieldCheck, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CommunityStatsCardsProps {
  totalUsers: number;
  standardUsersCount: number;
  adminUsersCount: number;
  attemptsCount: number;
  loading?: boolean;
}

export const CommunityStatsCards: React.FC<CommunityStatsCardsProps> = ({
  totalUsers,
  standardUsersCount,
  adminUsersCount,
  attemptsCount,
  loading = false,
}) => {
  const { themeConfig } = useTheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
      {/* Card 1: Total Registered Users */}
      <div
        className="rounded-2xl p-5 border shadow-lg transition-transform hover:scale-[1.01]"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Total Registered Users</span>
          <Users className="w-4 h-4 text-indigo-400" />
        </div>
        <div className="mt-3 flex items-baseline space-x-2">
          <span className="text-3xl font-bold font-arnie text-white">
            {loading ? '...' : totalUsers}
          </span>
          <span className="text-xs text-slate-400 font-mono">accounts</span>
        </div>
        <div className="mt-2 text-[11px] text-indigo-300">
          Synced with Cloud Firestore database
        </div>
      </div>

      {/* Card 2: Examinees / Reviewees */}
      <div
        className="rounded-2xl p-5 border shadow-lg transition-transform hover:scale-[1.01]"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Examinees / Reviewees</span>
          <UserCheck className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="mt-3 flex items-baseline space-x-2">
          <span className="text-3xl font-bold font-arnie text-emerald-400">
            {loading ? '...' : standardUsersCount}
          </span>
          <span className="text-xs text-slate-400 font-mono">candidates</span>
        </div>
        <div className="mt-2 text-[11px] text-emerald-300">
          Assigned standard examinee permissions
        </div>
      </div>

      {/* Card 3: Super Administrator (Email hidden for privacy) */}
      <div
        className="rounded-2xl p-5 border shadow-lg transition-transform hover:scale-[1.01]"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Super Administrator</span>
          <ShieldCheck className="w-4 h-4 text-amber-400" />
        </div>
        <div className="mt-3 flex items-baseline space-x-2">
          <span className="text-3xl font-bold font-arnie text-amber-400">
            {loading ? '...' : adminUsersCount}
          </span>
          <span className="text-xs text-slate-400 font-mono">admin</span>
        </div>
        <div className="mt-2 text-[11px] text-amber-300 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>System Administrator (Verified)</span>
        </div>
      </div>

      {/* Card 4: Recorded Exam Attempts */}
      <div
        className="rounded-2xl p-5 border shadow-lg transition-transform hover:scale-[1.01]"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Recorded Exam Attempts</span>
          <Award className="w-4 h-4 text-cyan-400" />
        </div>
        <div className="mt-3 flex items-baseline space-x-2">
          <span className="text-3xl font-bold font-arnie text-cyan-400">
            {loading ? '...' : attemptsCount}
          </span>
          <span className="text-xs text-slate-400 font-mono">attempts</span>
        </div>
        <div className="mt-2 text-[11px] text-cyan-300">
          MSTC (66) • HPGE (46) • PSAD (75)
        </div>
      </div>
    </div>
  );
};
