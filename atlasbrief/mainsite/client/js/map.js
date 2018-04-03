import L from "leaflet";

import "../scss/main.scss";

let geojson;

const getGeojson = new Promise((resolve, reject) => {
  if (geojson === undefined) {
    const request = new XMLHttpRequest();
    request.open(`GET`, `static/mainsite/world.geo.json`);
    request.responseType = `json`;
    request.send();
    request.onload = () => {
      geojson = request.response;
      resolve(geojson);
    };
  } else {
    resolve(geojson);
  }
});
exports.getGeojson = getGeojson;

const hoverFeature = (layer, feature) => {
  // on mouseover, darken feature and show name (not done yet)
  layer.setStyle({
    fillOpacity: 1
  });
};

const makeGeoLayer = (data, viewCountry) => {
  const geoLayer = L.geoJSON(data, {
    style: feature => {
      let fillColor = `#5190da`;
      if (feature.properties.name === viewCountry) {
        fillColor = `#FFFFFF`;
      }

      return {
        fillColor,
        weight: 1.25,
        opacity: 1,
        color: `white`,
        dashArray: `3`,
        fillOpacity: 0.8
      };
    },
    onEachFeature: (feature, layer) => {
      layer.on({
        mouseover: e => hoverFeature(layer, feature),
        mouseout: e => geoLayer.resetStyle(layer),
        click: e =>
          document.dispatchEvent(
            new CustomEvent(`countryClicked`, {
              detail: { name: feature.properties.name }
            })
          )
      });
    }
  });
  return geoLayer;
};

const makeMap = (parentElement, viewCountry) => {
  const map = L.map(parentElement, {
    zoomSnap: 0.5,
    maxZoom: 7
    //    this would prevent the user from panning the map beyond certain
    //    boundaries
    //    maxBounds: [[-90, -180], [90, 180]]
  });

  getGeojson.then(data => makeGeoLayer(data, viewCountry).addTo(map));

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

  return map;
};

const zoomToCountry = (name, map) => {
  // go through array of countries in geojson returning one with correct name
  const countryFeature = geojson.features.find(
    element => element.properties.name === name
  );

  // collapse array of polygons in country to an array of points
  const allPoints = countryFeature.geometry.coordinates.reduce(
    (acc, x) => acc.concat(x[0]),
    []
  );

  // find most extreme points of country to be able to fit the whole country on
  // screen
  const startingAccumulator = {
    northernmost: -Infinity,
    southernmost: Infinity,
    easternmost: -Infinity,
    westernmost: Infinity
  };

  const extremes = allPoints.reduce((acc, point) => {
    const lat = point[0];
    const long = point[1];
    acc.northernmost = Math.max(lat, acc.northernmost);
    acc.southernmost = Math.min(lat, acc.southernmost);
    acc.easternmost = Math.max(long, acc.easternmost);
    acc.westernmost = Math.min(long, acc.westernmost);

    return acc;
  }, startingAccumulator);

  console.log(extremes);

  map.fitBounds([
    [extremes.southernmost, extremes.westernmost],
    [extremes.northernmost, extremes.easternmost]
  ]);
};

exports.renderMap = (parentElement, viewCountry) => {
  let map;
  // no country specified to zoom in on, so show whole world
  if (viewCountry === null) {
    map = makeMap(parentElement, null);
    map.setView([25, 0], 1.5);
  } else {
    map = makeMap(parentElement, viewCountry);
    map.setView([25, 0], 1.5);
    // zoomToCountry(viewCountry, map);
  }

  return map;
};
