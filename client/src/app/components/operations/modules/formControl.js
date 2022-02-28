import React from 'react'
import { TextField } from '@material-ui/core'

export const FormsControl = ({ label, name, value, handleChange, items }) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      onChange={handleChange}
      value={value}
      select
      SelectProps={{ native: true }}
    >
      {items &&
        items.map(item => (
          <option key={item._id} value={item.name}>
            {item.name}
          </option>
        ))}
    </TextField>
  )
}
