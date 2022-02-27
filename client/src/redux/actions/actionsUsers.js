import axios from 'axios'

import { DELETE_USER, LOGIN_USER } from '.'

export const loginUser = (email, password) => {
  const params = { email, password }
  return dispatch => {
    return axios
      .get('http://localhost:3001/user/login', { params })
      .then(json => {
        dispatch({ type: LOGIN_USER, payload: json.data })
      })
      .catch(error => {
        dispatch({ type: LOGIN_USER, payload: error.data })
      })
  }
}

export const deleteUSer = () => {
  return { type: DELETE_USER }
}
