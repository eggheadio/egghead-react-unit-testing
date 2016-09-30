'use strict';

var webpack = require('webpack');

module.exports = {

  // Entry point for the bundle, path and filename to main module
  entry: './test/ArtistSpec',

  output: {
    // Output directory as an absolute path
    path: './test',
    // Filename as relative path within output path
    filename: 'spec.js',
    // Output path from the view of the JS/HTML
    publicPath: '/test/'
  },

  module: {
    // Loader required for JSX
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:
      {
        presets:['react']
      }
    }]
  }

};