import React from "react";
import "./Home.css";
import FadeInSection from "./FadeInSection";

import profileImg from "./assets/profile.jpeg";
import doodleBee from "./assets/doodle1.png";
import doodleStars from "./assets/doodle-stars.png";

export default function Home() {
  return (
    <section className="hero" id="home">
      <FadeInSection>
        <div className="hero-inner card">
          <div className="hero-left">
            <img src={doodleBee} alt="bee doodle" className="hero-doodle-top" />

            <p className="hero-kicker">Hey there, I'm</p>
            <h1 className="hero-title">
              Shivani!
              <span className="hero-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>

            <p className="hero-subtitle">
              Student • Frontend Intern • Doodle Fanatic
            </p>
            <p className="hero-body">
              Right now, most of my time goes into learning, experimenting, and
              building small web experiences that feel calm, clear, and a bit
              whimsical. I enjoy taking rough ideas, sketching them in pastel,
              and slowly turning them into interactive pages that actually work.
              Scroll down to see the projects, experiments, and doodles that
              came out of that process.
            </p>

            <div className="hero-tags">
              <span>🎨 Frontend UI</span>
              <span>⚙️ React &amp; JS</span>
              <span>💡 Creative Projects</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-avatar-wrap">
              <img
                src={profileImg}
                alt="Shivani avatar"
                className="hero-avatar"
              />
              <img
                src={doodleStars}
                alt="stars doodle"
                className="hero-doodle-bottom"
              />
            </div>

            <div className="hero-floating-card hero-floating-card-1">
              <span>🧶 Weekend crocheter</span>
            </div>
            <div className="hero-floating-card hero-floating-card-2">
              <span>🧁 Sweet‑tooth baker</span>
            </div>
            <div className="hero-floating-card hero-floating-card-3">
              <span>🌿 Offline adventures</span>
            </div>
          </div>

          {/* floating doodles */}
          <div className="floating-bubble home-bubble-big" />
          <div className="floating-bubble home-bubble-small" />
          <div className="floating-star home-star-1">✨</div>
          <div className="floating-star home-star-2">✦</div>
        </div>
      </FadeInSection>

      <div className="scroll-hint">
        <span>Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}
