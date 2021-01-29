import { useState, useEffect } from "react";
import RadioList from "../RadioList";
import { motion } from "framer-motion";

function Question({ setDisabled, answers, setAnswers, duration, setDuration }) {
  const [values, setValues] = useState([
    "A term",
    "More than 1-2 session",
    "3+ sessions",
    "Dont know parent",
  ]);

  const setDuratn = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
    setDisabled(false);
  };

  const content = {
    hidden: {
      opacity: 0,
      y: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: 0,
        duration: 0.9,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={content}>
      <h6 style={{ fontSize: "1.5rem" }}>
        How long has this parent and child been registered?
      </h6>

      <div>
        <div className="d-flex flex-wrap">
          {values.map((value, i) => (
            <RadioList
              key={i}
              population={answers?.duration}
              setPop={(e) => setDuratn(e)}
              value={value}
              name={"duration"}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Question;
