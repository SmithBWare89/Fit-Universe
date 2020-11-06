import React from 'react'
import "../index.css";
import yoga from "./videos/yoga.mp4";




function HeroSection() {
    return (
      <div className="hero-container">
        <video src={yoga} autoPlay loop muted type="video/mp4" />
        <h1>FIT UNIVERSE</h1>
        <p></p>
        <div className="hero-btns">
          <button className="ui inverted secondary basic button" >
            GET STARTED
          </button>
        </div>
      </div>
    );
}

export default HeroSection
