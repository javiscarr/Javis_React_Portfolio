import React from "react";
import { projects } from "../data.js";
import {thrve} from "../images/thve.jpg";

function Projects() {
  return (
    <section id="myGallery" className="gallery">


<div id="gallery">
    <h2>My Gallery</h2>
    <p>Take a dive into some of the creative work I've recently done.</p>
</div>


<div id="galleryArea">

<section>

    <div class="container">

      <div class="row">
        <div class="column">
          <div class="contents">
            <h3>THRVE Application</h3>
            <h5>Click image for deployed application</h5>
            <a href="https://thrve-app.herokuapp.com/login" alt="THRiVE">
              <img src={thrve} alt="THRiVE App" style="width:100%">
            </a>


            <a href="https://github.com/jesshaff/thrve-app" class="repository">
              <h3>GitHub Repository</h3>
            </a>
          </div>
         </div>
    </div>
</section>


    
   
   
  );
}

export default Project;