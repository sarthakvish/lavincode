import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Carousel, Image} from "react-bootstrap";
import mixingITCore from "../assets/images/mixingItCore.png"
import automation from "../assets/images/automation-service.png"
import "../App.css"

function ProductCarousel(props) {

    // const productTopRated=useSelector(state => state.productTopRated)
    // const {error, loading, products} = productTopRated

    return (
        <Carousel pause='hover' className='bg-dark carousel-body'>

            <Carousel.Item
                nextLabel={"Next"}
                prevLabel={"Previous"}


            >
                <Link to="">
                    <Image className="carousel-img" src={mixingITCore} alt="h"/>
                    <Carousel.Caption>
                        {/*<h4>e-commerse plateform (Rs.1,50000)</h4>*/}
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="">
                    <Image className="carousel-img" src={automation} alt="kk"/>
                    <Carousel.Caption>
                        {/*<h4>Email Engine (Rs. 800000)</h4>*/}
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductCarousel;