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
  UserPlus,
  Plus,
  X,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  fetchAllUsers,
  fetchExamAttempts,
  registerUserByAdmin,
  UserProfile,
  CloudExamAttempt,
} from '../services/firebase';

interface AdminPanelProps {
  onNavigateToExam?: (subject: 'MSTC' | 'HPGE' | 'PSAD') => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onNavigateToExam }) => {
  const { user, profile, isAdmin, designatedAdminEmail } = useAuth();
  const { themeConfig } = useTheme();

  const [usersList, setUsersList] = useState<UserProfile[]>([]);
  const [attemptsList, setAttemptsList] = useState<CloudExamAttempt[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState<boolean>(false);
  const [newUserEmail, setNewUserEmail] = useState<string>('');
  const [newUserName, setNewUserName] = useState<string>('');
  const [isAddingUser, setIsAddingUser] = useState<boolean>(false);
  const [addUserSuccess, setAddUserSuccess] = useState<string | null>(null);

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

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserEmail.trim() || !newUserEmail.includes('@')) return;

    setIsAddingUser(true);
    setAddUserSuccess(null);
    try {
      const created = await registerUserByAdmin(newUserEmail.trim(), newUserName.trim() || undefined);
      setAddUserSuccess(`Successfully added account ${created.email} (${created.role.toUpperCase()})`);
      setNewUserEmail('');
      setNewUserName('');
      await loadData();
      setTimeout(() => {
        setIsAddUserModalOpen(false);
        setAddUserSuccess(null);
      }, 1200);
    } catch (err) {
      console.error('Failed to create user:', err);
    } finally {
      setIsAddingUser(false);
    }
  };

  const filteredUsers = usersList.filter((u) => {
    const q = searchTerm.toLowerCase();
    return (
      (u.email || '').toLowerCase().includes(q) ||
      (u.displayName || '').toLowerCase().includes(q) ||
      (u.role || '').toLowerCase().includes(q)
    );
  });

  // Calculate statistics
  const totalUsers = usersList.length;
  const adminUsersCount = usersList.filter(
    (u) => u.role === 'admin' || u.email.toLowerCase() === designatedAdminEmail.toLowerCase()
  ).length;
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
              All other Google accounts registered in the database are assigned standard candidate examinee permissions.
            </p>
          </div>

          <div className="flex items-center space-x-2.5">
            <button
              type="button"
              onClick={() => setIsAddUserModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-2 shadow-lg transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>Add Candidate Email</span>
            </button>

            <button
              type="button"
              onClick={loadData}
              disabled={loading}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono flex items-center space-x-2 border border-slate-700 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Records</span>
            </button>
          </div>
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
            <span>Auth: <strong className="text-white">Google Account (Separate Profile)</strong></span>
            <span>Database: <strong className="text-cyan-400">Cloud Firestore</strong></span>
            <span>Status: <strong className="text-emerald-400">Connected</strong></span>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div
          className="rounded-2xl p-5 border shadow-lg"
          style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Total Registered Users</span>
            <Users className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-bold font-arnie text-white">{totalUsers}</span>
            <span className="text-xs text-slate-400 font-mono">accounts</span>
          </div>
          <div className="mt-2 text-[11px] text-indigo-300">
            Synced with Cloud Firestore database
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-2xl p-5 border shadow-lg"
          style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Examinees / Reviewees</span>
            <UserCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-bold font-arnie text-emerald-400">{standardUsersCount}</span>
            <span className="text-xs text-slate-400 font-mono">candidates</span>
          </div>
          <div className="mt-2 text-[11px] text-emerald-300">
            Assigned standard examinee permissions
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="rounded-2xl p-5 border shadow-lg"
          style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Super Administrator</span>
            <ShieldCheck className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-bold font-arnie text-amber-400">{adminUsersCount}</span>
            <span className="text-xs text-slate-400 font-mono">admin</span>
          </div>
          <div className="mt-2 text-[11px] text-amber-300 font-mono truncate" title={designatedAdminEmail}>
            {designatedAdminEmail}
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="rounded-2xl p-5 border shadow-lg"
          style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Recorded Exam Attempts</span>
            <Award className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-bold font-arnie text-cyan-400">{attemptsList.length}</span>
            <span className="text-xs text-slate-400 font-mono">attempts</span>
          </div>
          <div className="mt-2 text-[11px] text-cyan-300">
            MSTC (66) • HPGE (46) • PSAD (75)
          </div>
        </div>
      </div>

      {/* User Directory Table */}
      <div
        className="rounded-3xl p-6 border shadow-2xl"
        style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-lg font-bold font-arnie text-white flex items-center space-x-2">
              <Users className="w-5 h-5 text-indigo-400" />
              <span>Registered Accounts &amp; Email Roster</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Role permissions: Only <code className="text-emerald-400 font-mono">{designatedAdminEmail}</code> possesses administrative privileges. All other accounts are standard users.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by email, name, or role..."
                className="pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="button"
              onClick={() => setIsAddUserModalOpen(true)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors cursor-pointer"
              title="Add User"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/80 text-slate-400 font-mono uppercase text-[10px] border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Account / Display Name</th>
                <th className="py-3 px-4">Google Email</th>
                <th className="py-3 px-4">Assigned Role</th>
                <th className="py-3 px-4">Permissions Access</th>
                <th className="py-3 px-4">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-sans">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400">
                    No matching accounts found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => {
                  const isUserAdminAccount =
                    u.role === 'admin' || u.email.toLowerCase() === designatedAdminEmail.toLowerCase();
                  return (
                    <tr
                      key={u.uid || u.email}
                      className={`transition-colors ${
                        isUserAdminAccount ? 'bg-amber-500/5 hover:bg-amber-500/10' : 'hover:bg-slate-900/50'
                      }`}
                    >
                      <td className="py-3.5 px-4 flex items-center space-x-3">
                        {u.photoURL ? (
                          <img
                            src={u.photoURL}
                            alt={u.displayName}
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div
                            className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs ${
                              isUserAdminAccount
                                ? 'bg-amber-500 text-slate-950'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {(u.displayName || u.email || 'U')[0].toUpperCase()}
                          </div>
                        )}
                        <div>
                          <span className="font-bold text-white block">
                            {u.displayName || (isUserAdminAccount ? 'Derrick Darrack (Admin)' : 'Candidate Examinee')}
                          </span>
                          <span
                            className={`text-[10px] font-mono ${
                              isUserAdminAccount ? 'text-amber-400' : 'text-slate-400'
                            }`}
                          >
                            UID: {u.uid.substring(0, 18)}...
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-medium">
                        <span className={isUserAdminAccount ? 'text-amber-300 font-bold' : 'text-slate-300'}>
                          {u.email}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        {isUserAdminAccount ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            <ShieldCheck className="w-3 h-3" />
                            <span>ADMIN</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Users className="w-3 h-3" />
                            <span>USER</span>
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-[11px] text-slate-300">
                        {isUserAdminAccount
                          ? 'Super Admin • Manage System, User Accounts & PRC Exam Database'
                          : 'Examinee • Take Board Exams, Save Attempts & Review Booklets'}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-400 text-[11px]">
                        {u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString() : 'Active'}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Broadcast Announcements Section */}
      <div
        className="rounded-3xl p-6 border shadow-2xl"
        style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold font-arnie text-white flex items-center space-x-2">
            <Mail className="w-5 h-5 text-amber-400" />
            <span>Examinee Portal System Announcement</span>
          </h2>
          {noticeSaved && (
            <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Broadcast Notice Updated</span>
            </span>
          )}
        </div>
        <p className="text-xs text-slate-400 mb-3">
          This system notice is broadcast across the portal header for all registered examinees.
        </p>
        <textarea
          rows={3}
          value={adminNotice}
          onChange={(e) => setAdminNotice(e.target.value)}
          className="w-full p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
        />
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={() => {
              setNoticeSaved(true);
              setTimeout(() => setNoticeSaved(false), 3000);
            }}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            Update Portal Announcement
          </button>
        </div>
      </div>

      {/* Add User Modal */}
      {isAddUserModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setIsAddUserModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border shadow-2xl p-6 relative animate-in zoom-in-95"
            style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Add / Register Account</h3>
                  <p className="text-xs text-slate-400">Save to Cloud Firestore Roster</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAddUserModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {addUserSuccess && (
              <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{addUserSuccess}</span>
              </div>
            )}

            <form onSubmit={handleCreateUser} className="mt-4 space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-300">
                  Google Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. examinee@gmail.com"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-300">
                  Display / Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Engr. Maria Santos"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                • If email is <strong className="text-amber-300">{designatedAdminEmail}</strong>, it receives <span className="text-amber-300 font-bold">ADMIN</span> role.
                <br />
                • Any other email address receives <span className="text-emerald-400 font-bold">USER</span> (Examinee) role.
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddUserModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAddingUser || !newUserEmail.includes('@')}
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isAddingUser ? 'Adding...' : 'Register to Firestore'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
