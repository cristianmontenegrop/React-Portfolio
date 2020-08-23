import "./style.css";
import React from "react";
import Image from "react-bootstrap/Image"

function Project({ title, summary, tech, gitLink, appLink, imageSrc, imageAlt }) {


    console.log("IMAGE SRC:", imageSrc)
    return (

        <div className="col-lg-4">
            <div className="work" id="aml">
                <div className="overlay">
                    <h2 className="over-title">{title}</h2>
                    <h4 className="over-summary">{summary}</h4>
                    <h4 className="over-tech">{tech}</h4>
                    <a href={gitLink} target="_blank" rel="noopener noreferrer">
                        <Image className="over-git" src={require("../../images/GitHub-Mark-64px.png")}
                            alt={imageAlt} />
                    </a>
                    <a href={appLink} target="_blank" rel="noopener noreferrer">
                        <h4 className="over-learn mx-auto">OPEN</h4>
                    </a>
                </div>
                <Image src={imageSrc} alt={imageAlt} className="img-fluid" />
            </div>
        </div>



    );
}

export default Project;