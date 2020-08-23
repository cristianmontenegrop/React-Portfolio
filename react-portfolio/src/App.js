import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from "./pages/Portfolio"
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
    <Portfolio />
  );
}

export default App;