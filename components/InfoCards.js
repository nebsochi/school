import React from "react";

function InfoCards({ applications }) {
  return (
    <div className="container-fluid px-md-5" style={{ paddingTop: "2rem" }}>
      <div className="row">
        <div className="col-12">
          <h6 className="mb-2">
            <strong>Overview</strong>
          </h6>
        </div>
        <div className="col-md-6 col-lg-3 mb-2">
          <div
            className="bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "7px" }}
          >
            <div className="d-flex align-items-center p-3 px-4">
              <div className="mr-3">
                <img src="friend.svg" width="50" alt="icon" />
              </div>
              <div className="text-truncate">
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <h3 className="m-0 line-h-0" style={{ fontWeight: "400" }}>
                    {applications}
                  </h3>
                </div>
                <small className="text-muted" style={{ whiteSpace: "nowrap" }}>
                  Total Applications
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-2">
          <div
            className="bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "7px" }}
          >
            <div className="d-flex align-items-center p-3">
              <div className="mr-3">
                <img src="pending.svg" width="50" alt="icon" />
              </div>
              <div className="text-truncate">
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <h3 className="m-0 line-h-0" style={{ fontWeight: "400" }}>
                    0
                  </h3>
                </div>
                <small className="text-muted" style={{ whiteSpace: "nowrap" }}>
                  Pending Applications
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-2">
          <div
            className="bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "7px" }}
          >
            <div className="d-flex align-items-center p-3">
              <div className="mr-3">
                <img src="letter.svg" width="50" alt="icon" />
              </div>
              <div className="text-truncate">
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <h3 className="m-0 line-h-0" style={{ fontWeight: "400" }}>
                    0
                  </h3>
                </div>
                <small className="text-muted">Approved Applications</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-2">
          <div
            className="bg-white border position-relative"
            style={{ overflow: "hidden", borderRadius: "7px" }}
          >
            <div className="d-flex align-items-center p-3">
              <div className="mr-3">
                <img src="rejected.svg" width="50" alt="icon" />
              </div>
              <div className="text-truncate">
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <h3 className="m-0 line-h-0" style={{ fontWeight: "400" }}>
                    0
                  </h3>
                </div>
                <small className="text-muted">Declined Applications</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
