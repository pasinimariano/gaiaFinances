import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DialpadIcon from '@material-ui/icons/Dialpad'
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined'

export const FilterByStatus = ({ setSelection, classes }) => {
  return (
    <Paper className={classes.order}>
      <Typography className={classes.orderHeader}>
        FILTRAR POR ESTADO
      </Typography>
      <Paper className={classes.orderButtons} elevation={0}>
        <Button
          className={classes.buttonAll}
          onClick={() => setSelection('all')}
        >
          <DialpadIcon />
        </Button>
        <Button
          className={classes.buttonIncomes}
          onClick={() => setSelection('onlyIncomes')}
        >
          <KeyboardArrowUpOutlinedIcon />
        </Button>
        <Button
          className={classes.buttonExpenditures}
          onClick={() => setSelection('onlyExpenditures')}
        >
          <KeyboardArrowDownOutlinedIcon />
        </Button>
      </Paper>
    </Paper>
  )
}
