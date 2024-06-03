import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
export const AuthContext = createContext();
const UseAuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(user);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  /* create a user */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* sign ing with email and password */
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* google user */
  const GoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  /* USER INFO CN =============================
===============================*/
  const saveUser = async (user) => {
    /* current user */
    const currentUser = {
      email: user?.email,
      role: "member",
    };

    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/userCn`,
      currentUser
    );

    return data;
  };

  /* ON AUTH STATE CHANGE */

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      /* USER CN */

      setUser(currentUser);
      saveUser(currentUser);

      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  /* update profile */
  const updateProfiles = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  /* logout */
  const logOut = () => {
    return signOut(auth);
  };

  /* ALl  AUTH INFORMATION========= */
  const authInfo = {
    user,
    loading,
    createUser,
    Login,
    GoogleLogin,
    updateProfiles,
    logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UseAuthProvider;
