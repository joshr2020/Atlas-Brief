import React from "react";
import { Link } from "react-router-dom";

import CountrySearchBar from "./countrysearchbar.jsx";

import "../scss/main.scss";

const NavBar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand-custom">
        <Link to="/">
          <img
            style={{ maxWidth: "10vw" }}
            src="/static/mainsite/logo.png"
            alt="Atlas Brief Logo"
          />
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <CountrySearchBar />
          </div>
        </div>
        <div className="navbar-end">
          <a href="#" className="navbar-item">
            About
          </a>
          <a href="#" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
