import React from 'react';
import vedio from '../assets/vedio.mp4'
import smilegirl from '../assets/smilegirl.mp4'
import building from '../assets/buildingBusiness.mp4'
import {Row, Col, Container} from "react-bootstrap";
import "../App.css"

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col  sm={12} md={6} lg={4} xl={3}>
                    <video style={{width:"423%",height:"100%"}} className="v" src={building} autoPlay loop muted/>
                </Col>
            </Row>
            <h1 className="head1tag">
                A Revolutionary Software Developement for IT and Core Sectors!
            </h1>
        </Container>


    );
};

export default Home;