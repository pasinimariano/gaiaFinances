import React from 'react'
import Paper from '@material-ui/core/Paper'

import { OrderByDate } from './modules/orderByDate'
import { FilterByStatus } from './modules/filterByStatus'

export const Controls = ({ setSelection, classes }) => {
  return (
    <Paper elevation={0} className={classes.controlsContainer}>
      <Paper className={classes.controls}>
        <OrderByDate setSelection={setSelection} classes={classes} />
        <FilterByStatus setSelection={setSelection} classes={classes} />
      </Paper>
    </Paper>
  )
}
