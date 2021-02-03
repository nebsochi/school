import React from "react";

function InfoCards() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-12">
          <h4>Overview</h4>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="shadow-sm bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "6px" }}
          >
            <div className="d-flex align-items-center p-3 px-4">
              <div className="mr-4">
                <img src="user-c.svg" width="40" alt="icon" />
              </div>
              <div>
                <span className="text-muted">Total Registrations</span>
                <div className="d-flex justify-content-between align-items-end">
                  <span className="title line-h-0">433</span>
                </div>
              </div>
            </div>
            <a href="#" className="bg-light py-2 px-4 d-block link">
              <span className="text-primary">View all</span>
            </a>
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
            className="shadow-sm bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "6px" }}
          >
            <div className="d-flex align-items-center p-3">
              <div className="mr-4">
                <img src="wall-clock.svg" width="40" alt="icon" />
              </div>
              <div>
                <span className="text-muted">Pending Request</span>
                <div className="d-flex justify-content-between align-items-end">
                  <span className="title line-h-0">433</span>
                </div>
              </div>
            </div>
            <a href="#" className="bg-light py-2 px-3 d-block link">
              <span className="text-primary">View all</span>
            </a>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="shadow-sm bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "6px" }}
          >
            <div className="d-flex align-items-center p-3">
              <div className="mr-3">
                <img src="registered.svg" width="40" alt="icon" />
              </div>
              <div>
                <span className="text-muted">Approved Request</span>
                <div className="d-flex justify-content-between align-items-end">
                  <span className="title line-h-0">433</span>
                </div>
              </div>
            </div>
            <a href="#" className="bg-light py-2 px-3 d-block link">
              <span className="text-primary">View all</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
