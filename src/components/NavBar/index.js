import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './style.css';
import { useHistory } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark sticky-top nb">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a id="port-nav" href="/portfolio/#portfolio"> PORTFOLIO</a>
                        <a id="about-nav" href="/about/#about-me"> ABOUT</a>
                        <a id="contact-nav" href="/contact/#contact"> CONTACT</a>
                    </div>
                </div>
            </div>
        </nav>

        // <Navbar className="nb" sticky="top" bg="light" variant="light">
        //     {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        //     <Nav className="mr-auto navbar-nav">
        //         <Nav.Link id="port-nav" href="#Projects">Portfolio</Nav.Link>
        //         <Nav.Link id="about-nav" href="#AboutMe">About</Nav.Link>
        //         <Nav.Link id="contact-nav" href="#ContactMe">Contact</Nav.Link>
        //     </Nav>
        // </Navbar>
    )
}

export default NavBar
