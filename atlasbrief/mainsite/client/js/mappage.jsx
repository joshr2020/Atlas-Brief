import React from "react";

import CountrySearchBar from "./countrysearchbar.jsx";
import Map from "./map-component.jsx";

import "../scss/main.scss";

const NavBar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <h1>Atlas Brief</h1>
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
