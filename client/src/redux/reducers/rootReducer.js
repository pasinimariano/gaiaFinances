import initialState from './state'
import { LOGIN_USER } from '../actions/actionsCreator'

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        User: action.payload
      }

    default:
      return state
  }
}
