import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import { Controller, Scene } from 'react-scrollmagic';

function App() {
  // document.addEventListener("DOMContentLoaded", function () {
  //   const controller = new ScrollMagic.Controller({
  //     globalSceneOptions: {
  //       duration: 1050
  //     }
  //   });

  //   const portScene = new ScrollMagic.Scene({
  //     triggerElement: "#portfolio"
  //   })
  //     .setClassToggle("#port-nav", "highlight") // add class toggle
  //     .addTo(controller);
  //   const aboutScene = new ScrollMagic.Scene({
  //     triggerElement: "#about-me"
  //   })
  //     .setClassToggle("#about-nav", "highlight") // add class toggle
  //     .addTo(controller);
  //   const contactScene = new ScrollMagic.Scene({
  //     triggerElement: "#contact"
  //   })
  //     .setClassToggle("#contact-nav", "highlight") // add class toggle
  //     .addTo(controller);
  // })

  return (
    <div>
      <Navbar />
      <Router>

        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
