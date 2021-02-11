import Styles from "../styles/Modal.module.css";
import { useContext, useRef, useState } from "react";
import { PublishContext } from "../context/PublishContext";

function PublishModal() {
  const { isOpen, setIsOpen, data } = useContext(PublishContext).contextValue;
  const [animateContent, setAnimateContent] = useState(true);
  const ref = useRef(null);
  const handleClick = (e) => {
    const str = e.target?.classList[0];
    if (str?.startsWith("Modal_Modal__")) {
      closeModal();
    }
  };

  const closeModal = () => {
    ref.current.classList.remove(`${Styles.isOpen}`);
    setTimeout(() => {
      setIsOpen(false);
      setAnimateContent(true);
    }, 500);
    setAnimateContent(false);
  };

  return (
    <div
      className={isOpen ? `${Styles.Modal} ${Styles.isOpen} ` : Styles.Modal}
      onClick={(e) => handleClick(e)}
    >
      <div
        ref={ref}
        className={`${Styles.ModalContent} ${
          animateContent && Styles.ModalContentIsOpen
        } position-relative`}
        ref={ref}
      ></div>
    </div>
  );
}

export default PublishModal;
