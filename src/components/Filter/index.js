
import React, { Component } from 'react'
import './index.scss'
import { Row, Col, InputNumber, Checkbox, Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}


class Filter extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="app-filter">
        <Row type="flex" justify="start">
          <Col span={5}>区域：
          <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Col>
          <Col span={4}>楼号：
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
          <Col span={4}>层：
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select></Col>
          <Col span={4}>会议室编号：
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select></Col>
          <Col span={5}>容量：<InputNumber min={0} max={10} defaultValue={0} />~<InputNumber min={0} max={10} defaultValue={10} /></Col>
          <Col span={2}>多媒体：<Checkbox /></Col>
        </Row>
      </div>
    )
  }

}

export default Filter
