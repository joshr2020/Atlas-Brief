import React from "react";

import { renderMap } from "./map.js";

class Map extends React.Component {
  componentDidMount() {
    this.map = renderMap(this.el, this.props.viewCountry);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div>
        <div
          id="map"
          ref={el => {
            this.el = el;
          }}
        />
      </div>
    );
  }
}

export default Map;
