
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import App from '../App'

// 页面组件
import Home from '../components/pages/Home'
import Login from '../components/pages/Login'
import Admin from '../Admin'

// 全局路由
class _Router extends Component {
  render () {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/login" component = { Login }/>
            <Route path="/" render = {()=>(
              <Admin>
                
              </Admin>
            )}/>
          </Switch>
        </App>
      </Router>
    )
  }
}

export default _Router


