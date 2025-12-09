// src/Journey.js
import React, { useEffect, useRef } from "react";
import "./Journey.css";

const journeySteps = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "Wrote my first 'Hello World' and fell in love with coding.",
    icon: "💡",
    colorClass: "journey-card-yellow",
    rotationClass: "journey-tilt-left",
  },
  {
    year: "2023",
    title: "Discovery Phase",
    description:
      "Discovered the world of web development and UI/UX design.",
    icon: "🚀",
    colorClass: "journey-card-blue",
    rotationClass: "journey-tilt-right",
  },
  {
    year: "2024",
    title: "Level Up",
    description:
      "Turned small experiments into real mini‑projects, combined JavaScript with cleaner layouts, and learned how to turn ideas into working, shareable web pages.",
    icon: "⚡",
    colorClass: "journey-card-green",
    rotationClass: "journey-tilt-left",
  },
  {
    year: "2025",
    title: "Present Day",
    description:
      "Started building full projects with React, experimented with animations and responsive layouts, and realised how much good UI can change the whole experience.",
    icon: "🏆",
    colorClass: "journey-card-pink",
    rotationClass: "journey-tilt-right",
  },
];

function Journey() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("journey-visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey-section" id="journey">
      <div className="journey-inner">
        <div className="journey-heading-wrap">
          <h2 className="journey-heading-pill">My Journey</h2>
        </div>

        <div className="journey-timeline">
          {/* floating bubbles + stars */}
          <div className="floating-bubble journey-bubble-top-lg" />
          <div className="floating-bubble journey-bubble-top-sm" />
          <div className="floating-bubble journey-bubble-mid" />
          <div className="floating-bubble journey-bubble-bottom-lg" />
          <div className="floating-bubble journey-bubble-bottom-sm" />
            <div className="floating-bubble journey-bubble-left-mid" />
  <div className="floating-bubble journey-bubble-right-mid" />
  <div className="floating-bubble journey-bubble-center-small" />
  <div className="floating-bubble journey-bubble-far-left" />
  <div className="floating-bubble journey-bubble-far-right" />
          <div className="floating-star journey-star-1">✨</div>
          <div className="floating-star journey-star-2">✦</div>
          <div className="floating-star journey-star-3">✶</div>

          {/* center line */}
          <div className="journey-line" />

          <div className="journey-steps">
            {journeySteps.map((step, index) => (
              <div
                key={step.year}
                ref={el => (refs.current[index] = el)}
                className={`journey-step journey-step--${
                  index % 2 === 0 ? "left" : "right"
                } journey-fade`}
              >
                <div
                  className={[
                    "journey-card",
                    step.colorClass,
                    step.rotationClass,
                  ].join(" ")}
                >
                  <div className="journey-card-top">
                    <div className="journey-icon">
                      <span>{step.icon}</span>
                    </div>
                    <div className="journey-year-pill">{step.year}</div>
                  </div>

                  <h3 className="journey-card-title">{step.title}</h3>
                  <p className="journey-card-text">{step.description}</p>
                </div>

                <div
                  className={`journey-connector ${
                    index % 2 === 0
                      ? "journey-connector--right"
                      : "journey-connector--left"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
