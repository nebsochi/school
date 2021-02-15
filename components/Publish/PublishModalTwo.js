import Styles from "../../styles//Modal.module.css";
import { useContext, useRef, useState, useEffect } from "react";
import { PublishContext } from "../../context/PublishContext";

function PublishModalTwo({ data }) {
  const { show, setShow } = useContext(PublishContext).contextValue;
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
      setShow(false);
      setAnimateContent(true);
    }, 500);
    setAnimateContent(false);
  };

  return (
    <div
      className={show ? `${Styles.Modal} ${Styles.isOpen} ` : Styles.Modal}
      onClick={(e) => handleClick(e)}
    >
      <div
        ref={ref}
        className={`${Styles.ModalContent} ${
          animateContent && Styles.ModalContentIsOpen
        } position-relative`}
        ref={ref}
      >
        <div className="border-bottom">
          <div
            className={`${Styles.ModalHeader} d-flex position-absolute justify-content-between`}
          >
            <h6 style={{ fontSize: "600" }} className="m-0">
              Book Details
            </h6>
            <img src="x.svg" alt="close" onClick={closeModal} />
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-header">Book Details</div>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div
                style={{ height: "250px", overflow: "hidden" }}
                className="border rounded mr-3"
              >
                <img
                  src={data?.picture}
                  alt="okeke"
                  height={"100%"}
                  width={"auto"}
                />
              </div>
              <div className="pl-2">
                <h6 className="pb-3 border-bottom">{data.name}</h6>

                <div className="d-flex align-items-center pt-2 pb-3">
                  <span>Publisher's price:</span>
                  <h5
                    style={{
                      fontWeight: "300",
                      fontSize: ".9rem",
                      textDecoration: "line-through",
                    }}
                    className="m-0 ml-2 text-danger"
                  >
                    &#x20A6;&nbsp;
                    {data?.publisher_price}
                  </h5>
                </div>

                <h6
                  style={{ fontWeight: "600", fontSize: "1.1rem" }}
                  className="pt-2 border-bottom pb-3"
                >
                  &#x20A6;&nbsp;
                  {data?.price}
                </h6>

                <div>
                  <div className="pt-2">
                    <input
                      type="text"
                      style={{ height: "40px" }}
                      className="form-control"
                      onFocus={(e) => {
                        e.target.type = "number";
                        e.target.value = "";
                      }}
                      onBlur={(e) => {
                        e.target.type = "text";
                      }}
                      placeholder="Enter desired amount"
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-primary--sh-none btn-sm mt-4"
                    style={{ background: "#0062cc", borderColor: "#0062cc" }}
                  >
                    Update Price
                  </button>
                  <button className="btn btn-danger btn-sm mt-4 ml-3">
                    Remove Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishModalTwo;
