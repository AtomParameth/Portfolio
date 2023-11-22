import React from "react";
import "../styles/Contact.css";
import gitHub_logo from "../images/logo/github-logo.svg";
import linkedin_logo from "../images/logo/linkedin-logo.svg";
function Contact() {
  return (
    <div id="Contact" className="contact-container">
      Contact me
      <div className="contact-content">
        <div className="github-logo">
          <a href="https://github.com/AtomParameth" target="_blank">
            <img src={gitHub_logo} alt="github-logo" />
          </a>
        </div>
        <div className="linkedin-logo">
          <a
            href="https://linkedin.com/in/parameth-srisit-4911572a1"
            target="_blank"
          >
            <img src={linkedin_logo} alt="linkedin-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
