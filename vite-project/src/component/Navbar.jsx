import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Navbar = ({ title, mode, toggleMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
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
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* Dark Mode Toggle Switch */}
          <div className={`form-check form-switch ${mode === "light" ? "text-dark" : "text-light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={toggleMode}
            />
            <label className="form-check-label ms-2" htmlFor="flexSwitchCheckDefault">
              {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
