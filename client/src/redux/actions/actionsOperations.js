import axios from 'axios'

import { GET_OPERATIONS } from '.'

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
