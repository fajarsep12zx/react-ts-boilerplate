const { HashedModuleIdsPlugin } = require('webpack')
const merge = require('webpack-merge')

const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const PWAConfig = require('../pwa.config')
// const SentryConfig = require('../sentry.config')

const common = require('./webpack.config.common')

module.exports = merge(common, {
  // For debugging purposes
  devtool: 'source-map',

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        sourceMap: true,
      }),
    ],
    nodeEnv: process.env.NODE_ENV || 'development',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1]
            return `npm.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: path.resolve(process.cwd(), 'public/logo/favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      appShell: '/',
      autoUpdate: true,
      updateStrategy: 'all',
      ServiceWorker: {
        events: true,
      },

      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],
      },

      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true,
    }),
    new WebpackPwaManifest(PWAConfig),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    // SentryConfig.generateSentryConfig(),
  ],

  performance: {
    assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
})
