import axios from 'axios'

import { GET_OPERATIONS, PAGINATION } from '.'
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

export const pagination = (allOperations, page, offset, filter) => {
  let response
  return async dispatch => {
    if (!filter) {
      const paginateOperations = allOperations.operations
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(page, offset)
      response = await formatedData(paginateOperations)
    } else {
      const filteredOperations = allOperations.operations
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter(operation => {
          operation.status === filter
        })
      const paginateOperations = filteredOperations.slice(page, offset)

      response = await formatedData(paginateOperations)
    }

    return dispatch({ type: PAGINATION, payload: response })
  }
}
