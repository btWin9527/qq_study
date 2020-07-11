import React, {Component} from 'react';
import {Form, Icon, Input, Button, notification} from 'antd';
import 'antd/dist/antd.css';

/* 登录组件 */
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'abc'
    }
  }

  handleSubmit = e => {
    e.preventDefault();  //取消默认行为
    this.props.form.validateFields((err, values) => {  //校验  err 校验不通过   values 当前对象{username: "23423", password: "4324"}
      if (!err) {
        const {username, password} = values;
        console.log(values, 'values')
        if (username === 'admin' && password === 'admin') { //判断用户名和密码是否是admin
          this.props.history.push('/index'); //跳转
          sessionStorage.setItem('name', username);
          //sessionStorage.getItem(key);
          //sessionStorage.removeItem(key);
        } else {
          this.openNotification();  //弹出提示
        }
      }
    });
  };
  openNotification = () => {   //提示用户名和密码
    notification.open({
      message: '登录校验',
      description: '请输入正确的用户名和密码',
      duration: 3,
      icon: <Icon type="smile" style={{color: '#108ee9'}}/>,
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{required: true, message: 'Please input your username!'}],  //格式校验 required 为true必填 ；message 提示消息
          })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form>
    );
  }
}

let Login = Form.create({})(LoginPage);
export default Login;


