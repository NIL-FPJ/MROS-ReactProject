

import React, {Component} from 'react'
import './index.scss'

import MyTable from '../../MyTable'

class Reserve extends Component {
  constructor (props) {
    super(props) 
    this.state={}
  }
  render () {
    return (
      <div className = "app-reserve">
      <MyTable/>
      </div>
    )
  }

}

export default Reserve