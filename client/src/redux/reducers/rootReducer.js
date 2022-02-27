import { initialState } from './state'
import {
  LOGIN_USER,
  DELETE_USER,
  IS_LOGGING,
  GET_OPERATIONS
} from '../actions/'

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        User: action.payload
      }

    case DELETE_USER:
      return {
        ...state,
        User: [],
        isLoggin: false
      }

    case IS_LOGGING:
      return {
        ...state,
        isLoggin: true
      }

    case GET_OPERATIONS:
      return {
        ...state,
        UserOperations: action.payload
      }

    default:
      return state
  }
}
