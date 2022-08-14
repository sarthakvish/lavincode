import * as React from 'react';
import { Link} from "react-router-dom";
// import {default as logo} from '../assets/images/head-logo.svg'
import SvgComponent from "./Svg";


export const Footer = (props) => {

    return (

        <footer>
            <div className="footer-top">
                <div className="custom-container">
                    <div className="footer-top-nav">
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/termsagreements">Terms and Agreements</Link></li>
                            {/*<li><Link to="/privacypolicy">Privacy Policy</Link></li>*/}
                            {/*<li><Link to="/legality">Legality</Link></li>*/}
                            {/*<li><Link to="/fairplay">Fair Play Commitment</Link></li>*/}
                            {/*<li><Link to="/responsiblegaming">Responsible Gaming</Link></li>*/}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="custom-container">
                    <div className="custom-row">
                        <div className="custom-col ftr-about">
                            <figure>
                                <SvgComponent style={{height:100}}/>
                                {/*<Link to="/Home"><img src={logo} alt="" /></Link>*/}
                                <figcaption>© 2021 - 2022 Lavin Code18. All Rights Reserved.</figcaption>
                            </figure>
                        </div>
                        <div className="custom-col ftr-pages">
                            <h4>pages</h4>
                            <ul className="ftr-btm-nav">
                            {/*    <li><Link to="/about">About</Link></li>*/}
                            {/*    <li><Link to="/faq">FAQ</Link></li>*/}
                            {/*    <li><Link to="/termsagreements">Terms and Agreements</Link></li>*/}
                            {/*    <li><Link to="/privacypolicy">Privacy Policy</Link></li>*/}
                            {/*    <li><Link to="/legality">Legality</Link></li>*/}

                            </ul>
                        </div>
                        <div className="custom-col ftr-sports">
                            <h4>Services</h4>
                            <ul className="ftr-btm-nav">
                                {/*<li>*/}
                                {/*    <Link*/}
                                {/*        to={{*/}
                                {/*            pathname: "/dashboard",*/}
                                {/*            state: { type: 'NFL' }*/}
                                {/*        }}>National Football League</Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <Link*/}
                                {/*        to={{*/}
                                {/*            pathname: "/dashboard",*/}
                                {/*            state: { type: 'NBA' }*/}
                                {/*        }}>National Basketball Association</Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <Link*/}
                                {/*        to={{*/}
                                {/*            pathname: "/dashboard",*/}
                                {/*            state: { type: 'MLB' }*/}
                                {/*        }}>Major League Baseball</Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <Link*/}
                                {/*        to={{*/}
                                {/*            pathname: "/dashboard",*/}
                                {/*            state: { type: 'NHL' }*/}
                                {/*        }}>National Hockey League</Link>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        <div className="custom-col ftr-location">
                            <h4>Questions? <a href="/Contact" style={{color: '#808080'}}>Contact Us!</a></h4>

                            <span className="ftr_cont_email">
                                <strong>Email:</strong>
                                <a href="mailto: peerlayllc@gmail.com">lavincode18@gmail.com</a>
                            </span>

                            <ul className="social-icon">
                                {/*<li><a href="https://www.facebook.com/Peerlay-103292441858451" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a></li>*/}
                                {/*<li><a href="https://twitter.com/PeerlayLLC" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a></li>*/}
                                {/*<li><a href="https://www.instagram.com/peerlayllc/" target="_blank"><i className="fa fa-instagram" aria-hidden="true" /></a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
