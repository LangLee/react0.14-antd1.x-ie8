/**
 * 创建人：lil
 * 创建时间：2017/12/28
 * 描述：
 */
import React, {Component} from 'react'
import TableDemo from './tableDemo'
import FormDemo from './formDemo'
import { Menu, Icon, Switch, Button, Alert,Modal, Tabs, BackTop } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

import '../style/demo.less'

const Sider = React.createClass({
    handleClick(e) {
        this.setState({
            current: e.key
        });
        this.props.history.push('/'+e.key);
    },
    render() {
        return (
            <div>
                <Menu onClick={this.handleClick}
                      theme="dark"
                      style={{ width: 240 }}
                      openKeys={["sub1"]}
                      mode="inline">
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>菜单栏</span></span>}>
                        <Menu.Item key="tableDemo">table</Menu.Item>
                        <Menu.Item key="formDemo">form</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
});

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="layout_side">
                <Sider {...this.props}/>
            </div>
            <div className="layout_context">
                {this.props.children}
            </div>
        </div>
    }
}

export default Home;