import React from "react";
import Button from 'react-bootstrap/Button';
import './style.css';
import Project from "../../components/Project"

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
                    <Project
                        title="Travex"
                        summary="Vacation Itinerary generator"
                        tech="Express, MySql, Sequelize, Node, OAuth, Ajax, Foundation, HTML, CSS"
                        gitLink="https://github.com/cristianmontenegrop/Project-2"
                        appLink="https://travexproject.herokuapp.com/"
                        imageSrc={require("../../images/travex-image.png")}
                        imageAlt="Travex Project" />

                    {/* <!-- Where's my veggie --> */}
                    <Project
                        title="Where's My Veggie"
                        summary="Comprehensive Farmer's Market Finder"
                        tech="Ajax, HTML, CSS, USDA API, LocationIQ, Google-Maps API"
                        gitLink="https://github.com/cristianmontenegrop/07Project-Where-s-my-veggie.com"
                        appLink="https://cristianmontenegrop.github.io/07Project-Where-s-my-veggie.com/"
                        imageSrc={require("../../images/wheres-my-veggie-image.png")}
                        imageAlt="Where's My Veggie Project" />

                    {/* <!-- Eat Da Burger --> */}
                    <Project
                        title="Eat Da Burger"
                        summary="Plan and track your burger lexicon"
                        tech="MySQL, Node, Express, ORM, Handlebars, HTML CSS JQuery AJAX"
                        gitLink="https://github.com/cristianmontenegrop/H13-Node-Express-Handlebars"
                        appLink="https://h13-da-burger.herokuapp.com"
                        imageSrc={require("../../images/eat-da-burger-image.png")}
                        imageAlt="Eat Da Burger Project" />

                    {/* <!-- Employee Tracker --> */}
                    <Project
                        title="Employee Tracker"
                        summary="Content Management System, Manage company's employees"
                        tech="MySQL, Inquirer, CLI, Constructor Functions, Javascript"
                        gitLink="https://github.com/cristianmontenegrop/H12-Employee-Tracker"
                        appLink="https://github.com/cristianmontenegrop/H12-Employee-Tracker"
                        imageSrc={require("../../images/employee-manager-image.png")}
                        imageAlt="Employee Tracker Project" />

                    {/* <!-- Note Taker --> */}
                    <Project
                        title="Note Taker"
                        summary="Note taking web based app"
                        tech="Express, API, MySQL, Javascript "
                        gitLink="https://github.com/cristianmontenegrop/H11-Note-Taker"
                        appLink="https://h11-note-taker.herokuapp.com"
                        imageSrc={require("../../images/note-taker-image.png")}
                        imageAlt="Note Taker Project" />

                    {/* <!-- Template Engine Employee Summary --> */}
                    <Project
                        title="Template Engine Employee Summary"
                        summary="Content Management System, Manage company's employees"
                        tech="Node, Jest, Inquirer, OOP, Javascript, HTML, CSS"
                        gitLink="ttps://github.com/cristianmontenegrop/H10-Template-Engine-Employee-Summary"
                        appLink="https://github.com/cristianmontenegrop/H10-Template-Engine-Employee-Summary"
                        imageSrc={require("../../images/template-engine-employee-summary-image.png")}
                        imageAlt="Template Engine Employee Summary Project" />
                </div>
            </div>
            {/* <!-- Used to create space without adjusting css --> */}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Projects;
