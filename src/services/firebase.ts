import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  updateProfile,
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
  lastUsernameChangedAt?: string;
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
      // Preserve existing profile, custom displayName, and lastUsernameChangedAt
      profile = {
        ...data,
        displayName: data.displayName || fbUser.displayName || 'Candidate',
        photoURL: fbUser.photoURL || data.photoURL || '',
        lastLoginAt: now,
        role: isAdmin ? 'admin' : data.role || 'user',
        lastUsernameChangedAt: data.lastUsernameChangedAt,
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
export const OFFICIAL_DEFAULT_ANNOUNCEMENTS: SystemAnnouncement[] = [
  {
    id: 'ann-prc-rules',
    title: 'Official PRC Licensure Rating System & Paired Cycles (70.00% GWA Rule)',
    message:
      'In accordance with PRC regulations, examination attempts are paired sequentially across all three subjects (Attempt 1 of MSTC, HPGE, and PSAD form Cycle #1). A candidate passes the licensure exam only when their General Weighted Average (GWA) reaches ≥ 70.00% with no single subject rating falling below 50.00%. Subject weights are: MSTC 35%, HPGE 30%, and PSAD 35%. Overall Leaderboard rankings are earned after completing and being graded across all three areas.',
    category: 'PRC Advisory',
    priority: 'important',
    isPinned: true,
    authorEmail: 'board@prc.gov.ph',
    authorName: 'PRC Licensure Board Committee',
    createdAt: '2025-01-15T08:00:00Z',
    isActive: true,
  },
  {
    id: 'ann-security-privacy',
    title: 'Google Cloud Firebase Identity Shield & Reviewee Privacy Guarantee',
    message:
      'Reviewee credentials and email addresses are 100% confidential and secure. Reviewee passwords and email addresses are NEVER accessible to administrators, instructors, or teachers. All authentication is handled directly and securely by Google Cloud Firebase. Only your chosen public display username, avatar badge, and exam performance scores appear on the community leaderboards and review analytics.',
    category: 'General',
    priority: 'important',
    isPinned: true,
    authorEmail: 'security@cloud.google.com',
    authorName: 'System Security Administrator',
    createdAt: '2025-01-10T09:00:00Z',
    isActive: true,
  },
  {
    id: 'ann-curriculum-references',
    title: 'Review Curriculum Breakdown & Reference Standards (CE Reference Vol 4–6)',
    message:
      'The examination question banks and solution methodologies are rigorously aligned with CE Reference Volumes 4, 5, and 6 standard review books (Gillesania / Besavilla) and the National Structural Code of the Philippines (NSCP 2015):\n\n• MSTC (35% Weight): Higher Engineering Mathematics, Differential & Integral Calculus, Engineering Economy (Annuities, Depreciation, Capitalized Cost), Advanced Surveying, Highway Horizontal & Vertical Curves, Superelevation, Wave Mechanics, and Traffic Engineering.\n\n• HPGE (30% Weight): Fluid Statics, Hydrostatic Forces on Plane and Curved Surfaces, Gate Equilibrium, Darcy-Weisbach Pipe Flow, Open Channel Hydraulics, Soil Classification (USCS & AASHTO), Void Ratio, Effective Stress, Consolidation, Lateral Earth Pressure, and Ultimate Bearing Capacity.\n\n• PSAD (35% Weight): Statics, Strength of Materials, Indeterminate Structural Analysis, Ultimate Strength Design (USD) for Reinforced Concrete Beams and Slabs, Column Interaction, Footing Punching Shear, and AISC 360 Structural Steel & Welded Connections.',
    category: 'Exam Notice',
    priority: 'important',
    isPinned: false,
    authorEmail: 'curriculum@ceboard.ph',
    authorName: 'Academic Review Director',
    createdAt: '2025-01-05T10:00:00Z',
    isActive: true,
  },
  {
    id: 'ann-past-exam-data',
    title: 'PRC Past Board Exam Question Sets (2011 – 2025 Availability)',
    message:
      'The question bank includes authenticated past examination sets from 2011 to 2025 for April and November schedules. Each problem provides full step-by-step KaTeX mathematical solutions, standard formulas, and dynamic SVG engineering figures. Examination years and months without uploaded board data remain unavailable until authentic historical test papers are uploaded.',
    category: 'Schedule',
    priority: 'normal',
    isPinned: false,
    authorEmail: 'archive@ceboard.ph',
    authorName: 'Exam Archive Team',
    createdAt: '2025-01-01T12:00:00Z',
    isActive: true,
  },
  {
    id: 'ann-formula-deck-repo',
    title: 'Formula Deck & 4-Choice Terminology Quizzes (ce-formula-cards)',
    message:
      "The Flashcards and Recall Hub features 971 high-resolution formula card crops prepared by Engr. Aleah Pearl Javier Once, RCE 2024 (Engr. APJO), together with 1,059 rapid-recall Civil Engineering terminology definitions and 4-choice quizzes from Engineereya’s Vlog. All formula card assets are synchronized live from the open-source repository Aech-f789sga/ce-formula-cards.",
    category: 'Tip',
    priority: 'normal',
    isPinned: false,
    authorEmail: 'resources@ceboard.ph',
    authorName: 'Resource Coordination Desk',
    createdAt: '2024-12-28T14:00:00Z',
    isActive: true,
  },
];

function mergeAnnouncements(firebaseList: SystemAnnouncement[], onlyActive = true): SystemAnnouncement[] {
  const map = new Map<string, SystemAnnouncement>();
  // Official permanent references first
  OFFICIAL_DEFAULT_ANNOUNCEMENTS.forEach((item) => {
    if (!onlyActive || item.isActive !== false) {
      map.set(item.id, item);
    }
  });
  // Custom announcements from Firestore override or add
  firebaseList.forEach((item) => {
    if (!onlyActive || item.isActive !== false) {
      map.set(item.id, item);
    }
  });

  const list = Array.from(map.values());
  return list.sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return (b.createdAt || '').localeCompare(a.createdAt || '');
  });
}

