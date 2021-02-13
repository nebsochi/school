import { useContext, useState } from "react";
import Styles from "../../styles/Modal.module.css";
import { PublishContext } from "../../context/PublishContext";
import Image from "next/image";
import Toast from "../Toast";

function BookDetail({
  item,
  closeModal,
  pId,
  setScrn,
  setToastMsg,
  setToastOpen,
}) {
  const [priceValue, setPriceValue] = useState({ price: "" });

  const { addBook, error, isLoading } = useContext(PublishContext).contextValue;
  const handleChange = (e) => {
    const { value, name } = e.target;
    setPriceValue({ ...priceValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await addBook({
      name: item.name,
      publisher_price: item.price,
      picture: item.primary_picture,
      book_id: item.id,
      link: item.item_link,
      publisher_id: pId,
      price: priceValue.price,
    });

    setToastMsg(res);
    setToastOpen(true);
    if (res === "book added") {
      setScrn("PublishListScrn");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="border-bottom">
        <div
          className={`${Styles.ModalHeader} d-flex position-absolute justify-content-between`}
        >
          <div className="d-flex align-items-center">
            <Image src="/arr-left.svg" height={16} width={16} alt="Back" />
            <h6 style={{ fontSize: "600" }} className="m-0 ml-1">
              Book Detail
            </h6>
          </div>

          <img src="x.svg" alt="close" onClick={closeModal} />
        </div>
      </div>
      <div className="mt-4">
        <div className="card">
          <h6 className="card-header">Basic details</h6>
          <div className="card-body">
            <span className="text-primary pb-2 d-inline-block">Book Name</span>
            <h6 className="pb-3 border-bottom">{item?.name}</h6>
            <div className="d-flex align-items-center pt-2 pb-3">
              <span className="text-danger">Publisher's price:</span>
              <h6
                style={{ fontWeight: "500", fontSize: "1.1rem" }}
                className="ml-3 m-0"
              >
                &#x20A6;&nbsp;
                {item.price}
              </h6>
            </div>

            <div className="pt-2">
              <label htmlFor="price">Enter Book Price</label>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">&#x20A6;</span>
                </div>
                <input
                  type="text"
                  name="price"
                  onFocus={(e) => (e.target.type = "number")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={(e) => handleChange(e)}
                  value={priceValue?.price}
                  className="form-control"
                  aria-label="Amount (to the nearest naira)"
                  placeholder={item.price}
                  id="price"
                  style={{ height: "40px" }}
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-4">
          <h6 className="card-header">Book Image</h6>
          <div
            style={{ overflow: "hidden", height: "180px" }}
            className="card-body"
          >
            <img
              src={item.primary_picture}
              alt="book"
              height={"100%"}
              width={"auto"}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn mt-4 btn-primary btn-primary--sh-none btn-sm"
        style={{
          background: "#0062cc",
          borderColor: "#0062cc",
          height: "40px",
        }}
      >
        {isLoading ? (
          <>
            <span
              className="spinner-border spinner-border-sm text-white mr-2"
              role="status"
              aria-hidden="true"
            />
            Saving Book...
          </>
        ) : (
          "Save Book"
        )}
      </button>
    </form>
  );
}

export default BookDetail;
