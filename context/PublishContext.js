import { createContext } from "react";

export const PublishContext = createContext();

export const PublishProvider = (props) => {
  return (
    <PublishContext.Provider value={{ contextValue }}>
      {props.children}
    </PublishContext.Provider>
  );
};
