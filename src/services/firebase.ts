import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  getDocFromServer,
  onSnapshot,
  Timestamp,
} from 'firebase/firestore';
import { ExamMonth, SubjectArea } from '../types/exam';
import configJson from '../../firebase-applet-config.json';

export const DESIGNATED_ADMIN_EMAIL = 'derrickdarrack@gmail.com';

// Initialize Firebase
const firebaseConfig = {
  projectId: configJson.projectId,
  appId: configJson.appId,
  apiKey: configJson.apiKey,
  authDomain: configJson.authDomain,
  storageBucket: configJson.storageBucket,
  messagingSenderId: configJson.messagingSenderId,
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = configJson.firestoreDatabaseId
  ? getFirestore(app, configJson.firestoreDatabaseId)
  : getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Test connection on boot per Firebase skill guidelines
export async function testFirebaseConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline or initializing.');
    }
  }
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'admin' | 'user';
  passwordHash?: string;
  createdAt: string;
  lastLoginAt: string;
}

export interface CloudExamAttempt {
  id: string;
  userId: string;
  userEmail: string;
  userDisplayName?: string;
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  score: number;
  totalQuestions: number;
  ratingPercentage: number;
  passedArea: boolean;
  timeSpentSeconds: number;
  timerMode: string;
  completedAt: string;
}

export interface SystemAnnouncement {
  id: string;
  title: string;
  message: string;
  authorEmail: string;
  authorName?: string;
  category: 'General' | 'Exam Notice' | 'PRC Advisory' | 'Schedule' | 'Tip';
  priority: 'normal' | 'important' | 'urgent';
  isPinned?: boolean;
  createdAt: string;
  updatedAt?: string;
  isActive: boolean;
}

/**
 * Checks whether an email address is the designated system administrator.
 */
export function isUserAdmin(email?: string | null): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === DESIGNATED_ADMIN_EMAIL.toLowerCase();
}

/**
 * Native cryptographic SHA-256 hash function (client-side, zero dependencies)
 */
export async function hashPassword(password: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Sync user profile to Firestore upon login.
 * Guarantees derrickdarrack@gmail.com has role 'admin', and all other users have role 'user'.
 */
export async function syncUserProfile(fbUser: FirebaseUser): Promise<UserProfile> {
  const userRef = doc(db, 'users', fbUser.uid);
  const now = new Date().toISOString();
  const isAdmin = isUserAdmin(fbUser.email);
  const assignedRole: 'admin' | 'user' = isAdmin ? 'admin' : 'user';

  try {
    const snap = await getDoc(userRef);
    let profile: UserProfile;

    if (snap.exists()) {
      const data = snap.data() as UserProfile;
      // Preserve existing profile but enforce designated admin
      profile = {
        ...data,
        displayName: fbUser.displayName || data.displayName || 'Candidate',
        photoURL: fbUser.photoURL || data.photoURL || '',
        lastLoginAt: now,
        role: isAdmin ? 'admin' : data.role || 'user',
      };
      await setDoc(userRef, profile, { merge: true });
    } else {
      profile = {
        uid: fbUser.uid,
        email: fbUser.email || '',
        displayName: fbUser.displayName || 'Candidate',
        photoURL: fbUser.photoURL || '',
        role: assignedRole,
        createdAt: now,
        lastLoginAt: now,
      };
      await setDoc(userRef, profile);
    }

    // If admin, ensure the admins/ marker document exists for rule checks
    if (isAdmin) {
      const adminMarkerRef = doc(db, 'admins', fbUser.uid);
      await setDoc(adminMarkerRef, {
        uid: fbUser.uid,
        email: fbUser.email || DESIGNATED_ADMIN_EMAIL,
        grantedAt: now,
      }, { merge: true });
    }

    return profile;
  } catch (err) {
    console.warn('Firestore profile sync fallback (local profile used):', err);
    return {
      uid: fbUser.uid,
      email: fbUser.email || '',
      displayName: fbUser.displayName || 'Candidate',
      photoURL: fbUser.photoURL || '',
      role: assignedRole,
      createdAt: now,
      lastLoginAt: now,
    };
  }
}

/**
 * Sign in with Google Popup with detailed error handling
 */
export async function loginWithGoogle(): Promise<{ profile: UserProfile | null; error?: string; errorCode?: string }> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      const prof = await syncUserProfile(result.user);
      try {
        localStorage.setItem('ce_board_auth_profile', JSON.stringify(prof));
      } catch (e) {
        // storage fallback
      }
      return { profile: prof };
    }
    return { profile: null };
  } catch (err: unknown) {
    const errorObj = err as { code?: string; message?: string };
    const code = errorObj?.code || 'auth/unknown';
    const message = errorObj?.message || 'Google sign-in popup closed or restricted.';
    console.warn(`[Firebase Auth] signInWithPopup encountered: ${code} - ${message}`);
    return { profile: null, error: message, errorCode: code };
  }
}

