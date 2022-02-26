import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from './app/'
import reduxStore from './redux/store'

const { Store, Persistor } = reduxStore
//Persistor.purge()
ReactDom.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Router>
        <PersistGate persistor={Persistor}>
          <App />
        </PersistGate>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
