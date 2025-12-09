import React from "react";
export default function Gallery() {
  return (
    <section className="gallery section-crafty">
      <h2>Life Beyond the Code</h2>
      <div className="gallery-cards">
        <div className="gallery-card">
          <h3>Tech Moments</h3>
          <p>Coding jams, “Euraka!” nights & mini-project wins.</p>
        </div>
        <div className="gallery-card">
          <h3>Crafty Vibes</h3>
          <p>Notebook doodles, handmade meme stickers, and art breaks.</p>
        </div>
        <div className="gallery-card">
          <h3>Student Adventures</h3>
          <p>Cafe study sessions, last-minute hackathons, and group selfies!</p>
        </div>
      </div>
    </section>
  );
}
