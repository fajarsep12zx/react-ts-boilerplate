import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { SnackbarProvider } from 'notistack'

import { ApolloProvider } from '@apollo/client'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

import IndexPage from '~/pages/index'
import configureStore from '~/store'
import GlobalStyles from '~/styles/global'
import theme from '~/styles/theme'
import errorLogger from '~/utils/error-logger'
import history from '~/utils/history'
import graphQLClient from '~/utils/graphql'
import {
  AuthProvider,
} from '~/utils/auth'
import { ServiceWorkerProvider } from '~/utils/service-worker'

// init error logger on production env
if (process.env.NODE_ENV === 'production') {
  errorLogger.init()
}

const initialState = {}
const store = configureStore(initialState, history)

const render = () => {
  ReactDOM.render(
    <ServiceWorkerProvider>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <ApolloProvider client={graphQLClient}>
              <AuthProvider>
                <ConnectedRouter history={history}>
                  <SnackbarProvider>
                    <IndexPage />
                  </SnackbarProvider>
                </ConnectedRouter>
              </AuthProvider>
            </ApolloProvider>
          </>
        </ThemeProvider>
      </Provider>
    </ServiceWorkerProvider>,
    document.getElementById('root'),
  )
}

render()

if (module.hot) {
  module.hot.accept()
}
