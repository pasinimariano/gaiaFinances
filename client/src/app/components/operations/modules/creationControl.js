import React from 'react'
import { Grid, Typography, Paper, Button } from '@material-ui/core'

export const CreationControl = ({ classes, header, icon, onClick }) => {
  return (
    <Grid item xs={6} md={2} className={classes.orderBox}>
      <Typography className={classes.orderHeader}>{header}</Typography>
      <Paper className={classes.orderButtons} elevation={0}>
        <Button className={classes.buttonAll} onClick={onClick}>
          {icon}
        </Button>
      </Paper>
    </Grid>
  )
}
