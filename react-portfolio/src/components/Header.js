import React from "react";
import resume from "../Javis Resume.pdf";

function Header() {
  return (
    <header>
      <h1 className="main-header">Javis M. Carr</h1>
      <nav>
        <div className="container">
          <div>
            <a href="#aboutMe">About Me</a>

            <a href="#gallery">My Gallery</a>

            <a href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>

            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
