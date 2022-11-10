import { useCallback, useEffect, useState } from 'react'

import useAuth from '~/utils/auth'
import useServiceWorker from '~/utils/service-worker'

const useCustom = () => {
  const { isLoggedIn } = useAuth()
  const { isUpdateAvailable, updateApp } = useServiceWorker()
  const [openDialog, setOpenDialog] = useState(isUpdateAvailable)

  useEffect(() => {
    setOpenDialog(isUpdateAvailable)
  }, [isUpdateAvailable])

  const handleUpdateApp = useCallback(() => {
    updateApp()
  }, [updateApp])

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false)
  }, [])

  return {
    data: {
      isLoggedIn,
      openDialog,
    },
    methods: {
      handleCloseDialog,
      handleUpdateApp,
    },
  }
}

export default useCustom
