import { useState } from 'react'
import axios from 'axios'

export const Statements = () => {
  const [form, setForm] = useState('create')
  const [formValues, setFormValues] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  })
  const [backResponse, setBackResponse] = useState({})

  const createUser = async ({ firstname, lastname, email, password }) => {
    const params = { firstname, lastname, email, password }
    const response = await axios.post(
      'http://localhost:3001/user/create',
      params
    )
    setBackResponse(response.data)
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return { form, setForm, formValues, handleChange, createUser, backResponse }
}
