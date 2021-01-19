import CheckList from "../components/CheckList";
import { useState, useContext } from "react";
import { SignUpContext } from "../context/SignUpContext";
import { motion } from "framer-motion";

function School() {
  const [checkValue, setCheckValue] = useState([
    { value: "Nursery School", checked: false, id: 0, name: "nusery" },
    { value: "Primary School", checked: false, id: 1, name: "primary" },
    { value: "Secondary School", checked: false, id: 2, name: "secondary" },
  ]);
  const [disabled, setDisabled] = useState(true);

  const { actions, value } = useContext(SignUpContext).contextValue;

  const handleClick = (item) => {
    let newValue = checkValue;
    newValue[item.id].checked = !newValue[item.id].checked;
    for (let index = 0; index < newValue.length; index++) {
      if (newValue[index].checked) {
        setDisabled(false);
        break;
      } else {
        setDisabled(true);
      }
    }
    setCheckValue([...newValue]);
    actions.setData({
      ...checkValue.data,
      nursery: checkValue[0].checked,
      primary: checkValue[1].checked,
      secondary: checkValue[2].checked,
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
        delay: 0.3,
        duration: 0.3,
      },
    },
  };

  const handleNextClick = () => {
    if (!disabled) {
      actions.setSchool(false);
      actions.setPopulatn(true);
    }
  };

  return (
    value.schoolType && (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={content}
        style={{ maxWidth: "500px" }}
      >
        <h1 className="mb-4">1. School category</h1>
        <p>Click to select your school categorization</p>
        {checkValue.map((item) => (
          <CheckList
            key={item.id}
            checkValue={item}
            onclick={(item) => handleClick(item)}
          />
        ))}
        <div className="mt-5">
          <button
            className="btn btn-primary btn-md shadow text-capitalize"
            style={{
              minWidth: "200px",
              borderRadius: "30px",
              background: "#0448AA",
            }}
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </motion.div>
    )
  );
}

export default School;
