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

const MenuBar = () => (
  <div>
    <h1>Atlas Brief</h1>
    <input
      type="text"
      name="CountrySearchbar"
      value="Search for a country..."
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
    <Map />
  </div>
);

const CountryPage = () => (
  /* modularize this later */
  <div>
    <h1>Country</h1>
    <p>
      Background information on the country...
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
    <img
      src="https://www.solidaridadnetwork.org/sites/solidaridadnetwork.org/files/RegioSAm-new.JPG"
      alt="Region of the world"
    />
    <h2>Essential facts</h2>
  </div>
);

ReactDOM.render(<MapPage />, document.getElementById("root"));
