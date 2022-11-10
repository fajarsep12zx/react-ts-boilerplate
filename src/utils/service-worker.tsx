import React, {
  useContext, useEffect, useMemo, useState,
} from 'react'
import PropTypes from 'prop-types'
import * as runtime from 'offline-plugin/runtime'

const initialState = {
  isUpdateAvailable: false,
  updateApp: null,
}

export const ServiceWorkerContext = React.createContext(initialState)

export const ServiceWorkerProvider = ({ children }) => {
  const [isUpdateAvailable, setUpdateAvailable] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      runtime.install({
        onUpdateReady: () => {
          setUpdateAvailable(true)
          runtime.applyUpdate()
        },
      })
    }
  }, [])

  const value = useMemo(() => ({
    isUpdateAvailable,
    updateApp: () => {
      window.location.reload()
    },
  }), [isUpdateAvailable])

  return (
    <ServiceWorkerContext.Provider value={value}>
      {children}
    </ServiceWorkerContext.Provider>
  )
}

ServiceWorkerProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export const useServiceWorker = () => {
  const { isUpdateAvailable, updateApp } = useContext(ServiceWorkerContext)

  return {
    isUpdateAvailable,
    updateApp,
  }
}

export default useServiceWorker
