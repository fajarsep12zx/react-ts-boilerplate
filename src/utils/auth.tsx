import React, {
  useCallback, useContext, useState,
} from 'react'
import {
  useHistory,
} from 'react-router-dom'
import { useApolloClient } from '@apollo/client'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
import { get } from 'lodash-es'

import { LOCAL_STORAGE_KEY_USER } from '~/config/constants'
import LOGOUT_QUERY from '~/queries/logout'
import * as Storage from '~/utils/localStorage'
import { client } from '~/utils/graphql'

interface AuthContextProps {
  isLoggedIn: boolean
  userData: any
  setIsLoggedIn: (isLoggin: boolean) => void
  setUserData: (userData: any) => void
}

export const AuthContext = React.createContext<Partial<AuthContextProps>>({

})

export const AuthProvider = ({ children } : any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(Cookies.get('token')))
  const [userData, setUserData] = useState(Storage.load(LOCAL_STORAGE_KEY_USER))
  return (
    <AuthContext.Provider value={{
      isLoggedIn, setIsLoggedIn, userData, setUserData,
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

const useAuth = () => {
  const history = useHistory()
  const apolloClient = useApolloClient()
  const {
    isLoggedIn, setIsLoggedIn, userData, setUserData,
  } = useContext(AuthContext)

  const handleLogin = useCallback((token, refreshToken, loggedInData = {}) => {
    setIsLoggedIn(true)
    setUserData(loggedInData)
    Cookies.set('token', token)
    Cookies.set('refreshToken', refreshToken)
    Storage.set(LOCAL_STORAGE_KEY_USER, loggedInData)
    history.push('/home')
  }, [history, setIsLoggedIn, setUserData])

  const handleLogout = useCallback(async () => {
    const { data } = await apolloClient.query({
      query: LOGOUT_QUERY,
    })
    if (get(data, 'user.logout.success')) {
      setIsLoggedIn(false)
      Cookies.remove('token')
      Storage.remove(LOCAL_STORAGE_KEY_USER)

      await client.clearStore()

      history.push({
        pathname: '/',
      })
    }
  }, [apolloClient, history, setIsLoggedIn])

  return {
    handleLogin,
    handleLogout,
    isLoggedIn,
    userData,
    setIsLoggedIn,
    setUserData,
  }
}

export default useAuth
