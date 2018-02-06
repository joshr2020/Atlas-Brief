import React from "react";
import ReactDOM from "react-dom";
import Map from "./map-component.jsx";

import "../scss/main.scss";

const MenuBar = () => (
  <div>
    <h1>Atlas Brief</h1>
    <input
      type="text"
      name="CountrySearchbar"
      defaultValue="Search for a country..."
    />
    <nav>
      <div className="links">
        <a href="#">About</a>
        <a href="#">Staff</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  </div>
);

const MapPage = () => (
  <div>
    <MenuBar />
    <Map viewCountry={null} />
  </div>
);

const CountryPage = props => {
  const country = props.countryInfo;
  return (
    <div>
      <h1>Country</h1>
      <p>
        {country.background}
        <a href="#">Read more</a>
      </p>

      <h2>Briefs</h2>
      <h3>February 12, 2018</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
      <Map viewCountry={country.name} />
      <h2>Essential facts</h2>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = { countryInfo: null };
  }

  componentDidMount() {
    this.countryClicked = this.countryClicked.bind(this);
    document.addEventListener(`countryClicked`, this.countryClicked);
  }

  componentWillUnmount() {
    document.removeEventListener(`countryClicked`, this.countryClicked);
  }

  countryClicked(e) {
    // get necessary information for country profile
    const request = new XMLHttpRequest();
    request.open(`GET`, `profile/${e.detail.name}`);
    request.responseType = `json`;
    request.send();

    request.onload = () => {
      const newState = { countryInfo: request.response };
      newState.countryInfo.name = e.detail.name;
      this.setState(newState);
    };
  }

  render() {
    if (this.state.countryInfo === null) {
      return <MapPage />;
    }

    // otherwise, show CountryPage
    return <CountryPage countryInfo={this.state.countryInfo} />;
  }
}

ReactDOM.render(<App />, document.getElementById(`root`));
