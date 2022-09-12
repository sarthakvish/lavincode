import React from 'react';
import {Card, Row, Col, Container} from "react-bootstrap";
import logo from "../assets/images/logo.png"
import automation from "../assets/images/automation-service.png"
import web from "../assets/images/webdevelopment-service.png"
import cloud from "../assets/images/cloud-service.png"
import digital from "../assets/images/digiMktServices.png"
import uiux from "../assets/images/uiuxservices.png"
import "../App.css"
import building from '../assets/buildingBusiness.mp4'
import smilegirl from "../assets/smilegirl.mp4";
const Services = () => {
    return (
        <Container>

                <h1 className="head1tag">IT services for your business development</h1>
                <Row>
                    <Col md={3}>
                        <Card className="card-wrapper" >
                            <Card.Img className="card-service-image" src={web}></Card.Img>
                            <Card.Body className="service-card-body">
                                <Card.Text><h3>Web Development</h3></Card.Text>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="card-wrapper">
                            <Card.Img className="card-service-image" src={uiux}></Card.Img>
                            <Card.Body className="service-card-body">
                                <Card.Text><h3>UI/UX</h3></Card.Text>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="card-wrapper">
                            <Card.Img className="card-service-image" src={digital}></Card.Img>
                            <Card.Body className="service-card-body">
                                <Card.Text><h3>Digital Marketing</h3></Card.Text>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>

                        </Card>

                    </Col>

                    <Col md={3}>
                        <Card className="card-wrapper">
                            <Card.Img className="card-service-image" src={cloud}></Card.Img>
                            <Card.Body className="service-card-body">
                                <Card.Text><h3>Cloud Solutions</h3></Card.Text>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>

                        </Card>

                    </Col>
                </Row>
            {/*<Row>*/}
            {/*    <Col  sm={12} md={6} lg={4} xl={3}>*/}
            {/*        <video style={{width:"423%",height:"100%"}} className="v" src={building} autoPlay loop muted/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}



        </Container>

    );
};

export default Services;