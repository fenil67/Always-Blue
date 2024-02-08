import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-${props.theme}`}
        style={{ nav: "yellow" }}
      >
        <div className="container-fluid ">
          <Link
            className="navbar-brand h1 mb-0"
            style={{ fontFamily: "Rubik, sans-serif" }}
            to="/"
          >
            {/* <img src="../../public/favicon.svg/" alt="" width="30" height="24"/> */}
            {props.title}
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/text-utilities">
                  Text Utilities
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active "
                  to="/qr-code-generator"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  QR Code Generator
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/comments-remover"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Comments Remover
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/code-differencing-tool"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Code Difference Checker
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/abc-community"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  ABC-Community
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.handleTheme}
              />
              <label
                className="form-check-label text-light"
                htmlFor="flexSwitchCheckDefault"
              >
                Switch Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

// if no prop is passed then default will be displayed
Navbar.defaultProps = {
  title: "Add title here",
};
