

import React, {Component} from 'react'
import './index.scss'

import DatePicker from '../../DatePicker'
import Table from '../../Table'
import Filter from '../../Filter'

class ReserveMeetingRoom extends Component {
  constructor (props) {
    super(props) 
    this.state={}
  }
  render () {
    return (
      <div className = "ReserveMeetingRoom">
        {/* <DatePicker></DatePicker> */}
        <Filter/>
        <Table></Table>
      </div>
    )
  }

}

export default ReserveMeetingRoom