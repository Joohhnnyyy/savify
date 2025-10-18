import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  GithubAuthProvider,
  ConfirmationResult,
  PhoneAuthProvider
} from 'firebase/auth';
import { auth, googleProvider, githubProvider, microsoftProvider, RecaptchaVerifier, signInWithPhoneNumber } from '@/lib/firebase';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (email: string, password: string, name?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  loginWithMicrosoft: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (displayName: string) => Promise<void>;
  setupRecaptcha: (containerId: string) => RecaptchaVerifier;
  signInWithPhone: (phoneNumber: string, appVerifier: RecaptchaVerifier) => Promise<ConfirmationResult>;
  confirmPhoneSignIn: (confirmationResult: ConfirmationResult, code: string) => Promise<void>;
  resetRecaptcha: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email: string, password: string, name?: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (name && userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: name
      });
    }
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const loginWithGithub = async () => {
    await signInWithPopup(auth, githubProvider);
  };

  const loginWithMicrosoft = async () => {
    await signInWithPopup(auth, microsoftProvider);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const updateUserProfile = async (displayName: string) => {
    if (currentUser) {
      await updateProfile(currentUser, { displayName });
    }
  };

  // Phone authentication methods
  const setupRecaptcha = (containerId: string): RecaptchaVerifier => {
    const recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      'size': 'normal',
      'callback': (response: any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber
        console.log('reCAPTCHA solved');
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again
        console.log('reCAPTCHA expired');
      }
    });
    
    // Store the verifier globally for access
    (window as any).recaptchaVerifier = recaptchaVerifier;
    
    return recaptchaVerifier;
  };

  const signInWithPhone = async (phoneNumber: string, appVerifier: RecaptchaVerifier): Promise<ConfirmationResult> => {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    // Store confirmation result globally for access
    (window as any).confirmationResult = confirmationResult;
    return confirmationResult;
  };

  const confirmPhoneSignIn = async (confirmationResult: ConfirmationResult, code: string): Promise<void> => {
    const result = await confirmationResult.confirm(code);
    // User signed in successfully
    console.log('User signed in with phone:', result.user);
  };

  const resetRecaptcha = (): void => {
    const recaptchaVerifier = (window as any).recaptchaVerifier;
    if (recaptchaVerifier) {
      try {
        recaptchaVerifier.clear();
      } catch (error) {
        console.log('Error clearing reCAPTCHA:', error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    loginWithGoogle,
    loginWithGithub,
    loginWithMicrosoft,
    resetPassword,
    updateUserProfile,
    setupRecaptcha,
    signInWithPhone,
    confirmPhoneSignIn,
    resetRecaptcha
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};