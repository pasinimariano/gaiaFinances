import { makeStyles } from '@material-ui/core'

export const Styles = makeStyles({
  mainContainer: {
    height: '93vh',
    marginTop: '5px'
  },
  tableContainer: {
    background: 'rgba(0,0,0,0)',
    width: '100%',
    height: '88vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  table: {
    width: '95%',
    height: '80%',
    backgroundColor: '#F1E0AC',
    display: 'flex',
    flexDirection: 'column'
  },
  tableHeaders: {
    backgroundColor: '#203239'
  },
  header: {
    color: '#B8405E',
    fontWeight: 'bolder'
  },
  tableBody: {
    height: '58vh'
  },
  paginationContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    height: '10vh',
    display: 'flex',
    justifyContent: 'center'
  },
  paginationGrid: {
    width: '50%'
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
    height: '8%',
    width: '95%',
    backgroundColor: '#F1E0AC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '40px'
  },
  orderBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
  },
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  newOperationBodyContainer: {
    height: '85%'
  },
  newOperation: {
    backgroundColor: '#F1E0AC',
    height: '60%',
    width: '450px',
    display: 'flex',
    flexDirection: 'column'
  },
  newOperationContainer: {
    marginTop: '25px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  newOperationTop: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  formsControlContainer: {
    width: '100%',
    marginTop: '25px'
  },
  descriptionContainer: {
    width: '100%',
    marginTop: '25px',
    height: '12vh',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonPostContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonPost: {
    backgroundColor: '#203239',
    color: '#B8405E',
    fontWeight: 'bolder',
    width: '30%',
    textAlign: 'center'
  },
  errors: {
    color: 'red',
    display: 'flex',
    justifyContent: 'center'
  },
  description: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: '25px',
    marginBottom: '50px'
  },
  deleteButton: {
    width: '10%'
  },
  acceptButton: {
    color: 'grey',
    '&:hover': {
      color: '#B8405E',
      fontWeight: 'bolder'
    }
  }
})
