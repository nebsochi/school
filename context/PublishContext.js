import { createContext, useState, useEffect } from "react";
import Api from "../pages/api/merchantApi";

export const PublishContext = createContext();

export const PublishProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const getPusblishers = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const res = await Api.get(`${Api.ENDPOINTS.url}/publishers`, token);
    if (res.data) {
      setData([...res.data]);
    } else {
      setError({ ...error, msg: res });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPusblishers();
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
  };

  return (
    <PublishContext.Provider value={{ contextValue }}>
      {props.children}
    </PublishContext.Provider>
  );
};
