import { makeStyles } from '@material-ui/core'

export const Styles = makeStyles({
  mainGrid: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: '94vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    backgroundColor: '#F1E0AC',
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    backgroundColor: '#203239',
    width: '100%',
    height: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  },
  header: {
    color: '#B8405E',
    fontWeight: 'bolder'
  },
  bodyContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '80%',
    height: '95%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  field: {
    width: '100%',
    margin: '10px'
  },
  newpasswordPaper: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    display: 'flex',
    margin: '10px'
  },
  deleteButton: {
    marginTop: '10px'
  },
  delete: {
    color: 'gray',
    '&:hover': {
      color: '#B8405E',
      fontWeight: 'bolder'
    }
  }
})
