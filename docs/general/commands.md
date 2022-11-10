# Command Line Commands

## Development

```Shell
yarn dev
```

Starts the development server running on `http://localhost:3000`

### Host and Port

To change the host and/or port the app is accessible at, pass the `HOST` and/or `PORT` option as environment variables with `yarn cross-env`. E.g. to make the app visible at `my-local-hostname:5000`, run the following:
`yarn cross-env HOST=my-local-hostname PORT=5000 yarn dev`

## Building

```Shell
yarn build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `dist` folder.

Upload the contents of `dist` to your web server to
see your work live!

## Testing

See the [testing documentation](../testing/README.md) for detailed information
about our testing setup!

## Unit testing

```Shell
yarn test
```

Tests your application with the unit tests specified in the `tests/*.test.js` files
on `tests` folder.  
All the `test` commands allow an optional `-- [string]` argument to filter
the tests run by Jest. Useful if you need to run a specific test only.

```Shell
# Run only the example-hooks tests
yarn test -- ./tests/examples/hooks/example-hooks.test.js
```

### Watching

```Shell
yarn test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

### Coverage

```Shell
yarn test:coverage
```

Tests the application and also generate coverage report file that specified on `scripts/jest.config.js`.

### Dependency size test

```Shell
yarn analyze
```

This command will generate a `stats.json` file from your production build, which
you can upload to the [webpack analyzer](https://webpack.github.io/analyse/) or [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

## Linting

```Shell
yarn lint
```

Lints your code and tries to fix any errors it finds.

## Storybook

```Shell
yarn storybook
```

This command will run [Storybook](https://storybook.js.org/) to serve our component documentation. By default it will run on port `6006`.

### Build Static

```Shell
yarn build:storybook
```

This command will compile all the storybook document into static html page that ready to upload to the web server. By default this command will product the files on `dist/storybook` folder.

```Shell
yarn serve:storybook
```

This command will run `http-server`, a simple web server that will serve the static html files on `dist/storybook` directory that generated earlier by command `yarn build:storybook`

## Docker

```Shell
yarn docker:build-prod
```

This command will create production docker image for this project. The name of the docker image is `react-starter:latest`. By default the port that exposed to the docker host is `3000`

```Shell
yarn docker:build-storybook
```

This command will create storybook docker image, basically it will run `yarn build:storybook` and `yarn serve:storybook`. The name of the docker image is `react-starter-storybook:latest`. By default the port that exposed to the docker host is `3001`

```Shell
yarn docker:build-test
```

This command will create docker image for running unit test on coverage mode.

```Shell
yarn docker:run-test
```

This command will run the docker image that created earlier by using command `yarn docker:build-test`. It will run `yarn test:coverage` command, and automatically generate `coverage` folder.

```Shell
yarn build:clean
```

This command will delete all orphan docker images that used for multi-stage build.
