import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import RadioList from "../RadioList";
import shuffle from "lodash/shuffle";
import { motion } from "framer-motion";
import QuestionModal from "./QuestionModal";

function PreQuestion({ data }) {
  const [values, setValues] = useState(["Yes I do", "No I don't"]);
  const alternativeGuardian = ["Peter Johnson", "Durojaye Fisayo"];
  const [nameOptions, setNameOptions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const [loading, setloading] = useState(false);
  const [question, setQuestion] = useState(false);
  const { setPassedPreQuestion, declineRequest } = useContext(
    ModalContext
  ).contextValue;

  const setAnswer = (e, i) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  useEffect(() => {
    const newArr = [];
    data?.guardian_choices?.forEach((item) => {
      newArr.push(item.full_name);
    });
    const shuffledArr = shuffle(newArr);
    setNameOptions([...shuffledArr]);
    return () => {
      setQuestion(false);
      const emptyObj = {};
      setAnswers({ ...emptyObj });
    };
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.recognize === "Yes I do") {
      setQuestion(true);
    } else {
      setConfirmation(true);
    }
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

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (answers.guardian_name === data.parent.full_name) {
      setPassedPreQuestion(true);
    }
  };

  const handleClick = async () => {
    setloading(true);
    const res = await declineRequest(data.id);
    setloading(false);
    if (res === "request declined!") {
      setConfirmation(false);
    }
  };

  return (
    <div className="mt-2">
      <div className="text-center">
        <div
          className="border d-inline-flex border align-items-center rounded justify-content-center"
          style={{ height: "128px", width: "128px" }}
        >
          <div
            className="position-relative rounded d-inline-block"
            style={{ overflow: "hidden", height: "120px", width: "120px" }}
          >
            {data?.parent?.picture ? (
              <img
                src={data.parent.picture}
                height={120}
                width={120}
                alt="Guardian"
              />
            ) : (
              <Image
                src="/user.svg"
                height={"auto"}
                width={120}
                alt="Guardian"
              />
            )}
          </div>
        </div>
        <small style={{ fontWeight: "600" }} className="pt-2 d-block">
          Guardian
        </small>
      </div>
      <div className="mt-4 border-bottom d-inline-block mb-3">
        <span style={{ fontWeight: "600" }}>Student(s) </span>
      </div>
      <div className="d-flex flex-wrap rounded">
        {data?.children?.map((item, i) => (
          <div
            key={item.id}
            className={`border rounded p-1 d-flex justify-content-center align-items-center ${
              i !== data?.children.length ? "mr-3" : "mr-0"
            }`}
            style={{ height: "97px", width: "97px" }}
          >
            <div
              className="position-relative rounded shadow-sm"
              style={{ overflow: "hidden", height: "90px", width: "90px" }}
            >
              {item.picture ? (
                <img
                  src={item.picture}
                  height="100%"
                  width="100%"
                  alt="child"
                />
              ) : (
                <Image src="/user.svg" height={"auto"} width={90} alt="child" />
              )}
            </div>
          </div>
        ))}
      </div>
      {!question && (
        <motion.form
          className="border-top mt-4"
          onSubmit={(e) => handleSubmit(e)}
          initial="hidden"
          animate="visible"
          variants={content}
        >
          <h4 className="mt-4 question" style={{ fontSize: "1.5rem" }}>
            Do you know this guardian and student(s) ?
          </h4>
          <div className="d-flex flex-wrap">
            {values.map((value, i) => (
              <RadioList
                key={i}
                population={answers?.recognize}
                setPop={(e) => setAnswer(e, i)}
                value={value}
                name={"recognize"}
              />
            ))}
          </div>
          <button
            type="submit"
            className="btn px-5 mt-5 btn-outline btn-primary btn-primary--sh-none "
            style={{
              marginTop: ".9rem",
              marginBottom: "1rem",
            }}
          >
            Proceed
          </button>
        </motion.form>
      )}
      {question && (
        <motion.form
          className="pt-2"
          onSubmit={(e) => handleFinalSubmit(e)}
          initial="hidden"
          animate="visible"
          variants={content}
        >
          <h4
            className="mt-5 pb-2 question position-relative"
            style={{ fontSize: "1.5rem" }}
          >
            What is the name of this guardian
          </h4>
          <div className="d-flex flex-wrap">
            {nameOptions.map((value, i) => (
              <RadioList
                key={i}
                population={answers?.guardian_name}
                setPop={(e) => setAnswer(e, i)}
                value={value}
                name={"guardian_name"}
              />
            ))}
          </div>
          <button
            type="submit"
            className="btn px-5 mt-5 btn-outline btn-primary btn-primary--sh-none "
            style={{
              marginTop: ".9rem",
              marginBottom: "1rem",
            }}
          >
            Proceed
          </button>
        </motion.form>
      )}
      {confirmation && (
        <QuestionModal
          handleClick={handleClick}
          id={data.id}
          setConfirmation={setConfirmation}
          loading={loading}
        />
      )}
    </div>
  );
}

export default PreQuestion;
