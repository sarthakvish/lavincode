import React from 'react';
import { Card } from 'antd';
import Meta from "antd/es/card/Meta";
import { Col, Divider, Row } from 'antd';
import "antd/dist/antd.css";

const OurTeam = () => {
    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}


export default OurTeam;

