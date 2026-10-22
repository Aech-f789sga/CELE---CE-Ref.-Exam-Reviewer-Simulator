import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  User,
  AlertCircle,
  X,
  Mail,
  ArrowRight,
  Sparkles,
  Lock,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Edit3,
  Clock,
  LogOut,
  Calendar,
  Check,
  RefreshCw,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export const AuthModal: React.FC = () => {
  const {
    user,
    profile,
    isAdmin,
    isAuthModalOpen,
    closeAuthModal,
    authError,
    clearAuthError,
    signInWithPassword,
    registerWithPassword,
    signIn,
    designatedAdminEmail,
    loading,
    updateUsername,
    checkUsernameCooldown,
    signOut,
    authModalReason,
  } = useAuth();

  const { themeConfig } = useTheme();

  // Mode: 'signin' | 'register'
  const [authMode, setAuthMode] = useState<'signin' | 'register'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Username modification state for logged-in users
  const [newUsername, setNewUsername] = useState('');
  const [isUpdatingUsername, setIsUpdatingUsername] = useState(false);
  const [usernameSuccess, setUsernameSuccess] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);

  const activeUser = profile || user;
  const cooldown = checkUsernameCooldown();

  useEffect(() => {
    if (activeUser?.displayName) {
      setNewUsername('');
    }
    setUsernameSuccess(null);
    setUsernameError(null);
  }, [activeUser?.displayName, isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const isCurrentInputAdmin =
    email.trim().toLowerCase() === designatedAdminEmail.toLowerCase();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    clearAuthError();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      setLocalError('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setLocalError('Password must be at least 6 characters long.');
      return;
    }

    if (authMode === 'register') {
      if (password !== confirmPassword) {
        setLocalError('Passwords do not match. Please re-enter.');
        return;
      }
    }

    setIsSubmitting(true);
    try {
      if (authMode === 'signin') {
        const res = await signInWithPassword(cleanEmail, password);
        if (res.success) {
          setSuccessMessage(`Welcome back! Signed in as ${cleanEmail}`);
          setTimeout(() => {
            closeAuthModal();
          }, 600);
        } else {
          setLocalError(res.error || 'Failed to sign in.');
        }
      } else {
        const res = await registerWithPassword(
          cleanEmail,
          password,
          displayName.trim() || undefined
        );
        if (res.success) {
          setSuccessMessage(`Account created successfully! Logged in as ${cleanEmail}`);
          setTimeout(() => {
            closeAuthModal();
          }, 600);
        } else {
          setLocalError(res.error || 'Failed to register account.');
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Authentication encountered an error.';
      setLocalError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignInClick = async () => {
    setLocalError(null);
    clearAuthError();
    await signIn();
  };

  const handleUpdateUsernameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUsernameError(null);
    setUsernameSuccess(null);

    const clean = newUsername.trim();
    if (!clean) {
      setUsernameError('Please enter a new username.');
      return;
    }
    if (clean.length < 3) {
      setUsernameError('Username must be at least 3 characters long.');
      return;
    }
    if (clean.length > 30) {
      setUsernameError('Username cannot exceed 30 characters.');
      return;
    }
    if (clean.toLowerCase() === (activeUser?.displayName || '').toLowerCase()) {
      setUsernameError('New username must be different from your current username.');
      return;
    }

    setIsUpdatingUsername(true);
    try {
      const res = await updateUsername(clean);
      if (res.success && res.profile) {
        setUsernameSuccess(
          `Username successfully updated to "${res.profile.displayName}"! You can modify it again in 7 days.`
        );
        setNewUsername('');
      } else {
        setUsernameError(res.error || 'Failed to update username.');
      }
    } catch (err: unknown) {
      setUsernameError(
        err instanceof Error ? err.message : 'Could not update username. Please try again.'
      );
    } finally {
      setIsUpdatingUsername(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeAuthModal}
    >
      <div
        className="w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
          color: themeConfig.textPrimary,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-5 border-b flex items-center justify-between"
          style={{ borderColor: themeConfig.border, backgroundColor: themeConfig.bgCardSubtle }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-inner">
              {activeUser ? <User className="w-5 h-5" /> : <KeyRound className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-arnie text-lg font-bold text-white flex items-center gap-2">
                {activeUser ? 'Examinee Profile & Settings' : 'Examinee Portal Authentication'}
              </h3>
              <p className="text-xs text-slate-400">
                Philippine Civil Engineering Licensure Exam
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeAuthModal}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* LOGGED IN VIEW: Profile Card & Weekly Username Modification */}
        {activeUser ? (
          <div className="p-6 space-y-5 max-h-[84vh] overflow-y-auto">
            {/* User Overview Card */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3.5">
                {activeUser.photoURL ? (
                  <img
                    src={activeUser.photoURL}
                    alt={activeUser.displayName || 'User'}
                    className="w-12 h-12 rounded-2xl border-2 border-amber-500/30 object-cover shadow-md"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-indigo-500/20 border-2 border-amber-500/40 text-amber-300 font-bold text-base flex items-center justify-center shadow-md">
                    {(activeUser.displayName || activeUser.email || 'U')[0].toUpperCase()}
                  </div>
                )}
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white text-base">
                      {activeUser.displayName || 'Reviewee Candidate'}
                    </span>
                    {isAdmin ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        ADMIN
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                        EXAMINEE
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 font-mono">{activeUser.email}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={async () => {
                  await signOut();
                  closeAuthModal();
                }}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-all cursor-pointer"
                title="Sign out of this session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>

            {/* Username Modification Feature (Once Per Week) */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <Edit3 className="w-4 h-4 text-amber-400" />
                  <h4 className="font-bold text-sm text-white">Modify Examinee Username</h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  Limit: 1× per week
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Your username is publicly displayed on the composite leaderboard, subject rankings, and exam attempt records.
                To prevent impersonation, users are permitted to modify their username <strong>once every 7 days</strong>.
              </p>

              {/* Cooldown Status Badge */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <Clock className={`w-4 h-4 ${cooldown.canChange ? 'text-emerald-400' : 'text-amber-400'}`} />
                  <span className="text-slate-300">
                    {cooldown.canChange ? (
                      <span className="text-emerald-400 font-semibold">Ready to modify</span>
                    ) : (
                      <>
                        Cooldown active: <span className="text-amber-300 font-semibold">{cooldown.formattedRemaining}</span> left
                      </>
                    )}
                  </span>
                </div>

                {!cooldown.canChange && cooldown.nextAllowedDate && (
                  <span className="text-[11px] font-mono text-slate-400">
                    Unlocks {cooldown.nextAllowedDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                )}
              </div>

              {/* Feedback Notifications */}
              {usernameSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2.5 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{usernameSuccess}</span>
                </div>
              )}

              {usernameError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{usernameError}</span>
                </div>
              )}

              {/* Form or Lock State */}
              {cooldown.canChange ? (
                <form onSubmit={handleUpdateUsernameSubmit} className="space-y-3 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      New Username (3-30 characters)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        placeholder="Enter your new username..."
                        maxLength={30}
                        disabled={isUpdatingUsername}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors pr-16"
                      />
                      <span className="absolute right-3 top-2.5 text-[10px] font-mono text-slate-500">
                        {newUsername.length}/30
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      Next modification will be in 7 days
                    </span>

                    <button
                      type="submit"
                      disabled={isUpdatingUsername || !newUsername.trim() || newUsername.trim().length < 3}
                      className="px-4 py-2 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:pointer-events-none text-slate-950 shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
                    >
                      {isUpdatingUsername ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Saving...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Update Username</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-3 rounded-xl bg-slate-950/40 border border-dashed border-slate-800 text-center space-y-1">
                  <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Username modification is temporarily locked by weekly policy.</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    You can change your username again after 7 days from your previous update.
                  </p>
                </div>
              )}
            </div>

            {/* Account Metadata */}
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 text-[11px] text-slate-400 space-y-1">
              <div className="flex justify-between">
                <span>Account Created:</span>
                <span className="font-mono text-slate-300">
                  {profile?.createdAt
                    ? new Date(profile.createdAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    : 'Active'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Last Username Modification:</span>
                <span className="font-mono text-slate-300">
                  {profile?.lastUsernameChangedAt
                    ? new Date(profile.lastUsernameChangedAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    : 'Never modified'}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeAuthModal}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          /* LOGGED OUT VIEW: Sign In with Password & Google Popup */
          <div className="p-6 space-y-5 max-h-[84vh] overflow-y-auto">
            {/* Feature Access Requirement Notice */}
            {authModalReason && (
              <div className="p-4 rounded-2xl bg-amber-500/15 border-2 border-amber-500/40 text-amber-200 text-xs flex items-start space-x-3 shadow-lg shadow-amber-500/5 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="p-2 rounded-xl bg-amber-500/25 text-amber-300 shrink-0 mt-0.5 border border-amber-500/40">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-bold text-white text-[13px] flex items-center space-x-2">
                    <span>Sign In or Sign Up Required</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {authModalReason}
                  </p>
                </div>
              </div>
            )}

            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 p-1 bg-slate-900/90 rounded-2xl border border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signin');
                  setLocalError(null);
                  clearAuthError();
                }}
                className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                  authMode === 'signin'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Sign In with Password</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('register');
                  setLocalError(null);
                  clearAuthError();
                }}
                className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                  authMode === 'register'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Create Account</span>
              </button>
            </div>

            {/* Role Policy Notice */}
            <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 text-[11px] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Account Role &amp; Sync</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Cloud Firestore
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                • Super Admin: <strong className="text-amber-300">Designated System Administrator</strong> (Admin control, post announcements, user roster).
                <br />
                • All other examinee emails: registered as independent Reviewee accounts with separate history, attempts, and leaderboard rankings.
              </p>
            </div>

            {/* Success Banner */}
            {successMessage && (
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">{successMessage}</span>
              </div>
            )}

            {/* Error Banner */}
            {(localError || authError) && (
              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium">{localError || authError}</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {authMode === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Examinee Username (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="e.g. Engr. Juan Dela Cruz"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    />
                    <User className="w-4 h-4 text-slate-500 absolute right-3.5 top-2.5" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="candidate@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  <Mail className="w-4 h-4 text-slate-500 absolute right-3.5 top-2.5" />
                </div>
                {isCurrentInputAdmin && (
                  <p className="mt-1 text-[11px] font-medium text-amber-400 flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Recognized Administrator Account</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-300 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {authMode === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter your password"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    />
                    <Lock className="w-4 h-4 text-slate-500 absolute right-3.5 top-2.5" />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition-all hover:scale-[1.01] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <span>
                  {isSubmitting
                    ? 'Processing...'
                    : authMode === 'signin'
                    ? 'Sign In to Reviewer'
                    : 'Create Reviewee Account'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center pt-1">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <span className="bg-slate-900 px-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider shrink-0">
                OR USE GOOGLE SIGN IN
              </span>
            </div>

            {/* Google Popup Button */}
            <div className="space-y-2.5">
              <button
                type="button"
                disabled={loading || isSubmitting}
                onClick={handleGoogleSignInClick}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center space-x-3 shadow-md transition-all hover:scale-[1.01] cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>{loading ? 'Connecting to Google...' : 'Sign In with Google Popup'}</span>
              </button>

              {/* Privacy and Security Guarantee Notice */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-[11px] text-slate-400 space-y-1.5 mt-2">
                <div className="flex items-center space-x-1.5 font-bold text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Privacy &amp; Security Guarantee</span>
                </div>
                <p className="leading-relaxed text-[11px] text-slate-300">
                  Your email address and password are <strong>never accessible to platform administrators</strong> or instructors. All account credentials are encrypted and authenticated directly by Google Cloud Firebase. Only your chosen public display username and exam scores are visible on the leaderboard.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
