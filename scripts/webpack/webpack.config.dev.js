const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const path = require('path')

const common = require('./webpack.config.common')

/* eslint-disable-next-line no-console */
console.log(`Building application bundle for (${(`http://${process.env.BASE_HOST}:${process.env.PORT}` || '/')})`)

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(process.cwd(), 'dist'),
    publicPath: (`http://${process.env.BASE_HOST}:${process.env.PORT}/` || '/'),
    port: process.env.PORT,
    host: process.env.BASE_HOST,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '/site': `http://${process.env.BASE_HOST}:${process.env.PORT}/index.html`,
    },
    stats: 'errors-warnings',
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: path.resolve(process.cwd(), 'public/logo/favicon.ico'),
      baseUrl: (`http://${process.env.BASE_HOST}:${process.env.PORT}/` || '/'),
    }),
  ],
  loader: {
    test: /\.js$/,
    loaders: ['react-hot-loader/webpack', 'babel'],
    include: path.join(process.cwd(), 'src'),
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  // Don't use hashes in dev mode for better performance
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
})
