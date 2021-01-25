import { useState } from "react";
import Styles from "../styles/Modal.module.css";
import { useRouter } from "next/router";

function Modal({ isOpen, setIsOpen, data }) {
  const [question, setquestion] = useState(true);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const str = e.target.classList[0];
    if (str?.startsWith("Modal_Modal__")) {
      setIsOpen(false);
      router.push("/request");
    }
  };

  return (
    <div
      className={isOpen ? `${Styles.Modal} ${Styles.isOpen}` : Styles.Modal}
      onClick={(e) => handleClick(e)}
    >
      <div className={Styles.ModalContent}>
        <a
          onClick={(e) => {
            e.preventDefault();
            setquestion(false);
          }}
          className="d-flex position-relative shadow-sm align-items-end border p-3 "
          style={{ background: "#FCFCFC", borderRadius: "8px" }}
        >
          <div className="pr-3 border-right">
            <div className={Styles.ModalAvatar}>
              <img
                src={data?.parent?.picture || "user.svg"}
                width="100%"
                alt="user"
              />
            </div>
          </div>
          <div className="m-3 d-flex flex-wrap">
            {data?.children?.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center mr-3"
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
                <div className="pl-2">
                  <span className=" d-block" style={{ fontSize: "0.9rem" }}>
                    {item.full_name}
                  </span>
                  <h6 className="m-0">{item.tuition_fees}</h6>
                </div>
              </div>
            ))}
          </div>
          <div className={Styles.ModalArr}>
            <img alt="arrow" className="ml-1" src="arr-right.svg" />
          </div>
        </a>
        {question && (
          <div className="mt-4">
            <div className="pt-4">
              <form>
                <h4 className="mb-4">
                  Answer the following questions to confirm this application
                </h4>
                <div className="progress mb-5">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    25%
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: "2rem" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.?
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter answer"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your answers with anyone else.
                    </small>
                  </div>
                  <button
                    className="btn px-5 btn-outline btn-primary btn-primary--sh-none btn-lg "
                    style={{
                      color: "rgb(255, 255, 255)",
                      background: "rgb(0, 98, 204)",
                      marginTop: ".9rem",
                      marginBottom: "1rem",
                      borderColor: "rgb(0, 98, 204)",
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {!question && (
          <div>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex py-3 justify-content-between border-bottom">
                <span className={Styles.ModalName}>Name:</span>
                <span className={Styles.ModalValue}>
                  {data?.parent?.full_name || "..."}
                </span>
              </div>
              <div className="d-flex py-3 justify-content-between border-bottom">
                <span className={Styles.ModalName}>Email:</span>
                <span className={Styles.ModalValue}>
                  {data?.parent?.email || "..."}
                </span>
              </div>
              <div className="d-flex py-3 justify-content-between border-bottom">
                <span className={Styles.ModalName}>Phone:</span>
                <span className={Styles.ModalValue}>{data?.parent?.phone}</span>
              </div>
              <div className="d-flex py-3 justify-content-between border-bottom">
                <span className={Styles.ModalName}>Address:</span>
                <span className={Styles.ModalValue}>
                  {data?.parent?.address}
                </span>
              </div>
              <div className="d-flex py-3 justify-content-between border-bottom">
                <span className={Styles.ModalName}>Amount applied:</span>
                <span className={Styles.ModalValue}>{data?.total_amount}</span>
              </div>
            </div>{" "}
            <div>
              <h5 className="mt-5 mb-3" style={{ fontWeight: "700" }}>
                Students
              </h5>

              <div className="d-flex justify-content-between">
                {data?.children?.map((item) => (
                  <div
                    className={`${Styles.ModalInfo} p-3 border`}
                    key={item.id}
                  >
                    <div className={`${Styles.ModalAvatar}`}>
                      <img
                        src={item.picture || "user.svg"}
                        width="100%"
                        alt="student"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="d-flex py-3 border-bottom">
                        <span
                          className={`${Styles.ModalName} ${Styles.ModalNameFixed}`}
                        >
                          Name:
                        </span>
                        <span className={Styles.ModalValue}>
                          {item.full_name}
                        </span>
                      </div>
                      <div className="d-flex py-3 border-bottom">
                        <span
                          className={`${Styles.ModalName} ${Styles.ModalNameFixed}`}
                        >
                          Class:
                        </span>
                        <span className={Styles.ModalValue}>{item.class}</span>
                      </div>
                      <div className="d-flex py-3 ">
                        <span
                          className={`${Styles.ModalName} ${Styles.ModalNameFixed}`}
                        >
                          Fees:
                        </span>
                        <span className={Styles.ModalValue}>
                          {item.tuition_fees}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
