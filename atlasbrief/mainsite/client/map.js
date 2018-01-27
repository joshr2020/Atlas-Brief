import L from "leaflet";
import $ from "jquery";

const hoverFeature = (e, feature) => {
  // on mouseover, darken feature and show name (not done yet)
  const layer = e.target;

  layer.setStyle({
    fillOpacity: 1
  });
};

const makeGeoLayer = data => {
  const geoLayer = L.geoJSON(data, {
    style: feature => ({
      fillColor: `#FD8D3C`,
      weight: 1.25,
      opacity: 1,
      color: `white`,
      dashArray: `3`,
      fillOpacity: 0.7
    }),
    onEachFeature: (feature, layer) =>
      layer.on({
        mouseover: e => hoverFeature(e, feature),
        mouseout: e => geoLayer.resetStyle(e.target),
        click: e =>
          document.dispatchEvent(
            new CustomEvent(`countryClicked`, {
              name: feature.properties.name
            })
          )
      })
  });
  return geoLayer;
};

const makeMap = () => {
  const map = L.map(`map`, {
    zoomSnap: 0.5,
    maxZoom: 7
    //    maxBounds: [[-90, -180], [90, 180]]
  });

  // make sure view shows whole world
  map.setView([25, 0], 1.5);

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
};

export default makeMap;
