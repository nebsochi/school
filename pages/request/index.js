import IndexLayout from "../../Layouts";
import RequestCard from "../../components/RequestCard";
import { ApiContext } from "../../context/ApiContext";
import { useRouter } from "next/router";
import { useState, useContext, useEffect, useCallback } from "react";
import Modal from "../../components/Modal";
import debounce from "lodash/debounce";
import Pagination from "../../components/Pagination";

export default function Request() {
  const { getRequest, searchRequest, isSearching, isFetching } = useContext(
    ApiContext
  ).api;
  const router = useRouter();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState([1]);
  const [isOpen, setIsOpen] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setIsSelected] = useState("pending");

  const updateQuery = (number = 1) => {
    searchRequest(number, {
      search: `${searchValue}`,
    }).then((res) => {
      if (res.data) {
        setFilteredData([...res.data]);
      }
    });
  };

  const delayedQuery = useCallback(debounce(updateQuery, 1000), [searchValue]);

  useEffect(() => {
    delayedQuery();
    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [searchValue, delayedQuery]);

  useEffect(() => {
    if (
      router.pathname === "/request" ||
      router.pathname === "/request/page/1"
    ) {
      getRequest(1)
        .then((data) => {
          setData([...data.data]);
          const pageNumbers = [];
          setCurrentPage(1);
          for (let index = 0; index < data.total_results_count / 16; index++) {
            pageNumbers.push(index + 1);
            setPageCount([...pageNumbers]);
          }
        })
        .catch((err) => console.log(err));
    } else {
      getRequest(router?.query?.pageNumber)
        .then((data) => {
          setData([...data.data]);
          const pageNumbers = [];

          setCurrentPage(data?.next ? data.next - 1 : data.prev + 1);
          for (let index = 0; index < data.total_results_count / 16; index++) {
            pageNumbers.push(index + 1);
            setPageCount([...pageNumbers]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue(value);
  };

  const handleNextClick = (ev) => {
    ev.preventDefault();
    router.push(`/request`, `/request/page/${currentPage + 1}`);
    getRequest(currentPage + 1).then((res) => {
      setData([...res.data]);
      setCurrentPage(currentPage + 1);
    });
  };

  const handlePrevClick = (ev) => {
    ev.preventDefault();

    router.push(`/request`, `/request/page/${currentPage - 1}`);
    setCurrentPage(currentPage - 1);
    getRequest(currentPage - 1).then((res) => {
      setData([...res.data]);
      console.log(router.asPath);
      setCurrentPage(currentPage - 1);
    });
  };

  const handlepageClick = (ev, item) => {
    ev.preventDefault();
    router.push(`/request`, `/request/page/${item}`);
    getRequest(item).then((res) => {
      setData([...res.data]);

      setCurrentPage(item);
    });
  };

  const handleSelect = (ev) => {
    setIsSelected(ev.target.value);
    if (ev.target.value !== "pending") {
      getRequest(1, ev.target.value).then((data) => {
        setData([...data.data]);
        const pageNumbers = [];
        setCurrentPage(1);
        if (data.total_results_count > 1) {
          for (let index = 0; index < data.total_results_count / 16; index++) {
            pageNumbers.push(index + 1);
            setPageCount([...pageNumbers]);
          }
        } else {
          const pageNumbers = [1];
          setPageCount([...pageNumbers]);
        }
      });
    } else {
      router.push("/request");
    }
  };
  {
    /* <div className="loading-container">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */
  }
  return (
    <IndexLayout>
      <div className="container position-relative pt-4">
        <div className="row" style={{ marginBottom: "60px" }}>
          <div className="col-md-12">
            {/* <h6 className="content__header position-relative border-bottom pb-2">
              Request
            </h6> */}
            <div className="pt-2 mb-4 border-bottom d-flex align-items-bottom justify-content-between">
              {/* <h6 className="m-0 title title--sm">Request</h6> */}

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
                className="form-control"
                placeholder="search application"
                name="search"
                style={{ height: "45px", maxWidth: "200px" }}
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
                    {data.map((item, i) => (
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
                {searchValue.length >= 1 &&
                  (isSearching ? (
                    <div className="loading-container">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {filteredData.length > 0 ? (
                        <div className="row">
                          <div className="col-12">
                            <p>
                              Search Results for <strong>{searchValue}</strong>
                            </p>
                          </div>
                          {filteredData.map((item, i) => (
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

      <div
        className="container-fluid position-absolute mx-auto"
        style={{ bottom: "0" }}
      >
        <div className="container ">
          <div className="py-2">
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
