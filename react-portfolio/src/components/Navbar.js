import React, { useState } from "react";

export default function Navbar(props) {
  return (
    <header>
      <div>
        <h1 className="main-header">Javis M. Carr</h1>
      </div>
      <ul>
        <a href="#aboutMe">About Me</a>
        <a href="#gallery">My Gallery</a>
        <a href="#contact">Contact</a>
      </ul>
    </header>
  );
}
