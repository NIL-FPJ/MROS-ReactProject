
import React, { Component } from 'react'
import { Spin } from 'antd';

import './index.scss'

class Loading extends Component {
  render() {
    let { isloading } = this.props
    return (
      <div style = {{ display: isloading? 'block':'none'}} className="app-loding">
        <Spin tip="加载中……" size="large"></Spin>
      </div>
    )
  }
}

export default Loading