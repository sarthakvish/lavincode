// import * as React from 'react';
// import { Link} from "react-router-dom";
import logo from "../assets/images/logo.png"
//
//
// export const Footer = (props) => {
//
//     return (
//
//         <footer>
//             <div className="footer-top">
//                 <div className="custom-container">
//                     <div className="footer-top-nav">
//                         <ul>
//                             <li><Link to="Home">Home</Link></li>
//                             <li><Link to="About">About Us</Link></li>
//                             <li><Link to="Services">Services</Link></li>
//                             <li><Link to="OurTeam">Our Team</Link></li>
//                             <li><Link to="ContactUs">Contact Us</Link></li>
//
//
//                             {/*<li><Link to="/privacypolicy">Privacy Policy</Link></li>*/}
//                             {/*<li><Link to="/legality">Legality</Link></li>*/}
//                             {/*<li><Link to="/fairplay">Fair Play Commitment</Link></li>*/}
//                             {/*<li><Link to="/responsiblegaming">Responsible Gaming</Link></li>*/}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="footer-bottom">
//                 <div className="custom-container">
//                     <div className="custom-row">
//                         <div className="custom-col ftr-about">
//                             <figure>
//                                 <Link to="/Home"><img src={logo} alt="" /></Link>
//                                 <figcaption>© 2021 - 2022 Lavin Code18. All Rights Reserved.</figcaption>
//                             </figure>
//                         </div>
//                         <div className="custom-col ftr-pages">
//                             <h4>pages</h4>
//                             <ul className="ftr-btm-nav">
//                                 <li><Link to="Home">About</Link></li>
//                                 <li><Link to="Home">FAQ</Link></li>
//                             {/*    <li><Link to="/termsagreements">Terms and Agreements</Link></li>*/}
//                             {/*    <li><Link to="/privacypolicy">Privacy Policy</Link></li>*/}
//                             {/*    <li><Link to="/legality">Legality</Link></li>*/}
//
//                             </ul>
//                         </div>
//                         <div className="custom-col ftr-sports">
//                             <h4>Services</h4>
//                             <ul className="ftr-btm-nav">
//                                 {/*<li>*/}
//                                 {/*    <Link*/}
//                                 {/*        to={{*/}
//                                 {/*            pathname: "/dashboard",*/}
//                                 {/*            state: { type: 'NFL' }*/}
//                                 {/*        }}>National Football League</Link>*/}
//                                 {/*</li>*/}
//                                 {/*<li>*/}
//                                 {/*    <Link*/}
//                                 {/*        to={{*/}
//                                 {/*            pathname: "/dashboard",*/}
//                                 {/*            state: { type: 'NBA' }*/}
//                                 {/*        }}>National Basketball Association</Link>*/}
//                                 {/*</li>*/}
//                                 {/*<li>*/}
//                                 {/*    <Link*/}
//                                 {/*        to={{*/}
//                                 {/*            pathname: "/dashboard",*/}
//                                 {/*            state: { type: 'MLB' }*/}
//                                 {/*        }}>Major League Baseball</Link>*/}
//                                 {/*</li>*/}
//                                 {/*<li>*/}
//                                 {/*    <Link*/}
//                                 {/*        to={{*/}
//                                 {/*            pathname: "/dashboard",*/}
//                                 {/*            state: { type: 'NHL' }*/}
//                                 {/*        }}>National Hockey League</Link>*/}
//                                 {/*</li>*/}
//                             </ul>
//                         </div>
//                         <div className="custom-col ftr-location">
//                             <h4>Questions? <a href="/ContactUs.js" style={{color: '#808080'}}>Contact Us!</a></h4>
//
//                             <span className="ftr_cont_email">
//                                 <strong>Email:</strong>
//                                 <a href="mailto: lavincode18@gmail.com">lavincode18@gmail.com</a>
//                             </span>
//
//                             <ul className="social-icon">
//                                 <li><a href="https://www.facebook.com/Peerlay-103292441858451" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
//                                 <li><a href="https://twitter.com/PeerlayLLC" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
//                                 <li><a href="https://www.instagram.com/peerlayllc/" target="_blank"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }
import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import {Row, Col, Image, ListGroup, ListGroupItem} from "react-bootstrap";
import contactus from "../assets/images/contactusgirl.png";

export const Footer = () => {
    return (
        <div>
            <Row className="footer-bg">
                <Col md={4}>

                        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                            <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                                <CDBBox>
                                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                                        <img alt="logo" src={logo} width="200px" />
                                        {/*<span className="ml-3 h5 font-weight-bold">Devwares</span>*/}
                                    </a>
                                    {/*<p className="my-3" style={{ width: '250px' }}>*/}
                                    {/*    We are creating High Quality Resources and tools to Aid developers during the*/}
                                    {/*    developement of their projects*/}
                                    {/*</p>*/}
                                    <CDBBox display="flex" className="mt-4">
                                        <CDBBtn flat color="dark">
                                            <CDBIcon fab icon="facebook-f" />
                                        </CDBBtn>
                                        <CDBBtn flat color="dark" className="mx-3">
                                            <CDBIcon fab icon="twitter" />
                                        </CDBBtn>
                                        <CDBBtn flat color="dark" className="p-2">
                                            <CDBIcon fab icon="instagram" />
                                        </CDBBtn>
                                    </CDBBox>
                                </CDBBox>

                            </CDBBox>

                        </CDBBox>

                </Col>

                <Col md={8}>
                    <Row>

                    </Row>
                    <Row>

                    </Row>


                </Col>
            </Row>
        </div>

    );
};

