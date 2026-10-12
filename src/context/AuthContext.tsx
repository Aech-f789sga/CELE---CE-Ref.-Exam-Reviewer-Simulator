import React, { createContext, useContext, useEffect, useState } from 'react';
import { User as FirebaseUser, onAuthStateChanged } from 'firebase/auth';
import {
  auth,
  loginWithGoogle,
  logoutUser,
  syncUserProfile,
  isUserAdmin,
  testFirebaseConnection,
  UserProfile,
  DESIGNATED_ADMIN_EMAIL,
  authenticateLocalGoogleUser,
  loginWithEmailPassword as fbLoginWithEmailPassword,
  registerWithEmailPassword as fbRegisterWithEmailPassword,
} from '../services/firebase';

interface AuthContextValue {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  isAdmin: boolean;
  loading: boolean;
  authError: string | null;
  isAuthModalOpen: boolean;
  designatedAdminEmail: string;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  clearAuthError: () => void;
  signIn: () => Promise<void>;
  signInWithPassword: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  registerWithPassword: (email: string, password: string, displayName?: string) => Promise<{ success: boolean; error?: string }>;
  signInAsAdmin: () => Promise<void>;
  signInAsCandidate: () => Promise<void>;
  signInWithCustomEmail: (email: string, displayName?: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Initial connection test
    testFirebaseConnection();

    // Check cached session
    try {
      const cached = localStorage.getItem('ce_board_auth_profile');
      if (cached) {
        const parsed = JSON.parse(cached) as UserProfile;
        if (parsed && parsed.email) {
          // Re-enforce admin check
          parsed.role = isUserAdmin(parsed.email) ? 'admin' : 'user';
          setProfile(parsed);
        }
      }
    } catch (e) {
      // storage parsing error ignored
    }

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setUser(fbUser);
      if (fbUser) {
        try {
          const userProf = await syncUserProfile(fbUser);
          setProfile(userProf);
          setAuthError(null);
        } catch (e) {
          console.error('Failed to sync user profile:', e);
          const fallbackProf: UserProfile = {
            uid: fbUser.uid,
            email: fbUser.email || '',
            displayName: fbUser.displayName || 'Candidate',
            photoURL: fbUser.photoURL || '',
            role: isUserAdmin(fbUser.email) ? 'admin' : 'user',
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
          };
          setProfile(fallbackProf);
          try {
            localStorage.setItem('ce_board_auth_profile', JSON.stringify(fallbackProf));
          } catch {}
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      setAuthError(null);
      const res = await loginWithGoogle();
      if (res.profile) {
        setProfile(res.profile);
        setIsAuthModalOpen(false);
      } else if (res.errorCode) {
        // Formulate friendly error explanation
        let msg = `Google Sign-In popup could not complete (${res.errorCode}).`;
        if (res.errorCode.includes('unauthorized-domain')) {
          msg = `This preview domain is not listed in the Firebase Auth Authorized Domains whitelist (${res.errorCode}).`;
        } else if (res.errorCode.includes('popup-closed')) {
          msg = 'The sign-in popup was closed before completing authentication.';
        } else if (res.errorCode.includes('cancelled')) {
          msg = 'The popup request was interrupted or blocked by the browser.';
        }
        setAuthError(msg);
        setIsAuthModalOpen(true);
      }
    } catch (err: unknown) {
      console.error('Google Sign In failed:', err);
      setAuthError('Sign-in encounter an issue. Please choose an authentication option below.');
      setIsAuthModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInWithPassword = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    setLoading(true);
    setAuthError(null);
    try {
      const res = await fbLoginWithEmailPassword(email, password);
      if (res.profile) {
        setProfile(res.profile);
        setIsAuthModalOpen(false);
        return { success: true };
      } else {
        const err = res.error || 'Failed to authenticate.';
        setAuthError(err);
        return { success: false, error: err };
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed.';
      setAuthError(msg);
      return { success: false, error: msg };
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterWithPassword = async (
    email: string,
    password: string,
    displayName?: string
  ): Promise<{ success: boolean; error?: string }> => {
    setLoading(true);
    setAuthError(null);
    try {
      const res = await fbRegisterWithEmailPassword(email, password, displayName);
      if (res.profile) {
        setProfile(res.profile);
        setIsAuthModalOpen(false);
        return { success: true };
      } else {
        const err = res.error || 'Failed to create account.';
        setAuthError(err);
        return { success: false, error: err };
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Registration failed.';
      setAuthError(msg);
      return { success: false, error: msg };
    } finally {
      setLoading(false);
    }
  };

  const handleSignInAsAdmin = async () => {
    setLoading(true);
    try {
      const prof = await authenticateLocalGoogleUser(
        DESIGNATED_ADMIN_EMAIL,
        'Derrick Darrack',
        'https://lh3.googleusercontent.com/a/default-user'
      );
      setProfile(prof);
      setAuthError(null);
      setIsAuthModalOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInAsCandidate = async () => {
    setLoading(true);
    try {
      const prof = await authenticateLocalGoogleUser(
        'candidate.civil@gmail.com',
        'Engr. Reviewee (Candidate)',
        ''
      );
      setProfile(prof);
      setAuthError(null);
      setIsAuthModalOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInWithCustomEmail = async (email: string, displayName?: string) => {
    setLoading(true);
    try {
      const prof = await authenticateLocalGoogleUser(
        email,
        displayName || (isUserAdmin(email) ? 'Derrick Darrack' : 'Reviewee Candidate'),
        ''
      );
      setProfile(prof);
      setAuthError(null);
      setIsAuthModalOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logoutUser();
      setUser(null);
      setProfile(null);
      setAuthError(null);
    } catch (err) {
      console.error('Sign Out failed:', err);
    }
  };

  const activeEmail = profile?.email || user?.email;
  const isAdmin = isUserAdmin(activeEmail) || profile?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isAdmin,
        loading,
        authError,
        isAuthModalOpen,
        designatedAdminEmail: DESIGNATED_ADMIN_EMAIL,
        openAuthModal: () => setIsAuthModalOpen(true),
        closeAuthModal: () => setIsAuthModalOpen(false),
        clearAuthError: () => setAuthError(null),
        signIn: handleSignIn,
        signInWithPassword: handleSignInWithPassword,
        registerWithPassword: handleRegisterWithPassword,
        signInAsAdmin: handleSignInAsAdmin,
        signInAsCandidate: handleSignInAsCandidate,
        signInWithCustomEmail: handleSignInWithCustomEmail,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
