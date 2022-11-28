import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase.config.js/FireBase.Config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUserWithEmailPass = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailPass = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserProfile = (name, photo) => {
    setLoader(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentsUser) => {
      setUser(currentsUser);
      setLoader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const LogOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const authInfo = {
    loader,
    setLoader,
    createUserWithEmailPass,
    signInWithEmailPass,
    signInWithGoogle,
    user,
    LogOut,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
