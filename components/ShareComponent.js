import Image from "next/image";

function ShareComponent() {
  return (
    <div className="col-md-6 position-relative">
      <div
        className="card border-0 shadow-sm"
        style={{ borderRadius: "7px", height: "100%" }}
      >
        <div className="card-body">
          <div className="">
            <div>
              <label htmlFor="basic-url d-block" style={{ fontWeight: "600" }}>
                Copy and share your payment link
              </label>
              <div className="input-group my-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon3">
                    https://
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>

            <button className="btn btn-md btn-primary btn-primary--sh-none">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareComponent;
