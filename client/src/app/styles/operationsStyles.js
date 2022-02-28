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
  },
  controlsContainer: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  controls: {
    height: '70%',
    width: '70%',
    backgroundColor: '#F1E0AC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  order: {
    marginTop: '25px',
    width: '80%',
    height: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  orderHeader: {
    backgroundColor: '#203239',
    color: '#B8405E',
    fontWeight: 'bolder',
    width: '100%',
    textAlign: 'center'
  },
  orderButtons: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '80%',
    height: '70%',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px'
  },
  buttonRecent: {
    width: '30%',
    height: '80%',
    backgroundColor: '#2EB086'
  },
  buttonOldest: {
    width: '30%',
    height: '80%',
    backgroundColor: '#B8405E'
  },
  oldest: {
    transform: 'rotate(180deg)'
  },
  buttonAll: {
    width: '5%',
    height: '80%',
    backgroundColor: '#313552'
  },
  buttonIncomes: {
    width: '5%',
    height: '80%',
    backgroundColor: '#2EB086'
  },
  buttonExpenditures: {
    width: '5%',
    height: '80%',
    backgroundColor: '#B8405E'
  }
})
