# Frequently Asked Questions

- [Frequently Asked Questions](#frequently-asked-questions)
  - [Where are Babel, Jest and ESLint configured?](#where-are-babel-jest-and-eslint-configured)
  - [Where are the files coming from when I run yarn dev?](#where-are-the-files-coming-from-when-i-run-yarn-dev)
  - [How do I fix Error: listen EADDRINUSE 127.0.0.1:3000?](#how-do-i-fix-error-listen-eaddrinuse-1270013000)
    - [OS X / Linux:](#os-x--linux)
    - [Windows](#windows)
  - [Issue with local caching when running in production mode (F5 / ctrl+F5 / cmd+r weird behavior)](#issue-with-local-caching-when-running-in-production-mode-f5--ctrlf5--cmdr-weird-behavior)
      - [Quick fix on your local browser:](#quick-fix-on-your-local-browser)
      - [Full in-depth explanation](#full-in-depth-explanation)

## Where are Babel, Jest and ESLint configured?

ESLint and Babel all have their own config files in the root of the project. For Jest the configuration file located on `scripts/jest.config.js`.

## Where are the files coming from when I run `yarn dev`?

In development Webpack compiles your application runs it in-memory. Only when
you run `yarn build` will it write to disk and preserve your bundled
application across computer restarts.

## How do I fix `Error: listen EADDRINUSE 127.0.0.1:3000`?

This simply means that there's another process already listening on port 3000.
The fix is to kill the process and rerun `npm start`.

### OS X / Linux:

1.  Find the process id (PID):

    ```Shell
    ps aux | grep node
    ```

    > This will return the PID as the value following your username:
    >
    > ```Shell
    > janedoe    29811  49.1  2.1  3394936 356956 s004  S+    4:45pm   2:40.07 node server
    > ```
    >
    > Note: If nothing is listed, you can try `lsof -i tcp:3000`

2.  Then run
    ```Shell
    kill -9 YOUR_PID
    ```
    > e.g. given the output from the example above, `YOUR_PID` is `29811`, hence
    > that would mean you would run `kill -9 29811`

### Windows

1.  Find the process id (PID):

    ```Shell
    netstat -a -o -n
    ```

    > This will return a list of running processes and the ports they're
    > listening on:
    >
    > ```
    > Proto     Local Address     Foreign Address   State       PID
    > TCP       0.0.0.0:25        0.0.0.0:0         Listening   4196
    > ...
    > TCP       0.0.0.0:3000      0.0.0.0:0         Listening   28344
    > ```

    ```

    ```

1.  Then run
    ```Shell
    taskkill /F /PID YOUR_PID
    ```
    > e.g. given the output from the example above, `YOUR_PID` is `28344`, hence
    > that would mean you would run `taskkill /F /PID 28344`

## Issue with local caching when running in production mode (F5 / ctrl+F5 / cmd+r weird behavior)

Your production site isn't working? You update the code and nothing changes? It drives you insane?

#### Quick fix on your local browser:

To fix it on your local browser, just do the following. (Suited when you're testing the production mode locally)

`Chrome dev tools > Application > Clear Storage > Clear site data` _(Chrome)_

#### Full in-depth explanation

Read more at https://github.com/NekR/offline-plugin/blob/master/docs/updates.md
