import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';
// import "../../index.css"

function NavBar() {
    return (
        <Navbar sticky="top" bg="light" variant="light" className="nb">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Collapse id="navbarNavAltMarkup">
                <Nav className=" navbar-nav">
                    <Nav.Link id="port-nav" href="/portfolio/#portfolio">Portfolio</Nav.Link>
                    <Nav.Link id="about-nav" href="/about/#about-me">About</Nav.Link>
                    <Nav.Link id="contact-nav" href="/contact/#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
