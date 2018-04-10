import React from "react";
import { Link } from "react-router-dom";

import { getGeojson } from "./map.js";

import "../scss/main.scss";

const getMatchingNames = inputName =>
  new Promise((resolve, reject) => {
    getGeojson.then(d => {
      if (!d) {
        reject(new Error(`No data found.`));
      }

      const data = d.features.map(feature => feature.properties.name);

      const allMatching = data.filter(country =>
        country.toLowerCase().includes(inputName.toLowerCase())
      );

      // Set 5 as the max number of suggestions for autocompleting country names.
      const matching = [];
      for (let i = 0; i < allMatching.length && i < 5; i++) {
        matching.push(allMatching[i]);
      }

      resolve(matching);
    });
  });
exports.getMatchingNames = getMatchingNames;

const SuggestionDropdown = props => {
  let display = `block`;

  if (!props.searchbarValue || props.matchingNames.length === 0) {
    display = `none`;
  }

  return (
    <div id="suggestion-dropdown" className="container" style={{ display }}>
      <div className="dropdown-content">
        {props.matchingNames.map((name, index) => (
          <Link to={`/country/${name}`} key={index}>
            <div className="dropdown-item">{name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
exports.SuggestionDropdown = SuggestionDropdown;