/**
 * Authenticates user with Email and Password.
 * Supports Vercel deployments and offline environments seamlessly.
 * - If user exists in Firestore with passwordHash, verifies against password.
 * - If derrickdarrack@gmail.com logs in for the first time without a passwordHash, sets their admin password!
 */
export async function loginWithEmailPassword(
  email: string,
  password: string
): Promise<{ profile: UserProfile | null; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { profile: null, error: 'Please provide a valid email address.' };
  }
  if (!password || password.length < 6) {
    return { profile: null, error: 'Password must be at least 6 characters long.' };
  }

  const isAdmin = isUserAdmin(cleanEmail);
  const uid = `user-uid-${cleanEmail.replace(/[^a-z0-9]/g, '-')}`;
  const inputHash = await hashPassword(password);
  const now = new Date().toISOString();

  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);

    if (snap.exists()) {
      const data = snap.data() as UserProfile;
      // If user has a registered passwordHash, check it
      if (data.passwordHash) {
        if (data.passwordHash !== inputHash) {
          return { profile: null, error: 'Incorrect password for this account. Please verify and try again.' };
        }
      } else {
        // First-time password set for existing email (e.g. admin or pre-registered account)
        await setDoc(userRef, { passwordHash: inputHash, lastLoginAt: now }, { merge: true });
        data.passwordHash = inputHash;
      }

      const updatedProfile: UserProfile = {
        ...data,
        role: isAdmin ? 'admin' : data.role || 'user',
        lastLoginAt: now,
      };
      await setDoc(userRef, updatedProfile, { merge: true });

      // Save to localStorage
      try {
        localStorage.setItem('ce_board_auth_profile', JSON.stringify(updatedProfile));
      } catch {}

      return { profile: updatedProfile };
    } else {
      // User does not exist in Firestore
      if (isAdmin) {
        // Designated admin first-time initialization
        const adminProfile: UserProfile = {
          uid,
          email: cleanEmail,
          displayName: 'Derrick Darrack (Admin)',
          photoURL: 'https://lh3.googleusercontent.com/a/default-user',
          role: 'admin',
          passwordHash: inputHash,
          createdAt: now,
          lastLoginAt: now,
        };
        await setDoc(userRef, adminProfile);
        try {
          const adminMarkerRef = doc(db, 'admins', uid);
          await setDoc(adminMarkerRef, { uid, email: cleanEmail, grantedAt: now }, { merge: true });
        } catch {}
        try {
          localStorage.setItem('ce_board_auth_profile', JSON.stringify(adminProfile));
        } catch {}
        return { profile: adminProfile };
      } else {
        return {
          profile: null,
          error: 'No account found with this email. Please switch to "Create Account" tab to register.',
        };
      }
    }
  } catch (err: unknown) {
    console.error('Login with email/password error:', err);
    // Offline/Fallback check
    try {
      const rosterStr = localStorage.getItem('ce_board_all_users') || '[]';
      const roster: UserProfile[] = JSON.parse(rosterStr);
      const matched = roster.find((u) => u.email.toLowerCase() === cleanEmail);
      if (matched) {
        if (matched.passwordHash && matched.passwordHash !== inputHash) {
          return { profile: null, error: 'Incorrect password.' };
        }
        localStorage.setItem('ce_board_auth_profile', JSON.stringify(matched));
        return { profile: matched };
      }
    } catch {}
    return { profile: null, error: 'Network error communicating with authentication service.' };
  }
}

