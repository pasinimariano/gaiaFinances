import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { OrderByDate } from './modules/orderByDate'
import { FilterByStatus } from './modules/filterByStatus'
import { CreationControl } from './modules/creationControl'

export const Controls = ({ setSelection, handleOpen, classes }) => {
  return (
    <Grid className={classes.controlsContainer} container>
      <OrderByDate setSelection={setSelection} classes={classes} />
      <FilterByStatus setSelection={setSelection} classes={classes} />
      <CreationControl
        header='CREAR OPERACION'
        classes={classes}
        onClick={() => handleOpen('newOperation')}
      />
      <CreationControl
        header='CATEGORIAS'
        onClick={() => handleOpen('newCategory')}
        classes={classes}
      />
    </Grid>
  )
}
