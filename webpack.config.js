const path = require("path");

module.exports = {
  entry: "./atlasbrief/mainsite/client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "atlasbrief/mainsite/static")
  }
};
