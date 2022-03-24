import { useState } from 'react'
import axios from 'axios'

export const Statemets = user => {
  ////////////////////////////////////////////////// COMPONENT STATES

  const [newOperation, setNewOperation] = useState({
    userId: user.user._id,
    description: '',
    category: 'Casa',
    amount: '',
    date: '',
    status: 'Income'
  })
  const [errors, setErrors] = useState({
    amount: '',
    category: '',
    date: '',
    description: '',
    status: '',
    other: ''
  })
  const [created, setCreated] = useState()

  const [indexFirstOperation, setindexFirstOperation] = useState(0)
  const [indexLastOperation, setindexLastOperation] = useState(10)
  const [selection, setSelection] = useState('all')
  const operationsXpage = 10

  const [modalState, setModalState] = useState({
    isOpen: false,
    selected: '',
    data: {}
  })

  const [categories, setCategories] = useState()

  const status = [
    { _id: 'Income', name: 'Income' },
    { _id: 'Expenditure', name: 'Expenditure' }
  ]

  ////////////////////////////////////////////////// MANAGMENT FOR PAGINATION

  const nextPage = operation => {
    if (indexLastOperation < operation.length) {
      setindexFirstOperation(indexFirstOperation + operationsXpage)
      setindexLastOperation(indexLastOperation + operationsXpage)
    }
  }

  const prevPage = () => {
    if (indexFirstOperation > 0) {
      setindexFirstOperation(indexFirstOperation - operationsXpage)
      setindexLastOperation(indexLastOperation - operationsXpage)
    }
  }

  ////////////////////////////////////////////////// MANAGMENT FOR INPUTS

  const handleChange = event => {
    const { name, value } = event.target
    setNewOperation({
      ...newOperation,
      [name]: value
    })
  }

  ////////////////////////////////////////////////// MANAGMENT FOR CATEGORIES

  const getAllCategories = async () => {
    const response = await axios.get('http://localhost:3001/categories/all')

    return response.data.categories
  }

  const getCategories = async () => {
    const cats = await getAllCategories()
    setCategories(cats)
  }

  const createCategory = async name => {
    const response = await axios.post(
      'http://localhost:3001/categories/create',
      { name }
    )

    if (response.data && response.data.message === `Category ${name} created`) {
      await getCategories()
      setCreated('Categoria creada')
    } else if (
      response.data &&
      response.data.errorcat === 'Category already exist'
    ) {
      setCreated('La categoria ya existe')
    }

    return response.data
  }

  const updateCategory = async (name, _id) => {
    if (!name) {
      setCreated('Selecciona una categoria')
    } else {
      const params = { name, _id }
      const response = await axios.put(
        `http://localhost:3001/categories/update`,
        params
      )

      if (response.data && response.data.message === 'Successfully updated') {
        await getCategories()
        setCreated('Categoria actualizada')
      }

      return response.data
    }
  }

  const deleteCategory = async (_id, name) => {
    if (!name) {
      setCreated('Selecciona una categoria')
    } else {
      const response = await axios.delete(
        `http://localhost:3001/categories/delete`,
        { data: { _id, name } }
      )
      if (
        response.data.message &&
        response.data.message === `Category ${name} deleted`
      ) {
        await getCategories()
        setCreated('Categoria eliminada exitosamente')
      }
    }
  }

  /////////////////////////////////////////////////// MANAGMENT FOR OPERATIONS

  const postOperation = async (
    userId,
    description,
    category,
    amount,
    date,
    status
  ) => {
    const params = { userId, description, category, amount, date, status }

    const response = await axios.post(
      `http://localhost:3001/operation/create?token=${user.token}`,
      params
    )

    if (response.data && response.data.message === 'Successfully created') {
      setCreated('Operacion registrada')
      setNewOperation({
        userId: user.user._id,
        description: '',
        category: 'Casa',
        amount: '',
        date: '',
        status: 'Income'
      })
      setErrors({
        amount: '',
        category: '',
        date: '',
        description: '',
        status: '',
        other: ''
      })
    } else if (response.data && response.data.errors) {
      setErrors(prevState => ({
        ...prevState,
        amount: response.data.errors.amount,
        category: response.data.errors.category,
        date: response.data.errors.date,
        description: response.data.errors.description,
        status: response.data.errors.status
      }))
    } else {
      setErrors(prevState => ({
        ...prevState,
        other: response.data.error
      }))
    }

    return response.data
  }

  const updateOperation = async (
    _id,
    userId,
    description,
    category,
    amount,
    date,
    status
  ) => {
    const params = { _id, userId, description, category, amount, date, status }
    const response = await axios.put(
      `http://localhost:3001/operation/update?token=${user.token}`,
      params
    )

    if (response.data && response.data.message === 'Successfully updated') {
      setCreated('Operacion registrada')
      setModalState({ ...modalState, isOpen: false })
      setErrors({
        amount: '',
        category: '',
        date: '',
        description: '',
        status: '',
        other: ''
      })
    } else if (response.data && response.data.errors) {
      setErrors(prevState => ({
        ...prevState,
        amount: response.data.errors.amount,
        category: response.data.errors.category,
        date: response.data.errors.date,
        description: response.data.errors.description,
        status: response.data.errors.status
      }))
    } else {
      setErrors(prevState => ({
        ...prevState,
        other: response.data.error
      }))
    }
  }

  const deleteOperation = async _id => {
    const response = await axios.delete(
      `http://localhost:3001/operation/delete?token=${user.token}`,
      { data: { _id } }
    )

    if (response.data.message && response.data.message === 'Success') {
      setCreated('Borrada')
    }
  }

  ////////////////////////////////////////////////// MANAGMENT FOR MODAL

  const handleOpen = (selection, operation = null) => {
    setModalState({
      isOpen: true,
      selected: selection,
      data: operation
    })
    setCreated('')
  }

  const handleClose = () => {
    setModalState({
      isOpen: false,
      selected: '',
      data: {}
    })
    setNewOperation({
      userId: user.user._id,
      description: '',
      category: 'Casa',
      amount: '',
      date: '',
      status: 'Income'
    })
  }

  return {
    indexFirstOperation,
    setindexFirstOperation,
    indexLastOperation,
    setindexLastOperation,
    nextPage,
    prevPage,
    operationsXpage,
    selection,
    setSelection,
    newOperation,
    setNewOperation,
    errors,
    created,
    status,
    handleChange,
    modalState,
    handleOpen,
    handleClose,
    postOperation,
    updateOperation,
    deleteOperation,
    categories,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
  }
}