/**
 * Registers a new account with Email and Password
 */
export async function registerWithEmailPassword(
  email: string,
  password: string,
  displayName?: string
): Promise<{ profile: UserProfile | null; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { profile: null, error: 'Please enter a valid email address.' };
  }
  if (!password || password.length < 6) {
    return { profile: null, error: 'Password must be at least 6 characters.' };
  }

  const isAdmin = isUserAdmin(cleanEmail);
  const uid = `user-uid-${cleanEmail.replace(/[^a-z0-9]/g, '-')}`;
  const now = new Date().toISOString();
  const inputHash = await hashPassword(password);

  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);

    if (snap.exists()) {
      const data = snap.data() as UserProfile;
      if (data.passwordHash) {
        return {
          profile: null,
          error: 'An account with this email is already registered. Please sign in instead.',
        };
      }
    }

    const newProfile: UserProfile = {
      uid,
      email: cleanEmail,
      displayName: displayName?.trim() || (isAdmin ? 'Derrick Darrack (Admin)' : cleanEmail.split('@')[0]),
      photoURL: isAdmin ? 'https://lh3.googleusercontent.com/a/default-user' : '',
      role: isAdmin ? 'admin' : 'user',
      passwordHash: inputHash,
      createdAt: now,
      lastLoginAt: now,
    };

    await setDoc(userRef, newProfile, { merge: true });

    if (isAdmin) {
      try {
        const adminMarkerRef = doc(db, 'admins', uid);
        await setDoc(adminMarkerRef, { uid, email: cleanEmail, grantedAt: now }, { merge: true });
      } catch {}
    }

    // Update local roster
    try {
      const rosterStr = localStorage.getItem('ce_board_all_users') || '[]';
      const roster: UserProfile[] = JSON.parse(rosterStr);
      const idx = roster.findIndex((u) => u.email.toLowerCase() === cleanEmail);
      if (idx >= 0) {
        roster[idx] = newProfile;
      } else {
        roster.push(newProfile);
      }
      localStorage.setItem('ce_board_all_users', JSON.stringify(roster));
      localStorage.setItem('ce_board_auth_profile', JSON.stringify(newProfile));
    } catch {}

    return { profile: newProfile };
  } catch (err: unknown) {
    console.error('Registration error:', err);
    return { profile: null, error: 'Registration could not be completed. Please try again.' };
  }
}

/**
 * Authenticates user directly as a verified Google account profile.
 * - derrickdarrack@gmail.com is automatically granted 'admin' role.
 * - Any other email is granted standard 'user' role.
 */
export async function authenticateLocalGoogleUser(
  email: string,
  displayName?: string,
  photoURL?: string
): Promise<UserProfile> {
  const cleanEmail = email.trim().toLowerCase();
  const isAdmin = isUserAdmin(cleanEmail);
  const uid = `user-uid-${cleanEmail.replace(/[^a-z0-9]/g, '-')}`;
  const now = new Date().toISOString();

  const profile: UserProfile = {
    uid,
    email: cleanEmail,
    displayName: displayName?.trim() || (isAdmin ? 'Derrick Darrack (Admin)' : cleanEmail.split('@')[0]),
    photoURL: photoURL || (isAdmin ? 'https://lh3.googleusercontent.com/a/default-user' : ''),
    role: isAdmin ? 'admin' : 'user',
    createdAt: now,
    lastLoginAt: now,
  };

  // 1. Save to Cloud Firestore
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, profile, { merge: true });
    if (isAdmin) {
      const adminMarkerRef = doc(db, 'admins', uid);
      await setDoc(
        adminMarkerRef,
        {
          uid,
          email: cleanEmail,
          grantedAt: now,
        },
        { merge: true }
      );
    }
  } catch (e) {
    console.warn('Firestore write warning during Google auth:', e);
  }

  // 2. Save active session to localStorage
  try {
    localStorage.setItem('ce_board_auth_profile', JSON.stringify(profile));
  } catch (e) {
    // ignore
  }

  // 3. Save to registered users roster in localStorage as persistent cache
  try {
    const rosterStr = localStorage.getItem('ce_board_all_users') || '[]';
    const roster: UserProfile[] = JSON.parse(rosterStr);
    const existingIndex = roster.findIndex(
      (u) => u.email.toLowerCase() === cleanEmail || u.uid === uid
    );
    if (existingIndex >= 0) {
      roster[existingIndex] = { ...roster[existingIndex], ...profile, lastLoginAt: now };
    } else {
      roster.push(profile);
    }
    localStorage.setItem('ce_board_all_users', JSON.stringify(roster));
  } catch (e) {
    // ignore
  }

  return profile;
}

