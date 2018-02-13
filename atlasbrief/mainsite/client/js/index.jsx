import React from "react";
import ReactDOM from "react-dom";

import Map from "./map-component.jsx";
import CountryPage from "./countrypage.jsx";

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
