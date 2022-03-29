import { makeStyles } from '@material-ui/core'

export const Styles = makeStyles({
  root: {
    display: 'flex',
    alignContent: 'flex-end',
    bottom: '0',
    position: 'fixed'
  },
  navContainer: {
    background: '#203239',
    height: '100%',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center'
  },
  mainRoutes: {
    background: '#203239'
  },
  selected: {
    color: '#B8405E'
  },
  noSelected: {
    color: '#EEE6CE'
  },
  logOut: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logOutIcon: {
    marginRight: '40px',
    color: '#EEE6CE'
  }
})
