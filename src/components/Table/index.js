
import React, { Component } from 'react'
import { Table, Divider, Icon } from 'antd';
import './index.scss'


class _Table extends Component {
  // constructor(props){
  //   super(props)
  //   this.reserver = this.reserve.bind(this)
  // }
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    reserve_record:[],
    loading: false,
    meeting_room_data: [],
    columns: [{
      title: '楼号',
      dataIndex: 'build_name',
      width: 100,
      align: 'center'
    }, {
      title: '楼层',
      dataIndex: 'floor',
      width: 100,
      align: 'center'
    }, {
      title: '会议室编号',
      dataIndex: 'room_num',
      width: 150,
      align: 'center'
    }, {
      title: '名称',
      dataIndex: 'name',
      width: 150,
      align: 'center'
    }, {
      title: '容量',
      dataIndex: 'capacity',
      width: 120,
      align: 'center'
    }, {
      title: '投影',
      dataIndex: 'projector',
      width: 100,
      align: 'center'
    }, {
      title: '开放预定',
      dataIndex: 'open_reservation_c',
      width: 100,
      align: 'center'
    }, {
      title: '描述',
      dataIndex: 'des',
      width: 250,
      align: 'center'
    }, {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text, record) => {
        return (
          <span>
            <a onClick ={ this.reserve.bind(this, record) } className="ant-dropdown-link">
              <Icon type="plus-square" />预定
            </a>
            <Divider type="vertical" />
            <a className="ant-dropdown-link">
              <Icon type="picture" />照片
            </a>

          </span>
        )
      }
    }]
  };

  componentWillReceiveProps(props) {
    let arr = []
    if (props.meeting_room_data) {
      props.meeting_room_data.forEach(data => {
        for (let i = 0; i < data.rows.length; i++) {
          data.rows[i].key = data.rows[i].room_id
          arr.push(data.rows[i])
        }
      })
    }
    this.setState({ meeting_room_data: arr })
  }

  shouldComponentUpdate(_, nextState) {
    if (this.state === nextState) {
      return false
    }
    return true
  }

  // 定义方法
  reserve(record){
    this.$bus.emit('showModal', true)
    this.setState({ reserve_record: record })
  }

  componentWillUpdate(props, state){
    props.getReserveData(state.reserve_record)
  }

  render() {
    return (
      <div>
        <Table
          footer={() => '最近预定：大会堂，预定时间： 2018-8-15，具体可到【我的预定】查看'}
          title={() => '操作提示：筛选会议室之后，点击【预定】，在弹出【日历】中可直接框选时间段预定或提交申请。'}
          columns={this.state.columns} dataSource={this.state.meeting_room_data}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 350 }}
        />
      </div>
    );
  }
}

export default _Table

