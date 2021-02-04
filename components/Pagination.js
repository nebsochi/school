import React from "react";

function Pagination({
  pageCount,
  currentPage,
  handlepageClick,
  handleNextClick,
  handlePrevClick,
}) {
  return (
    <div className="d-flex justify-content-end">
      <nav aria-label="Page navigation mt-3">
        <ul className="pagination">
          <li
            className={`page-item ${
              currentPage === pageCount[0] ? "disabled" : null
            }`}
          >
            <a
              className="page-link"
              onClick={(e) => handlePrevClick(e)}
              href="#"
            >
              Previous
            </a>
          </li>
          {pageCount.map((item) => (
            <li
              className={`page-item ${currentPage === item ? "active" : null}`}
              key={item}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => handlepageClick(e, item)}
              >
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
            <a
              className="page-link"
              onClick={(e) => handleNextClick(e)}
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
