import React, { useContext } from "react";
import { AuthContext } from "../provider/useAuthProvider";

const useAuth = () => {

  return useContext(AuthContext);
};

export default useAuth;
