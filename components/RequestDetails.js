import Styles from "../styles/Modal.module.css";
import StudentList from "./StudentList";

function RequestDetails({ data }) {
  return (
    <div
      className="border p-2 mb-4"
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
              <span className={Styles.ModalValue}>{data?.parent?.phone}</span>
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
  );
}

export default RequestDetails;
