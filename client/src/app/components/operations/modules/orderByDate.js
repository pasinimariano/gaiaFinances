import React from 'react'
import { Paper, Button, Typography, Grid } from '@material-ui/core'
import LineWeightIcon from '@material-ui/icons/LineWeight'

export const OrderByDate = ({ setSelection, classes }) => {
  return (
    <Grid item xs={12} sm={6} md={4} className={classes.orderBox}>
      <Typography className={classes.orderHeader}>ORDENAR POR FECHA</Typography>
      <Paper className={classes.orderButtons} elevation={0}>
        <Button
          className={classes.buttonRecent}
          onClick={() => setSelection('newest')}
        >
          <LineWeightIcon />
        </Button>
        <Button
          className={classes.buttonOldest}
          onClick={() => setSelection('oldest')}
        >
          <LineWeightIcon className={classes.oldest} />
        </Button>
      </Paper>
    </Grid>
  )
}
