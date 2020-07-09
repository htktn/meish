const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    watchContentBase: true,
    disableHostCheck: true
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    new Dotenv({path: './.env.local'}),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
