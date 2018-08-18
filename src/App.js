
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import connect from './modules/connect'

import Loading from './components/loading'
class App extends Component {
  // 加载效果
  state = {
    isloaging: false
  }

  componentDidMount() {
    this.$bus.on('change-loading', (bool) => {
      this.setState({ isloaging: bool })
    })
  }

  componentWillMount() {
    // 进入页面，先获取登录状态
    this.props.commons_actions.get_user_state(()=>{
      this.checkLogin(this.props)
    })
  }
  componentWillReceiveProps(props) {
    // 路由切换时
    let { pathname } = props.location
    if (pathname !== this.props.location.pathname) {
      this.checkLogin(this.props)
    }
  }

  // 验证登录状态
  checkLogin(props) {
    let { commons, history } = props
    if (props.location.pathname !== 'login' && !commons.user_state) {
      history.replace('/login')
    }
  }
  render() {
    return (
      <div className="App">
        {this.props.children}
        <Loading isloging={this.state.isloaging} />
      </div>
    );
  }
}

export default withRouter(connect(App, 'commons'));
