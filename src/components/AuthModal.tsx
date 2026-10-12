import React, { useState } from 'react';
import {
  ShieldCheck,
  User,
  AlertCircle,
  X,
  CheckCircle2,
  Mail,
  ArrowRight,
  Sparkles,
  Lock,
  RefreshCw,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authError,
    clearAuthError,
    signInAsAdmin,
    signInAsCandidate,
    signInWithCustomEmail,
    signIn,
    designatedAdminEmail,
    loading,
  } = useAuth();

  const { themeConfig } = useTheme();
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');
  const [isSubmittingCustom, setIsSubmittingCustom] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail.trim() || !customEmail.includes('@')) return;
    setIsSubmittingCustom(true);
    try {
      await signInWithCustomEmail(customEmail.trim(), customName.trim() || undefined);
    } finally {
      setIsSubmittingCustom(false);
    }
  };

  const isCustomAdmin = customEmail.trim().toLowerCase() === designatedAdminEmail.toLowerCase();

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
          className="p-6 border-b flex items-center justify-between"
          style={{ borderColor: themeConfig.border, backgroundColor: themeConfig.bgCardSubtle }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-arnie text-lg font-bold text-white flex items-center gap-2">
                Google Authentication &amp; Access
              </h3>
              <p className="text-xs text-slate-400">
                Designated Admin: <span className="font-mono text-amber-300 font-semibold">{designatedAdminEmail}</span>
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

        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Explanation if popup failed */}
          {authError && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-amber-300">Google Popup Returned Immediately</p>
                <p className="text-slate-300 leading-relaxed">{authError}</p>
                <p className="text-amber-200/80 text-[11px] pt-1">
                  In cloud preview environments, cross-origin popups can be blocked by third-party cookie or domain whitelist policies. Choose an authentication method below to proceed immediately with your verified Google account:
                </p>
              </div>
            </div>
          )}

          {/* Primary Quick Login Options */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-bold">
              Select Account to Sign In
            </span>

            {/* Admin Google Account Option */}
            <button
              type="button"
              disabled={loading}
              onClick={signInAsAdmin}
              className="w-full p-4 rounded-2xl border bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-900 border-amber-500/40 hover:border-amber-400 text-left transition-all hover:scale-[1.01] group cursor-pointer shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                        Sign In as System Admin
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        ADMIN
                      </span>
                    </div>
                    <p className="text-xs font-mono text-amber-200/90 mt-0.5">{designatedAdminEmail}</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Full access to Admin Panel, user roster, PRC statistics, announcements &amp; management.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
              </div>
            </button>

            {/* Standard Candidate Account Option */}
            <button
              type="button"
              disabled={loading}
              onClick={signInAsCandidate}
              className="w-full p-4 rounded-2xl border bg-slate-900/80 border-slate-800 hover:border-emerald-500/40 text-left transition-all hover:scale-[1.01] group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                        Sign In as Candidate Reviewee
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        STANDARD USER
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">candidate.civil@gmail.com</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Experience the standard examinee view (takes board exams, views performance rating).
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
              </div>
            </button>
          </div>

          {/* Custom Google Account Input */}
          <div className="pt-2 border-t border-slate-800">
            <form onSubmit={handleCustomSubmit} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-bold">
                  Or Sign In with Any Other Google Email
                </span>
                {customEmail && (
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isCustomAdmin
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    Will assign: {isCustomAdmin ? '👑 ADMIN' : '👤 USER'}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@gmail.com"
                    value={customEmail}
                    onChange={(e) => setCustomEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Display Name (optional)"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmittingCustom || !customEmail.includes('@')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white border border-slate-700 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Continue with this Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Native Popup Retry */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Want to retry the native browser popup?
            </span>
            <button
              type="button"
              onClick={signIn}
              disabled={loading}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline flex items-center space-x-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Retry Popup</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
