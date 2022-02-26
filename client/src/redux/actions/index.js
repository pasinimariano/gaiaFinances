import axios from 'axios'

import { LOGIN_USER } from './actionsCreator'

export const login_user = ({ email, password }) => {
  return dispatch => {
    return axios
      .get('http://localhost:3001/user/login', { email, password })
      .then(json => {
        dispatch({ type: LOGIN_USER, payload: json })
      })
      .catch(error => {
        dispatch({ type: LOGIN_USER, payload: error })
      })
  }
}
