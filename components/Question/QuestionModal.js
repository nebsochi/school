import Styles from "../../styles/Question.module.css";
import Image from "next/image";

function QuestionModal({ handleClick, loading, setConfirmation }) {
  const handleModalClick = (e) => {
    if (e?.target?.classList[0]?.startsWith("Question_ModalContainer")) {
      setConfirmation(false);
    }
  };

  return (
    <div
      className={`${Styles.ModalContainer} shadow`}
      onClick={(e) => handleModalClick(e)}
    >
      <div className={Styles.ModalInner}>
        <div className="d-flex align-items-center mb-2 justify-content-between py-3 border-bottom">
          <h6 className="m-0">
            <strong>Confirmation </strong>
          </h6>
          <Image
            src="/x.svg"
            alt="close"
            height={30}
            width={30}
            onClick={() => {
              setConfirmation(false);
            }}
            style={{
              cursor: "pointer",
            }}
          />
        </div>

        <p className="pb-3 pt-2">Please confirm your option ?</p>
        <div className="d-flex align-items-center justify-content-end">
          <button
            className="btn btn-outline-secondary mr-2 btn-sm"
            onClick={() => {
              setConfirmation(false);
            }}
          >
            Cancel
          </button>
          {!loading ? (
            <button className="btn btn-primary btn-sm" onClick={handleClick}>
              Confirm
            </button>
          ) : (
            <button className="btn btn-primary btn-sm" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionModal;
