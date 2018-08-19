

import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import TableRight from './TableRight'
import TableLeft from './TableLeft'

import './index.scss'

class RegionalManage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="RegionalManage">
        <Row>
          <Col span={16}>
            <TableLeft />
          </Col>
          
          <Col span={8}>
            <TableRight />
          </Col>
        </Row>
      </div>
    )
  }

}

export default RegionalManage