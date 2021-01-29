import { useState } from "react";
import RadioList from "../RadioList";
import { motion } from "framer-motion";

function QuestionThree({ setDisabled, answers, setAnswers }) {
  const [values, setValues] = useState(["Yes", "No"]);

  const setAttitudeFunc = (e) => {
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
      <h6 style={{ fontSize: "1.5rem" }}>Is parent troublesome?</h6>

      <div>
        <div className="d-flex flex-wrap">
          {values.map((value, i) => (
            <RadioList
              key={i}
              population={answers.attitude}
              setPop={(e) => setAttitudeFunc(e)}
              value={value}
              name={"attitude"}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default QuestionThree;
