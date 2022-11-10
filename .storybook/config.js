import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider } from '@material-ui/styles'
import theme from '~/styles/theme'

withOptions({
  theme: {
    brandTitle: 'ZebraX React Starter',
    brandUrl: 'https://github.com/zebraxid/react-starter',
  },
  showPanel: true,
});

const MaterialUIDecorator = storiesFn => (
  <ThemeProvider theme={theme}>
    {storiesFn()}
  </ThemeProvider>
)

addParameters({
  backgrounds: [
    { name: 'default', value: '#eceff1', default: true },
    { name: 'dark', value: '#37474f' },
  ],
});

addDecorator(withKnobs)
addDecorator(StoryRouter())
addDecorator(MaterialUIDecorator)

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
