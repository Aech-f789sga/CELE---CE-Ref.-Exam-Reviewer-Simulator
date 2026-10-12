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
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  getDocFromServer,
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
  createdAt: string;
  lastLoginAt: string;
}

export interface CloudExamAttempt {
  id: string;
  userId: string;
  userEmail: string;
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
  createdAt: string;
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
 * Sign in with Google Popup
 */
export async function loginWithGoogle(): Promise<UserProfile | null> {
  const result = await signInWithPopup(auth, googleProvider);
  if (result.user) {
    return await syncUserProfile(result.user);
  }
  return null;
}

/**
 * Sign out
 */
export async function logoutUser(): Promise<void> {
  await fbSignOut(auth);
}

/**
 * Fetch all registered users (Admin only)
 */
export async function fetchAllUsers(): Promise<UserProfile[]> {
  try {
    const q = collection(db, 'users');
    const snapshot = await getDocs(q);
    const users: UserProfile[] = [];
    snapshot.forEach((d) => {
      users.push(d.data() as UserProfile);
    });
    return users.sort((a, b) => b.lastLoginAt.localeCompare(a.lastLoginAt));
  } catch (e) {
    console.error('Error fetching all users:', e);
    return [];
  }
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
      q = query(attemptsCol, limit(50));
    } else if (userId) {
      q = query(attemptsCol, where('userId', '==', userId), limit(50));
    } else {
      return [];
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
