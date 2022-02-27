import React from 'react'
import Button from '@material-ui/core/Button'

export const Buttons = ({
  buttonOne,
  labelOne,
  buttonTwo,
  labelTwo,
  errorHandler,
  classes
}) => {
  return (
    <>
      <div className={classes.buttonsContainer}>
        <Button color='secondary' onClick={buttonOne}>
          {labelOne}
        </Button>
        <Button
          onClick={buttonTwo}
          variant='outlined'
          color='secondary'
          className={classes.createButton}
        >
          {labelTwo}
        </Button>
      </div>
      <div className={classes.error}>{errorHandler}</div>
    </>
  )
}
