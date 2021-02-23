import IndexLayout from "../../Layouts";
import RequestCard from "../../components/RequestCard";
import { ApiContext } from "../../context/ApiContext";
import { useRouter } from "next/router";
import { useState, useContext, useEffect, useCallback } from "react";
import Modal from "../../components/Modal";
import debounce from "lodash/debounce";
import Pagination from "../../components/Pagination";
import NavBar from "../../components/NavBar";

export default function Request({}) {
  const {
    getRequest,
    searchRequest,
    pageCount,
    requestData,
    searchResult,
    isSearching,
    isFetching,
    page,
    currentPage,
    setSelected,
    selected,
  } = useContext(ApiContext).api;
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const updateQuery = async (number = 1) => {
    await searchRequest(number, {
      search: `${searchValue}`,
    });
  };

  const delayedQuery = useCallback(debounce(updateQuery, 1000), [searchValue]);

  useEffect(() => {
    if (searchValue) delayedQuery();
    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [searchValue, delayedQuery]);

  const handleNextClick = async (ev) => {
    ev.preventDefault();
    router.push(`/request`, `/request/${selected}/${page.next}`);
    await getRequest(page.next, selected.toLowerCase());
  };

  const handlePrevClick = async (ev) => {
    ev.preventDefault();
    router.push(`/request`, `/request/${selected}/${currentPage - 1}`);
    await getRequest(page.prev, selected.toLowerCase());
  };

  const handlepageClick = async (ev, item) => {
    ev.preventDefault();
    console.log(item);
    router.push(`/request`, `/request/${selected.toLowerCase()}/${item}`);
    await getRequest(item, selected.toLowerCase());
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleSelect = async (e) => {
    e.preventDefault();
    setSelected(e.target.value);
    await getRequest(1, e.target.value.toLowerCase());
    router.push("/request", `/request/${e.target.value.toLowerCase()}/1`);
  };

  return (
    <IndexLayout>
      <NavBar page={"Request"} />
      <div className="container-fluid position-relative pt-4 px-md-5">
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
                  value={selected}
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Declined">Declined</option>
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
            {isFetching ? (
              <div className="loading-container">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                {searchValue.length === 0 && (
                  <div className="row position-relative">
                    {requestData?.map((item, i) => (
                      <RequestCard
                        key={item.id}
                        setIsOpen={setIsOpen}
                        item={item}
                        detailData={detailData}
                        setDetailData={setDetailData}
                      />
                    ))}
                  </div>
                )}
                {searchValue.length > 0 &&
                  (isSearching ? (
                    <div className="loading-container">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {!isSearching > 0 ? (
                        <div className="row">
                          <div className="col-12">
                            <p>
                              Search Results for <strong>{searchValue}</strong>
                            </p>
                          </div>
                          {searchResult.map((item, i) => (
                            <RequestCard
                              key={item.id}
                              setIsOpen={setIsOpen}
                              item={item}
                              detailData={detailData}
                              setDetailData={setDetailData}
                            />
                          ))}
                        </div>
                      ) : (
                        <p>
                          Couldn't find anything for{" "}
                          <strong>{searchValue}</strong>
                        </p>
                      )}
                    </>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto" style={{ bottom: "0" }}>
        <div className="container ">
          <div className="pb-2">
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              handleNextClick={handleNextClick}
              handlePrevClick={handlePrevClick}
              handlepageClick={handlepageClick}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={detailData} />
    </IndexLayout>
  );
}
