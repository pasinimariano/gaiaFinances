import axios from 'axios'

import { DELETE_USER, LOGIN_USER, IS_LOGGING, UPDATE_USER, LOG_OUT } from '.'

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

export const logOut = () => {
  return {
    type: LOG_OUT
  }
}

export const isLogging = () => {
  return {
    type: IS_LOGGING
  }
}

export const updateUser = (data, token) => {
  return dispatch => {
    return axios
      .put(`http://localhost:3001/user/update?token=${token}`, {
        data
      })
      .then(json => {
        dispatch({ type: UPDATE_USER, payload: json.data })
      })
      .catch(error => {
        dispatch({ type: UPDATE_USER, error: error.data })
      })
  }
}
