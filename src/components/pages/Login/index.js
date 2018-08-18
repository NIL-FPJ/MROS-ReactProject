
import React, { Component } from 'react'
import './index.scss'
import connect from '../../../modules/connect'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
class _Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let username = values.userName
        let password = values.password
        // 发送ajax，请求验证
        this.props.commons_actions.login({
          username, password,
          success: () => {
            this.props.history.push('/')
          },
          fail: (err) => {
            let _err = JSON.parse(err)
            alert(_err.message)
          }
        })
      }
    });
  }
  componentWillMount() {
    console.log(this.props.commons_actions)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="app-Login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>remember me</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Welcome to Login
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
const Login = Form.create()(_Login);
export default connect(Login, 'commons')