import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'


const store = createStore({}, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

if (__DEBUG__) {
  if (window.devToolsExtension) {
    // window.devToolsExtension.open()
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
debugger
  ReactDOM.render(

      <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={AppContainer}>
          <Route path='/:page' component={AppContainer} />
        </Route>
      </Router>
    </Provider>,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // module.hot.accept('store/reducers', () => {
    //   setTimeout(() => {
    //     ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    //     render()
    //   })
    // })
  }
}

render()