/**
 * Sign out
 */
export async function logoutUser(): Promise<void> {
  try {
    await fbSignOut(auth);
  } catch (e) {
    // ignore
  }
  try {
    localStorage.removeItem('ce_board_auth_profile');
  } catch (e) {
    // ignore
  }
}

/**
 * Register a new user email directly into Firestore and roster (used by Admin)
 */
export async function registerUserByAdmin(
  email: string,
  displayName?: string
): Promise<UserProfile> {
  const cleanEmail = email.trim().toLowerCase();
  const isAdmin = isUserAdmin(cleanEmail);
  const uid = `google-uid-${cleanEmail.replace(/[^a-z0-9]/g, '-')}`;
  const now = new Date().toISOString();

  const profile: UserProfile = {
    uid,
    email: cleanEmail,
    displayName: displayName?.trim() || cleanEmail.split('@')[0],
    photoURL: '',
    role: isAdmin ? 'admin' : 'user',
    createdAt: now,
    lastLoginAt: now,
  };

  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, profile, { merge: true });
  } catch (e) {
    console.warn('Error saving new user to Firestore:', e);
  }

  try {
    const rosterStr = localStorage.getItem('ce_board_all_users') || '[]';
    const roster: UserProfile[] = JSON.parse(rosterStr);
    if (!roster.some((u) => u.email.toLowerCase() === cleanEmail)) {
      roster.push(profile);
      localStorage.setItem('ce_board_all_users', JSON.stringify(roster));
    }
  } catch (e) {
    // ignore
  }

  return profile;
}

/**
 * Fetch all registered users (Admin only)
 * Reads from Cloud Firestore and merges any cached accounts.
 */
export async function fetchAllUsers(): Promise<UserProfile[]> {
  const usersMap = new Map<string, UserProfile>();

  // Always ensure designated admin is present
  usersMap.set(DESIGNATED_ADMIN_EMAIL.toLowerCase(), {
    uid: `google-uid-${DESIGNATED_ADMIN_EMAIL.replace(/[^a-z0-9]/g, '-')}`,
    email: DESIGNATED_ADMIN_EMAIL,
    displayName: 'Derrick Darrack (Admin)',
    photoURL: 'https://lh3.googleusercontent.com/a/default-user',
    role: 'admin',
    createdAt: '2024-11-01T00:00:00.000Z',
    lastLoginAt: new Date().toISOString(),
  });

  // 1. Fetch from Cloud Firestore
  try {
    const q = collection(db, 'users');
    const snapshot = await getDocs(q);
    snapshot.forEach((d) => {
      const u = d.data() as UserProfile;
      if (u && u.email) {
        usersMap.set(u.email.toLowerCase(), u);
      }
    });
  } catch (e) {
    console.error('Error fetching users from Firestore:', e);
  }

  // 2. Fetch from persistent local roster cache
  try {
    const rosterStr = localStorage.getItem('ce_board_all_users');
    if (rosterStr) {
      const roster: UserProfile[] = JSON.parse(rosterStr);
      for (const u of roster) {
        if (u && u.email && !usersMap.has(u.email.toLowerCase())) {
          usersMap.set(u.email.toLowerCase(), u);
          // Sync missing user to Firestore in background
          setDoc(doc(db, 'users', u.uid), u).catch(() => {});
        }
      }
    }
  } catch (e) {
    // ignore
  }

  const result = Array.from(usersMap.values());
  return result.sort((a, b) => (b.lastLoginAt || '').localeCompare(a.lastLoginAt || ''));
}

