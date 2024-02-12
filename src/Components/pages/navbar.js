import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg   navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link active dropdown-toggle"
                  to="/volunteer"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Volunteer
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/volunteerRegister">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/volunterLogin">
                      Login in
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link
                  to="/community"
                  className="nav-link active"
                  aria-current="page"
                >
                  Community
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-link active"
                  aria-current="page"
                >
                  About us
                </Link>
              </li>

              <li class="nav-item">
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
