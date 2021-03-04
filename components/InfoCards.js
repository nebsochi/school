import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function InfoCards({ applications }) {
  const { usrInfo } = useContext(AuthContext).authValue;
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
            className="bg-white shadow-sm position-relative"
            style={{ overflow: "hidden", borderRadius: "7px" }}
          >
            <div className="d-flex align-items-center p-3 px-4">
              <div className="text-truncate">
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <h3 className="m-0 line-h-0" style={{ fontWeight: "400" }}>
                    {usrInfo?.applications?.pending}
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
            className="bg-white shadow-sm position-relative"
            style={{ overflow: "hidden", borderRadius: "7px" }}
          >
            <div className="d-flex align-items-center p-3 px-4">
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
            className="bg-white shadow-sm position-relative"
            style={{ overflow: "hidden", borderRadius: "7px" }}
          >
            <div className="d-flex align-items-center p-3 px-4">
              <div className="text-truncate">
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <h3 className="m-0 line-h-0" style={{ fontWeight: "400" }}>
                    {usrInfo?.applications?.approved}
                  </h3>
                </div>
                <small className="text-muted">Approved Applications</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-2">
          <div
            className="bg-white shadow-sm position-relative"
            style={{ overflow: "hidden", borderRadius: "7px" }}
          >
            <div className="d-flex align-items-center p-3 px-4">
              <div className="text-truncate">
                <div className="d-flex justify-content-between pt-1 align-items-end">
                  <h3 className="m-0 line-h-0" style={{ fontWeight: "400" }}>
                    {usrInfo?.applications?.declined}
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
