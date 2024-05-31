import { createContext, useState } from "react";
import { app } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext();
const UseAuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
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
    logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UseAuthProvider;
