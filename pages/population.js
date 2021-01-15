import { useState, useEffect } from "react";
import RadioList from "../components/RadioList";
import ImgLayOut from "../Layouts/ImgLayOut";
import Link from "next/link";
import { motion } from "framer-motion";

function Population() {
  const [population, setPopulation] = useState("");
  const [values, setValues] = useState([
    "0-50",
    "51-100",
    "100-250",
    "250-500",
    "500+",
  ]);

  useEffect(() => {
    const values = ["0 - 50", "51 - 100", "100 - 250", "250 - 500", "500+"];
    setValues([...values]);
  }, []);

  const setPop = (e) => {
    setPopulation(e.target.value);
    console.log(population);
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
        duration: 1,
      },
    },
  };

  return (
    <ImgLayOut>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={content}
        style={{ maxWidth: "500px" }}
      >
        <h1 className="mb-4">2. Pupils Population</h1>
        <p>
          Fermentum dignissim hac nulla cursus in. Placerat commodo volutpat
          iaculis id praesent. Dolor ac pretium eget ipsum egestas.
        </p>
        <div className="d-flex flex-wrap">
          {values.map((value, i) => (
            <RadioList
              key={i}
              population={population}
              setPop={(e) => setPop(e)}
              value={value}
            />
          ))}
        </div>
        <div className="mt-5">
          <Link href="/contactDetails">
            <a
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
      </motion.div>
    </ImgLayOut>
  );
}

export default Population;
