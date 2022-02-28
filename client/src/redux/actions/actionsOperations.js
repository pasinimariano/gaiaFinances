import axios from 'axios'

import { GET_OPERATIONS, PAGINATION, FILTER } from '.'
import { getCategory } from './actionsCategories'

const formatedData = async operations => {
  const response = operations.map(async operation => {
    const category = await getCategory(operation.CategoryId)

    return {
      _id: operation._id,
      description: operation.description,
      category: category.data.category.name,
      status: operation.status,
      amount: operation.amount,
      date: new Date(operation.date).toDateString()
    }
  })

  return Promise.all(response)
}

export const getAllOperations = (userId, token) => {
  const params = { userId }
  return dispatch => {
    return axios
      .get(`http://localhost:3001/operation/all?token=${token}`, { params })
      .then(json => {
        dispatch({ type: GET_OPERATIONS, payload: json.data })
      })
      .catch(error => {
        dispatch({ type: GET_OPERATIONS, payload: error.data })
      })
  }
}

export const setFilters = (allOperations, filter) => {
  return async dispatch => {
    if (filter === 'all') {
      const filteredOperations = allOperations.operations
      const response = await formatedData(filteredOperations)

      return dispatch({ type: FILTER, payload: response })
    } else if (filter === 'onlyIncomes') {
      const filteredOperations = allOperations.operations.filter(operation => {
        return operation.status === 'Income'
      })

      const response = await formatedData(filteredOperations)

      return dispatch({ type: FILTER, payload: response })
    } else if (filter === 'onlyExpenditures') {
      const filteredOperations = allOperations.operations.filter(operation => {
        return operation.status === 'Expenditure'
      })

      const response = await formatedData(filteredOperations)

      return dispatch({ type: FILTER, payload: response })
    } else if (filter === 'oldest') {
      const sortedOperations = allOperations.operations.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )

      const response = await formatedData(sortedOperations)

      return dispatch({ type: FILTER, payload: response })
    } else if (filter === 'newest') {
      const sortedOperations = allOperations.operations.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )

      const response = await formatedData(sortedOperations)

      return dispatch({ type: FILTER, payload: response })
    }
  }
}

export const pagination = (allOperations, page, offset) => {
  const paginatedOperations = allOperations.slice(page, offset)

  return { type: PAGINATION, payload: paginatedOperations }
}
