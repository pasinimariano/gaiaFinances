import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'

export const Pagination = ({
  nextPage,
  prevPage,
  userOperations,
  indexFirstOperation,
  indexLastOperation,
  classes
}) => {
  return (
    <Grid container className={classes.paginationContainer}>
      <Grid item lg={6} className={classes.gridCount}>
        <Typography className={classes.count}>
          {indexFirstOperation + 1} - {indexLastOperation} of
          {userOperations.operations.length}
        </Typography>
      </Grid>
      <Grid item lg={6} className={classes.pagination}>
        <Button onClick={prevPage} variant='outlined'>
          <ArrowBackIosIcon />
        </Button>
        <Button onClick={nextPage} variant='outlined'>
          <ArrowForwardIos />
        </Button>
      </Grid>
    </Grid>
  )
}
