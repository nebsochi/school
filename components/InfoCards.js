import React from "react";

function InfoCards() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <div className="shadow-sm bg-white border rounded p-3 position-relative">
            <span className="text-muted">Total Registrations</span>
            <div className="d-flex justify-content-between align-items-end">
              <span className="title title--large">433</span>

              <div>
                <img
                  src="caret-right.svg"
                  className="mb-3 mr-1"
                  // style={{ transform: "translateY(12px)" }}
                  alt="arrow"
                />
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

        <div className="col-md-4">
          <div className="shadow-sm bg-white border rounded p-3 position-relative">
            <span className="text-muted">Total Registrations</span>
            <div className="d-flex justify-content-between align-items-end">
              <span className="title title--large">433</span>

              <div>
                <img
                  src="caret-right.svg"
                  className="mb-3 mr-1"
                  // style={{ transform: "translateY(12px)" }}
                  alt="arrow"
                />
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

        <div className="col-md-4">
          <div className="shadow-sm bg-white border rounded p-3 position-relative">
            <span className="text-muted">Total Registrations</span>
            <div className="d-flex justify-content-between align-items-end">
              <span className="title title--large">433</span>

              <div>
                <img
                  src="caret-right.svg"
                  className="mb-3 mr-1"
                  // style={{ transform: "translateY(12px)" }}
                  alt="arrow"
                />
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
      </div>
    </div>
  );
}

export default InfoCards;
