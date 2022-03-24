import React from 'react'
import {
  Modal,
  Paper,
  Typography,
  Button,
  TextField,
  Grid
} from '@material-ui/core'

import { TextFields } from '../home/components/textFields'
import { FormsControl } from './modules/formControl'

export const NewOperationModal = ({
  newOperation,
  handleChange,
  postOperation,
  categories,
  status,
  modalState,
  handleClose,
  errors,
  classes
}) => {
  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open
      aria-labelledby='server-modal-title'
      aria-describedby='server-modal-description'
      open={modalState.isOpen}
      onClose={handleClose}
      className={classes.modalContainer}
    >
      <Paper className={classes.modalPaper}>
        <Typography className={classes.orderHeader}>
          CREA UNA NUEVA OPERACION
        </Typography>
        <Grid container className={classes.newOperationBodyContainer}>
          <Grid container className={classes.newOperationContainer}>
            <Grid
              item
              xs={11}
              md={5}
              lg={5}
              className={classes.newOperationTop}
            >
              <TextFields
                name='amount'
                label='Importe'
                value={newOperation.amount}
                onChange={handleChange}
                classes={classes}
              />
              <Typography className={classes.errors}>
                {errors && errors.amount}
              </Typography>
            </Grid>
            <Grid
              item
              xs={11}
              md={5}
              lg={5}
              className={classes.newOperationTop}
            >
              <TextFields
                name='date'
                label='Fecha mes/dia/año'
                value={newOperation.date}
                onChange={handleChange}
                classes={classes}
              />
              <Typography className={classes.errors}>
                {errors && errors.date}
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.newOperationContainer}>
            <Grid item xs={11} sm={5} lg={5}>
              <FormsControl
                label='Categoria'
                value={newOperation.category}
                name='category'
                handleChange={handleChange}
                items={categories}
              />
              <Typography className={classes.errors}>
                {errors && errors.category}
              </Typography>
            </Grid>
            <Grid item xs={11} sm={5} lg={5}>
              <FormsControl
                label='Status'
                value={newOperation.status}
                name='status'
                handleChange={handleChange}
                items={status}
              />
              <Typography className={classes.errors}>
                {errors && errors.status}
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.newOperationContainer}>
            <Grid item lg={11} className={classes.descriptionContainer}>
              <TextField
                id='standard-multiline-flexible'
                label='Descripcion'
                multiline
                maxRows={3}
                name='description'
                value={newOperation.description}
                onChange={handleChange}
                variant='standard'
                style={{ width: '80%' }}
              />
              <Typography className={classes.errors}>
                {errors && errors.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Paper elevation={0} className={classes.buttonPostContainer}>
          <Button
            onClick={() => postOperation(newOperation)}
            className={classes.buttonPost}
          >
            Crear
          </Button>
        </Paper>
      </Paper>
    </Modal>
  )
}
