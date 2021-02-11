import { createContext, useState } from "react";

export const PublishContext = createContext();

export const PublishProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const contextValue = { isOpen, setIsOpen, data };

  return (
    <PublishContext.Provider value={{ contextValue }}>
      {props.children}
    </PublishContext.Provider>
  );
};
