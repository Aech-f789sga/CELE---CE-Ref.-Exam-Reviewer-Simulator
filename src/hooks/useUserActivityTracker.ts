import { useEffect, useRef } from 'react';
import {
  updateUserPresence,
  recordFeatureInteraction,
  markUserOffline,
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

  // When active feature changes, log previous feature interaction
  useEffect(() => {
    const prev = currentSessionRef.current;
    const now = Date.now();
    const durationSeconds = Math.round((now - prev.startTime) / 1000);

    // Only record if changed or spent at least 2 seconds
    if (prev.featureId !== activeFeatureId) {
      if (userRef.current && durationSeconds >= 2) {
        recordFeatureInteraction({
          userId: userRef.current.uid,
          userEmail: userRef.current.email || '',
          userDisplayName: userRef.current.displayName || 'Candidate',
          featureId: prev.featureId,
          featureName: prev.featureName,
          startTime: prev.startTimeIso,
          endTime: new Date(now).toISOString(),
          durationSeconds,
          metadata: prev.metadata,
        }).catch(() => {});
      }

      // Start new session
      currentSessionRef.current = {
        featureId: activeFeatureId,
        featureName: activeFeatureName,
        metadata: activeMetadata,
        startTime: now,
        startTimeIso: new Date(now).toISOString(),
      };

      // Heartbeat update on feature change
      if (userRef.current) {
        updateUserPresence({
          userId: userRef.current.uid,
          email: userRef.current.email || '',
          displayName: userRef.current.displayName || 'Candidate',
          currentFeature: activeFeatureName,
          isOnline: true,
        }).catch(() => {});
      }
    }
  }, [activeFeatureId, activeFeatureName, activeMetadata]);

  // Periodic heartbeat every 25 seconds for online presence
  useEffect(() => {
    if (!user) return;

    const ping = () => {
      updateUserPresence({
        userId: user.uid,
        email: user.email || '',
        displayName: user.displayName || 'Candidate',
        currentFeature: currentSessionRef.current.featureName,
        isOnline: true,
      }).catch(() => {});
    };

    // Initial ping
    ping();

    const intervalId = window.setInterval(ping, 25000);

    // On page visibility change
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        ping();
      } else {
        // Log interaction duration up to now
        const prev = currentSessionRef.current;
        const now = Date.now();
        const durationSeconds = Math.round((now - prev.startTime) / 1000);
        if (durationSeconds >= 2) {
          recordFeatureInteraction({
            userId: user.uid,
            userEmail: user.email || '',
            userDisplayName: user.displayName || 'Candidate',
            featureId: prev.featureId,
            featureName: prev.featureName,
            startTime: prev.startTimeIso,
            endTime: new Date(now).toISOString(),
            durationSeconds,
            metadata: prev.metadata,
          }).catch(() => {});
          // Reset start time to now
          currentSessionRef.current.startTime = now;
          currentSessionRef.current.startTimeIso = new Date(now).toISOString();
        }
      }
    };

    // On unload
    const handleBeforeUnload = () => {
      const prev = currentSessionRef.current;
      const now = Date.now();
      const durationSeconds = Math.round((now - prev.startTime) / 1000);
      if (durationSeconds >= 2) {
        recordFeatureInteraction({
          userId: user.uid,
          userEmail: user.email || '',
          userDisplayName: user.displayName || 'Candidate',
          featureId: prev.featureId,
          featureName: prev.featureName,
          startTime: prev.startTimeIso,
          endTime: new Date(now).toISOString(),
          durationSeconds,
          metadata: prev.metadata,
        }).catch(() => {});
      }
      markUserOffline(user.uid).catch(() => {});
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('beforeunload', handleBeforeUnload);

      // On unmount, flush final duration
      const prev = currentSessionRef.current;
      const now = Date.now();
      const durationSeconds = Math.round((now - prev.startTime) / 1000);
      if (durationSeconds >= 2) {
        recordFeatureInteraction({
          userId: user.uid,
          userEmail: user.email || '',
          userDisplayName: user.displayName || 'Candidate',
          featureId: prev.featureId,
          featureName: prev.featureName,
          startTime: prev.startTimeIso,
          endTime: new Date(now).toISOString(),
          durationSeconds,
          metadata: prev.metadata,
        }).catch(() => {});
      }
    };
  }, [user?.uid]);
}
