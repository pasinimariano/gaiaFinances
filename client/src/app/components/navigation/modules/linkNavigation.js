import React from 'react'
import { Link } from 'react-router-dom'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

export const LinkNavigation = ({ to, label, icon, classes }) => {
  return (
    <Link to={to}>
      <BottomNavigationAction label={label} icon={icon} className={classes} />
    </Link>
  )
}
