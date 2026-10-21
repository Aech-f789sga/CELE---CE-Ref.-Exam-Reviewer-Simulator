import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Award,
  Medal,
  Flame,
  CheckCircle2,
  Clock,
  User,
  Search,
  Filter,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  BarChart2,
  AlertCircle,
  RefreshCw,
  Crown,
  BookOpen,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { SubjectArea, SUBJECT_CONFIGS } from '../types/exam';
import {
  fetchAllAttemptsForLeaderboard,
  fetchAllUsers,
  computeLeaderboards,
  isUserAdmin,
  OverallLeaderboardEntry,
  AreaLeaderboardEntry,
  CloudExamAttempt,
  UserProfile,
} from '../services/firebase';
import { CommunityStatsCards } from './CommunityStatsCards';

interface LeaderboardViewProps {
  onTakeExamArea?: (subject: SubjectArea) => void;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({ onTakeExamArea }) => {
  const { themeConfig } = useTheme();
  const { user, profile } = useAuth();
  const activeUser = profile || user;

  const [activeTab, setActiveTab] = useState<'overall' | 'per_area'>('overall');
  const [selectedArea, setSelectedArea] = useState<SubjectArea>('MSTC');
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [overallList, setOverallList] = useState<OverallLeaderboardEntry[]>([]);
  const [perAreaLists, setPerAreaLists] = useState<Record<SubjectArea, AreaLeaderboardEntry[]>>({
    MSTC: [],
    HPGE: [],
    PSAD: [],
  });

  const [rawAttempts, setRawAttempts] = useState<CloudExamAttempt[]>([]);
  const [allUsersList, setAllUsersList] = useState<UserProfile[]>([]);

  const loadLeaderboards = async () => {
    setLoading(true);
    try {
      const [attempts, users] = await Promise.all([
        fetchAllAttemptsForLeaderboard(),
        fetchAllUsers(),
      ]);
      setRawAttempts(attempts);
      setAllUsersList(users);
      const computed = computeLeaderboards(attempts, users);
      setOverallList(computed.overall);
      setPerAreaLists(computed.perArea);
    } catch (e) {
      console.error('Failed to load leaderboards:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeaderboards();
  }, []);

  // Compute community stats
  const totalUsersCount = allUsersList.length;
  const adminUsersCount = allUsersList.filter(
    (u) => u.role === 'admin' || isUserAdmin(u.email)
  ).length || 1;
  const standardUsersCount = Math.max(0, totalUsersCount - adminUsersCount);
  const attemptsCount = rawAttempts.length;

  // Check current user's completion progress across the 3 areas
  const userAttempts = rawAttempts.filter(
    (a) => a.userId === activeUser?.uid || a.userEmail.toLowerCase() === activeUser?.email?.toLowerCase()
  );
  const userHasMSTC = userAttempts.some((a) => a.subject === 'MSTC');
  const userHasHPGE = userAttempts.some((a) => a.subject === 'HPGE');
  const userHasPSAD = userAttempts.some((a) => a.subject === 'PSAD');
  const userQualifiedOverall = userHasMSTC && userHasHPGE && userHasPSAD;

  // Filtered lists based on search (privacy: search by display name only)
  const filteredOverall = overallList.filter((item) =>
    item.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAreaList = (perAreaLists[selectedArea] || []).filter((item) =>
    item.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRankBadge = (rankIndex: number) => {
    switch (rankIndex) {
      case 0:
        return (
          <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg shadow-amber-400/30">
            <Crown className="w-4 h-4 fill-slate-950" />
          </div>
        );
      case 1:
        return (
          <div className="w-8 h-8 rounded-full bg-slate-300 text-slate-950 font-black text-xs flex items-center justify-center shadow-md">
            2
          </div>
        );
      case 2:
        return (
          <div className="w-8 h-8 rounded-full bg-amber-700 text-amber-100 font-black text-xs flex items-center justify-center shadow-md">
            3
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center border border-slate-700">
            {rankIndex + 1}
          </div>
        );
    }
  };

  const formatSeconds = (sec: number) => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    return `${hrs}h ${mins}m`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-2xl relative overflow-hidden"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span
                className="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border flex items-center gap-1.5"
                style={{
                  backgroundColor: themeConfig.accentBadge,
                  borderColor: `${themeConfig.accent}50`,
                  color: themeConfig.accent,
                }}
              >
                <Trophy className="w-3.5 h-3.5" />
                PRC BOARD EXAM RANKINGS
              </span>
              <span className="text-xs font-mono text-slate-400">
                Live Performance Standings
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black font-arnie text-white tracking-tight">
              Civil Engineering Examinee Leaderboards
            </h1>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={loadLeaderboards}
              className="p-2.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              title="Refresh Leaderboards"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div
          className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: themeConfig.accent }}
        />
      </div>

      {/* Community & Examination Participation Statistics */}
      <CommunityStatsCards
        totalUsers={totalUsersCount}
        standardUsersCount={standardUsersCount}
        adminUsersCount={adminUsersCount}
        attemptsCount={attemptsCount}
        loading={loading}
      />

      {/* Main Tab Switcher: Overall vs Per Area */}
      <div className="grid grid-cols-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800">
        <button
          onClick={() => setActiveTab('overall')}
          className={`py-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 ${
            activeTab === 'overall'
              ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Overall Rating (All 3 Areas Completed)</span>
        </button>

        <button
          onClick={() => setActiveTab('per_area')}
          className={`py-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 ${
            activeTab === 'per_area'
              ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          <span>Per Area Leaderboards</span>
        </button>
      </div>

      {/* OVERALL LEADERBOARD VIEW */}
      {activeTab === 'overall' && (
        <div className="space-y-6">
          {/* PRC GWA Criteria & Policy Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>PRC Board Exam Overall Rating Regulation</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                3 Areas Mandatory
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              • <strong>PRC Criteria</strong>: GWA = (MSTC × 35%) + (HPGE × 30%) + (PSAD × 35%). Minimum passing score is <strong>70.00% GWA</strong> with no subject score below <strong>50.00%</strong>.
              <br />
              • <strong className="text-amber-300">Policy Note</strong>: Only examinees who have completed and been graded in <strong>all 3 subject areas</strong> are qualified and displayed on the Overall Leaderboard. Incomplete attempts are withheld from overall ranking until all three areas are graded.
            </p>
          </div>

          {/* Current User Qualification Status Banner */}
          {activeUser && (
            <div
              className={`p-4 rounded-2xl border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                userQualifiedOverall
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2 font-bold">
                  {userQualifiedOverall ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  )}
                  <span>
                    {userQualifiedOverall
                      ? 'You are qualified for the Overall Leaderboard!'
                      : 'Overall Leaderboard Qualification Progress'}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 flex items-center gap-3">
                  <span>
                    MSTC: {userHasMSTC ? <strong className="text-emerald-400">✓ Completed</strong> : <span className="text-slate-500">⏳ Pending</span>}
                  </span>
                  <span>•</span>
                  <span>
                    HPGE: {userHasHPGE ? <strong className="text-emerald-400">✓ Completed</strong> : <span className="text-slate-500">⏳ Pending</span>}
                  </span>
                  <span>•</span>
                  <span>
                    PSAD: {userHasPSAD ? <strong className="text-emerald-400">✓ Completed</strong> : <span className="text-slate-500">⏳ Pending</span>}
                  </span>
                </div>
              </div>

              {!userQualifiedOverall && onTakeExamArea && (
                <div className="flex items-center gap-1.5 shrink-0">
                  {!userHasMSTC && (
                    <button
                      onClick={() => onTakeExamArea('MSTC')}
                      className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-[10px] hover:bg-amber-400"
                    >
                      Take MSTC
                    </button>
                  )}
                  {!userHasHPGE && (
                    <button
                      onClick={() => onTakeExamArea('HPGE')}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500 text-slate-950 font-bold text-[10px] hover:bg-cyan-400"
                    >
                      Take HPGE
                    </button>
                  )}
                  {!userHasPSAD && (
                    <button
                      onClick={() => onTakeExamArea('PSAD')}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-bold text-[10px] hover:bg-emerald-400"
                    >
                      Take PSAD
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Search Bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search qualified examinees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Qualified Examinees: <strong className="text-white">{filteredOverall.length}</strong>
            </span>
          </div>

          {/* Standings Content */}
          {loading ? (
            <div className="p-12 text-center text-slate-400 text-sm flex flex-col items-center justify-center space-y-3">
              <RefreshCw className="w-6 h-6 animate-spin text-amber-400" />
              <p>Calculating PRC General Weighted Averages...</p>
            </div>
          ) : filteredOverall.length === 0 ? (
            <div
              className="rounded-3xl p-12 text-center border space-y-3"
              style={{
                backgroundColor: themeConfig.bgCard,
                borderColor: themeConfig.border,
              }}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">No Completed Attempts Yet</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Complete and submit exam attempts to appear on the leaderboards.
              </p>
              {onTakeExamArea && (
                <button
                  onClick={() => onTakeExamArea('MSTC')}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  Start an Exam Subject Now
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {/* Leaderboard Table / Cards */}
              <div
                className="rounded-3xl border overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: themeConfig.bgCard,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400 font-mono text-[11px]">
                        <th className="py-3 px-4 text-center w-16">Rank</th>
                        <th className="py-3 px-4">Examinee Candidate</th>
                        <th className="py-3 px-4 text-center">Overall Rating (GWA)</th>
                        <th className="py-3 px-4 text-center">Number of Attempts</th>
                        <th className="py-3 px-4 text-center">Subject Breakdown (MSTC / HPGE / PSAD)</th>
                        <th className="py-3 px-4 text-center">PRC Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {filteredOverall.map((entry, index) => {
                        const isCurrentUser =
                          activeUser?.uid === entry.userId ||
                          activeUser?.email?.toLowerCase() === entry.userEmail.toLowerCase();

                        return (
                          <tr
                            key={entry.userId}
                            className={`transition-colors hover:bg-slate-800/40 ${
                              isCurrentUser ? 'bg-amber-500/5' : ''
                            }`}
                          >
                            <td className="py-3.5 px-4 text-center">
                              <div className="flex items-center justify-center">
                                {getRankBadge(index)}
                              </div>
                            </td>

                            <td className="py-3.5 px-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-amber-300 shrink-0">
                                  {entry.displayName.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <span className="font-bold text-white text-xs">
                                      {entry.displayName}
                                    </span>
                                    {isCurrentUser && (
                                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                        YOU
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shrink-0" />
                                    <span>{isCurrentUser ? 'Your Candidate Account' : 'Verified Reviewee Candidate'}</span>
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="py-3.5 px-4 text-center">
                              <div className="inline-block">
                                <span className="text-base font-black font-arnie text-amber-400">
                                  {entry.overallRating.toFixed(2)}%
                                </span>
                                {entry.totalCompletedAttempts > 1 && (
                                  <p className="text-[10px] text-slate-400 font-mono">
                                    Avg: {entry.averageOverallRating.toFixed(2)}%
                                  </p>
                                )}
                              </div>
                            </td>

                            <td className="py-3.5 px-4 text-center">
                              <span className="px-2.5 py-1 rounded-xl bg-slate-800 text-slate-200 font-mono font-bold text-xs border border-slate-700">
                                {entry.totalCompletedAttempts} {entry.totalCompletedAttempts === 1 ? 'attempt' : 'attempts'}
                              </span>
                            </td>

                            <td className="py-3.5 px-4 text-center">
                              <div className="flex items-center justify-center gap-1.5 font-mono text-[11px]">
                                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30" title="MSTC (35%)">
                                  MSTC: {entry.subjectBreakdown.MSTC.ratingPercentage.toFixed(1)}%
                                </span>
                                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30" title="HPGE (30%)">
                                  HPGE: {entry.subjectBreakdown.HPGE.ratingPercentage.toFixed(1)}%
                                </span>
                                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30" title="PSAD (35%)">
                                  PSAD: {entry.subjectBreakdown.PSAD.ratingPercentage.toFixed(1)}%
                                </span>
                              </div>
                            </td>

                            <td className="py-3.5 px-4 text-center">
                              {entry.passedExam ? (
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 inline-flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                  PASSED
                                </span>
                              ) : (
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                                  DID NOT PASS
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* PER-AREA LEADERBOARD VIEW */}
      {activeTab === 'per_area' && (
        <div className="space-y-6">
          {/* Area Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(['MSTC', 'HPGE', 'PSAD'] as SubjectArea[]).map((areaCode) => {
              const cfg = SUBJECT_CONFIGS[areaCode];
              const isSelected = selectedArea === areaCode;

              return (
                <button
                  key={areaCode}
                  onClick={() => setSelectedArea(areaCode)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'border-amber-400 bg-slate-900 shadow-xl scale-[1.02]'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-arnie font-black text-sm text-white flex items-center gap-2">
                      <span>{areaCode}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                        {cfg.weightPercent}% PRC
                      </span>
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {(perAreaLists[areaCode] || []).length} examinees
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-medium truncate">
                    {cfg.name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Area Summary */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder={`Search in ${selectedArea}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span>
                Area: <strong className="text-white">{SUBJECT_CONFIGS[selectedArea].fullName}</strong>
              </span>
              <span>•</span>
              <span>
                Passing: <strong className="text-emerald-400">≥ 50.00%</strong>
              </span>
            </div>
          </div>

          {/* Area Table */}
          {loading ? (
            <div className="p-12 text-center text-slate-400 text-sm flex flex-col items-center justify-center space-y-3">
              <RefreshCw className="w-6 h-6 animate-spin text-amber-400" />
              <p>Loading area rankings...</p>
            </div>
          ) : filteredAreaList.length === 0 ? (
            <div
              className="rounded-3xl p-12 text-center border space-y-3"
              style={{
                backgroundColor: themeConfig.bgCard,
                borderColor: themeConfig.border,
              }}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
                <BarChart2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">No Attempts Recorded for {selectedArea}</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                Be the first examinee to take the {SUBJECT_CONFIGS[selectedArea].name} examination and claim the #1 ranking!
              </p>
              {onTakeExamArea && (
                <button
                  onClick={() => onTakeExamArea(selectedArea)}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  Take {selectedArea} Examination Now
                </button>
              )}
            </div>
          ) : (
            <div
              className="rounded-3xl border overflow-hidden shadow-2xl"
              style={{
                backgroundColor: themeConfig.bgCard,
                borderColor: themeConfig.border,
              }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400 font-mono text-[11px]">
                      <th className="py-3 px-4 text-center w-16">Rank</th>
                      <th className="py-3 px-4">Examinee Candidate</th>
                      <th className="py-3 px-4 text-center">Highest Rating in {selectedArea}</th>
                      <th className="py-3 px-4 text-center">Number of Attempts in {selectedArea}</th>
                      <th className="py-3 px-4 text-center">Average Area Rating</th>
                      <th className="py-3 px-4 text-center">Best Speed</th>
                      <th className="py-3 px-4 text-center">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredAreaList.map((entry, index) => {
                      const isCurrentUser =
                        activeUser?.uid === entry.userId ||
                        activeUser?.email?.toLowerCase() === entry.userEmail.toLowerCase();

                      return (
                        <tr
                          key={entry.userId}
                          className={`transition-colors hover:bg-slate-800/40 ${
                            isCurrentUser ? 'bg-amber-500/5' : ''
                          }`}
                        >
                          <td className="py-3.5 px-4 text-center">
                            <div className="flex items-center justify-center">
                              {getRankBadge(index)}
                            </div>
                          </td>

                          <td className="py-3.5 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-amber-300 shrink-0">
                                {entry.displayName.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="font-bold text-white text-xs">
                                    {entry.displayName}
                                  </span>
                                  {isCurrentUser && (
                                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                      YOU
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shrink-0" />
                                  <span>{isCurrentUser ? 'Your Candidate Account' : 'Verified Reviewee Candidate'}</span>
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="py-3.5 px-4 text-center">
                            <div className="inline-block">
                              <span className="text-base font-black font-arnie text-amber-400">
                                {entry.highestRating.toFixed(2)}%
                              </span>
                              <p className="text-[10px] text-slate-400 font-mono">
                                {entry.highestScore} / {entry.totalQuestions} items
                              </p>
                            </div>
                          </td>

                          <td className="py-3.5 px-4 text-center">
                            <span className="px-2.5 py-1 rounded-xl bg-slate-800 text-slate-200 font-mono font-bold text-xs border border-slate-700">
                              {entry.totalAreaAttempts} {entry.totalAreaAttempts === 1 ? 'attempt' : 'attempts'}
                            </span>
                          </td>

                          <td className="py-3.5 px-4 text-center">
                            <span className="font-mono text-slate-300 text-xs">
                              {entry.averageRating.toFixed(2)}%
                            </span>
                          </td>

                          <td className="py-3.5 px-4 text-center">
                            <span className="font-mono text-slate-400 text-xs flex items-center justify-center gap-1">
                              <Clock className="w-3 h-3 text-slate-500" />
                              {formatSeconds(entry.bestTimeSpentSeconds)}
                            </span>
                          </td>

                          <td className="py-3.5 px-4 text-center">
                            {entry.passedArea ? (
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 inline-flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                PASSED (≥50%)
                              </span>
                            ) : (
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                                FAILED (&lt;50%)
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
