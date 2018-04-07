import React from "react";

import Brief from "./brief.jsx";
import InfoColumn from "./infocolumn.jsx";

import "../scss/main.scss";

class CountryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countryInfo: null };

    // get necessary information for country profile
    const request = new XMLHttpRequest();
    request.open(`GET`, `api/${props.match.params.name}`);
    request.responseType = `json`;
    request.send();

    request.onload = () => {
      if (request.response !== null) {
        this.setState({ countryInfo: request.response });
      }
    };
  }

  render() {
    if (this.state.countryInfo === null) {
      return <div />;
    }

    return (
      <section className="section">
        <div className="container columns">
          <div className="column is-three-fifths">
            <h1 className="title">{this.state.countryInfo.name}</h1>
            <hr />

            {JSON.parse(this.state.countryInfo.briefs).map((brief, index) => (
              <Brief key={index} content={brief} />
            ))}
          </div>

          <InfoColumn
            countryName={this.state.countryInfo.name}
            background={this.state.countryInfo.background}
            stats={this.state.countryInfo.stats}
          />
        </div>
      </section>
    );
  }
}

export default CountryPage;
