import React from "react";
import contact from "../images/contact.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function Contact() {
  return (
    <section id="contact">
      <article className="info" id="contactInfo">
        <h2>Contact Information</h2>

        <img src={contact} alt="contact me" width="300px" height="150px"></img>

        <p>Javis M. Carr</p>
        <p> Phone: 256-323-1467</p>
        <p> Email: Javis.Carr@gmail.com</p>

        <a
          href="https://github.com/javiscarr"
          className="links"
          alt="link to gitHub"
        >
          <img src={github} id="logo" alt="github" width="20px" height="20px" />
          GitHub Account
        </a>
        <br></br>

        <a
          href="https://www.linkedin.com/in/javis-carr-8a584533/"
          className="links"
          alt="linked"
        >
          <img
            src={linkedin}
            id="logo"
            alt="linkedin"
            width="20px"
            height="20px"
          />
          Linkedin
        </a>
      </article>
    </section>
  );
}

export default Contact;
