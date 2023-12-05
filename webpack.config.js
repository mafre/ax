const path = require ("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/app.ts",
	output: {
		path: path.resolve (__dirname, "dist"),
		filename: "app.js"
	},
	devtool: "source-map",
	resolve: {
		alias: {
			"openfl": path.resolve (__dirname, "node_modules/openfl/lib/openfl")
		},
		extensions: ['.tsx', '.ts', '.js']
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
			{
        		test: /\.less$/,
				use: [
					{
						loader: "style-loader", // creates style nodes from JS strings
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
					{
						loader: "less-loader", // compiles Less to CSS
					},
				],
			},
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				"public"
			]
		})
	]
};