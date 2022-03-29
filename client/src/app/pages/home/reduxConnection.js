import {
  loginUser,
  logOut,
  isLogging
} from '../../../redux/actions/actionsUsers'

export const mapStateToProps = state => {
  return {
    userState: state.User,
    logginState: state.isLoggin
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    logOut: () => dispatch(logOut()),
    isLogging: () => dispatch(isLogging())
  }
}
