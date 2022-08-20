import './App.css';
import {Footer} from "./Components/Footer";
import "../src/assets/css/style.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import * as React from "react";
import {LoginHeader} from "./Components/LoginHeader";
import logo from "../src/assets/images/logo.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vedio from '../src/assets/vedio.mp4'
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import OurTeam from "./Pages/OurTeam";

function App() {
    const [testimonealsArray, setTestimonealsArray] = React.useState([]);
    var settings = {
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },

        ]
    }
  return (
    <div className="App">
        <LoginHeader/>

        <section className="why-peerlay">
            <video className="vedio" src={vedio} autoPlay loop muted/>
            <div className="custom-container">
                <h1 className="title-dark-center">WHY LAVIN CODE18?</h1>
                <div className="custom-row">

                    <div className="custom-col" >

                        {/*<div className="why-peerlay-innerbox">*/}
                        {/*    <div className="image-container">*/}
                        {/*    </div>*/}
                        {/*    <div className="text-container">*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    {/* <div className="custom-col">
                            <div className="why-peerlay-innerbox">
                                <div className="image-container">
                                    <img src={FANTAYSPORT} alt="" />
                                </div>
                                <div className="text-container">
                                    <h4>Online Daily Fantasy Sports</h4>
                                    <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col">
                            <div className="why-peerlay-innerbox">
                                <div className="image-container">
                                    <img src={ONLINESPORTBOOK} alt="" />
                                </div>
                                <div className="text-container">
                                    <h4>Online Sportsbook</h4>
                                    <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col">
                            <div className="why-peerlay-innerbox">
                                <div className="image-container">
                                    <img src={DUALUSER} alt="" />
                                </div>
                                <div className="text-container">
                                    <h4>The Duel</h4>
                                    <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col">
                            <div className="why-peerlay-innerbox">
                                <div className="image-container">
                                    <img src={HORSERACING} alt="" />
                                </div>
                                <div className="text-container">
                                    <h4>Horse Racing Betting</h4>
                                    <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col">
                            <div className="why-peerlay-innerbox">
                                <div className="image-container">
                                    <img src={UFCBETTING} alt="" />
                                </div>
                                <div className="text-container">
                                    <h4>UFC Betting</h4>
                                    <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. </p>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
        </section>
        {/*<section className="why-people-played">*/}

        {/*    <div className="custom-container">*/}
        {/*        <h1 className="title-white-center">Join the <span>10</span> live project learning students who have already signed up <br /></h1>*/}
        {/*        <Slider {...settings} className="custom-row why-people-played-alider">*/}
        {/*            {testimonealsArray.map((item, index) =>*/}
        {/*                <div className="custom-col" key={index}>*/}
        {/*                    <div className="why-pp-innerbox">*/}
        {/*                        <p>{item.message}</p>*/}
        {/*                        <div className="double-quote"><img src={logo} alt="" /></div>*/}
        {/*                        <figure>*/}
        {/*                            <img src={logo} alt="" />*/}
        {/*                            <figcaption>*/}
        {/*                                <h4>Name</h4>*/}
        {/*                                <p>Country</p>*/}
        {/*                            </figcaption>*/}
        {/*                        </figure>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            )}*/}
        {/*        </Slider>*/}
        {/*        */}

        {/*    </div>*/}
        {/*</section>*/}
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/OurTeam" element={<OurTeam/>}/>
            <Route path="/Services" element={<Services/>}/>


        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
