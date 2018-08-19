
import React, { Component } from 'react'
import { Table, Button, Icon, Divider } from 'antd';
import './index.scss'

const columns = [{
  title: 'ID',
  dataIndex: 'name',
  width: 50,
  align: 'center'
}, {
  title: '区域名称',
  dataIndex: 'capacity',
  width: 100,
  align: 'center'
}, {
  title: '省/市区',
  dataIndex: 'status',
  width: 150,
  align: 'center'
}, {
  title: '地址',
  dataIndex: 'reply',
  width: 250,
  align: 'center'
}, {
  title: '操作',
  key: 'action',
  align: 'center',
  width: 150,
  render: (text, record) => (
    <span>
      <a className="ant-dropdown-link">
        删除
      </a>
      <Divider type="vertical" />
      <a className="ant-dropdown-link">
        修改
      </a>
      <Divider type="vertical" />
      <a className="ant-dropdown-link">
        添加建筑
      </a>
    </span>
  )
}];

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    name: i,
    capacity: `智慧园`,
    star_time: '2018-8-15 9:00:00',
    status: `广东省广州市天河区`,
    reply: `广东省广州市天河区珠江新城`
  });
}


class TableLeft extends Component {
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
    // const { loading, selectedRowKeys } = this.state;
    // const rowSelection = {
    //   selectedRowKeys,
    //   onChange: this.onSelectChange,
    //   type: 'radio'
    // };
    // const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className = "app-table-left">
        <Table 
        bordered
        title={() => '区域列表'} 
        columns={columns} 
        dataSource={data}
         pagination={false}/>
        <p className="btn">
        <Button><Icon type={'appstore-o'}/> 管理会议室</Button>
        <Button><Icon type={'plus-square-o'}/> 添加区域</Button>
        </p>
      </div>
    );
  }
}

export default TableLeft
