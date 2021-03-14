import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";
import { useRouter } from "next/router";

function NavBar({ page }) {
  const { logOut, usrInfo } = useContext(AuthContext).authValue;
  const { setShow } = useContext(ModalContext).contextValue;
  const [term, setTerm] = useState(1);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    logOut();
    router.push("/signin");
  };

  const handleNavigation = (e) => {
    setShow(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    let term =
      usrInfo?.term === 1 ? (
        <>
          1<sup>st</sup>
        </>
      ) : usrInfo.term === 2 ? (
        <>
          2<sup>nd</sup>
        </>
      ) : (
        <>
          3<sup>rd</sup>
        </>
      );
    setTerm(term);
  }, [usrInfo?.term]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow bg-primary">
      <div className="container-fluid">
        <h6
          className="m-0 text-white d-none d-md-block"
          style={{ fontWeight: "600" }}
        >
          {page}
        </h6>

        <a
          className="d-flex align-items-center d-md-none"
          style={{
            borderRadius: 4,
            textDecoration: "none",
            paddingTop: 12,
            paddingBottom: 12,
          }}
        >
          <div
            className="rounded-circle d-flex justify-content-center"
            style={{ height: 45, width: 45, overflow: "hidden" }}
          >
            <img
              src="https://res.cloudinary.com/dsj9s5nlw/image/upload/v1613933677/eqvxdnk68wvkxsrfifxx.png"
              alt="user"
            />
          </div>
          <div className="ml-3">
            <h6
              className="mb-0  text-truncate text-white"
              style={{ fontWeight: 600 }}
            >
              {usrInfo.name}
            </h6>
            <span className="badge badge-warning">{term} term</span>
          </div>
        </a>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={(e) => handleNavigation(e)}
        >
          <span className="navbar-toggler-icon text-white" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ justifyContent: "flex-end" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img alt="user" src="user-white.svg" height="35" />
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Notifications
                </a>
                <Link href="/settings">
                  <a className="dropdown-item">Settings</a>
                </Link>

                <div className="dropdown-divider"></div>
                <Link href="/signin">
                  <a
                    className="dropdown-item text-danger"
                    onClick={(e) => handleClick(e)}
                  >
                    Sign Out
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

// Home, Request, repayment status, Invoices, profile.
