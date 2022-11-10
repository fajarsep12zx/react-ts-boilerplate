const merge = require('webpack-merge')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const prod = require('./webpack.config.prod')

module.exports = merge(prod, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
})
