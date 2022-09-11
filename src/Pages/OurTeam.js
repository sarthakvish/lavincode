// import React from 'react';
// import { Card } from 'antd';
// import Meta from "antd/es/card/Meta";
// import { Col, Divider, Row } from 'antd';
// import "antd/dist/antd.css";
//
// const OurTeam = () => {
//     const style = {
//         background: '#0092ff',
//         padding: '8px 0',
//     };
//     return (
//         <div style={{ background: '#ECECEC', padding: '30px' }}>
//             <Row gutter={16}>
//                 <Col span={8}>
//                     <Card
//                         hoverable
//                         style={{
//                             width: 240,
//                         }}
//                         cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//                     >
//                         <Meta title="Europe Street beat" description="www.instagram.com" />
//                     </Card>
//                 </Col>
//                 <Col span={8}>
//                     <Card
//                         hoverable
//                         style={{
//                             width: 240,
//                         }}
//                         cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//                     >
//                         <Meta title="Europe Street beat" description="www.instagram.com" />
//                     </Card>
//                 </Col>
//                 <Col span={8}>
//                     <Card
//                         hoverable
//                         style={{
//                             width: 240,
//                         }}
//                         cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//                     >
//                         <Meta title="Europe Street beat" description="www.instagram.com" />
//                     </Card>
//                 </Col>
//             </Row>
//         </div>
//
//     );
// }
//
//
// export default OurTeam;

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Image, Container} from "react-bootstrap";
import "../App.css"

function OurTeam() {
    return (
        <Container>
            <h1 className="head1tag">Team leads working to establish your business brand</h1>
            <Row>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>



    );
}

export default OurTeam;

