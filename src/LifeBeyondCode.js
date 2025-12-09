
import React, { useState } from "react";
import "./LifeBeyondCode.css";

import Photo1 from "./assets/life1.jpg";
import Photo2 from "./assets/life2.jpeg";
import Photo3 from "./assets/life3.jpeg";
import Photo4 from "./assets/life4.jpeg";
import Photo5 from "./assets/life5.jpeg";
import Photo6 from "./assets/life6.jpeg";

function LifeBeyondCode() {
  const [frame, setFrame] = useState(0); 

  const photos = [
    {
      src: Photo1,
      alt: "Crochet setup",
      caption: "Crochet nights with yarn and playlists.",
    },
    {
      src: Photo2,
      alt: "Crochet piece",
      caption: "Tiny projects slowly growing stitch by stitch.",
    },
    {
      src: Photo3,
      alt: "Pottery in progress",
      caption: "Messy hands, spinning clay, and slowly learning the rhythm of the wheel.",
    },
    {
      src: Photo4,
      alt: "Trying Embroidery",
      caption: "SQuiet embroidery sessions turning tiny stitches into colourful patterns.",
    },
    {
      src: Photo5,
      alt: "Photo walk",
      caption: "Tiny walks, tiny photos, big resets.",
    },
    {
      src: Photo6,
      alt: "......",
      caption: "Collecting everyday moments for my gallery.",
    },
  ];

  const totalFrames = Math.ceil(photos.length / 2); 

  const goNext = () => {
    setFrame((prev) => (prev + 1) % totalFrames);
  };

  const goPrev = () => {
    setFrame((prev) => (prev - 1 + totalFrames) % totalFrames);
  };

  const currentCaption = photos[frame * 2].caption;

  return (
    <section className="life-section" id="life">
      <div className="life-card">
        <h2 className="life-title">Life Beyond Code</h2>
         <p className="life-intro">
    When I&apos;m not studying or coding, you&apos;ll probably find me crocheting,
    trying new dessert recipes, or wandering around to try new things.
  </p>
        <div className="life-carousel">
          <button
            className="life-arrow life-arrow-left"
            onClick={goPrev}
            aria-label="Previous photos"
          >
            ‹
          </button>

          <div className="life-frame">
            <div
              className="life-track"
              style={{ transform: `translateX(-${frame * 100}%)` }}
            >
              {photos.map((p, idx) => (
                <div className="life-photo" key={idx}>
                  <img src={p.src} alt={p.alt} />
                  <span className="life-polaroid-label">{p.alt}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            className="life-arrow life-arrow-right"
            onClick={goNext}
            aria-label="Next photos"
          >
            ›
          </button>
        </div>
        <div className="life-mood-block">
          <div className="life-mood-top">
            <span className="life-mood-label">Snapshot:</span>
            <span className="life-mood-label-strong">
              {frame + 1} / {totalFrames}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max={totalFrames - 1}
            step="1"
            value={frame}
            className="life-mood-slider"
            onChange={(e) => setFrame(Number(e.target.value))}
          />

          <p className="life-mood-text">{currentCaption}</p>
        </div>
      </div>
    </section>
  );
}

export default LifeBeyondCode;
