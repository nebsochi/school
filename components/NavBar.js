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
    <nav className="navbar navbar-expand-lg navbar-light bg-white bg-light shadow-sm py-2">
      <div className="container">
        <a class="navbar-brand" href="#">
          SchoolCredit
        </a>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ justifyContent: "flex-end" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Request
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Repayment
              </a>
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
                Profile
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Notifications
                </a>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
                <div class="dropdown-divider"></div>
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
