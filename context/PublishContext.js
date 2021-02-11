import { createContext } from "react";

export const PublishContext = createContext();

export const PublishProvider = (props) => {
  const contextValue = {};
  return (
    <PublishContext.Provider value={{ contextValue }}>
      {props.children}
    </PublishContext.Provider>
  );
};
