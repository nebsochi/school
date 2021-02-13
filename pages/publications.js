import IndexLayout from "../Layouts/index";
import { useState, useContext, useEffect, useCallback } from "react";
import { PublishContext } from "../context/PublishContext";
// import Styles from "../styles/Publish.module.css";
import Empty from "../components/Empty";
import PublishModal from "../components/Publish/PublishModal";
import BookList from "../components/Publish/BookList";
import isEmpty from "lodash/isEmpty";
import PublishModalTwo from "../components/Publish/PublishModalTwo";

function publications() {
  const { isOpen, setIsOpen, books } = useContext(PublishContext).contextValue;
  const { show, setShow, data, isLoading, error } = useContext(
    PublishContext
  ).contextValue;
  const [modalData, setModalData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const editModal = (e, i) => {
    e.preventDefault();
    setModalData({ ...modalData, ...data[i] });
    setShow(true);
  };

  return (
    <IndexLayout>
      <div className="container position-relative pt-4">
        <div className="row" style={{ marginBottom: "60px" }}>
          <div className="col-md-12">
            <div className="pt-2 mb-4 border-bottom d-md-flex align-items-bottom justify-content-between">
              <div className="form-group d-flex align-items-center">
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="pt-1"
                  style={{
                    whiteSpace: "nowrap",
                    fontSize: ".9rem",
                    fontWeight: "600",
                  }}
                >
                  Filter By:&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <select
                  className="form-control"
                  style={{ height: "45px" }}
                  onChange={(e) => handleSelect(e)}
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="declined">Declined</option>
                </select>
              </div>

              <input
                type="text"
                className="form-control position-relative custom-input d-md-block"
                placeholder="search application"
                name="search"
                style={{ height: "45px" }}
                value={searchValue}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {isEmpty(books) ? (
              <Empty handleClick={handleClick} />
            ) : (
              <BookList editModal={editModal} />
            )}
          </div>
        </div>
      </div>
      <PublishModal />
      <PublishModalTwo data={modalData} />
    </IndexLayout>
  );
}

export default publications;
