module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    ["babel-plugin-root-import", {
      "paths": [
        {
          "rootPathSuffix": "./public",
          "rootPathPrefix": "~/public/"
        },
        {
          "rootPathSuffix": "./src",
          "rootPathPrefix": "~/"
        },
        {
          "rootPathSuffix": "./node_modules/@zebraxid/frontend-kit/src",
          "rootPathPrefix": ":/"
        }
      ]
    }],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    [
      "babel-plugin-transform-imports",
      {
        "@material-ui/core": {
          "transform": "@material-ui/core/esm/${member}",
          "preventFullImport": true
        }
      }
    ]
  ]
};
