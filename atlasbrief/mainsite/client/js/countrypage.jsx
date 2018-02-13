import React from "react";

import Brief from "./brief.jsx";
import Map from "./map-component.jsx";

import "../scss/main.scss";

const CountryPage = props => (
  <section className="section">
    <div className="container columns">
      <div className="column is-three-quarters">
        <h1 className="title">{props.countryInfo.name}</h1>

        <h2>Briefs</h2>
        {JSON.parse(props.countryInfo.briefs).map((brief, index) => (
          <Brief key={index} content={brief.fields} />
        ))}

        <Map viewCountry={props.countryInfo.name} />
      </div>

      <div className="column is-one-quarter">
        <p>
          {props.countryInfo.background}
          <a href="#">Read more</a>
        </p>
      </div>
    </div>
  </section>
);

export default CountryPage;
