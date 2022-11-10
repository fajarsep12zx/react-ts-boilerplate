# Debugging

- [Debugging](#debugging)
  - [Debugging with Visual Studio Code](#debugging-with-visual-studio-code)

## Debugging with Visual Studio Code

You can super charge your React debugging workflow via VS Code and Chrome. Here are the steps:

1. Install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension in VS Code.
2. Add the `Launch Chrome` option to your `launch.json` config:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "sourceMapPathOverrides": {
        "webpack:///./src/*": "${webRoot}/*",
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

3. Start your dev server with `npm run start`.
4. Launch the VS Code Debugger with the `Launch Chrome` configuration.

You can then set breakpoints directly from inside VS Code, use stepping with the Chrome or VS Code buttons and more.

Read all about it in the [Debugger for Chrome page](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome).

**Note**: There's currently a [known problem](https://github.com/react-boilerplate/react-boilerplate/pull/1698) with source maps and VS Code. You can change your Webpack dev config to use `inline-source-map` instead of `eval-source-map` and the issue should be resolved.
