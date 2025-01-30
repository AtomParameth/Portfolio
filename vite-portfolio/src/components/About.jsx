import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import profileImage from "../images/profile.jpg";
import { Link } from "react-scroll";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutElement = aboutRef.current;
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  }, []);

  return (
    <div id="About" className="about-container hidden" ref={aboutRef}>
      <div className="about-img">
        <img src={profileImage} alt="profile-img" />
      </div>
      <div className="about-title">About Me</div>
      <div className="about-content">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Parameth Srisit, I am a 4th
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