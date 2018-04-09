import React from "react";

import NavBar from "./navbar.jsx";
import Map from "./map-component.jsx";

const MapPage = () => (
  <div>
    <NavBar />
    <Map viewCountry={null} />
  </div>
);

export default MapPage;
