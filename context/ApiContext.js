import { createContext, useState, useContext, useEffect } from "react";
import Api from "../pages/api/api";
import BankApi from "../pages/api/bankApi";
import { AuthContext } from "../context/AuthContext";
import isNull from "lodash/isNull";

export const ApiContext = createContext();

export const ApiProvider = (props) => {
  const [isSearching, setIsSearching] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [updatingContact, setUpdatingContact] = useState(false);
  const [loadingBanks, setLoadingBanks] = useState(false);
  const [requestData, setRequestData] = useState([]);
  const [validating, setValidating] = useState(false);
  const { setUsrInfo, usrInfo } = useContext(AuthContext).authValue;
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState([1]);
  const [searchResult, setSearchResult] = useState([]);
  const [selected, setSelected] = useState("pending");
  const [recentData, setRecentData] = useState([]);
  const [tags, setTags] = useState([]);

  function setPg(params) {
    const pageNumbers = [];
    for (let index = 0; index <= params.total_results_count / 16; index++) {
      pageNumbers.push(index + 1);
      setPageCount([...pageNumbers]);
    }
    setPage({ ...page, next: params.next, prev: params.prev });
    setCurrentPage(params?.next ? params.next - 1 : params.prev + 1);
  }

  const getRequest = async (number, selection) => {
    setIsFetching(true);
    const token = localStorage.getItem("token");
    if (
      selection?.toLowerCase() === "approved" ||
      selection?.toLowerCase() === "declined"
    ) {
      const response = await Api.get(
        `${Api.ENDPOINTS.url}/school/applications?page=${number}&${selection}=1`,
        token
      );
      setIsFetching(false);
      setPg(response);
      const { data } = response;
      setRequestData([...data]);
    } else {
      const response = await Api.get(
        `${Api.ENDPOINTS.url}/school/applications?page=${number}`,
        token
      );
      setIsFetching(false);
      setPg(response);
      const { data } = response;
      setRequestData([...data]);
    }
  };

  const recentRequest = async (number) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const response = await Api.get(
      `${Api.ENDPOINTS.url}/school/applications?page=${number}`,
      token
    );
    setLoading(false);
    const { data } = response;
    setRecentData([...data]);
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
      const { data } = response;
      setPg(response);
      setSearchResult([...data]);
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
    const { data, message } = response;
    if (data) {
      setUsrInfo({ ...usrInfo, ...data });
    }
    return message;
  };

  const getBanks = async () => {
    setLoadingBanks(true);
    const res = await BankApi.get(`${BankApi.ENDPOINTS.url}/banks`);
    setLoadingBanks(false);
    const { data, status } = res;
    if (status) {
      const sortedData = (data || []).sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      setBanks(sortedData);
    }
  };

  const validate = async (cdata) => {
    setValidating(true);
    const res = await BankApi.post(
      `${BankApi.ENDPOINTS.url}/account/resolve`,
      cdata
    );
    setValidating(false);
    const { data, status } = res;
    if (status === "success") {
      return data.account_name;
    } else {
      return false;
    }
  };

  const updateAccount = async (cdata) => {
    const token = localStorage.getItem("token");
    const res = await Api.put(
      `${Api.ENDPOINTS.url}/school/account`,
      cdata,
      token
    );
    const { data, message } = res;
    if (message === "Account information updated!") {
      setUsrInfo({ ...usrInfo, ...data });
    }
    return message;
  };

  const updatePicture = async (picture) => {
    const token = localStorage.getItem("token");
    const res = await Api.post(
      `${Api.ENDPOINTS.url}/school/picture`,
      picture,
      token
    );
    const { data, message } = res;
    if (message === "picture added!") {
      setUsrInfo({ ...usrInfo, ...data });
    }
    return message;
  };

  useEffect(() => {
    let token = localStorage.getItem("token") || "";
    if (token.length > 1) {
      getBanks();
      recentRequest(1);
    }
  }, []);

  const getTags = async () => {
    const token = localStorage.getItem("token");
    const res = await Api.get(`${Api.ENDPOINTS.url}/school/tags`, token);
    const { data, message } = res;
    setTags([...data]);
    return message;
  };

  useEffect(() => {
    let token = localStorage.getItem("token") || "";
    if (token.length > 1) {
      let str = window.location.pathname;
      if (window.location.pathname === "/request") {
        setSelected("Pending");
        getRequest(1);
      } else if (window.location.pathname.startsWith("/request/pending/")) {
        getRequest(str[str.length - 1]);
      } else if (window.location.pathname.startsWith("/request/declined")) {
        getRequest(str[str.length - 1], "declined");
        setSelected("Declined");
      } else if (window.location.pathname.startsWith("/request/approved")) {
        getRequest(str[str.length - 1], "approved");
        setSelected("Approved");
      } else {
        getRequest(1);
      }
    }
  }, []);

  const api = {
    getRequest,
    searchRequest,
    isSearching,
    isFetching,
    loading,
    updateContactInfo,
    updatingContact,
    searchResult,
    banks,
    validate,
    updateProfile,
    requestData,
    updateAccount,
    updatePicture,
    pageCount,
    currentPage,
    page,
    setSelected,
    selected,
    recentRequest,
    recentData,
    getTags,
    tags,
  };

  return (
    <ApiContext.Provider value={{ api }}>{props.children}</ApiContext.Provider>
  );
};
