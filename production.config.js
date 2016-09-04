/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    App: [path.join(__dirname, '/public/scripts/example.js')]
  },
  output: {
    path: path.join(__dirname,'/public/scripts'),
    filename: 'webpack.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['babel?presets[]=es2015&presets[]=react'] }
    ],
    postLoaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['es3ify-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules", "client"]
  }
};
