var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const PROJECT = 'todo-list'
const ENTRY = path.join(__dirname, PROJECT, 'src')
const OUTPUT = path.join(__dirname, PROJECT, 'dist')

module.exports = {
	mode: 'development',
	entry: path.join(ENTRY, 'index.jsx'),
	devtool: 'source-map',
	output: {
		path: OUTPUT,
		filename: 'index.bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [ENTRY, 'node_modules']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(ENTRY, 'index.html'),
			path: OUTPUT,
			filename: 'index.bundle.html'
		}),
	],
	module: {
		rules: [{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
};