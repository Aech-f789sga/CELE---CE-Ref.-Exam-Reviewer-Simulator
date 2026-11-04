import { useEffect, useRef } from 'react';
import {
  updateUserPresence,
  recordFeatureInteraction,
  markUserOffline,
  isAnalyticsExcluded,
  PRESENCE_IDLE_TIMEOUT_MS,
  UserProfile,
} from '../services/firebase';

interface ActivityTrackerProps {
  user: UserProfile | { uid: string; email?: string | null; displayName?: string | null } | null;
  currentTab: string;
  isExamRunning: boolean;
  isExamFinished: boolean;
  examDetails?: {
    subject: string;
    year: number;
    month: string;
  };
  isThemeModalOpen?: boolean;
  isContactAdminOpen?: boolean;
}

/** How often presence is refreshed while the tab is open. */
const HEARTBEAT_MS = 25_000;

/** Shorter visits are noise and are not recorded as a feature interaction. */
const MIN_RECORD_SECONDS = 2;

export function useUserActivityTracker({
  user,
  currentTab,
  isExamRunning,
  isExamFinished,
  examDetails,
  isThemeModalOpen,
  isContactAdminOpen,
}: ActivityTrackerProps) {
  // Determine current active feature
  let activeFeatureId = 'exam_portal';
  let activeFeatureName = 'Exam Portal';
  let activeMetadata: string | undefined = undefined;

  if (isThemeModalOpen) {
    activeFeatureId = 'themes_3d';
    activeFeatureName = 'Themes & 3D Environments';
  } else if (isContactAdminOpen) {
    activeFeatureId = 'contact_admin';
    activeFeatureName = 'Message Admin & Support';
  } else if (isExamRunning && examDetails) {
    activeFeatureId = 'exam_simulator';
    activeFeatureName = `Exam Simulator (${examDetails.subject})`;
    activeMetadata = `${examDetails.subject} ${examDetails.year} ${examDetails.month}`;
  } else if (isExamFinished && examDetails) {
    activeFeatureId = 'exam_results';
    activeFeatureName = `Exam Results (${examDetails.subject})`;
    activeMetadata = `${examDetails.subject} ${examDetails.year} ${examDetails.month}`;
  } else {
    switch (currentTab) {
      case 'setup':
        activeFeatureId = 'exam_portal';
        activeFeatureName = 'Exam Portal';
        break;
      case 'leaderboard':
        activeFeatureId = 'leaderboard';
        activeFeatureName = 'Examinee Leaderboard';
        break;
      case 'announcements':
        activeFeatureId = 'announcements';
        activeFeatureName = 'Official Announcements';
        break;
      case 'performance':
        activeFeatureId = 'performance';
        activeFeatureName = 'Performance Review';
        break;
      case 'scratchpad':
        activeFeatureId = 'scratchpad';
        activeFeatureName = 'Scratchpad Hub & Inkpad';
        break;
      case 'flashcards':
        activeFeatureId = 'flashcards';
        activeFeatureName = 'Formula Cards & Quizzes';
        break;
      case 'admin':
        activeFeatureId = 'admin_panel';
        activeFeatureName = 'Admin Operations Panel';
        break;
      default:
        activeFeatureId = currentTab;
        activeFeatureName = currentTab;
    }
  }

  // Ref tracking current active feature session
  const currentSessionRef = useRef<{
    featureId: string;
    featureName: string;
    metadata?: string;
    startTime: number;
    startTimeIso: string;
  }>({
    featureId: activeFeatureId,
    featureName: activeFeatureName,
    metadata: activeMetadata,
    startTime: Date.now(),
    startTimeIso: new Date().toISOString(),
  });

  const userRef = useRef(user);
  useEffect(() => {
    userRef.current = user;
  }, [user]);

  /**
   * Wall-clock time of the last real input. This is what idle detection is
   * based on -- deliberately not the heartbeat, because a heartbeat only proves
   * the tab is open, not that anyone is sitting in front of it.
   */
  const lastActivityRef = useRef<number>(Date.now());
  const isIdleRef = useRef<boolean>(false);

  /**
   * When the session is flushed, the end is capped at the moment the user went
   * idle rather than "now". Without this, a tab left open overnight would post a
   * nine-hour "exam simulator" interaction and swamp every feature ranking.
   *
   * The cap is the idle timeout after the last input, not the last input itself:
   * reading a long solution without touching the keyboard is normal, and cutting
   * the duration at the last keystroke would badly under-count study time.
   */
  const sessionEnd = (now: number): number =>
    Math.min(now, lastActivityRef.current + PRESENCE_IDLE_TIMEOUT_MS);

  const flushSession = (now: number, session: typeof currentSessionRef.current) => {
    const u = userRef.current;
    if (!u || isAnalyticsExcluded(u.email)) return;
    const durationSeconds = Math.round((sessionEnd(now) - session.startTime) / 1000);
    if (durationSeconds < MIN_RECORD_SECONDS) return;
    recordFeatureInteraction({
      userId: u.uid,
      userEmail: u.email || '',
      userDisplayName: u.displayName || 'Candidate',
      featureId: session.featureId,
      featureName: session.featureName,
      startTime: session.startTimeIso,
      endTime: new Date(sessionEnd(now)).toISOString(),
      durationSeconds,
      metadata: session.metadata,
    }).catch(() => {});
  };

  // When active feature changes, log previous feature interaction
  useEffect(() => {
    const prev = currentSessionRef.current;
    const now = Date.now();

    // Only record if changed or spent at least 2 seconds
    if (prev.featureId !== activeFeatureId) {
      flushSession(now, prev);

      // Start new session
      currentSessionRef.current = {
        featureId: activeFeatureId,
        featureName: activeFeatureName,
        metadata: activeMetadata,
        startTime: now,
        startTimeIso: new Date(now).toISOString(),
      };

      // Heartbeat update on feature change
      const u = userRef.current;
      if (u) {
        updateUserPresence({
          userId: u.uid,
          email: u.email || '',
          displayName: u.displayName || 'Candidate',
          currentFeature: activeFeatureName,
          isOnline: true,
          idle: isIdleRef.current,
          lastActivityAt: new Date(lastActivityRef.current).toISOString(),
        }).catch(() => {});
      }
    }
  }, [activeFeatureId, activeFeatureName, activeMetadata]);

  // Periodic heartbeat every 25 seconds for online presence
  useEffect(() => {
    if (!user) return;

    // Accounts excluded from analytics (the administrator) write nothing at all:
    // no presence document, no interaction rows. Their own use of the admin panel
    // would otherwise dominate the very numbers they are reading.
    if (isAnalyticsExcluded(user.email)) {
      return;
    }

    const ping = () => {
      const now = Date.now();
      const idle = now - lastActivityRef.current >= PRESENCE_IDLE_TIMEOUT_MS;

      if (idle && !isIdleRef.current) {
        // Entering idle: close out the feature session at the idle boundary so
        // nothing after it is billed to the feature.
        isIdleRef.current = true;
        flushSession(now, currentSessionRef.current);
        currentSessionRef.current.startTime = now;
        currentSessionRef.current.startTimeIso = new Date(now).toISOString();
      } else if (!idle && isIdleRef.current) {
        // Resumed: start a fresh session so the idle gap is not included.
        isIdleRef.current = false;
        currentSessionRef.current.startTime = now;
        currentSessionRef.current.startTimeIso = new Date(now).toISOString();
      }

      updateUserPresence({
        userId: user.uid,
        email: user.email || '',
        displayName: user.displayName || 'Candidate',
        currentFeature: currentSessionRef.current.featureName,
        isOnline: true,
        idle,
        lastActivityAt: new Date(lastActivityRef.current).toISOString(),
      }).catch(() => {});
    };

    // Initial ping
    ping();

    const intervalId = window.setInterval(ping, HEARTBEAT_MS);

    // Any real input clears idle. Cheap enough to run on every event; the value
    // is only read by the heartbeat.
    const markActivity = () => {
      lastActivityRef.current = Date.now();
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        markActivity();
        ping();
      } else {
        // Log interaction duration up to now
        const prev = currentSessionRef.current;
        const now = Date.now();
        flushSession(now, prev);
        // Reset start time to now
        currentSessionRef.current.startTime = now;
        currentSessionRef.current.startTimeIso = new Date(now).toISOString();
      }
    };

    // On unload
    const handleBeforeUnload = () => {
      flushSession(Date.now(), currentSessionRef.current);
      markUserOffline(user.uid).catch(() => {});
    };

    document.addEventListener('visibilitychange', handleVisibility);
    document.addEventListener('pointerdown', markActivity, { passive: true });
    document.addEventListener('keydown', markActivity);
    document.addEventListener('wheel', markActivity, { passive: true });
    document.addEventListener('touchstart', markActivity, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibility);
      document.removeEventListener('pointerdown', markActivity);
      document.removeEventListener('keydown', markActivity);
      document.removeEventListener('wheel', markActivity);
      document.removeEventListener('touchstart', markActivity);
      window.removeEventListener('beforeunload', handleBeforeUnload);

      // On unmount, flush final duration
      flushSession(Date.now(), currentSessionRef.current);
    };
  }, [user?.uid, user?.email]);
}
