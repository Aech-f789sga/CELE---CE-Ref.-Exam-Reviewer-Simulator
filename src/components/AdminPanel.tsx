import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Users,
  Award,
  Calendar,
  AlertCircle,
  Sparkles,
  RefreshCw,
  Search,
  CheckCircle2,
  Lock,
  Mail,
  UserCheck,
  Flame,
  Volume2,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  fetchAllUsers,
  fetchExamAttempts,
  UserProfile,
  CloudExamAttempt,
} from '../services/firebase';

interface AdminPanelProps {
  onNavigateToExam?: (subject: 'MSTC' | 'HPGE' | 'PSAD') => void;
  onRunVoiceCommand?: (cmd: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onNavigateToExam, onRunVoiceCommand }) => {
  const { user, profile, isAdmin, designatedAdminEmail } = useAuth();
  const { themeConfig } = useTheme();

  const [usersList, setUsersList] = useState<UserProfile[]>([]);
  const [attemptsList, setAttemptsList] = useState<CloudExamAttempt[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [adminNotice, setAdminNotice] = useState<string>(
    'PRC Board Exam Simulator is updated with November 2024 MSTC (66 items), HPGE (46 items), and PSAD (75 items).'
  );
  const [noticeSaved, setNoticeSaved] = useState<boolean>(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const [allUsers, allAttempts] = await Promise.all([
        fetchAllUsers(),
        fetchExamAttempts(undefined, true),
      ]);
      setUsersList(allUsers);
      setAttemptsList(allAttempts);
    } catch (e) {
      console.error('Error loading admin data:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredUsers = usersList.filter((u) => {
    const q = searchTerm.toLowerCase();
    return (
      u.email.toLowerCase().includes(q) ||
      u.displayName.toLowerCase().includes(q) ||
      u.role.toLowerCase().includes(q)
    );
  });

  // Calculate statistics
  const totalUsers = usersList.length;
  const adminUsersCount = usersList.filter((u) => u.role === 'admin' || u.email === designatedAdminEmail).length;
  const standardUsersCount = totalUsers - adminUsersCount;

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      {/* Top Banner */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-2xl relative overflow-hidden"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>RBAC System Control • Super Administrator</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-arnie text-white flex items-center space-x-2">
              <span>Admin Management Center</span>
            </h1>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Designated Super Administrator account: <strong className="text-emerald-400 font-mono">{designatedAdminEmail}</strong>.
              All other Google accounts registered in the database are assigned standard user permissions.
            </p>
          </div>

          <button
            type="button"
            onClick={loadData}
            disabled={loading}
            className="self-start md:self-center px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono flex items-center space-x-2 border border-slate-700 transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Records</span>
          </button>
        </div>

        {/* Current logged in status badge */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-3">
            {profile?.photoURL ? (
              <img
                src={profile.photoURL}
                alt={profile.displayName}
                className="w-9 h-9 rounded-full ring-2 ring-emerald-500"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                {profile?.displayName?.[0] || 'A'}
              </div>
            )}
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white">{profile?.displayName || 'Administrator'}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ADMIN
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">{profile?.email || designatedAdminEmail}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 font-mono text-[11px] text-slate-400">
            <span>Auth: <strong className="text-white">Google OAuth 2.0</strong></span>
            <span>Database: <strong className="text-cyan-400">Cloud Firestore</strong></span>
            <span>Security: <strong className="text-emerald-400">Enforced ABAC Rules</strong></span>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className="rounded-2xl p-5 border shadow-lg"
          style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">Total Registered Users</span>
            <Users className="w-5 h-5 text-indigo-400" />
          </div>
          <p className="text-2xl font-bold font-arnie text-white mt-2">
            {totalUsers > 0 ? totalUsers : '1 Active Admin'}
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            {adminUsersCount} Admin • {standardUsersCount} Standard Users
          </p>
        </div>

        <div
          className="rounded-2xl p-5 border shadow-lg"
          style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">Exam Sets Available</span>
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <p className="text-2xl font-bold font-arnie text-white mt-2">
            April &amp; November 2024
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            MSTC (66) • HPGE (46) • PSAD (75)
          </p>
        </div>

        <div
          className="rounded-2xl p-5 border shadow-lg"
          style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">AI Voice Command State</span>
            <Volume2 className="w-5 h-5 text-cyan-400" />
          </div>
          <p className="text-2xl font-bold font-arnie text-white mt-2">
            Active &amp; Ready
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            Web Speech Navigation &amp; Search
          </p>
        </div>
      </div>

      {/* Users Role Directory Table */}
      <div
        className="rounded-3xl border shadow-2xl p-6"
        style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-lg font-bold font-arnie text-white flex items-center space-x-2">
              <Users className="w-5 h-5 text-indigo-400" />
              <span>User Directory &amp; Role Assignments</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Role permissions: Only <code className="text-emerald-400">{designatedAdminEmail}</code> possesses administrative privileges.
            </p>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search user or email..."
              className="pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/80 text-slate-400 font-mono uppercase text-[10px] border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Assigned Role</th>
                <th className="py-3 px-4">Permissions</th>
                <th className="py-3 px-4">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-sans">
              {/* Always display the designated admin */}
              <tr className="bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                <td className="py-3.5 px-4 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center">
                    D
                  </div>
                  <div>
                    <span className="font-bold text-white block">Derrick Darrack</span>
                    <span className="text-[10px] text-emerald-400">Owner &amp; Creator</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono text-emerald-300 font-medium">
                  {designatedAdminEmail}
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" />
                    <span>ADMIN</span>
                  </span>
                </td>
                <td className="py-3.5 px-4 text-[11px] text-slate-300">
                  Full Root Access • Manage System &amp; Examinees
                </td>
                <td className="py-3.5 px-4 font-mono text-slate-400 text-[11px]">
                  {profile?.lastLoginAt ? new Date(profile.lastLoginAt).toLocaleDateString() : 'Active Now'}
                </td>
              </tr>

              {/* Other users from Firestore */}
              {filteredUsers
                .filter((u) => u.email.toLowerCase() !== designatedAdminEmail.toLowerCase())
                .map((u) => (
                  <tr key={u.uid} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3.5 px-4 flex items-center space-x-3">
                      {u.photoURL ? (
                        <img src={u.photoURL} alt={u.displayName} className="w-8 h-8 rounded-full" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-bold">
                          {u.displayName?.[0] || 'U'}
                        </div>
                      )}
                      <span className="font-medium text-slate-200">{u.displayName || 'Candidate'}</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">{u.email}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        <Users className="w-3 h-3" />
                        <span>USER</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-400">
                      Standard Candidate • Take Exams &amp; View Booklet
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-400 text-[11px]">
                      {new Date(u.lastLoginAt || u.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Voice Command Testing Console */}
      <div
        className="rounded-3xl border shadow-2xl p-6"
        style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold font-arnie text-white">
              AI Voice Command Simulator &amp; Quick Dispatch
            </h2>
            <p className="text-xs text-slate-400">
              Test verbal commands directly or review available voice navigation intents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { text: 'open booklet', desc: 'Navigates directly to Questions & Booklet' },
            { text: 'find Mohr', desc: 'Searches for Mohr\'s circle problems' },
            { text: 'find Manning', desc: 'Searches for Manning\'s hydraulic formula' },
            { text: 'select HPGE', desc: 'Sets subject to Hydraulics & Geotechnical' },
            { text: 'select MSTC', desc: 'Sets subject to Mathematics & Surveying' },
            { text: 'select PSAD', desc: 'Sets subject to Structural Analysis & Design' },
            { text: 'open performance', desc: 'Jumps to PRC Rating performance analysis' },
            { text: 'aurora theme', desc: 'Applies 3D Structural Aurora theme' },
            { text: 'open setup', desc: 'Returns to main exam configuration' },
          ].map((action) => (
            <button
              key={action.text}
              type="button"
              onClick={() => onRunVoiceCommand?.(action.text)}
              className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-left transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-cyan-300 group-hover:text-cyan-200">
                  "{action.text}"
                </span>
                <Sparkles className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{action.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
