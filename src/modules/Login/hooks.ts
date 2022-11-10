import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { get } from 'lodash-es'

import useAuth from '~/utils/auth'
import { authClient } from '~/utils/graphql'
import AUTH_QUERY from '~/queries/auth'

const useCustom = () => {
  const { handleLogin } = useAuth()
  const [error, setError] = useState(false)
  const [loadUserLoginData, userLoginData] = useMutation(
    AUTH_QUERY,
    {
      notifyOnNetworkStatusChange: true,
      client: authClient,
    },
  )

  const handleSubmit = async (values) => {
    setError(false)
    loadUserLoginData({
      variables: {
        userID: values.username,
        password: values.password,
        refreshToken: '',
      },
    })
  }

  useEffect(() => {
    const token = get(userLoginData.data, 'userLogin.accessToken')
    const refreshToken = get(userLoginData.data, 'userLogin.refreshToken')
    const userData = get(userLoginData.data, 'userLogin.user')
    if (token) {
      handleLogin(token, refreshToken, userData)
    } else if (userLoginData.called && !token) {
      setError(true)
    }
  }, [handleLogin, userLoginData.called, userLoginData.data])

  return {
    error,
    handleSubmit,
  }
}

export default useCustom
