import React from 'react';
import vedio from '../assets/vedio.mp4'
import {Row, Col} from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <Row>
                    <Col  sm={12} md={6} lg={4} xl={3}>
                        <video style={{width:"423%"}} className="vedio" src={vedio} autoPlay loop muted/>
                    </Col>
            </Row>
            <h1>home -
                "A Revolutionary Software Developement for IT and Core Sectors!"
            </h1>
        </div>

    );
};

export default Home;