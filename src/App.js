import './App.css';
import {Footer} from "./Components/Footer";
// import "../src/assets/css/style.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import * as React from "react";
import {LoginHeader} from "./Components/LoginHeader";
import logo from "../src/assets/images/logo.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import OurTeam from "./Pages/OurTeam";
import Header1 from "./Components/Header";
import Training from "./Pages/ItTraining";

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
        <Header1/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/OurTeam" element={<OurTeam/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/ItTraining" element={<Training/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
