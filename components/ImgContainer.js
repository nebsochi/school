import Link from "next/link";
import { useRouter } from "next/router";

function ImgContainer() {
  const router = useRouter();

  return (
    <div
      className="position-relative d-flex align-items-center justify-content-center"
      style={{ height: "100%" }}
    >
      <div className="px-5">
        <h1
          style={{ fontWeight: "600", padding: `0 3rem ` }}
          className="title title--big text-white text-center"
        >
          We simplify affordable financing for schools.
        </h1>
        {router.pathname === "/signin" ? (
          <>
            <p className="lead text-white text-center mt-5">
              Not a member yet ?
            </p>

            <div className="text-center mt-2">
              <Link href="/signup">
                <a
                  className="btn btn-white bg-white btn-md py-2 shadow"
                  style={{
                    minWidth: "200px",
                    borderRadius: "30px",
                    fontWeight: "600",
                  }}
                >
                  Sign Up
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="lead text-white text-center mt-5">
              Already a member ?
            </p>

            <div className="text-center mt-2">
              <Link href="/signin">
                <a
                  className="btn btn-white bg-white btn-md py-2 shadow"
                  style={{
                    minWidth: "200px",
                    borderRadius: "30px",
                    fontWeight: "600",
                  }}
                >
                  Sign In
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ImgContainer;
