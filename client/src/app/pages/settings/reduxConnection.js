import { updateUser } from '../../../redux/actions/actionsUsers'

export const mapStateToProps = state => {
  return {
    userData: state.User
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    updateUser: (data, token) => dispatch(updateUser(data, token))
  }
}
