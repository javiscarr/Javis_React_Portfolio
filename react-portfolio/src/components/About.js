import React from "react";
import chicago from "../../src/images/chicago.jpg";

function About() {
  return (
    <section id="aboutMe">
      <div id="myImage"></div>
      <img src={chicago} alt="Javis in Chicago" className="card-img-top" />
      <div id="myContent">
        <h2>About Me</h2>
        <p>Hello, I'm Javis </p>
        <p>
          Most of my life I've dreamed of someday having a career in technology.
          After completing high school, I attended Alabama A&M University where
          I graduated in 2012 with a Bachelor's Degree in Industrial Technology
          with a concentration on Graphics and Imaging Technology. Every since I
          was a small child, I have been fascinated with the ins and outs of
          technology and it's been an ever growing passion of mine to someday
          gain all the experience that I would need to grow my expertise.
        </p>

        <p>
          So, I decided the time is now to take a dive into that arena and aim
          towards my vision. My creative spirit and technologically advanced
          skills are the key components that are keeping me focused and driven
          to complete this milestone.
        </p>

        <p>
          It is my pleasure to welcome you to my page and hope that you would
          find joy in some of the work that I've shared here. Thank you for
          visiting!
        </p>

        <p>-Javis</p>
      </div>
    </section>
  );
}

export default About;
