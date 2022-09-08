import React from 'react';
import ProductCarousel from "../Components/Carousel";
import {Card, Button, Col, Row, ListGroup, Image, ListGroupItem, Container} from "react-bootstrap";
import "../App.css"

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
                </Row>
            </Container>




        </>
    );
};

export default About;