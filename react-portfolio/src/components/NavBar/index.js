import React from "react";

function NavBar() {
    return (
        <nav id="nb" className="navbar navbar-expand-sm navbar-dark sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a id="about-nav" href="#about-me"> ABOUT</a>
                        <a id="port-nav" href="#portfolio"> PORTFOLIO</a>
                        <a id="contact-nav" href="#contact"> CONTACT</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
