import { pagination } from '../../../redux/actions/actionsOperations'

export const mapStateToProps = state => {
  return {
    user: state.User,
    userOperations: state.UserOperations,
    paginationState: state.Pagination
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setPagination: (allOperations, page, offset, filter) =>
      dispatch(pagination(allOperations, page, offset, filter))
  }
}
