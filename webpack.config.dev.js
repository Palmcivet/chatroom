var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/layout/app.jsx'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'test'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/layout/app.html'),
      filename: 'index.html',
      path: path.join(__dirname, 'test')
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