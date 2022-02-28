import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { TextFields } from '../../home/components/textFields'
import { FormsControl } from './formControl'

export const AddNewOperation = ({
  newOperation,
  handleChange,
  getAllCategories,
  postOperation,
  created,
  categories,
  status,
  classes
}) => {
  return (
    <Paper className={classes.postContainer}>
      <Typography className={classes.orderHeader}>
        CREAR NUEVA OPERACION
      </Typography>
      <TextFields
        name='amount'
        label='Importe'
        value={newOperation.amount}
        onChange={handleChange}
        classes={classes}
      />
      <TextFields
        name='date'
        label='Fecha mes/dia/año'
        value={newOperation.date}
        onChange={handleChange}
        classes={classes}
      />
      <FormsControl
        label='Categoria'
        value={newOperation.category}
        name='category'
        handleChange={handleChange}
        items={categories}
      />
      <FormsControl
        label='Status'
        value={newOperation.status}
        name='status'
        handleChange={handleChange}
        items={status}
      />
      <TextField
        id='standard-multiline-flexible'
        label='Descripcion'
        multiline
        maxRows={1}
        name='description'
        value={newOperation.description}
        onChange={handleChange}
        variant='standard'
      />
      <Button
        onClick={() => postOperation(newOperation)}
        className={classes.orderHeader}
      >
        Crear
      </Button>
      <Typography className={classes.created}>{created}</Typography>
    </Paper>
  )
}
