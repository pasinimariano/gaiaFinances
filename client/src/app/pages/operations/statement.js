import { useState } from 'react'
import axios from 'axios'

export const Statemets = user => {
  const [newOperation, setNewOperation] = useState({
    userId: user.user._id,
    description: '',
    category: 'Casa',
    amount: '',
    date: '',
    status: 'Income'
  })
  const [created, setCreated] = useState()

  const [indexFirstOperation, setindexFirstOperation] = useState(0)
  const [indexLastOperation, setindexLastOperation] = useState(10)
  const [selection, setSelection] = useState('all')
  const operationsXpage = 10

  const [modalState, setModalState] = useState({
    isOpen: false,
    data: {}
  })

  const [categories, setCategories] = useState()
  const status = [
    { _id: 'Income', name: 'Income' },
    { _id: 'Expenditure', name: 'Expenditure' }
  ]

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
    }

    return response.data
  }

  const handleChange = event => {
    console.log(event)
    const { name, value } = event.target
    setNewOperation({
      ...newOperation,
      [name]: value
    })
  }

  const getAllCategories = async () => {
    const response = await axios.get('http://localhost:3001/categories/all')

    return response.data.categories
  }

  const updateOperation = async (
    userId,
    description,
    category,
    amount,
    date,
    status
  ) => {
    const params = { userId, description, category, amount, date, status }
    const response = await axios.put(
      `http://localhost:3001/operation/update?token=${user.token}`,
      params
    )
    console.log('aca', response)
    return response
  }

  const handleOpen = operation => {
    setModalState({
      isOpen: true,
      data: operation
    })
  }

  const handleClose = () => {
    setModalState({
      isOpen: false,
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

  const getCategories = async () => {
    const cats = await getAllCategories()
    setCategories(cats)
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
    postOperation,
    newOperation,
    setNewOperation,
    handleChange,
    getAllCategories,
    created,
    updateOperation,
    modalState,
    handleOpen,
    handleClose,
    getCategories,
    categories,
    status
  }
}
