const path = require("path");

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    main: path.resolve(__dirname, "./index.js"),
  },
  output: {
    filename: "[name].[chunkhash:5].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  stats: {
    modules: false,
  },
};
