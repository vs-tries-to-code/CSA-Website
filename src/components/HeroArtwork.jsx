import React from "react";
import heroIcon from "../assets/heroIcon.svg";

function HeroArtwork() {
  return (
    <div className="art-card" aria-hidden="true">
      <img src={heroIcon} alt="" />
    </div>
  );
}

export default HeroArtwork;
