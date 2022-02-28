import {
  pagination,
  setFilters,
  getAllOperations
} from '../../../redux/actions/actionsOperations'

export const mapStateToProps = state => {
  return {
    user: state.User,
    userOperations: state.UserOperations,
    filteredOperations: state.OperationFilter,
    paginationState: state.Pagination
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getAllOperations: (userId, token) =>
      dispatch(getAllOperations(userId, token)),
    setFilters: (allOperations, filter) =>
      dispatch(setFilters(allOperations, filter)),
    setPagination: (allOperations, page, offset, filter) =>
      dispatch(pagination(allOperations, page, offset, filter))
  }
}
