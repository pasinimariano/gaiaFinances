import { makeStyles } from '@material-ui/core'

export const Styles = makeStyles({
  logoContainer: {
    height: '6vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  dashboard: {
    width: '100vw',
    height: '88vh'
  },
  allOperations: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: '20%',
    display: 'flex'
  },
  graphContainer: {
    height: '60%'
  },
  dataContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  data: {
    fontSize: '45px',
    fontWeight: 'bolder'
  },
  incomes: {
    height: '75%',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2EB086'
  },
  expenditures: {
    height: '75%',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8405E'
  },
  balance: {
    height: '75%',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#313552'
  }
})
