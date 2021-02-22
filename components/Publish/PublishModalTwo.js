import Styles from "../../styles//Modal.module.css";
import { useContext, useRef, useState, useEffect } from "react";
import { PublishContext } from "../../context/PublishContext";
import { formatNumber } from "../../utils/Formatter";
import Toast from "../Toast";

function PublishModalTwo({ data }) {
  const {
    show,
    setShow,
    editBook,
    getAllBooks,
    isUpdating,
    deleteBook,
    isDeleting,
  } = useContext(PublishContext).contextValue;
  const [animateContent, setAnimateContent] = useState(true);
  const [value, setValue] = useState("");
  const [validateMsg, setValidateMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
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

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  const handleUpdate = async () => {
    let val = parseInt(value, 10);
    if (value.trim() === "") {
      setValidateMsg("Please provide a price");
    } else if (val < data?.publisher_price) {
      console.log(data.publisher_price);
      setValidateMsg("Price is lower than publisher's price");
    } else {
      setValidateMsg("");
      const res = await editBook(data?.id, {
        name: data.name,
        price: value,
        picture: data.picture,
        publisher_id: data.publisher_id,
        link: data.link,
        book_id: data.id,
      });
      console.log(res);
      if (res === "book edited") {
        getAllBooks(1);
        setSuccessMsg("Price Updated");
        setValidateMsg("");
      } else {
        setValidateMsg(res);
        setSuccessMsg("");
      }
    }
  };

  const del = async () => {
    const res = await deleteBook(data.id);
    if (res === "book deleted") {
      setToastMsg("Book successfully Deleted");
      setToastOpen(true);
      getAllBooks(1);
    } else {
      setToastMsg(res);
      setToastOpen(true);
    }
  };

  return (
    <div
      className={show ? `${Styles.Modal} ${Styles.isOpen} ` : Styles.Modal}
      onClick={(e) => handleClick(e)}
    >
      <Toast
        toastMsg={toastMsg}
        toastTitle={"Delete Status"}
        setToastOpen={setToastOpen}
        toastOpen={toastOpen}
      />
      <div
        ref={ref}
        className={`${Styles.ModalContent} ${
          animateContent && Styles.ModalContentIsOpen
        } position-relative`}
        ref={ref}
      >
        <div className="border-bottom">
          <div
            className={`${Styles.ModalHeader} d-flex align-items-center position-absolute justify-content-between`}
          >
            <h6 style={{ fontSize: "600", fontWeight: "600" }} className="m-0">
              Book Details
            </h6>
            <img src="x.svg" alt="close" onClick={closeModal} />
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-header">Book Details</div>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div style={{ height: "250px" }} className="border rounded mr-3">
                <img
                  src={data?.picture}
                  alt="okeke"
                  height={"100%"}
                  width={"auto"}
                />
              </div>
              <div className="pl-2">
                <h6
                  className="pb-3 border-bottom"
                  style={{ fontWeight: "600" }}
                >
                  {data.name}
                </h6>

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
                    {formatNumber(data?.publisher_price) + ".00"}
                  </h5>
                </div>

                <h6
                  style={{ fontWeight: "600", fontSize: "1.1rem" }}
                  className="pt-2 border-bottom pb-3"
                >
                  &#x20A6;&nbsp;
                  {formatNumber(data?.price) + ".00"}
                </h6>

                <div>
                  <form
                    className="pt-2"
                    onSubmit={(e) => handleSubmit(e)}
                    noValidate
                  >
                    <input
                      style={{ height: "40px" }}
                      className={`${successMsg > 2 ? "border-success" : null} ${
                        validateMsg.length > 2 ? "border-danger" : null
                      }  form-control`}
                      onFocus={(e) => {
                        e.target.type = "number";
                      }}
                      onBlur={(e) => {
                        e.target.type = "text";
                      }}
                      name="price"
                      value={value}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter desired amount"
                      required
                      minLength={data?.price?.length}
                    />

                    <small className="text-danger d-block pt-1">
                      {validateMsg}
                    </small>

                    <small className="text-success d-block pt-1">
                      {successMsg}
                    </small>
                  </form>
                  {isUpdating ? (
                    <button
                      className="btn btn-primary btn-primary--sh-none btn-sm mt-4"
                      style={{ background: "#0062cc", borderColor: "#0062cc" }}
                      onClick={(e) => handleUpdate(e)}
                    >
                      Update Price
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-primary--sh-none btn-sm mt-4"
                      style={{ background: "#0062cc", borderColor: "#0062cc" }}
                      onClick={(e) => handleUpdate(e)}
                    >
                      Update Price
                    </button>
                  )}

                  <button
                    className="btn btn-danger btn-sm mt-4 ml-3"
                    onClick={del}
                  >
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
