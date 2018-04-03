import React from "react";

import Brief from "./brief.jsx";
import Map from "./map-component.jsx";
import StatsAccordion from "./stats-accordion.jsx";

import "../scss/main.scss";

class InfoColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibleInfoType: "background" };
  }

  changeVisibleInfo(visibleInfoType) {
    this.setState({ visibleInfoType });
  }

  render() {
    let visibleInfo;
    switch (this.state.visibleInfoType) {
      case "background":
        visibleInfo = this.props.background;
        break;

      case "stats":
        visibleInfo = <StatsAccordion content={this.props.stats} />;
        break;

      default:
        visibleInfo = "ERROR!";
        break;
    }

    return (
      <div className="column is-two-fifths">
        <div className="buttons has-addons is-centered">
          <span
            className="button"
            onClick={() => this.changeVisibleInfo("background")}
          >
            Background
          </span>
          <span
            className="button"
            onClick={() => this.changeVisibleInfo("stats")}
          >
            Stats
          </span>
        </div>
        <section className="section">{visibleInfo}</section>
      </div>
    );
  }
}

const CountryPage = props => (
  <section className="section">
    <div className="container columns">
      <div className="column is-three-fifths">
        <h1 className="title">{props.countryInfo.name}</h1>
        <hr />

        {JSON.parse(props.countryInfo.briefs).map((brief, index) => (
          <Brief key={index} content={brief} />
        ))}

        <Map viewCountry={props.countryInfo.name} />
      </div>

      <InfoColumn
        background={props.countryInfo.background}
        stats={props.countryInfo.stats}
      />
    </div>
  </section>
);

export default CountryPage;
