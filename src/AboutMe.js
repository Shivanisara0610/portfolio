import React from "react";
import "./AboutMe.css";
import profileImg from "./assets/profile1.jpeg";
import doodleBg from "./assets/bg.jpg";

function AboutMe() {
  return (
    <section className="page-section" id="about">
      <div
        className="about-shell"
        style={{ backgroundImage: `url(${doodleBg})` }}
      >
        <div className="card about-card">
          <div className="floating-bubble about-bubble-left" />
          <div className="floating-bubble about-bubble-right" />
          <div className="floating-star about-star-1">✨</div>
          <div className="about-photo-wrap">
            <div className="about-polaroid">
              <div className="about-polaroid-heart">❤</div>
              <img
                src={profileImg}
                alt="Shivi smiling outdoors"
                className="about-photo"
              />
              <div className="about-polaroid-caption">✨</div>
            </div>
          </div>
          <div className="about-content">
            <h2 className="about-heading">About Me</h2>

            <p className="about-intro">
              Hi, I&apos;m Shivani! Hi, A student who loves building soft, playful interfaces and learning how tiny design decisions can change how people feel on a page.</p>

            <p className="about-body">
              Most days you’ll find me balancing lectures, projects, and late‑night debugging sessions. I enjoy breaking big concepts into small experiments, turning class ideas into little web projects, and learning by actually shipping things instead of just reading about them.
            </p>

            <p className="about-body">
              Alongside college, I’ve been exploring frontend development through an internship and personal projects. I work mainly with React and modern CSS, focusing on clean layouts, responsive design, and small interactions that make a UI feel friendly rather than overwhelming.
            </p>

            <div className="about-tech">
              <h3 className="about-tech-title">My Toolkit</h3>
              <div className="about-tech-chips">
                <span className="chip-react">React &amp; JavaScript</span>
                <span className="chip-html">HTML &amp; CSS</span>
                <span className="chip-ts">TypeScript</span>
                <span className="chip-python">Python</span>
                <span className="chip-ml">Machine Learning</span>
                <span className="chip-node">Node &amp; Express</span>
                <span className="chip-git">Git &amp; GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
