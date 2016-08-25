import React  from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './components/app.jsx'
import Home from './components/home.jsx'
import DragAround from './components/drag_around.jsx'

// Redux Setup
const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(hashHistory, store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="dnd" component={DragAround} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
)
