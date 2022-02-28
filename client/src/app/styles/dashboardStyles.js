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
    width: '100%',
    height: '20%',
    display: 'flex'
  },
  tableContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  tableTitle: {
    fontSize: '22px',
    margin: '10px'
  },
  graphContainer: {
    height: '48%',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: '50px'
  },
  operationData: {
    display: 'flex',
    justifyContent: 'center'
  },
  dataContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
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
  },
  table: {
    backgroundColor: '#F1E0AC',
    width: '92%',
    marginBottom: '10px'
  },
  tableHeaders: {
    backgroundColor: '#203239'
  },
  header: {
    color: '#B8405E',
    fontWeight: 'bolder'
  }
})
