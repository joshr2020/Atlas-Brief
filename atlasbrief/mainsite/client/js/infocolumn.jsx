import React from "react";

import StatsAccordion from "./stats-accordion.jsx";
import Map from "./map-component.jsx";

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
        <Map viewCountry={this.props.countryName} id="small-map" />

        <hr />
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

        <section style={{ padding: 0 }} className="section">
          {visibleInfo}
        </section>
      </div>
    );
  }
}

export default InfoColumn;
