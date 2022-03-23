import React, { useState, useEffect } from 'react'
import {
  Modal,
  Paper,
  Typography,
  TextField,
  Button,
  Grid
} from '@material-ui/core'

import { TextFields } from '../home/components/textFields'
import { FormsControl } from './modules/formControl'
import { DeleteAlert } from './modules/deleteAlert'

export const UpdateOperationModal = ({
  user,
  created,
  updateOperation,
  newOperation,
  setNewOperation,
  modalState,
  handleChange,
  handleClose,
  categories,
  status,
  deleteOperation,
  errors,
  classes
}) => {
  const [alertOpen, setAlertOpen] = useState(false)

  const openAlert = () => {
    setAlertOpen(true)
  }

  const closeAlert = () => {
    setAlertOpen(false)
  }

  const acceptAlert = () => {
    setAlertOpen(false)
    deleteOperation(modalState.data._id)
    handleClose()
  }
  console.log(handleClose)

  useEffect(() => {
    setNewOperation({
      userId: user.user._id,
      description: modalState.data.description,
      category: modalState.data.category,
      amount: modalState.data.amount,
      date: modalState.data.date,
      status: modalState.data.status
    })
  }, [])

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
      <Paper className={classes.newOperation}>
        <Paper elevation={0} className={classes.orderHeader}>
          <Typography className={classes.header}>
            ID -- {modalState.data._id} --
          </Typography>
          <Typography className={classes.header}>
            STATUS -- {modalState.data.status.toUpperCase()} --
          </Typography>
        </Paper>
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
                onChange={handleChange}
                value={newOperation.amount}
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
              />
              <Typography className={classes.errors}>
                {errors && errors.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Button
          className={classes.orderHeader}
          onClick={() =>
            updateOperation(
              modalState.data._id,
              user.user._id,
              newOperation.description,
              newOperation.category,
              newOperation.amount,
              newOperation.date,
              newOperation.status
            )
          }
        >
          ACTUALIZAR
        </Button>
        <Typography className={classes.created}>
          {created && created === 'Operacion registrada'}
        </Typography>
        <Button className={classes.acceptButton} onClick={() => openAlert()}>
          BORRAR
        </Button>
        {!alertOpen ? null : (
          <DeleteAlert
            open={alertOpen}
            closeAlert={closeAlert}
            onClick={() => acceptAlert()}
            classes={classes}
          />
        )}
      </Paper>
    </Modal>
  )
}
