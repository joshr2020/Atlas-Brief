import React from "react";
import ReactDOM from "react-dom";

import MapPage from "./mappage.jsx";
import CountryPage from "./countrypage.jsx";

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
      if (request.response !== null) {
        const newState = { countryInfo: request.response };
        this.setState(newState);
      }
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
