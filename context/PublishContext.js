import { createContext, useState, useEffect } from "react";
import MApi from "../pages/api/merchantApi";
import Api from "../pages/api/api";

export const PublishContext = createContext();

export const PublishProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState({});

  const getPusblishers = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const res = await MApi.get(`${MApi.ENDPOINTS.url}/publishers`, token);
    if (res.data) {
      setData([...res.data]);
    } else {
      setError({ ...error, msg: res });
    }
    setIsLoading(false);
  };

  const addBook = async (data) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const res = await Api.post(`${Api.ENDPOINTS.url}/school/book`, data, token);
    setIsLoading(false);
    return res.message;
  };

  const getAllBooks = async (number) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const res = await Api.get(
      `${Api.ENDPOINTS.url}/school/books?page=${number}`,
      token
    );
    if (res.data) {
      setBooks([...res.data]);
    } else {
      setError({ ...error, msg: res });
    }
  };

  useEffect(() => {
    getPusblishers();
    getAllBooks(1);
  }, []);

  useEffect(() => {
    if (isOpen || show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show, isOpen]);

  const contextValue = {
    isOpen,
    setIsOpen,
    data,
    show,
    setShow,
    isLoading,
    error,
    addBook,
    books,
  };

  return (
    <PublishContext.Provider value={{ contextValue }}>
      {props.children}
    </PublishContext.Provider>
  );
};
