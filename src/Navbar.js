// src/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          Shivani's Portfolio<span>✨</span>
        </a>

        {/* desktop links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#journey">My Journey</a>
          <a href="#life">Life Beyond Code</a>
          <a href="#wrap">Wrap</a>
        </nav>

        {/* mobile hamburger */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={handleToggle}
        >
          <span className={isOpen ? "bar bar-top open" : "bar bar-top"} />
          <span className={isOpen ? "bar bar-middle open" : "bar bar-middle"} />
          <span
            className={isOpen ? "bar bar-bottom open" : "bar bar-bottom"}
          />
        </button>
      </div>

      {/* mobile dropdown */}
      <nav className={isOpen ? "nav-mobile nav-mobile-open" : "nav-mobile"}>
        <a href="#home" onClick={handleLinkClick}>
          Home
        </a>
        <a href="#about" onClick={handleLinkClick}>
          About Me
        </a>
        <a href="#journey" onClick={handleLinkClick}>
          My Journey
        </a>
        <a href="#life" onClick={handleLinkClick}>
          Life Beyond Code
        </a>
        <a href="#wrap" onClick={handleLinkClick}>
          Wrap
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
