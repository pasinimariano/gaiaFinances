import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined'
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined'

export const InfoOperations = ({ operations, classes }) => {
  return (
    <Grid container>
      <Grid item lg={4} className={classes.dataContainer}>
        <Paper className={classes.incomes}>
          <KeyboardArrowUpOutlinedIcon className={classes.data} />
          <Typography className={classes.data}>{operations.incomes}</Typography>
        </Paper>
      </Grid>
      <Grid item lg={4} className={classes.dataContainer}>
        <Paper className={classes.expenditures}>
          <KeyboardArrowDownOutlinedIcon className={classes.data} />
          <Typography className={classes.data}>
            {operations.expenditures}
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={4} className={classes.dataContainer}>
        <Paper className={classes.balance}>
          <BarChartOutlinedIcon className={classes.data} />
          <Typography className={classes.data}>{operations.balance}</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
