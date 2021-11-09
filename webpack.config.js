const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./plugin/popup.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "popup.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['plugin/'])
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
};
