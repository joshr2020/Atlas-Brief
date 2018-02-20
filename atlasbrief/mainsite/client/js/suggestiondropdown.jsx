import React from "react";

import { getGeojson } from "./map.js";

import "../scss/main.scss";

const getMatchingNames = (inputName, data) => {
  const matching = [];

  if (data) {
    const allMatching = data.filter(country =>
      country.toLowerCase().includes(inputName.toLowerCase())
    );

    // set 5 as the max number of suggestions for autocompleting country names
    for (let i = 0; i < allMatching.length && i < 5; i++) {
      matching.push(allMatching[i]);
    }
  }

  return matching;
};

class SuggestionDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.matchingNames = [];

    getGeojson.then(data => {
      this.countries = data.features.map(feature => feature.properties.name);
    });
  }

  render() {
    const matchingNames = getMatchingNames(
      this.props.searchbarValue,
      this.countries
    );

    let display = `block`;

    if (matchingNames.length === 0) {
      display = `none`;
    }

    return (
      <div id="suggestion-dropdown" className="container" style={{ display }}>
        <div className="dropdown-content">
          {matchingNames.map((name, index) => (
            <div key={index} className="dropdown-item">
              {name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SuggestionDropdown;
