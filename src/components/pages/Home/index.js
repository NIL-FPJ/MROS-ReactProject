
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

import { Icon } from 'antd'

class Home extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="app-home">
        <div className="rules">
          <h2><Icon type="exception" />会议室预定规则</h2>
          <p>1. 最多允许提前 3 周（21天）预定；</p>
          <p>2. 每人在 3 周之内最多可预定 5 次，超过 5 次无法继续预定；</p>
          <p>3. 非开放预定会议室，需要先在【预定会议室】中提交预定申请，管理员在后台审批通过后，预定才能生效；</p>
          <p>4. 单次预定超过 3 个小时，需要先在【预定会议室】中提交预定申请，管理员在后台审批后，预定才能生效；</p>
          <p style={{ color: 'red' }}>5. 超过 15 分钟未按时间到达预定会议室，视为放弃使用，其他用户有权抢占；</p>
          <div className="select">
            <NavLink to={ '/reserve_metting_room' }><Icon type="plus-square" />预定会议室</NavLink>
            <NavLink to={ '/my_reserve' }><Icon type="check-square" />我的预定</NavLink>
          </div>
        </div>

      </div>
    )
  }

}

export default Home