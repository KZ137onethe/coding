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
