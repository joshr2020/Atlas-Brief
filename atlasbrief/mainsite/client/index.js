import L from "leaflet";
import $ from "jquery";

const map = L.map("map", {
  zoomSnap: 0.25,
  minZoom: 0,
  maxZoom: 7
});

// make sure view shows world from Alaska to Australia
map.fitBounds([[68, -175], [-65, 180]]);
const geoData = $.getJSON("static/world.geo.json").done(data => {
  const geoLayer = new L.GeoJSON();
  geoLayer.addData(data);
  geoLayer.addTo(map);
  return data;
});
