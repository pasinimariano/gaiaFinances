import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import { Statements } from './statement'
import { mapStateToProps, mapDispatchToProps } from './reduxConnection'
import { CreateForm } from '../../components/home/createForm'
import { LoginForm } from '../../components/home/loginForm'
import { Styles } from '../../styles/homeStyles'

const HomePage = ({
  loginUser,
  deleteUser,
  isLogging,
  userState,
  logginState
}) => {
  const classes = Styles()

  const {
    form,
    setForm,
    formValues,
    handleChange,
    createUser,
    backResponse
  } = Statements()

  useEffect(() => {
    deleteUser()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12} lg={4}>
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
              loginUser={loginUser}
              deleteUser={deleteUser}
              isLogging={isLogging}
              userState={userState}
              logginState={logginState}
              classes={classes}
            />
          )}
        </Grid>
        <Hidden mdDown>
          <Grid item lg={8} className={classes.imgContainer} />
        </Hidden>
      </Grid>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
