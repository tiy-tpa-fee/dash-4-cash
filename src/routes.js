import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Profile from './components/Profile'
import Group from './components/Group'
import MyGroups from './components/MyGroups'
import Help from './components/Help'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='profile' component={Profile} />
      <Route path='mygroups' component={MyGroups} />
      <Route path='mygroups/:slug' component={Group} />
      <Route path='help' component={Help} />
    </Route>
  </Router>
)

export default routes
