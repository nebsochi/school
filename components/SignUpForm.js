import { useContext, useState, useRef } from "react";
import { SignUpContext } from "../context/SignUpContext";
import styles from "../styles/Input.module.css";
import BackBtn from "./backBtn/BackBtn";
import { motion } from "framer-motion";
import { validateSignup } from "../utils/Validation";
import { AuthContext } from "../context/AuthContext";

function SignUpForm() {
  const { actions, value } = useContext(SignUpContext).contextValue;
  const { signUpUser } = useContext(AuthContext).authValue;
  const [validated, setValidated] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const InputRef = useRef(null);
  const formRef = useRef(null);
  const [inputValue, setInputValues] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    errors: {},
  });

  const handleBackNav = () => {
    actions.setSignUpScrn(false);
    actions.setSchInformation(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateSignup(inputValue);
    setInputValues({ ...inputValue, errors: { ...errors } });
    setValidated(true);
    if (Object.keys(errors).length === 0) {
      actions.setData({
        ...value.data,
        username: inputValue.username,
        password: inputValue.password,
      });
      signUpUser(value.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };

  const handleKeyPress = (e) => {
    if (e.target.value === inputValue.password) {
      InputRef.current.setCustomValidity("");
      InputRef.current.classList.add("valid");
      InputRef.current.classList.remove("is-invalid");
    } else if (e.target.value !== inputValue.password) {
      InputRef.current.setCustomValidity("invalid");
      InputRef.current.classList.add("is-invalid");
      InputRef.current.classList.remove("valid");
    }
  };

  const content = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    value.signUp && (
      <motion.form
        initial="hidden"
        animate="visible"
        variants={content}
        onSubmit={(e) => handleSubmit(e)}
        className={validated ? `${styles.form} was-validated` : styles.form}
        noValidate
      >
        <BackBtn handleBackNav={handleBackNav} />
        <div className="mb-4">
          <h1 className="mb-4">Finally</h1>
          <p>
            Please enter the following details, to create your login for this
            application
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={`form-control ${styles.Input}`}
            name="username"
            id="username"
            pattern="^[a-zA-Z0-9_]*$"
            placeholder="Ex: johndoe_2020"
            value={inputValue.username}
            onChange={(e) => handleChange(e)}
            required
          />
          {inputValue.errors.username && (
            <div className="invalid-feedback">{inputValue.errors.username}</div>
          )}
          {/* <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Enter password"
            minLength="6"
            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$"
            required
            value={inputValue.password}
            onChange={(e) => handleChange(e)}
          />
          {inputValue.errors.password && (
            <div className="invalid-feedback">{inputValue.errors.password}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            className={invalid ? "is-invalid form-control" : "form-control"}
            id="confirmpassword"
            ref={InputRef}
            placeholder="Re-enter password"
            value={inputValue.confirmpassword}
            name="confirmpassword"
            minLength="6"
            required
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyUp={(e) => handleKeyPress(e)}
          />
          {inputValue.errors.confirmpassword && (
            <div className="invalid-feedback">
              {inputValue.errors.confirmpassword}
            </div>
          )}
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="btn py-1 btn-primary btn-md shadow-sm"
            style={{
              minWidth: "200px",
              borderRadius: "30px",
              background: "#0448AA",
            }}
          >
            Next
          </button>
        </div>
      </motion.form>
    )
  );
}

export default SignUpForm;
// "name":"Kings College",
//     "username":"Kings",
//     "nursery":false,
//     "primary":true,
//     "secondary":true,
//     "students_range":"3",
//     "address":"50 Afolabi Brown Akoka Lagos",
//     "licensed":"1",
//     "email":"students@kings.com",
//     "phone":"08134932222"
