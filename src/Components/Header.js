// import { Breadcrumb, Layout, Menu, Image } from 'antd';
// import React from 'react';
// import logo from "../assets/images/logo.png"
// import "antd/dist/antd.css";
// const { Header, Content, Footer } = Layout;
//
//
// const Header1 = () => (
//     <Layout className="layout">
//
//         <Header>
//             <div className="container-fluid">
//                 {/*<div className="logo">*/}
//                 {/*    <img src={logo}/>*/}
//                 {/*</div>*/}
//                 <Menu
//                     style={{float: 'right',  display: 'flex'
//                     }}
//                     theme="dark"
//                     mode="horizontal"
//                     defaultSelectedKeys={['1']}
//                 >
//                     <Menu.Item key="1">
//                         Home
//                     </Menu.Item>
//                     <Menu.Item key="2">
//                         About us
//                     </Menu.Item>
//                     <Menu.Item key="3">
//                         Services
//                     </Menu.Item>
//                     <Menu.Item key="4">
//                         Our Team
//                     </Menu.Item>
//                     <Menu.Item key="5">
//                         Contact Us
//                     </Menu.Item>
//
//                 </Menu>
//
//             </div>
//
//         </Header>
//         <Content
//             style={{
//                 padding: '0 50px',
//             }}
//         >
//             <Breadcrumb
//                 style={{
//                     margin: '16px 0',
//                 }}
//             >
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>List</Breadcrumb.Item>
//                 <Breadcrumb.Item>Header</Breadcrumb.Item>
//             </Breadcrumb>
//             <div className="site-layout-content">Content</div>
//         </Content>
//     </Layout>
// );
//
// export default Header1;

import logo from "../assets/images/logo.png"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from "react-router-bootstrap";

function BrandExample() {
    return (
        <>
            <Navbar bg="dark" variant="pills" defaultActiveKey="/home">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="80"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="ml-auto" >
                        <Nav.Item style={{backgroundColor:"orange"}} >
                            <LinkContainer to='/home'>
                                <Nav.Link style={{color:"blue"}} eventKey="1" href="#/home">
                                    Home
                                </Nav.Link>
                            </LinkContainer>

                        </Nav.Item>
                        <Nav.Item style={{backgroundColor:"orange"}}>
                            <LinkContainer to='/about'>
                                <Nav.Link style={{color:"blue"}} eventKey="2" title="Item">
                                    About Us
                                </Nav.Link>
                            </LinkContainer>

                        </Nav.Item>

                        <Nav.Item style={{backgroundColor:"orange"}}>
                            <LinkContainer to='/OurTeam'>
                                <Nav.Link style={{color:"blue"}} eventKey="2" title="Item">
                                    Our Team
                                </Nav.Link>
                            </LinkContainer>

                        </Nav.Item>

                        <Nav.Item style={{backgroundColor:"orange"}}>
                            <LinkContainer to='/services'>
                                <Nav.Link style={{color:"blue"}} eventKey="2" title="Item">
                                    Services
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>

                        <Nav.Item style={{backgroundColor:"orange"}}>
                            <LinkContainer to='/contactus'>
                                <Nav.Link style={{color:"blue"}} eventKey="2" title="Item">
                                    Contact Us
                                </Nav.Link>
                            </LinkContainer>

                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default BrandExample;