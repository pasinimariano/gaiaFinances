import React from 'react'
import { Paper, Button, Typography, Grid } from '@material-ui/core'

import AppsIcon from '@material-ui/icons/Apps'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

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
          <AppsIcon />
        </Button>
        <Button
          className={classes.buttonIncomes}
          onClick={() => setSelection('onlyIncomes')}
        >
          <AddIcon />
        </Button>
        <Button
          className={classes.buttonExpenditures}
          onClick={() => setSelection('onlyExpenditures')}
        >
          <RemoveIcon />
        </Button>
      </Paper>
    </Grid>
  )
}
