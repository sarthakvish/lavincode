import React from 'react';
import ProductCarousel from "../Components/Carousel";
import {Card, Button, Col, Row, ListGroup, Image, ListGroupItem, Container} from "react-bootstrap";
import "../App.css"
import { Divider, Typography } from 'antd';
import planningvedio from '../assets/vedio2planning.mp4'
const { Title, Paragraph, Text, Link } = Typography;
const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

const About = () => {
    return (
        <>
            <Container>
                <h1 className="head1tag">About us</h1>
                <Row>
                    <Col>
                        <ProductCarousel/>
                    </Col>
                </Row>



                <Row>
                    <Col md={6}>
                        <Typography>
                            <Title className="head1tag">Who we are?</Title>

                            <Paragraph>
                                <Text strong>
                                    Helping every business to grow and productive by using technology, provides IT and other services  for IT sector as well as for core sector industry.
                                    We have strong and experience team of developers, designers, engineers, architect etc. for both IT sector and core sector. As far as IT is concerned we are specialised in UI/UX, software and applications development, data science and machine learning, digital marketing and other related fields. "We code the trust" which makes our client happy.

                                    In case of any query, feel free to contact.
                                </Text>
                                .
                            </Paragraph>
                            <Title level={2}>Guidelines and Resources</Title>

                            {/*<Paragraph>*/}
                            {/*    <ul>*/}
                            {/*        <li>*/}
                            {/*            <Link href="/docs/spec/proximity">Principles</Link>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <Link href="/docs/spec/overview">Patterns</Link>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <Link href="/docs/resources">Resource Download</Link>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</Paragraph>*/}

                            <Divider />

                        </Typography>
                    </Col>

                    <Col md={6}>
                        <video style={{width:"100%"}} src={planningvedio} autoPlay loop muted/>
                    </Col>
                    
                </Row>
            </Container>




        </>
    );
};

export default About;