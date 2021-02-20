import { useContext, useState } from "react";
import styles from "../styles/Input.module.css";
import { motion } from "framer-motion";
import BackBtn from "./backBtn/BackBtn";
import { SignUpContext } from "../context/SignUpContext";
import { validateForm } from "../utils/Validation";

function ContactDetails() {
  const { actions, value } = useContext(SignUpContext).contextValue;
  const [inputValue, setInputValues] = useState({
    phone: "",
    address: "",
    email: "",
    errors: {},
  });

  const [validated, setValidated] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(inputValue);
    setInputValues({ ...inputValue, errors: { ...errors } });
    setValidated(true);

    if (Object.keys(errors).length === 0) {
      actions.setContactInformation(false);
      actions.setSchInformation(true);
      actions.setData({
        ...value.data,
        email: inputValue.email,
        phone: inputValue.phone,
        address: inputValue.address,
      });
    }
  };

  const handleBackNav = () => {
    actions.setContactInformation(false);
    actions.setPopulatn(true);
  };

  return (
    value.contactInfo && (
      <motion.form
        initial="hidden"
        animate="visible"
        variants={content}
        className={validated ? `${styles.form} was-validated` : styles.form}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <BackBtn handleBackNav={handleBackNav} />
        <div className="mb-4">
          <h1 className="mb-4">3. Contact Info</h1>
          <p>Please enter your contact details, and all fields are required</p>
        </div>

        <div className="form-group ">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className={`form-control ${styles.Input}`}
            id="phone"
            pattern="^[0]\d{10}$"
            minLength="11"
            placeholder="Ex: 08000000000"
            required
            name="phone"
            value={inputValue.phone}
            onChange={(e) => handleChange(e)}
          />
          {inputValue.errors.phone && (
            <div className="invalid-feedback">{inputValue.errors.phone}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="johndoe@gmail.com"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            name="email"
            value={inputValue.email}
            onChange={(e) => handleChange(e)}
          />
          {inputValue.errors.email && (
            <div className="invalid-feedback">{inputValue.errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            placeholder="Enter school address"
            required
            name="address"
            value={inputValue.address}
            onChange={(e) => handleChange(e)}
          ></textarea>
          {inputValue.errors.address && (
            <div className="invalid-feedback">{inputValue.errors.address}</div>
          )}
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="btn btn-primary btn-md shadow-sm"
            style={{
              minWidth: "200px",
            }}
          >
            Next
          </button>
        </div>
      </motion.form>
    )
  );
}

export default ContactDetails;
// name: "Bellina College",
// username: "Bellina",
// education_level: "2",
// students_range: "3",
// address: "50 Afolabi Brown Akoka Lagos",
// licensed: "1",
// email: "people@bellina.com",
// phone: "08134932912",
// password: "bellina",
