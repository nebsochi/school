import React from "react";
import PublishList from "./PublishList";
import Styles from "../../styles//Modal.module.css";

function PublishScreen({ handleItemClick, closeModal }) {
  return (
    <>
      <div className="border-bottom pb-4">
        <div
          className={`${Styles.ModalHeader} d-flex position-absolute justify-content-between`}
        >
          <h6 style={{ fontWeight: "600" }}>Select Publisher</h6>
          <img src="x.svg" alt="close" onClick={closeModal} />
        </div>
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
      <div
        className="border-bottom"
        style={{ maxHeight: "65vh", overflow: "auto", margin: "0 -2rem" }}
      >
        <div style={{ padding: "0 2rem" }}>
          <PublishList handleItemClick={handleItemClick} />
        </div>
      </div>
      <div className="text-right">
        <button
          className="btn mt-4 btn-primary"
          style={{
            background: "rgb(0, 98, 204)",
            borderColor: "rgb(0, 98, 204)",
          }}
        >
          Invite a publisher
        </button>
      </div>
    </>
  );
}

export default PublishScreen;
