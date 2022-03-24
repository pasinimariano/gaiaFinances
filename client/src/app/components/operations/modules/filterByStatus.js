import React from 'react'
import { Paper, Button, Typography, Grid } from '@material-ui/core'

import DialpadIcon from '@material-ui/icons/Dialpad'
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined'

export const FilterByStatus = ({ setSelection, classes }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} className={classes.orderBox}>
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
    </Grid>
  )
}
