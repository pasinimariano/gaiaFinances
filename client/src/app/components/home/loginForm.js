import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const LoginForm = ({ setForm, formValues, handleChange, classes }) => {
  return (
    <Grid container>
      <Paper className={classes.formLayout} elevation={0}>
        <text>LOGO</text>
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
        <Button>Iniciar sesión</Button>
      </Paper>
    </Grid>
  )
}
