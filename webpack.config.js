const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['whatwg-fetch', './client/src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'env'],
        },
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      SCHANI_APIGATEWAY: JSON.stringify('http://localhost:8107/api/'),
    }),
  ],
};
