import React from 'react'
import { Grid, Typography, Button, Paper } from '@material-ui/core'
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
    <Paper elevation={0} className={classes.paginationContainer}>
      <Grid container className={classes.paginationGrid}>
        <Grid item xs={12} lg={6} className={classes.gridCount}>
          <Typography className={classes.count}>
            {`${indexFirstOperation + 1}  -  ${
              indexLastOperation > userOperations.length
                ? userOperations.length
                : indexLastOperation
            }  of ${userOperations.length}`}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} className={classes.pagination}>
          <Button onClick={prevPage} variant='outlined'>
            <ArrowBackIosIcon />
          </Button>
          <Button onClick={nextPage} variant='outlined'>
            <ArrowForwardIos />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}
