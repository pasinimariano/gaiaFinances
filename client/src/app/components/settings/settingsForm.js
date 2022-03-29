import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import ClearIcon from '@material-ui/icons/Clear'

import { TextFields } from '../home/components/textFields'

export const SettingsForm = ({
  userData,
  formValues,
  handleChange,
  showNewPassword,
  handleShowNewPassword,
  updateUser,
  classes
}) => {
  return (
    <>
      <Grid item lg={4} />
      <Grid item lg={4} className={classes.formContainer}>
        <Paper elevation={0} className={classes.headerContainer}>
          <Typography className={classes.header}>
            {`${userData.user.firstname.toUpperCase()} aquí podrás configurar todos tus datos`}
          </Typography>
        </Paper>
        <Paper elevation={0} className={classes.bodyContainer}>
          <TextFields
            name='email'
            label='Email'
            value={formValues.email}
            onChange={handleChange}
            classes={classes}
          />
          <TextFields
            name='firstname'
            label='Nombre'
            value={formValues.firstname}
            onChange={handleChange}
            classes={classes}
          />
          <TextFields
            name='lastname'
            label='Apellido'
            value={formValues.lastname}
            onChange={handleChange}
            classes={classes}
          />
          <TextFields
            name='password'
            label='Password'
            value={formValues.password}
            onChange={handleChange}
            type='password'
            classes={classes}
          />
          <Paper elevation={0} className={classes.newpasswordPaper}>
            {showNewPassword === true ? (
              <Paper elevation={0} className={classes.newpasswordPaper}>
                <Typography className={classes.field}>
                  {`¿Deseas cambiar tu contraseña?   ---->`}
                </Typography>
                <Button onClick={() => handleShowNewPassword()}>
                  <CheckIcon />
                </Button>
              </Paper>
            ) : (
              <Paper elevation={0} className={classes.newpasswordPaper}>
                <TextFields
                  name='newpassword'
                  label='Nueva Password'
                  value={formValues.newpassword}
                  onChange={handleChange}
                  type='password'
                  disabled={showNewPassword}
                  classes={classes}
                />
                <Button onClick={() => handleShowNewPassword()}>
                  <ClearIcon />
                </Button>
              </Paper>
            )}
          </Paper>
          <Button
            className={classes.headerContainer}
            onClick={() => updateUser(formValues, userData.token)}
          >
            <Typography className={classes.header}> ACTUALIZAR </Typography>
          </Button>
          <Button className={classes.deleteButton}>
            <Typography className={classes.delete}>
              ELIMINAR MI CUENTA
            </Typography>
          </Button>
        </Paper>
      </Grid>
      <Grid item lg={4} />
    </>
  )
}
