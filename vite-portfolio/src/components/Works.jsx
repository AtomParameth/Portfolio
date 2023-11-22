import React from "react";
import "../styles/Works.css";
import dmeShowCase from "../images/dme-show-case.png";
import masterReview from "../images/master-review.png";
import tankMaster from "../images/tank-master.png";
function Works() {
  return (
    <div id="Works" className="works-container">
      <div className="work-title">
        <h1>Works</h1>
      </div>
      <div className="warpper">
        <div className="card">
          <img src={dmeShowCase} alt="dme-show-case" />
          <div className="info">
            <h1>DME Social</h1>
            <p>
              A social media web application for DME students to share their
              projects and knowledge.
            </p>
            <a
              className="git-btn"
              href="https://github.com/pongsaphakmw/DME-Show-Project.git"
              target="_blank"
            >
              Github Repository
            </a>
          </div>
        </div>
        <div className="card">
          <img src={masterReview} alt="master-review" />
          <div className="info">
            <h1>Master Review</h1>
            <p>
              "Master Review" is driven by the aim of providing a dedicated
              digital space for individuals who possess a passion for discussing
              and analyzing various forms of Entertainment Media, specifically
              Movies, Series, and Books.
            </p>
            <a
              className="git-btn"
              href="https://github.com/AtomParameth/Interactive-Webs-Application-Project-Master-Review-.git"
              target="_blank"
            >
              Github Repository
            </a>
            <a
              className="git-btn"
              href="https://login-master-review.web.app/"
              target="_blank"
            >
              Visit Website
            </a>
          </div>
        </div>
        <div className="card">
          <img src={tankMaster} alt="tank-master" />
          <div className="info">
            <h1>Tank Master</h1>
            <p>
              This game, named Tank Master, thrusts you into the heart of tank
              warfare. Your role is to control various tanks, engage in battles,
              and destroy enemy tanks to earn points. Each type of tank
              contributes to your score in unique ways.<br></br>
              <br></br>
              You can try to play this game by download in the link below.
            </p>
            <a
              className="git-btn"
              href="https://drive.google.com/drive/folders/1VYcKps7erBkv5jqOegJZ5tHU2fDVmMep?usp=sharing"
              target="_blank"
            >
              Download Game
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
