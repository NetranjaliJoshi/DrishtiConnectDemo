import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span
              style={{
                color: "white",
                fontWeight: 700,

                letterSpacing: "2px",
                padding: "0.5rem 0",
              }}
            >
              DrishtiVision
            </span>
            <span
              style={{
                fontWeight: 700,
                fontFamily: "cursive",
                letterSpacing: "2px",
                padding: "0.5rem 0",
                color: "#212529",
              }}
            >
              Connect
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  to="/volunteer"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Volunteer
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/volunteerRegister">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/volunterLogin">
                      Login in
                    </Link>
                  </li>
                </ul>
              </li> */}

              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Volunteer
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/volunteerRegister">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/volunterLogin">
                      Login
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li class="nav-item">
                <Link
                  to="/volunteerRegister"
                  className="nav-link active"
                  aria-current="page"
                >
                  Register
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/volunterLogin"
                  className="nav-link active"
                  aria-current="page"
                >
                  Login in
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  to="/community"
                  className="nav-link active"
                  aria-current="page"
                >
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-link active"
                  aria-current="page"
                >
                  About us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contactus"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
