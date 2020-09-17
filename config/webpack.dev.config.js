const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
const { PORT } = require('./const')
const { getIP, resolveApp } = require('./utils')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    publicPath: `//${getIP()}:${PORT}/`,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]_[hash:6].js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: resolveApp('public'),
    host: getIP(),
    port: PORT,
    hot: true,
    open: true,
    progress: true,
    // https: true,
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
    }
  }
})
