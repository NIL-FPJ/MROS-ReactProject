

import React, {Component} from 'react'
import './index.scss'

import Filter from './Filter'
import Table from './Table'


class MeetingRoomManage extends Component {
  constructor (props) {
    super(props) 
    this.state={}
  }
  render () {
    return (
      <div className = "MeetingRoomManage">
        <Filter/>
        <Table/>
      </div>
    )
  }

}

export default MeetingRoomManage