import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'

export const TextFields = ({
  name,
  label,
  value,
  onChange,
  classes,
  type,
  disabled,
  errorHandler
}) => {
  return (
    <>
      <TextField
        name={name}
        label={label}
        variant='outlined'
        color='primary'
        required
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
        className={classes.field}
      />
      <Typography className={classes.error}>{errorHandler}</Typography>
    </>
  )
}
