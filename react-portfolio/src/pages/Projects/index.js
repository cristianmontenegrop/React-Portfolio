import React from "react";
import Button from 'react-bootstrap/Button';
import './style.css';

function Projects() {





    return (
        <div className="container">

            {/* <!-- Portfolio --> */}
            <div id="portfolio">

                {/* <!-- Heading Row --> */}
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="heading">Projects</h1>
                        <hr className="short-underline" />
                    </div>
                </div>

                <div className="row no-gutters text-center" id="proj-row-1">
                    {/* <!-- Travex --> */}
                    <div className="col-lg-4">
                        <div className="work" id="aml">
                            <div className="overlay">
                                <h2 className="over-title">Travex</h2>
                                <h4 className="over-summary">Vacation Itinerary generator</h4>
                                <h4 className="over-tech">Express, MySql, Sequelize, Node, OAuth, Ajax, Foundation, HTML, CSS
                                </h4>

                                {/* <!-- Get permission to put this code in public repo --> */}
                                {/* <!-- Link to repo --> */}
                                <a href="https://github.com/cristianmontenegrop/Project-2" target="_blank" rel="noopener noreferrer">
                                    <img className="over-git" href="" src="assets/images/GitHub-Mark-64px.png"
                                        style="height: 48px; width: 48px" alt="Travex" />
                                </a>
                                <a href="https://travexproject.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <h4 className="over-learn mx-auto">OPEN</h4>
                                </a>
                            </div>
                            <img src="assets/images/travex-image.png" alt="Travex" className="img-fluid" />
                        </div>
                    </div>
                    {/* <!-- Where's my veggie --> */}
                    <div className="col-lg-4">
                        <div className="work" id="aml">
                            <div className="overlay">
                                <h2 className="over-title">Where's My Veggie</h2>
                                <h4 className="over-summary">Comprehensive Farmer's Market Finder</h4>
                                <h4 className="over-tech">Ajax, HTML, CSS, USDA API, LocationIQ, Google-Maps API </h4>

                                {/* <!-- Get permission to put this code in public repo --> */}
                                {/* <!-- Link to repo --> */}
                                <a href="https://github.com/cristianmontenegrop/07Project-Where-s-my-veggie.com"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="over-git" href="" src="assets/images/GitHub-Mark-64px.png"
                                        style="height: 48px; width: 48px" alt="Where's My Veggie" />
                                </a>
                                <a href="https://cristianmontenegrop.github.io/07Project-Where-s-my-veggie.com/"
                                    target="_blank">
                                    <h4 className="over-learn mx-auto">OPEN</h4>
                                </a>
                            </div>
                            <img src="assets/images/wheres-my-veggie-image.png" alt="Where's My Veggie" className="img-fluid" />
                        </div>
                    </div>

                    {/* <!-- Eat Da Burger --> */}
                    <div className="col-lg-4">
                        <div className="work" id="poke">
                            <div className="overlay">
                                <h2 className="over-title">Eat Da Burger</h2>
                                <h4 className="over-summary">Plan and track your burger lexicon</h4>
                                <h4 className="over-tech">MySQL, Node, Express, ORM, Handlebars, HTML CSS JQuery AJAX</h4>
                                <a href="https://github.com/cristianmontenegrop/H13-Node-Express-Handlebars"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="over-git" src="assets/images/GitHub-Mark-64px.png"
                                        style="height: 48px; width: 48px" alt="Eat Da Burger" />
                                </a>
                                <a href="https://h13-da-burger.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                    <h4 className="over-learn mx-auto">OPEN</h4>
                                </a>
                            </div>
                            <img src="./assets/images/eat-da-burger-image.png" alt="Eat Da Burger" className="img-fluid" />
                        </div>
                    </div>

                    {/* <!-- Employee Tracker --> */}
                    <div className="col-lg-4">
                        <div className="work" id="music">
                            <div className="overlay">
                                <h2 className="over-title">Employee Tracker</h2>
                                <h4 className="over-summary">Content Management System, Manage company's employees</h4>
                                <h4 className="over-tech">MySQL, Inquirer, CLI, Constructor Functions, Javascript </h4>
                                <a href="https://github.com/cristianmontenegrop/H12-Employee-Tracker" target="_blank" rel="noopener noreferrer">
                                    <img className="over-git" src="assets/images/GitHub-Mark-64px.png"
                                        style="height: 48px; width: 48px" alt="Employee Tracker" />
                                </a>
                                <a href="https://github.com/cristianmontenegrop/H12-Employee-Tracker" target="_blank" rel="noopener noreferrer">
                                    <h4 className="over-learn mx-auto">OPEN</h4>
                                </a>
                            </div>
                            <img src="assets/images/employee-manager-image.png" alt="Employee Tracker" className="img-fluid" />
                        </div>
                    </div>

                    {/* <!-- Note Taker --> */}
                    <div className="col-lg-4">
                        <div className="work" id="music">
                            <div className="overlay">
                                <h2 className="over-title">Note Taker</h2>
                                <h4 className="over-summary">Content Management System, Manage company's employees</h4>
                                <h4 className="over-tech">Express, API, MySQL, Javascript </h4>
                                <a href="https://github.com/cristianmontenegrop/H11-Note-Taker" target="_blank" rel="noopener noreferrer">
                                    <img className="over-git" src="assets/images/GitHub-Mark-64px.png"
                                        style="height: 48px; width: 48px" alt="Note Taker" />
                                </a>
                                <a href="https://h11-note-taker.herokuapp.com" target="_blank">
                                    <h4 className="over-learn mx-auto">OPEN</h4>
                                </a>
                            </div>
                            <img src="assets/images/note-taker-image.png" alt="Note Taker" className="img-fluid" />
                        </div>
                    </div>

                    {/* <!-- Template Engine Employee Summary --> */}
                    <div className="col-lg-4">
                        <div className="work" id="music">
                            <div className="overlay">
                                <h2 className="over-title">Template Engine Employee Summary</h2>
                                <h4 className="over-summary">Content Management System, Manage company's employees</h4>
                                <h4 className="over-tech">Node, Jest, Inquirer, OOP, Javascript, HTML, CSS </h4>
                                <a href="https://github.com/cristianmontenegrop/H10-Template-Engine-Employee-Summary"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="over-git" src="../assets/images/GitHub-Mark-64px.png"
                                        style="height: 48px; width: 48px" alt="Template Engine Employee Summary" />
                                </a>
                                <a href="https://github.com/cristianmontenegrop/H10-Template-Engine-Employee-Summary"
                                    target="_blank" rel="noopener noreferrer">
                                    <h4 className="over-learn mx-auto">OPEN</h4>
                                </a>
                            </div>
                            <img src="assets/images/template-engine-employee-summary-image.png"
                                alt="Template Engine Employee Summary" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Used to create space without adjusting css --> */}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Projects;
