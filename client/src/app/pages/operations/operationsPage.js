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
  setPagination
}) => {
  const classes = Styles()

  const {
    indexFirstOperation,
    indexLastOperation,
    nextPage,
    prevPage,
    selection,
    setSelection
  } = Statemets()

  useEffect(() => {
    setFilters(userOperations, selection)
  }, [selection])

  useEffect(() => {
    setPagination(filteredOperations, indexFirstOperation, indexLastOperation)
  }, [indexFirstOperation, indexLastOperation, filteredOperations])

  return (
    <Grid container>
      <Paper className={classes.userContainer} elevation={0}>
        USER
      </Paper>
      <Grid item lg={8} className={classes.tableContainer}>
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
      <Grid item lg={4}>
        <Controls setSelection={setSelection} classes={classes} />
      </Grid>
    </Grid>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage)
