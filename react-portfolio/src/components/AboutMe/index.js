import React from "react";

function AboutMe() {
    return (
        <div id="about-me">

            {/* <!-- About me Container --> */}
            <div className="container">

                {/* <!-- Heading Row --> */}
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="heading">about me</h1>
                        <hr className="short-underline" />
                    </div>
                </div>

                <div className="row">

                    {/* <!-- Bullet 1 --> */}
                    <div className="col-md-3 text-center">
                        <div className="hexagon fb mx-auto">
                            <img src="assets/images/speedometer-48.png" />
                        </div>
                        <h4 className="bullet-title">Fast</h4>
                        <div className="bullet-text">
                            Fast loading times and lag free interaction.
                    </div>
                    </div>
                    {/* <!-- Bullet Two --> */}
                    <div className="col-md-3 text-center">
                        <div className="hexagon fb mx-auto">
                            <img src="assets/images/rocket-48.png" />
                        </div>
                        <h4 className="bullet-title">Dynamic</h4>
                        <div className="bullet-text">
                            design that looks alive, user stimulating and interactive
                    </div>
                    </div>
                    {/* <!-- Bullet Three --> */}
                    <div className="col-md-3 text-center">
                        <div className="hexagon fb mx-auto">
                            <img src="assets/images/tablet-2-48.png" />
                        </div>
                        <h4 className="bullet-title">Responsive</h4>
                        <div className="bullet-text">
                            Optimized designs for any screen, small or big.
                    </div>
                    </div>
                    {/* <!-- Bullet Four --> */}
                    <div className="col-md-3 text-center">
                        <div className="hexagon fb mx-auto">
                            <img src="assets/images/lightbulb-2-48.png" />
                        </div>
                        <h4 className="bullet-title">Intuitive</h4>
                        <div className="bullet-text">
                            Clear layouts, user friendly, embracing website accessibility
                    </div>
                    </div>

                </div>

                {/* <!-- Bio & Skills Row --> */}
                <div className="row">

                    {/* <!-- 1st column --> */}
                    <div className="col-lg-6 text-center">
                        <div id="bio">
                            <img id="headshot" src="./assets/images/cristian-image.png" alt="Cristian Montenegro"
                                className="img-fluid" />
                            <h4 id="headshot-title">Who is this guy?</h4>
                            <p id="about-me-text">I'm Cristian Montenegro, a Full-Stack Web Developer based in Seattle, WA.
                            I deeply care about a seamless user experience, team work and a robust back end that
                            provides needed functionality and rich front-end features </p>
                            <a id="contact-link" href="#contact">Let's deploy your amazing idea</a>
                        </div>
                    </div>

                    {/* <!-- 2nd Column --> */}
                    <div className="col-lg-6">

                        {/* <!-- Skill Graph --> */}
                        <div id="skill-graph">

                            {/* <!-- Skill Bars --> */}
                            <div className="row text-center skill-row">
                                <div className="col-12 bar-title-bg">
                                    <h4 className="title-text">OAuth</h4>
                                </div>
                                {/* <!-- <div className="col-6 bar-fill"></div> --> */}
                            </div>

                            <div className="row text-center skill-row">
                                <div className="col-12 bar-title-bg">
                                    <h4 className="title-text">MySQL</h4>
                                </div>
                                {/* <!-- <div className="col-6 bar-fill"></div> --> */}
                            </div>

                            <div className="row text-center skill-row">
                                <div class="col-12 bar-title-bg">
                                    <h4 class="title-text">Express</h4>
                                </div>
                                {/* <!-- <div class="col-6 bar-fill"></div> --> */}
                            </div>

                            <div class="row text-center skill-row">
                                <div class="col-12 bar-title-bg">
                                    <h4 class="title-text">Javascript</h4>
                                </div>
                                {/* <!-- <div class="col-6 bar-fill"></div> --> */}
                            </div>

                            <div class="row text-center skill-row">
                                <div class="col-12 bar-title-bg">
                                    <h4 class="title-text">CSS</h4>
                                </div>
                                {/* <!-- <div class="col-6 bar-fill"></div> --> */}
                            </div>

                            <div class="row text-center skill-row">
                                <div class="col-12 bar-title-bg">
                                    <h4 class="title-text">HTML</h4>
                                </div>
                                {/* <!-- <div class="col-6 bar-fill"></div> --> */}
                            </div>

                            <div class="row text-center skill-row">
                                <div class="col-12 bar-title-bg">
                                    <h4 class="title-text">Node</h4>
                                </div>
                                {/* <!-- <div class="col-10 bar-fill"></div> --> */}
                            </div>

                            <div class="row text-center skill-row">
                                <div class="col-12 bar-title-bg">
                                    <h4 class="title-text">jQuery</h4>
                                </div>
                                {/* <!-- <div class="col-10 bar-fill"></div>/ --> */}
                            </div>

                            <div class="row text-center skill-row">
                                <div class="col-12 bar-title-bg">
                                    <h4 class="title-text">Git</h4>
                                </div>
                                {/* <!-- <div class="col-5 bar-fill"></div> --> */}
                            </div>

                            <div class="row text-center skill-row">
                                <div class="col-12 bar-title-bg">
                                    <h4 class="title-text">Bash</h4>
                                </div>
                                {/* <!-- <div class="col-4 bar-fill"></div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
