const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = ({ config }) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
    {
      test: /\.(js|jsx|tsx|ts)$/,
      exclude: /(node_modules)\/(?!(@zebraxid\/frontend-kit))/,
      include: [
        path.resolve('.'),
        path.resolve('node_modules/@zebraxid/frontend-kit'),
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          plugins: [
            ["babel-plugin-root-import", {
              paths: [
                {
                  rootPathSuffix: "./public",
                  rootPathPrefix: "~/public/"
                },
                {
                  rootPathSuffix: "./src",
                  rootPathPrefix: "~/"
                },
                {
                  rootPathSuffix: "./node_modules/@zebraxid/frontend-kit/src",
                  rootPathPrefix: ":/"
                }
              ]
            }],
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import",
            [
              "babel-plugin-transform-imports",
              {
                "@material-ui/core": {
                  transform: "@material-ui/core/esm/${member}",
                  preventFullImport: true
                }
              }
            ]
          ]
        },
      },
    },
    {
      test: /\.(ts|tsx)$/,
      use: {
        loader: require.resolve('ts-loader'),
      }
    }
  ]

  config.resolve.extensions.push(".ts", ".tsx")
  config.plugins.push(new CopyWebpackPlugin([
    {
      from: 'public',
      to: 'public',
    }
  ]))

  return config
}
