import React from "react";

function Header() {
  return (
    <header>
      <h1 className="main-header">Javis M. Carr</h1>
      <nav>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="main-nav-collapse"
          >
            <a href="#aboutMe">About Me</a>

            <a href="#myGallery">My Gallery</a>

            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
