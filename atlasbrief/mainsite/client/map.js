import L from "leaflet";
import $ from "jquery";

import makeGeoLayer from "./geolayer";

export default function makeMap(mapElement) {
  const map = L.map(mapElement, {
    zoomSnap: 0.5,
    maxZoom: 7
  });

  // make sure view shows whole world
  map.setView([25, 0], 1.5);
  console.log(map);

  $.getJSON("static/mainsite/world.geo.json").done(data =>
    makeGeoLayer(data).addTo(map)
  );

  // set up label layer
  map.createPane(`labels`);
  L.tileLayer(
    `http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png`,
    {
      attribution: `©OpenStreetMap, ©CartoDB`,
      pane: `labels`,
      zIndex: 650
    }
  ).addTo(map);

  /*L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    id: "mapbox.light",
    accessToken:
      "pk.eyJ1Ijoic3Rld3kzMyIsImEiOiJjamNiN3ZkbTgwbnVrMnFtNjB0bHJ6bWdzIn0.aJrxPmXOJq0hX4BqJZJzVQ",
    attribution:
      "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='http://mapbox.com'>Mapbox</a>"
  }
).addTo(map);*/
}
