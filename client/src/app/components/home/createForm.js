import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { TextFields } from './components/textFields'
import { Buttons } from './components/buttons'

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
        <Typography> Gestiona todos tus gastos en una sola app</Typography>
        <TextFields
          name='email'
          label='Email'
          value={formValues.email}
          onChange={handleChange}
          classes={classes}
          errorHandler={backResponse && backResponse.email}
        />
        <TextFields
          name='firstname'
          label='Nombre'
          value={formValues.firstname}
          onChange={handleChange}
          classes={classes}
          errorHandler={backResponse && backResponse.firstname}
        />
        <TextFields
          name='lastname'
          label='Apellido'
          value={formValues.lastname}
          onChange={handleChange}
          classes={classes}
          errorHandler={backResponse && backResponse.lastname}
        />
        <TextFields
          name='password'
          label='Password'
          value={formValues.password}
          onChange={handleChange}
          type='password'
          classes={classes}
          errorHandler={backResponse && backResponse.password}
        />
        <Buttons
          buttonOne={() => setForm('login')}
          labelOne='Ya tengo cuenta'
          buttonTwo={() => createUser(formValues)}
          labelTwo='Crear cuenta'
          errorHandler={backResponse && backResponse.error}
          classes={classes}
        />
      </Paper>
    </Grid>
  )
}
