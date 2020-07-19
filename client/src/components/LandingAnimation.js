import React from "react";
import "./LandingAnimation.css";
import LogoSVG from "../images/logo.svg";

function Logo() {
  return (
    <img
      style={{ height: "12vw", margin: 0, marginTop: "5vh" }}
      src={LogoSVG}
    />
  );
}

export default function LandingAnimation() {
  return (
    <div className="LandingAnimation">
      <Logo />
    </div>
  );
}
