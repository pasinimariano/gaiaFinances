import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const CreateForm = ({
  setForm,
  createUser,
  formValues,
  handleChange,
  backResponse,
  classes
}) => {
  useEffect(() => {
    backResponse.hasOwnProperty('message') ? setForm('login') : null
  }, [backResponse])

  return (
    <Grid container>
      <Paper className={classes.formLayout} elevation={0}>
        <h1>¡Bienvenid@ a Gaia Finances!</h1>
        <h3> Gestiona todos tus gastos en una sola app</h3>
        <TextField
          name='email'
          label='Email'
          variant='outlined'
          color='primary'
          required
          value={formValues.email}
          onChange={handleChange}
          className={classes.field}
        />
        <div className={classes.error}>
          {backResponse && backResponse.email}
        </div>
        <TextField
          name='firstname'
          label='Nombre'
          variant='outlined'
          color='primary'
          required
          value={formValues.firstname}
          onChange={handleChange}
          className={classes.field}
        />
        <div className={classes.error}>
          {backResponse && backResponse.firstname}
        </div>
        <TextField
          name='lastname'
          label='Apellido'
          variant='outlined'
          color='primary'
          required
          value={formValues.lastname}
          onChange={handleChange}
          className={classes.field}
        />
        <div className={classes.error}>
          {backResponse && backResponse.lastname}
        </div>
        <TextField
          name='password'
          label='Password'
          variant='outlined'
          color='primary'
          required
          value={formValues.password}
          onChange={handleChange}
          className={classes.field}
        />
        <div className={classes.error}>
          {backResponse && backResponse.password}
        </div>
        <div className={classes.buttonsContainer}>
          <Button
            onClick={() => createUser(formValues)}
            variant='outlined'
            color='secondary'
            className={classes.createButton}
          >
            Crear cuenta
          </Button>
          <Button color='secondary' onClick={() => setForm('login')}>
            Ya tengo cuenta
          </Button>
        </div>
      </Paper>
      <div>{backResponse && Object.keys(backResponse) !== 'message'}</div>
    </Grid>
  )
}
