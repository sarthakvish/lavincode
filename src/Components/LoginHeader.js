import * as React from 'react';
import { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';




export const LoginHeader = () => {
    const [fname, updatefname] = useState('');
    const [dropDownVisibility, setDropDownVisibility] = useState(false);
    const [refundModal, setRefundModal] = useState(false);
    useEffect(() => {
        // let data = localStorage.getItem("loginUser");
        // data = JSON.parse(data)
        // if (data) {
        //     updatefname(data.username);
        //     console.log("username", data.username)
        //     return;
        // }
    });

    // const handleLogout = async () => {
    //     try {
    //         const userDetails = localStorage.getItem("loginUser");
    //         if (!userDetails) {
    //             localStorage.clear();
    //             window.location.replace("/Home");
    //         }
    //         localStorage.clear();
    //         window.location.replace("/Home");
    //     } catch (err) {
    //         // console.log(err);
    //         // errorHandler(err);
    //     }
    // };
    // const closeModal = () => {
    //     setRefundModal(!refundModal);
    // }
    return (
        <header>
            <div className="main-navbar">
                <div className="custom-container">
                    <div className="navbar_left">
                        <a className="logo" href="/Home"><img src={logo} alt="logo" /></a>
                    </div>
                    <div className="navbar_right">
                        <div className="hamburger-menu-container">
                            <input type="checkbox" id="menuTrigger" />
                            <div className="hamburger-menu">
                                <div />
                            </div>
                        </div>
                        <nav className="main_nav">
                            <ul>
                                <li><Link to="Home">Home</Link></li>
                                <li><Link to="Home">About Us</Link></li>
                                <li><Link to="Home">Services</Link></li>
                                <li><Link to="Home">Our Team</Link></li>
                                <li><Link to="Home">Contact Us</Link></li>
                                {/*<li><Link onClick={() => setRefundModal(!refundModal)}>Withdraw</Link></li>*/}
                                {/* <Modal
                isOpen={refundModal}
                // onRequestClose={props.toggleModalVisibility}
                style={customModalStyle}
                ariaHideApp={false}
            >  */}

                            </ul>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
