import { initialState } from './state'
import {
  LOGIN_USER,
  DELETE_USER,
  UPDATE_USER,
  LOG_OUT,
  IS_LOGGING,
  GET_OPERATIONS,
  PAGINATION,
  FILTER
} from '../actions/'

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        User: action.payload
      }

    case LOG_OUT:
      return {
        ...state,
        User: [],
        UserOperations: [],
        OperationFilter: [],
        Pagination: [],
        isLoggin: false
      }

    case UPDATE_USER: {
      if (action.payload && action.payload.message === 'Success') {
        return {
          ...state,
          User: { ...User, user: action.payload.formatedData }
        }
      } else {
        return {
          ...state,
          Error: action.error
        }
      }
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

    case FILTER:
      return {
        ...state,
        OperationFilter: action.payload
      }

    case PAGINATION:
      return {
        ...state,
        Pagination: action.payload
      }

    default:
      return state
  }
}
