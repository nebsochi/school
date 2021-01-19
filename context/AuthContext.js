import { createContext, useState, useEffect } from "react";
import Api from "../pages/api/api";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [signedIn, setSignedIn] = useState(false);

  const signIn = async (cdata) => {
    const response = await Api.post(`${Api.ENDPOINTS.url}/school/login`, cdata);

    const { status, data } = response;
    if (status) {
      if (process.browser) {
        localStorage.setItem("token", data.token);
        setSignedIn(true);
        return status;
      }
    } else {
      return response.messages;
    }
  };

  const signUpUser = async (cdata) => {
    const response = await Api.post(
      `${Api.ENDPOINTS.url}/school/register`,
      cdata
    );
    const { status, data } = response;
    if (status) {
      if (process.browser) {
        localStorage.setItem("token", data.token);
        setSignedIn(true);
        console.log(response);
        return status;
      }
    } else {
      return response?.message;
    }
  };

  const checkAuthState = () => {
    if (process.browser) {
      const token = localStorage.getItem("token");
      if (token) {
        setSignedIn(true);
        console.log(token);
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
  };

  return (
    <AuthContext.Provider value={{ authValue }}>
      {props.children}
    </AuthContext.Provider>
  );
};
