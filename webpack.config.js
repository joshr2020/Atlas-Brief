const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./atlasbrief/mainsite/client/js/index.jsx",
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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css", {
      allChunks: true
    })
  ]
};
