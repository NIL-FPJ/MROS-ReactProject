
// 页面中的主要组件，
import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';
import LeftNav from './components/LeftNav'

import connect from './modules/connect'

const { Header, Content, Footer, Sider } = Layout;

class Admin extends Component {
  constructor(props) {
    super(props)
    this.getClickTitle = this.getClickTitle.bind(this)
  }
  state = {
    collapsed: false,
    clickTitle: null
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  componentWillMount() {
    // 获取菜单数据
    let { commons_actions } = this.props
    if (commons_actions.get_menu_list) {
      commons_actions.get_menu_list()
    }
  }

  getClickTitle(title) {
    this.setState({ clickTitle: title })
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        // theme="light"
        >
          <div className="logo">会议室预定系统</div>
          <LeftNav getClickTitle={this.getClickTitle} menu_list={this.props.commons.menu_list}></LeftNav>
        </Sider>
        <Layout>
          <Header style={{ borderBottom: '2px solid #1890ff', background: '#fff', padding: 0 }}>
            <Breadcrumb style={{ padding: '20px 15px', height: '100%' }}>
              <Breadcrumb.Item>{this.state.clickTitle} /</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content style={{ margin: '14px 14px 0 14px' }}>
            <div style={{ padding: 14, background: '#fff', minHeight: 615 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(Admin, 'commons')


