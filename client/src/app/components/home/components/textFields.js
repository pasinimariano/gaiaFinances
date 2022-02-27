import React from 'react'
import TextField from '@material-ui/core/TextField'

export const TextFields = ({
  name,
  label,
  value,
  onChange,
  classes,
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
        className={classes.field}
      />
      <div className={classes.error}>{errorHandler}</div>
    </>
  )
}
