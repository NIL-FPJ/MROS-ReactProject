
import React, { Component } from 'react'
import { Table, Button } from 'antd';
import './index.scss'

const columns = [{
  title: '楼号',
  dataIndex: 'build_name',
  width: 150,
  align: 'center'
}, {
  title: '层',
  dataIndex: 'floor',
  width: 150,
  align: 'center'
}, {
  title: '会议室名称',
  dataIndex: 'name',
  width: 150,
  align: 'center'
}, {
  title: '操作',
  key: 'action',
  align: 'center',
  width: 100,
  render: (text, record) => (
    <span>
      <a className="ant-dropdown-link">
        取消预定
      </a>
    </span>
  )
}];

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    reasons: i,
    build_name: 'a座',
    floor: 3,
    name: `大会堂`,
    capacity: 666,
    star_time: '2018-8-15 9:00:00',
    status: `未通过`,
    reply: `正在审批`
  });
}


class TableRight extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  };

  // 从后端获取会议室数据
  componentWillMount() {
    this.$http.ajax({
      url: "http://localhost:3003/user/20002",
      method: "PATCH",
      params: {
        "username": "方培杰1993"
      }
    }).then(data => {
      console.log(data)
    })
  }

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    return (
      <div>
        <Table 
        bordered
        title={() =>'[智慧园]建筑一览表'} 
        columns={columns} 
        dataSource={data} 
        pagination={false}/>
      </div>
    );
  }
}

export default TableRight
