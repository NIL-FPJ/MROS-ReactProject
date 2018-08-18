

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'
import { Menu, Icon } from 'antd'

class LeftNav extends Component {
  constructor(props) {
    super(props)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  state = {
    menu_list: null
  }

  componentWillReceiveProps(props) {
    if (props.menu_list) {
      this.setState({ menu_list: props.menu_list })
    }
  }

  handleMenuClick({ item, key, keypath }) {
    this.props.history.push(key)
    this.props.getClickTitle(item.props.title)
  }

  renderMenu() {
    let { menu_list } = this.state
    if (!menu_list) return ''
    return <Menu
      onClick={this.handleMenuClick}
      theme="dark"
      selectedKeys={[this.props.location.pathname]}
      mode="inline"
    >
      {
        menu_list.map(menu => {
          return (
            <Menu.Item key={menu.path} title= {menu.title}>
              <Icon type="pie-chart" />
              <span  >{menu.title}</span>
            </Menu.Item>
          )
        })
      }
    </Menu>
  }

  render() {
    return (
      <div className="app-left-nav">
        {this.renderMenu()}
      </div>
    )
  }

}

export default withRouter(LeftNav)

