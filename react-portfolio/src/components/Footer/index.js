import React from "react";

function Footer() {
    return (
        <div id="footer">

            <div id="container">
                <div className="row">
                    <a href="#" className="mx-auto"><img src="./assets/images/arrow-48-32.png" id="back-to-top" /></a>
                </div>
                <div className="row">
                    <h4 className="mx-auto">cristian.montenegro.p@gmail.com - (786)-659-4856</h4>
                </div>
                <br />
                <div className="row justify-content-md-center">
                    <div className="col-1 text-right">
                        <a href="https://www.linkedin.com/in/cristian-montenegro-b21786106/" className="link-text">LinkedIn</a>
                    </div>
                    <div className="col-1 text-center">
                        <a href="https://github.com/cristianmontenegrop" className="link-text">Git</a>
                    </div>
                    <div className="col-1 text-left">
                        <a href="./assets/pdf/resume.pdf" className="link-text">Resume</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <a href="https://www.linkedin.com/in/cristian-montenegro-b21786106/" target="_blank">
                            <img src="assets/images/linkedin-24.png" className="icons" />
                        </a>
                        <a href="https://github.com/cristianmontenegrop" target="_blank">
                            <img src="assets/images/github-6-24.png" className="icons" />
                        </a>
                        <a href="./assets/pdf/resume.pdf" download>
                            <img src="./assets/images/document-2-24.png" className="icons" id="resume-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;


