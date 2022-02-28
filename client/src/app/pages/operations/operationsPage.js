import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { mapStateToProps, mapDispatchToProps } from './reduxConnection'
import { Statemets } from './statement'
import { OperationsTable } from '../../components/operations/operationsTable'
import { Styles } from '../../styles/operationsStyles'

const OperationsPage = ({
  user,
  userOperations,
  paginationState,
  setPagination
}) => {
  const classes = Styles()

  const {
    indexFirstOperation,
    setindexFirstOperation,
    indexLastOperation,
    setindexLastOperation,
    nextPage,
    prevPage,
    operationsXpage,
    selection,
    setSelection
  } = Statemets()

  useEffect(() => {
    setPagination(
      userOperations,
      indexFirstOperation,
      indexLastOperation,
      selection
    )
  }, [indexFirstOperation, indexLastOperation, selection])

  return (
    <Grid container>
      <Paper className={classes.userContainer} elevation={0}>
        USER
      </Paper>
      <Grid item lg={8} className={classes.tableContainer}>
        <OperationsTable
          userOperations={userOperations}
          paginationState={paginationState}
          nextPage={() => nextPage(userOperations.operations)}
          prevPage={prevPage}
          indexFirstOperation={indexFirstOperation}
          indexLastOperation={indexLastOperation}
          classes={classes}
        />
      </Grid>
      <Grid item lg={4}>
        {' '}
        CONTROLES{' '}
      </Grid>
    </Grid>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage)
