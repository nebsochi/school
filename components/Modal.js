import { useRef, useState, useEffect } from "react";
import Styles from "../styles/Modal.module.css";
import { useRouter } from "next/router";
import Question from "./Question/Question";
import BackBtn from "./backBtn/BackBtn";
import QuestionTwo from "./Question/QuestionTwo";
import QuestionThree from "./Question/QuestionThree";
import QuestionFour from "./Question/QuestionFour";

function Modal({ isOpen, setIsOpen, data }) {
  const router = useRouter();
  const ref = useRef(null);
  const [animateContent, setAnimateContent] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [answers, setAnswers] = useState({});
  const [questionSlide, setQuestionSlide] = useState(1);
  const [duration, setDuration] = useState("");

  const handleClick = (e) => {
    const str = e.target?.classList[0];
    if (str?.startsWith("Modal_Modal__")) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const closeModal = () => {
    ref.current.classList.remove(`${Styles.isOpen}`);
    setTimeout(() => {
      setIsOpen(false);
      setAnimateContent(true);
    }, 500);
    setAnimateContent(false);
    let emptyObject = {};
    setAnswers({ ...emptyObject });
    setQuestionSlide(1);
    setDisabled(true);
    setDuration("");
    router.push("/request");
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (Object.keys(answers).length === 4 && questionSlide === 4) {
      setDisabled(true);
    } else {
      if (!disabled) {
        setQuestionSlide((questionSlide) => questionSlide + 1);
        console.log(questionSlide);
        answers[Object.keys(answers)[questionSlide]]?.length > 0
          ? setDisabled(false)
          : setDisabled(true);
      }
    }
  };

  const handleBackNav = () => {
    setQuestionSlide((questionSlide) => questionSlide - 1);
    setDisabled(false);
  };

  return (
    <div
      className={isOpen ? `${Styles.Modal} ${Styles.isOpen} ` : Styles.Modal}
      onClick={(e) => handleClick(e)}
    >
      <div
        className={`${Styles.ModalContent} ${
          animateContent && Styles.ModalContentIsOpen
        } position-relative`}
        ref={ref}
      >
        <h5
          className={`${Styles.ModalHeader} d-flex position-absolute justify-content-between`}
        >
          <span>Request</span>
          <img src="x.svg" alt="close" onClick={closeModal} />
        </h5>

        <div
          className="border p-2"
          style={{ background: "#FCFCFC", borderRadius: "8px" }}
        >
          <div className="d-flex position-relative align-items-start border-bottom">
            <div className="pr-3 mt-3">
              <div className={Styles.ModalAvatar}>
                <img
                  src={data?.parent?.picture || "user.svg"}
                  width="100%"
                  alt="user"
                />
              </div>
            </div>

            <div className={Styles.ModalContentRight}>
              <div className="pl-3 border-left">
                <div className="d-flex align-items-end py-3 border-bottom">
                  <span className={Styles.ModalName}>Name:</span>
                  <span className={Styles.ModalValue}>
                    {data?.parent?.full_name || "..."}
                  </span>
                </div>
                <div className="d-flex py-3 align-items-end border-bottom">
                  <span className={Styles.ModalName}>Phone:</span>
                  <span className={Styles.ModalValue}>
                    {data?.parent?.phone}
                  </span>
                </div>
                <div className="d-flex py-3 align-items-end">
                  <span className={Styles.ModalName}>Amount applied:</span>
                  <span className={Styles.ModalValue}>{data?.loan_amount}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="m-3 pt-2 d-flex flex-wrap">
            {data?.children?.map((item) => (
              <div
                key={item.id}
                className="d-flex bg-white shado-sm border px-3 py-1 align-items-center mr-3"
                style={{ borderRadius: "7px" }}
              >
                <div
                  className={`${Styles.ModalAvatar} ${Styles.ModalAvatarSmall}`}
                >
                  <img
                    src={item.picture || "user.svg"}
                    width="100%"
                    alt="student"
                  />
                </div>
                <div className="pl-3">
                  <span className=" d-block" style={{ fontSize: "0.9rem" }}>
                    {item.full_name}
                  </span>
                  <h6 className="m-0">{item.tuition_fees}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-4 ${Styles.heightAnim}`}>
          <div className="pt-4">
            <div>
              <div className="progress mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${Object.keys(answers).length * 25}%` }}
                  aria-valuenow={Object.keys(answers).length}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {Object.keys(answers).length * 25}%
                </div>
              </div>

              <form
                onSubmit={(e) => handleSubmit(e)}
                className={`position-relative ${
                  questionSlide > 1 ? "pt-5" : null
                }`}
              >
                {questionSlide > 1 && (
                  <BackBtn handleBackNav={handleBackNav} top={"0"} left={"0"} />
                )}
                {questionSlide === 1 && (
                  <Question
                    answers={answers}
                    setAnswers={setAnswers}
                    setDisabled={setDisabled}
                  />
                )}
                {questionSlide === 2 && (
                  <QuestionTwo
                    answers={answers}
                    setAnswers={setAnswers}
                    setDisabled={setDisabled}
                  />
                )}
                {questionSlide === 3 && (
                  <QuestionThree
                    answers={answers}
                    setAnswers={setAnswers}
                    setDisabled={setDisabled}
                  />
                )}
                {questionSlide === 4 && (
                  <QuestionFour
                    answers={answers}
                    setAnswers={setAnswers}
                    setDisabled={setDisabled}
                  />
                )}
                <br />

                <button
                  className="btn  px-5 btn-outline btn-primary btn-primary--sh-none btn-lg "
                  style={{
                    color: "rgb(255, 255, 255)",
                    background: "rgb(0, 98, 204)",
                    marginTop: ".9rem",
                    marginBottom: "1rem",
                    borderColor: "rgb(0, 98, 204)",
                  }}
                >
                  {questionSlide < 4 ? "Next" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
