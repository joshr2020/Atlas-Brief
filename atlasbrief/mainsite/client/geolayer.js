import L from "leaflet";

function hoverFeature(e, feature) {
  // on mouseover, darken feature and show name (not done yet)
  const layer = e.target;

  layer.setStyle({
    fillOpacity: 1
  });
}

export default function makeGeoLayer(data) {
  const geoLayer = L.geoJSON(data, {
    style: feature => ({
      fillColor: `#FD8D3C`,
      weight: 1.75,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7
    }),
    onEachFeature: (feature, layer) =>
      layer.on({
        mouseover: e => hoverFeature(e, feature),
        mouseout: e => geoLayer.resetStyle(e.target),
        click: e => console.log(feature.properties.name)
      })
  });
  return geoLayer;
}
