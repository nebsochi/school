import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  let handleSetData = (item) => {
    setData({ ...data, ...item });
  };

  let toggleModal = () => {
    setOpen((prev) => !prev);
  };

  const contextValue = {
    data,
    handleSetData,
    toggleModal,
    isOpen,
  };

  return (
    <ModalContext.Provider value={{ contextValue }}>
      {props.children}
    </ModalContext.Provider>
  );
};
