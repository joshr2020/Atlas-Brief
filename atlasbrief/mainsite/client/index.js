import L from "leaflet";
import $ from "jquery";

const map = L.map("map", {
  zoomSnap: 0.25,
  minZoom: 0,
  maxZoom: 7
});

// make sure view shows world from Alaska to Australia
map.fitBounds([[68, -175], [-65, 180]]);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    id: "mapbox.light",
    accessToken:
      "pk.eyJ1Ijoic3Rld3kzMyIsImEiOiJjamNiN3ZkbTgwbnVrMnFtNjB0bHJ6bWdzIn0.aJrxPmXOJq0hX4BqJZJzVQ",
    attribution:
      "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='http://mapbox.com'>Mapbox</a>"
  }
).addTo(map);

const geoData = $.getJSON("static/mainsite/world.geo.json").done(data => {
  const geoLayer = new L.GeoJSON();
  geoLayer.addData(data);
  geoLayer.addTo(map);
  return data;
});
