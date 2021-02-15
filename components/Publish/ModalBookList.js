import StylesSheet from "../../styles/Publish.module.css";
import Styles from "../../styles/Modal.module.css";
import BookItem from "./BookItem";
import Image from "next/image";

function ModalBookList({
  closeModal,
  books,
  handleBookClick,
  setScrn = { setScrn },
}) {
  return (
    <>
      <div className="border-bottom">
        <div
          className={`${Styles.ModalHeader} d-flex position-absolute justify-content-between`}
        >
          <div
            className="d-flex align-items-center"
            onClick={() => setScrn("PublishListScrn")}
            style={{ cursor: "pointer" }}
          >
            <Image src="/arr-left.svg" height={16} width={16} alt="Back" />
            <h6 style={{ fontWeight: "600" }} className="m-0 ml-1">
              Publisher name
            </h6>
          </div>

          <img src="x.svg" alt="close" onClick={closeModal} />
        </div>
        <form className="d-flex">
          <input
            type="text"
            placeholder="Search Books"
            className="form-control shadow-sm"
          />
          <button
            className="btn ml-2 btn-primary btn-primary--sh-none"
            style={{
              background: "rgb(0, 98, 204)",
              borderColor: "rgb(0, 98, 204)",
            }}
          >
            Search
          </button>
        </form>
      </div>

      <div
        className="row mt-3"
        style={{
          height: "68vh",
          overflow: "auto",
          marginRight: "-2rem",
          marginLeft: "-2rem",
          padding: "0 2rem",
        }}
      >
        {books.map((book, i) => (
          <div
            key={i}
            className={` mb-3 col-6 col-md-4 ${StylesSheet.PublishItem}`}
          >
            <BookItem item={book} handleBookClick={handleBookClick} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ModalBookList;
