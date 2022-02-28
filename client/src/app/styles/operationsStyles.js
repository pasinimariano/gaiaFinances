import { makeStyles } from '@material-ui/core'

export const Styles = makeStyles({
  userContainer: {
    height: '6vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  tableContainer: {
    background: 'rgba(0,0,0,0)',
    width: '100%',
    height: '88vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  table: {
    width: '90%',
    height: '80%',
    backgroundColor: '#F1E0AC',
    display: 'flex',
    justifyContent: 'center'
  },
  tableHeaders: {
    backgroundColor: '#203239'
  },
  header: {
    color: '#B8405E',
    fontWeight: 'bolder'
  },
  tableBody: {
    height: '83% '
  },
  paginationContainer: {
    width: '100%',
    marginRight: 0,
    marginTop: '15px'
  },
  gridCount: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  count: {
    fontWeight: 'bolder'
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
