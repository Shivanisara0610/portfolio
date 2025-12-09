// src/App.js
import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Journey from "./Journey";
import LifeBeyondCode from "./LifeBeyondCode";
import WrapUp from "./WrapUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">Shivi&apos;s Portfolio</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#journey">My Journey</a>
          <a href="#life">Life Beyond Code</a>
          <a href="#wrap">Wrap</a>
        </nav>
      </header>

      {/* Main pages */}
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

        {/* Last page: full white background + popping envelope */}
        <section id="wrap" className="wrapup-host-section">
          <WrapUp />
        </section>
      </main>
    </div>
  );
}

export default App;
