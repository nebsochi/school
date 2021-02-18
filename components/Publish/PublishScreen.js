import { useState, useEffect, useContext, useCallback } from "react";
import PublishList from "./PublishList";
import Styles from "../../styles//Modal.module.css";
import debounce from "lodash/debounce";
import { PublishContext } from "../../context/PublishContext";

function PublishScreen({ handleItemClick, closeModal }) {
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { searchPublishers } = useContext(PublishContext).contextValue;

  const updateQuery = () => {
    if (searchValue !== "") {
      searchPublishers({
        search: `${searchValue}`,
      }).then((res) => {
        if (res.data) {
          setSearchData([...res.data]);
        } else {
          console.log(res.message);
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateQuery();
  };

  const delayedQuery = useCallback(debounce(updateQuery, 1000), [searchValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    delayedQuery();
    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [searchValue, delayedQuery]);

  useEffect(() => {
    return () => {
      setSearchValue("");
    };
  }, []);

  return (
    <>
      <div className="border-bottom pb-4">
        <div
          className={`${Styles.ModalHeader} d-flex  align-items-center position-absolute justify-content-between`}
        >
          <h6 style={{ fontWeight: "600" }}>Select Publisher</h6>
          <img src="x.svg" alt="close" onClick={closeModal} />
        </div>
        <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Find Publisher"
            className="form-control shadow-sm"
            onChange={(e) => handleChange(e)}
            value={searchValue}
          />
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
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
          <PublishList
            handleItemClick={handleItemClick}
            searchData={searchData}
            searchValue={searchValue}
          />
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
