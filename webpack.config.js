var webpack = require('webpack');
var path = require('path');

var config = {
  context: __dirname,
  entry: ['./index.jsx'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015'] }
      }
    ]
  }
};

module.exports = config;
