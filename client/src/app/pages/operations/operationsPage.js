import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { mapStateToProps, mapDispatchToProps } from './reduxConnection'
import { Statemets } from './statement'
import { OperationsTable } from '../../components/operations/operationsTable'
import { Controls } from '../../components/operations/controls'
import { Styles } from '../../styles/operationsStyles'

const OperationsPage = ({
  user,
  userOperations,
  paginationState,
  filteredOperations,
  setFilters,
  setPagination,
  getAllOperations
}) => {
  const classes = Styles()

  const {
    indexFirstOperation,
    indexLastOperation,
    nextPage,
    prevPage,
    selection,
    setSelection,
    newOperation,
    postOperation,
    handleChange,
    getAllCategories,
    created
  } = Statemets(user)

  useEffect(() => {
    console.log('entre')
    setFilters(userOperations, selection)
  }, [selection, userOperations])

  useEffect(() => {
    setPagination(filteredOperations, indexFirstOperation, indexLastOperation)
  }, [
    indexFirstOperation,
    indexLastOperation,
    filteredOperations,
    userOperations
  ])

  useEffect(() => {
    if (created) {
      getAllOperations(user.user._id, user.token)
    }
  }, [created])

  return (
    <Grid container>
      <Paper className={classes.userContainer} elevation={0}>
        USER INFO
      </Paper>
      <Grid item xs={12} md={12} lg={8} className={classes.tableContainer}>
        <OperationsTable
          userOperations={filteredOperations}
          paginationState={paginationState}
          nextPage={() => nextPage(filteredOperations)}
          prevPage={prevPage}
          indexFirstOperation={indexFirstOperation}
          indexLastOperation={indexLastOperation}
          classes={classes}
        />
      </Grid>
      <Grid item xs={12} md={12} lg={4}>
        <Controls
          setSelection={setSelection}
          postOperation={postOperation}
          newOperation={newOperation}
          handleChange={handleChange}
          getAllCategories={getAllCategories}
          created={created}
          classes={classes}
        />
      </Grid>
    </Grid>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage)
