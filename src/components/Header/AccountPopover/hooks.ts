import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const useCustom = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [popoverShown, setPopoverShown] = useState(false)
  const history = useHistory()

  const handleClose = () => {
    setPopoverShown(false)
  }

  const handlePopoverShown = (value) => (e) => {
    setPopoverShown(value)
    setAnchorEl(e.currentTarget)
  }

  const handleDirectMenu = (path) => {
    history.push(path)
    handleClose()
  }

  return {
    anchorEl,
    handleClose,
    handlePopoverShown,
    handleDirectMenu,
    popoverShown,
  }
}

export default useCustom
