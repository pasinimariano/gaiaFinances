import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { mapStateToProps, mapDispatchToProps } from './reduxConnection'
import { InfoOperations } from '../../components/operations/infoOperations'
import { Statements } from './statement'
import { Styles } from '../../styles/operationsStyles'

const OperationsPage = ({ user, operations, getAllOperations }) => {
  const classes = Styles()

  const {
    transactions,
    setTransactions,
    getIncomes,
    getExpenditures,
    getBalance,
    intToString
  } = Statements()

  useEffect(() => {
    const completeData = async () => {
      await getAllOperations(user.user['_id'], user.token)
      const incomes = await getIncomes(operations)
      const expenditures = await getExpenditures(operations)
      const balance = await getBalance(incomes, expenditures)

      setTransactions({
        incomes: intToString(incomes),
        expenditures: intToString(expenditures),
        balance
      })
    }

    completeData()
  }, [])

  return (
    <Grid container>
      <Paper className={classes.logoContainer} elevation={0}>
        LOGO
      </Paper>
      <Grid container className={classes.dashboard}>
        <Grid item lg={10}>
          <Paper className={classes.allOperations} elevation={0}>
            <InfoOperations operations={transactions} classes={classes} />
          </Paper>
          <Paper className={classes.graphContainer} elevation={0}>
            GRAFICO
          </Paper>
          <Paper className={classes.allOperations} elevation={0}>
            ULTIMOS 10
          </Paper>
        </Grid>
        <Grid item lg={2}>
          USER
        </Grid>
      </Grid>
    </Grid>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage)
