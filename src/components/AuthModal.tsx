import React, { useState } from 'react';
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
  Globe,
  KeyRound,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authError,
    clearAuthError,
    signInWithPassword,
    registerWithPassword,
    signIn,
    designatedAdminEmail,
    loading,
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
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-arnie text-lg font-bold text-white flex items-center gap-2">
                Examinee Portal Authentication
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

        <div className="p-6 space-y-5 max-h-[84vh] overflow-y-auto">
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
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="font-bold text-rose-300">Notice</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {localError || authError}
                </p>
              </div>
            </div>
          )}

          {/* Email & Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Display Name (Only on register) */}
            {authMode === 'register' && (
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-300">
                  Full Name / Reviewee Title <span className="text-slate-500 text-[10px]">(Optional)</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Engr. Juan Dela Cruz"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (localError) setLocalError(null);
                  }}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-medium text-slate-300">
                  Password <span className="text-rose-400">*</span>
                </label>
                <span className="text-[10px] text-slate-500">Min. 6 characters</span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (localError) setLocalError(null);
                  }}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field (Register only) */}
            {authMode === 'register' && (
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-300">
                  Confirm Password <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Re-type your password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (localError) setLocalError(null);
                    }}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Dynamic Role Indicator */}
            {email.trim() && (
              <div
                className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                  isCurrentInputAdmin
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {isCurrentInputAdmin ? (
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <User className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  <span className="font-semibold text-[11px]">
                    {isCurrentInputAdmin
                      ? 'Recognized as Super Administrator (Derrick Darrack)'
                      : 'Separate Reviewee Candidate Account'}
                  </span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    isCurrentInputAdmin
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  }`}
                >
                  {isCurrentInputAdmin ? 'ADMIN' : 'USER'}
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !email.includes('@') || password.length < 6}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>
                {isSubmitting
                  ? 'Authenticating...'
                  : authMode === 'signin'
                  ? 'Sign In with Password'
                  : 'Create Account & Sign In'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-800 w-full" />
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

            {/* Vercel Deployment Troubleshooting Note */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center space-x-1.5 text-slate-300 font-semibold">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>Deploying on Vercel?</span>
              </div>
              <p className="leading-relaxed">
                Google popup on Vercel requires adding your domain (e.g.{' '}
                <code className="text-amber-300 font-mono">your-project.vercel.app</code>) to{' '}
                <span className="text-white">Firebase Console &gt; Authentication &gt; Settings &gt; Authorized Domains</span>.
                <br />
                <span className="text-emerald-400 font-medium">
                  ✓ Or simply use the Email &amp; Password option above
                </span>{' '}
                — it works instantly on Vercel, localhost, and any custom domain without any setup!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
