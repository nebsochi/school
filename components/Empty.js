import Image from "next/image";

function Empty({ handleClick }) {
  return (
    <div style={{ width: " calc(100% - 260px)" }}>
      <div
        className="d-flex text-center justify-content-center align-items-center flex-column"
        style={{ minHeight: "60vh" }}
      >
        <div>
          <Image src="/Illustration.svg" alt="empty" height={200} width={200} />
        </div>

        <h6 style={{ fontWeight: "600" }} className="mt-3">
          You haven't added any books
        </h6>
        <span className="">
          Click the button below to add books from publishers
        </span>
        <button
          className="btn px-5 mt-4 btn-outline btn-primary btn-md"
          onClick={(e) => handleClick(e)}
        >
          Add Books
        </button>
      </div>
    </div>
  );
}

export default Empty;
