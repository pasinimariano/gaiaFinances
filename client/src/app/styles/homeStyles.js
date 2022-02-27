import { makeStyles } from '@material-ui/core'

export const Styles = makeStyles({
  root: {
    height: '100%'
  },
  formLayout: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  imgContainer: {
    backgroundImage:
      'url(https://c4.wallpaperflare.com/wallpaper/288/295/817/smartphone-iphone-macbook-wallpaper-preview.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
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
    marginBottom: '25px',
    width: '70%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  createButton: {
    backgroundColor: '#30475E'
  }
})
