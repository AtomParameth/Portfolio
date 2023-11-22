import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/NavigationBar.css";

function NavigationBar() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const handleActiveMenu = (menuId) => {
    const getActived = document.getElementById(menuId);
    if (getActived) {
      setActiveMenu(menuId);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeOffset = document.getElementById("Home").offsetTop - 100;
      const aboutOffset = document.getElementById("About").offsetTop - 90;
      const skillsOffset = document.getElementById("Skills").offsetTop - 120;
      const worksOffset = document.getElementById("Works").offsetTop - 120;
      const contactOffset = document.getElementById("Contact").offsetTop - 86;

      if (scrollPosition >= homeOffset && scrollPosition < aboutOffset) {
        setActiveMenu("Home");
      } else if (
        scrollPosition >= aboutOffset &&
        scrollPosition < skillsOffset
      ) {
        setActiveMenu("About");
      } else if (
        scrollPosition >= skillsOffset &&
        scrollPosition < worksOffset
      ) {
        setActiveMenu("Skills");
      } else if (
        scrollPosition >= worksOffset &&
        scrollPosition < contactOffset
      ) {
        setActiveMenu("Works");
      } else if (scrollPosition >= contactOffset) {
        setActiveMenu("Contact");
      } else {
        setActiveMenu("Home");
      }

      if (scrollPosition > homeOffset) {
        setNavStateActive(true);
      } else {
        setNavStateActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav-state`}>
        <div className="nav-container">
          <div className="nav-con">
            <div className="nav-logo">
              <Link to="Home" smooth={true} duration={500}>
                <h1>Parameth</h1>
              </Link>
            </div>
            <div className="nav-menu">
              <ul>
                <li>
                  <Link
                    to="Home"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className={`menu-btn ${
                      activeMenu === "Home" ? "active" : ""
                    }`}
                    onClick={() => handleActiveMenu("Home")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="About"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`menu-btn ${
                      activeMenu === "About" ? "active" : ""
                    }`}
                    onClick={() => handleActiveMenu("About")}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="Skills"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`menu-btn ${
                      activeMenu === "Skills" ? "active" : ""
                    }`}
                    onClick={() => handleActiveMenu("Skills")}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="Works"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`menu-btn ${
                      activeMenu === "Works" ? "active" : ""
                    }`}
                    onClick={() => handleActiveMenu("Works")}
                  >
                    works
                  </Link>
                </li>
                <li>
                  <Link
                    to="Contact"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`menu-btn ${
                      activeMenu === "Contact" ? "active" : ""
                    }`}
                    onClick={() => handleActiveMenu("Contact")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