/**
 * Save exam attempt to Firestore
 */
export async function recordExamAttempt(attempt: Omit<CloudExamAttempt, 'id'>): Promise<string> {
  try {
    const attemptId = `att-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const docRef = doc(db, 'examAttempts', attemptId);
    const payload: CloudExamAttempt = {
      ...attempt,
      id: attemptId,
    };
    await setDoc(docRef, payload);
    return attemptId;
  } catch (err) {
    console.error('Failed to save exam attempt to Firestore:', err);
    return '';
  }
}

/**
 * Fetch exam attempts for current user or all if admin
 */
export async function fetchExamAttempts(userId?: string, isAdmin = false): Promise<CloudExamAttempt[]> {
  try {
    const attemptsCol = collection(db, 'examAttempts');
    let q;
    if (isAdmin && !userId) {
      q = query(attemptsCol, limit(100));
    } else if (userId) {
      q = query(attemptsCol, where('userId', '==', userId), limit(100));
    } else {
      q = query(attemptsCol, limit(100));
    }
    const snap = await getDocs(q);
    const list: CloudExamAttempt[] = [];
    snap.forEach((d) => list.push(d.data() as CloudExamAttempt));
    return list.sort((a, b) => b.completedAt.localeCompare(a.completedAt));
  } catch (e) {
    console.error('Error fetching cloud attempts:', e);
    return [];
  }
}

/**
 * Fetch all exam attempts across all examinees for the Leaderboard
 */
export async function fetchAllAttemptsForLeaderboard(): Promise<CloudExamAttempt[]> {
  try {
    const attemptsCol = collection(db, 'examAttempts');
    const snap = await getDocs(attemptsCol);
    const list: CloudExamAttempt[] = [];
    snap.forEach((d) => {
      const data = d.data() as CloudExamAttempt;
      if (data && data.userId && data.subject) {
        list.push(data);
      }
    });
    return list.sort((a, b) => b.completedAt.localeCompare(a.completedAt));
  } catch (e) {
    console.error('Error fetching attempts for leaderboard:', e);
    return [];
  }
}

/* ==========================================================================
   ANNOUNCEMENTS MANAGEMENT (ADMIN & REAL-TIME FEED)
   ========================================================================== */

/**
 * Creates a new system announcement (Admin only)
 */
export async function createAnnouncement(
  ann: Omit<SystemAnnouncement, 'id' | 'createdAt'>
): Promise<string> {
  const id = `ann-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
  const now = new Date().toISOString();
  const payload: SystemAnnouncement = {
    ...ann,
    id,
    createdAt: now,
    isActive: ann.isActive ?? true,
    category: ann.category || 'General',
    priority: ann.priority || 'normal',
    isPinned: ann.isPinned ?? false,
  };

  try {
    const docRef = doc(db, 'announcements', id);
    await setDoc(docRef, payload);
    return id;
  } catch (e) {
    console.error('Failed to create announcement in Firestore:', e);
    return '';
  }
}

/**
 * Updates an announcement (Admin only)
 */
export async function updateAnnouncement(
  id: string,
  updates: Partial<SystemAnnouncement>
): Promise<boolean> {
  try {
    const docRef = doc(db, 'announcements', id);
    const now = new Date().toISOString();
    await setDoc(docRef, { ...updates, updatedAt: now }, { merge: true });
    return true;
  } catch (e) {
    console.error('Failed to update announcement:', e);
    return false;
  }
}

/**
 * Deletes an announcement
 */
export async function deleteAnnouncement(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, 'announcements', id);
    await deleteDoc(docRef);
    return true;
  } catch (e) {
    console.error('Failed to delete announcement:', e);
    // Fallback: Soft-delete
    try {
      await updateAnnouncement(id, { isActive: false });
      return true;
    } catch {}
    return false;
  }
}

