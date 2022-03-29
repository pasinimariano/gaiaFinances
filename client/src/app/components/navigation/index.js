import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Hidden } from '@material-ui/core'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import HomeIcon from '@material-ui/icons/Home'
import AppsIcon from '@material-ui/icons/Apps'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { LinkNavigation } from './modules/linkNavigation'
import { Styles } from '../../styles/navBarStyles'
import { logOut } from '../../../redux/actions/actionsUsers'

const Navigation = () => {
  const classes = Styles()
  const navigate = useLocation()
  const [route, setRoute] = useState('/dashboard')

  useEffect(() => {
    setRoute(navigate.pathname)
  }, [navigate])

  return (
    <Grid container className={classes.navContainer}>
      <Hidden mdDown>
        <Grid item lg={4} />
      </Hidden>
      <Grid item xs={11} md={8} lg={4}>
        <BottomNavigation className={classes.mainRoutes}>
          <LinkNavigation
            to='/dashboard'
            label='Dashboard'
            icon={<HomeIcon />}
            route={route}
            classes={
              route === '/dashboard' ? classes.selected : classes.noSelected
            }
          />
          <LinkNavigation
            to='/operations'
            label='Operations'
            icon={<AppsIcon />}
            route={route}
            classes={
              route === '/operations' ? classes.selected : classes.noSelected
            }
          />
          <LinkNavigation
            to='/settings'
            label='Settings'
            icon={<SettingsIcon />}
            route={route}
            classes={
              route === '/settings' ? classes.selected : classes.noSelected
            }
          />
        </BottomNavigation>
      </Grid>
      <Grid item xs={1} md={2} lg={4} className={classes.logOut}>
        <Link to='/'>
          <ExitToAppIcon className={classes.logOutIcon} />
        </Link>
      </Grid>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(null, mapDispatchToProps)(Navigation)
