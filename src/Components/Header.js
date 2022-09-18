import { Breadcrumb, Layout, Menu, Image } from 'antd';
import React from 'react';
import logo from "../assets/images/logo.png"
import "antd/dist/antd.css";
import { Col, Row} from 'antd';
import { Link } from "react-router-dom";
import {
    HomeFilled,InfoCircleFilled,TeamOutlined, SettingFilled,PhoneFilled
} from '@ant-design/icons';
const { Header, Content, Footer} = Layout;


const items = [
    {
        label: (
            <Link to="home">
                Home
            </Link>
        ),
        key: 'home',
        icon: <HomeFilled />,
    },
    {
        label: (
            <Link to="about">
                About
            </Link>
        ),
        key: 'about us',
        icon: <InfoCircleFilled />,
    },
    {
        label: 'Services',
        key: 'Services',
        icon: <SettingFilled />,
        children: [
            {
                type: 'group',
                label: 'IT Services & Solutions',
                children: [
                    {
                        label:  (
                            <Link to="services">
                                Business Services
                            </Link>
                        ),
                        key: 'setting:1',
                    },
                    {

                        label: <Link to="ItTraining">
                            Learning & Internship Programs
                            </Link>,
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Core Services',
                children: [
                    {
                        label: 'Civil Engineering',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <Link to="ourTeam">
                Our Team
            </Link>
        ),
        key: 'ourteam',
        icon:<TeamOutlined />,
    },
    {
        label: (
            <Link to="contactus">
                Contact us
            </Link>
        ),
        key: 'contactus',
        icon:<PhoneFilled />,
    }
];



const BrandExample = () => {
        const onClick = (e) => {
            console.log('click ', e);
        };
    return (
        <Layout className="layout">
            <Row  style={{background:"black"
            }}>
                <Col span={6}>
                    <Image
                        width={97}
                        height={63}
                        src={logo}
                    />

                </Col>
                <Col span={18}>
                    <Header>
                        <div className="container-fluid">

                            <Menu classname="navclass"
                                theme="dark"
                                onClick={onClick}  mode="horizontal" items={items} />
                        </div>

                    </Header>
                    <Content
                        style={{
                            padding: '0 50px',
                        }}
                    >
                        {/*<Breadcrumb*/}
                        {/*    style={{*/}
                        {/*        margin: '16px 0',*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>Header</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        {/*<div className="site-layout-content">Content</div>*/}
                    </Content>
                </Col>
            </Row>

        </Layout>
    )
}

;

export default BrandExample;
//
// import logo from "../assets/images/logo.png"
// import {Container, Nav,Navbar, Tab, TabContent, Tabs, Row,Col} from 'react-bootstrap';
// import {LinkContainer} from "react-router-bootstrap";
//
// function BrandExample() {
//     return (
//         <Navbar bg="dark" variant="pills" defaultActiveKey="/home">
//             <Navbar.Brand href="#home">
//                 <img
//                     src={logo}
//                     width="80"
//                     height="60"
//                     className="d-inline-block align-top"
//                     alt="React Bootstrap logo"
//                 />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Row>
//                 <Col md={8}>
//
//                 </Col>
//                 <Col md={4} style={{alignItems: "flex-end"}}>
//
//                 </Col>
//             </Row>
//
//             <Tabs
//                 defaultActiveKey="profile"
//                 id="uncontrolled-tab-example"
//                 className="mb-3"
//                 justify
//             >
//                 <Tab eventKey="home" title="Home">
//
//                 </Tab>
//                 <Tab eventKey="profile" title="Profile">
//
//                 </Tab>
//                 <Tab eventKey="contact" title="Contact" disabled>
//
//                 </Tab>
//             </Tabs>
//             {/*<Container>*/}
//             {/*    */}
//
//
//
//             {/*    /!*<Nav className="ml-auto" >*!/*/}
//             {/*    /!*    <Nav.Item style={{backgroundColor:"orange"}} >*!/*/}
//             {/*    /!*        <LinkContainer to='/home'>*!/*/}
//             {/*    /!*            <Nav.Link style={{color:"blue"}} eventKey="1" href="#/home">*!/*/}
//             {/*    /!*                Home*!/*/}
//             {/*    /!*            </Nav.Link>*!/*/}
//             {/*    /!*        </LinkContainer>*!/*/}
//
//             {/*    /!*    </Nav.Item>*!/*/}
//             {/*    /!*    <Nav.Item style={{backgroundColor:"orange"}}>*!/*/}
//             {/*    /!*        <LinkContainer to='/about'>*!/*/}
//             {/*    /!*            <Nav.Link style={{color:"blue"}} eventKey="2" title="Item">*!/*/}
//             {/*    /!*                About Us*!/*/}
//             {/*    /!*            </Nav.Link>*!/*/}
//             {/*    /!*        </LinkContainer>*!/*/}
//
//             {/*    /!*    </Nav.Item>*!/*/}
//
//             {/*    /!*    <Nav.Item style={{backgroundColor:"orange"}}>*!/*/}
//             {/*    /!*        <LinkContainer to='/OurTeam'>*!/*/}
//             {/*    /!*            <Nav.Link style={{color:"blue"}} eventKey="2" title="Item">*!/*/}
//             {/*    /!*                Our Team*!/*/}
//             {/*    /!*            </Nav.Link>*!/*/}
//             {/*    /!*        </LinkContainer>*!/*/}
//
//             {/*    /!*    </Nav.Item>*!/*/}
//
//             {/*    /!*    <Nav.Item style={{backgroundColor:"orange"}}>*!/*/}
//             {/*    /!*        <LinkContainer to='/services'>*!/*/}
//             {/*    /!*            <Nav.Link style={{color:"blue"}} eventKey="2" title="Item">*!/*/}
//             {/*    /!*                Services*!/*/}
//             {/*    /!*            </Nav.Link>*!/*/}
//             {/*    /!*        </LinkContainer>*!/*/}
//             {/*    /!*    </Nav.Item>*!/*/}
//
//             {/*    /!*    <Nav.Item style={{backgroundColor:"orange"}}>*!/*/}
//             {/*    /!*        <LinkContainer to='/contactus'>*!/*/}
//             {/*    /!*            <Nav.Link style={{color:"blue"}} eventKey="2" title="Item">*!/*/}
//             {/*    /!*                Contact Us*!/*/}
//             {/*    /!*            </Nav.Link>*!/*/}
//             {/*    /!*        </LinkContainer>*!/*/}
//
//             {/*    /!*    </Nav.Item>*!/*/}
//             {/*    /!*</Nav>*!/*/}
//             {/*</Container>*/}
//         </Navbar>
//     );
// }
//
// export default BrandExample;