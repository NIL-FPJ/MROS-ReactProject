

import React, {Component} from 'react'
import './index.scss'

import SpecialApply from './SpecialApply'
import Calendar from '../../Calendar'

class ReserveApproval extends Component {
  constructor (props) {
    super(props) 
    this.state={}
  }
  render () {
    return (
      <div className = "ReserveApproval">
        <SpecialApply/>
        <hr/>
          预定日历一览表
        <hr/>
        <Calendar/>
      </div>
    )
  }

}

export default ReserveApproval