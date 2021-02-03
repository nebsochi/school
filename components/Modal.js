import { useRef, useState, useEffect, useContext } from "react";
import Styles from "../styles/Modal.module.css";
import { useRouter } from "next/router";
import Question from "./Question/Question";
import BackBtn from "./backBtn/BackBtn";
import QuestionTwo from "./Question/QuestionTwo";
import QuestionThree from "./Question/QuestionThree";
import QuestionFour from "./Question/QuestionFour";
import { ModalContext } from "../context/ModalContext";
import Toast from "./Toast";
import StudentList from "./StudentList";

function Modal({ isOpen, setIsOpen, data }) {
  const router = useRouter();
  const ref = useRef(null);
  const [animateContent, setAnimateContent] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [answers, setAnswers] = useState({});
  const [answersIndex, setAnswersIndex] = useState({});
  const [questionSlide, setQuestionSlide] = useState(1);
  const [toastOpen, setToastOpen] = useState(true);
  const [toastMsg, setToastMsg] = useState("");
  const { submitQuestions, isSubmitting, isLoading } = useContext(
    ModalContext
  ).contextValue;

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

    router.push("/request");
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (Object.keys(answers).length === 4 && questionSlide === 4) {
      setDisabled(true);
      console.log(answersIndex);
      submitQuestions(answersIndex, data.id).then((response) => {
        const { message, data, code } = response;
        if (code === 200) {
          setToastOpen(true);
          setToastMsg("Successfully " + message);
          setQuestionSlide((questionSlide) => questionSlide + 1);
        } else if (response === "Network error") {
          setToastOpen(true);
          setToastMsg(response);
        } else {
          setToastOpen(true);
          setToastMsg(response.message);
        }
      });
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
        <Toast
          toastTitle={"Request"}
          toastMsg={toastMsg}
          toastOpen={toastOpen}
          setToastOpen={setToastOpen}
        />
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
          <div className="my-2 mx-1 pt-2 ">
            <StudentList StudentData={data?.children} />
          </div>
        </div>

        <div className={`mt-4 ${Styles.heightAnim}`}>
          <div className="pt-4">
            {data.questionnaire_filled && !isLoading ? (
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

                <>
                  {questionSlide !== 5 && (
                    <form
                      onSubmit={(e) => handleSubmit(e)}
                      className={`position-relative ${
                        questionSlide > 1 ? "pt-5" : null
                      }`}
                    >
                      {questionSlide > 1 && (
                        <BackBtn
                          handleBackNav={handleBackNav}
                          top={"0"}
                          left={"0"}
                        />
                      )}
                      {questionSlide === 1 && (
                        <Question
                          answers={answers}
                          setAnswers={setAnswers}
                          setAnswersIndex={setAnswersIndex}
                          setDisabled={setDisabled}
                        />
                      )}
                      {questionSlide === 2 && (
                        <QuestionTwo
                          answers={answers}
                          setAnswers={setAnswers}
                          setAnswersIndex={setAnswersIndex}
                          setDisabled={setDisabled}
                        />
                      )}
                      {questionSlide === 3 && (
                        <QuestionThree
                          answers={answers}
                          setAnswers={setAnswers}
                          setAnswersIndex={setAnswersIndex}
                          setDisabled={setDisabled}
                        />
                      )}
                      {questionSlide === 4 && (
                        <QuestionFour
                          answers={answers}
                          setAnswers={setAnswers}
                          setAnswersIndex={setAnswersIndex}
                          setDisabled={setDisabled}
                        />
                      )}

                      <br />
                      <button
                        className="btn  px-5 btn-outline btn-primary btn-primary--sh-none btn-lg "
                        disabled={isLoading ? true : false}
                        style={{
                          color: "rgb(255, 255, 255)",
                          background: "rgb(0, 98, 204)",
                          marginTop: ".9rem",
                          marginBottom: "1rem",
                          borderColor: "rgb(0, 98, 204)",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm mb-1 mr-1"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Submitting...
                          </>
                        ) : (
                          <>{questionSlide < 4 ? "Next" : "Submit"}</>
                        )}
                      </button>
                    </form>
                  )}

                  {questionSlide === 5 && (
                    <>
                      <h3 className="mb-3">Thank you for your response</h3>
                      <button
                        className="btn btn-primary px-5"
                        style={{
                          color: "rgb(255, 255, 255)",
                          background: "rgb(0, 98, 204)",
                          marginTop: ".9rem",
                          marginBottom: "1rem",
                          borderColor: "rgb(0, 98, 204)",
                        }}
                        onClick={() => {
                          setQuestionSlide(1);
                          setDisabled(false);
                        }}
                      >
                        Edit Response
                      </button>
                    </>
                  )}
                </>
              </div>
            ) : (
              <div className="text-left">
                <h6>This request is awaiting approval!</h6>
                <img alt="pending" width="30%" src="pend.svg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
