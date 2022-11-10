# Documentation

## Table of Contents

* [**CLI Commands**](general/commands.md)
* [Introduction ](general/introduction.md)
* [Server Configurations](general/server-configs.md)
* [Deployment](general/deployment.md)
* [Debugging](general/debugging.md)
* [FAQ](general/faq.md)

## Overview

### Prerequisite

* Clone the repo
* Install [Node.js](https://nodejs.org/en/)
* Install [Docker & Docker Compose](https://docs.docker.com/v17.09/engine/installation/)

### Development

Copy/Rename `.env.example` as `.env`

* Docker

    ```Shell
    docker-compose -f scripts/docker/docker-compose.dev.yaml up -d
    ```
* Locally

    ```Shell
    yarn install
    yarn dev
    ```

The app will run at `localhost:3000`

### Building & Deploying

1.  Run `yarn build`, which will compile all the necessary files to the
    `dist` folder.

2.  Upload the contents of the `dist` folder to your web server's root folder.

### Structure

    ...
    ├── public
    ├── scripts
    ├── src
    │   └── components
    │   └── config
    │   └── pages
    │   └── queries
    │   └── utils
    │   └── index.js
    ├── stories
    ├── tests

The [`src/`](https://github.com/zebraxid/react-starter/src) directory contains your entire application code.

The rest of the folders and files only exist to make your life easier, and
should not need to be touched.

### CSS

We're using [Material-UI](https://material-ui.com/getting-started/installation/) as our React UI Framework with advanced styling using `@material-ui/styles`, a CSS-in-JS solution like [styled-components](https://www.styled-components.com/) and [emotion](https://emotion.sh/) that have many features (theme nesting, dynamic styles, self-support, etc.).

See the [CSS documentation](./css/README.md) for more information.

### JS

We bundle all clientside scripts and chunk them into several files using
code splitting where possible. We then automatically optimize the code when
building for production.

See the [JS documentation](./js/README.md) for more information about the
JavaScript side of things.
