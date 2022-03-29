import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import { mapDispatchToProps, mapStateToProps } from './reduxConnection'
import { Statements } from './statement'
import { SettingsForm } from '../../components/settings/settingsForm'
import { Styles } from '../../styles/settingsStyles'

const SettingsPage = ({ userData, updateUser }) => {
  const classes = Styles()
  const {
    formValues,
    setFormValues,
    handleChange,
    showNewPassword,
    handleShowNewPassword
  } = Statements()

  useEffect(() => {
    setFormValues(prevState => ({
      ...prevState,
      _id: userData.user._id,
      email: userData.user.email,
      firstname: userData.user.firstname,
      lastname: userData.user.lastname
    }))
  }, [userData])

  return (
    <Grid container className={classes.mainGrid}>
      <SettingsForm
        userData={userData}
        formValues={formValues}
        handleChange={handleChange}
        showNewPassword={showNewPassword}
        handleShowNewPassword={handleShowNewPassword}
        updateUser={updateUser}
        classes={classes}
      />
    </Grid>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
