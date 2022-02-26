import { makeStyles } from '@material-ui/core'

export const Styles = makeStyles({
  root: {
    height: '100%'
  },
  formLayout: {
    height: '88vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  field: {
    width: '70%',
    margin: '15px'
  },
  error: {
    height: '10px',
    color: 'red'
  },
  buttonsContainer: {
    marginTop: '25px',
    width: '70%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  createButton: {
    backgroundColor: '#30475E'
  }
})
