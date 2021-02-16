import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../styles/Input.module.css";
import { AuthContext } from "../context/AuthContext";

function SignInform() {
  const [inputValue, setInputValues] = useState({
    username: "",
    password: "",
    error: {},
  });
  const [validated, setValidated] = useState(false);
  const { signIn } = useContext(AuthContext).authValue;
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    const data = {
      username: inputValue.username,
      password: inputValue.password,
    };
    signIn(data).then((i) => {
      if (i) {
        router.push("/");
      }
    });
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
    <motion.form
      initial="hidden"
      animate="visible"
      variants={content}
      onSubmit={(e) => handleSubmit(e)}
      className={validated ? `${styles.form} was-validated` : styles.form}
      noValidate
    >
      {/* <BackBtn handleBackNav={handleBackNav} /> */}
      <div className="mb-4">
        <h1 className="mb-4">Sign In</h1>
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
          placeholder="Enter username"
          value={inputValue.username}
          onChange={(e) => handleChange(e)}
          required
        />

        <div className="invalid-feedback">Username is invalid</div>

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
          required
          value={inputValue.password}
          onChange={(e) => handleChange(e)}
        />

        <div className="invalid-feedback">Password is invalid</div>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Keep me in
        </label>
      </div>

      <div className="mt-5">
        <button
          type="submit"
          className="btn py-2 btn-primary btn-md shadow-sm"
          style={{
            minWidth: "200px",
          }}
        >
          Sign In
        </button>
      </div>
    </motion.form>
  );
}

export default SignInform;
