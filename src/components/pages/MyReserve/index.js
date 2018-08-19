

import React, {Component} from 'react'
import './index.scss'

import Reserve from './Reserve'
import Apply from './Apply'

class MyReserve extends Component {
  constructor (props) {
    super(props) 
    this.state={}
  }
  render () {
    return (
      <div className = "MyReserve">
      <Reserve></Reserve>
      <Apply></Apply>
      </div>
    )
  }

}

export default MyReserve