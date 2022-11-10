import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from '@apollo/client'
import { onError, ErrorResponse } from '@apollo/client/link/error'
import Cookies from 'js-cookie'
import { get } from 'lodash-es'

import { graphQLHost } from '~/config'
import AUTH_QUERY from '~/queries/auth'

const cache = new InMemoryCache()

export const authClient = new ApolloClient({
  link: new HttpLink({
    uri: `${graphQLHost}/login`,
  }),
  cache,
})

const fetchRefreshToken = async () => {
  try {
    const refreshToken = Cookies.get('refreshToken')
    const { data } = await authClient.query({
      query: AUTH_QUERY,
      variables: {
        user: '',
        password: '',
        refreshToken: refreshToken || '',
      },
    })

    const token = get(data, 'login.token')
    if (token) {
      const newRefreshToken = get(data, 'login.refreshToken')
      Cookies.set('token', token)
      Cookies.set('refreshToken', newRefreshToken)
    } else {
      Cookies.remove('token')
      Cookies.remove('refreshToken')
    }

    window.location.reload()
  } catch (error) {
    Cookies.remove('token')
    Cookies.remove('refreshToken')

    window.location.reload()
  }
}

const expiredTokenMiddleware = onError(({
  networkError, operation, forward,
}: ErrorResponse) => {
  if (networkError) {
    if ('statusCode' in networkError
    && networkError.statusCode === 401) {
      fetchRefreshToken()
    }
  }

  return forward(operation)
})

const authMiddleWare = new ApolloLink((operation, forward) => {
  operation.setContext(() => {
    const token = Cookies.get('token')

    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  return forward(operation)
})

export const graphqlDefaultOptions = {
  pollInterval: 1000 * 60 * 30, // 30 Minutes
  notifyOnNetworkStatusChange: true,
}

const queryHttpLink = new HttpLink({
  uri: `${graphQLHost}/query`,
})

export const client = new ApolloClient({
  link: from([expiredTokenMiddleware, authMiddleWare, queryHttpLink]),
  cache,
})

export default client
