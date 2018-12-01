
// 页面中的主要组件，
import React, { Component } from 'react'
import { Layout, Breadcrumb, Icon, Button } from 'antd';
import { Link } from 'react-router-dom'
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
      <Layout style={{ paddingLeft: 200 }}>
        <Sider
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
          // collapsible // 收缩左边菜单
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        // theme="light"
        >
          <div className="logo">会议室预定系统</div>
          <LeftNav getClickTitle={this.getClickTitle} menu_list={this.props.commons.menu_list}></LeftNav>
        </Sider>
        <Layout>
          <Header style={{ borderBottom: '2px solid #1890ff', background: '#fff', padding: 0, position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="hearderSelect" >
              欢迎 ：
              <Button><Icon style={{ color: '#58bc58', fontWeight: 'bold' }} type={'user'} /> 17620138083 / 管理员</Button>
              <Link to={'/login'}><Icon type="logout" />退出</Link>
            </div>

            <Breadcrumb style={{ padding: '20px 15px', height: '100%' }}>
              <Breadcrumb.Item>{this.state.clickTitle} /</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content style={{ margin: '74px 14px 38px', overflow: 'initial' }}>
            <div style={{ background: '#fff', minHeight: 625 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', position: 'fixed', zIndex: 1, bottom: 0 }}>
            Ant Design ©2018 Created by Ant UED, ReBuild Auto: FPJ
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(Admin, 'commons')


