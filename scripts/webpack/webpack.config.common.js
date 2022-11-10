const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const dotenv = require('dotenv')
const DotenvWebpack = require('dotenv-webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const path = require('path')

dotenv.config()

const gitRevisionPlugin = new GitRevisionPlugin()

/* eslint-disable-next-line no-console */
console.log(`Running on ${process.env.NODE_ENV} environment`)

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  entry: [
    require.resolve('@babel/polyfill'),
    path.join(process.cwd(), 'src/index.tsx'),
  ],
  plugins: [
    gitRevisionPlugin,
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'development',
      VERSION: gitRevisionPlugin.version(),
    }),
    new DotenvWebpack(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'public',
        to: 'public',
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /(node_modules)\/(?!(@zebraxid\/frontend-kit))/,
        include: [
          path.resolve('src'),
          path.resolve('node_modules/@zebraxid/frontend-kit'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          'ts-loader',
        ],
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /(node_modules)\/(?!(@zebraxid\/frontend-kit))/,
        include: [
          path.resolve('src'),
          path.resolve('node_modules/@zebraxid/frontend-kit'),
        ],
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    modules: [
      'node_modules',
      path.resolve(process.cwd(), 'src'),
    ],
  },
}
