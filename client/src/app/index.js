import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { RoutesWeb } from './routesWeb'
import { Navigation } from './components/navigation/'
import { Styles } from './styles/appStyles'
import './styles/main.css'

const App = ({ isLoggin }) => {
  const classes = Styles()
  const location = useLocation().pathname

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.navigation} elevation={0}>
        {location !== '/' ? <Navigation /> : null}
      </Paper>
      <Paper className={classes.layout} elevation={0}>
        <RoutesWeb isLoggin={isLoggin} />
      </Paper>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    isLoggin: state.isLoggin
  }
}

export default connect(mapStateToProps, null)(App)
