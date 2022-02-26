import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { useLocation } from 'react-router-dom'

import { RoutesWeb } from './routesWeb'
import { Navigation } from './components/navigation/'
import { Styles } from './styles/appStyles'
import './styles/main.css'

export const App = () => {
  const classes = Styles()
  const location = useLocation().pathname

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.navigation} elevation={0} />
      <Paper className={classes.layout} elevation={0}>
        <RoutesWeb />
      </Paper>
      <Paper className={classes.navigation} elevation={0}>
        {location !== '/' ? <Navigation /> : null}
      </Paper>
    </Grid>
  )
}
