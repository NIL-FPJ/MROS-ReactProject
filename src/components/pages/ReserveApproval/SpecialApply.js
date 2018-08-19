
import React, {Component} from 'react'
import './index.scss'

import MyTable from '../../MyTable'

class SpecialApply extends Component {
  constructor (props) {
    super(props) 
    this.state={}
  }
  render () {
    return (
      <div className = "app-special-apply">
      <MyTable/>
      </div>
    )
  }

}

export default SpecialApply