const path = require("path");

module.exports = {
  entry: "./atlasbrief/mainsite/client/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "atlasbrief/mainsite/static/mainsite")
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
