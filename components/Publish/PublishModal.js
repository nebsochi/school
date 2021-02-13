import Styles from "../../styles/Modal.module.css";

import { useContext, useRef, useState, useEffect } from "react";
import { PublishContext } from "../../context/PublishContext";
import PublishScreen from "./PublishScreen";

import ModalBookList from "./ModalBookList";

function PublishModal() {
  const { isOpen, setIsOpen, data } = useContext(PublishContext).contextValue;
  const [animateContent, setAnimateContent] = useState(true);
  const [scrn, setScrn] = useState("PublishListScrn");
  const [books, setBooks] = useState([]);
  const screens = ["PublishListScrn", "BookListScrn", "BookDetailScrn"];

  const ref = useRef(null);
  const handleClick = (e) => {
    const str = e.target?.classList[0];
    if (str?.startsWith("Modal_Modal__")) {
      closeModal();
    }
  };

  useEffect(() => {
    setScrn("PublishListScrn");
  }, []);

  const handleItemClick = (e, i) => {
    e.preventDefault();
    setScrn(screens[1]);
    setBooks([...data[i].books]);
  };

  const closeModal = () => {
    ref.current.classList.remove(`${Styles.isOpen}`);
    setTimeout(() => {
      setIsOpen(false);
      setAnimateContent(true);
      setScrn("PublishListScrn");
    }, 500);
    setAnimateContent(false);
  };

  const handleBookClick = (e, item) => {
    e.preventDefault();
    setScrn(screens[2]);
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
      >
        {scrn === "PublishListScrn" && (
          <PublishScreen
            handleItemClick={handleItemClick}
            closeModal={closeModal}
          />
        )}

        {scrn === "BookListScrn" && (
          <ModalBookList
            closeModal={closeModal}
            books={books}
            handleBookClick={handleBookClick}
          />
        )}

        {scrn === "BookDetailScrn" && <div>dssdfsdfsdfsdf</div>}
      </div>
    </div>
  );
}

export default PublishModal;
