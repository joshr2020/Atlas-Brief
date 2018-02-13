import React from "react";

import Brief from "./brief.jsx";
import Map from "./map-component.jsx";

const CountryPage = props => (
  <div>
    <h1>{props.countryInfo.name}</h1>
    <p>
      {props.countryInfo.background}
      <a href="#">Read more</a>
    </p>

    <h2>Briefs</h2>
    {JSON.parse(props.countryInfo.briefs).map((brief, index) => (
      <Brief key={index} content={brief.fields} />
    ))}
    <h3>February 12, 2018</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat
    </p>
    <Map viewCountry={props.countryInfo.name} />
    <h2>Essential facts</h2>
  </div>
);

export default CountryPage;
