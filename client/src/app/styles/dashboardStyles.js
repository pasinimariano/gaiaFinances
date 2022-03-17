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
    height: '100%',
    marginBottom: '10px',
    marginTop: '20px'
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
    alignItems: 'center',
    marginTop: '25px'
  },
  tableTitle: {
    fontSize: '22px',
    margin: '10px'
  },
  graphContainer: {
    height: '40%',
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
  },
  userTable: {
    backgroundColor: '#F1E0AC',
    height: '97%',
    width: '95%'
  },
  userTableHeader: {
    backgroundColor: '#203239',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '7%'
  },
  avatar: {
    backgroundColor: '#B8405E',
    fontWeight: 'bolder',
    color: '#203239'
  },
  progressBar: {
    width: '80%',
    height: '3%',
    marginLeft: '10%'
  },
  roundedChartContainer: {
    marginTop: '40px',
    backgroundColor: 'rgba(0,0,0,0)',
    height: '35%',
    display: 'flex',
    alignItems: 'center'
  },
  radialChartContainer: {
    marginTop: '40px',
    backgroundColor: 'rgba(0,0,0,0)',
    height: '25%',
    display: 'flex',
    alignItems: 'center'
  }
})
