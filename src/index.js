// Dependencies
import React, { Component } from 'react'

// React Router & Dom
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import ReactDOM from 'react-dom'

// Redux
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import createReducer from './reducers'

// Routes
import createRoutes from './routes'

// Styles
import './styles.scss'
import 'styles/utils/normalize.scss'

const history = createBrowserHistory()

const store = createStore(
  createReducer(history),
  compose(applyMiddleware(routerMiddleware(history)))
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div id="RocketApp">{createRoutes()}</div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

// The main `store` component of the application:
const ConnectedApp = connect(null)(App)

ReactDOM.render(<ConnectedApp store={store} />, document.getElementById('app'))
