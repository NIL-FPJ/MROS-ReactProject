

import React, {Component} from 'react'
import './index.scss'

import MyTable from '../../MyTable'

class Apply extends Component {
  constructor (props) {
    super(props) 
    this.state={}
  }
  render () {
    return (
      <div className = "app-apply">
      <MyTable/>
      </div>
    )
  }

}

export default Apply