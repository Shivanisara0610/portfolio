// src/App.js
import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Journey from "./Journey";
import LifeBeyondCode from "./LifeBeyondCode";
import WrapUp from "./WrapUp";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* responsive navbar (desktop + mobile) */}
      <Navbar />

      <main className="page-root-enter">
        <section id="home" className="page-section">
          <Home />
        </section>

        <section id="about" className="page-section">
          <AboutMe />
        </section>

        <section id="journey" className="page-section">
          <Journey />
        </section>

        <section id="life" className="page-section">
          <LifeBeyondCode />
        </section>

        <section id="wrap" className="wrapup-host-section">
          <WrapUp />
        </section>
      </main>
    </div>
  );
}

export default App;
