import { createContext, useEffect, useState } from "react";

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
import { app } from "../firebase/firebase";
import useAxiosSecure from "../AxiosSecure/AxiosSecure";

export const AuthContext = createContext();
const UseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
const axiosSecure=useAxiosSecure()
  const provider = new GoogleAuthProvider();
  /* create a user */
  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* sign ing with email and password */
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* google user */
  const GoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  /* ON AUTH STATE CHANGE */

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosSecure
          .post("/jwt", userInfo)
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
              setLoading(false);
            }
          })
          .catch((err) => console.log(err));
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }

      
      setUser(currentUser);

      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  /* update profile */
  const updateProfiles = async (displayName, photoURL) => {
    try {
      setLoading(true);

      const porfileData = {};
      if (displayName) {
        porfileData.displayName = displayName;
      }
      if (photoURL) {
        porfileData.photoURL = photoURL;
      }

      await updateProfile(auth.currentUser, porfileData);
    setLoading(false)
    } catch (error) {}

    setLoading(true);
    return updateProfile(auth.currentUser, {
      ...user,
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  /* logout */
  const logOut = () => {
    setLoading(true);
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
