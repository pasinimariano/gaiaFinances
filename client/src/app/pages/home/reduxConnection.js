import {
  loginUser,
  deleteUSer,
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
    deleteUser: () => dispatch(deleteUSer()),
    isLogging: () => dispatch(isLogging())
  }
}