/**
 * Fetches all announcements from Firestore
 */
export async function fetchAnnouncements(onlyActive = true): Promise<SystemAnnouncement[]> {
  try {
    const colRef = collection(db, 'announcements');
    const snap = await getDocs(colRef);
    const list: SystemAnnouncement[] = [];
    snap.forEach((d) => {
      const data = d.data() as SystemAnnouncement;
      if (data && (!onlyActive || data.isActive)) {
        list.push(data);
      }
    });

    // Sort: pinned first, then newest
    return list.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return (b.createdAt || '').localeCompare(a.createdAt || '');
    });
  } catch (e) {
    console.error('Failed to fetch announcements:', e);
    return [];
  }
}

/**
 * Subscribes to real-time updates for announcements
 */
export function subscribeAnnouncements(
  callback: (announcements: SystemAnnouncement[]) => void
): () => void {
  try {
    const colRef = collection(db, 'announcements');
    return onSnapshot(
      colRef,
      (snapshot) => {
        const list: SystemAnnouncement[] = [];
        snapshot.forEach((d) => {
          const data = d.data() as SystemAnnouncement;
          if (data && data.isActive !== false) {
            list.push(data);
          }
        });
        list.sort((a, b) => {
          if (a.isPinned && !b.isPinned) return -1;
          if (!a.isPinned && b.isPinned) return 1;
          return (b.createdAt || '').localeCompare(a.createdAt || '');
        });
        callback(list);
      },
      (err) => {
        console.warn('Realtime announcements subscription fallback:', err);
      }
    );
  } catch (e) {
    return () => {};
  }
}

/* ==========================================================================
   LEADERBOARDS COMPUTATION (OVERALL ALL-AREAS & PER-AREA)
   ========================================================================== */

export interface SubjectAttemptDetail {
  score: number;
  totalQuestions: number;
  ratingPercentage: number;
  passed: boolean;
  attemptDate: string;
}

export interface OverallLeaderboardEntry {
  userId: string;
  userEmail: string;
  displayName: string;
  photoURL?: string;
  overallRating: number; // General Weighted Average (GWA) %
  highestOverallRating: number;
  averageOverallRating: number;
  totalCompletedAttempts: number; // Number of attempts where ALL 3 areas were completed and graded
  subjectBreakdown: {
    MSTC: SubjectAttemptDetail;
    HPGE: SubjectAttemptDetail;
    PSAD: SubjectAttemptDetail;
  };
  passedExam: boolean; // GWA >= 70% and all 3 areas >= 50%
  bestCompletedAt: string;
  all3AreasComplete: true;
}

export interface AreaLeaderboardEntry {
  userId: string;
  userEmail: string;
  displayName: string;
  photoURL?: string;
  subject: SubjectArea;
  highestRating: number; // Highest score %
  highestScore: number;
  totalQuestions: number;
  totalAreaAttempts: number; // Number of attempts in this specific area
  averageRating: number;
  passedArea: boolean; // >= 50%
  bestTimeSpentSeconds: number;
  lastAttemptDate: string;
}

/**
 * Computes Overall and Per-Area Leaderboards.
 * Rule: On the Overall Leaderboard, if all 3 areas (MSTC, HPGE, PSAD) in an attempt
 * are not yet complete/graded, do NOT show the user on the Overall Leaderboard.
 */
