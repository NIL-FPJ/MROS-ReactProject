
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import App from '../App'
import Home from '../components/pages/Home'

// 内容区
import MeetingRoomManage from '../components/pages/MeetingRoomManage'
import MyReserve from '../components/pages/MyReserve'
import RegionalManage from '../components/pages/RegionalManage'
import ReserveApproval from '../components/pages/ReserveApproval'
import ReserveManage from '../components/pages/ReserveManage'
import ReserveMeetingRoom from '../components/pages/ReserveMeetingRoom'
import SETUP from '../components/pages/SETUP'

// 页面组件
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
                <Switch>
                  <Route path="/"  exact component = { Home }/>
                  <Route path="/meeting_room_manage" component = { MeetingRoomManage }/>
                  <Route path="/my_reserve" component = { MyReserve }/>
                  <Route path="/regional_manage" component = { RegionalManage }/>
                  <Route path="/reserve_approval" component = { ReserveApproval }/>
                  <Route path="/reserve_manage" component = { ReserveManage }/>
                  <Route path="/reserve_metting_room" component = { ReserveMeetingRoom }/>
                  <Route path="/setup" component = { SETUP }/>
                </Switch>
              </Admin>
            )}/>
          </Switch>
        </App>
      </Router>
    )
  }
}

export default _Router


