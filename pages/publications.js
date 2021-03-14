import IndexLayout from "../Layouts/index";
import { useState, useContext, useEffect, useCallback } from "react";
import { PublishContext } from "../context/PublishContext";
import { ApiContext } from "../context/ApiContext";
import Empty from "../components/Empty";
import PublishModal from "../components/Publish/PublishModal";
import BookList from "../components/Publish/BookList";
import isEmpty from "lodash/isEmpty";
import PublishModalTwo from "../components/Publish/PublishModalTwo";
import SideView from "../components/SideView";
import NavBar from "../components/NavBar";

function publications() {
  const {
    setShow,
    modalScrns,
    setModalScrns,
    isLoading,
    setIsOpen,
    books,
  } = useContext(PublishContext).contextValue;
  const [modalData, setModalData] = useState({});
  const [num, setNum] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const { getTags, tags } = useContext(ApiContext).api;
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleBookClick = (e, item, number, comp) => {
    e.preventDefault();
    console.log(comp);
    setModalData({ ...modalData, ...books[number] });
    setModalScrns("BookItem");
    setNum(number);
    setShow(true);
  };

  useEffect(() => {
    setModalData({ ...modalData, ...books[num] });
  }, [books]);

  useEffect(() => {
    getTags();
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <IndexLayout>
      <NavBar page={"Publishers"} />
      <div className="container-fluid px-md-5 position-relative pt-4">
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
                  {tags?.map((tag, i) => (
                    <option key={i} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                className="form-control position-relative custom-input d-md-block"
                placeholder="search books"
                name="search"
                style={{ height: "45px" }}
                value={searchValue}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="d-flex justify-content-between">
              {isLoading ? (
                <div className="loading-container">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <>
                  {isEmpty(books) ? (
                    <Empty handleClick={handleClick} />
                  ) : (
                    <BookList handleBookClick={handleBookClick} />
                  )}
                </>
              )}

              <SideView handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
      <PublishModal />
      <PublishModalTwo data={modalData} />
    </IndexLayout>
  );
}

export default publications;
