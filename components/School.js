import CheckList from "../components/CheckList";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function School() {
  const [checkValue, setCheckValue] = useState([
    { value: "Nursery School", checked: false, id: 0 },
    { value: "Primary School", checked: false, id: 1 },
    { value: "Secondary School", checked: false, id: 2 },
  ]);
  const [disabled, setDisabled] = useState(true);

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
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={content}
      style={{ maxWidth: "500px" }}
    >
      <h1 className="mb-4">1. Choose School</h1>
      <p>
        Fermentum dignissim hac nulla cursus in. Placerat commodo volutpat
        iaculis id praesent. Dolor ac pretium eget ipsum egestas.
      </p>
      {checkValue.map((item) => (
        <CheckList
          key={item.id}
          checkValue={item}
          onclick={(item) => handleClick(item)}
        />
      ))}
      <div className="mt-5">
        <Link href={disabled ? "/" : "/population"}>
          <a
            className="btn btn-primary btn-md shadow"
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
    </motion.div>
  );
}

export default School;
