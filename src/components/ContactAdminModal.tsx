import React, { useState } from 'react';
import {
  MessageSquare,
  Send,
  X,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Heart,
  Sparkles,
  Lock,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { sendMessageToAdmin, UserAdminMessage } from '../services/firebase';

interface ContactAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactAdminModal: React.FC<ContactAdminModalProps> = ({ isOpen, onClose }) => {
  const { user, profile } = useAuth();
  const activeUser = profile || user;

  const [senderName, setSenderName] = useState<string>(activeUser?.displayName || '');
  const [senderEmail, setSenderEmail] = useState<string>(activeUser?.email || '');
  const [category, setCategory] = useState<UserAdminMessage['category']>(
    'Question Bank Request'
  );
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg('Please fill in your name, subject, and message details.');
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      await sendMessageToAdmin({
        senderName: senderName.trim(),
        senderEmail: senderEmail.trim() || undefined,
        category,
        subject: subject.trim(),
        message: message.trim(),
        userId: activeUser?.uid || undefined,
      });

      setSubmitted(true);
    } catch (err: any) {
      console.error('Failed to send admin message:', err);
      setErrorMsg('Failed to send your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubject('');
    setMessage('');
    setSubmitted(false);
    setErrorMsg(null);
  };

  return (
    <div className="fixed inset-0 z-[99998] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(245, 158, 11, 0.15)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-arnie text-base sm:text-lg font-bold text-white leading-tight">
                Message the Administrator
              </h2>
              <p className="text-[11px] text-slate-400">
                Direct requests, questions, suggestions &amp; study support
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="font-arnie text-lg font-bold text-white">
                  Message Sent to Administrator!
                </h3>
                <p className="text-slate-300 text-xs max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. The administrator will review your message, request, or feedback. We continuously improve this free platform for every reviewee.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-lg"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[11px] flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Engr. Juan Dela Cruz"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Your Email (Optional / For Reply)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. juan@example.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Request / Inquiry Category <span className="text-amber-400">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="Question Bank Request">Question Bank / Topic Addition Request</option>
                  <option value="Bug Report">Bug Report / Technical Correction</option>
                  <option value="Feature Suggestion">Feature Suggestion / Improvement Idea</option>
                  <option value="General Message">General Inquiry or Feedback to Admin</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Subject <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Request for additional 2024 November PSAD solutions"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Message Details <span className="text-amber-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your request, problem statement, suggestions, or notes for the admin..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Footer */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <span className="text-[10px] text-slate-500 flex items-center space-x-1">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Sent directly &amp; securely to Admin</span>
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3.5 py-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
