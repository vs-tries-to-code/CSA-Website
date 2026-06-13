import React, { useState } from "react";

import TargetIcon from "./components/TargetIcon";
import HeroArtwork from "./components/HeroArtwork";
import csaLogo from './assets/csa_logo.svg'
import "./styles.css";


const navItems = [
  "About",
  "Gallery",
  "Achievements",
  "Placements",
  "Resources",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <div
        className={`menu-overlay ${isMenuOpen ? "is-visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header className="topbar" aria-label="Primary">
        <img
          src={csaLogo}
          className="brand"
          href="#"
          aria-label="Computer Science Association CET home"
        />
          
        

        <nav
          className={`nav-pills ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Section navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-pill"
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <a
            className="target-link"
            href="#resources"
            aria-label="Jump to resources"
          >
            <TargetIcon />
          </a>

          <button
            className={`menu-toggle ${isMenuOpen ? "is-active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <h1 className="home-h1">
            COMPUTER
            <br />
            SCIENCE &amp;
            <br />
            ENGINEERING
          </h1>

          <p>
            A central space for students, faculty and alumni to stay connected
            with the department, access resources, opportunities and updates.
          </p>

          <a className="cta" href="#about">
            Explore <span aria-hidden="true">→</span>
          </a>
        </div>

        <HeroArtwork />
      </section>
    </main>
  );
}

export default App;
