import React, { useState } from "react";
import "./WrapUp.css";

function WrapUp() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const socialLinks = [
    {
      label: "GitHub",
      emoji: "🐙",
      href: "https://github.com/Shivanisara0610",
    },
    {
      label: "LinkedIn",
      emoji: "💼",
      href: "https://www.linkedin.com/in/your-linkedin-id",
    },
    {
      label: "Twitter",
      emoji: "🐦",
      href: "https://twitter.com/your-handle",
    },
    {
      label: "Email",
      emoji: "📧",
      href: "mailto:shivanisara6@email.com",
    },
  ];

  return (
    <section className="wrapup-section" id="wrap">
      <div className="wrapup-inner">
        <h2 className="wrapup-title-small">Let&apos;s Create Something Amazing!</h2>
        <p className="wrapup-subtitle-small">
          Thanks for scrolling through my pastel doodle portfolio. Whether you
          want to collaborate, chat about tech, or just say hi, it would be
          great to connect. 🎨
        </p>
        <div className="wrapup-main">
          <div
            className="wrapup-left"
            onClick={() => setIsEnvelopeOpen((prev) => !prev)}
          >
            <div className="wrapup-sparkle wrapup-sparkle--top">✨</div>
            <div className="wrapup-sparkle wrapup-sparkle--bottom">✨</div>

            <div className="wrapup-envelope-wrapper">
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
                  <span>- Shivani</span>
                </div>
              </div>
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
          <div className="wrapup-right">
            <div className="wrapup-panel">
              <h3 className="wrapup-panel-title">Get In Touch 📬</h3>

              <div className="wrapup-social-row">
  {socialLinks.map((link) => (
    <a
      key={link.label}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="wrapup-social-btn"
    >
      <span className="wrapup-social-emoji">{link.emoji}</span>
      {link.label}
    </a>
  ))}
</div>

              <div className="wrapup-email-box">
                <p>Or drop a quick message:</p>
                <div className="wrapup-email-row">
                  <input
                    type="email"
                    placeholder="shivanisara6@email.com"
                    className="wrapup-input"
                  />
                  <button className="wrapup-send-btn">➤</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapup-footer">
          <div className="wrapup-badge">
            Made with ❤️ and lots of ☕
          </div>
          <p className="wrapup-copy">
            © 2025 Portfolio. Keep creating, keep doodling! ✨
          </p>
        </div>
        <div className="wrapup-float wrapup-float--left" />
        <div className="wrapup-float wrapup-float--right" />
      </div>
    </section>
  );
}

export default WrapUp;
