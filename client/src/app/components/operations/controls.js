import React from 'react'
import Paper from '@material-ui/core/Paper'

import { OrderByDate } from './modules/orderByDate'
import { FilterByStatus } from './modules/filterByStatus'
import { AddNewOperation } from './modules/addNewOperation'

export const Controls = ({
  setSelection,
  postOperation,
  newOperation,
  handleChange,
  getAllCategories,
  created,
  classes
}) => {
  return (
    <Paper elevation={0} className={classes.controlsContainer}>
      <Paper className={classes.controls}>
        <OrderByDate setSelection={setSelection} classes={classes} />
        <FilterByStatus setSelection={setSelection} classes={classes} />
        <AddNewOperation
          postOperation={postOperation}
          newOperation={newOperation}
          handleChange={handleChange}
          getAllCategories={getAllCategories}
          created={created}
          classes={classes}
        />
      </Paper>
    </Paper>
  )
}
