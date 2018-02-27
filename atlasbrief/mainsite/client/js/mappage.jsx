import React from "react";

import CountrySearchBar from "./countrysearchbar.jsx";
import Map from "./map-component.jsx";

import "../scss/main.scss";

const NavBar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand-custom">
        <img
          style={{ maxWidth: "10vw" }}
          src="static/mainsite/potential-logo1.png"
          alt="Atlas Brief Logo"
        />
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

const MapPage = () => (
  <div>
    <NavBar />
    <Map viewCountry={null} />
  </div>
);

export default MapPage;
