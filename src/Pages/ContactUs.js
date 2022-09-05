import React, {useEffect} from 'react';
import {Card, Button, Col, Row, ListGroup, Image, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import contactus from "../assets/images/contactusgirl.png"


function ContactUs() {

    return (
        <div>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h2>Address</h2>
                            <p>
                                <strong>Head Office: </strong>
                                Plot 88, near infant jesus church
                                Ayodhya Bypass, Bhopal (462041)
                            </p>
                        </ListGroupItem>

                        <ListGroupItem>
                            <h2>Email</h2>
                            <p>
                                <strong>Email us: </strong>
                                lavincode18@gmail.com
                            </p>
                        </ListGroupItem>

                        <ListGroupItem>
                            <h2>Contact</h2>
                            <p>
                                <strong>Contact us: </strong>
                                +91 9131776595 (India)
                            </p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col md={4}>
                    <Image src={contactus} alt="ready to support" fluid rounded/>
                    {/*<Card>*/}
                    {/*    <ListGroup variant='flush'>*/}
                    {/*        <ListGroupItem>*/}
                    {/*            <h2>Order Summary</h2>*/}
                    {/*        </ListGroupItem>*/}

                    {/*        <ListGroupItem>*/}
                    {/*            <Row>*/}
                    {/*                <Col>Item:</Col>*/}
                    {/*                <Col>Rs840</Col>*/}
                    {/*            </Row>*/}
                    {/*        </ListGroupItem>*/}

                    {/*        <ListGroupItem>*/}
                    {/*            <Row>*/}
                    {/*                <Col>Shipping:</Col>*/}
                    {/*                <Col>Rs50</Col>*/}
                    {/*            </Row>*/}
                    {/*        </ListGroupItem>*/}

                    {/*        <ListGroupItem>*/}
                    {/*            <Row>*/}
                    {/*                <Col>Tax:</Col>*/}
                    {/*                <Col>Rs23</Col>*/}
                    {/*            </Row>*/}
                    {/*        </ListGroupItem>*/}

                    {/*        <ListGroupItem>*/}
                    {/*            <Row>*/}
                    {/*                <Col>Total:</Col>*/}
                    {/*                <Col>Rs1112</Col>*/}
                    {/*            </Row>*/}
                    {/*        </ListGroupItem>*/}

                    {/*        /!*<ListGroupItem>*!/*/}
                    {/*        /!*    {error && <Message varient='danger'>{error}</Message>}*!/*/}
                    {/*        /!*</ListGroupItem>*!/*/}

                    {/*        <ListGroup.Item>*/}
                    {/*            <Button*/}
                    {/*                type='button'*/}
                    {/*                className='btn-block'*/}
                    {/*                disabled=""*/}
                    {/*                onClick=""*/}
                    {/*            >*/}
                    {/*                Place Order*/}
                    {/*            </Button>*/}
                    {/*        </ListGroup.Item>*/}
                    {/*    </ListGroup>*/}
                    {/*</Card>*/}

                </Col>
            </Row>
        </div>
    );
}

export default ContactUs;