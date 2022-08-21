import { Breadcrumb, Layout, Menu, Image } from 'antd';
import React from 'react';
import logo from "../assets/images/logo.png"
import "antd/dist/antd.css";
const { Header, Content, Footer } = Layout;


const Header1 = () => (
    <Layout className="layout">

        <Header>
            <div className="container-fluid">
                {/*<div className="logo">*/}
                {/*    <img src={logo}/>*/}
                {/*</div>*/}
                <Menu
                    style={{float: 'right',  display: 'flex'
                    }}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1">
                        Home
                    </Menu.Item>
                    <Menu.Item key="2">
                        About us
                    </Menu.Item>
                    <Menu.Item key="3">
                        Services
                    </Menu.Item>
                    <Menu.Item key="4">
                        Our Team
                    </Menu.Item>
                    <Menu.Item key="5">
                        Contact Us
                    </Menu.Item>

                </Menu>

            </div>

        </Header>
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>Header</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Content</div>
        </Content>
    </Layout>
);

export default Header1;