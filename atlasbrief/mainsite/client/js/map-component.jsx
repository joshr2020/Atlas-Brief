import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

// import { renderMap } from "./map.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXRsYXNicmllZiIsImEiOiJjamc0NWwxcTM4NzloMzBwb3FtYjN5YzBoIn0.9sx6scC-AwUx_6KG_Jrkow";

class Map extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/atlasbrief/cjg45meqfj3v82sqprw4dhjq2",
      center: [0, 25],
      zoom: 1.25
    });
  }

  render() {
    return (
      <div>
        <div
          id="map"
          ref={el => {
            this.mapContainer = el;
          }}
        />
      </div>
    );
  }
}

export default Map;
