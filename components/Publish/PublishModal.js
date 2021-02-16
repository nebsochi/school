import Styles from "../../styles/Modal.module.css";
import { useContext, useRef, useState, useEffect } from "react";
import { PublishContext } from "../../context/PublishContext";
import PublishScreen from "./PublishScreen";
import ModalBookList from "./ModalBookList";
import BookDetail from "./BookDetail";
import Toast from "../Toast";

function PublishModal() {
  const { isOpen, setIsOpen, data } = useContext(PublishContext).contextValue;
  const [animateContent, setAnimateContent] = useState(true);
  const [bookDetailData, setBookDetailData] = useState({});
  const [scrn, setScrn] = useState("PublishListScrn");
  const [books, setBooks] = useState([]);
  const [currPublisherId, setCurrPublisherId] = useState("");
  const [currPublisherName, setCurrPublisherName] = useState("");
  const screens = ["PublishListScrn", "BookListScrn", "BookDetailScrn"];
  const [toastOpen, setToastOpen] = useState(true);
  const [toastMsg, setToastMsg] = useState("");

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

  const handleItemClick = (e, i, pId, pubName) => {
    e.preventDefault();
    setScrn(screens[1]);
    setBooks([...data[i].books]);
    setCurrPublisherId(pId);
    setCurrPublisherName(pubName);
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
    setBookDetailData({ ...bookDetailData, ...item });
  };

  return (
    <div
      className={isOpen ? `${Styles.Modal} ${Styles.isOpen} ` : Styles.Modal}
      onClick={(e) => handleClick(e)}
    >
      {toastMsg.length > 1 && (
        <Toast
          toastMsg={toastMsg}
          setToastOpen={setToastOpen}
          toastOpen={toastOpen}
          toastTitle={"Status Message"}
        />
      )}
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
            setScrn={setScrn}
            pName={currPublisherName}
          />
        )}

        {scrn === "BookDetailScrn" && (
          <BookDetail
            setScrn={setScrn}
            pId={currPublisherId}
            closeModal={closeModal}
            item={bookDetailData}
            setToastMsg={setToastMsg}
            setToastOpen={setToastOpen}
          />
        )}
      </div>
    </div>
  );
}

export default PublishModal;
