import React from "react";
import "../styles/About.css";
import profileImage from "../images/profile.jpg";
import { Link } from "react-scroll";
function About() {
  return (
    <div id="About" className="about-container">
      <div className="about-img">
        <img src={profileImage} alt="profile-img" />
      </div>
      <div className="about-title">About Me</div>
      <div className="about-content">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Parameth Srisit, I am a 3rd
        year student at Khon Kaen University, Faculty of engineering department
        of digital media engineering.
      </div>
      <div className="about-content2">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am interested in web development and web
        design and i am actively seeking opportunities to further enhance my
        skills.
      </div>
      <div className="navi-to-work">
        <Link to="Works" smooth={true} offset={-80} duration={500}>
          <button className="navi-to-work-btn">See my works</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
