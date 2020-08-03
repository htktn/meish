const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  // entry: {
  //   server: path.resolve(__dirname, 'src/server.js'),
  // },
  target: 'node',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", {"legacy": true}],
              "@babel/plugin-proposal-class-properties",
            ]
          }
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g)$/i,
        loader: 'url-loader',
        // options: {
        //   limit: 8192,
        // },
      },
    ],
  },
  plugins: [
    new Dotenv({path: './.env.local'}),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      excludeChunks: ['server']
    })
  ]
}
