import { useState, useRef } from "react";

function ShareComponent({ link }) {
  const copyRef = useRef(null);
  const [btnText, setBtnText] = useState("Copy");

  const toggleButtonText = () => {
    setBtnText("Copied!");
    setTimeout(() => {
      setBtnText("Copy");
    }, 2000);
  };

  const handleClick = async (e) => {
    try {
      await navigator.clipboard.writeText(`https://${copyRef.current.value}`);
      toggleButtonText();
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="col-md-6 position-relative mb-3">
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
                  ref={copyRef}
                  readOnly
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  value={link}
                />
              </div>
            </div>

            <button
              onClick={(e) => handleClick(e)}
              className="btn btn-md btn-primary btn-primary--sh-none"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareComponent;
