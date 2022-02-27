import { loginUser, deleteUSer } from '../../redux/actions/actionsUsers'

export const mapStateToProps = state => {
  return {
    userState: state.User
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    deleteUser: () => dispatch(deleteUSer)
  }
}
