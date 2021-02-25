import { useState, useEffect, useRef, useContext } from "react";
import Styles from "../../styles/Modal.module.css";
import Image from "next/image";
import { PublishContext } from "../../context/PublishContext";
import isEmpty from "lodash/isEmpty";

function InviteModal({ closeModal, setScrn, scrn }) {
  const [inputValue, setInputValue] = useState({ emailorphone: "" });
  const [error, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [validated, setValidated] = useState(false);
  const ref = useRef(null);
  const { sendPublisherRequest, show, isSending } = useContext(
    PublishContext
  ).contextValue;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    setValidated(false);
    const err = {};
    return () => {
      setValidated(false);
      setInputValue({ ...inputValue, emailorphone: "", name: "", notes: "" });
    };
  }, [show]);

  function validateEmailPhoneInput(field) {
    let err = "";
    if (field === "") {
      setErrors({
        ...error,
        emailorphone: "Field is required",
      });
    } else if (/\S+@\S+\.\S+/.test(field?.trim())) {
      setInputValue({ ...inputValue, dataType: "email" });
      setErrors({ ...error, emailorphone: err });
    } else if (/^[0]\d{10}$/.test(field?.trim())) {
      setInputValue({ ...inputValue, dataType: "phone" });
    } else {
      setErrors({
        ...error,
        emailorphone: "Please enter a valid email or phone number",
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    validateEmailPhoneInput(inputValue.emailorphone);
    // console.log(ref.current.checkValidity());
    if (isEmpty(error.emailorphone) && ref.current.checkValidity()) {
      let newData = {
        [inputValue.dataType]: inputValue.emailorphone,
        name: inputValue.name,
      };

      const res = await sendPublisherRequest(newData);
      if (res === "email invite sent" || "sms invite sent") {
        setSuccessMsg("Request was sent successfully");
      }
    }
  };

  const handleBackClick = () => {
    if (scrn === "InvitePublisher") {
      setScrn("PublishListScrn");
    } else {
      setScrn("InvitePublisher");
    }
  };

  return (
    <div>
      <div className="border-bottom">
        <div
          className={`${Styles.ModalHeader} d-flex align-items-center position-absolute justify-content-between`}
        >
          <div
            onClick={handleBackClick}
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            {scrn === "InvitePublisher" && (
              <Image src="/arr-left.svg" height={16} width={16} alt="Back" />
            )}

            <h6 style={{ fontWeight: "600" }} className="m-0 ml-1">
              Invite Publisher
            </h6>
          </div>
          <img src="x.svg" alt="close" onClick={closeModal} />
        </div>
      </div>
      {errorMsg && (
        <div className="alert alert-primary mt-5" role="alert">
          {errorMsg}
        </div>
      )}
      {successMsg && (
        <div className="mt-5">
          <h5>{successMsg}!</h5>
          <button
            className="btn btn-primary btn-md mt-4"
            onClick={() => {
              setSuccessMsg("");
              setValidated(false);
            }}
          >
            Done
          </button>
        </div>
      )}
      {!successMsg && (
        <form
          ref={ref}
          className={`mt-5 needs-validation ${validated && "was-validated"}`}
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Publisher's name</label>
            <input
              type="text"
              name="name"
              required
              className={`form-control`}
              id="publishername"
              placeholder="Enter pusbisher's name"
              onChange={(e) => handleChange(e)}
              value={inputValue?.name}
            />
            <div className="invalid-feedback">
              Please enter a Brand or Company name associated with publisher
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email or Phone</label>
            <input
              required
              pattern="^([0-9]{11})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$"
              name="emailorphone"
              className={`form-control invalid`}
              id="emailorphone"
              type={"email" && "phone"}
              value={inputValue?.emailorphone}
              placeholder="Enter email or phone of publisher"
              onChange={(e) => handleChange(e)}
            />
            <div className="invalid-feedback">{error?.emailorphone}</div>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Additional Notes</label>
            <textArea
              className="form-control"
              rows="3"
              id="exampleInputPassword1"
              name="notes"
              placeholder="Password"
              value={inputValue?.notes}
            />
          </div>

          {isSending ? (
            <button type="submit" disabled className="btn btn-primary">
              Sending...
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          )}
        </form>
      )}
    </div>
  );
}

export default InviteModal;
