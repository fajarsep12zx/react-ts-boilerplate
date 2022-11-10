# Introduction

This is a production-ready boilerplate, and as such optimized for browsers, not for beginners. It includes tools to help you manage performance, asynchrony, styling, everything you need to build a _real_ application. Before you get your hands dirty with the source code, we'd like you to go through a checklist that will help you determine whether or not you're ready to use this boilerplate. It's not because we're _holier-than-thou_, but rather because we genuinely want to save you the frustration.

## Tech Stack

Here's a curated list of packages that you should be at least familiar with before starting your awesome project. However, the best way to see a complete list of the dependencies is to check [package.json](https://github.com/zebraxid/react-starter/src/develop/package.json).

### Core

- [React](https://facebook.github.io/react/) (with [Hooks](https://reactjs.org/docs/hooks-intro.html))
- [React Router](https://github.com/ReactTraining/react-router)

### UI Framework
- [Material-UI](https://material-ui.com/)

### Unit Testing

- [Jest](http://facebook.github.io/jest/)
- [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
- [react-hooks-testing-library](https://react-hooks-testing-library.com/)

### Documentation

- [Storybook](https://storybook.js.org/)

### Linting

- [ESLint](http://eslint.org/)

## Project Structure

Let's start with understanding why we have chosen our particular structure.

Root

    ...
    ├── public
    ├── scripts
    ├── src
    ├── stories
    ├── tests


Src

    ...
    ├── src
    │   └── components
    │   └── config
    │   └── pages
    │   └── queries
    │   └── routes
    │   └── styles
    │   └── utils
    │   └── index.js
    ...

Components

    ...
    ├── components
    │   ├── Error
    │   │   ├── index.js
    │   │   ├── style.js
    │   ├── Loading
    │   │   ├── index.js
    ...

Pages

    ├── Marketing
    |   ├── Dashboard
    |   |   ├── index.js
    │   ├── index.js
    ├── MineValueChain
    |   ├── Port
    |   |   ├── Snapshot
    |   |   |   ├── index.js
    |   |   ├── Historical
    |   |   |   ├── index.js
    |   |   ├── index.js
    │   ├── hooks.js
    │   ├── index.js
    │   ├── style.js
    ...

In any case, here's the TL;DR:

- You will write your app in the `src` folder. This is the folder you will spend most, if not all, of your time in.
- Configuration, generators and templates are in the `scripts` folder.
- The `scripts` folder contains development and production server configuration files.

### `src/`

This is the main folder for our source code.

- `src/components/`: All reusable functional components that is used in multiple pages will be put here.

- `src/config/`: All string constants, configurations from environment variables will be put here.

- `src/pages/`: All available pages will be put here.

- `src/queries/`: All [graphQL queries](https://graphql.org/learn/queries/) will be put here.

- `src/routes/`: All React-Router routing files will be put here.

- `src/styles/`: All global styles and styles configuration (color palette, typography, spacing, & etc) will be put here.

- `src/utils/`: All helpers, connection to third party will be put here.

### `scripts/`

You can call this area the "engine" of your app. Your source code cannot be executed as-is in the web browser. It needs to pass through webpack to get converted into a version of Javascript that web browsers understand. While it's certainly helpful to understand what's happening here, for real world usage, you won't have to mess around with this folder much.

- `scripts/webpack`: You'll most probably use ECMAScript 6 or ECMAScript 7 to write the source code of your app. webpack takes care of making it compatible with a majority of browsers.

> ([ECMAScript](http://stackoverflow.com/a/33748400/5241520) is the standard for JavaScript. Most people are still using browsers which understand ECMAScript 5. So your code must be [transpiled](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them) into browser-understandable code. To apply the transpiler to your source code, you will use webpack. Feeling the jitters already? [Don't worry](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.d2uasw2n6). Take a tea-break and then read on.)

- `scripts/deployment`: This folder has the code to run the deployment scripts. Currently we're using `Jenkins` as our CI/CI deployment, so we saved the jenkins pipeline file on this folder.

- `scripts/docker`: This folder has the code to build the docker image for this project.

- `scripts/testing`: This folder contains `jest` helper to help use create unit test much easier.

- `scripts/mocks`: This folder contains mocks which Jest uses when testing your app, e.g. for images.

The other folders are mostly for the maintainers and/or the setup, and you should absolutely never need to touch them so we are going skip them for the sake of brevity.

### `public/`

This folder contains all static assets like images, svg, and etc that required by the code.

### `stories/`

This folder contains [Storybook](https://storybook.js.org/) code for React component documentation.

### `tests/`

This folder contains all testing related code.

## Basic Building Blocks

These days when musicians produce music, they record different parts of the song separately. So vocals, drums, guitar, bass may be played in separate sessions and when they're satisfied with their work, the sessions are combined into a beautiful song. In a similar fashion, let's understand the role of different technologies and in the end, we'll see how everything converges into a single application.

You can launch the app by running `yarn dev`. To fully understand its inner workings, you'll have to understand multiple technologies and how they interact. From this point, we're going into an overdrive of implementation details. We'll simplify the technical jargon as much as we can. Please bear with us here.

### How does the application boot up?

Like any other webpage your app starts with the [`public/index.html`](https://github.com/zebraxid/react-starter/src/develop/public/index.html) file. React will render your application into `div#root` .

But how do we include all of your react components into a single HTML file? That's where webpack comes into the picture. webpack will literally pack your application into small javascript files. These files will be injected into the `index.html` as `<script>` tags.

When your application is deployed on a server, browsers will load this HTML file. The Javascript files that webpack has included will be executed by the browser, thereby booting up your React application! It's magic really! No, not really, though it can certainly seem that way. Let's dissect this phenomenon to better know what's really going on.

### `src/index.js`:

When you run `yarn dev`, a server will be launched in your terminal for development. You can then open [http://localhost:3000](http://localhost:3000) to access the server and see your app.

Webpack requires an entry point to your application. Think of it as a door to your source code. In this boilerplate [`src/index.js`](https://github.com/zebraxid/react-starter/src/develop/src/index.js) is that entry point. Webpack will access the entire app from this file, transpile the application into ES5 and create small chunks of transpiled code. Only the required chunks will be loaded in the browser so that you don't have to worry about the size of your application.

`src/index.js` is one of the biggest files of the boilerplate. It contains all the global setup to make sure your app runs smoothly. Let's break its contents down:

- A `BrowserRouter` component is created, which remembers all the browsing history for your app. This is used by the `react-router` to know which pages your users visit. (Very useful for analytics, by the way.)
- `ReactDOM.render()` not only renders the [root react component](https://github.com/zebraxid/react-starter/src/develop/src/index.js) called `<ProtectedLayout />` and `<PublicLayout />`, of your application, but it renders it with `<ThemeProvider />`, `<ApolloProvider />` and `<BrowserRouter />`.
- Hot module replacement is set up via vanilla [Webpack HMR](https://webpack.js.org/guides/hot-module-replacement/) that makes all the reducers, injected sagas, components, containers, and i18n messages hot reloadable.
- Offline plugin support to make your app [offline-first](https://developers.google.com/web/fundamentals/getting-started/codelabs/offline/).

* `<ThemeProvider />` provides `theme` object that registered from `src/styles/theme.js`.
* `<ApolloProvider />` connects our app to our Apollo's GraphQL client .

### Linting

This boilerplate includes a complete static code analysis setup with [ESLint](http://eslint.org/).

We recommend that you install the relevant IDE extensions for each one of these tools. Once you do, every time you'll press save, all your code will be formatted and reviewed for quality automatically. (Read more at [editor.md](./editor.md).)

We've also set up a git hook to automatically analyze and fix linting errors before your code is committed. If you'd like to disable it or modify its behavior, take a look at the `lint-staged` section in `package.json`.
