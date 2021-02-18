import { useState, useEffect, useContext } from "react";
import RadioList from "./RadioList";
import { motion } from "framer-motion";
import { SignUpContext } from "../context/SignUpContext";
import BackBtn from "../components/backBtn/BackBtn";

function Populations() {
  const [population, setPopulation] = useState("");
  const [values, setValues] = useState([
    "0-50",
    "51-100",
    "100-250",
    "250-500",
    "500+",
  ]);
  const { actions, value } = useContext(SignUpContext).contextValue;
  const [disabled, setDisabled] = useState(true);

  const setPop = (e) => {
    setPopulation(e.target.value);
    actions.setData((prev) => ({
      ...prev,
      students_range: 1 + values.findIndex((item) => item === e.target.value),
    }));
    setDisabled(false);
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
        duration: 0.3,
      },
    },
  };

  const handleClick = () => {
    if (disabled) {
      return;
    } else {
      actions.setPopulatn(false);
      actions.setContactInformation(true);
    }
  };

  const handleBackNav = () => {
    actions.setPopulatn(false);
    actions.setSchool(true);
  };

  return (
    value.schoolPopulation && (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={content}
        style={{ maxWidth: "80%" }}
      >
        <BackBtn handleBackNav={handleBackNav} />
        <h1 className="mb-4">2. Pupils Population</h1>
        <p>Click to select an average pupils population of your school</p>
        <div className="d-flex flex-wrap">
          {values.map((value, i) => (
            <RadioList
              key={i}
              population={population}
              setPop={(e) => setPop(e)}
              value={value}
              name={"population"}
            />
          ))}
        </div>

        <div className="mt-5">
          <button
            className="btn btn-primary btn-md shadow-sm"
            style={{
              minWidth: "200px",

              background: "#0448AA",
            }}
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      </motion.div>
    )
  );
}

export default Populations;
