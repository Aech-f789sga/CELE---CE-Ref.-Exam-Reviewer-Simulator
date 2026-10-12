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
} from '../services/firebase';

interface AuthContextValue {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  isAdmin: boolean;
  loading: boolean;
  designatedAdminEmail: string;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initial connection test
    testFirebaseConnection();

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setUser(fbUser);
      if (fbUser) {
        try {
          const userProf = await syncUserProfile(fbUser);
          setProfile(userProf);
        } catch (e) {
          console.error('Failed to sync user profile:', e);
          setProfile({
            uid: fbUser.uid,
            email: fbUser.email || '',
            displayName: fbUser.displayName || 'Candidate',
            photoURL: fbUser.photoURL || '',
            role: isUserAdmin(fbUser.email) ? 'admin' : 'user',
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
          });
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const prof = await loginWithGoogle();
      if (prof) {
        setProfile(prof);
      }
    } catch (err) {
      console.error('Google Sign In failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logoutUser();
      setUser(null);
      setProfile(null);
    } catch (err) {
      console.error('Sign Out failed:', err);
    }
  };

  const isAdmin = isUserAdmin(user?.email) || profile?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isAdmin,
        loading,
        designatedAdminEmail: DESIGNATED_ADMIN_EMAIL,
        signIn: handleSignIn,
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
