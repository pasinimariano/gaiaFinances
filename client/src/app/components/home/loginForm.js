import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { TextFields } from './components/textFields'
import { Buttons } from './components/buttons'

export const LoginForm = ({
  setForm,
  formValues,
  handleChange,
  loginUser,
  deleteUser,
  userState,
  classes
}) => {
  useEffect(() => {
    deleteUser()
  }, [])

  return (
    <Grid container>
      <Paper className={classes.formLayout} elevation={0}>
        <h1>¡Bienvenid@ nuevamente a Gaia Finances! </h1>
        <h3> Tus finanzas te esperan a un solo click </h3>
        <TextFields
          name='email'
          label='Email'
          value={formValues.email}
          onChange={handleChange}
          classes={classes}
          errorHandler={userState && userState.email}
        />
        <TextFields
          name='password'
          label='Password'
          value={formValues.password}
          onChange={handleChange}
          classes={classes}
          errorHandler={userState && userState.password}
        />
        <Buttons
          buttonOne={() => setForm('create')}
          labelOne='No tengo cuenta'
          buttonTwo={() => loginUser(formValues.email, formValues.password)}
          labelTwo='Iniciar sesión'
          errorHandler={(userState && userState.nonexist) || userState.error}
          classes={classes}
        />
      </Paper>
    </Grid>
  )
}
