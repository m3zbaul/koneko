import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store/configureStore'
import './index.css'
import Routes from './Routes'
import * as serviceWorker from './serviceWorker'


const INITIAL_STATE = {
  auth: {
    user: null
  }
}
const store = configureStore(INITIAL_STATE)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Routes />
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
