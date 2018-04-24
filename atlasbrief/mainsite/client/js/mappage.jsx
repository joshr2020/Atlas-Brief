import React from "react";

import NavBar from "./navbar.jsx";
import Map from "./map-component.jsx";

const MapPage = () => (
  <div>
    <NavBar />
    <Map viewCountry={null} id="big-map" />
  </div>
);

export default MapPage;
