import React from "react";
import "../styles/Home.css";
import NavigationBar from "./NavigationBar";
import { Link } from "react-scroll";
function Home() {
  return (
    <>
      <NavigationBar />
      <div id="Home" className="home-container">
        <div className="home-text">
          <h1 className="type-writer">Hi, I'm Parameth Srisit</h1>
          <Link to="About" smooth={true} offset={-80} duration={500}>
            <button className="knowMe">get to know me</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
