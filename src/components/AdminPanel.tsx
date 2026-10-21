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
  Megaphone,
  Pin,
  Trash2,
  Eye,
  EyeOff,
  AlertTriangle,
  MessageSquare,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  fetchAllUsers,
  fetchExamAttempts,
  registerUserByAdmin,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  fetchAnnouncements,
  fetchUserAdminMessages,
  updateAdminMessage,
  UserProfile,
  CloudExamAttempt,
  SystemAnnouncement,
  UserAdminMessage,
} from '../services/firebase';
import { CommunityStatsCards } from './CommunityStatsCards';

interface AdminPanelProps {
  onNavigateToExam?: (subject: 'MSTC' | 'HPGE' | 'PSAD') => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onNavigateToExam }) => {
  const { user, profile, isAdmin, designatedAdminEmail } = useAuth();
  const { themeConfig } = useTheme();

  const [usersList, setUsersList] = useState<UserProfile[]>([]);
  const [attemptsList, setAttemptsList] = useState<CloudExamAttempt[]>([]);
  const [announcementsList, setAnnouncementsList] = useState<SystemAnnouncement[]>([]);
  const [messagesList, setMessagesList] = useState<UserAdminMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState<boolean>(false);
  const [newUserEmail, setNewUserEmail] = useState<string>('');
  const [newUserName, setNewUserName] = useState<string>('');
  const [isAddingUser, setIsAddingUser] = useState<boolean>(false);
  const [addUserSuccess, setAddUserSuccess] = useState<string | null>(null);

  // New announcement states
  const [annTitle, setAnnTitle] = useState<string>('');
  const [annMessage, setAnnMessage] = useState<string>('');
  const [annCategory, setAnnCategory] = useState<'General' | 'Exam Notice' | 'PRC Advisory' | 'Schedule' | 'Tip'>('Exam Notice');
  const [annPriority, setAnnPriority] = useState<'normal' | 'important' | 'urgent'>('important');
  const [annPinned, setAnnPinned] = useState<boolean>(false);
  const [isPostingAnn, setIsPostingAnn] = useState<boolean>(false);
  const [annSuccessMsg, setAnnSuccessMsg] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [allUsers, allAttempts, allAnnouncements, allMessages] = await Promise.all([
        fetchAllUsers(),
        fetchExamAttempts(undefined, true),
        fetchAnnouncements(false),
        fetchUserAdminMessages(),
      ]);
      setUsersList(allUsers);
      setAttemptsList(allAttempts);
      setAnnouncementsList(allAnnouncements);
      setMessagesList(allMessages);
    } catch (e) {
      console.error('Error loading admin data:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateMessageStatus = async (id: string, status: 'read' | 'resolved') => {
    try {
      await updateAdminMessage(id, { status });
      setMessagesList((prev) =>
        prev.map((m) => (m.id === id ? { ...m, status } : m))
      );
    } catch (err) {
      console.error('Failed to update message status:', err);
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

  const handlePostAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!annTitle.trim() || !annMessage.trim()) return;

    setIsPostingAnn(true);
    setAnnSuccessMsg(null);
    try {
      const createdId = await createAnnouncement({
        title: annTitle.trim(),
        message: annMessage.trim(),
        category: annCategory,
        priority: annPriority,
        isPinned: annPinned,
        isActive: true,
        authorEmail: designatedAdminEmail,
        authorName: 'Derrick Darrack (Admin)',
      });

      if (createdId) {
        setAnnSuccessMsg('Official announcement broadcasted to all examinees successfully!');
        setAnnTitle('');
        setAnnMessage('');
        setAnnPinned(false);
        const updated = await fetchAnnouncements(false);
        setAnnAnnouncementsList(updated);
        setTimeout(() => setAnnSuccessMsg(null), 3500);
      }
    } catch (err) {
      console.error('Failed to post announcement:', err);
    } finally {
      setIsPostingAnn(false);
    }
  };

  const setAnnAnnouncementsList = (list: SystemAnnouncement[]) => {
    setAnnouncementsList(list);
  };

  const handleToggleAnnouncement = async (id: string, currentActive: boolean) => {
    try {
      await updateAnnouncement(id, { isActive: !currentActive });
      const updated = await fetchAnnouncements(false);
      setAnnouncementsList(updated);
    } catch (e) {
      console.error('Error toggling announcement:', e);
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this announcement?')) return;
    try {
      await deleteAnnouncement(id);
      const updated = await fetchAnnouncements(false);
      setAnnouncementsList(updated);
    } catch (e) {
      console.error('Error deleting announcement:', e);
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
              Designated Super Administrator: <strong className="text-emerald-400 font-mono">System Administrator (Verified)</strong>.
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
              <span className="text-[11px] text-slate-400 font-mono">System Administrator Account</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 font-mono text-[11px] text-slate-400">
            <span>Auth: <strong className="text-white">Google Account (Separate Profile)</strong></span>
            <span>Database: <strong className="text-cyan-400">Cloud Firestore</strong></span>
            <span>Status: <strong className="text-emerald-400">Connected</strong></span>
          </div>
        </div>
      </div>

      {/* Metrics Row (Community & Examination Participation Statistics) */}
      <CommunityStatsCards
        totalUsers={totalUsers}
        standardUsersCount={standardUsersCount}
        adminUsersCount={adminUsersCount}
        attemptsCount={attemptsList.length}
        loading={loading}
      />

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
              Role permissions: The designated Super Administrator possesses administrative privileges. All other accounts are standard users.
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

      {/* Official Broadcast Announcements Section */}
      <div
        className="rounded-3xl p-6 border shadow-2xl space-y-6"
        style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold font-arnie text-white flex items-center space-x-2">
              <Megaphone className="w-5 h-5 text-amber-400" />
              <span>Official Broadcast Announcements Management</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Updates and bulletins posted here sync directly to Cloud Firestore and appear immediately on examinees' Announcements portal and top broadcast bar.
            </p>
          </div>

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold self-start sm:self-auto">
            {announcementsList.length} Announcements Stored
          </span>
        </div>

        {/* Success Alert */}
        {annSuccessMsg && (
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2.5 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">{annSuccessMsg}</span>
          </div>
        )}

        {/* Create New Announcement Form */}
        <form onSubmit={handlePostAnnouncement} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
            <Plus className="w-4 h-4" />
            <span>Create &amp; Publish New Announcement</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2 space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Announcement Title <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. November 2024 Exam Coverage & Time Limits Finalized"
                value={annTitle}
                onChange={(e) => setAnnTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Category
              </label>
              <select
                value={annCategory}
                onChange={(e) => setAnnCategory(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Exam Notice">Exam Notice</option>
                <option value="PRC Advisory">PRC Advisory</option>
                <option value="Schedule">Schedule</option>
                <option value="Tip">Tip</option>
                <option value="General">General</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              Announcement Message Body <span className="text-rose-400">*</span>
            </label>
            <textarea
              rows={3}
              required
              placeholder="Enter bulletin text, PRC guidelines, tips, or exam timetable updates..."
              value={annMessage}
              onChange={(e) => setAnnMessage(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 leading-relaxed font-sans"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <label className="text-xs text-slate-300 font-medium">Priority:</label>
                <select
                  value={annPriority}
                  onChange={(e) => setAnnPriority(e.target.value as any)}
                  className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="normal">Normal Notice</option>
                  <option value="important">Important (Amber)</option>
                  <option value="urgent">Urgent (Red Alert)</option>
                </select>
              </div>

              <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={annPinned}
                  onChange={(e) => setAnnPinned(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-800 text-amber-500 focus:ring-0"
                />
                <span className="flex items-center gap-1 text-amber-300 font-semibold">
                  <Pin className="w-3.5 h-3.5" />
                  Pin to Top
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isPostingAnn || !annTitle.trim() || !annMessage.trim()}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <span>{isPostingAnn ? 'Publishing...' : 'Broadcast Announcement'}</span>
              <Megaphone className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Existing Announcements List */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Active Published Announcements ({announcementsList.length})
          </h3>

          {announcementsList.length === 0 ? (
            <p className="text-xs text-slate-500 italic p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              No announcements published yet. Post your first bulletin above to notify examinees.
            </p>
          ) : (
            <div className="space-y-2.5">
              {announcementsList.map((ann) => (
                <div
                  key={ann.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    ann.isActive
                      ? ann.isPinned
                        ? 'bg-amber-500/5 border-amber-500/40'
                        : 'bg-slate-900/60 border-slate-800'
                      : 'bg-slate-950/40 border-slate-900 opacity-60'
                  }`}
                >
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      {ann.isPinned && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 flex items-center gap-1">
                          <Pin className="w-3 h-3" />
                          PINNED
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300">
                        {ann.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          ann.priority === 'urgent'
                            ? 'bg-rose-500/20 text-rose-300'
                            : ann.priority === 'important'
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {ann.priority?.toUpperCase()}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {new Date(ann.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white">{ann.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                      {ann.message}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleToggleAnnouncement(ann.id, ann.isActive)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                        ann.isActive
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                      title={ann.isActive ? 'Deactivate announcement' : 'Activate announcement'}
                    >
                      {ann.isActive ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      <span>{ann.isActive ? 'Active' : 'Hidden'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteAnnouncement(ann.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      title="Delete announcement"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reviewee Messages & Material Requests Inbox */}
      <div
        className="rounded-3xl border p-6 shadow-xl space-y-6"
        style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-white text-lg">Reviewee Messages &amp; Requests</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {messagesList.filter((m) => m.status === 'unread').length} Unread
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Direct questions, question bank requests, financial assistance notes, and feedback
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={loadData}
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Inbox</span>
          </button>
        </div>

        {messagesList.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs bg-slate-900/40 rounded-2xl border border-slate-800/80">
            <MessageSquare className="w-8 h-8 text-slate-500 mx-auto mb-2 opacity-60" />
            <p className="font-semibold text-slate-300">No Reviewee Messages Received Yet</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Messages submitted through the &quot;Message Admin&quot; feature appear here in real time.
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
            {messagesList.map((msg) => (
              <div
                key={msg.id}
                className={`p-4 rounded-2xl border transition-all space-y-2.5 ${
                  msg.status === 'unread'
                    ? 'bg-amber-500/5 border-amber-500/30 shadow-md'
                    : msg.status === 'resolved'
                    ? 'bg-slate-950/40 border-slate-800/60 opacity-70'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        msg.status === 'unread'
                          ? 'bg-amber-500 text-slate-950'
                          : msg.status === 'resolved'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {msg.status.toUpperCase()}
                    </span>

                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {msg.category}
                    </span>

                    <span className="text-[11px] font-mono text-slate-400">
                      From: <strong className="text-white">{msg.senderName}</strong>
                      {msg.senderEmail && (
                        <span className="text-slate-400 ml-1">({msg.senderEmail})</span>
                      )}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-500 font-mono">
                    {new Date(msg.createdAt).toLocaleDateString()} {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">{msg.subject}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                    {msg.message}
                  </p>
                </div>

                <div className="flex items-center justify-end gap-2 pt-1 text-xs">
                  {msg.status !== 'read' && (
                    <button
                      type="button"
                      onClick={() => handleUpdateMessageStatus(msg.id, 'read')}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-semibold transition-colors cursor-pointer"
                    >
                      Mark as Read
                    </button>
                  )}
                  {msg.status !== 'resolved' && (
                    <button
                      type="button"
                      onClick={() => handleUpdateMessageStatus(msg.id, 'resolved')}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Mark Resolved</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
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
                • The designated Super Administrator account receives <span className="text-amber-300 font-bold">ADMIN</span> role.
                <br />
                • All candidate email addresses receive <span className="text-emerald-400 font-bold">USER</span> (Examinee) role.
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
