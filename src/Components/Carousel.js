import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Carousel, Image} from "react-bootstrap";
import contactus from "../assets/images/contactusgirl.png"

function ProductCarousel(props) {

    // const productTopRated=useSelector(state => state.productTopRated)
    // const {error, loading, products} = productTopRated

    return (
        <Carousel pause='hover' className='bg-dark'>

            <Carousel.Item>
                <Link to="">
                    <Image src={contactus} alt="h"/>
                    <Carousel.Caption>
                        <h4>e-commerse plateform (Rs.1,50000)</h4>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="">
                    <Image src={contactus} alt="kk"/>
                    <Carousel.Caption>
                        <h4>Email Engine (Rs. 800000)</h4>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductCarousel;