import React from 'react'
import Grid from '@material-ui/core/Grid'

import { Statements } from './statement'
import { CreateForm } from '../components/home/createForm'
import { LoginForm } from '../components/home/loginForm'
import { Styles } from '../styles/homeStyles'

export const HomePage = () => {
  const classes = Styles()
  const {
    form,
    setForm,
    formValues,
    handleChange,
    createUser,
    backResponse
  } = Statements()
  console.log(backResponse)
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid lg={4}>
          {form === 'create' ? (
            <CreateForm
              setForm={setForm}
              formValues={formValues}
              handleChange={handleChange}
              createUser={createUser}
              backResponse={backResponse}
              classes={classes}
            />
          ) : (
            <LoginForm
              setForm={setForm}
              formValues={formValues}
              handleChange={handleChange}
              classes={classes}
            />
          )}
        </Grid>
        <Grid lg={8}> IMG</Grid>
      </Grid>
    </div>
  )
}
