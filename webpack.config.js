const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// register template preprocessor to use `pug`
require('./riot.config.js');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.pug' }),
  ],
  module: {
    rules: [
      {
        test: /\.pug/,
        exclude: /node_modules/,
        use: [{
          loader: 'pug-loader',
          options: {
            pretty: true,
            exports: false,
          },
        }],
      },
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [{
          loader: '@riotjs/webpack-loader',
          options: {
            hot: true,
            template: 'pug',
          },
        }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }],
      },
    ],
  },
  stats: {
    colors: true,
  },
  watch: true,
  devServer: {
    port: 3000,
    hot: true,
  },
  devtool: 'source-map',
};
