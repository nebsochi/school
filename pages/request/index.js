import IndexLayout from "../../Layouts";
import RequestCard from "../../components/RequestCard";
import { ApiContext } from "../../context/ApiContext";
import { useState, useContext, useEffect } from "react";
import Modal from "../../components/Modal";

export default function Request() {
  const { getRequest } = useContext(ApiContext).api;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState([1]);
  const [isOpen, setIsOpen] = useState(false);
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    getRequest(1)
      .then((data) => {
        setData([...data.data]);
        // setListCount(data.total_results_count);
        const pageNumbers = [];
        for (let index = 0; index < data.total_results_count / 12; index++) {
          pageNumbers.push(index + 1);
          setPageCount([...pageNumbers]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <IndexLayout>
      <div className="container position-relative pt-4">
        <div className="row">
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
                  id="exampleFormControlSelect1"
                  style={{ height: "45px" }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <input
                type="search"
                className="form-control"
                placeholder="search list"
                style={{ height: "45px", maxWidth: "200px" }}
              />
            </div>

            <div className="row">
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
          </div>
        </div>
      </div>
      <div
        className="container-fluid position-absolute mx-auto"
        style={{ bottom: "0" }}
      >
        <div className="container ">
          <div className="py-2">
            <div className="d-flex justify-content-end">
              <nav aria-label="Page navigation mt-3">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === pageCount[pageCount.length - 1]
                        ? "disabled"
                        : null
                    }`}
                  >
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  {pageCount.map((item) => (
                    <li
                      className={`page-item ${
                        currentPage === item ? "disabled" : null
                      }`}
                      key={item}
                    >
                      <a className="page-link" href="#">
                        {item}
                      </a>
                    </li>
                  ))}

                  <li
                    className={`page-item ${
                      currentPage === pageCount[pageCount.length - 1]
                        ? "disabled"
                        : null
                    }`}
                  >
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={detailData} />
    </IndexLayout>
  );
}
