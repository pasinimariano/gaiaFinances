import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  Grid,
  Paper,
  Typography,
  Hidden,
  CircularProgress
} from '@material-ui/core/'

import { mapStateToProps, mapDispatchToProps } from './reduxConnection'
import { Statements } from './statement'
import { InfoOperations } from '../../components/dashboard/infoOperations'
import { LastOperations } from '../../components/dashboard/lastOperations'
import { ChartOperations } from '../../components/dashboard/chartOperations'
import { UserInfo } from '../../components/dashboard/userInfo'
import { Styles } from '../../styles/dashboardStyles'

const DashboardPage = ({ user, operations, getAllOperations }) => {
  const classes = Styles()

  const {
    transactions,
    setTransactions,
    getIncomes,
    getExpenditures,
    getBalance,
    getLastTransactions,
    intToString,
    lastTransactions,
    categories,
    getAllCategories,
    getChartData,
    chartDataX,
    chartDataY,
    roudedChartData,
    getRoundedChartData,
    radialChartData,
    getRadialChartData
  } = Statements()

  useEffect(() => {
    getAllOperations(user.user['_id'], user.token)
  }, [])

  useEffect(() => {
    if (operations.operations) {
      const incomes = getIncomes(operations)
      const expenditures = getExpenditures(operations)
      const balance = getBalance(incomes.total, expenditures.total)

      setTransactions({
        incomes: intToString(incomes.total),
        totalIncomes: intToString(incomes.count),
        expenditures: intToString(expenditures.total),
        totalExpeditures: intToString(expenditures.count),
        balance
      })

      getLastTransactions(operations.operations)
      getChartData(operations.operations)
      getAllCategories()
    }
  }, [operations])

  useEffect(() => {
    if (categories) {
      getRoundedChartData(operations.operations)
      getRadialChartData(operations.operations)
    }
  }, [categories])

  return (
    <Grid container>
      <Grid container className={classes.dashboard}>
        {lastTransactions &&
        transactions &&
        chartDataX &&
        roudedChartData &&
        radialChartData ? (
          <>
            <Grid item md={12} lg={10}>
              <Paper className={classes.allOperations} elevation={0}>
                <InfoOperations operations={transactions} classes={classes} />
              </Paper>
              <Paper className={classes.graphContainer} elevation={0}>
                <ChartOperations
                  chartDataX={chartDataX}
                  chartDataY={chartDataY}
                  classes={classes}
                />
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
                <UserInfo
                  user={user.user}
                  transactions={transactions}
                  classes={classes}
                  roudedChartData={roudedChartData}
                  radialChartData={radialChartData}
                />
              </Grid>
            </Hidden>
          </>
        ) : (
          <CircularProgress color='secondary' />
        )}
      </Grid>
    </Grid>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
