

import React, {Component} from 'react'
import TableConfig from './TableConfig'

import './index.scss'

class SETUP extends Component {
  constructor (props) {
    super(props) 
    this.state={}
  }
  render () {
    return (
      <div className = "SETUP">
        <TableConfig/>
      </div>
    )
  }

}

export default SETUP