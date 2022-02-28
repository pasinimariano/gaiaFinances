import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'

import { mapStateToProps, mapDispatchToProps } from './reduxConnection'
import { InfoOperations } from '../../components/dashboard/infoOperations'
import { LastOperations } from '../../components/dashboard/lastOperations'
import { Statements } from './statement'
import { Styles } from '../../styles/dashboardStyles'
import { Typography } from '@material-ui/core'

const DashboardPage = ({ user, operations, getAllOperations }) => {
  const classes = Styles()

  const {
    transactions,
    setTransactions,
    getIncomes,
    getExpenditures,
    getBalance,
    intToString,
    getLastTransactions,
    lastTransactions
  } = Statements()

  useEffect(() => {
    const completeData = async () => {
      await getAllOperations(user.user['_id'], user.token)

      if (operations.operations.length > 0) {
        const incomes = await getIncomes(operations)
        const expenditures = await getExpenditures(operations)
        const balance = getBalance(incomes, expenditures)

        setTransactions({
          incomes: intToString(incomes),
          expenditures: intToString(expenditures),
          balance
        })

        await getLastTransactions(operations.operations)
      }
    }

    completeData()
  }, [])

  return (
    <Grid container>
      <Paper className={classes.logoContainer} elevation={0}>
        LOGO
      </Paper>
      <Grid container className={classes.dashboard}>
        <Grid item md={12} lg={10}>
          <Paper className={classes.allOperations} elevation={0}>
            <InfoOperations operations={transactions} classes={classes} />
          </Paper>
          <Paper className={classes.graphContainer} elevation={0}>
            GRAFICO DE MOVIMIENTOS
          </Paper>
          <Paper className={classes.tableContainer} elevation={0}>
            <Typography className={classes.tableTitle}>
              Ultimos movimientos
            </Typography>
            <LastOperations
              lastTransactions={lastTransactions}
              classes={classes}
            />
          </Paper>
        </Grid>
        <Hidden mdDown>
          <Grid item lg={2}>
            USER
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
