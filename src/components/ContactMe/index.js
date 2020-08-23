import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Form from 'react-bootstrap/Form';
import './style.css';

function ContactMe() {
    return (

        <div id="contact">

            <div className="container">

                {/* <!-- Heading --> */}
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="heading" id="contact-heading">contact me</h1>
                        <hr className="short-underline" id="contact-underline" />
                    </div>
                </div>

                {/* <!-- Tag Line --> */}
                <div className="row">
                    <div className="col-12 text-center">
                        <h4 id="contact-tag">Ready to work together or have a question?</h4>
                    </div>
                </div>

                {/* <!-- Contact me Form --> */}
                <div className="row">
                    <div className="col-md-auto mx-auto">
                        <form id="contact-form"
                            action="mailto:cristian.montenegro.p@gmail.com?subject=I saw your portfolio online"
                            method="post" enctype="text/plain">
                            <input type="text" name="name" placeholder="Name" id="name-input" className="input" />
                            <input type="text" name="email" placeholder="Enter Email" id="email-input" className="input" />
                            <textarea placeholder="Your Message" type="text" name="message" id="message-input"
                                className="input"></textarea>
                            <div className="fb flex-row-reverse">
                                <input type="submit" value="SUBMIT" id="submit-btn"></input>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default ContactMe;
