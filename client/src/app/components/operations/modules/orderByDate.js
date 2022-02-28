import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import LineWeightIcon from '@material-ui/icons/LineWeight'

export const OrderByDate = ({ setSelection, classes }) => {
  return (
    <Paper className={classes.order}>
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
    </Paper>
  )
}
