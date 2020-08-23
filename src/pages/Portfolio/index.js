import React from "react";
import Projects from "../../components/Projects";
import AboutMe from "../../components/AboutMe";
import ContactMe from "../../components/ContactMe";
import './style.css';


function Portfolio() {
    return (<div>
        <Projects />
        <AboutMe />
        <ContactMe />
    </div>
    )
}

export default Portfolio;
