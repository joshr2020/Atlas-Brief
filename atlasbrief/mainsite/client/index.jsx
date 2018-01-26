import React from "react";
import ReactDOM from "react-dom";

import makeMap from "./map";

class Map extends React.Component {
  componentDidMount() {
    makeMap(this.el);
  }

  componentWillUnmount() {
    console.log(`map unmounting`);
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

const MenuBar = () => <h1>Hi</h1>;

const MapPage = () => (
  <div>
    <MenuBar />
    <Map />
  </div>
);

ReactDOM.render(<MapPage />, document.getElementById("root"));
