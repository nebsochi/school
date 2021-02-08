import React from "react";

function InfoCards({ applications }) {
  return (
    <div className="container mb-3" style={{ paddingTop: "2rem" }}>
      <div className="row">
        <div className="col-12">
          <h5>
            <strong>Overview</strong>
          </h5>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "7px" }}
          >
            <div className="d-flex align-items-center p-3 px-4">
              <div className="mr-4">
                <img src="user-c.svg" width="40" alt="icon" />
              </div>
              <div>
                <span className="">Total Applications</span>
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <span className="title line-h-0">{applications}</span>
                </div>
              </div>
            </div>
            <img
              src="arr-up.svg"
              alt="arrow"
              className="mr-3 mt-3"
              style={{ position: "absolute", right: 0, top: 0 }}
            />
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "6px" }}
          >
            <div className="d-flex align-items-center p-3">
              <div className="mr-4">
                <img src="wall-clock.svg" width="40" alt="icon" />
              </div>
              <div>
                <span className="">Pending Request</span>
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <span className="title line-h-0">433</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "6px" }}
          >
            <div className="d-flex align-items-center p-3">
              <div className="mr-3">
                <img src="registered.svg" width="40" alt="icon" />
              </div>
              <div>
                <span className="">Approved Request</span>
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <span className="title line-h-0">433</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
