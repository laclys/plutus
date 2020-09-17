const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.config');
const { publicUrl, projectName } = require('./const');
const { resolveApp } = require('./utils');

const distDir = 'dist'

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: resolveApp('dist'),
    publicPath: publicUrl[process.env.BUILD_EN],
    filename: 'js/[name].[contenthash:5].js',
    chunkFilename: 'js/[name].[contenthash:5].chunk.js'

  },
  plugins: [
  ],
});