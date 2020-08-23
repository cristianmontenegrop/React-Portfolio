import React from "react";
import NavBar from "../../components/NavBar";
import Projects from "../Projects";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import './style.css';


function Portfolio() {
    return (<div>
        <NavBar />
        <Projects />
        <AboutMe />
        <ContactMe />
        <Footer />
    </div>
    )
}

export default Portfolio;
