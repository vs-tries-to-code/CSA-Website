import React from "react";
import LogoMark from "./components/LogoMark";
import TargetIcon from "./components/TargetIcon";
import HeroArtwork from "./components/HeroArtwork";
import "./styles.css";

const navItems = [
  "About",
  "Gallery",
  "Achievements",
  "Placements",
  "Resources",
];

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar" aria-label="Primary">
        <a
          className="brand"
          href="#"
          aria-label="Computer Science Association CET home"
        >
          <LogoMark />
        </a>

        <nav className="nav-pills" aria-label="Section navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-pill">
              {item}
            </a>
          ))}
        </nav>

        <a
          className="target-link"
          href="#resources"
          aria-label="Jump to resources"
        >
          <TargetIcon />
        </a>
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
