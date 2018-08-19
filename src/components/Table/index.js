
import React, { Component } from 'react'
import { Table, Button, Divider, Icon } from 'antd';
import './index.scss'

const columns = [{
  title: '楼号',
  dataIndex: 'name',
  width: 150,
  align: '楼层'
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
  align: 'center'
}, {
  title: 'Address',
  dataIndex: 'address',
  width: 150,
  align: 'center'
}, {
  title: '描述',
  dataIndex: 'detaile',
  width: 150,
  align: 'center'
}, {
  title: 'Action',
  key: 'action',
  align: 'center',
  render: (text, record) => (
    <span>
      <a className="ant-dropdown-link">
        预定
      </a>
    </span>
  )
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    detaile: `描述`
  });
}


class _Table extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
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
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      type: 'radio'
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          {/* <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span> */}
        </div>
        <Table footer={() => '最近预定：大会堂，预定时间： 2018-8-15，具体可到【我的预定】查看'} title={() => '操作提示：筛选会议室之后，点击【预定】，在弹出【日历】中可直接框选时间段预定或提交申请。'} columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 350 }} />
      </div>
    );
  }
}

export default _Table

