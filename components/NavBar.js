import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";
import { useRouter } from "next/router";

function NavBar() {
  const { logOut } = useContext(AuthContext).authValue;
  const { setShow } = useContext(ModalContext).contextValue;
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

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow bg-primary">
      <div className="container-fluid">
        <h6 className="m-0 text-white">Dashboard</h6>

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
                    Logout
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
