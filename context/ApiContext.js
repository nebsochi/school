import { createContext, useState, useContext } from "react";
import Api from "../pages/api/api";
import { AuthContext } from "../context/AuthContext";

export const ApiContext = createContext();

export const ApiProvider = (props) => {
  const [isSearching, setIsSearching] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [updatingContact, setUpdatingContact] = useState(false);
  const { setUsrInfo, usrInfo } = useContext(AuthContext).authValue;

  const getRequest = async (number, selection) => {
    try {
      setIsFetching(true);
      const token = localStorage.getItem("token");
      if (selection?.length > 0) {
        const response = await Api.get(
          `${Api.ENDPOINTS.url}/school/applications?page=${number}&${selection}=1`,
          token
        );
        setIsFetching(false);
        const data = response;
        return data;
      } else {
        const response = await Api.get(
          `${Api.ENDPOINTS.url}/school/applications?page=${number}`,
          token
        );
        setIsFetching(false);
        const data = response;
        return data;
      }
    } catch (err) {
      throw err;
    }
  };

  const searchRequest = async (pageNumber, searchQuery) => {
    try {
      setIsSearching(true);
      const token = localStorage.getItem("token");
      const response = await Api.post(
        `${Api.ENDPOINTS.url}/school/requests?page=${pageNumber}`,
        searchQuery,
        token
      );
      setIsSearching(false);
      const data = response;
      return data;
    } catch (err) {
      throw err;
    }
  };

  const updateContactInfo = async (cdata) => {
    setUpdatingContact(true);
    const token = localStorage.getItem("token");
    const response = await Api.put(
      `${Api.ENDPOINTS.url}/school/contact`,
      cdata,
      token
    );
    setUpdatingContact(false);
    const { data } = response;
    if (data) {
      setUsrInfo({ ...usrInfo, ...data });
    }
    return response.message;
  };

  const updateProfile = async (cdata) => {
    const token = localStorage.getItem("token");
    const response = await Api.put(
      `${Api.ENDPOINTS.url}/school/info`,
      cdata,
      token
    );
    const { data } = response;
    if (data) {
      setUsrInfo({ ...usrInfo, ...data });
    }
    return response.message;
  };

  const api = {
    getRequest,
    searchRequest,
    isSearching,
    isFetching,
    updateContactInfo,
    updatingContact,
    updateProfile,
  };

  return (
    <ApiContext.Provider value={{ api }}>{props.children}</ApiContext.Provider>
  );
};
