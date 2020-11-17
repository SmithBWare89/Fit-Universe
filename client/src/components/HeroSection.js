import React from "react";
 import "../index.css";
 import yoga2 from "./videos/yoga2.mp4";
 import { Button } from "semantic-ui-react";



function HeroSection() {


    return (
      <div className="hero-container">
        <video src={yoga2} autoPlay loop muted playsinline type="video/mp4" />
        <h1>FIT UNIVERSE</h1>
        <p></p>
        <div className="hero-btns">
          <Button size="huge" className="ui inverted secondary basic button ">
            <a  href="/login">
              {" "}
              GET STARTED
            </a>
          </Button>
        </div>
      </div>
    );
}

export default HeroSection
