import { useContext, useState } from "react";
import { SignUpContext } from "../context/SignUpContext";
import styles from "../styles/Input.module.css";
import BackBtn from "./backBtn/BackBtn";
import { validateSchInfo } from "../utils/Validation";

function SchInfo() {
  const { actions, value } = useContext(SignUpContext).contextValue;

  const [validated, setValidated] = useState(false);
  const [inputValue, setInputValues] = useState({
    fullname: "",
    schoolname: "",
    liscenced: "",
    errors: {},
  });

  const handleBackNav = () => {
    actions.setSchInformation(false);
    actions.setContactInformation(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };

  const labelStyle = () => {
    return {
      borderRadius: "16px",
      cursor: "pointer",
    };
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   actions.setSchInformation(false);
  //   actions.setSignUpScrn(true);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateSchInfo(inputValue);
    setInputValues({ ...inputValue, errors: { ...errors } });
    setValidated(true);

    if (Object.keys(errors).length === 0) {
      actions.setSchInformation(false);
      actions.setSignUpScrn(true);
      actions.setData({
        ...value.data,
        name: inputValue.schoolname,
        fullname: inputValue.fullname,
        licensed: `${inputValue.liscenced === "yes" ? 1 : 0}`,
      });
    }
  };

  return (
    value.schoolInfo && (
      <form
        noValidate
        onSubmit={(e) => handleSubmit(e)}
        className={validated ? `${styles.form} was-validated` : styles.form}
      >
        <BackBtn handleBackNav={handleBackNav} />
        <h1 className="mb-4">School Info</h1>
        <p>Please enter your school details, and all fields are required</p>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            className={`form-control ${styles.Input}`}
            id="fullname"
            placeholder="Enter full name"
            value={inputValue.fullname}
            onChange={(e) => handleChange(e)}
            pattern="^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$"
            required
          />
          {inputValue.errors.fullname && (
            <div className="invalid-feedback">{inputValue.errors.fullname}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="schoolname">School Name</label>
          <input
            type="text"
            name="schoolname"
            className={`form-control ${styles.Input}`}
            id="schoolname"
            placeholder="Enter school name"
            pattern="^[a-zA-Z0-9_ ]*$"
            value={inputValue.schoolname}
            onChange={(e) => handleChange(e)}
            required
          />
          {inputValue.errors.schoolname && (
            <div className="invalid-feedback">
              {inputValue.errors.schoolname}
            </div>
          )}
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">Are you liscensed?</label>
          <br />
          {["Yes", "No"].map((radioVal, i) => (
            <label
              htmlFor={radioVal}
              className="form-check border px-4 py-1 shadow-sm form-check-inline"
              style={labelStyle()}
              key={i}
            >
              <input
                className="form-check-input"
                type="radio"
                name="liscenced"
                id={radioVal}
                value={radioVal}
                checked={radioVal === inputValue.liscenced}
                required
                onChange={(e) => handleChange(e)}
              />
              <span className="form-check-label">{radioVal}</span>
            </label>
          ))}
        </div>
        <div className="mt-5">
          <button
            className="btn btn-primary btn-md shadow-sm"
            style={{
              minWidth: "200px",
              background: "#0448AA",
            }}
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    )
  );
}

export default SchInfo;
