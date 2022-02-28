import React, { useEffect } from 'react'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { TextFields } from '../../components/home/components/textFields'
import { FormsControl } from './modules/formControl'

export const OperationModal = ({
  user,
  updateOperation,
  newOperation,
  setNewOperation,
  modalState,
  handleChange,
  handleClose,
  categories,
  status,
  classes
}) => {
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
      <Paper className={classes.paper}>
        <Paper className={classes.tableHeaders}>
          <Typography className={classes.header}>
            ID DE USUARIO: {user.user._id}
          </Typography>
          <Typography className={classes.header}>
            STATUS: {modalState.data.status}
          </Typography>
        </Paper>
        <Paper className={classes.amountDate}>
          <TextFields
            name='amount'
            label='Importe'
            onChange={handleChange}
            value={newOperation.amount}
            classes={classes}
          />
          <TextFields
            name='date'
            label='Fecha mes/dia/año'
            value={newOperation.date}
            onChange={handleChange}
            classes={classes}
          />
        </Paper>
        <Paper className={classes.amountDate}>
          <FormsControl
            label='Categoria'
            value={newOperation.category}
            name='category'
            handleChange={handleChange}
            items={categories}
          />
        </Paper>
        <Paper className={classes.amountDate}>
          <FormsControl
            label='Status'
            value={newOperation.status}
            name='status'
            handleChange={handleChange}
            items={status}
          />
        </Paper>
        <Paper className={classes.description}>
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
        </Paper>
        <Button
          className={classes.orderHeader}
          onClick={() => updateOperation(newOperation)}
        >
          ACEPT
        </Button>
      </Paper>
    </Modal>
  )
}