/**
 * Fetches all announcements from Firestore merged with official bulletins
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

    return mergeAnnouncements(list, onlyActive);
  } catch (e) {
    console.error('Failed to fetch announcements:', e);
    return mergeAnnouncements([], onlyActive);
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
        callback(mergeAnnouncements(list, true));
      },
      (err) => {
        console.warn('Realtime announcements subscription fallback:', err);
        callback(mergeAnnouncements([], true));
      }
    );
  } catch (e) {
    callback(mergeAnnouncements([], true));
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

/**
 * Calculates remaining cooldown for changing username (7 days).
 */
export function getUsernameChangeCooldown(lastChangedAt?: string): {
  canChange: boolean;
  daysRemaining: number;
  hoursRemaining: number;
  nextAllowedDate?: Date;
  formattedRemaining: string;
} {
  if (!lastChangedAt) {
    return {
      canChange: true,
      daysRemaining: 0,
      hoursRemaining: 0,
      formattedRemaining: 'Available now',
    };
  }

  const lastTime = new Date(lastChangedAt).getTime();
  const now = Date.now();
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
  const elapsed = now - lastTime;

  if (elapsed >= SEVEN_DAYS_MS) {
    return {
      canChange: true,
      daysRemaining: 0,
      hoursRemaining: 0,
      formattedRemaining: 'Available now',
    };
  }

  const remainingMs = SEVEN_DAYS_MS - elapsed;
  const daysRemaining = Math.floor(remainingMs / (24 * 60 * 60 * 1000));
  const hoursRemaining = Math.floor((remainingMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const nextAllowedDate = new Date(lastTime + SEVEN_DAYS_MS);

  let formattedRemaining = '';
  if (daysRemaining > 0) {
    formattedRemaining = `${daysRemaining} day${daysRemaining > 1 ? 's' : ''} and ${hoursRemaining} hour${hoursRemaining > 1 ? 's' : ''}`;
  } else {
    formattedRemaining = `${hoursRemaining} hour${hoursRemaining > 1 ? 's' : ''}`;
  }

  return {
    canChange: false,
    daysRemaining,
    hoursRemaining,
    nextAllowedDate,
    formattedRemaining,
  };
}

/**
 * Updates the user's username/displayName in Firestore and Firebase Auth,
 * strictly enforcing that users can only modify their username once per week.
 */
export async function updateUsernameWithWeeklyLimit(
  uid: string,
  newUsername: string
): Promise<{ success: boolean; error?: string; profile?: UserProfile; nextAllowedDate?: Date }> {
  const cleanName = newUsername.trim();
  if (!cleanName || cleanName.length < 3) {
    return { success: false, error: 'Username must be at least 3 characters long.' };
  }
  if (cleanName.length > 30) {
    return { success: false, error: 'Username must be 30 characters or fewer.' };
  }

  const userRef = doc(db, 'users', uid);
  const snap = await getDoc(userRef);
  const existingData = snap.exists() ? (snap.data() as UserProfile) : null;

  if (existingData) {
    if (existingData.displayName.toLowerCase() === cleanName.toLowerCase()) {
      return { success: false, error: 'New username must be different from your current username.' };
    }

    const cooldown = getUsernameChangeCooldown(existingData.lastUsernameChangedAt);
    if (!cooldown.canChange) {
      const dateStr = cooldown.nextAllowedDate?.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
      return {
        success: false,
        error: `Username can only be modified once per week. You can change it again in ${cooldown.formattedRemaining} (${dateStr}).`,
        nextAllowedDate: cooldown.nextAllowedDate,
      };
    }
  }

  const nowIso = new Date().toISOString();

  // 1. Update Firebase Auth user displayName if applicable
  if (auth.currentUser && auth.currentUser.uid === uid) {
    try {
      await updateProfile(auth.currentUser, { displayName: cleanName });
    } catch (e) {
      console.warn('Could not update Firebase Auth profile displayName:', e);
    }
  }

  // 2. Update Firestore user document
  const updatedDoc: Partial<UserProfile> = {
    displayName: cleanName,
    lastUsernameChangedAt: nowIso,
  };

  await setDoc(userRef, updatedDoc, { merge: true });

  const freshSnap = await getDoc(userRef);
  const finalProfile = freshSnap.data() as UserProfile;

  // 3. Update localStorage session cache
  try {
    localStorage.setItem('ce_board_auth_profile', JSON.stringify(finalProfile));
  } catch {}

  return { success: true, profile: finalProfile };
}
