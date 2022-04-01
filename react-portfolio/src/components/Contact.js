import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Information</h2>
      <img
        src="assets/images/contact.png"
        alt="contact me"
        width="300px"
        height="150px"
      ></img>
      <ul className="d-flex flex-row justify-content-center">
        <a
          href="https://github.com/javicarr"
          className="m-2 text-decoration-none"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/javis-carr-8a584533/"
          className="m-2 text-decoration-none"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:javis.carr@gmail.com"
          className="m-2 text-decoration-none"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </ul>
    </section>
  );
}
