const merge = require("webpack-merge")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const utils = require("./utils")
const config = require("../config")
const webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]/index.css",
      chunkFilename: "[name].css"
    }),
    new OptimizeCSSAssetsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
})