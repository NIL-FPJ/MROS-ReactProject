
import React, { Component } from 'react'
import { Table } from 'antd';
import './index.scss'

const columns = [{
  title: '预定时间',
  dataIndex: 'name',
  width: 150,
  align: 'center'
}, {
  title: '事由',
  dataIndex: 'reasons',
  width: 150,
  align: 'center'
}, {
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
},{
  title: '容量',
  dataIndex: 'capacity',
  width: 150,
  align: 'center'
},{
  title: '开始时间',
  dataIndex: 'star_time',
  width: 150,
  align: 'center'
},{
  title: '结束时间',
  dataIndex: 'star_time',
  width: 150,
  align: 'center'
},{
  title: '状态',
  dataIndex: 'status',
  width: 150,
  align: 'center'
},{
  title: '批复',
  dataIndex: 'reply',
  width: 150,
  align: 'center'
},{
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


class MyTable extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  };

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
      <div>
        <div style={{ marginBottom: 10 }}>
          {/* <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button> */}
          {/* <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span> */}
        </div>
        <Table title={() => '我的预定'} columns={columns} dataSource={data}  pagination={false} scroll={{ y: 240 }} />
      </div>
    );
  }
}

export default MyTable
