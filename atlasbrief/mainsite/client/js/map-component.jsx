import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

// import { renderMap } from "./map.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

class Map extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
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
