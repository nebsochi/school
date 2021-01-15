import Link from "next/link";

function ImgContainer() {
  return (
    <div
      className="position-relative d-flex align-items-center justify-content-center"
      style={{ height: "100%" }}
    >
      <div className="px-5">
        <h1 className="title title--big text-white text-center px-5">
          We simplify affordable financing for schools.
        </h1>
        <p className="lead text-white text-center mt-4">
          Already a member ? <Link href="">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default ImgContainer;
