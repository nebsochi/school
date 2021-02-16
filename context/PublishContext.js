import { createContext, useState, useEffect } from "react";
import MApi from "../pages/api/merchantApi";
import Api from "../pages/api/api";

export const PublishContext = createContext();

export const PublishProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
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

  const deleteBook = async (id) => {
    setIsDeleting(true);
    const token = localStorage.getItem("token");
    const res = await Api.delete(
      `${Api.ENDPOINTS.url}/school/book/${id}`,
      token
    );
    setIsSaving(false);
    getAllBooks(1, false);
    return res.message;
  };

  const addBook = async (data) => {
    setIsSaving(true);
    const token = localStorage.getItem("token");
    const res = await Api.post(`${Api.ENDPOINTS.url}/school/book`, data, token);
    setIsSaving(false);
    getAllBooks(1, false);
    return res.message;
  };

  const getAllBooks = async (number, noReload) => {
    if (noReload) {
      setIsLoading(true);
    }
    const token = localStorage.getItem("token");
    const res = await Api.get(
      `${Api.ENDPOINTS.url}/school/books?page=${number}`,
      token
    );
    setIsLoading(false);
    if (res.data) {
      setBooks([...res.data]);
    } else {
      setError({ ...error, msg: res });
    }
  };

  const editBook = async (id, data) => {
    setIsUpdating(true);
    const token = localStorage.getItem("token");
    const res = await Api.post(
      `${Api.ENDPOINTS.url}/school/book/${id}`,
      data,
      token
    );
    setIsUpdating(false);
    getAllBooks(1, false);

    return res.message;
  };

  useEffect(() => {
    getPusblishers();
    getAllBooks(1, true);
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
    editBook,
    getAllBooks,
    isUpdating,
    isDeleting,
    deleteBook,
  };

  return (
    <PublishContext.Provider value={{ contextValue }}>
      {props.children}
    </PublishContext.Provider>
  );
};
