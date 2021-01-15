import React from "react";
import ImgLayOut from "../Layouts/ImgLayOut";
import styles from "../styles/Input.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function contactDetails() {
  const content = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <ImgLayOut>
      <motion.form
        initial="hidden"
        animate="visible"
        variants={content}
        className={styles.form}
      >
        <div className="mb-4">
          <h1 className="mb-4">3. Contact Info</h1>
          <p>Please enter your contact details, and all fields are required</p>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Phone Number</label>
          <input
            type="tel"
            className={`form-control ${styles.Input}`}
            id="name"
            placeholder="Enter school contact"
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Address</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mt-5">
          <Link href="/">
            <a
              type="submit"
              className="btn btn-primary btn-md shadow-sm"
              style={{
                minWidth: "200px",
                borderRadius: "30px",
                background: "#0448AA",
              }}
            >
              Next
            </a>
          </Link>
        </div>
      </motion.form>
    </ImgLayOut>
  );
}

export default contactDetails;
