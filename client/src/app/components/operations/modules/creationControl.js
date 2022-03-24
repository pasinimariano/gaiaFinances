import React from 'react'
import { Grid, Typography, Paper, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export const CreationControl = ({ classes, header, onClick }) => {
  return (
    <Grid item xs={6} md={2} className={classes.orderBox}>
      <Typography className={classes.orderHeader}>{header}</Typography>
      <Paper className={classes.orderButtons} elevation={0}>
        <Button className={classes.buttonAll} onClick={onClick}>
          <AddIcon />
        </Button>
      </Paper>
    </Grid>
  )
}
