import React, { useState } from 'react'
import {
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'

export const DeleteAlert = ({ open, closeAlert, onClick, classes }) => {
  return (
    <Paper>
      <Dialog
        open={open}
        onClose={closeAlert}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Eliminar Operación</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            ¿Deseas eliminar tu operación?, si la eliminas no podrás
            recuperarla.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAlert} className={classes.buttonPost}>
            Cancelar
          </Button>
          <Button onClick={onClick} className={classes.acceptButton}>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  )
}
