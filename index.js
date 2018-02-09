import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home'


import Mysql1 from './pages/Mysql1'



render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>



      <Route path="/mysql1" component={Mysql1}/>
    </Route>
  </Router>
), document.getElementById('app'))
