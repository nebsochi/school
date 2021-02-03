import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

function NavBar() {
  const { logOut } = useContext(AuthContext).authValue;
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    logOut();
    router.push("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white bg-light shadow-sm p-0">
      <div className="container">
        <a className="navbar-brand" href="#">
          <strong>SchoolCredit</strong>
        </a>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ justifyContent: "flex-end" }}
        >
          <ul className="navbar-nav">
            <li
              className={`${
                router.pathname === "/" ? "nav-item active" : "nav-item"
              }`}
            >
              <Link href="/">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/request" ? "nav-item active" : "nav-item"
              }`}
            >
              <Link href="/request">
                <a className="nav-link">Request</a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/repayment"
                  ? "nav-item active"
                  : "nav-item"
              }`}
            >
              <Link href="/repayment">
                <a className="nav-link" href="#">
                  Repayment
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Status
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Invoices
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img alt="user" src="user.svg" height="35" />
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
