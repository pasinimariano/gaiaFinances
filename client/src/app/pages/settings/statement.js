import { useState } from 'react'

export const Statements = () => {
  const [formValues, setFormValues] = useState({
    _id: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    newpassword: ''
  })
  const [showNewPassword, setShowNewPassword] = useState(true)

  const handleChange = event => {
    const { name, value } = event.target

    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword)
    if (showNewPassword === false) {
      setFormValues(prevState => ({
        ...prevState,
        newpassword: ''
      }))
    }
  }

  return {
    formValues,
    setFormValues,
    handleChange,
    showNewPassword,
    handleShowNewPassword
  }
}