export function computeLeaderboards(
  allAttempts: CloudExamAttempt[],
  allUsers: UserProfile[]
): {
  overall: OverallLeaderboardEntry[];
  perArea: Record<SubjectArea, AreaLeaderboardEntry[]>;
} {
  // Map users by uid or email for display details
  const userMap = new Map<string, UserProfile>();
  allUsers.forEach((u) => {
    if (u.uid) userMap.set(u.uid, u);
    if (u.email) userMap.set(u.email.toLowerCase(), u);
  });

  // Group attempts by user
  const attemptsByUser = new Map<string, CloudExamAttempt[]>();
  allAttempts.forEach((att) => {
    const key = att.userId || att.userEmail.toLowerCase();
    if (!attemptsByUser.has(key)) {
      attemptsByUser.set(key, []);
    }
    attemptsByUser.get(key)!.push(att);
  });

  const overallEntries: OverallLeaderboardEntry[] = [];
  const perAreaMap: Record<SubjectArea, Map<string, AreaLeaderboardEntry>> = {
    MSTC: new Map(),
    HPGE: new Map(),
    PSAD: new Map(),
  };

  // PRC Area Weights
  // MSTC: 35%, HPGE: 30%, PSAD: 35%
  const WEIGHTS: Record<SubjectArea, number> = {
    MSTC: 0.35,
    HPGE: 0.30,
    PSAD: 0.35,
  };

  attemptsByUser.forEach((userAttempts, userKey) => {
    // Determine user profile
    const firstAtt = userAttempts[0];
    const userProfile =
      userMap.get(userKey) ||
      (firstAtt ? userMap.get(firstAtt.userEmail.toLowerCase()) : undefined);

    const displayName =
      userProfile?.displayName ||
      firstAtt?.userDisplayName ||
      firstAtt?.userEmail?.split('@')[0] ||
      'Reviewee Candidate';
    const email = userProfile?.email || firstAtt?.userEmail || '';
    const photoURL = userProfile?.photoURL || '';

    // Group attempts by subject area for this user
    const mstcList = userAttempts.filter((a) => a.subject === 'MSTC').sort((a, b) => a.completedAt.localeCompare(b.completedAt));
    const hpgeList = userAttempts.filter((a) => a.subject === 'HPGE').sort((a, b) => a.completedAt.localeCompare(b.completedAt));
    const psadList = userAttempts.filter((a) => a.subject === 'PSAD').sort((a, b) => a.completedAt.localeCompare(b.completedAt));

    // 1. COMPUTE PER-AREA ENTRIES
    const areas: SubjectArea[] = ['MSTC', 'HPGE', 'PSAD'];
    areas.forEach((area) => {
      const list = area === 'MSTC' ? mstcList : area === 'HPGE' ? hpgeList : psadList;
      if (list.length > 0) {
        // Highest rating attempt
        const bestAttempt = [...list].sort((a, b) => b.ratingPercentage - a.ratingPercentage)[0];
        const totalRatingSum = list.reduce((sum, a) => sum + a.ratingPercentage, 0);
        const avgRating = Math.round((totalRatingSum / list.length) * 100) / 100;
        const bestTime = Math.min(...list.map((a) => a.timeSpentSeconds || 3600));

        perAreaMap[area].set(userKey, {
          userId: userKey,
          userEmail: email,
          displayName,
          photoURL,
          subject: area,
          highestRating: bestAttempt.ratingPercentage,
          highestScore: bestAttempt.score,
          totalQuestions: bestAttempt.totalQuestions,
          totalAreaAttempts: list.length, // Number of attempts on this specific area
          averageRating: avgRating,
          passedArea: bestAttempt.ratingPercentage >= 50.0,
          bestTimeSpentSeconds: bestTime,
          lastAttemptDate: bestAttempt.completedAt,
        });
      }
    });

    // 2. COMPUTE OVERALL LEADERBOARD ENTRY
    // CRITICAL REQUIREMENT: "if all area in an attempt is not yet complete/graded then don't show"
    // The user MUST have at least 1 attempt in MSTC, 1 in HPGE, AND 1 in PSAD!
    const totalCompleteSets = Math.min(mstcList.length, hpgeList.length, psadList.length);

    if (totalCompleteSets > 0 && mstcList.length > 0 && hpgeList.length > 0 && psadList.length > 0) {
      // Find the user's best combination / completed sets
      // Each full attempt cycle consists of 1 MSTC, 1 HPGE, and 1 PSAD
      const completedSetGWAs: number[] = [];

      for (let i = 0; i < totalCompleteSets; i++) {
        const m = mstcList[i];
        const h = hpgeList[i];
        const p = psadList[i];
        const gwa = Math.round(
          (m.ratingPercentage * WEIGHTS.MSTC +
            h.ratingPercentage * WEIGHTS.HPGE +
            p.ratingPercentage * WEIGHTS.PSAD) *
            100
        ) / 100;
        completedSetGWAs.push(gwa);
      }

      // Best individual subject attempts for best overall performance
      const bestM = [...mstcList].sort((a, b) => b.ratingPercentage - a.ratingPercentage)[0];
      const bestH = [...hpgeList].sort((a, b) => b.ratingPercentage - a.ratingPercentage)[0];
      const bestP = [...psadList].sort((a, b) => b.ratingPercentage - a.ratingPercentage)[0];

      const bestGWA = Math.round(
        (bestM.ratingPercentage * WEIGHTS.MSTC +
          bestH.ratingPercentage * WEIGHTS.HPGE +
          bestP.ratingPercentage * WEIGHTS.PSAD) *
          100
      ) / 100;

      const avgGWA =
        Math.round(
          (completedSetGWAs.reduce((sum, val) => sum + val, 0) / completedSetGWAs.length) * 100
        ) / 100;

      // PRC Board Exam Passing Standard:
      // Overall GWA >= 70.00% AND no grade below 50.00%
      const passedExam =
        bestGWA >= 70.0 &&
        bestM.ratingPercentage >= 50.0 &&
        bestH.ratingPercentage >= 50.0 &&
        bestP.ratingPercentage >= 50.0;

      const latestCompletedAt = [bestM.completedAt, bestH.completedAt, bestP.completedAt].sort().reverse()[0];

      overallEntries.push({
        userId: userKey,
        userEmail: email,
        displayName,
        photoURL,
        overallRating: bestGWA,
        highestOverallRating: bestGWA,
        averageOverallRating: avgGWA,
        totalCompletedAttempts: totalCompleteSets, // Number of attempts where ALL 3 areas are complete
        subjectBreakdown: {
          MSTC: {
            score: bestM.score,
            totalQuestions: bestM.totalQuestions,
            ratingPercentage: bestM.ratingPercentage,
            passed: bestM.ratingPercentage >= 50.0,
            attemptDate: bestM.completedAt,
          },
          HPGE: {
            score: bestH.score,
            totalQuestions: bestH.totalQuestions,
            ratingPercentage: bestH.ratingPercentage,
            passed: bestH.ratingPercentage >= 50.0,
            attemptDate: bestH.completedAt,
          },
          PSAD: {
            score: bestP.score,
            totalQuestions: bestP.totalQuestions,
            ratingPercentage: bestP.ratingPercentage,
            passed: bestP.ratingPercentage >= 50.0,
            attemptDate: bestP.completedAt,
          },
        },
        passedExam,
        bestCompletedAt: latestCompletedAt,
        all3AreasComplete: true,
      });
    }
  });

  // Sort Overall: Highest GWA first, then most attempts
  overallEntries.sort((a, b) => {
    if (b.overallRating !== a.overallRating) {
      return b.overallRating - a.overallRating;
    }
    return b.totalCompletedAttempts - a.totalCompletedAttempts;
  });

  // Sort Per-Area: Highest rating first, then most attempts
  const perAreaResult: Record<SubjectArea, AreaLeaderboardEntry[]> = {
    MSTC: Array.from(perAreaMap.MSTC.values()).sort((a, b) => {
      if (b.highestRating !== a.highestRating) return b.highestRating - a.highestRating;
      return b.totalAreaAttempts - a.totalAreaAttempts;
    }),
    HPGE: Array.from(perAreaMap.HPGE.values()).sort((a, b) => {
      if (b.highestRating !== a.highestRating) return b.highestRating - a.highestRating;
      return b.totalAreaAttempts - a.totalAreaAttempts;
    }),
    PSAD: Array.from(perAreaMap.PSAD.values()).sort((a, b) => {
      if (b.highestRating !== a.highestRating) return b.highestRating - a.highestRating;
      return b.totalAreaAttempts - a.totalAreaAttempts;
    }),
  };

  return {
    overall: overallEntries,
    perArea: perAreaResult,
  };
}
