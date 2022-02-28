import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import HomeIcon from '@material-ui/icons/Home'
import AppsIcon from '@material-ui/icons/Apps'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import { LinkNavigation } from './modules/linkNavigation'

import { Styles } from '../../styles/navBarStyles'

export const Navigation = () => {
  const classes = Styles()
  const navigate = useLocation()
  const [route, setRoute] = useState('/dashboard')

  useEffect(() => {
    setRoute(navigate.pathname)
  }, [navigate])

  return (
    <Grid container>
      <BottomNavigation className={classes.navContainer}>
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
          to='/contact'
          label='Contact'
          icon={<EmojiPeopleIcon />}
          route={route}
          classes={route === '/contact' ? classes.selected : classes.noSelected}
        />
      </BottomNavigation>
    </Grid>
  )
}
