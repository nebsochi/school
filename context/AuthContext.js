import { createContext, useState, useEffect } from "react";
import Api from "../pages/api/api";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [signedIn, setSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [usrInfo, setUsrInfo] = useState({});

  const signIn = async (cdata) => {
    setIsLoading(true);
    const response = await Api.post(`${Api.ENDPOINTS.url}/school/login`, cdata);
    setIsLoading(false);
    if (response.message === "Login Successful!") {
      if (process.browser) {
        const { data } = response;
        localStorage.setItem("token", data.token);
        setSignedIn(true);
      }
    }

    return response.message;
  };

  const signUpUser = async (cdata) => {
    setIsLoading(true);
    const response = await Api.post(
      `${Api.ENDPOINTS.url}/school/register`,
      cdata
    );
    if (response.message === "Login Successful!") {
      const { data } = response;
      if (process.browser) {
        localStorage.setItem("token", data.token);
        setSignedIn(true);
      }
    }
    setIsLoading(false);
    return response.message;
  };

  const logOut = () => {
    if (process.browser) {
      setSignedIn(false);
      localStorage.clear();
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

  const getUserInfo = async () => {
    const token = localStorage.getItem("token");
    const response = await Api.get(`${Api.ENDPOINTS.url}/school/data`, token);
    const { data, message } = response;

    if (message === "school exists") {
      setUsrInfo({ ...usrInfo, ...data });
    } else {
      return response.message;
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const authValue = {
    signUpUser,
    signIn,
    signedIn,
    checkAuthState,
    logOut,
    getUserInfo,
    usrInfo,
    setUsrInfo,
  };

  return (
    <AuthContext.Provider value={{ authValue }}>
      {props.children}
    </AuthContext.Provider>
  );
};
