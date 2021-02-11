import Image from "next/image";

function Empty(props) {
  return (
    <div className="col-12">
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
          className="btn px-5 mt-4 btn-outline btn-primary btn-primary--sh-none btn-md"
          style={{
            background: "rgb(0, 98, 204)",
            borderColor: "rgb(0, 98, 204)",
          }}
        >
          Add Books
        </button>
      </div>
    </div>
  );
}

export default Empty;
