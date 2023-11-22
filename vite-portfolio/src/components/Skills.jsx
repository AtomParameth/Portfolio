import React from "react";
import "../styles/Skills.css";
import html_logo from "../images/logo/html-logo.svg";
import css_logo from "../images/logo/css-logo.svg";
import javascript_logo from "../images/logo/javascript-logo.svg";
import react_logo from "../images/logo/react-logo.svg";
import tailwindcss_logo from "../images/logo/tailwindcss-logo.svg";
import firebase_logo from "../images/logo/firebase-logo.svg";
import unity_logo from "../images/logo/unity-logo.svg";
import figma_logo from "../images/logo/figma-logo.svg";
function Skills() {
  return (
    <div id="Skills" className="skill-container">
      <div className="skill-title">
        <h1>Skills</h1>
      </div>
      <div className="skill-content">
        <div className="skill-card">
          <img src={html_logo} alt="html-logo" />
          <h1>HTML</h1>
        </div>
        <div className="skill-card">
          <img src={css_logo} alt="css-logo" />
          <h1>CSS</h1>
        </div>
        <div className="skill-card">
          <img src={javascript_logo} alt="javascript-logo" />
          <h1>Javascript</h1>
        </div>
        <div className="skill-card">
          <img src={react_logo} alt="react-logo" />
          <h1>React</h1>
        </div>
        <div className="skill-card">
          <img src={tailwindcss_logo} alt="tailwindCss-logo" />
          <h1>Tailwind CSS</h1>
        </div>
        <div className="skill-card">
          <img src={firebase_logo} alt="firebase-logo" />
          <h1>Firebase</h1>
        </div>
        <div className="skill-card">
          <img src={unity_logo} alt="unity-logo" />
          <h1>Unity</h1>
        </div>
        <div className="skill-card">
          <img src={figma_logo} alt="figma-logo" />
          <h1>Figma</h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
