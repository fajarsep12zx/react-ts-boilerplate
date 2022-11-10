# React Starter

ZebraX React Starter Project using React, GraphQL, Apollo Client

## Prerequisites

* [Yarn](https://yarnpkg.com/en/docs/install) v1.17.3
* [docker](https://docs.docker.com/install) (optional)

## Quick Start

### Locally

```
git clone https://github.com/zebraxid/react-starter.git
cd react-starter
yarn install
yarn dev
```

## Documentation

* [**Overview**](docs): A short overview of the included tools
* [**Commands**](docs/general/commands.md): Getting the most out of this project
* [**Troubleshooting**](docs/general/faq.md): Solutions to common problems faced by developers.

## Contributing

1. Take a task from [Jira Board](https://zebrax.atlassian.net/secure/RapidBoard.jspa?rapidView=48&projectKey=MTD)
2. Start a new feature in your local repository. We use [git flow](https://danielkummer.github.io/git-flow-cheatsheet/) approach for this.

    ```
git flow feature start <task_name>
    ```

3. Start coding
4. Push the feature

    ```
git flow feature publish <task_name>
    ```

5. Create a Pull Request in Bitbucket
6. Approve and merge the Pull Request from Bitbucket,

    or

    Finish the feature, if you decided to merge the PR in your local

    ```
git flow feature finish <task_name>
    ```

## Known issue

* Unable to build storybook due to babel config file. See [this issue](https://github.com/storybookjs/storybook/issues/6633) for more details

  Workaround:
  1. Remove babel.config.js in root project first.
  2. Add .babelrc file in root project, containing JSON format of babel.config.js inside .storybook/ folder.
  3. Revert everything when done.
