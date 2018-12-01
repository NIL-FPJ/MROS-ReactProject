

import React, { Component } from 'react'
import { Modal, Button, Input } from 'antd';
import DatePicker from '../DatePicker'

import './index.scss'

const { TextArea } = Input;


class DialodBox extends Component {
  constructor (props) {
    super(props) 
    this.getReson = this.getReson.bind(this)
    this.getReserveDate = this.getReserveDate.bind(this)
  }
  state = {
    loading: false,
    visible: false,
    detail_reson: '',
    reserve_date: ''
  }

  componentWillMount() {
    this.$bus.on('showModal', bool => {
      this.setState({
        visible: bool
      });
    })
  }

  componentWillUpdate(props, state) {
    let obj = {}
    obj.detail_reson = state.detail_reson
    obj.reserve_date = state.reserve_date
    props.getReserveData(obj)
  }


  handleOk = (a, b) => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1500);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  getReson(e){
    console.log(e.target.value)
    this.setState({ detail_reson: e.target.value })
  }

  getReserveDate(date){
    this.setState({ reserve_date: date })
    console.log(date)
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <div className="app-dialod-box">
        <Modal
          visible={visible}
          title="预定会议室"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
          <div className="text">当前选择会议室：大会堂</div>
          <div className="text">选择时间日期：<DatePicker getReserveDate = {this.getReserveDate}></DatePicker></div>
          <div className="text">事由描述：<TextArea  onBlur = {this.getReson}  placeholder="请说明预定的事由" autosize={{ minRows: 2, maxRows: 6 }} /></div>
          <div className="text">温馨提示：</div>
          <p>1. 最多允许提前 3 周（21天）预定；</p>
          <p>2. 每人在 3 周之内最多可预定 5 次，超过 5 次无法继续预定；</p>
          <p>3. 非开放预定会议室，需要先在【预定会议室】中提交预定申请，管理员在后台审批通过后，预定才能生效；</p>
          <p>4. 单次预定超过 3 个小时，需要先在【预定会议室】中提交预定申请，管理员在后台审批后，预定才能生效；</p>
          <p style={{ color: 'red' }}>5. 超过 15 分钟未按时间到达预定会议室，视为放弃使用，其他用户有权抢占；</p>
        </Modal>
      </div>
    )
  }

}

export default DialodBox