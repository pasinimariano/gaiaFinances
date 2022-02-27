import { getAllOperations } from '../../../redux/actions/actionsOperations'

export const mapStateToProps = state => {
  return {
    user: state.User,
    operations: state.UserOperations
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getAllOperations: (userId, token) =>
      dispatch(getAllOperations(userId, token))
  }
}
