import { useState } from 'react'

function useCustom() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')

  function handleInputPassword(e) {
    setPassword(e.target.value)
  }

  function handleInputUsername(e) {
    setUsername(e.target.value)
  }

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return {
    handleInputPassword,
    handleInputUsername,
    handleShowPassword,
    password,
    showPassword,
    username,
  }
}

export default useCustom
