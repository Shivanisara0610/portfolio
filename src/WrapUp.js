// src/WrapUp.js
import React, { useState } from "react";
import "./WrapUp.css";

function WrapUp() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const socialLinks = [
    { label: "GitHub", emoji: "🐙" },
    { label: "LinkedIn", emoji: "💼" },
    { label: "Twitter", emoji: "🐦" },
    { label: "Email", emoji: "📧" },
  ];

  return (
    <section className="wrapup-section" id="wrap">
      <div className="wrapup-inner">
        {/* top text (smaller) */}
        <h2 className="wrapup-title-small">Let&apos;s Create Something Amazing!</h2>
        <p className="wrapup-subtitle-small">
          Thanks for scrolling through my pastel doodle portfolio. Whether you
          want to collaborate, chat about tech, or just say hi, it would be
          great to connect. 🎨
        </p>

        {/* two-column content */}
        <div className="wrapup-main">
          {/* LEFT: envelope + letter */}
          <div
            className="wrapup-left"
            onClick={() => setIsEnvelopeOpen((prev) => !prev)}
          >
            <div className="wrapup-sparkle wrapup-sparkle--top">✨</div>
            <div className="wrapup-sparkle wrapup-sparkle--bottom">✨</div>

            <div className="wrapup-envelope-wrapper">
              {/* letter */}
              <div
                className={
                  "wrapup-letter " +
                  (isEnvelopeOpen ? "wrapup-letter--open" : "")
                }
              >
                <div className="wrapup-letter-header">
                  <span className="wrapup-letter-heart">❤</span>
                  <span className="wrapup-letter-tag">A note for you</span>
                </div>
                <p>Heyyy there! 👋</p>
<p>
  You scrolled all the way here, which officially makes you part of the
  “finished the portfolio” elite club. 🏅
</p>
<p>
  I spend an unhealthy amount of time matching pastel colours, obsessing
  over tiny hover states, and occasionally talking to my CSS. If that
  sounds like your kind of chaos, we should definitely chat.
</p>
                <div className="wrapup-letter-signoff">
                  <span>- your friendly developer</span>
                </div>
              </div>

              {/* envelope body */}
              <div className="wrapup-envelope">
                <div className="wrapup-envelope-back" />
                <div
                  className={
                    "wrapup-envelope-flap " +
                    (isEnvelopeOpen ? "wrapup-envelope-flap--open" : "")
                  }
                >
                  <div className="wrapup-envelope-heart">❤</div>
                </div>

                <div className="wrapup-envelope-lines">
                  <div />
                  <div />
                  <div />
                </div>

                {!isEnvelopeOpen && (
                  <div className="wrapup-click-hint">Click to open! 👆</div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: contact panel */}
          <div className="wrapup-right">
            <div className="wrapup-panel">
              <h3 className="wrapup-panel-title">Get In Touch 📬</h3>

              <div className="wrapup-social-row">
                {socialLinks.map((link) => (
                  <button key={link.label} className="wrapup-social-btn">
                    <span className="wrapup-social-emoji">{link.emoji}</span>
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="wrapup-email-box">
                <p>Or drop a quick message:</p>
                <div className="wrapup-email-row">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="wrapup-input"
                  />
                  <button className="wrapup-send-btn">➤</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom badge */}
        <div className="wrapup-footer">
          <div className="wrapup-badge">
            Made with ❤️ and lots of ☕
          </div>
          <p className="wrapup-copy">
            © 2025 Portfolio. Keep creating, keep doodling! ✨
          </p>
        </div>

        {/* floating shapes */}
        <div className="wrapup-float wrapup-float--left" />
        <div className="wrapup-float wrapup-float--right" />
      </div>
    </section>
  );
}

export default WrapUp;
