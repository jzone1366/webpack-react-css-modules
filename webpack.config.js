'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  context: path.join(__dirname, "src"),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.tmpl.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              camelCase: true,
              sourceMap: true,
              importLoaders: 1,
              // minimize: true
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
};

module.exports = config;