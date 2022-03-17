import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'

import { RoundedChart } from './modules/roundedChart'
import { RadialChart } from './modules/radialChart'

export const UserInfo = ({
  user,
  transactions,
  roudedChartData,
  radialChartData,
  classes
}) => {
  const [totalTransactions, setTotalTransactions] = useState()

  const getPercentage = total => {
    return (total * 100) / totalTransactions
  }

  useEffect(() => {
    if (transactions != 0) {
      setTotalTransactions(
        transactions.totalExpeditures + transactions.totalIncomes
      )
    }
  }, [transactions])

  return (
    <Paper className={classes.userTable}>
      <Paper className={classes.userTableHeader}>
        <Avatar
          alt={user.firstname}
          variant='rounded'
          className={classes.avatar}
        >
          {`${user.firstname[0].toUpperCase()} ${user.lastname[0].toUpperCase()}`}
        </Avatar>
        <Typography
          className={classes.header}
        >{`${user.firstname.toUpperCase()} ${user.lastname.toUpperCase()}`}</Typography>
      </Paper>
      <Typography className={classes.tableTitle}> Ingresos </Typography>
      <LinearProgress
        variant='determinate'
        color='primary'
        value={getPercentage(transactions.totalIncomes)}
        className={classes.progressBar}
      />
      <Typography className={classes.tableTitle}> Egresos </Typography>
      <LinearProgress
        variant='determinate'
        color='secondary'
        value={getPercentage(transactions.totalExpeditures)}
        className={classes.progressBar}
      />
      <Paper elevation={0} className={classes.roundedChartContainer}>
        <RoundedChart roudedChartData={roudedChartData} />
      </Paper>
      <Paper elevation={0} className={classes.radialChartContainer}>
        <RadialChart radialChartData={radialChartData} />
      </Paper>
    </Paper>
  )
}
