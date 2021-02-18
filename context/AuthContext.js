import { createContext, useState, useEffect } from "react";
import Api from "../pages/api/api";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [signedIn, setSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (cdata) => {
    setIsLoading(true);
    const response = await Api.post(`${Api.ENDPOINTS.url}/school/login`, cdata);
    setIsLoading(false);

    const { data } = response;
    if (response.message === "Login Successful!") {
      if (process.browser) {
        localStorage.setItem("token", data.token);
        setSignedIn(true);
      }
    }

    return response.message;
  };

  const signUpUser = async (cdata) => {
    const response = await Api.post(
      `${Api.ENDPOINTS.url}/school/register`,
      cdata
    );
    return response.message;
  };

  const logOut = () => {
    if (process.browser) {
      setSignedIn(false);
      localStorage.clear();
      // router.push("/signin");
    }
  };

  const checkAuthState = () => {
    if (process.browser) {
      const token = localStorage.getItem("token");
      if (token) {
        setSignedIn(true);
        return true;
      } else {
        return false;
      }
    }
  };

  const authValue = {
    signUpUser,
    signIn,
    signedIn,
    checkAuthState,
    logOut,
  };

  return (
    <AuthContext.Provider value={{ authValue }}>
      {props.children}
    </AuthContext.Provider>
  );
};
