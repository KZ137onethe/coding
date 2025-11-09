const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "./main.js"),
  },
  output: {
    filename: "[name].[chunkhash:5].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              api: "modern-compiler",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      output: "index.html",
      chunks: ["main"],
    }),
  ],
  devServer: {
    port: "auto",
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    host: "local-ip",
    open: true,
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  stats: {
    modules: false,
  },
};
