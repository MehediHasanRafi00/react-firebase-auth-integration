import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    //* set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("object", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    //* Clear the observer on unmount

    return () => {
      unsubscribe();
    };
  }, []);

  // // get current userinfo
  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("if inside", currentUser);
  //   } else {
  //     console.log("else", currentUser);
  //   }
  // });

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    singInWithGoogle,
    signOutUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
