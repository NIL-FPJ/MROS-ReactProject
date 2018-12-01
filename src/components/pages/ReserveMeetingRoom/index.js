

import React, { Component } from 'react'
import connect from '../../../modules/connect'

// import DatePicker from '../../DatePicker'
import Table from '../../Table'
import Filter from '../../Filter'
import DialodBox from '../../dialog_box'

import './index.scss'

class ReserveMeetingRoom extends Component {
  constructor(props) {
    super(props)
    this.getReserveData = this.getReserveData.bind(this)
  }

  state = {
    meeting_room_data: null,
    reserve_data: '{}'
  }

  componentWillMount() {
    // 获取全部会议室数据
    let { get_meeting_room_data } = this.props.commons_actions
    // 发送ajax 请求
    get_meeting_room_data({
      city: '北京',
      success: (data) => {
        this.setState({ meeting_room_data: data })
      },
      fail: (err) => {
        console.log(err)
      }
    })

    // 获取预定信息

  }

  // 优化性能，避免重复渲染
  shouldComponentUpdate(_, nextState) {
    if (this.state === nextState) return false
    return true
  }

  // 获取最新预定信息
  getReserveData(data) {
    let obj = { ...data }
    console.log('99', obj)
  }

  
  render() {
    return (
      <div className="ReserveMeetingRoom">
        <div></div>
        <Filter />
        <Table getReserveData={this.getReserveData} meeting_room_data={this.state.meeting_room_data}></Table>
        <DialodBox getReserveData={this.getReserveData} />
      </div>
    )
  }

}

export default connect(ReserveMeetingRoom, 'commons') // 这里由于挂载了store，导致render多次