import React, {Component} from 'react'
import {Form, Input, Button} from 'antd'
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};

class Login extends Component{
  constructor(props){
    super(props);
    this.doLogin = this.doLogin.bind(this);
    this.cancelLogin = this.cancelLogin.bind(this);
  }
  doLogin(){
    this.props.doLogin();
  }
  cancelLogin(){
    this.props.cancelLogin();
  }
  componentDidUpdate(){
    let isLogin = this.props.data.isLogin;
    if (isLogin)
      this.props.history.push("/");
  }
  render(){
    return  <div className="login">
      <Form>
        <FormItem
            {...formItemLayout}
            label="用户名"
            >
          <Input type="text" placeholder="请输入用户名" />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="密码"
            >
          <Input type="password" placeholder="请输入密码" />
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
          <Button type="primary" onClick={this.doLogin} style={{ marginLeft: 10 }}>登录</Button>
          <Button type="ghost" onClick={this.cancelLogin} style={{ marginLeft: 10 }}>取消</Button>
        </FormItem>
      </Form>
      </div>
  }
}

export default Login;
