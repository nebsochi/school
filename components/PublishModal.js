import Styles from "../styles/Modal.module.css";
import { useContext, useRef, useState, useEffect } from "react";
import { PublishContext } from "../context/PublishContext";
import Image from "next/image";
import PublishList from "./PublishList";

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
      >
        <div className="border-bottom pb-4">
          <h5
            className={`${Styles.ModalHeader} d-flex position-absolute justify-content-between`}
          >
            <h5 style={{ fontSize: "600" }}>Add Books</h5>
            <img src="x.svg" alt="close" onClick={closeModal} />
          </h5>
          <form className="d-flex">
            <input
              type="text"
              placeholder="Find Publisher"
              className="form-control shadow-sm"
            />
            <button
              className="btn ml-2 btn-primary btn-primary--sh-none"
              style={{
                background: "rgb(0, 98, 204)",
                borderColor: "rgb(0, 98, 204)",
              }}
            >
              Search
            </button>
          </form>
        </div>

        <PublishList />
      </div>
    </div>
  );
}

export default PublishModal;
