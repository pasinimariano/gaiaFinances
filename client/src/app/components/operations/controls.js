import React from 'react'
import { Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CategoryIcon from '@material-ui/icons/Category'

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
        icon={<AddIcon />}
        classes={classes}
        onClick={() => handleOpen('newOperation')}
      />
      <CreationControl
        header='CATEGORIAS'
        icon={<CategoryIcon />}
        onClick={() => handleOpen('newCategory')}
        classes={classes}
      />
    </Grid>
  )
}
