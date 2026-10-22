import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Send,
  X,
  CheckCircle2,
  AlertCircle,
  Heart,
  Lock,
  QrCode,
  Inbox,
  Clock,
  CornerDownRight,
  RefreshCw,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  sendMessageToAdmin,
  fetchUserMessagesBySender,
  UserAdminMessage,
} from '../services/firebase';

interface ContactAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactAdminModal: React.FC<ContactAdminModalProps> = ({ isOpen, onClose }) => {
  const { user, profile } = useAuth();
  const activeUser = profile || user;

  const [activeTab, setActiveTab] = useState<'message' | 'donation' | 'my_messages'>('message');
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

  // My sent messages list
  const [myMessages, setMyMessages] = useState<UserAdminMessage[]>([]);
  const [loadingMyMessages, setLoadingMyMessages] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && activeUser) {
      loadMyMessages();
    }
  }, [isOpen, activeUser]);

  const loadMyMessages = async () => {
    if (!activeUser) return;
    setLoadingMyMessages(true);
    try {
      const list = await fetchUserMessagesBySender(activeUser.uid, activeUser.email || undefined);
      setMyMessages(list);
    } catch (e) {
      console.warn('Could not load user sent messages:', e);
    } finally {
      setLoadingMyMessages(false);
    }
  };

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
      loadMyMessages();
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
    <div className="fixed inset-0 z-[99998] flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(245, 158, 11, 0.15)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-arnie text-base sm:text-lg font-bold text-white leading-tight">
                Message the Administrator
              </h2>
              <p className="text-[11px] text-slate-400">
                Direct inquiries, study support &amp; creator donation
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

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-800 bg-slate-950/30 px-3 pt-2 gap-1 text-xs">
          <button
            type="button"
            onClick={() => {
              setActiveTab('message');
              if (category === 'Admin Donation') setCategory('Question Bank Request');
            }}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-t-xl font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'message'
                ? 'border-amber-400 text-amber-300 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send Message</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('donation');
              setCategory('Admin Donation');
            }}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-t-xl font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'donation'
                ? 'border-amber-400 text-amber-300 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Admin Donation (GCash)</span>
          </button>

          {activeUser && (
            <button
              type="button"
              onClick={() => setActiveTab('my_messages')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-t-xl font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'my_messages'
                  ? 'border-cyan-400 text-cyan-300 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Replies {myMessages.some((m) => m.adminReply) && '•'}</span>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs">
          {/* TAB 1: SEND MESSAGE */}
          {activeTab === 'message' && (
            <>
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
                      Thank you for reaching out. The administrator will review your message, request, or feedback. We continuously improve this free platform with Gillesania CE Reference Volume 4-6 questions.
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
                      onChange={(e) => {
                        const val = e.target.value as any;
                        setCategory(val);
                        if (val === 'Admin Donation') {
                          setActiveTab('donation');
                        }
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Question Bank Request">Question Bank / Topic Addition Request</option>
                      <option value="Bug Report">Bug Report / Technical Correction</option>
                      <option value="Feature Suggestion">Feature Suggestion / Improvement Idea</option>
                      <option value="Admin Donation">Admin Donation / Support Platform (GCash)</option>
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
            </>
          )}

          {/* TAB 2: ADMIN DONATION (GCASH) */}
          {activeTab === 'donation' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="text-center space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-bold">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Admin Support &amp; Donation</span>
                </span>
                <h3 className="font-arnie text-base sm:text-lg font-bold text-white">
                  Support Platform Server &amp; Review Question Expansion
                </h3>
                <p className="text-[11px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                  This educational simulator is 100% free and non-profit. Voluntary donations directly offset Google Cloud hosting and help us digitize more Gillesania CE Reference Volume 4-6 review materials.
                </p>
              </div>

              {/* GCash QR Card */}
              <div className="bg-gradient-to-b from-[#005ce6] to-[#003ca3] p-4 sm:p-5 rounded-2xl text-white shadow-2xl border border-blue-400/40 text-center space-y-3 max-w-xs mx-auto">
                <div className="flex items-center justify-center space-x-2">
                  <span className="font-bold text-xs tracking-wider uppercase bg-white/15 px-3 py-0.5 rounded-full border border-white/25">
                    GCash / InstaPay
                  </span>
                </div>

                <div className="bg-white p-2 rounded-xl shadow-inner inline-block mx-auto border-2 border-white/40">
                  <img
                    src="/assets/aistudio/GcaSH_e875e285.jpg"
                    alt="GCash QR Code - BrokeAdmin"
                    className="w-48 sm:w-56 h-auto rounded-lg mx-auto object-contain"
                  />
                </div>

                <div className="space-y-0.5 font-tech-mono">
                  <div className="font-bold text-sm text-white">BrokeAdmin</div>
                  <div className="text-xs text-blue-200">Mobile: +63 912 736 ••••</div>
                  <div className="text-[10px] text-blue-300/80">User ID: •••••••••••YD5IIB</div>
                </div>

                <p className="text-[10px] text-blue-100/75 leading-tight">
                  Transfer fees may apply. Open GCash app &gt; Scan QR. Thank you for your support!
                </p>
              </div>

              {/* Optional note of encouragement / reference */}
              <form onSubmit={handleSubmit} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-300 text-xs">
                    Notify Admin or Leave a Thank-You Note
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Optional</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name (e.g. Engr. Dela Cruz)"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Reference No. / Note Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>

                <textarea
                  rows={2}
                  required
                  placeholder="Optional message of encouragement or donor reference..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs resize-none"
                />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-slate-500">
                    Category: <strong className="text-amber-400">Admin Donation</strong>
                  </span>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Sending...' : 'Send Note'}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: MY SENT MESSAGES & REPLIES */}
          {activeTab === 'my_messages' && (
            <div className="space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="font-bold text-white text-xs">
                  Your Submitted Messages &amp; Admin Replies
                </span>
                <button
                  type="button"
                  onClick={loadMyMessages}
                  disabled={loadingMyMessages}
                  className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className={`w-3 h-3 ${loadingMyMessages ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>

              {myMessages.length === 0 ? (
                <div className="text-center py-8 text-slate-400 space-y-2">
                  <Inbox className="w-8 h-8 mx-auto text-slate-600" />
                  <p className="font-semibold text-slate-300">No Sent Inquiries Yet</p>
                  <p className="text-[11px] text-slate-500">
                    When you send a message, question request, or note, you can view the status and admin responses here.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('message')}
                    className="mt-2 px-3.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer"
                  >
                    Compose a Message
                  </button>
                </div>
              ) : (
                <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                  {myMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                              msg.status === 'resolved'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : msg.status === 'read'
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            }`}
                          >
                            {msg.status.toUpperCase()}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {msg.category}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-white text-xs">{msg.subject}</h4>
                        <p className="text-xs text-slate-300 mt-0.5 whitespace-pre-line leading-relaxed">
                          {msg.message}
                        </p>
                      </div>

                      {/* Admin Reply Card */}
                      {msg.adminReply ? (
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                          <div className="flex items-center justify-between text-[10px] text-emerald-300 font-bold">
                            <span className="flex items-center gap-1">
                              <CornerDownRight className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Administrator Reply:</span>
                            </span>
                            {msg.repliedAt && (
                              <span className="font-mono text-emerald-400/80">
                                {new Date(msg.repliedAt).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-emerald-100 whitespace-pre-line leading-relaxed pl-4">
                            {msg.adminReply}
                          </p>
                        </div>
                      ) : (
                        <div className="text-[10px] text-slate-500 flex items-center gap-1 italic">
                          <Clock className="w-3 h-3 text-slate-600" />
                          <span>Awaiting admin review &amp; reply</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
