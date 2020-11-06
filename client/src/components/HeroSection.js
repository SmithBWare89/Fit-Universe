import React from 'react'
import "../index.css";
import video from "../components/videos/yoga.mp4";

function HeroSection() {
    return (
      <div className="hero-container">
        <video src={video} autoPlay loop muted />
        <h1>FIT UNIVERSE</h1>
        <p></p>
        <div className="hero-btns">
          <button class="ui black basic button">GET STARTED</button>
        </div>
      </div>
    );
}

export default HeroSection
